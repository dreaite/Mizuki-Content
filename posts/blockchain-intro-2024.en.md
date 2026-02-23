---
title: '区块链认识'
published: 2024-12-09
updated: 2024-12-09
description: '区块链是一种由时间顺序链接的区块组成的结构，具有去中心化、不可篡改性、透明性和安全性等核心特性。其工作原理包括交易生成、验证、打包和添加到链上。应用场景涵盖加密货币、供应链管理、金融服务等。面临的挑战包括扩展性、能耗问题和用户教育。区块链的底层逻辑基于分布式账本和共识机制，确保数据的安全与一致性。'
permalink: 'blockchain-intro-2024'
image: 'https://r2.dreaife.tokyo/notion/covers/1575465cca1780ecb51bc75146cb9231/IMG_1823(1).jpg'
tags: ['web3', 'theory']
category: 'WEB3'
draft: false
lang: 'en'
---

# Blockchain Introduction

## **What is blockchain?**

Blockchain is a chain-like structure composed of a series of blocks linked in chronological order. Each block contains several transaction records, and data security and immutability are guaranteed through cryptographic techniques.

---

## **Core features of blockchain**

1. **Decentralization**
    - There is no central authority or intermediary; all participants jointly maintain the network.
    - Data is stored on every node in the network, reducing the risk of a single point of failure.
2. **Immutability**
    - Once data is written to the blockchain and verified by the network, it is nearly impossible to alter. Altering requires controlling a majority of the network's nodes, which is extremely costly.
3. **Transparency**
    - Data on the blockchain is visible to all participants in the network, enhancing transparency and trust.
4. **Security**
    - Data privacy and security are ensured through cryptographic techniques (such as hashing and public-private key encryption).
5. **Smart Contracts** (supported by specific blockchains, such as Ethereum)
    - Small programs that run on the blockchain, enabling automated and third-party-free contract execution.

---

## **Blockchain Working Principle**

1. **Transaction generation**

    Users initiate transactions on the network (e.g., sending Bitcoin); transactions are broadcast to the entire network.

2. **Transaction verification**

    Nodes in the network validate transaction validity using consensus algorithms (e.g., Proof of Work PoW or Proof of Stake PoS).

3. **Packaging transactions**

    Validated transactions are packed into a block and linked to the previous block via cryptographic techniques.

4. **Add to the chain**

    The new block is appended to the end of the blockchain, becoming part of the chain; records are immutable.

---

## **Blockchain Use Cases**

1. **Cryptocurrencies**
    - Digital currencies such as Bitcoin, Ethereum.
2. **Supply Chain Management**
    - Transparent tracking of production, transportation, and sale of goods.
3. **Financial Services**
    - Decentralized Finance (DeFi), such as cross-border payments, lending, and insurance.
4. **Identity Management**
    - Digital identity verification and management to reduce identity theft.
5. **Healthcare**
    - Medical record sharing and data privacy protection.
6. **Voting Systems**
    - Providing transparent and tamper-proof voting processes.

---

## **Blockchain Challenges**

1. **Scalability**

    Current blockchain networks have slower processing speeds, limiting large-scale applications.

2. **Energy Consumption**

    Blockchain systems like Bitcoin's PoW consensus consume a large amount of energy.

3. **Regulation and Compliance**

    The decentralized nature of blockchain can conflict with traditional regulatory frameworks.

4. **User Education**

    Regular users need to understand and trust this technology.

---

# Blockchain Technology

## **Underlying Logic of Blockchain**

The underlying logic of blockchain is based on distributed ledgers, cryptographic techniques, and consensus mechanisms. Its goal is to achieve a trustless distributed data storage and sharing method.

1. **Decentralized Ledger**
    - Data is distributed across multiple nodes in the network, each with a complete copy of the ledger.
    - Data sharing occurs via a peer-to-peer (P2P) network without a central server.
2. **Chain-based Data Structure**
    - Data is stored in blocks; each block is linked to the previous block via a hash, forming an immutable chain.
3. **Consensus Mechanism**
    - Network nodes reach agreement through specific algorithms (e.g., PoW, PoS) to decide which transactions are recorded on the blockchain.
    - The consensus mechanism ensures data consistency and trust.
