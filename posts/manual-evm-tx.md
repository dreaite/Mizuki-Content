---
title: '在浏览器上手动完成一段EVM交易'
published: 2026-09-13
updated: 2026-09-13
description: '在浏览器控制台手动完成一笔 EVM 交易：通过 JSON-RPC 连接本地 Anvil 测试链、调用钱包发送交易、手动出块，并验证交易哈希、恢复签名者地址与 Merkle 包含证明，直观理解交易从广播、打包到上链确认的完整过程。'
permalink: 'manual-evm-tx'
image: 'https://r2.dreaife.tokyo/notion/covers/3da5465cca17805882bad365b47648a8/ai-generated-1789295398718.png'
tags: ['web3', 'wallet']
category: 'exploration'
draft: false
---

读前提醒，本文只代表作者个人观点。

========

最近具体了解了一下evm的实际交易过程，稍微记录一下如何在浏览器的console就可以操控wallet和局域网内的anvil测试链来完成一次tx从上链到完成和确认。

浏览器扩展钱包为了让网页/DApp 与钱包交互，会向浏览器暴露一个 Provider。一般来说会是 `window.ethereum`，其基础接口通常遵循 [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193)，因此可以通过 `provider.request({ method, params })` 调用钱包支持的 Ethereum RPC / Wallet RPC。不同钱包还可能实现自己的扩展方法。

