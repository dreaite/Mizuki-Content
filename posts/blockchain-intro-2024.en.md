---
title: 'Understanding Blockchain'
published: 2024-12-09
updated: 2024-12-09
description: 'Learn blockchain through blocks, distributed ledgers, and consensus: transaction flow, immutability, real-world uses, and scalability tradeoffs.'
image: 'https://r2.dreaife.tokyo/notion/covers/1575465cca1780ecb51bc75146cb9231/IMG_1823(1).jpg'
tags: ['web3', 'theory']
category: 'STUDY'
draft: false
lang: 'en'
---

# Introduction to Blockchain

## **What Is Blockchain?**

A blockchain is a chain-like structure consisting of a series of blocks linked in chronological order. Each block contains multiple transaction records, while cryptographic techniques ensure data security and immutability.

---

## **Core Characteristics of Blockchain**

1. **Decentralization**
	- There is no central authority or intermediary; all participants collectively maintain the network.
	- Data is stored on every node in the network, reducing the risk of a single point of failure.
2. **Immutability**
	- Once data has been written to the blockchain and verified by the network, it is nearly impossible to alter. Tampering would require controlling a majority of the network’s nodes simultaneously, which would be extremely costly.
3. **Transparency**
	- Data on the blockchain is visible to all participants in the network, enhancing the system’s transparency and credibility.
4. **Security**
	- Cryptographic techniques, such as hash functions and public/private key encryption, ensure data privacy and security.
5. **Smart Contracts** (supported by certain blockchains, such as Ethereum)
	- Small programs that run on the blockchain, enabling automated contract execution without third parties.

---

## **How Blockchain Works**

1. **Transaction Generation**

	A user initiates a transaction on the network, such as sending Bitcoin, and the transaction is broadcast across the network.

2. **Transaction Validation**

	Nodes in the network validate the transaction through a consensus algorithm, such as Proof of Work (PoW) or Proof of Stake (PoS).

3. **Transaction Packaging**

	Validated transactions are packaged into a block, which is cryptographically linked to the previous block.

4. **Adding the Block to the Chain**

	The new block is added to the end of the blockchain, becoming part of the chain, and its records cannot be changed.

---

## **Blockchain Use Cases**

1. **Cryptocurrencies**
	- Digital currencies such as Bitcoin and Ethereum.
2. **Supply Chain Management**
	- Transparently tracking the production, transportation, and sale of goods.
3. **Financial Services**
	- Decentralized finance (DeFi), including cross-border payments, lending, and insurance.
4. **Identity Management**
	- Digital identity verification and management, reducing identity theft.
5. **Healthcare**
	- Medical record sharing and data privacy protection.
6. **Voting Systems**
	- Providing transparent and tamper-resistant voting processes.

---

## **Challenges Facing Blockchain**

1. **Scalability**

	Current blockchain networks process transactions relatively slowly, limiting large-scale adoption.

2. **Energy Consumption**

	Blockchain systems such as Bitcoin consume large amounts of energy due to their consensus mechanism (PoW).

3. **Regulation and Compliance**

	Blockchain’s decentralized nature conflicts with traditional regulatory frameworks.

4. **User Education**

	General users need to understand and trust the technology.

# Blockchain Technology

## **The Underlying Logic of Blockchain**

The underlying logic of blockchain is based on distributed ledgers, cryptographic technology, and consensus mechanisms. Its goal is to provide a trustless method for distributed data storage and sharing.

1. **Decentralized Ledger**
	- Data is distributed across multiple nodes in the network, with each node holding a complete copy of the ledger.
	- Data is shared through a peer-to-peer (P2P) network without requiring a central server.
2. **Chained Data Structure**
	- Data is stored in blocks, with each block linked to the previous block through a hash value, forming an immutable chain.
