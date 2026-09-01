---
title: 'EOA向けEVMウォレットのログイン画面'
published: 2026-06-08
updated: 2026-06-09
description: 'React/wagmi製のEVMウォレットログインを例に、接続、サーバー発行nonce、SIWEメッセージ、署名、バックエンドでのアドレス復元を追い、アドレス接続と管理権の証明を分ける理由を解説します。'
image: 'https://r2.dreaife.tokyo/notion/covers/3795465cca1780d29cb9f993bf218d10/2026%E5%B9%B46%E6%9C%889%E6%97%A5_01_09_11.png'
tags: ['web3', 'wallet']
category: 'EXPLORE'
draft: false
lang: 'ja'
---

以下は、あくまで筆者の現時点での理解です。

=====================

最近、主にフロントエンドで構成されたEOAウォレットのログイン[画面](https://web3wallet-login.block.dreaifehebi.com/)を作りました。ブロックチェーン開発に触れる最初の一歩であり、EVMが実際にどのように動作するのかを知る機会にもなりました。

::github{repo="dreaifeHebi/web3WalletLogin"}

![](https://r2.dreaife.tokyo/notion/covers/3795465cca1780d29cb9f993bf218d10/inline/0d7ea32d51521748-image.png)

# 1回のウォレットログイン

1回とはいっても、実際にはウォレットによる確認が2回必要です。1回目は、ページからウォレットアドレスの取得を要求する際の確認です。2回目は、サーバー側で認証メッセージ、呼び出し元ドメイン、nonceなどを含むプロトコル準拠のmessageを作成し、ウォレットへ送信して検証を求める際の確認です（現在の構造は[EIP-4361](https://eips.ethereum.org/EIPS/eip-4361)を模倣しています。ただ、個人的にはUIや追跡可能性を重視した設計という側面が強く、実際にはnonceだけでもリクエストの混同を防げるのではないかと感じています）。

なぜ、検証を始める前にウォレットアドレスを取得する必要があるのでしょうか。おそらく、ブラウザとウォレットのどちらも信頼できないことが前提にあるからです。両者の間で直接やり取りされるデータがすべて信頼できないと考えるなら、ウォレットによって確認されたアドレスだけが信頼でき、それから次のウォレット検証へ進めることになります。

# このウォレットを管理しているのは私だ！

## あなたのウォレットアドレスは？

これはブラウザとウォレットの間で行われるやり取りで、どのウォレットアドレスを選択し、Webサイトへの提供を許可するかを確認するためのものです。

このプロジェクトでは、実際にwagmiのconnectを使ってウォレットとのやり取りを要求しています。

```typescript
// wagmi config
export const wagmiConfig = createConfig({
  ...,
  connectors: [injected({ shimDisconnect: true })],
  ...
});

// get wagmi injected connector
const injectedConnector = useMemo(
    () => connectors.find((connector) => connector.id === "injected") ?? connectors[0],
    [connectors]
  );
// connect wallet
connect({ connector: injectedConnector });

// auto get wallet connect info
const { address, chainId, isConnected } = useAccount();
```

ここでもwagmiのuseAccountを使い、ウォレットによる確認後に更新された情報を自動的に取得しています。

## では、そのウォレットは本当にあなたのものですか？

### この情報を認証してもらう必要がある

認証対象となるアドレスが分かったので、標準プロトコルであるSIWE（Sign-In with Ethereum）に準拠したログイン署名用messageを用意できます。形式はおおよそ次のようになります。

```plain text
localhost:3000 wants you to sign in with your Ethereum account:
0xYourWalletAddress

Sign in to web3walletLogin with this wallet.

URI: http://localhost:3000
Version: 1
Chain ID: 1
Nonce: <server-issued nonce>
Issued At: <generated timestamp>
```

続いて、このmessageをEIP-191に従って標準化し、ほかの署名や通常のトランザクションと区別します。

`"\x19Ethereum Signed Message:\n" + len(message) + message`

ここではwagmiのsignMessageAsyncを使い、ウォレットへ実際の認証リクエストを送信しています。

```typescript
const { signMessageAsync, isPending: isSigning } = useSignMessage();

// make a siwe message
const siweMessage = new SiweMessage({
      domain: window.location.host,
      address,
      statement: "Sign in to web3walletLogin with this wallet.",
      uri: siteOrigin,
      version: "1",
      chainId,
      nonce
    });
const preparedMessage = siweMessage.prepareMessage();
// send sign request to wallet
const signature = await signMessageAsync({ message: preparedMessage });
```

### これは自分の秘密鍵でしか作れない証明

このmessageが認証リクエストとしてウォレットに届くと、ウォレットは、自身の署名によって先ほど提示したアドレスを管理していることを証明できるようにする必要があります。そのため、ウォレットは自身の秘密鍵を使って、送られてきた情報のハッシュに署名します。同時に、その署名はウォレットアドレスとリクエストmessageしか知らないWebサイトでも検証できなければなりません。この検証方法の妥当性は一連の数学的変換によって保証されていますが、ここではひとまずwagmiのアルゴリズムを使って返されたsignを検証しています（

```typescript
// use the message (the client send) and sign(the wallet back)
const verifyResponse = await fetch("/api/auth/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: preparedMessage, signature })
    });

// sign message verify
const siwe = new SiweMessage(body.message);
const result = await siwe.verify({
    signature: body.signature,
    domain: expectedDomain,
    nonce: siwe.nonce
  });

// the fail result
if (!result.success) {
    return NextResponse.json({ error: "invalid signature" }, { status: 401 });
  }
```

では、実際の検証計算はどうなっているのでしょうか。

そこで登場するのが、EOAウォレットの署名に使われるsecp256k1曲線です。EOAウォレットでは、おおよそ次のようになっています。

- EOAの秘密鍵：約256-bitの乱数 d
- 公開鍵：楕円曲線上の点 Q = d \* G
- アドレス：keccak256(publicKey) の末尾20バイト
- 署名：secp256k1を用いたECDSA

> とはいえ、実はこのあたりの具体的な計算については、私もあまり理解できていません（。ただし、署名とメッセージハッシュから得られる公開鍵Qから秘密鍵dを逆算できないのは、約$2^{128}$級の計算量（secp256k1は256bit級の曲線）を要する$Q = d * G$の楕円曲線離散対数問題を解かなければならないため、ということはおおよそ理解しています。

このように、最終的には返されたsign（$r + s  + v$）と送信したメッセージハッシュから公開鍵を復元し、その公開鍵からアドレスを計算します。このアドレスが先ほど提示されたアドレスと一致すれば、そのウォレットがそのアドレスを管理していることを証明できます。

# おわりに

実際のブロックチェーン開発を始める第一歩としては、だいたいこのようなところでしょうか。正直なところ、秘密鍵による署名や署名からの復元処理を見ていると、かつてACMを学んでいた頃を少し思い出しました（

ただ、入口となるプロジェクトとしてはちょうどよく、ブロックチェーンを学びたいという興味も高まりました。
