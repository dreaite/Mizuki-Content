---
title: 'EOA向けのEVMウォレットログイン画面'
published: 2026-06-08
updated: 2026-06-09
description: '本ブログでは、フロントエンドで実装した EOA（Externally Owned Account）ウォレットのログイン画面について、全体のフロー、技術選定、実装の詳細を詳しく解説しています。まず、ログインにおける二段階のインタラクションとして、ユーザーのウォレットアドレスを取得し、その後 SIWE（Sign-In with Ethereum）プロトコルを通じて nonce やタイムスタンプなどの情報を含む認証メッセージを送信し、ユーザーにウォレット内で署名してもらう流れを紹介しています。続いて、wagmi ライブラリを使用した主要なコード片を示し、connect や useAccount によるウォレット情報の取得から、useSignMessage による署名リクエストの開始、さらにバックエンドの /api/auth/verify による署名検証までの一連の実装を説明しています。また、EOA の秘密鍵、公開鍵、アドレス生成、および ECDSA（secp256k1）署名の原理についても簡潔に解説し、セキュリティを支える数学的基礎の理解を助けています。最後に、著者は自身の学習体験を振り返り、このプロジェクトがブロックチェーン開発の入門実践であり、今後より複雑なオンチェーンインタラクションに取り組むための基礎になったことを強調しています。'
image: 'https://r2.dreaife.tokyo/notion/covers/3795465cca1780d29cb9f993bf218d10/2026%E5%B9%B46%E6%9C%889%E6%97%A5_01_09_11.png'
tags: ['web3', 'wallet']
category: 'WEB3'
draft: false
lang: 'ja'
---

以下は筆者の現時点での理解を表すものにすぎません


=====================


最近、主にフロントエンドのEOA walletログインの[画面](https://web3wallet-login.block.dreaifehebi.com/)を作りました。blockChain開発に触れ始めた、とも言えるでしょうし、ちょうどEVMが実際にどのように操作されるのかにも触れたと言えます。


::github{repo="dreaifeHebi/web3WalletLogin"}


![image.png](https://r2.dreaife.tokyo/notion/covers/3795465cca1780d29cb9f993bf218d10/inline/0d7ea32d51521748-image.png)


# 1回のwallet login


1回とは言っても、実際にウォレット側で確認が必要なインタラクションは2回あります——1回はページ側から開始されるウォレットアドレス取得の確認、もう1回はサーバー側が認証message/呼び出しドメイン/nonceなど、プロトコル構造に合ったもの（現在使っている構造は[EIP-4361](https://eips.ethereum.org/EIPS/eip-4361)を模倣したものです。ただ、実際には個人的にはここはUI/追跡可能性の設計寄りで、実際にはnonceがリクエストの混同を防ぐことを保証できればよい気がします）などのmessageをウォレットに送って検証を要求するものです。


なぜ先にウォレットアドレスを取得してからでないと検証を開始できないのでしょうか？おそらく、ブラウザとウォレットの両方が本質的には信頼できないためです。もし中間のやり取りで直接与えられるデータがすべて信頼できないと考えるなら、ウォレットによって確認されたアドレスだけが信頼できるものとなり、その後で次のウォレット検証へ進める、ということになります。


# このウォレットを制御しているのは私だ！


## あなたのウォレットアドレスは何ですか？


ここでは実際には、ブラウザとウォレット間のインタラクションで、どのウォレットアドレスを選択してWebサイトに提供する権限を与えるかを確認するためのものです。


このプロジェクトでは実際にwagmiのconnectを使ってウォレットとのインタラクションをリクエストしています。


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


ここでもwagmiのuseAccountを通して、ウォレットで確認された後に更新される情報を自動的に取得しています。


## では、あなたが言っているこのウォレットはあなたのものですか？


### この情報を認証してもらう必要があります


認証すべきアドレスが分かったので、標準プロトコルSIWE（Sign-In with Ethereum）のログイン署名messageを準備できます。だいたい次のような形式のmessageです：


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


その後、このmessageに対してEIP-191の標準化を行い、他の署名や通常のトランザクションと区別できるようにします：


`"\x19Ethereum Signed Message:\n" + len(message) + message`


実装上は、wagmiのsignMessageAsyncを使ってウォレットへの実際の認証リクエストを行っています。


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


### これは私の秘密鍵だけが作成できる認証です


このmessageがウォレットに届いて認証を要求するとき、ウォレットは自分の署名によって、以前提供したアドレスに対する制御権を検証できるようにする必要があります。このとき、ウォレットは自分の秘密鍵で先ほど送られてきた情報のhashを暗号化しつつ、この署名がウォレットアドレスとリクエストmessageだけを知っているWebサイトによって検証可能であることも保証する必要があります。ここで必要になるのは当然、一連の数学的変換によってこの検証方法の妥当性を保証することです。もちろん、ここではひとまずwagmiのアルゴリズムを使って返ってきたsignを検証しています（


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


実際の検算については？


それを見るには、EOAウォレットの署名で使われるsecp256k1曲線を見る必要があります。EOAウォレットにとっては、おおよそ次のようなものです：

- EOA 秘密鍵：256-bit程度の乱数 d
- 公開鍵：楕円曲線上の点 Q = d * G
- アドレス：keccak256(publicKey) の後ろ20バイト
- 署名：ECDSA over secp256k1
> ただ、実は私もこの部分の実際の計算はあまり理解していません（。ただ、署名とmessage hashから得られる公開鍵Qから秘密鍵dへ逆算できないのは、要するに$2^{128}$程度の計算量（secp256k1は256bit級の曲線）を要する$Q = d * G$楕円曲線離散対数問題を解くことに相当するから、ということくらいは分かっています。

このように、最終的に返ってきたsign（$r + s  + v$）と自分が送ったmessage hashから公開鍵をrecoverし、その公開鍵から計算されたアドレスが、以前提供されたアドレスと一致する場合、このウォレットがそのアドレスに対する制御権を持っていることが証明されます。


# 結び


blockChainの実開発の始まりとしては、だいたいこんな感じでしょう。正直、実際の秘密鍵署名と署名リカバリの実装を見ていると、昔acmを勉強していた頃の感覚が少しありました（


ただ、入口になるプロジェクトとしてはちょうどよく、自分のblockChainへの学習意欲を引き上げてくれた気がします。