3. **Consensus Mechanism**
	- Network nodes reach agreement through specific algorithms, such as Proof of Work (PoW) or Proof of Stake (PoS), to determine which transactions are recorded on the blockchain.
	- The consensus mechanism ensures data consistency and trustworthiness.
4. **Cryptographic Protection**
	- Hash functions: Ensure the integrity of block data.
	- Public and private keys: Used for identity authentication and transaction signing.
	- Merkle trees: Efficiently verify data integrity.
5. **Immutability**
	- Due to the chained structure and distributed storage, altering one block would invalidate the hashes of all subsequent blocks. It would also require controlling a majority of the nodes simultaneously, making the cost extremely high.

---

## **The Underlying Architecture of Blockchain**

### **1. Data Layer**

The data layer is the foundation for storing blockchain data and includes the following:

- **Transaction Data**: Records transaction details, such as Bitcoin transaction records.
- **Block Structure**: Consists of a block header and a block body.
	- **Block Header**:
		- The hash of the previous block.
		- A timestamp.
		- A nonce used by the consensus mechanism.
	- **Block Body**:
		- The actual transaction data.
- **Chained Structure**: Each block is linked to the previous block through a hash value, forming a chain.

### **2. Network Layer**

The network layer handles communication and data transmission between nodes. Key elements include:

- **P2P Network**: All nodes are equal and communicate directly with one another.
- **Data Propagation**: Transactions and blocks are synchronized across the network through broadcasting.
- **Node Types**:
	- Full nodes: Store the complete ledger and participate in validation.
	- Light nodes: Store only essential data, reducing storage requirements.

### **3. Consensus Layer**

The consensus layer is the core of a blockchain and determines how data is confirmed and synchronized:

- **Proof of Work (PoW)**: Grants the right to record transactions by solving mathematical problems. Bitcoin is a representative example.
- **Proof of Stake (PoS)**: Selects validators based on the amount and duration of their holdings.
- **Practical Byzantine Fault Tolerance (PBFT)**: Used in consortium blockchains to address trust issues between nodes.

### **4. Incentive Layer**

The incentive layer primarily encourages nodes to participate in network operations and usually includes:

- **Token Rewards**: Such as Bitcoin mining rewards.
- **Transaction Fees**: Nodes that validate transactions and record them in blocks receive fees.

### **5. Contract Layer**

The contract layer handles the execution and management of smart contracts if the blockchain supports them:

- Smart contracts are small programs that run on a blockchain and can automatically execute conditional logic.
- For example, Ethereum’s Solidity language supports the development of complex contracts.

### **6. Application Layer**

The application layer provides services and interfaces to users:

- **User Interfaces**: Such as cryptocurrency wallets and DApps (decentralized applications).
- **Use-Case Applications**: Supply chain tracking, digital identity, voting systems, and more.

---

## **Analysis of the Underlying Technologies**

### **1. Hash Algorithms**

- Blockchains make extensive use of hash algorithms, such as SHA-256, to generate fixed-length hash values and ensure data integrity.
- A hash value is an important component that uniquely identifies a block on the blockchain.

### **2. Merkle Trees**

- A Merkle tree is a binary-tree data structure used to efficiently verify transactions within a block.
- The root hash represents the entire set of transactions in the block. Changing any transaction will cause the root hash to change.

### **3. Cryptographic Signatures**

- Each transaction must be signed to verify the identity of the sender and ensure the transaction cannot be repudiated.
- Public-key cryptography, such as ECDSA, is used for signing and verification.

### **4. Distributed Storage**

- Blockchain distributes and stores data through a P2P network, with all nodes collectively maintaining the ledger.

### **5. Timestamp Mechanism**

- A timestamp is recorded in the block header to mark when the data was generated and prevent replay attacks.

---

## **Conceptual Diagram of Blockchain Architecture**

