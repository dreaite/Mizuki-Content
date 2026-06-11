---
title: '一个对于EOA的EVM钱包登陆界面'
published: 2026-06-08
updated: 2026-06-09
description: '基于一个 EVM/EOA 钱包登录界面，梳理 connect wallet、SIWE 签名消息、wagmi 签名请求、nonce 与后端验签流程，解释钱包登录为什么需要先连接地址再签名证明控制权。'
permalink: 'evm-wallet-login'
image: 'https://r2.dreaife.tokyo/notion/covers/3795465cca1780d29cb9f993bf218d10/2026%E5%B9%B46%E6%9C%889%E6%97%A5_01_09_11.png'
tags: ['web3', 'wallet']
category: 'WEB3'
draft: false
---

下文只代表笔者当前的认识


=====================


最近做了一个主要是前端的EOA wallet登陆的[界面](https://web3wallet-login.block.dreaifehebi.com/)，也算是接触blockChain开发的开始吧，正好也可以说是接触了EVM的实际是怎么操作的。


::github{repo="dreaifeHebi/web3WalletLogin"}


![image.png](https://r2.dreaife.tokyo/notion/covers/3795465cca1780d29cb9f993bf218d10/inline/0d7ea32d51521748-image.png)


# 一次wallet login


虽然说是一次，但是实际上需要钱包确认的交互是两次——一次来自页面发起的获取钱包地址的确认，一次来自服务器端通过带上认证message/调用域名/nonce啥的符合协议结构（目前用的结构是模仿[EIP-4361](https://eips.ethereum.org/EIPS/eip-4361)，不过实际个人感觉这里更偏向与UI/可追溯的设计，实际nonce应该就可以保证请求的混淆了）等message发给钱包要求验证。


为什么要先获得钱包地址才能发起验证？大概是因为本身浏览器和钱包两者都是不信任的，所以如果认为中间交互直接给出的数据都是不可信的，那么只有经由钱包确认的地址才是信任的，然后才能进行到下一步的钱包验证。


# 我控制了这个钱包！


## 你的钱包地址是什么？


这里其实是一个浏览器和钱包间的交互，用来确认需要选择哪个钱包地址来授权提供给网站。


这里项目实际用的是wagmi的connect来请求钱包交互的。


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


这里也是通过wagmi的useAccount来自动获取到钱包确认后更新的信息的。


## 那么你说的这个钱包是你的吗？


### 我需要你认证这个信息


那么既然知道需要认证的地址，那么就可以准备一个标准协议SIWE（Sign-In with Ethereum）登陆签名message。一个大概这样格式的message：


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


然后是对这个message进行一个EIP-191的标准化，来进行和其他签名和其他普通交易的区分：


`"\x19Ethereum Signed Message:\n" + len(message) + message`


这里实现上是来自wagmi的signMessageAsync来进行的对钱包的实际认证请求。


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


### 这个是只有我私钥才能制作的认证


当这个message来到钱包请求认证的时候，钱包要确保自己的签名可以验证自己对之前提供的地址的控制权，这时就需要钱包通过自己的私钥来对刚刚发来的信息hash进行加密，同时又能保证这个签名是可以被只知道钱包地址和请求message的网站验证的。这里需要的自然就是一系列的数学变换来保证的这个验证方法的合理性了，当然这里只是先使用的wagmi的算法来对返回的sign进行验证（


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


至于实际的验算？


那就要看到EOA钱包签名用的secp256k1曲线了，对于一个EOA钱包而言，大概是这样的：

- EOA 私钥：一个 256-bit 左右的随机数 d
- 公钥：椭圆曲线点 Q = d * G
- 地址：keccak256(publicKey) 的后 20 字节
- 签名：ECDSA over secp256k1
> 不过我其实也没太懂这一块的实际计算（，不过大概知道这里的无法通过签名和message hash得到的公钥Q来逆向到私钥d,是因为相当于要解一个工作量约$2^{128}$级别（secp256k1为256bit级别的曲线）的$Q = d * G$椭圆曲线离散对数问题就行了。

这样上面最终通过返回的sign（$r + s  + v$）和自己发送的message hash来recover出来一个公钥计算出的地址，当这个地址可以和之前的提供地址一致的时候，也就证明了这个钱包有对这个地址的控制权。


# 结语


作为一次blockChain实际开发的开始，差不多就这样吧。有一说一，在看实际私钥签名和签名恢复实现的时候有点当初学acm的感觉了（


不过感觉作为一个门户项目倒是正好，把自己学习blockChain的兴趣提起来了。
