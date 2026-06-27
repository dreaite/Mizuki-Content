---
title: '关于EOA钱包在链上的基础操作'
published: 2026-06-27
updated: 2026-06-27
description: '本篇文章深入探讨了EOA钱包在链上的基础操作，涵盖钱包创建与导入、HD助记词生成流程、BIP‑39/32/44 标准的详细原理，以及验证（EIP‑191、EIP‑712）和交易（to、value、data、nonce、gas、chainId）两大核心功能，帮助读者快速掌握以太坊钱包的创建、恢复、签名验证和交易发起等关键技术要点。'
permalink: 'EOA'
image: ''
tags: []
category: 'WEB3'
draft: true
---

读前提醒，本文只代表作者个人观点。


========


钱包作为用户在实际和web3世界进行交互时经由的账号，应该说算是探索web3的门户了（在个人理解中）。所以，本次探索的内容就基于这个认识，着重探索了一下以钱包为主体，看看一个钱包可以在链上做到的基本行动。


# 钱包的创建及其行动范围


## 钱包的创建和导入

- 钱包的创建

    一般而言，只要你创建一个符合[1,n)的随机数，都可以算得上一个合格的钱包密钥，而这个密钥d*G得到的公钥通过keccak256算出的钱包地址，就是此时你创建的这个密钥的存在在block chain上的一个钱包。换句话说，在理论上，钱包一直存在在block chain上，而在你创建了一个密钥，可以对应到这个地址，你便可以作为它的owner来激活并使用它了（没有被别人使用的情况下）。


    但是这样每次都是需要特地创建一个随机数，才能生成一个钱包的话，还是有点太过麻烦/而且也并不好记忆一个随机的16位大数，那么有没有更简单的方式可以批量化地创建多个符合模式的钱包，还能让我在恢复的时候只用一个统一的方便记忆的内容就能一次性恢复它们呢？这就是HD钱包（Hierarchical Deterministic Wallet），或者也可以说说是现在最常用的助记词钱包。


    它通过BIP-39来生成一套助记词和其seed，然后通过BIP-32从seed派生出m，最后通过BIP-44来按照m/44‘/60’/acc‘/0/i的格式来进行钱包的批量计算生成。

- 钱包的恢复/导入

    对于普通钱包，就是只要记住0x开头的那一串密钥就可以恢复了（记忆力惊人的话）。


    而对于更常用的HD wallet，则是通过走上述的那套派生流程来恢复一些常用的地址。具体步骤可以从BIP-39生成助记词后无缝衔接。


## 验证和交易


如果按照钱包发起的行动是否可以直接改变链上状态来划分的话，大概可以分成验证和交易这两类。

- 验证

    验证，顾名思义，如之前的blog所说的，通过签名一段EIP-191的字段（一般为SIWE格式），让接收签名的服务方完成钱包的所有权验证，这就是它所做的事情。


    ::site{url="https://dreaife.tokyo/evm-wallet-login/"}


    当然，这样钱包如果只想做像签名这样简单的操作的话，那么对于钱包而言可以做的事情就太少了，于是，EIP-712就此出现。


    通过定义一段共识的签名字段，从而让用户只用通过签名，就可以授权给DApp或者其他服务来发起交易来调用链上的智能合约执行签名内容，从而让用户可以更加方便便捷地控制链上的资产。


    当然还有像EIP-7702这样的让EOA钱包获得接近合约钱包能力的协议，不过这里主要考虑的是EOA钱包相关，就没有深入了解了。

- 交易

    交易，是钱包主动改变链上状态的基本方式。它通常包含to｜value｜data｜nonce｜gas｜chainId这些基本内容。通过控制这些字段的内容，钱包发起的交易可以做到：转账，调用合约，部署合约等基本操作。


# HD钱包的创建


这里开始介绍对于现在最常用的HD钱包，对于ETH链上的钱包，会是如何生成出助记词，并由此派生出$2^{31}*2^{31} $（account hardened派生的$2^{31}$种可能性*address_index non-hardened派生的$2^{31}$种可能性）可能性的钱包私钥。


## HD钱包的私钥创建流程


对于一次从生成助记词开始到派生出一个可以实际控制钱包地址的私钥，一般会遵循这样的一个流程。

- BIP-39生成助记词和seed
- BIP-32通过seed派生出主密钥m
- BIP-44则是对于Ethereum使用的m/44’/60’/account’/0/i这样的派生规则，通过account和i来确定性地派生出一个私钥

下面对于每步流程进行详细介绍。


## 生成助记词和seed


助记词的生成

- 生成随机熵 entropy

    BIP-39生成助记词时，首先是生成一个128/160/192/224/256 bit的随机数。


    它们分别对应12位/15位/18位/21位/24位 的助记词。这里我们用256bit entropy，即生成24位助记词作为例子。

- 对entropy 进行SHA-256计算，获得一个新的256bit数
- 取长度为ENT/32的checksum

    换句话说，先对SHA-256计算后的数据计算checksum，然后取长度为ENT/32的checksum结果的前这么多位。对于256bit的随机数而言，就是取checksum的前8bit。