```shell
---------------------------------------------------
|                  应用层                          |
|    用户接口（钱包/DApp）  行业场景应用              |
---------------------------------------------------
|                  合约层                          |
|    智能合约  逻辑和业务实现                        |
---------------------------------------------------
|                  激励层                          |
|    代币奖励  交易手续费                            |
---------------------------------------------------
|                  共识层                          |
|    PoW  PoS  PBFT                               |
---------------------------------------------------
|                  网络层                          |
|    P2P通信  数据传播                              |
---------------------------------------------------
|                  数据层                          |
|    区块  交易记录  链式结构                        |
---------------------------------------------------

```

# Building Blockchain Blocks

## **Block Construction Process**

### **1. Collecting Transactions**

- **Source**: Users submit transactions to the blockchain network. The transactions are broadcast across the network and enter each node’s **transaction pool** (mempool).
- **Selection**: Miners or validators select transactions from the transaction pool to construct a block, usually prioritizing transactions with higher fees.
- **Size Limit**: Blockchain protocols usually limit block size or the number of transactions, such as Bitcoin’s 1 MB block size.

### **2. Building the Transaction Merkle Tree**

- **Generating Leaf Nodes**: A hash is calculated for each selected transaction, with every transaction corresponding to a leaf node.
- **Building Intermediate Nodes**: The hashes of pairs of leaf nodes are combined and hashed again to generate parent nodes.
- **Calculating the Root Node (Merkle Root)**: This process is repeated until a single root hash is produced.

### **3. Building the Block Header**

The block header is the core part of a block and contains the following key fields:

- **Previous Block Hash**: Points to the preceding block, forming a chained structure.
- **Merkle Root Hash**: Identifies the hash of the transaction data within the block.
- **Timestamp**: Records when the block was created.
- **Nonce**: Used in the Proof of Work (PoW) problem-solving process.
- **Difficulty Target**: A difficulty parameter for the PoW algorithm that controls the rate at which new blocks are generated.

### **4. Determining Block Validity**

- **PoW (Proof of Work)**:
	- Miners adjust the nonce in the block header, attempting to find a hash that satisfies the difficulty target.
	- For example, Bitcoin requires a block hash to begin with a specified number of zeros.
- **PoS (Proof of Stake)**:
	- Validators participate in proposing new blocks based on their staked assets, and the block’s validity is confirmed through consensus voting.

### **5. Broadcasting the Block**

- After a miner or validator finds a valid block, it broadcasts the block across the network.
- Other nodes verify the block’s validity:
	- Whether it references the correct previous block.
	- Whether it contains valid transactions.
	- Whether it satisfies the consensus rules, such as the PoW difficulty.

### **6. Adding the Block to the Chain**

- Once most nodes accept the block and add it to their local blockchains, the block is considered “confirmed.”
- The transactions are removed from the transaction pool, and the blockchain state is updated.

## **Complete Example of Block Construction**

Suppose Alice transfers 1 BTC to Bob. The transaction goes through the following process:

### **1. The User Generates a Transaction**

- Alice uses her private key to sign a transaction indicating that she wants to send 1 BTC to Bob.
- The transaction is broadcast to the blockchain network and enters each node’s transaction pool.

### **2. A Miner Collects Transactions**

- A miner selects the transaction between Alice and Bob from the transaction pool.
- Suppose the miner also selects another 2,000 transactions, bringing the total size close to 1 MB.

### **3. Calculating the Merkle Tree**

- The miner calculates the hash of each transaction to use as a leaf node.
- The hashes are merged layer by layer until the Merkle root hash is generated.

### **4. Building the Block Header**

- The miner constructs the block header, which contains:
	- The hash of the previous block.
	- The Merkle root hash of the current block.
	- The current timestamp.
	- An initial nonce set to 0.

### **5. Mining Process (PoW)**

- The miner tries different nonces and continuously recalculates the block header’s hash.
- This continues until a hash satisfying the difficulty target is found, such as one beginning with 15 zeros.

### **6. Broadcasting the New Block**