这边有做一个[liveDemo](https://chaintxdemo.dreaifehebi.com/)可以直观看一下每个过程的input和output是什么样的（

::github{repo="dreaifeHebi/chainTXDemo"}

那么下面开始具体的在浏览器如何自己手动完成一段EVM交易吧。

流程可以参考这个：

```javascript
确认 Anvil → 切到手动出块
→ 连接钱包、切换网络
→ 记录发送前状态 → 钱包发送交易
→ RPC 观察 pending
→ 手动 mine
→ 查询回执、区块、nonce
→ 本地重算交易哈希、恢复签名者地址
```

\*注：下面的使用按照默认的rpc为`http://127.0.0.1:8545`，chainId为31337进行。

# 准备RPC连接

RPC一般接受json rpc的方式进行连接，所以可以直接构建一个fetch的通用方法来构建和rpc的连接。对于rpc存在[通用的Ethereum Execution JSON-RPC API](https://ethereum.org/developers/docs/apis/json-rpc/#eth_gettransactioncount)和一些[anvil的独有方法](https://www.getfoundry.sh/anvil/rpc-methods)可以确认。

连接构建：

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

连接确认：

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

对于一次连接中的fetch的四个字段分别是：

<table header-row="true">
<tr>
<td>字段</td>
<td>用途</td>
</tr>
<tr>
<td>`jsonrpc`</td>
<td>声明使用 JSON-RPC 2.0</td>
</tr>
<tr>
<td>`id`</td>
<td>给这一次请求编号，与response的result id对应</td>
</tr>
<tr>
<td>`method`</td>
<td>要调用的远程方法名</td>
</tr>
<tr>
<td>`params`</td>
<td>传给这个方法的参数，多个参数通过list的方式传递\[par1,par2,..\]</td>
</tr>
</table>

> 对于anvil的文档中的cast，可以理解为foundry封装的一个rpc client，cast rpc后的即为fetch中使用的method和params。具体内容可以[参考cast rpc --help](https://www.getfoundry.sh/reference/cast/rpc)。

# 调整anvil状态为手动出块

首先确认当前anvil的自动出块和定时出块配置。

```javascript
var showMiningMode = async () => {
  console.table({
    automine: await rpc("anvil_getAutomine"),
    interval: await rpc("anvil_getIntervalMining"),
  });
};

await showMiningMode();
```

调整

```javascript
await rpc("evm_setAutomine", [false]);
await rpc("evm_setIntervalMining", [0]);

await showMiningMode();
```

目标是 `automine: false`，且没有启用定时出块。不同版本可能用 `null` 或 `0` 表示未设置间隔。之后的交易会变成等待手动 mine，没有出块倒计时。

# 连接钱包

这里我们就可以通过wallet的保留window.etherum的注入来调用钱包方法，从而来完成对于钱包的操作。

## 钱包授权

```javascript
var wallet = window.ethereum;
if (!wallet) throw new Error("未检测到钱包，请检查扩展权限并刷新");

await wallet.request({
  method: "eth_requestAccounts",
});
```

## 切换自定义本地测试网

[切换](https://eips.ethereum.org/EIPS/eip-3326)为本地chainId为31337的网络。如果wallet没有添加该网络，需要先完成在wallet中对于该自定义网络的添加。

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

切换后重新获取账号

```javascript
var [from] = await wallet.request({ method: "eth_accounts" });
if (!from) throw new Error("没有已授权账户");

console.table({
  from,
  walletChainId: dec(await wallet.request({ method: "eth_chainId" })),
  rpcChainId: dec(await rpc("eth_chainId")),
});
```

> 这里存在一个gap需要注意，这里只确认了对于wallet连接的rpc和我们在console中连接的rpc，它们的chainId是相同的，但是对于实际上这里是否为同一个rpc并不能保证。<br>当然，实际的可信任网络上，rpc使用不同，但是因为chainId是相同的，所以基本可以保证写到同一条链上。但是本地的话，可能会存在多机启动多条31337测试链。所以尽量在连接时确认rpc连接和console连接可以写入同一条链。

# 发送交易

观察发送前状态

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

构建交易并发送

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

这里可以确认到通过wallet发送的tx已经被rpc接受并返回txHash，开始广播的阶段。此时交易尚未打包 上链。

# 手动操作RPC出块

## 打包前观察

在打包前，先观察一下当前的block状态。

```javascript
var pendingTx = await rpc("eth_getTransactionByHash", [txHash]);
var pendingReceipt = await rpc("eth_getTransactionReceipt", [txHash]);

console.log("交易详情：", pendingTx);
console.log("交易回执：", pendingReceipt);
console.table(await accountState());
```

正常情况下：

- `pendingTx` 能查到，说明这个 RPC 节点已经知道该交易。
- `pendingTx.blockNumber` 为 `null`，说明尚未打包。
- `pendingReceipt` 为 `null`，尚无执行回执。
- 区块号和 `latestNonce` 保持不变。
- 如果原来没有其他待处理交易，`pendingNonce` 通常比发送前增加 `1`。

还可以看此时的交易池

```javascript
await rpc("txpool_status");
await rpc("txpool_content");
```

返回的`pending` 是当前可处理、等待打包的交易；`queued` 可能包含因前置 nonce 缺失而暂不能处理的交易。

## 手动出块

通过浏览器console操作

```javascript
await rpc("evm_mine");
```

也可以通过直接curl来操作

```bash
curl -sS http://127.0.0.1:8545 \
  -H 'Content-Type: application/json' \
  --data '{"jsonrpc":"2.0","id":1,"method":"evm_mine","params":[]}'
```

## 确认交易/区块状态

再次确认该交易状态

```javascript
var minedTx = await rpc("eth_getTransactionByHash", [txHash]);
var receipt = await rpc("eth_getTransactionReceipt", [txHash]);

console.log("交易详情：", minedTx);
console.log("执行回执：", receipt);

if (!receipt) {
  throw new Error("这笔交易尚未被打包，请检查交易池、nonce 和费用");
}
```

确认返回回执对应高度区块

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

对比交易前后wallet状态

```javascript
var after = await accountState();
console.table({ before, after });
```

# 于浏览器对于交易进行验证

使用ether进行本地验算。

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

## 公钥地址验证

其中具体验证内容可以参考我这篇blog，基本上就是通过计算出来的rsv来通过计算公式重新推导出公钥Q。

::site{url="https://dreaife.tokyo/eoa-sign-verify/#关于一次eoa钱包的签名和验证"}

具体在上述的实现这里

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

## 对于交易的Merkle证明

之前虽然对于返回的block进行了内部的transaction是否包括该txHash的检测，但是还没有做这个对于实际出块的blockHash上的Merkle证明。（有一说一，这部分的原理我还没太清楚，打算后面再仔细看看，所以下面其实更多来自于gpt的介绍（

以太坊执行区块使用 [Merkle Patricia Trie（MPT）](https://ethereum.org/developers/docs/data-structures-and-encoding/patricia-merkle-trie)。每个区块有自己的交易树：

```plain text
key   = RLP(交易在区块中的序号)
value = 原始已签名交易字节

整棵交易树的根 = 区块头中的 transactionsRoot
```

\*交易树的 key 是区块内序号，不是 txHash，也不是账户 nonce。

一般的交易包含证明需要：

```plain text
可信区块头中的 transactionsRoot
+ transactionIndex
+ 从根到目标叶子的 proof 节点
+ 目标 rawTx
```

验证过程是：

```plain text
验证 proof 节点之间的哈希引用和路径
  → 在 RLP(transactionIndex) 对应位置取出 value
  → 检查 value 等于目标 rawTx
  → 检查 keccak256(rawTx) 等于目标 txHash
```

这样才证明：这笔交易确实包含在这个 `transactionsRoot` 所承诺的交易集合中。

`eth_getProof` 提供的是账户和合约存储证明，不能拿它直接查询交易包含证明。交易证明通常需要专门的证明服务，或者下载区块全部原始交易，在本地重建交易树并生成路径。

### 实验区块验证

下面是对于本地区块的交易的一个重构交易树的验证。

准备验证txHash和标准库

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

验证逻辑

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

两个 `true` 分别表示：

- `rootMatches`：根据区块全部原始交易重建的树，与区块头的交易根一致。
- `inclusionMatches`：**指定的交易**，通过了该根下的包含证明验证。

# 恢复自动出块模式

```javascript
// 收到交易就自动出块
await rpc("evm_setAutomine", [true]);
```
