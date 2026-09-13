---
title: 'ブラウザ上でEVMトランザクションを手動で実行する'
published: 2026-09-13
updated: 2026-09-13
description: 'ブラウザのコンソールで EVM トランザクションを手動で実行します。JSON-RPC でローカルの Anvil テストチェーンに接続し、ウォレットを呼び出してトランザクションを送信し、手動でブロックを生成します。さらに、トランザクションハッシュの検証、署名者アドレスの復元、Merkle 包含証明の検証を通じて、ブロードキャストからブロックへの取り込み、オンチェーンでの承認までの一連の流れを直感的に理解できます。'
image: 'https://r2.dreaife.tokyo/notion/covers/3da5465cca17805882bad365b47648a8/ai-generated-1789295398718.png'
tags: ['web3', 'wallet']
category: 'study'
draft: false
lang: 'ja'
---

読む前に：本記事は著者個人の見解のみを示すものです。

========

最近、EVMの実際の取引プロセスについて具体的に調べたので、ブラウザーのconsoleからウォレットとLAN内のAnvilテストチェーンを操作し、トランザクションをオンチェーンに記録して実行結果を確認するまでの手順を簡単に記録しておきます。

ブラウザー拡張ウォレットは、Webページ/DAppがウォレットとやり取りできるように、ブラウザーにProviderを公開します。一般的には `window.ethereum` で、その基本インターフェースは通常 [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) に従っています。そのため、`provider.request({ method, params })` を通じて、ウォレットが対応するEthereum RPC / Wallet RPCを呼び出せます。ウォレットによっては独自の拡張メソッドも実装されています。

