"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[44498],{347083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=n(474848),i=n(28453);const o={slug:"a-technical-deep-dive-5-simple-steps-to-get-started-with-push-nft-chat",title:"A Technical Deep Dive + 5 Simple Steps to Get Started With Push NFT Chat",authors:["push"],image:"./cover-image.webp",text:"Push NFT Chat is a seamless and secure communication platform that enables NFTs to chat directly with one another. Unlike traditional chat systems tied to wallet addresses, Push NFT Chat allows chats to be specifically associated with individual NFTs owned by users. This is a game changer for chat integrations.",tags:["Push Protocol","Developer","NFT"]},a=void 0,r={permalink:"/push-website/pr-preview/pr-965/blog/a-technical-deep-dive-5-simple-steps-to-get-started-with-push-nft-chat",source:"@site/blog/2023-07-05-neft-chat-tech-deepdive/index.md",title:"A Technical Deep Dive + 5 Simple Steps to Get Started With Push NFT Chat",description:"Cover image of A Technical Deep Dive + 5 Simple Steps to Get Started With Push NFT Chat",date:"2023-07-05T00:00:00.000Z",formattedDate:"July 5, 2023",tags:[{label:"Push Protocol",permalink:"/push-website/pr-preview/pr-965/blog/tags/push-protocol"},{label:"Developer",permalink:"/push-website/pr-preview/pr-965/blog/tags/developer"},{label:"NFT",permalink:"/push-website/pr-preview/pr-965/blog/tags/nft"}],readingTime:6.75,hasTruncateMarker:!0,authors:[{name:"Push Protocol",url:"https://twitter.com/pushprotocol",imageURL:"/assets/blog/authors/authorpush.png",key:"push"}],frontMatter:{slug:"a-technical-deep-dive-5-simple-steps-to-get-started-with-push-nft-chat",title:"A Technical Deep Dive + 5 Simple Steps to Get Started With Push NFT Chat",authors:["push"],image:"./cover-image.webp",text:"Push NFT Chat is a seamless and secure communication platform that enables NFTs to chat directly with one another. Unlike traditional chat systems tied to wallet addresses, Push NFT Chat allows chats to be specifically associated with individual NFTs owned by users. This is a game changer for chat integrations.",tags:["Push Protocol","Developer","NFT"]},unlisted:!1,prevItem:{title:"Exploring the Role of ZK Knowledge in Decentralized Communication\ud83c\udf10",permalink:"/push-website/pr-preview/pr-965/blog/exploring-the-role-of-zk-knowledge-in-decentralized-communication"},nextItem:{title:"June Monthly Recap \ud83c\udf05",permalink:"/push-website/pr-preview/pr-965/blog/june-monthly-recap"}},h={image:n(278461).A,authorsImageUrls:[void 0]},c=[{value:"What is Push NFT Chat?",id:"what-is-push-nft-chat",level:2},{value:"Understanding Encryption Methodology of Push NFT Chat",id:"understanding-encryption-methodology-of-push-nft-chat",level:2},{value:"Getting Started with Push NFT Chat",id:"getting-started-with-push-nft-chat",level:2},{value:"Step 1: Setting up the Environment",id:"step-1-setting-up-the-environment",level:2},{value:"Step 2: Creating an NFT-Chat Profile",id:"step-2-creating-an-nft-chat-profile",level:2},{value:"Step 3: Sending messages to another Push Profile",id:"step-3-sending-messages-to-another-push-profile",level:3},{value:"Step 4: Getting chats, requests and approving intents",id:"step-4-getting-chats-requests-and-approving-intents",level:2},{value:"Step 5: Transferring Chats on NFT transfer",id:"step-5-transferring-chats-on-nft-transfer",level:2},{value:"1. Starting as a fresh new Push Chat Profile with no previous history of past NFT owner chats.",id:"1-starting-as-a-fresh-new-push-chat-profile-with-no-previous-history-of-past-nft-owner-chats",level:3},{value:"2. Continue with the chats of previous NFT owners.",id:"2-continue-with-the-chats-of-previous-nft-owners",level:3},{value:"Exploring Additional Capabilities of Push NFT Chat",id:"exploring-additional-capabilities-of-push-nft-chat",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Cover image of A Technical Deep Dive + 5 Simple Steps to Get Started With Push NFT Chat",src:n(50134).A+"",width:"1400",height:"788"})}),"\n",(0,s.jsx)(t.p,{children:"Exploring the Inner Workings and Implementation of Push NFT Chat for Enhanced NFT-Linked Conversations"}),"\n",(0,s.jsx)(t.h2,{id:"what-is-push-nft-chat",children:"What is Push NFT Chat?"}),"\n",(0,s.jsx)(t.p,{children:"Push NFT Chat is a seamless and secure communication platform that enables NFTs to chat directly with one another. Unlike traditional chat systems tied to wallet addresses, Push NFT Chat allows chats to be specifically associated with individual NFTs owned by users. This is a game changer for chat integrations."}),"\n",(0,s.jsx)(t.p,{children:"With Push NFT Chat, users now have the flexibility to choose whether their communications remain connected to their NFTs or their wallets."}),"\n",(0,s.jsx)(t.p,{children:"So how does it all work?"}),"\n",(0,s.jsx)(t.h2,{id:"understanding-encryption-methodology-of-push-nft-chat",children:"Understanding Encryption Methodology of Push NFT Chat"}),"\n",(0,s.jsx)(t.p,{children:"The encryption methodology employed by Push Chat ensures secure and private communication while supporting the unique requirements of Push NFT Chat. Both Push Chat and Push NFT Chat rely on PGP keys which form the foundation for wallet-to-wallet communication. These keys are encrypted and stored on the Push Network, facilitating end-to-end encrypted (E2EE) universal inboxes."}),"\n",(0,s.jsx)(t.p,{children:"Push NFT Chat utilises a distinct encryption mechanism specifically tailored to support NFT chats. This approach combines security and versatility, allowing seamless integration with NFTs. The encryption process involves a three-pass encryption procedure for new users:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"A secret key is generated on the client side, automatically by the SDK, with the user having the option to choose the secret key if desired."}),"\n",(0,s.jsx)(t.li,{children:"The generated secret key is then used to encrypt the locally generated PGP key on the client side."}),"\n",(0,s.jsx)(t.li,{children:"Subsequently, the wallet encrypts the secret key itself, along with the encrypted PGP key. The encrypted versions of both the secret key and the PGP key are stored on the Push nodes."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Despite the integration of NFT-specific features, the default behaviour of Push Chat remains intact. Users still sign in once to unlock their Push Profiles and initiate messaging. However, the updated implementation now offers support for chat and connection transfers when moving NFTs to different wallets."}),"\n",(0,s.jsx)(t.p,{children:"This means, even if you move your NFT from one wallet to another, your chats still remain tied to that NFT. In the case of transferring ownership of your NFT, unless you give that new owner your password, they\u2019ll be required to create a new chat profile and hence be unable to access your previous chats tied to the NFT (more on ownership transfer in Step 5 of Getting Started)."}),"\n",(0,s.jsx)(t.p,{children:"This enhanced functionality ensures a seamless and continuous user experience while maintaining the security and privacy of communications."}),"\n",(0,s.jsx)(t.p,{children:"The encryption methodology of Push Chat guarantees the protection of user data and enables the integration of NFTs into the communication framework, empowering users to securely connect and communicate in the context of their NFTs."}),"\n",(0,s.jsx)(t.h2,{id:"getting-started-with-push-nft-chat",children:"Getting Started with Push NFT Chat"}),"\n",(0,s.jsx)(t.p,{children:"To get started with Push NFT Chat, the easiest approach is to utilise the Push SDK package. This can be seamlessly integrated into your frontend to develop custom NFT-tied chat systems. Additionally, Push NFT Chat can be deployed in the backend to implement automated chatbots or systems."}),"\n",(0,s.jsx)(t.p,{children:"This guide is designed to showcase the straightforward process of building an NFT chat system with Push NFT Chat. Despite the complexity of the underlying logic, the Push Protocol abstracts away the intricacies, making the implementation remarkably simple for developers."}),"\n",(0,s.jsx)(t.p,{children:"For the purpose of this guide, we will walk through the process of writing a simple TypeScript script to send NFT-tied chat messages."}),"\n",(0,s.jsx)(t.h2,{id:"step-1-setting-up-the-environment",children:"Step 1: Setting up the Environment"}),"\n",(0,s.jsx)(t.p,{children:"To begin, you need to set up your development environment."}),"\n",(0,s.jsx)(t.p,{children:"Ensure that you have the necessary dependencies installed, such as Node.js, TypeScript and ts-node. Create a new project directory and initialise it with a package.json file. Install the Push SDK package which will fetch and install the required dependencies."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"# create project directory\nmkdir nft-chat-guide\n# browse to project directory\ncd nft-chat-guide\n# Initialise the project\nnpm init --y\n# Install the dependencies\nnpm install @pushprotocol/restapi@latest ethers@^5.6\n# Create the main ts file\ntouch index.ts\n"})}),"\n",(0,s.jsx)("blockquote",{children:(0,s.jsx)("i",{children:"Note: ethers is a peer dependency required by the restapi package"})}),"\n",(0,s.jsx)(t.h2,{id:"step-2-creating-an-nft-chat-profile",children:"Step 2: Creating an NFT-Chat Profile"}),"\n",(0,s.jsx)(t.p,{children:"Before you can create an NFT-Chat profile, it is essential to have a wallet that owns an NFT. This ensures that you have a unique NFT to associate with your chat profile. You have the flexibility to choose from various options: you can utilise any NFT available or even create your own NFT contract and mint some NFTs specifically for this purpose."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"# setup .env file to store private info safely\ntouch .env\nnpm install dotenv\n# type definitions for nodeJs\nnpm install --save @types/node\n"})}),"\n",(0,s.jsx)(t.p,{children:"Inside index.ts add the following code to create a Push NFT chat profile."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { PushAPI } from '@pushprotocol/restapi'\nimport { ENV } from '@pushprotocol/restapi/src/lib/constants'\nimport * as dotenv from 'dotenv'\nimport { ethers } from 'ethers'\ndotenv.config()\n\n// using staging environment\nconst env = ENV.STAGING\n\n/**\n* Creates a Push NFT Profile\n* @param signer - signer of wallet which owns the NFT\n* @param account - NFT account\n* @param password - password of NFT Profile\n*/\nconst PushAPI_nft_user_create = async (\n signer: ethers.Signer,\n account: string,\n password: string\n) => {\n const response = await PushAPI.user.create({\n   account,\n   signer,\n   env,\n   additionalMeta: { NFTPGP_V1: { password } },\n })\n return response\n}\n\nconst NFT_CHAT = async () => {\n // private key of wallet holding the NFT\n const nftHolderWalletPrivatekey1 = process.env.NFT_HOLDER_WALLET_PRIVATE_KEY_1\n const nftSigner1 = new ethers.Wallet(`0x${nftHolderWalletPrivatekey1}`)\n // nft:eip155:${nftChainId}:${nftContractAddress}:${nftTokenId}\n const nftAccount1 =\n   'nft:eip155:11155111:0x42af3147f17239341477113484752d5d3dda997b:2'\n // user preferred profile password\n const nftProfilePassword1 = '@PushNFTProfile#01'\n const pushProfile1 = await PushAPI_nft_user_create(\n   nftSigner1,\n   nftAccount1,\n   nftProfilePassword1\n )\n console.log(pushProfile1)\n}\n\nNFT_CHAT()\n"})}),"\n",(0,s.jsx)(t.p,{children:"Behind the scenes, the Push SDK handles the creation of data for your Push profile, incorporating verification proofs that are subsequently verified by the Push nodes. These verification proofs help establish the authenticity and integrity of your profile within the Push network."}),"\n",(0,s.jsx)(t.p,{children:"Moreover, the Push nodes play a crucial role in verifying the ownership of the NFT associated with your wallet on the blockchain. This verification process ensures that the NFT is genuinely owned by your wallet address, providing a secure and reliable connection between your NFT and your NFT-Chat profile."}),"\n",(0,s.jsx)(t.h3,{id:"step-3-sending-messages-to-another-push-profile",children:"Step 3: Sending messages to another Push Profile"}),"\n",(0,s.jsx)(t.p,{children:"An NFT-Push Chat Profile can send messages to another NFT-Push Profile or a wallet-based Push profile. In the following example, we would see how one NFT Profile can send a message to another NFT Profile."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { PushAPI } from '@pushprotocol/restapi';\nimport { ENV } from '@pushprotocol/restapi/src/lib/constants';\nimport * as dotenv from 'dotenv';\nimport { ethers } from 'ethers';\ndotenv.config();\n\n// using staging environment\nconst env = ENV.STAGING;\n\nconst NFT_CHAT = async () => {\n  /**\n   * 1. PROFILE CREATIONS\n   */\n  // 1.1 Create PushProfile#1\n  const nftSigner1 = new ethers.Wallet(\n    `0x${process.env.NFT_HOLDER_WALLET_PRIVATE_KEY_1}`\n  );\n  const nftAccount1 =\n    'nft:eip155:11155111:0x42af3147f17239341477113484752d5d3dda997b:2';\n  const nftProfilePassword1 = '@PushNFTProfile#01';\n  const pushProfile1 = await PushAPI.user.create({\n    account: nftAccount1,\n    signer: nftSigner1,\n    env,\n    additionalMeta: { NFTPGP_V1: { password: nftProfilePassword1 } },\n  });\n  // 1.2 Create PushProfile#2\n  const nftSigner2 = new ethers.Wallet(\n    `0x${process.env.NFT_HOLDER_WALLET_PRIVATE_KEY_2}`\n  );\n  const nftAccount2 =\n    'nft:eip155:11155111:0x42af3147f17239341477113484752d5d3dda997b:3';\n  const nftProfilePassword2 = '@PushNFTProfile#02';\n  const pushProfile2 = await PushAPI.user.create({\n    account: nftAccount2,\n    signer: nftSigner2,\n    env,\n    additionalMeta: { NFTPGP_V1: { password: nftProfilePassword2 } },\n  });\n  /**\n   * 2. SENDING MESSAGE FROM PROFILE#1 TO PROFILE#2\n   */\n  // 2.1 Decrypt keys for PushProfile#1\n  const decryptedPGPPrivateKey = await PushAPI.chat.decryptPGPKey({\n    encryptedPGPPrivateKey: pushProfile1.encryptedPrivateKey,\n    account: nftAccount1,\n    signer: nftSigner1,\n  });\n  // 2.2 send the actual message\n  const response = await PushAPI.chat.send({\n    messageContent: \"Gm gm! It's me... Mario\",\n    messageType: 'Text', // can be \"Text\" | \"Image\" | \"File\" | etc\n    receiverAddress: nftAccount2,\n    account: nftAccount1,\n    pgpPrivateKey: decryptedPGPPrivateKey,\n    env: env,\n  });\n  console.log(response);\n};\n\nNFT_CHAT();\n"})}),"\n",(0,s.jsx)(t.p,{children:"In the Push NFT Chat system, messages are encrypted using the PGP public key of the intended receiver. This encryption ensures that only the recipient\u2019s Push profile possesses the corresponding private key required to decrypt and access the chats. By utilizing PGP encryption, the security and confidentiality of the messages are upheld, providing a trusted communication channel."}),"\n",(0,s.jsx)(t.p,{children:"To ensure decentralized storage and robust availability, the messages in Push NFT Chat are stored on IPFS. IPFS allows for distributed and peer-to-peer storage, ensuring that the messages are not reliant on a single central server. This decentralized storage approach enhances data resilience and availability, making the system more robust against failures or data loss."}),"\n",(0,s.jsx)(t.p,{children:"In order to maintain a controlled and spam-free communication experience, when one Push profile attempts to send a message to another profile, it is delivered as an intent rather than a direct message. This means that the message is sent to the receiver as a request or proposal, requiring their approval before it is fully delivered and visible in their chat. This intent-based delivery system helps prevent spamming and unwanted messages, ensuring that the recipient has control over the content they receive."}),"\n",(0,s.jsx)(t.h2,{id:"step-4-getting-chats-requests-and-approving-intents",children:"Step 4: Getting chats, requests and approving intents"}),"\n",(0,s.jsx)(t.p,{children:"Continuing from Step 3. we would now fetch all requests received by an NFT Profile and approve the intent."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"\n...\n...\n\n /**\n  * 3. GETTING ALL CHAT REQUESTS OF PUSHPROFILE#2\n  */\n // 3.1 Decrypt keys for PushProfile#2\n const decryptedPGPPrivateKey2 = await PushAPI.chat.decryptPGPKey({\n   encryptedPGPPrivateKey: pushProfile2.encryptedPrivateKey,\n   account: nftAccount2,\n   signer: nftSigner2,\n })\n // 3.2 Getting all requests or intents for PushProfile#2\n const requests = await PushAPI.chat.requests({\n   account: nftAccount2,\n   toDecrypt: true, // to decrypt the received request messages\n   pgpPrivateKey: decryptedPGPPrivateKey2,\n   env: env,\n })\n console.log(requests)\n // 3.3 Approve the request by PushProfile#2\n await PushAPI.chat.approve({\n   status: 'Approved',\n   senderAddress: requests[0].did, // push profile which sent the request ie nftAccount1\n   account: nftAccount2,\n   signer: nftSigner2,\n   pgpPrivateKey: decryptedPGPPrivateKey2,\n   env: env,\n })\n // 3.4 Fetching the chats of PushProfile#2\n // After approval of intent, messages sent by PushProfile#1 will be visible in chats of PushProfile#2\n const chats = await PushAPI.chat.chats({\n   account: nftAccount2,\n   toDecrypt: true, // to decrypt the received chat messages\n   pgpPrivateKey: decryptedPGPPrivateKey2,\n   env: env,\n })\n console.log(chats)\n}\n\nNFT_CHAT()\n"})}),"\n",(0,s.jsx)(t.h2,{id:"step-5-transferring-chats-on-nft-transfer",children:"Step 5: Transferring Chats on NFT transfer"}),"\n",(0,s.jsx)(t.p,{children:"On transferring an NFT the new NFT holder wallet has two choices:"}),"\n",(0,s.jsx)(t.h3,{id:"1-starting-as-a-fresh-new-push-chat-profile-with-no-previous-history-of-past-nft-owner-chats",children:"1. Starting as a fresh new Push Chat Profile with no previous history of past NFT owner chats."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"...\n...\n /**\n  * 4 PUSHPROFILE#1 TRANSFERRED NFT TO ANOTHER WALLET\n  */\n const newNftSigner1 = new ethers.Wallet(\n   `0x${process.env.NEW_NFT_HOLDER_WALLET_PRIVATE_KEY_1}`\n )\n const newNftProfilePassword1 = '@NEWPushNFTProfile#01'\n // 4.1 New NFT Owner resets the Push NFT Profile\n const newPushProfile1 = await PushAPI.user.create({\n   account: nftAccount1,\n   signer: newNftSigner1,\n   env,\n   additionalMeta: { NFTPGP_V1: { password: newNftProfilePassword1 } },\n })\n}\n\nNFT_CHAT()\n"})}),"\n",(0,s.jsx)(t.h3,{id:"2-continue-with-the-chats-of-previous-nft-owners",children:"2. Continue with the chats of previous NFT owners."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"...\n...\n  /**\n  * 4 PUSHPROFILE#1 TRANSFERRED NFT TO ANOTHER WALLET\n  */\n const newNftSigner1 = new ethers.Wallet(\n   `0x${process.env.NEW_NFT_HOLDER_WALLET_PRIVATE_KEY_1}`\n )\n const newNftProfilePassword1 = '@NEWPushNFTProfile#01'\n // 4.1 Decrypt the keys from password of the previous owner\n const profile1DecryptedPGPPrivateKey = await PushAPI.chat.decryptPGPKey({\n   encryptedPGPPrivateKey: pushProfile1.encryptedPrivateKey,\n   account: nftAccount1,\n   env: env,\n   additionalMeta: {\n     NFTPGP_V1: {\n       password: nftProfilePassword1,\n     },\n   },\n })\n // 4.2 New NFT Owner continues with the Old Profile with re-encrypting keys with new Wallet\n await PushAPI.user.auth.update({\n   pgpPrivateKey: profile1DecryptedPGPPrivateKey,\n   pgpEncryptionVersion: ENCRYPTION_TYPE.NFTPGP_V1,\n   signer: newNftSigner1,\n   pgpPublicKey: pushProfile1.publicKey,\n   account: nftAccount1,\n   env: env,\n   additionalMeta: {\n     NFTPGP_V1: {\n       password: newNftProfilePassword1, //new nft profile password\n     },\n   },\n })\n}\n\nNFT_CHAT()\n"})}),"\n",(0,s.jsx)(t.p,{children:"Continuing the chats of the previous NFT owner requires the previous owner\u2019s password. This means that the previous owner of the NFT has the option to decide whether or not to hand over the password to the new NFT owner."}),"\n",(0,s.jsx)(t.p,{children:"When ownership of an NFT tied to a chat profile is transferred from one individual to another, the previous owner\u2019s password is necessary to maintain access to the ongoing chats associated with that NFT. This approach ensures that the new NFT owner does not automatically inherit access to the previous owner\u2019s private conversations without explicit authorization."}),"\n",(0,s.jsx)(t.p,{children:"By giving control over the password transfer to the previous NFT owner, Push NFT Chat respects the privacy and consent of all parties involved. It provides a transparent process where the previous owner can choose to share or withhold the password, allowing for a seamless transition of NFT ownership while maintaining the security and confidentiality of the chat history."}),"\n",(0,s.jsx)(t.h2,{id:"exploring-additional-capabilities-of-push-nft-chat",children:"Exploring Additional Capabilities of Push NFT Chat"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/push-protocol/push-sdk/blob/88bafe49d489cfe399efa7166407a50574995b16/packages/examples/sdk-backend-node/src/main.ts#L1390",children:"Creating Public / Private Groups for NFT Chat Profiles"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/push-protocol/push-sdk/blob/88bafe49d489cfe399efa7166407a50574995b16/packages/examples/sdk-backend-node/src/main.ts#L1546",children:"Listening to Chat Socket Events for NFT Chat Profiles"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},278461:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/cover-image-9d71513a4b50c6f6c7946fb0a06ae672.webp"},50134:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/cover-image-9d71513a4b50c6f6c7946fb0a06ae672.webp"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var s=n(296540);const i={},o=s.createContext(i);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);