"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[40675],{446488:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var n=s(474848),i=s(28453);s(80778),s(113490);const a={id:"docs-chat-concepts-architecture-overview",title:"Push Chat Architecture",hide_title:!0,slug:"./push-chat-architecture",displayed_sidebar:"pushChatSidebar",sidebar_position:1,image:"/assets/docs/previews/docs_chat_concepts_architecture_overview--push_chat_architecture.png"},o="Architecture overview",r={id:"chat/concepts/docs-chat-concepts-architecture-overview",title:"Push Chat Architecture",description:"Push Chat is a web3 messaging protocol that enables wallet addresses to send and receive messages, offering a secure and privacy-focused alternative to traditional messaging apps. By leveraging blockchain technology, users can communicate directly via their wallet addresses without personal identifiers like phone numbers, email addresses, etc.",source:"@site/docs/chat/05-concepts/01-Concepts-Architecture.mdx",sourceDirName:"chat/05-concepts",slug:"/chat/concepts/push-chat-architecture",permalink:"/push-website/pr-preview/pr-965/docs/chat/concepts/push-chat-architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/chat/05-concepts/01-Concepts-Architecture.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"docs-chat-concepts-architecture-overview",title:"Push Chat Architecture",hide_title:!0,slug:"./push-chat-architecture",displayed_sidebar:"pushChatSidebar",sidebar_position:1,image:"/assets/docs/previews/docs_chat_concepts_architecture_overview--push_chat_architecture.png"},sidebar:"pushChatSidebar",previous:{title:"Concepts",permalink:"/push-website/pr-preview/pr-965/docs/chat/concepts"},next:{title:"Encryption Version in Push Chat",permalink:"/push-website/pr-preview/pr-965/docs/chat/concepts/encryption-version-in-push-chat"}},h={},c=[{value:"Spam prevention",id:"spam-prevention",level:2},{value:"Chat request",id:"chat-request",level:2},{value:"Sending messages",id:"sending-messages",level:2},{value:"Decentralization",id:"decentralization",level:2},{value:"Verification Proof",id:"verification-proof",level:3},{value:"Encryption",id:"encryption",level:2},{value:"Push Chat SDK",id:"push-chat-sdk",level:2}];function d(e){const t={admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"architecture-overview",children:"Architecture overview"}),"\n",(0,n.jsx)(t.p,{children:"Push Chat is a web3 messaging protocol that enables wallet addresses to send and receive messages, offering a secure and privacy-focused alternative to traditional messaging apps. By leveraging blockchain technology, users can communicate directly via their wallet addresses without personal identifiers like phone numbers, email addresses, etc."}),"\n",(0,n.jsx)(t.p,{children:"Designed for mainstream adoption, Push Chat serves as a protocol that any dApp, web3 wallet, or backend can integrate to provide their users with messaging capabilities."}),"\n",(0,n.jsx)(t.p,{children:"Additionally, chat messages in Push Chat come with built-in notifications, similar to what users are accustomed to in web2 messaging platforms, ensuring a familiar and convenient user experience. This combination of features makes Push Chat a vital tool for anyone seeking to harness Web3 communication's full potential."}),"\n",(0,n.jsx)(s,{children:(0,n.jsx)("title",{children:"Architecture Overview | Push Chat | Push Documentation"})}),"\n","\n","\n",(0,n.jsx)(t.p,{children:"Since Push Protocol started with decentralized notifications, every chat message sent on the protocol has a notification built in. Whenever a message is sent to an address, the receiving address will receive a notification along with the message but only if they have accepted your chat request."}),"\n",(0,n.jsx)(t.p,{children:"Unlike traditional messengers that require users to provide their information to sign up, like their email, phone number, or any other personal data about the user, Push Chat requires no personal information whatsoever to start messaging on the protocol. "}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["All the user needs is a ",(0,n.jsx)(t.strong,{children:"wallet address."})]}),"\n",(0,n.jsx)(t.li,{children:"All the messages are stored on IPFS and are encrypted as well as signed. "}),"\n",(0,n.jsx)(t.li,{children:"It's important to note that only the addresses involved in the conversation shall be able to decrypt the messages, and anyone can verify that the message was indeed sent by the sender's address and that the messages are encrypted."}),"\n",(0,n.jsx)(t.li,{children:"When sending a message to an address, it is sent through Push Nodes. "}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"Push Nodes"})})," are a network of nodes, where each node can have a different role in the network that is responsible for validating each notification and chat message between addresses. "]}),"\n",(0,n.jsx)(t.p,{children:"Their main task is to validate that:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:" the payload is following the corresponding payload standard,"}),"\n",(0,n.jsx)(t.li,{children:"the sender can actually send the message, and signature validation,"}),"\n",(0,n.jsxs)(t.li,{children:["if the payload is valid, the Push Nodes will store the message on IPFS and then send a notification (",(0,n.jsx)(t.em,{children:"considering that the address has opt-in"}),") to the receiver of the message. "]}),"\n",(0,n.jsx)(t.li,{children:"Additionally, to read the messages, the receiver client will query the Push Nodes for any new message that was sent to it."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"spam-prevention",children:"Spam prevention"}),"\n",(0,n.jsx)(t.p,{children:"Spam prevention has always been one of our major priorities. "}),"\n",(0,n.jsx)(t.p,{children:"There are countless examples of users spamming others with fake giveaways, random messages, or unwanted notifications."}),"\n",(0,n.jsx)(t.p,{children:"For notifications, the core protocol itself adopts a user-centric approach. This means that all the notifications are opt-in or opt-out based. "}),"\n",(0,n.jsx)(t.p,{children:"This means that users shall only receive notifications from protocols they opt in to. Users can fine-tune which notifications they see the value of and only opt-in for them while every other notification shall land in the user's spam box. "}),"\n",(0,n.jsxs)(t.p,{children:["Chat is no different. We are working on our spam prevention mechanism on the core protocol level (",(0,n.jsx)(t.em,{children:"more information about this soon"}),"), but as of today, we have a chat request that enables spam prevention as it requires user acceptance before push notifications for those chats are enabled."]}),"\n",(0,n.jsx)(t.h2,{id:"chat-request",children:"Chat request"}),"\n",(0,n.jsxs)(t.p,{children:["Push Chat has two types of message groups: ",(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"Inbox and Request"})}),(0,n.jsx)(t.strong,{children:"."})," "]}),"\n",(0,n.jsx)(t.p,{children:"The very first time an address wants to send a message to another peer, the address must send an intent request. This first message shall not land in this peer Inbox but instead in its Request box."}),"\n",(0,n.jsx)(t.p,{children:"When the user sees this message in its Request box, the user has 2 options:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"It can accept it and start messaging back the address"}),"\n",(0,n.jsx)(t.li,{children:"It can ignore it (blocking users will be launched on the next version)"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"It must be noted that addresses don\u2019t get notified about messages on the Request box. The notifications are only received if the address accepts the Request to talk to the other peer. "}),"\n",(0,n.jsx)(t.p,{children:"This prevents users from receiving notifications from any random address that sends them a message. So the user only receives notifications from the chat the user wants to talk to."}),"\n",(0,n.jsx)(t.h2,{id:"sending-messages",children:"Sending messages"}),"\n",(0,n.jsx)(t.p,{children:"The core protocol allows addresses to message any other address on Ethereum or Polygon. If the message is sent to an address that hasn\u2019t authenticated itself yet on the protocol (generate a pair of encryption keys), those messages will be in plain text until the address you are talking to authenticates itself in the protocol. From that moment on, all the following messages will be encrypted."}),"\n",(0,n.jsx)(t.p,{children:"If you send a message to an address that has already been authenticated into the protocol, the messages will be encrypted. The reason for this choice was to allow addresses to send messages to their friends regardless of whether they have accessed the application. This design choice was made for better UX, but it can easily be changed if the community decides to."}),"\n",(0,n.jsx)(t.h2,{id:"decentralization",children:"Decentralization"}),"\n",(0,n.jsx)(t.p,{children:"Chat messages are sent between addresses via the Push Nodes. Push Nodes are the nodes responsible for validating notification and chat payload and for dispatching notifications to addresses. Push Nodes can have different roles in this Communication Network."}),"\n",(0,n.jsx)(t.p,{children:"The vision for Push Protocol is for the Push Nodes to be run by the community and to get rewarded by contributing to the network's decentralization. As of today, Push Nodes are run by Push Protocol, but the team is working on decentralizing the nodes."}),"\n",(0,n.jsx)(t.p,{children:"Although the Push Nodes are run by Push Protocol, users can always verify that the chat messages and notifications haven\u2019t been tampered with and that they have indeed been sent by the correct address. Users can always verify this by the Verification Proof."}),"\n",(0,n.jsx)(t.h3,{id:"verification-proof",children:"Verification Proof"}),"\n",(0,n.jsx)(t.p,{children:"Verification Proof is a property that is sent along with the notifications and chats messages to help the network validate the sender, the chain from which the notification (or message) is sent, and the content of the notification (or message) along with any other validation that might be required."}),"\n",(0,n.jsx)(t.p,{children:"For notifications, the verification proofs differ based on the platform from which they are sent. i.e., Smart contracts verification proof can be validated on-chain, and smart contract-based notifications will usually carry transaction hash proofs while off-chain/gasless notifications usually carry EIP-712 proofs, though they are capable of carrying smart contract verification proof as well, which makes it composable."}),"\n",(0,n.jsx)(t.h2,{id:"encryption",children:"Encryption"}),"\n",(0,n.jsx)(t.p,{children:"When an address logs in to the protocol for the first time, PGP encryption keys are generated for the address. "}),"\n",(0,n.jsx)(t.p,{children:"The PGP private key is then encrypted with the address\u2019 public key and then sent the encrypted PGP private key, along with the PGP public key, to Push Nodes to get stored. "}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"This is extensible which means that the PGP key can be encrypted in the future with other methods paving way for a multi-chain future."})}),"\n",(0,n.jsx)(t.p,{children:"Messages are encrypted on the client by using the AES encryption algorithm. "}),"\n",(0,n.jsx)(t.p,{children:"A different AES secret key is generated for each message. This secret key is then encrypted with the PGP public keys from the parties involved in the conversation and then sent the encrypted AES key is to Push Nodes. "}),"\n",(0,n.jsx)(t.p,{children:"The message payload content also contains the encrypted AES key in order to decrypt the message."}),"\n",(0,n.jsx)(t.h2,{id:"push-chat-sdk",children:"Push Chat SDK"}),"\n",(0,n.jsx)(t.p,{children:"With the SDK, it will be easy for developers to integrate messaging into their dapps. The use cases are endless:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"You can provide customer support to your users"}),"\n",(0,n.jsx)(t.li,{children:"Create groups to discuss governance proposals without relying on Discord"}),"\n",(0,n.jsx)(t.li,{children:"Chat with the community on a web3 game"}),"\n",(0,n.jsx)(t.li,{children:"DMs or DAO token gated conversation"}),"\n",(0,n.jsx)(t.li,{children:"Any other cool, crazy feature you can think of"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Alright. Now that you have a clear picture of the Push Chat and its SDK, let's dive in and try to integrate the push chat into your application."})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},80778:(e,t,s)=>{s(296540),s(474848)},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>r});var n=s(296540);const i={},a=n.createContext(i);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);