4. **Cryptographic Assurance**
    - Hash functions: ensure the integrity of block data.
    - Public and private keys: used for authentication and transaction signing.
    - Merkle trees: efficiently verify data integrity.
5. **Immutability**
    - Through the chain structure and distributed storage, altering a block would invalidate subsequent block hashes, and require controlling a majority of nodes, which is very costly.

---


## **Underlying Blockchain Architecture**

### **1. Data Layer**

The data layer is the foundation for storing data on the blockchain and includes:

- **Transaction Data**: records transaction details, such as Bitcoin transaction records.
- **Block Structure**: includes the block header and block body.
    - **Block Header**:
        - Hash of the previous block.
        - Timestamp.
        - Nonce (used in the consensus mechanism).
    - **Block Body**:
        - The actual transaction data.
- **Chain Structure**: each block is linked to the previous block by a hash, forming a chain.

### **2. Network Layer**

Responsible for communication and data transfer between nodes. Key points include:

- **P2P Network**: all nodes are equal, directly connected to exchange information.
- **Data Propagation**: transactions or blocks are synchronized across the network via broadcast.
- **Node Types**:
    - Full Node: stores the complete ledger and participates in validation.
    - Light Node: stores only necessary data, reducing storage pressure.

### **3. Consensus Layer**

The core of the blockchain, determining data confirmation and synchronization mechanisms:

- **Proof of Work (PoW)**: miners obtain the right to record by solving mathematical problems; Bitcoin is representative.
- **Proof of Stake (PoS)**: validators are chosen based on stake.
- **Byzantine Fault Tolerance (PBFT)**: suitable for consortium chains, solving trust issues among nodes.

### **4. Incentive Layer**

Primarily used to incentivize node participation in network operation, usually including:

- **Token Rewards**: e.g., mining rewards for Bitcoin.
- **Transaction Fees**: nodes that validate transactions and record them in blocks earn fees.

### **5. Contract Layer**

Responsible for smart contract execution and management (if the blockchain supports smart contracts):

- Smart contracts are small programs running on the blockchain, enabling automated execution of conditional logic.
- For example, Ethereum's Solidity language supports complex contract development.

### **6. Application Layer**

Provides services and interfaces for users:

- **User Interface**: such as crypto wallets, DApps (decentralized applications).
- **Scenario Applications**: supply chain tracking, digital identity, voting systems, etc.

---

## **In-Depth Technology Analysis**

### **1. Hash Algorithms**

- Blockchains heavily use hash algorithms (e.g., SHA-256) to generate fixed-length hash values, ensuring data integrity.
- The hash value is a crucial part that uniquely identifies a block in the blockchain.

### **2. Merkle Tree**

- A Merkle tree is a binary tree data structure used to efficiently verify transactions within a block.
- The root hash represents the entire block's transaction set; changing any transaction will change the root hash.

### **3. Cryptographic Signatures**

- Each transaction needs a signature to ensure the sender's identity and transaction non-repudiation.
- Public-key cryptography (e.g., ECDSA) is used to complete signing and verification.

### **4. Distributed Storage**

- The blockchain distributes and stores data via a P2P network, with all nodes jointly maintaining the ledger.

### **5. Timestamp Mechanism**

- Timestamps are recorded in the block header to mark data creation time and prevent replay attacks.

---

## **Conceptual Blockchain Architecture Diagram**

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

# Blockchain Block Construction

## **Block Construction Process**

### **1. Collecting Transactions**

