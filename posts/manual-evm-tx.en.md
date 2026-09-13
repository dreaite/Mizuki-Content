---
title: 'Manually Completing an EVM Transaction in the Browser'
published: 2026-09-13
updated: 2026-09-13
description: 'Manually execute an EVM transaction in the browser console: connect to a local Anvil test chain via JSON-RPC, use a wallet to send a transaction, manually mine a block, verify the transaction hash, recover the signer’s address, and verify a Merkle inclusion proof to understand the full journey from broadcast and block inclusion to on-chain confirmation.'
image: 'https://r2.dreaife.tokyo/notion/covers/3da5465cca17805882bad365b47648a8/ai-generated-1789295398718.png'
tags: ['web3', 'wallet']
category: 'exploration'
draft: false
lang: 'en'
---

A note before reading: this article represents only the author's personal views.

========

I recently took a closer look at how EVM transactions actually work. Here is a brief record of how to use the browser console to control a wallet and an Anvil test chain on a local network, taking a transaction through on-chain inclusion, execution, and confirmation.

To let webpages/DApps interact with them, browser extension wallets expose a Provider to the browser. This is generally `window.ethereum`, and its basic interface usually follows [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193). You can therefore use `provider.request({ method, params })` to call Ethereum RPC / Wallet RPC methods supported by the wallet. Different wallets may also implement their own extension methods.