- The miner broadcasts the constructed block across the network.
- Other nodes verify whether the block is valid, including:
	- Whether the previous block’s hash matches.
	- Whether the Merkle root hash is correct.
	- Whether all transactions are valid.

### **7. Updating the Blockchain**

- After successful validation, nodes add the new block to their local blockchains, and Alice’s transaction is officially recorded on-chain.
- Bob’s account balance is credited with 1 BTC.

## **Block Construction Time and Efficiency**

- **Generation Time**: The protocol controls the time required to generate each block:
	- Bitcoin: An average of 10 minutes.
	- Ethereum (PoS): An average of 12 seconds.
- **Factors Affecting Efficiency**:
	- Network latency: Broadcasting blocks takes time.
	- Competition for computing resources: Miners or validators compete for resources.

# Blockchain Network Architecture

A blockchain network is a **distributed peer-to-peer network (P2P network)** designed to allow all participating nodes to share, validate, and maintain data equally while preserving decentralization and security. The following sections provide a detailed introduction to the internal structure of a blockchain network and how it connects through the internet:

## **Internal Structure of a Blockchain Network**

### **1. Network Types**

Blockchain networks can be divided into the following types:

- **Public Blockchain**:
	- Anyone can join the network, read data, submit transactions, and participate in consensus.
	- Typical examples: Bitcoin and Ethereum.
- **Consortium Blockchain**:
	- Jointly maintained by multiple institutions or organizations, with participation restricted to authorized members.
	- Typical examples: Hyperledger Fabric and Corda.
- **Private Blockchain**:
	- The network is controlled by a single entity with strictly limited permissions.
	- Typical example: Blockchains used internally by enterprises.

### **2. Components**

The core components of a blockchain network include:

**a) Nodes**

- **Definition**: Computing devices in the network, such as servers and PCs, that run blockchain clients are called nodes.
- **Types**:
	- **Full Node**: Stores a complete copy of the entire blockchain and validates and relays transactions.
	- **Light Node**: Stores only block header data and relies on full nodes to obtain complete data.
	- **Miner Node**: A node that generates new blocks through mining in PoW.
	- **Validator Node**: A node that participates in proposing and validating new blocks in PoS.

**b) Peer-to-Peer Connections (P2P Network)**

- **Network Topology**: A decentralized peer-to-peer network in which each node communicates directly with other nodes.
- **Connection Methods**:
	- Each node dynamically discovers and connects to a subset of neighboring nodes.
	- Data is propagated through broadcasting or direct peer-to-peer transmission, ensuring network-wide synchronization.

**c) Data Storage**

- **Ledger**: Each full node stores the entire blockchain ledger, including block and transaction data.
- **State Information**: Stores the state of on-chain accounts, smart contracts, and other data, such as Ethereum’s state tree.
- **Mempool**: Stores transactions that have not yet been included in a block.

**d) Consensus Mechanism**

- **Definition**: Nodes use a consensus mechanism, such as PoW or PoS, to determine which transactions are written to the blockchain.
- **Process**:
	- A node proposes a new block.
	- After other nodes validate and agree on it, the block is added to the chain.

### **3. Data Propagation and Synchronization**

Data propagation in a blockchain network primarily relies on the **P2P network**:

1. **Transaction Broadcasting**:
	- After a user submits a transaction, a node broadcasts it to neighboring nodes.
	- Those neighboring nodes continue relaying the transaction across the network.
2. **Block Synchronization**:
	- When a node mines a new block, it broadcasts the block across the network.
	- Other nodes validate the block and, if valid, add it to their local chains.

## **How Blockchain Networks Operate on the Internet**

Blockchain networks use the internet to connect and communicate globally. The following describes how they operate over the internet:

### **1. Node Connections**

**a) Static Node Connections**

- Nodes specify fixed neighboring node addresses through configuration files.
- This is common in private and consortium blockchains.

**b) Dynamic Node Discovery**