- **Source**: Users on the blockchain network submit transactions; transactions are broadcast to the entire network and enter the nodes' **Mempool**.
- **Selection**: Miners or validators select transactions from the pool to construct blocks, usually prioritizing higher-fee transactions.
- **Size Limits**: Blockchain protocols typically impose limits on block size or transaction count (e.g., Bitcoin's block size is 1 MB).

### **2. Building the Merkle Tree for Transactions**

- **Generating Leaf Nodes**: Hash each selected transaction to create a leaf node.
- **Building Intermediate Nodes**: Pairwise combine leaf hashes and hash the pairings to generate parent nodes.
- **Computing the Root (Merkle Root)**: Repeat this process until obtaining a single root hash.

### **3. Building the Block Header**

The block header is the core part of the block and includes the following key fields:

- **Hash of the Previous Block**: Points to the previous block, forming the chain.
- **Merkle Root Hash**: Identifies the block’s transaction data.
- **Timestamp**: Records the time the block was created.
- **Nonce**: Used in Proof of Work (PoW) solving.
- **Difficulty Target**: The PoW algorithm's difficulty parameter, used to control the block generation speed.

### **4. Determining Block Validity**

- **PoW (Proof of Work)**:
    - Miners adjust the nonce in the block header to try to find a hash that satisfies the difficulty target.
    - For example, Bitcoin requires the block hash to start with a certain number of zeros.
- **PoS (Proof of Stake)**:
    - Validators participate in proposing new blocks based on their stake; consensus voting confirms block validity.

### **5. Broadcasting the Block**

- Miners or validators who find a valid block broadcast it to the network.
- Other nodes validate the block’s validity:
    - Whether it references the correct previous block.
    - Whether it contains valid transactions.
    - Whether it meets the consensus rules (e.g., PoW difficulty).

### **6. Adding the Block to the Chain**

- When the majority of nodes accept the block and add it to their local blockchain, the block is considered “confirmed.”
- Transactions are removed from the mempool, and the blockchain state is updated.

## **Complete Block Construction Example**

Assume Alice transfers 1 BTC to Bob; this transaction undergoes the following process:

### **1. User Generates Transaction**

- Alice signs a transaction with her private key, indicating she wants to send 1 BTC to Bob.
- The transaction is broadcast to the blockchain network and enters the mempool on each node.

### **2. Miners Collect Transactions**

- Miners select transactions from the pool including those for Alice and Bob.
- Suppose the miner also selected another 2000 transactions, totaling nearly 1 MB.

### **3. Computing Merkle Tree**

- The miner hashes each transaction to create leaf nodes.
- Hashes are combined layer by layer to finally produce the Merkle root hash.

### **4. Building the Block Header**

- The miner builds the block header, containing:
    - Hash of the previous block.
    - Merkle root hash of the current block.
    - Current timestamp.
    - Initial nonce (Nonce = 0).

### **5. Mining Process (PoW)**

- The miner tries different nonces, continuously recomputing the block header hash.
- Until a hash meeting the target is found, e.g., starting with 15 zeros.

### **6. Broadcasting the New Block**

- The miner broadcasts the constructed block to the network.
- Other nodes validate the block's legality, including:
    - Whether the previous block hash matches.
    - Whether the Merkle root hash is correct.
    - Whether all transactions are valid.

### **7. Updating the Blockchain**

- After successful validation, nodes add the new block to their local blockchain; Alice's transaction is officially recorded on the chain.
- Bob's account balance is updated to reflect +1 BTC.

## **Block Construction Time and Efficiency**

- **Generation Time**: The block generation time is controlled by the protocol:
    - Bitcoin: average 10 minutes.
    - Ethereum (PoS): average 12 seconds.
- **Factors Affecting Efficiency**:
    - Network latency: broadcasting blocks takes time.
    - Computational power competition: among miners or validators.

---

# Blockchain Network Structure

A blockchain network is a distributed peer-to-peer (P2P) network designed to allow all participating nodes to share, verify, and maintain data equally while preserving decentralization and security. The following is a detailed description of the internal structure of the blockchain network and how it connects to the blockchain network over the Internet:

## **Internal Structure of the Blockchain Network**

### **1. Network Types**

- **Public Blockchains**:
    - Anyone can join the network, read data, send transactions, and participate in consensus.
    - Typical examples: Bitcoin, Ethereum.
- **Consortium Blockchains**:
    - Maintained by multiple institutions or organizations; only authorized members can join.
    - Typical examples: Hyperledger Fabric, Corda.
- **Private Blockchains**:
    - Network controlled by a single entity with strict access restrictions.
    - Typical example: Blockchains used within enterprises.

### **2. Components**

The core components of a blockchain network include:

**a) Nodes (Node)**

- **Definition**: Computing devices (e.g., servers, PCs) running the blockchain client, called nodes.
- **Types**:
    - **Full Node**: Stores the complete copy of the blockchain ledger and participates in validation and relay.
    - **Light Node**: Stores only header data, relying on full nodes for complete data.
    - **Miner Node**: In PoW, a node that generates new blocks through mining.
    - **Validator Node**: In PoS, a node that participates in proposing and validating new blocks.

