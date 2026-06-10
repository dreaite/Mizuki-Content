---
title: 'An EVM wallet login interface for EOAs'
published: 2026-06-08
updated: 2026-06-09
description: 'A practical walkthrough of an EOA wallet login flow, covering connect wallet, SIWE-style signing messages, wagmi sign requests, and backend signature verification, with a focus on why address connection and ownership proof are two separate steps.'
image: 'https://r2.dreaife.tokyo/notion/covers/3795465cca1780d29cb9f993bf218d10/2026%E5%B9%B46%E6%9C%889%E6%97%A5_01_09_11.png'
tags: ['web3', 'wallet']
category: 'WEB3'
draft: false
lang: 'en'
---

The following only represents the author’s current understanding


=====================


Recently, I built a mainly front-end [interface](https://web3wallet-login.block.dreaifehebi.com/) for EOA wallet login. It can be considered the start of getting into blockChain development, and it also happened to let me get a feel for how the EVM is actually operated.


::github{repo="dreaifeHebi/web3WalletLogin"}


![image.png](https://r2.dreaife.tokyo/notion/covers/3795465cca1780d29cb9f993bf218d10/inline/0d7ea32d51521748-image.png)


# A wallet login


Although it is called one login, the interactions that actually require wallet confirmation happen twice—once for confirming the request initiated by the page to obtain the wallet address, and once for the server side to send a message to the wallet for verification, including things like the authentication message / calling domain / nonce, etc., following a protocol structure. The structure currently used imitates [EIP-4361](https://eips.ethereum.org/EIPS/eip-4361), though personally I feel this is more of a UI / traceability design; in practice, the nonce alone should be enough to ensure request disambiguation.


Why do we need to obtain the wallet address first before initiating verification? Probably because both the browser and the wallet themselves are untrusted. So if the data directly given during the intermediate interaction is considered untrusted, then only the address confirmed through the wallet is trusted, and only then can the process proceed to the next step of wallet verification.


# I control this wallet!


## What is your wallet address?


This is actually an interaction between the browser and the wallet, used to confirm which wallet address should be selected and authorized to be provided to the website.


In this project, wagmi’s connect is actually used to request wallet interaction.


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


Here, wagmi’s useAccount is also used to automatically obtain the updated information after wallet confirmation.


## So, is this wallet you mentioned yours?


### I need you to authenticate this information


Now that the address requiring authentication is known, we can prepare a standard SIWE (Sign-In with Ethereum) login signing message. A message in roughly this format:


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


Then this message is standardized according to EIP-191, to distinguish it from other signatures and ordinary transactions:


`"\x19Ethereum Signed Message:\n" + len(message) + message`


The implementation here comes from wagmi’s signMessageAsync, which performs the actual authentication request to the wallet.


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


### This is authentication that only my private key can produce


When this message reaches the wallet requesting authentication, the wallet needs to ensure that its signature can prove its control over the address previously provided. At this point, the wallet needs to use its private key to encrypt the hash of the information just sent, while also ensuring that this signature can be verified by the website, which only knows the wallet address and the requested message. What is needed here is naturally a series of mathematical transformations to guarantee the validity of this verification method. Of course, here I am just using wagmi’s algorithm to verify the returned signature first (


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


As for the actual verification calculation?


That brings us to the secp256k1 curve used by EOA wallet signatures. For an EOA wallet, it is roughly like this:

- EOA private key: a roughly 256-bit random number d
- Public key: elliptic curve point Q = d * G
- Address: the last 20 bytes of keccak256(publicKey)
- Signature: ECDSA over secp256k1
> However, I actually don’t really understand the actual computation in this part either (, but I roughly know that the reason the private key d cannot be reversed from the public key Q obtained via the signature and message hash is that it would be equivalent to solving the elliptic curve discrete logarithm problem $Q = d * G$, with a workload on the order of about $2^{128}$ (secp256k1 is a 256-bit-level curve).

In this way, using the returned signature ($r + s  + v$) and the message hash that we sent, we can ultimately recover a public key and calculate an address from it. When this address matches the address provided earlier, it proves that this wallet has control over that address.


# Conclusion


As a start to actually developing with blockChain, that’s about it. To be honest, when looking at the actual implementation of private-key signing and signature recovery, it felt a bit like when I first learned ACM (


But as a gateway project, it feels just right—it has sparked my interest in learning blockChain.