- Nodes discover the addresses of other nodes through **seed nodes**.
- Seed nodes are predefined fixed nodes whose IP addresses are hard-coded into the blockchain client.
- After connecting to a seed node, a node receives and caches a list of other node addresses and establishes connections with them.

### **2. Data Communication Protocols**

Blockchain networks typically use custom communication protocols for data transmission:

- **TCP/UDP**:
	- Used for peer-to-peer data transmission.
- **JSON-RPC**:
	- Used to interact with external applications, such as wallets and browsers.
- **gRPC**:
	- Commonly used in modern blockchains, such as Hyperledger Fabric, to provide efficient communication.

### **3. Firewalls and NAT Traversal**

- Blockchain networks often need to traverse firewalls or NAT:
	- **UPnP** or **STUN** technology is used to open ports automatically.
	- Some blockchains support lightweight node connections through **WebSocket**.

### **4. Security Measures**

Blockchain networks protect communications and data through the following mechanisms:

1. **Encrypted Communication**:
	- TLS or other encryption protocols are used to protect data transmission between nodes.
2. **Identity Authentication**:
	- Nodes authenticate their identities using public/private key pairs.
3. **Data Integrity**:
	- All data is verified using hashes to prevent tampering.

## **How to Connect to a Blockchain Network**

As a user or developer, you can connect to a blockchain network in the following ways:

### **1. Running a Full Node**

1. **Download a Blockchain Client**:
	- Download the official client from the blockchain’s official website or open-source community, such as Bitcoin’s `Bitcoin Core` or Ethereum’s `Geth`.
2. **Start the Node**:
	- Configure the node’s seed addresses, network ports, and other settings.
	- The node will automatically synchronize the blockchain’s complete data.
3. **Participate in the Network**:
	- Once synchronization is complete, the node can submit transactions or participate in consensus.

### **2. Using a Light Node or API**

1. **Light Node**:
	- A light node downloads only block headers and is suitable for resource-constrained devices.
	- Common light-node tools include `Metamask` and `Electrum`.
2. **Public API Services**:
	- Use third-party services, such as Infura or Alchemy, to connect to networks such as Ethereum.
	- This is suitable for DApp development and eliminates the time required to synchronize data.

### **3. Deploying Smart Contracts**

- If you are a developer, you can use blockchain development tools, such as Truffle or Hardhat, to connect to a blockchain network and deploy smart contracts.

# Interacting with a Blockchain

## **Overall Process from an External Call to Completing a Blockchain Transaction**

### **1. User Operation Stage**

A user initiates an action through a DApp interface, such as exchanging tokens on a decentralized exchange (DEX).

- **Detailed Process:**
	1. **User Input**:
		- The user enters transaction information in the DApp’s front-end interface, such as the type and amount of tokens to exchange.
	2. **Calling a Smart Contract Method**:
		- The DApp uses a Web3 library, such as Web3.js or ethers.js, to generate a smart contract method call.
		- The method is sent to a blockchain node through a JSON-RPC request.
	3. **Signing the Transaction**:
		- The user digitally signs the transaction through a cryptocurrency wallet, such as MetaMask.
		- The signature is created using the user’s private key, ensuring the transaction’s authenticity and non-repudiation.

### **2. Blockchain Transaction Processing Stage**

The signed transaction is broadcast to the blockchain network and processed by miners or validators.

- **Detailed Process:**
	1. **Transaction Broadcasting**:
		- The signed transaction is sent to the blockchain network and enters the **transaction pool (mempool)** of every node.
	2. **Miners/Validators Package the Transaction**:
		- Miners (PoW) or validators (PoS) select transactions from the transaction pool, prioritizing transactions with higher fees.
	3. **Block Construction and Consensus**:
		- Miners or validators package transactions into a new block and attempt to add the block to the blockchain.
		- A consensus mechanism, such as PoW or PoS, ensures that the block is valid and allows the network to reach agreement.
	4. **Transaction Confirmation**:
		- Once the new block is accepted across the network, the transaction is officially written to the blockchain.