**b) Peer-to-Peer Connections (P2P Network)**

- **Network Topology**: A decentralized peer network where each node directly communicates with other nodes.
- **Connection Method**:
    - Each node dynamically discovers and connects to a subset of neighboring nodes.
    - Data is broadcast or propagated peer-to-peer to ensure network-wide synchronization.

**c) Data Storage**

- **Ledger**: Each full node stores the entire blockchain ledger (including blocks and transaction data).
- **State Information**: Stores on-chain accounts, smart contracts, and other states (e.g., Ethereum’s state tree).
- **Mempool**: Stores transactions not yet packed into blocks.

**d) Consensus Mechanism**

- **Definition**: Nodes decide which transactions are written into the blockchain via a consensus mechanism (e.g., PoW, PoS).
- **Process**:
    - Nodes propose new blocks.
    - Other nodes verify and, once agreed, the block is added to the chain.

### **3. Data Propagation and Synchronization**

Data propagation in the blockchain network mainly relies on the **P2P Network**:

1. **Transaction Broadcast**:
    - After a user submits a transaction, the node broadcasts the transaction to its neighbors.
    - Neighboring nodes further forward the transaction across the network.
2. **Block Synchronization**:
    - When a node mines a new block, it broadcasts the block to the network.
    - Other nodes verify the block; if valid, they add it to their local chain.

## **How the Blockchain Network Runs on the Internet**

The blockchain network connects globally via the Internet. Here is how it works on the Internet:

### **1. Node Connectivity**

**a) Static Node Connections**

- Nodes specify fixed neighbor addresses via configuration files.
- Common in private and consortium chains.

**b) Dynamic Node Discovery**

- Nodes discover other nodes via Seed Nodes.
- Seed Nodes are pre-configured fixed nodes; their IP addresses are hard-coded in the blockchain client.
- After connecting to seed nodes, nodes receive and cache lists of other nodes to establish connections.

### **2. Data Communication Protocols**

Blockchain networks typically use custom protocols for data transmission:

- **TCP/UDP**:
    - Used for peer-to-peer data transfer.
- **JSON-RPC**:
    - Used to interact with external applications (e.g., wallets, browsers).
- **gRPC**:
    - Commonly used in modern blockchains (e.g., Hyperledger Fabric) to provide efficient communication.

### **3. Firewall and NAT Traversal**

- Blockchain networks often need to traverse firewalls or NAT:
    - Use **UPnP** or **STUN** technologies to automatically open ports.
    - Some blockchains support lightweight nodes connected via **WebSocket**.

### **4. Security Guarantees**

The blockchain network safeguards communication and data security through the following mechanisms:

1. **Encrypted Communications**:
    - Use TLS or other encryption protocols to protect node-to-node data transmission.
2. **Authentication**:
    - Nodes authenticate using public/private key pairs.
3. **Data Integrity**:
    - All data is verified via hashing to prevent tampering.

## **How to Connect to the Blockchain Network**

As a user or developer, you can connect to a blockchain network in the following ways:

### **1. Run a Full Node**

1. **Download the blockchain client**:
    - From the blockchain's official website or open-source communities, download the official client (e.g., Bitcoin Core for Bitcoin or Geth for Ethereum).
2. **Start the node**:
    - Configure the node's seed addresses, network ports, etc.
    - The node will automatically synchronize the complete blockchain data.
3. **Participate in the network**:
    - After synchronization, you can send transactions or participate in consensus.

### **2. Use Light Nodes or API**

1. **Light Nodes**:
    - Light nodes only download block headers, suitable for devices with limited resources.
    - Common light-node tools: Metamask, Electrum.
2. **Public API Services**:
    - Use third-party services (e.g., Infura, Alchemy) to connect to networks like Ethereum.
    - Suitable for DApp development, avoiding data synchronization time.

### **3. Deploy Smart Contracts**

- If you are a developer, you can connect to the blockchain network and deploy smart contracts using blockchain development tools (e.g., Truffle, Hardhat).

# Interacting with Blockchain