各プロセスのinputとoutputがどのようなものかを視覚的に確認できる[liveDemo](https://chaintxdemo.dreaifehebi.com/)も作ってあります（

::github{url="dreaifeHebi/chainTXDemo"}

それでは、ブラウザーでEVMトランザクションを手動で実行する具体的な手順を見ていきましょう。

流れはこちらを参考にしてください：

```javascript
确认 Anvil → 切到手动出块
→ 连接钱包、切换网络
→ 记录发送前状态 → 钱包发送交易
→ RPC 观察 pending
→ 手动 mine
→ 查询回执、区块、nonce
→ 本地重算交易哈希、恢复签名者地址
```

\*注：以下では、デフォルトのRPCを`http://127.0.0.1:8545`、chainIdを31337として進めます。

# RPC接続の準備

RPCは一般的にJSON-RPC形式のリクエストを受け付けるため、汎用的なfetch関数を作れば、そのままRPCと通信できます。RPCのメソッドについては、[共通のEthereum Execution JSON-RPC API](https://ethereum.org/developers/docs/apis/json-rpc/#eth_gettransactioncount)と[Anvil独自のメソッド](https://www.getfoundry.sh/anvil/rpc-methods)を確認できます。

接続用の関数を作成：

```javascript
var rpcUrl = "http://127.0.0.1:8545";
var rpcId = 0;

var rpc = async (method, params = []) => {
  var response = await fetch(rpcUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: ++rpcId,
      method,
      params,
    }),
  });

  if (!response.ok) throw new Error(`HTTP ${response.status}`);

  var body = await response.json();
  if (body.error) throw new Error(JSON.stringify(body.error));
  return body.result;
};

// 数值转成十进制字符串，避免大整数丢失精度
var dec = value => value == null ? null : BigInt(value).toString();
```

接続の確認：

```javascript
console.table({
  client: await rpc("web3_clientVersion"),
  chainId: dec(await rpc("eth_chainId")),
  blockNumber: dec(await rpc("eth_blockNumber")),
});

if (BigInt(await rpc("eth_chainId")) !== 31337n) {
  throw new Error("RPC 不是预期的 Anvil 31337");
}
```

1回の通信でfetchに渡す4つのフィールドは、それぞれ次のとおりです：

<table header-row="true">
<tr>
<td>フィールド</td>
<td>用途</td>
</tr>
<tr>
<td>`jsonrpc`</td>
<td>JSON-RPC 2.0を使用することを宣言する</td>
</tr>
<tr>
<td>`id`</td>
<td>このリクエストに番号を付け、レスポンスのidと対応させる</td>
</tr>
<tr>
<td>`method`</td>
<td>呼び出すリモートメソッド名</td>
</tr>
<tr>
<td>`params`</td>
<td>このメソッドに渡す引数。複数の引数はリスト形式で渡す\[par1,par2,..\]</td>
</tr>
</table>

> Anvilのドキュメントに登場するcastは、Foundryが提供するRPCクライアントと考えればよいです。cast rpcの後ろに指定するものが、fetchで使用するmethodとparamsに当たります。詳細は[cast rpc --helpを参照](https://www.getfoundry.sh/reference/cast/rpc)してください。

# Anvilを手動ブロック生成に切り替える

まず、現在のAnvilの自動ブロック生成と一定間隔でのブロック生成の設定を確認します。

```javascript
var showMiningMode = async () => {
  console.table({
    automine: await rpc("anvil_getAutomine"),
    interval: await rpc("anvil_getIntervalMining"),
  });
};

await showMiningMode();
```

設定を変更

```javascript
await rpc("evm_setAutomine", [false]);
await rpc("evm_setIntervalMining", [0]);

await showMiningMode();
```

目標は `automine: false` で、一定間隔でのブロック生成も無効になっている状態です。バージョンによっては、間隔が未設定であることを `null` または `0` で表す場合があります。以降のトランザクションは手動のmineを待つ状態になり、ブロック生成までのカウントダウンはありません。

# ウォレットに接続する

ここでは、ウォレットがwindow.ethereumに注入するインターフェースを通じてウォレットのメソッドを呼び出し、操作できます。

## ウォレットへのアクセスを許可する

```javascript
var wallet = window.ethereum;
if (!wallet) throw new Error("未检测到钱包，请检查扩展权限并刷新");

await wallet.request({
  method: "eth_requestAccounts",
});
```

## カスタムのローカルテストネットに切り替える

chainIdが31337のローカルネットワークに[切り替えます](https://eips.ethereum.org/EIPS/eip-3326)。ウォレットにこのネットワークが登録されていない場合は、先にカスタムネットワークとして追加する必要があります。

```javascript
try {
  await wallet.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId: "0x7a69" }],
  });
} catch (error) {
  if (error.code !== 4902) throw error;

  await wallet.request({
    method: "wallet_addEthereumChain",
    params: [{
      chainId: "0x7a69",
      chainName: "Anvil Local",
      nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: [rpcUrl],
    }],
  });

  await wallet.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId: "0x7a69" }],
  });
}
```

切り替え後にアカウントを再取得

```javascript
var [from] = await wallet.request({ method: "eth_accounts" });
if (!from) throw new Error("没有已授权账户");

console.table({
  from,
  walletChainId: dec(await wallet.request({ method: "eth_chainId" })),
  rpcChainId: dec(await rpc("eth_chainId")),
});
```

> ここには注意すべき確認上の抜けがあります。確認できたのは、ウォレットが接続するRPCとconsoleから接続するRPCのchainIdが同じであることだけで、実際に同じRPCである保証はありません。<br>もちろん、実際の信頼できるネットワークでは、異なるRPCを使っていてもchainIdが同じであれば、基本的には同じチェーンに書き込まれると考えられます。ただし、ローカルでは複数のマシンでchainIdが31337のテストチェーンをそれぞれ起動している可能性があります。そのため、接続時にはウォレットのRPC接続とconsoleからの接続が同じチェーンに書き込めることを、できるだけ確認してください。

# トランザクションを送信する

送信前の状態を確認

```javascript
var accountState = async () => ({
  latestNonce: dec(await rpc("eth_getTransactionCount", [from, "latest"])),
  pendingNonce: dec(await rpc("eth_getTransactionCount", [from, "pending"])),
  balanceWei: dec(await rpc("eth_getBalance", [from, "latest"])),
  blockNumber: dec(await rpc("eth_blockNumber")),
});

var before = await accountState();
console.table(before);
```

トランザクションを作成して送信

```javascript
var txRequest = {
  from,
  to: from, // 本实验给自己转账，也可以改为其他测试地址
  value: "0x" + (10n ** 15n).toString(16), // 0.001 ETH
};

console.log(txRequest);

if (BigInt(await wallet.request({ method: "eth_chainId" })) !== 31337n) {
  throw new Error("钱包网络已变化，停止发送");
}

var txHash = await wallet.request({
  method: "eth_sendTransaction",
  params: [txRequest],
});

console.log("交易哈希：", txHash);
```

ここで、ウォレットから送信したトランザクションがRPCに受け付けられ、txHashが返されて、ブロードキャストが始まる段階に入ったことを確認できます。この時点では、トランザクションはまだブロックに取り込まれておらず、オンチェーンには記録されていません。

# RPCを手動で操作してブロックを生成する

## ブロックに取り込まれる前の確認

ブロックに取り込まれる前に、現在のブロックの状態を確認します。

```javascript
var pendingTx = await rpc("eth_getTransactionByHash", [txHash]);
var pendingReceipt = await rpc("eth_getTransactionReceipt", [txHash]);

console.log("交易详情：", pendingTx);
console.log("交易回执：", pendingReceipt);
console.table(await accountState());
```

通常は次のようになります：

- `pendingTx` を取得できれば、このRPCノードがすでにそのトランザクションを認識していることを示します。
- `pendingTx.blockNumber` が `null` なら、まだブロックに取り込まれていません。
- `pendingReceipt` が `null` なら、実行レシートはまだありません。
- ブロック番号と `latestNonce` は変わりません。
- もともとほかに保留中のトランザクションがなければ、`pendingNonce` は通常、送信前より `1` 増えます。

この時点のトランザクションプールも確認できます

```javascript
await rpc("txpool_status");
await rpc("txpool_content");
```

返される`pending`は、現在処理可能でブロックへの取り込みを待っているトランザクションです。`queued`には、先行するnonceのトランザクションが欠けているため、一時的に処理できないトランザクションが含まれる場合があります。

## 手動でブロックを生成する

ブラウザーのconsoleから操作

```javascript
await rpc("evm_mine");
```

curlで直接操作することもできます

```bash
curl -sS http://127.0.0.1:8545 \
  -H 'Content-Type: application/json' \
  --data '{"jsonrpc":"2.0","id":1,"method":"evm_mine","params":[]}'
```

## トランザクション/ブロックの状態を確認する

トランザクションの状態を再確認

```javascript
var minedTx = await rpc("eth_getTransactionByHash", [txHash]);
var receipt = await rpc("eth_getTransactionReceipt", [txHash]);

console.log("交易详情：", minedTx);
console.log("执行回执：", receipt);

if (!receipt) {
  throw new Error("这笔交易尚未被打包，请检查交易池、nonce 和费用");
}
```

返されたレシートのブロック高に対応するブロックを確認

```javascript
var block = await rpc("eth_getBlockByNumber", [
  receipt.blockNumber,
  false,
]);

var blockDate = new Date(Number(BigInt(block.timestamp) * 1000n));

console.table({
  txHash,
  executionStatus: receipt.status === "0x1" ? "成功" : "失败",
  blockNumber: dec(receipt.blockNumber),
  transactionIndex: dec(receipt.transactionIndex),
  gasLimit: dec(minedTx.gas),
  gasUsed: dec(receipt.gasUsed),
  effectiveGasPriceWei: dec(receipt.effectiveGasPrice),
  blockHashMatches: block.hash === receipt.blockHash,
  includedInBlock: block.transactions.includes(txHash),
  blockTimeUTC: blockDate.toISOString(),
  blockTimeShanghai: blockDate.toLocaleString("zh-CN", {
    timeZone: "Asia/Tokyo",
    hour12: false,
  }),
});
```

トランザクションの前後でウォレットの状態を比較

```javascript
var after = await accountState();
console.table({ before, after });
```

# ブラウザーでトランザクションを検証する

ethersを使ってローカルで検算します。

```javascript
var E = await import(
  "https://cdn.jsdelivr.net/npm/ethers@6.15.0/dist/ethers.min.js"
);

var rawTx = await rpc("debug_getRawTransaction", [txHash]);
if (!rawTx) throw new Error("节点没有返回原始交易");

var signedTx = E.Transaction.from(rawTx);

console.log("原始已签名交易：", rawTx);
console.log("解析后的交易：", signedTx.toJSON());

// 完整已签名交易的哈希
var computedTxHash = E.keccak256(rawTx);

// 待签名数据的摘要：验签用这个，不是 txHash
var signingHash = E.keccak256(signedTx.unsignedSerialized);

// 使用 r/s/v 恢复发送者地址
var recoveredFrom = E.recoverAddress(
  signingHash,
  signedTx.signature,
);

console.table({
  signingHash,
  computedTxHash,
  returnedTxHash: txHash,
  hashMatches: computedTxHash.toLowerCase() === txHash.toLowerCase(),

  r: signedTx.signature.r,
  s: signedTx.signature.s,
  recoveryV: signedTx.signature.v, // 库归一化后的 27 / 28
  yParity: signedTx.signature.yParity,

  recoveredFrom,
  expectedFrom: from,
  signerMatches: recoveredFrom.toLowerCase() === from.toLowerCase(),
  rpcFromMatches: recoveredFrom.toLowerCase() === minedTx.from.toLowerCase(),

  chainId: signedTx.chainId.toString(),
  nonce: signedTx.nonce,
  valueETH: E.formatEther(signedTx.value),
  actualFeeETH: E.formatEther(
    BigInt(receipt.gasUsed) * BigInt(receipt.effectiveGasPrice)
  ),
});
```

## 公開鍵とアドレスの検証

検証内容の詳細は、こちらのブログ記事を参考にしてください。基本的には、算出されたrsvから計算式を使って公開鍵Qを再導出するというものです。

::site{url="https://dreaife.tokyo/eoa-sign-verify/#关于一次eoa钱包的签名和验证"}

上の実装では、具体的にこの部分です

```javascript
// 完整已签名交易的哈希
var computedTxHash = E.keccak256(rawTx);

// 待签名数据的摘要：验签用这个，不是 txHash
var signingHash = E.keccak256(signedTx.unsignedSerialized);

// 使用 r/s/v 恢复发送者地址
var recoveredFrom = E.recoverAddress(
  signingHash,
  signedTx.signature,
);
```

## トランザクションのMerkle証明

先ほどは、返されたブロックのtransactionsにそのtxHashが含まれているかを確認しましたが、実際に生成されたブロックのblockHashに結び付くMerkle証明はまだ行っていません。（正直なところ、この部分の仕組みはまだ十分に理解できておらず、後で詳しく調べるつもりなので、以下は主にGPTの説明に基づいています（

Ethereumの実行ブロックは [Merkle Patricia Trie（MPT）](https://ethereum.org/developers/docs/data-structures-and-encoding/patricia-merkle-trie) を使用します。各ブロックには固有のトランザクションツリーがあります：

```plain text
key   = RLP(交易在区块中的序号)
value = 原始已签名交易字节

整棵交易树的根 = 区块头中的 transactionsRoot
```

\*トランザクションツリーのkeyはブロック内のインデックスであり、txHashでもアカウントのnonceでもありません。

一般的なトランザクションの包含証明には、次のものが必要です：

```plain text
可信区块头中的 transactionsRoot
+ transactionIndex
+ 从根到目标叶子的 proof 节点
+ 目标 rawTx
```

検証の流れは次のとおりです：

```plain text
验证 proof 节点之间的哈希引用和路径
  → 在 RLP(transactionIndex) 对应位置取出 value
  → 检查 value 等于目标 rawTx
  → 检查 keccak256(rawTx) 等于目标 txHash
```

これによって初めて、そのトランザクションが、この `transactionsRoot` によってコミットされたトランザクション集合に確かに含まれていることを証明できます**。**

`eth_getProof` が提供するのはアカウントとコントラクトストレージの証明であり、トランザクションの包含証明を直接取得することはできません。トランザクションの証明には通常、専用の証明サービスを利用するか、ブロック内のすべての生トランザクションをダウンロードし、ローカルでトランザクションツリーを再構築してパスを生成する必要があります。

### 実験用ブロックの検証

以下では、ローカルのブロック内のトランザクションからトランザクションツリーを再構築し、検証します。

検証対象のtxHashとライブラリを準備

```javascript
// 验证的交易哈希
var targetTxHash = "0x这里填入完整交易哈希";

var E = await import(
  "https://cdn.jsdelivr.net/npm/ethers@6.15.0/dist/ethers.min.js"
);

var { Trie } = await import(
  "https://esm.sh/@ethereumjs/trie@6.2.1?bundle"
);
```

検証ロジック

```javascript
// 获取交易所在block
var receipt = await rpc("eth_getTransactionReceipt", [targetTxHash]);
var block = await rpc("eth_getBlockByHash", [receipt.blockHash, false]);
var trie = new Trie({ useKeyHashing: false });
var key = i => E.getBytes(E.encodeRlp(i === 0 ? "0x" : E.toBeHex(i)));

// 构建这个区块的交易树
for (var [i, hash] of block.transactions.entries()) {
  await trie.put(key(i), E.getBytes(
    await rpc("debug_getRawTransaction", [hash])
  ));
}

// 只生成、验证目标交易的证明
var targetKey = key(Number(BigInt(receipt.transactionIndex)));
var proof = await trie.createProof(targetKey);
var value = await new Trie({ useKeyHashing: false }).verifyProof(
  E.getBytes(block.transactionsRoot), targetKey, proof
);

console.log({
  rootMatches: E.hexlify(trie.root()) === block.transactionsRoot.toLowerCase(),
  targetIncluded: value != null && E.keccak256(value) === targetTxHash.toLowerCase(),
});
```

2つの `true` は、それぞれ次のことを示します：

- `rootMatches`：ブロック内のすべての生トランザクションから再構築したツリーが、ブロックヘッダーのトランザクションルートと一致している。
- `inclusionMatches`：**指定したトランザクション**が、そのルートに対する包含証明の検証に合格した。

# 自動ブロック生成モードに戻す

```javascript
// 收到交易就自动出块
await rpc("evm_setAutomine", [true]);
```
