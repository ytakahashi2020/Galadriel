# 1 get information

```
const hash = "";
const signature = "";
const publicKey = "";
```

https://explorer.galadriel.com/

# 2 decode

```
const messageBytes = Buffer.from(hash, 'hex');
const signatureBytes = Buffer.from(signature, 'hex');
const publicKeyBytes = Buffer.from(publicKey, 'hex');
```

# 3 verify

### 1 import

`import nacl from 'tweetnacl';`

### 2 verify

`const isValid = nacl.sign.detached.verify(messageBytes, signatureBytes, publicKeyBytes);`