I also made a [liveDemo](https://chaintxdemo.dreaifehebi.com/) where you can see what the inputs and outputs look like at each step (

::github{repo="dreaifeHebi/chainTXDemo"}

Now, let's walk through manually completing an EVM transaction in the browser.

You can follow this workflow:

```javascript
确认 Anvil → 切到手动出块
→ 连接钱包、切换网络
→ 记录发送前状态 → 钱包发送交易
→ RPC 观察 pending
→ 手动 mine
→ 查询回执、区块、nonce
→ 本地重算交易哈希、恢复签名者地址
```

\*Note: the examples below assume the default RPC endpoint is `http://127.0.0.1:8545` and the chainId is 31337.

# Set Up the RPC Connection

RPC endpoints generally accept JSON-RPC requests, so we can create a reusable fetch function to communicate with the endpoint. For available methods, refer to the [standard Ethereum Execution JSON-RPC API](https://ethereum.org/developers/docs/apis/json-rpc/#eth_gettransactioncount) and [Anvil-specific methods](https://www.getfoundry.sh/anvil/rpc-methods).

Set up the connection:

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

Verify the connection:

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

The four fields in the fetch request body are:

<table header-row="true">
<tr>
<td>Field</td>
<td>Purpose</td>
</tr>
<tr>
<td>`jsonrpc`</td>
<td>Declares the use of JSON-RPC 2.0</td>
</tr>
<tr>
<td>`id`</td>
<td>Assigns an identifier to this request, matching the id in the response</td>
</tr>
<tr>
<td>`method`</td>
<td>The name of the remote method to call</td>
</tr>
<tr>
<td>`params`</td>
<td>Arguments passed to the method; multiple arguments are passed as a list \[par1,par2,..\]</td>
</tr>
</table>

> You can think of cast, as mentioned in the Anvil documentation, as an RPC client provided by Foundry. The arguments after cast rpc correspond to the method and params used in fetch. For details, [see cast rpc --help](https://www.getfoundry.sh/reference/cast/rpc).

# Switch Anvil to Manual Mining

First, check Anvil's current automatic and interval mining settings.

```javascript
var showMiningMode = async () => {
  console.table({
    automine: await rpc("anvil_getAutomine"),
    interval: await rpc("anvil_getIntervalMining"),
  });
};

await showMiningMode();
```

Adjust the settings:

```javascript
await rpc("evm_setAutomine", [false]);
await rpc("evm_setIntervalMining", [0]);

await showMiningMode();
```

The goal is `automine: false`, with interval mining disabled. Different versions may use `null` or `0` to indicate that no interval is set. Subsequent transactions will wait for manual mining, with no countdown to the next block.

# Connect the Wallet

We can now call wallet methods through the wallet's window.etherum injection to operate the wallet.

## Authorize Wallet Access

```javascript
var wallet = window.ethereum;
if (!wallet) throw new Error("未检测到钱包，请检查扩展权限并刷新");

await wallet.request({
  method: "eth_requestAccounts",
});
```

## Switch to the Custom Local Test Network

[Switch](https://eips.ethereum.org/EIPS/eip-3326) to the local network with chainId 31337. If this network has not been added to the wallet, you need to add it as a custom network first.

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

Retrieve the account again after switching:

```javascript
var [from] = await wallet.request({ method: "eth_accounts" });
if (!from) throw new Error("没有已授权账户");

console.table({
  from,
  walletChainId: dec(await wallet.request({ method: "eth_chainId" })),
  rpcChainId: dec(await rpc("eth_chainId")),
});
```

> There is a gap to be aware of here: this only confirms that the RPC endpoint used by the wallet and the one we connect to in the console have the same chainId. It does not guarantee that they are actually the same RPC endpoint.<br>Of course, on a trusted network, even if the RPC endpoints differ, having the same chainId generally means they write to the same chain. Locally, however, multiple machines could be running separate test chains with chainId 31337. So, when connecting, try to confirm that the wallet's RPC connection and the console connection can write to the same chain.

# Send the Transaction

Inspect the state before sending:

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

Construct and send the transaction:

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

At this point, we can confirm that the transaction sent through the wallet has been accepted by the RPC endpoint, which has returned a txHash, and broadcasting has begun. The transaction has not yet been included in a block on the chain.

# Manually Mine a Block via RPC

## Inspect Before Inclusion

Before the transaction is included in a block, inspect the current block state.

```javascript
var pendingTx = await rpc("eth_getTransactionByHash", [txHash]);
var pendingReceipt = await rpc("eth_getTransactionReceipt", [txHash]);

console.log("交易详情：", pendingTx);
console.log("交易回执：", pendingReceipt);
console.table(await accountState());
```

Under normal circumstances:

- `pendingTx` is available, meaning this RPC node knows about the transaction.
- `pendingTx.blockNumber` is `null`, meaning it has not yet been included in a block.
- `pendingReceipt` is `null`, so there is no execution receipt yet.
- The block number and `latestNonce` remain unchanged.
- If there were no other pending transactions beforehand, `pendingNonce` usually increases by `1` compared with its value before sending.

You can also inspect the transaction pool:

```javascript
await rpc("txpool_status");
await rpc("txpool_content");
```

In the response, `pending` contains transactions that can currently be processed and are waiting for inclusion; `queued` may contain transactions that cannot yet be processed because an earlier nonce is missing.

## Mine a Block Manually

From the browser console:

```javascript
await rpc("evm_mine");
```

You can also use curl directly:

```bash
curl -sS http://127.0.0.1:8545 \
  -H 'Content-Type: application/json' \
  --data '{"jsonrpc":"2.0","id":1,"method":"evm_mine","params":[]}'
```

## Check the Transaction/Block Status

Check the transaction's status again:

```javascript
var minedTx = await rpc("eth_getTransactionByHash", [txHash]);
var receipt = await rpc("eth_getTransactionReceipt", [txHash]);

console.log("交易详情：", minedTx);
console.log("执行回执：", receipt);

if (!receipt) {
  throw new Error("这笔交易尚未被打包，请检查交易池、nonce 和费用");
}
```

Check the block at the height specified in the returned receipt:

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

Compare the wallet state before and after the transaction:

```javascript
var after = await accountState();
console.table({ before, after });
```

# Verify the Transaction in the Browser

Use ethers to perform local verification.

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

## Public Key and Address Verification

For details on this verification, see my blog post below. Essentially, it uses the calculated r, s, and v values to derive the public key Q again using the relevant formulas.

::site{url="https://dreaife.tokyo/eoa-sign-verify/#关于一次eoa钱包的签名和验证"}

Here is the relevant part of the implementation above:

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

## Merkle Proof for the Transaction

Earlier, we checked whether the transactions in the returned block included this txHash, but we have not yet verified a Merkle proof tied to the actual mined block's blockHash. (To be honest, I still do not fully understand the principles behind this part and plan to look into it more carefully later, so the following is mostly based on GPT's explanation (

Ethereum execution blocks use a [Merkle Patricia Trie (MPT)](https://ethereum.org/developers/docs/data-structures-and-encoding/patricia-merkle-trie). Each block has its own transaction trie:

```plain text
key   = RLP(交易在区块中的序号)
value = 原始已签名交易字节

整棵交易树的根 = 区块头中的 transactionsRoot
```

\*The transaction trie's key is the transaction's index within the block, not its txHash or the account nonce.

A transaction inclusion proof generally requires:

```plain text
可信区块头中的 transactionsRoot
+ transactionIndex
+ 从根到目标叶子的 proof 节点
+ 目标 rawTx
```

The verification process is:

```plain text
验证 proof 节点之间的哈希引用和路径
  → 在 RLP(transactionIndex) 对应位置取出 value
  → 检查 value 等于目标 rawTx
  → 检查 keccak256(rawTx) 等于目标 txHash
```

Only then does this prove that the transaction is indeed included in the transaction set committed to by this `transactionsRoot`.

`eth_getProof` provides account and contract storage proofs; it cannot be used to query transaction inclusion proofs directly. Transaction proofs generally require a dedicated proof service, or downloading all raw transactions in the block to reconstruct the transaction trie locally and generate the path.

### Verify the Experimental Block

Below is a verification that reconstructs the transaction trie for a local block.

Prepare the txHash to verify and the required libraries:

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

Verification logic:

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

The two `true` values respectively mean:

- `rootMatches`: the trie reconstructed from all raw transactions in the block matches the transaction root in the block header.
- `inclusionMatches`: **the specified transaction** passed inclusion proof verification against that root.

# Restore Automatic Mining

```javascript
// 收到交易就自动出块
await rpc("evm_setAutomine", [true]);
```