## **End-to-End Process: From External Call to Blockchain Transaction Completion**

### **1. User Operation Phase**

Users initiate operations through the DApp interface, e.g., exchanging tokens on a decentralized exchange (DEX).

- **Specific steps:**
  1. **User Input**:
        - The user enters transaction details (e.g., the types and amounts of tokens to swap) on the DApp frontend.
  2. **Calling Smart Contract Methods**:
        - The DApp uses Web3 libraries (such as Web3.js or ethers.js) to generate a method call to the smart contract.
        - The method is sent to the blockchain node via JSON-RPC.
  3. **Signing the Transaction**:
        - The user signs the transaction with a crypto wallet (e.g., MetaMask).
        - The signature is created with the user’s private key, ensuring the transaction’s authenticity and non-repudiation.

### **2. Blockchain Transaction Processing Phase**

The signed transaction is broadcast to the blockchain network and processed by miners or validators.

- **Specific steps:**
    1. **Transaction Broadcast**:
        - The signed transaction is sent to the blockchain network and enters the mempool of all nodes.
    2. **Miners/Validators Packing Transactions**:
        - Miners (PoW) or validators (PoS) select transactions from the mempool, prioritizing higher-fee ones.
    3. **Block Construction and Consensus**:
        - Miners or validators pack transactions into a new block and attempt to add the block to the blockchain.
        - The consensus mechanism (e.g., PoW or PoS) ensures the block’s validity and achieves network-wide agreement.
    4. **Transaction Confirmation**:
        - When the new block is accepted by the network, the transaction is officially written to the blockchain.

---

### **3. Smart Contract Execution Phase**

The logic of smart contracts is executed in the blockchain node’s virtual machine (e.g., Ethereum’s EVM).

- **Specific steps:**
    1. **Smart Contract Trigger**:
        - The transaction in the block calls a contract method; the contract code is loaded and executed in the EVM.
    2. **State Updates**:
        - The contract code can modify the blockchain state (e.g., account balances, token holdings).
        - The updated state is stored in the blockchain’s state tree and recorded in the block.
    3. **Event Emission**:
        - The contract code can emit events; these events are logged, and DApps can listen to these events to update the frontend state.
    4. **Execution Complete**:
        - The contract’s execution result (success or failure) is returned to the caller and logged in the transaction log.

---

### **4. User Result Feedback Phase**

DApps fetch transaction results from the blockchain and display them in the frontend UI.

- **Specific steps:**
    1. **Listening to Transaction Status**:
        - DApps use the blockchain node’s API to query transaction status.
        - If the transaction is included in a block, it is considered complete.
    2. **Updating the Frontend**:
        - If the transaction succeeds, the frontend updates the user’s balances, token quantities, etc.
        - If the transaction fails, show error information (e.g., insufficient Gas).

---

## **Detailed Flow Diagram**

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

## **Example: DApp and Smart Contract Interaction on Ethereum**

### **1. Example Scenario: Token Swap in a Decentralized Exchange (DEX)**

- **Process**
    1. **User initiates a transaction**:
        - The user wants to swap 1 ETH for 500 USDC.
        - In the DApp frontend, select the trading pair and amount, and click "Swap."
    2. **Signing the transaction**:
        - The DApp calls the DEX smart contract’s `swap` method.
        - The user signs the transaction with their wallet and pays gas.
    3. **Transaction broadcast and execution**:
        - The transaction enters the blockchain; miners/validators pack and broadcast it.
        - The smart contract executes:
            - Check if the user has enough balance.
            - Deduct 1 ETH and credit 500 USDC.
            - Update account states.
    4. **Result feedback**:
        - The transaction completes; the DApp listens to events and updates the user’s account information.

---

### **2. How Smart Contracts Run?**

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

**Running details**:

1. The contract method `swap` is triggered by a transaction.
2. The VM validates the call permissions and executes the logic.
3. The state tree updates the user’s balances.
4. The `Swap` event is emitted for the frontend to listen.

---

## **Relationship Between Smart Contracts and DApps**

- **DApp is the User Interface**:
    - Users interact with the DApp frontend, which in turn interacts with the blockchain.
- **Smart Contracts are the Core Logic**:
    - Smart contracts run on the blockchain and handle business rules.
