---
title: 'An EVM Wallet Login Interface for EOAs'
published: 2026-06-08
updated: 2026-06-09
description: 'React/wagmi EVM login walkthrough: wallet connection, server nonces, SIWE messages, signing, backend address recovery, and proof of control.'
image: 'https://r2.dreaife.tokyo/notion/covers/3795465cca1780d29cb9f993bf218d10/2026%E5%B9%B46%E6%9C%889%E6%97%A5_01_09_11.png'
tags: ['web3', 'wallet']
category: '开荒'
draft: false
lang: 'en'
---

The following reflects only the author's current understanding.

=====================

I recently built a mostly front-end [interface](https://web3wallet-login.block.dreaifehebi.com/) for EOA wallet login. You could call it the beginning of my journey into blockchain development, and it also gave me some hands-on experience with how the EVM actually works.

::github{repo="dreaifeHebi/web3WalletLogin"}

![](https://r2.dreaife.tokyo/notion/covers/3795465cca1780d29cb9f993bf218d10/inline/0d7ea32d51521748-image.png)

# A Wallet Login

Although this is described as a single login, it actually involves two interactions that require confirmation from the wallet. The first is initiated by the page to request access to the wallet address. The second comes from the server, which sends the wallet a message containing an authentication statement, requesting domain, nonce, and other fields in a protocol-compliant structure, then asks the wallet to verify it. The structure currently imitates [EIP-4361](https://eips.ethereum.org/EIPS/eip-4361), though personally, I feel that much of it is more about UI and traceability. In practice, the nonce alone should probably be enough to distinguish requests.

Why must the wallet address be obtained before verification can begin? Presumably because neither the browser nor the wallet inherently trusts the other. If all data exchanged between them is considered untrustworthy, then only an address confirmed by the wallet can be trusted, after which wallet verification can proceed.

# I Control This Wallet!

## What Is Your Wallet Address?

This is essentially an interaction between the browser and the wallet that confirms which wallet address should be selected and authorized for disclosure to the website.

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

## So, Is This Wallet Really Yours?

### I Need You to Authenticate This Claim

Now that the address to authenticate is known, we can prepare a standard SIWE (Sign-In with Ethereum) login signature message. It looks roughly like this:

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

### Only My Private Key Can Produce This Proof

When the wallet receives this message and authentication request, it must ensure that its signature can prove control over the address provided earlier. To do this, the wallet signs the hash of the message using its private key, while ensuring that the signature can still be verified by a website that knows only the wallet address and the requested message. Naturally, a series of mathematical transformations is needed to make this verification method work. For now, the implementation simply uses wagmi's algorithm to verify the returned signature (

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

That brings us to the secp256k1 curve used for EOA wallet signatures. For an EOA wallet, it works roughly like this:

- EOA private key: a random number d of approximately 256 bits
- Public key: an elliptic-curve point Q = d \* G
- Address: the last 20 bytes of keccak256(publicKey)
- Signature: ECDSA over secp256k1

> I do not really understand the actual calculations here either, but my rough understanding is that the private key d cannot be reverse-engineered from the public key Q recovered using the signature and message hash because doing so would require solving the elliptic-curve discrete logarithm problem $Q = d * G$. For secp256k1, a 256-bit curve, this would require roughly $2^{128}$ operations.

Ultimately, the returned signature ($r + s + v$) and the hash of the message sent by the website can be used to recover a public key and derive its address. If that address matches the one provided earlier, it proves that the wallet controls the address.

# Conclusion

That is about it for my first hands-on blockchain development project. Honestly, looking at the actual implementations of private-key signing and signature recovery reminded me a little of when I was learning ACM-style competitive programming (

Still, this feels like a great gateway project, and it has definitely sparked my interest in learning more about blockchain.
