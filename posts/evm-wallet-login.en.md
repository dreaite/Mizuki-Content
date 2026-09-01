---
title: 'An EVM Wallet Login Interface for EOAs'
published: 2026-06-08
updated: 2026-06-09
description: 'React/wagmi EVM login walkthrough: wallet connection, server nonces, SIWE messages, signing, backend address recovery, and proof of control.'
image: 'https://r2.dreaife.tokyo/notion/covers/3795465cca1780d29cb9f993bf218d10/2026%E5%B9%B46%E6%9C%889%E6%97%A5_01_09_11.png'
tags: ['web3', 'wallet']
category: 'EXPLORE'
draft: false
lang: 'en'
---

The following reflects only my current understanding.

=====================

I recently built a mostly frontend [interface](https://web3wallet-login.block.dreaifehebi.com/) for EOA wallet login. It marks the beginning of my exploration into blockchain development and gave me an opportunity to see how the EVM actually works in practice.

::github{repo="dreaifeHebi/web3WalletLogin"}

![](https://r2.dreaife.tokyo/notion/covers/3795465cca1780d29cb9f993bf218d10/inline/0d7ea32d51521748-image.png)

# A Wallet Login

Although this is described as a single login, there are actually two interactions that require confirmation from the wallet. The first is initiated by the page to obtain the wallet address. For the second, the server sends the wallet an authentication message containing fields such as the authentication message, calling domain, and nonce, structured according to a protocol, and asks the wallet to verify it.

The structure currently used imitates [EIP-4361](https://eips.ethereum.org/EIPS/eip-4361), though I personally feel that this structure is more about UI and traceability. In practice, the nonce alone should be enough to distinguish requests.

Why must the wallet address be obtained before verification can begin? Presumably because the browser and wallet do not inherently trust each other. If the data exchanged directly between them is considered untrustworthy, then only an address confirmed by the wallet can be trusted. Only then can the next stage of wallet verification begin.

# I Control This Wallet!

## What Is Your Wallet Address?

This is actually an interaction between the browser and the wallet, used to confirm which wallet address should be selected and authorized for disclosure to the website.

This project uses wagmi's connect functionality to request the wallet interaction.

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

It also uses wagmi's useAccount to automatically retrieve the updated information after the wallet confirms the request.

## So, Does This Wallet Belong to You?

### I Need You to Authenticate This Claim

Now that the address requiring authentication is known, a standard SIWE (Sign-In with Ethereum) login signature message can be prepared. The message looks roughly like this:

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

The message is then standardized according to EIP-191 so that it can be distinguished from other signatures and ordinary transactions:

`"\x19Ethereum Signed Message:\n" + len(message) + message`

The implementation uses wagmi's signMessageAsync to send the actual authentication request to the wallet.

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

### This Proof Can Only Be Created with My Private Key

When the wallet receives this message as an authentication request, it must ensure that its signature can prove control over the address it previously provided. To do this, the wallet uses its private key to encrypt the hash of the information it just received, while also ensuring that the resulting signature can be verified by a website that knows only the wallet address and the requested message.

Naturally, a series of mathematical transformations is required to make this verification method valid. For now, however, I simply use wagmi's algorithm to verify the signature returned by the wallet (

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

As for the actual verification math?

That requires looking at the secp256k1 curve used for EOA wallet signatures. For an EOA wallet, it works roughly like this:

- EOA private key: a random number d of approximately 256 bits
- Public key: an elliptic-curve point Q = d \* G
- Address: the final 20 bytes of keccak256(publicKey)
- Signature: ECDSA over secp256k1

> I do not fully understand the actual calculations involved here either (, but the general idea is that the public key Q recovered from the signature and message hash cannot be reversed to obtain the private key d. Doing so would require solving the elliptic-curve discrete logarithm problem $Q = d * G$, with a workload on the order of $2^{128}$ for secp256k1, which is a 256-bit curve.

Ultimately, the returned signature ($r + s  + v$) and the message hash sent by the website can be used to recover a public key and calculate its address. If that address matches the one provided earlier, it proves that the wallet controls that address.

# Conclusion

That is about it for my first practical blockchain development project. Honestly, looking at the actual implementation of private-key signing and signature recovery reminded me a little of when I was learning ACM programming competitions (

Still, this feels like a fitting gateway project. It has definitely sparked my interest in learning more about blockchain.