- 对于entropy和checksum进行拼接，得到一个256bit+8bit，即264bit的数
- 这里我们按照11bit来对这个数据进行分组，可以得到264/11 = 24组，这也是为什么256bit对应了24位助记词
- 然后对于每组，在2048（$2^{11}$）个的BIP-39 wordlist中挑选出对应word
- 此时获得的24位word就是一般在HD钱包中使用的助记词

然后是助记词到seed的生成


这里是通过PBKDF2-HMAC-SHA512来计算出一个512bit的seed。具体计算如下：


$PBKDF2-HMAC-SHA512(password=mnemonic ,salt="mnemonic"+password,iteration=2048,dkLen=64bytes)$


即把utf8 byte stream话的助记词作为password，salt为“mnemonic”+password，进行HMAC-SHA512 iteration=2048次。第一次的U1是通过助记词和password 以及block_index来计算(U1=HMAC(password,salt || INT(block_index)))，后面的U2开始都是用上一次计算的$U_{i-1}$作为key来进行HMAC-SHA512的计算(U2=HMAC(password, U1))。


由此最终计算出的第一个block的result = U1 xor U2 xor … xor U2048，因为512bit的输出就为要求的长度64byte，所以block只有一个，此时输出的result就是按照BIP-39规则生成出来的seed。


## 主密钥m的派生


根据BIP-32，对于上面计算出来的seed再执行一轮HMAC-SHA512加密得到I，具体内容如下。


$I = HMAC-SHA512(key = \text{``Bitcoin seed''}, data = seed)
$


此时得到了一个512bit的I，按照256bit的长度，可以把它拆出左右两半长度各为256bit的数字。


对于左边的$I_L$，作为主密钥master private key；对于右边的$I_R$，作为master chain code。


它们会用于下一步BIP-44的派生计算中。


## 一个特定密钥的派生计算


接下来就是BIP-44是如何规定通过主密钥，沿着m/44’/60’/account’/0/i路径来通过BIP-32计算出一个特定密钥的了。


这里因为开始进入secp256k1椭圆曲线的群计算范畴了，所以如果不了解基础知识的话，欢迎看我之前的原理证明（


::site{url="https://dreaife.tokyo/eoa-sign-verify/"}

- 派生路径m/44’/60’/account’/0/i

    这里先介绍一下派生路径到底是什么吧。


    派生路径可以理解为一个以主密钥m为根节点的深度为6层的数，每层都是一个$2^{32}$的数。但是对于这个$2^{32}$的数，一般只会使用其中一半，即$2^{31}$的数。这是由每层数字右上角的‘是否hardened来决定这层的数字i是单纯使用i（[0,$2^{31}$)），还是使用i‘=i+$2^{31}$。


    同时这里的hardened标记也会影响向子节点计算时的计算方式。


    而对于m后面44’/60’/account’/0/i这五层的含义，每层分别是：

    - 44‘：BIP-44规定的目标
    - 60’：对于Ethereum使用的coin type
    - account‘：派生时选择的账户编号
    - 0：external chain，一般用于普通收款地址
    - i：对于每个账户的，第i个地址
- non-hardened 子节点计算方式

    对于某层子节点的数字i，可以通过父节点的密钥IL(下称pPk)和chainCode IR(下称pCc)通过下式计算得出子节点的I。


    $$
    I = HMAC-SHA512(key=pCc,data=(serP(pPk*G) || ser32(i))
    $$


    其中，$serP(pPk*G)$意味着，0x02/0x03 || (pPk*G)_x)，pPk*G即为父节点的公钥，0x02还是0x03由计算出的父节点公钥（mod p）的y/p-y为奇数还是偶数决定。


    对于得到的I，同样按照256bit的长度，拆分为左右IL和IR。


    对于该子节点密钥child private key就为(IL+parent private key) mod n


    而子节点的child chain code，则为IR

- hardened 子节点计算方式

    对于某层子节点的数字i’，可以通过父节点的密钥IL(下称pPk)和chainCode IR(下称pCc)通过下式计算得出子节点的I。


    $$
    I = HMAC-SHA512(key=pCc,password=(0x00 || ser256(pPk) || ser32(i + 2^{31}))
    $$


    其中0x00意味着直接使用私钥pPk，所以不再需要判断公钥的y的奇偶性。


    对于得到的I，同样按照256bit的长度，拆分为左右IL和IR。


    对于该子节点密钥child private key就为`(IL+parent private key) mod n`


    而子节点的child chain code，则为`IR`

- 最终得到的私钥

    按照m/44’/60’/account’/0/i这样一层层派生，最终达到address_index i的叶子节点，在这个选定的节点上计算出的该子节点的child private key，即为该账户地址的私钥d。它的实际账户地址，可以通过一般的keccak256计算私钥d*G，并取后20byte得到。


    同时对于这个地址，有通过EIP-55的checksum对普通地址转换成大小写地址来进行校验的方式来保证地址格式的合法性（检查字符串格式/输入错误）。

    > EIP-55是一种不改变地址字母，只根据该地址的keccak256计算结果改变其大小写。对于i位上的数字，如果其地址为a-f的同时，其keccak256计算结果对应的i位≥8，则将其大写，否则不变。

# 钱包的交易
