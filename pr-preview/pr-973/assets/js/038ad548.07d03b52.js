"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[15408],{4685:e=>{e.exports=JSON.parse('{"title":"A Technical Deep Dive + 5 Simple Steps to Get Started With Push NFT Chat","description":"Cover image of A Technical Deep Dive + 5 Simple Steps to Get Started With Push NFT Chat","frontMatter":{"slug":"a-technical-deep-dive-5-simple-steps-to-get-started-with-push-nft-chat","title":"A Technical Deep Dive + 5 Simple Steps to Get Started With Push NFT Chat","authors":["push"],"image":"./cover-image.webp","text":"Push NFT Chat is a seamless and secure communication platform that enables NFTs to chat directly with one another. Unlike traditional chat systems tied to wallet addresses, Push NFT Chat allows chats to be specifically associated with individual NFTs owned by users. This is a game changer for chat integrations.","tags":["Push Protocol","Developer","NFT"]},"content":{"id":"a-technical-deep-dive-5-simple-steps-to-get-started-with-push-nft-chat","metadata":{"permalink":"/push-website/pr-preview/pr-973/blog/a-technical-deep-dive-5-simple-steps-to-get-started-with-push-nft-chat","source":"@site/blog/2023-07-05-neft-chat-tech-deepdive/index.md","title":"A Technical Deep Dive + 5 Simple Steps to Get Started With Push NFT Chat","description":"Cover image of A Technical Deep Dive + 5 Simple Steps to Get Started With Push NFT Chat","date":"2023-07-05T00:00:00.000Z","formattedDate":"July 5, 2023","tags":[{"label":"Push Protocol","permalink":"/push-website/pr-preview/pr-973/blog/tags/push-protocol"},{"label":"Developer","permalink":"/push-website/pr-preview/pr-973/blog/tags/developer"},{"label":"NFT","permalink":"/push-website/pr-preview/pr-973/blog/tags/nft"}],"readingTime":6.75,"hasTruncateMarker":true,"authors":[{"name":"Push Protocol","url":"https://twitter.com/pushprotocol","imageURL":"/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"a-technical-deep-dive-5-simple-steps-to-get-started-with-push-nft-chat","title":"A Technical Deep Dive + 5 Simple Steps to Get Started With Push NFT Chat","authors":["push"],"image":"./cover-image.webp","text":"Push NFT Chat is a seamless and secure communication platform that enables NFTs to chat directly with one another. Unlike traditional chat systems tied to wallet addresses, Push NFT Chat allows chats to be specifically associated with individual NFTs owned by users. This is a game changer for chat integrations.","tags":["Push Protocol","Developer","NFT"]},"unlisted":false,"prevItem":{"title":"Exploring the Role of ZK Knowledge in Decentralized Communication\ud83c\udf10","permalink":"/push-website/pr-preview/pr-973/blog/exploring-the-role-of-zk-knowledge-in-decentralized-communication"},"nextItem":{"title":"June Monthly Recap \ud83c\udf05","permalink":"/push-website/pr-preview/pr-973/blog/june-monthly-recap"}},"content":"![Cover image of A Technical Deep Dive + 5 Simple Steps to Get Started With Push NFT Chat](./cover-image.webp)\\n\\n\x3c!--truncate--\x3e\\n\\n\x3c!--customheaderpoint--\x3e\\n\\nExploring the Inner Workings and Implementation of Push NFT Chat for Enhanced NFT-Linked Conversations\\n\\n## What is Push NFT Chat?\\n\\nPush NFT Chat is a seamless and secure communication platform that enables NFTs to chat directly with one another. Unlike traditional chat systems tied to wallet addresses, Push NFT Chat allows chats to be specifically associated with individual NFTs owned by users. This is a game changer for chat integrations.\\n\\nWith Push NFT Chat, users now have the flexibility to choose whether their communications remain connected to their NFTs or their wallets.\\n\\nSo how does it all work?\\n\\n## Understanding Encryption Methodology of Push NFT Chat\\n\\nThe encryption methodology employed by Push Chat ensures secure and private communication while supporting the unique requirements of Push NFT Chat. Both Push Chat and Push NFT Chat rely on PGP keys which form the foundation for wallet-to-wallet communication. These keys are encrypted and stored on the Push Network, facilitating end-to-end encrypted (E2EE) universal inboxes.\\n\\nPush NFT Chat utilises a distinct encryption mechanism specifically tailored to support NFT chats. This approach combines security and versatility, allowing seamless integration with NFTs. The encryption process involves a three-pass encryption procedure for new users:\\n\\n1. A secret key is generated on the client side, automatically by the SDK, with the user having the option to choose the secret key if desired.\\n2. The generated secret key is then used to encrypt the locally generated PGP key on the client side.\\n3. Subsequently, the wallet encrypts the secret key itself, along with the encrypted PGP key. The encrypted versions of both the secret key and the PGP key are stored on the Push nodes.\\n\\nDespite the integration of NFT-specific features, the default behaviour of Push Chat remains intact. Users still sign in once to unlock their Push Profiles and initiate messaging. However, the updated implementation now offers support for chat and connection transfers when moving NFTs to different wallets.\\n\\nThis means, even if you move your NFT from one wallet to another, your chats still remain tied to that NFT. In the case of transferring ownership of your NFT, unless you give that new owner your password, they\u2019ll be required to create a new chat profile and hence be unable to access your previous chats tied to the NFT (more on ownership transfer in Step 5 of Getting Started).\\n\\nThis enhanced functionality ensures a seamless and continuous user experience while maintaining the security and privacy of communications.\\n\\nThe encryption methodology of Push Chat guarantees the protection of user data and enables the integration of NFTs into the communication framework, empowering users to securely connect and communicate in the context of their NFTs.\\n\\n## Getting Started with Push NFT Chat\\n\\nTo get started with Push NFT Chat, the easiest approach is to utilise the Push SDK package. This can be seamlessly integrated into your frontend to develop custom NFT-tied chat systems. Additionally, Push NFT Chat can be deployed in the backend to implement automated chatbots or systems.\\n\\nThis guide is designed to showcase the straightforward process of building an NFT chat system with Push NFT Chat. Despite the complexity of the underlying logic, the Push Protocol abstracts away the intricacies, making the implementation remarkably simple for developers.\\n\\nFor the purpose of this guide, we will walk through the process of writing a simple TypeScript script to send NFT-tied chat messages.\\n\\n## Step 1: Setting up the Environment\\n\\nTo begin, you need to set up your development environment.\\n\\nEnsure that you have the necessary dependencies installed, such as Node.js, TypeScript and ts-node. Create a new project directory and initialise it with a package.json file. Install the Push SDK package which will fetch and install the required dependencies.\\n\\n```js\\n# create project directory\\nmkdir nft-chat-guide\\n# browse to project directory\\ncd nft-chat-guide\\n# Initialise the project\\nnpm init --y\\n# Install the dependencies\\nnpm install @pushprotocol/restapi@latest ethers@^5.6\\n# Create the main ts file\\ntouch index.ts\\n```\\n\\n<blockquote><i>Note: ethers is a peer dependency required by the restapi package</i></blockquote>\\n\\n## Step 2: Creating an NFT-Chat Profile\\n\\nBefore you can create an NFT-Chat profile, it is essential to have a wallet that owns an NFT. This ensures that you have a unique NFT to associate with your chat profile. You have the flexibility to choose from various options: you can utilise any NFT available or even create your own NFT contract and mint some NFTs specifically for this purpose.\\n\\n```js\\n# setup .env file to store private info safely\\ntouch .env\\nnpm install dotenv\\n# type definitions for nodeJs\\nnpm install --save @types/node\\n```\\n\\nInside index.ts add the following code to create a Push NFT chat profile.\\n\\n```js\\nimport { PushAPI } from \'@pushprotocol/restapi\'\\nimport { ENV } from \'@pushprotocol/restapi/src/lib/constants\'\\nimport * as dotenv from \'dotenv\'\\nimport { ethers } from \'ethers\'\\ndotenv.config()\\n\\n// using staging environment\\nconst env = ENV.STAGING\\n\\n/**\\n* Creates a Push NFT Profile\\n* @param signer - signer of wallet which owns the NFT\\n* @param account - NFT account\\n* @param password - password of NFT Profile\\n*/\\nconst PushAPI_nft_user_create = async (\\n signer: ethers.Signer,\\n account: string,\\n password: string\\n) => {\\n const response = await PushAPI.user.create({\\n   account,\\n   signer,\\n   env,\\n   additionalMeta: { NFTPGP_V1: { password } },\\n })\\n return response\\n}\\n\\nconst NFT_CHAT = async () => {\\n // private key of wallet holding the NFT\\n const nftHolderWalletPrivatekey1 = process.env.NFT_HOLDER_WALLET_PRIVATE_KEY_1\\n const nftSigner1 = new ethers.Wallet(`0x${nftHolderWalletPrivatekey1}`)\\n // nft:eip155:${nftChainId}:${nftContractAddress}:${nftTokenId}\\n const nftAccount1 =\\n   \'nft:eip155:11155111:0x42af3147f17239341477113484752d5d3dda997b:2\'\\n // user preferred profile password\\n const nftProfilePassword1 = \'@PushNFTProfile#01\'\\n const pushProfile1 = await PushAPI_nft_user_create(\\n   nftSigner1,\\n   nftAccount1,\\n   nftProfilePassword1\\n )\\n console.log(pushProfile1)\\n}\\n\\nNFT_CHAT()\\n```\\n\\nBehind the scenes, the Push SDK handles the creation of data for your Push profile, incorporating verification proofs that are subsequently verified by the Push nodes. These verification proofs help establish the authenticity and integrity of your profile within the Push network.\\n\\nMoreover, the Push nodes play a crucial role in verifying the ownership of the NFT associated with your wallet on the blockchain. This verification process ensures that the NFT is genuinely owned by your wallet address, providing a secure and reliable connection between your NFT and your NFT-Chat profile.\\n\\n### Step 3: Sending messages to another Push Profile\\n\\nAn NFT-Push Chat Profile can send messages to another NFT-Push Profile or a wallet-based Push profile. In the following example, we would see how one NFT Profile can send a message to another NFT Profile.\\n\\n```js\\nimport { PushAPI } from \'@pushprotocol/restapi\';\\nimport { ENV } from \'@pushprotocol/restapi/src/lib/constants\';\\nimport * as dotenv from \'dotenv\';\\nimport { ethers } from \'ethers\';\\ndotenv.config();\\n\\n// using staging environment\\nconst env = ENV.STAGING;\\n\\nconst NFT_CHAT = async () => {\\n  /**\\n   * 1. PROFILE CREATIONS\\n   */\\n  // 1.1 Create PushProfile#1\\n  const nftSigner1 = new ethers.Wallet(\\n    `0x${process.env.NFT_HOLDER_WALLET_PRIVATE_KEY_1}`\\n  );\\n  const nftAccount1 =\\n    \'nft:eip155:11155111:0x42af3147f17239341477113484752d5d3dda997b:2\';\\n  const nftProfilePassword1 = \'@PushNFTProfile#01\';\\n  const pushProfile1 = await PushAPI.user.create({\\n    account: nftAccount1,\\n    signer: nftSigner1,\\n    env,\\n    additionalMeta: { NFTPGP_V1: { password: nftProfilePassword1 } },\\n  });\\n  // 1.2 Create PushProfile#2\\n  const nftSigner2 = new ethers.Wallet(\\n    `0x${process.env.NFT_HOLDER_WALLET_PRIVATE_KEY_2}`\\n  );\\n  const nftAccount2 =\\n    \'nft:eip155:11155111:0x42af3147f17239341477113484752d5d3dda997b:3\';\\n  const nftProfilePassword2 = \'@PushNFTProfile#02\';\\n  const pushProfile2 = await PushAPI.user.create({\\n    account: nftAccount2,\\n    signer: nftSigner2,\\n    env,\\n    additionalMeta: { NFTPGP_V1: { password: nftProfilePassword2 } },\\n  });\\n  /**\\n   * 2. SENDING MESSAGE FROM PROFILE#1 TO PROFILE#2\\n   */\\n  // 2.1 Decrypt keys for PushProfile#1\\n  const decryptedPGPPrivateKey = await PushAPI.chat.decryptPGPKey({\\n    encryptedPGPPrivateKey: pushProfile1.encryptedPrivateKey,\\n    account: nftAccount1,\\n    signer: nftSigner1,\\n  });\\n  // 2.2 send the actual message\\n  const response = await PushAPI.chat.send({\\n    messageContent: \\"Gm gm! It\'s me... Mario\\",\\n    messageType: \'Text\', // can be \\"Text\\" | \\"Image\\" | \\"File\\" | etc\\n    receiverAddress: nftAccount2,\\n    account: nftAccount1,\\n    pgpPrivateKey: decryptedPGPPrivateKey,\\n    env: env,\\n  });\\n  console.log(response);\\n};\\n\\nNFT_CHAT();\\n```\\n\\nIn the Push NFT Chat system, messages are encrypted using the PGP public key of the intended receiver. This encryption ensures that only the recipient\u2019s Push profile possesses the corresponding private key required to decrypt and access the chats. By utilizing PGP encryption, the security and confidentiality of the messages are upheld, providing a trusted communication channel.\\n\\nTo ensure decentralized storage and robust availability, the messages in Push NFT Chat are stored on IPFS. IPFS allows for distributed and peer-to-peer storage, ensuring that the messages are not reliant on a single central server. This decentralized storage approach enhances data resilience and availability, making the system more robust against failures or data loss.\\n\\nIn order to maintain a controlled and spam-free communication experience, when one Push profile attempts to send a message to another profile, it is delivered as an intent rather than a direct message. This means that the message is sent to the receiver as a request or proposal, requiring their approval before it is fully delivered and visible in their chat. This intent-based delivery system helps prevent spamming and unwanted messages, ensuring that the recipient has control over the content they receive.\\n\\n## Step 4: Getting chats, requests and approving intents\\n\\nContinuing from Step 3. we would now fetch all requests received by an NFT Profile and approve the intent.\\n\\n```js\\n\\n...\\n...\\n\\n /**\\n  * 3. GETTING ALL CHAT REQUESTS OF PUSHPROFILE#2\\n  */\\n // 3.1 Decrypt keys for PushProfile#2\\n const decryptedPGPPrivateKey2 = await PushAPI.chat.decryptPGPKey({\\n   encryptedPGPPrivateKey: pushProfile2.encryptedPrivateKey,\\n   account: nftAccount2,\\n   signer: nftSigner2,\\n })\\n // 3.2 Getting all requests or intents for PushProfile#2\\n const requests = await PushAPI.chat.requests({\\n   account: nftAccount2,\\n   toDecrypt: true, // to decrypt the received request messages\\n   pgpPrivateKey: decryptedPGPPrivateKey2,\\n   env: env,\\n })\\n console.log(requests)\\n // 3.3 Approve the request by PushProfile#2\\n await PushAPI.chat.approve({\\n   status: \'Approved\',\\n   senderAddress: requests[0].did, // push profile which sent the request ie nftAccount1\\n   account: nftAccount2,\\n   signer: nftSigner2,\\n   pgpPrivateKey: decryptedPGPPrivateKey2,\\n   env: env,\\n })\\n // 3.4 Fetching the chats of PushProfile#2\\n // After approval of intent, messages sent by PushProfile#1 will be visible in chats of PushProfile#2\\n const chats = await PushAPI.chat.chats({\\n   account: nftAccount2,\\n   toDecrypt: true, // to decrypt the received chat messages\\n   pgpPrivateKey: decryptedPGPPrivateKey2,\\n   env: env,\\n })\\n console.log(chats)\\n}\\n\\nNFT_CHAT()\\n```\\n\\n## Step 5: Transferring Chats on NFT transfer\\n\\nOn transferring an NFT the new NFT holder wallet has two choices:\\n\\n### 1. Starting as a fresh new Push Chat Profile with no previous history of past NFT owner chats.\\n\\n```js\\n...\\n...\\n /**\\n  * 4 PUSHPROFILE#1 TRANSFERRED NFT TO ANOTHER WALLET\\n  */\\n const newNftSigner1 = new ethers.Wallet(\\n   `0x${process.env.NEW_NFT_HOLDER_WALLET_PRIVATE_KEY_1}`\\n )\\n const newNftProfilePassword1 = \'@NEWPushNFTProfile#01\'\\n // 4.1 New NFT Owner resets the Push NFT Profile\\n const newPushProfile1 = await PushAPI.user.create({\\n   account: nftAccount1,\\n   signer: newNftSigner1,\\n   env,\\n   additionalMeta: { NFTPGP_V1: { password: newNftProfilePassword1 } },\\n })\\n}\\n\\nNFT_CHAT()\\n```\\n\\n### 2. Continue with the chats of previous NFT owners.\\n\\n```js\\n...\\n...\\n  /**\\n  * 4 PUSHPROFILE#1 TRANSFERRED NFT TO ANOTHER WALLET\\n  */\\n const newNftSigner1 = new ethers.Wallet(\\n   `0x${process.env.NEW_NFT_HOLDER_WALLET_PRIVATE_KEY_1}`\\n )\\n const newNftProfilePassword1 = \'@NEWPushNFTProfile#01\'\\n // 4.1 Decrypt the keys from password of the previous owner\\n const profile1DecryptedPGPPrivateKey = await PushAPI.chat.decryptPGPKey({\\n   encryptedPGPPrivateKey: pushProfile1.encryptedPrivateKey,\\n   account: nftAccount1,\\n   env: env,\\n   additionalMeta: {\\n     NFTPGP_V1: {\\n       password: nftProfilePassword1,\\n     },\\n   },\\n })\\n // 4.2 New NFT Owner continues with the Old Profile with re-encrypting keys with new Wallet\\n await PushAPI.user.auth.update({\\n   pgpPrivateKey: profile1DecryptedPGPPrivateKey,\\n   pgpEncryptionVersion: ENCRYPTION_TYPE.NFTPGP_V1,\\n   signer: newNftSigner1,\\n   pgpPublicKey: pushProfile1.publicKey,\\n   account: nftAccount1,\\n   env: env,\\n   additionalMeta: {\\n     NFTPGP_V1: {\\n       password: newNftProfilePassword1, //new nft profile password\\n     },\\n   },\\n })\\n}\\n\\nNFT_CHAT()\\n```\\n\\nContinuing the chats of the previous NFT owner requires the previous owner\u2019s password. This means that the previous owner of the NFT has the option to decide whether or not to hand over the password to the new NFT owner.\\n\\nWhen ownership of an NFT tied to a chat profile is transferred from one individual to another, the previous owner\u2019s password is necessary to maintain access to the ongoing chats associated with that NFT. This approach ensures that the new NFT owner does not automatically inherit access to the previous owner\u2019s private conversations without explicit authorization.\\n\\nBy giving control over the password transfer to the previous NFT owner, Push NFT Chat respects the privacy and consent of all parties involved. It provides a transparent process where the previous owner can choose to share or withhold the password, allowing for a seamless transition of NFT ownership while maintaining the security and confidentiality of the chat history.\\n\\n## Exploring Additional Capabilities of Push NFT Chat\\n\\n- [Creating Public / Private Groups for NFT Chat Profiles](https://github.com/push-protocol/push-sdk/blob/88bafe49d489cfe399efa7166407a50574995b16/packages/examples/sdk-backend-node/src/main.ts#L1390)\\n- [Listening to Chat Socket Events for NFT Chat Profiles](https://github.com/push-protocol/push-sdk/blob/88bafe49d489cfe399efa7166407a50574995b16/packages/examples/sdk-backend-node/src/main.ts#L1546)"}}')}}]);