---

### **3. Smart Contract Execution Stage**

Smart contract logic is executed in the virtual machine of each blockchain node, such as Ethereum’s EVM.

- **Detailed Process:**
	1. **Smart Contract Invocation**:
		- A transaction in the block calls a contract method, and the contract code is loaded and executed in the EVM.
	2. **State Update**:
		- The contract code can modify blockchain state, such as account balances and token holdings.
		- The modified state is stored in the blockchain’s state tree and recorded in the block.
	3. **Event Emission**:
		- The contract code can emit **events**, which are recorded in logs. The DApp can listen for these events to update its front-end state.
	4. **Execution Completion**:
		- The contract execution result, whether successful or failed, is returned to the caller and written to the transaction log.

---

### **4. User Feedback Stage**

The DApp retrieves the transaction result from the blockchain and displays it to the user in the front-end interface.

- **Detailed Process:**
	1. **Monitoring Transaction Status**:
		- The DApp queries the transaction status through the blockchain node’s API.
		- If the transaction has been included in a block, it is considered complete.
	2. **Updating the Front-End Interface**:
		- If the transaction succeeds, the front end updates the user’s balance, token amounts, and other state.
		- If the transaction fails, it displays an error message, such as insufficient Gas.

---

## **Detailed Process Diagram**

```shell
1. 用户操作 DApp 前端
   ↓
2. 前端生成合约调用请求
   ↓
3. 用户通过钱包签名交易
   ↓
4. DApp 将签名交易发送到区块链节点
   ↓
5. 节点广播交易到全网
   ↓
6. 矿工/验证者打包交易，生成新区块
   ↓
7. 智能合约在虚拟机中执行逻辑
   ↓
8. 区块链更新状态，记录执行结果
   ↓
9. DApp 查询交易状态，更新界面
```

---

## **Example: Interaction Between a DApp and a Smart Contract on Ethereum**

### **1. Example Scenario: Token Exchange on a Decentralized Exchange (DEX)**

- **Process**
	1. **The User Initiates a Transaction**:
		- The user wants to exchange 1 ETH for 500 USDC.
		- The user selects the trading pair and amount in the DApp front end, then clicks “Swap.”
	2. **Signing the Transaction**:
		- The DApp calls the DEX smart contract’s `swap` method.
		- The user signs the transaction through a wallet and pays the Gas fee.
	3. **Transaction Broadcasting and Execution**:
		- The transaction enters the blockchain and is packaged and broadcast by a miner or validator.
		- The smart contract executes:
			- It checks whether the user has a sufficient balance.
			- It deducts 1 ETH and adds 500 USDC.
			- It updates the account state.
	4. **Result Feedback**:
		- Once the transaction is complete, the DApp listens for events and updates the user’s account information.

---

### **2. How Does a Smart Contract Run?**

Using the `swap` method as an example:

```solidity
function swap(uint256 ethAmount, address recipient) external {
    require(balances[msg.sender] >= ethAmount, "Insufficient ETH");
    uint256 usdcAmount = getUSDCAmount(ethAmount);
    balances[msg.sender] -= ethAmount;
    balances[recipient] += usdcAmount;
    emit Swap(msg.sender, ethAmount, usdcAmount);
}
```

**Execution Details**:

1. The contract’s `swap` method is triggered by a transaction.
2. The virtual machine verifies the caller’s permissions and executes the logic.
3. The state tree updates the user’s balance.
4. The `Swap` event is emitted for the front end to listen to.

---

## **Relationship Between Smart Contracts and DApps**

- **A DApp Is the User Interface**:
	- The user interacts with the DApp front end, which then interacts with the blockchain.
- **A Smart Contract Contains the Core Logic**:
	- Smart contracts run on the blockchain and handle business rules.
