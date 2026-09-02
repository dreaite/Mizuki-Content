---
title: 'EOA向けEVMウォレットのログイン画面'
published: 2026-06-08
updated: 2026-06-09
description: 'React/wagmi製のEVMウォレットログインを例に、接続、サーバー発行nonce、SIWEメッセージ、署名、バックエンドでのアドレス復元を追い、アドレス接続と管理権の証明を分ける理由を解説します。'
image: 'https://r2.dreaife.tokyo/notion/covers/3795465cca1780d29cb9f993bf218d10/2026%E5%B9%B46%E6%9C%889%E6%97%A5_01_09_11.png'
tags: ['web3', 'wallet']
category: '开荒'
draft: false
lang: 'ja'
---

以下は筆者の現時点での理解にすぎません。

=====================

最近、主にフロントエンドで構成されたEOAウォレットのログイン[画面](https://web3wallet-login.block.dreaifehebi.com/)を作りました。ブロックチェーン開発に触れる第一歩になっただけでなく、EVMが実際にどのように動作するのかを知る機会にもなりました。

::github{repo="dreaifeHebi/web3WalletLogin"}

![](https://r2.dreaife.tokyo/notion/covers/3795465cca1780d29cb9f993bf218d10/inline/0d7ea32d51521748-image.png)

# 一度のウォレットログイン

一度とはいっても、実際にはウォレット側での確認を必要とするやり取りが2回あります。1回目は、ページから要求されたウォレットアドレスの取得を確認するものです。2回目は、サーバー側が認証用メッセージ、呼び出し元ドメイン、nonceなどをプロトコルに準拠した構造に含め、そのメッセージをウォレットへ送信して検証を要求するものです（現在使用している構造は[EIP-4361](https://eips.ethereum.org/EIPS/eip-4361)を模倣しています。ただ、個人的にはUIや追跡可能性を重視した設計という印象があり、実際にはnonceだけでもリクエストの混同を防げるはずです）。

なぜ検証を始める前にウォレットアドレスを取得する必要があるのでしょうか。おそらく、ブラウザとウォレットのどちらも信頼できないものとして扱われるためです。両者の間で直接やり取りされるデータがすべて信頼できないと考えるなら、ウォレットによって確認されたアドレスだけが信頼でき、その後で次のウォレット検証へ進めることになります。

# このウォレットを管理しているのは私です！

## あなたのウォレットアドレスは何ですか？

ここでは、Webサイトに提供することを許可するウォレットアドレスを選択するために、ブラウザとウォレットの間でやり取りが行われます。

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

ここでもwagmiのuseAccountを通じて、ウォレットでの確認後に更新された情報を自動的に取得しています。

## では、そのウォレットは本当にあなたのものですか？

### この情報を証明してもらう必要があります

検証対象のアドレスが分かれば、標準プロトコルであるSIWE（Sign-In with Ethereum）に準拠したログイン署名メッセージを用意できます。形式はおおよそ次のようになります。

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

次に、このメッセージをEIP-191に従って標準化し、ほかの署名や通常のトランザクションと区別します。

`"\x19Ethereum Signed Message:\n" + len(message) + message`

実装では、wagmiのsignMessageAsyncを使ってウォレットへ実際の認証リクエストを送信しています。

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

### この証明は私の秘密鍵でしか作れません

このメッセージが認証リクエストとしてウォレットに届くと、ウォレットは自身の署名によって、先ほど提供したアドレスを管理していることを証明する必要があります。そのため、受け取った情報のハッシュに自身の秘密鍵で署名すると同時に、ウォレットアドレスとリクエストメッセージしか知らないWebサイトでも、その署名を検証できるようにしなければなりません。この検証方法の妥当性は、一連の数学的変換によって保証されます。とはいえ、ここではまずwagmiのアルゴリズムを使って、返されたsignを検証しているだけです（

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

では、実際の検証計算はどうなっているのでしょうか？

そのためには、EOAウォレットの署名に使われるsecp256k1曲線を見る必要があります。EOAウォレットの構成は、おおよそ次のとおりです。

- EOAの秘密鍵：約256-bitの乱数 d
- 公開鍵：楕円曲線上の点 Q = d \* G
- アドレス：keccak256(publicKey) の末尾20バイト
- 署名：secp256k1上のECDSA

> とはいえ、私自身もこのあたりの実際の計算はあまり理解できていません（。ただ、署名とmessage hashから得られる公開鍵Qを使って秘密鍵dを逆算できないのは、およそ$2^{128}$級の計算量（secp256k1は256bit級の曲線）が必要となる$Q = d * G$の楕円曲線離散対数問題を解かなければならないから、という程度には理解しています。

最終的には、返されたsign（$r + s  + v$）と送信したmessage hashから公開鍵を復元し、そこからアドレスを計算します。このアドレスが先ほど提供されたアドレスと一致すれば、そのウォレットがこのアドレスを管理していることを証明できます。

# おわりに

実際のブロックチェーン開発を始める第一歩としては、だいたいこのようなところでしょうか。正直なところ、秘密鍵による署名や署名の復元処理を見ていると、昔acmを学んでいた頃を少し思い出しました（

ただ、ブロックチェーン学習の入り口となるプロジェクトとしてはちょうどよく、学習への意欲も高まりました。
