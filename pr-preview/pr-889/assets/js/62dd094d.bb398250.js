"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[64266],{989796:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var i=n(474848),o=n(28453);const a={id:"docs-notifications-develop-send-notification-via-smart-contract",title:"Send Notification (via Smart Contract)",hide_title:!0,slug:"./send-notification-via-smart-contract",displayed_sidebar:"pushNotificationSidebar",sidebar_position:13,image:"/assets/docs/previews/docs_notifications_develop--send_notification_(via_smart_contract).png"},s="Send notification using smart contract overview",c={id:"notifications/build/docs-notifications-develop-send-notification-via-smart-contract",title:"Send Notification (via Smart Contract)",description:"Push contracts are designed to act as a communication middleware for your smart contracts which ensures that even smart contracts can communicate with the wallet addresses (ie: web3 users).",source:"@site/docs/notifications/01-build/13-Develop-Send-Notification-Smart-Contract.mdx",sourceDirName:"notifications/01-build",slug:"/notifications/build/send-notification-via-smart-contract",permalink:"/push-website/pr-preview/pr-889/docs/notifications/build/send-notification-via-smart-contract",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/notifications/01-build/13-Develop-Send-Notification-Smart-Contract.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{id:"docs-notifications-develop-send-notification-via-smart-contract",title:"Send Notification (via Smart Contract)",hide_title:!0,slug:"./send-notification-via-smart-contract",displayed_sidebar:"pushNotificationSidebar",sidebar_position:13,image:"/assets/docs/previews/docs_notifications_develop--send_notification_(via_smart_contract).png"},sidebar:"pushNotificationSidebar",previous:{title:"Send Notification",permalink:"/push-website/pr-preview/pr-889/docs/notifications/build/send-notification"},next:{title:"Notification Styling",permalink:"/push-website/pr-preview/pr-889/docs/notifications/build/styling-notification-content"}},r={},d=[{value:"Sending notifications from smart contract",id:"sending-notifications-from-smart-contract",level:2},{value:"Step 1\ufe0f\u20e3 - Locate the contract address of Push",id:"step-1\ufe0f\u20e3---locate-the-contract-address-of-push",level:3},{value:"Step 2\ufe0f\u20e3 - Import Push Comm interface",id:"step-2\ufe0f\u20e3---import-push-comm-interface",level:3},{value:"Step 3\ufe0f\u20e3 - Locate your channel address",id:"step-3\ufe0f\u20e3---locate-your-channel-address",level:3},{value:"Step 4\ufe0f\u20e3 - Call the contract function",id:"step-4\ufe0f\u20e3---call-the-contract-function",level:3},{value:"Step 5\ufe0f\u20e3 - Add your smart contract address as your channel delegate",id:"step-5\ufe0f\u20e3---add-your-smart-contract-address-as-your-channel-delegate",level:3}];function l(t){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...t.components},{Head:n}=e;return n||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"send-notification-using-smart-contract-overview",children:"Send notification using smart contract overview"}),"\n",(0,i.jsx)(e.p,{children:"Push contracts are designed to act as a communication middleware for your smart contracts which ensures that even smart contracts can communicate with the wallet addresses (ie: web3 users)."}),"\n",(0,i.jsx)(n,{children:(0,i.jsx)("title",{children:"Send Notification (via Smart Contract) | Push Notifications | Push\n  Documentation"})}),"\n",(0,i.jsx)(e.h2,{id:"sending-notifications-from-smart-contract",children:"Sending notifications from smart contract"}),"\n",(0,i.jsx)(e.h3,{id:"step-1\ufe0f\u20e3---locate-the-contract-address-of-push",children:"Step 1\ufe0f\u20e3 - Locate the contract address of Push"}),"\n",(0,i.jsx)(e.p,{children:"Ensure that you know the contract address of Push Communication smart contract based on the blockchain and network from which you are sending the communication out."}),"\n",(0,i.jsxs)(e.p,{children:["For example: Staging Ethereum contract (Sepolia) address for Push Communicator contract is ",(0,i.jsx)(e.code,{children:"0x0C34d54a09CFe75BCcd878A469206Ae77E0fe6e7"}),". List of all smart contract and their environment is available here \ud83d\udc49 ",(0,i.jsx)(e.a,{href:"/docs/notifications/push-smart-contracts/contract-addresses/",title:"List of all relevant push protocol smart contract addresses",children:"Push smart contract addresses"}),"."]}),"\n",(0,i.jsx)(e.h3,{id:"step-2\ufe0f\u20e3---import-push-comm-interface",children:"Step 2\ufe0f\u20e3 - Import Push Comm interface"}),"\n",(0,i.jsx)(e.p,{children:"Start by importing the Push comm contract interface in your smart contract \ud83d\udc47"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-solidity",children:"// PUSH Comm Contract Interface\ninterface IPUSHCommInterface {\n    function sendNotification(address _channel, address _recipient, bytes calldata _identity) external;\n}\n"})}),"\n",(0,i.jsx)(e.h3,{id:"step-3\ufe0f\u20e3---locate-your-channel-address",children:"Step 3\ufe0f\u20e3 - Locate your channel address"}),"\n",(0,i.jsxs)(e.p,{children:["Ensure your channel is up and running by following this guide - ",(0,i.jsx)(e.a,{href:"/docs/notifications/tutorials/create-your-channel/",title:"Guide explaining how to create your channel",children:"Creating your channel"}),". Note down your channel address which you need to put in the code below as ",(0,i.jsx)(e.strong,{children:"YOUR_CHANNEL_ADDRESS"}),"."]}),"\n",(0,i.jsx)(e.h3,{id:"step-4\ufe0f\u20e3---call-the-contract-function",children:"Step 4\ufe0f\u20e3 - Call the contract function"}),"\n",(0,i.jsxs)(e.p,{children:["Next call the function ",(0,i.jsx)(e.code,{children:"sendNotification(address _channel, address _recipient, bytes calldata _identity)"})," and pass the address of the channel, recipient and the identity based on your needs."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-solidity",children:'IPUSHCommInterface(EPNS_COMM_CONTRACT_ADDRESS_FOR_SPECIFIC_BLOCKCHAIN).sendNotification(\n    YOUR_CHANNEL_ADDRESS, // from channel - recommended to set channel via dApp and put it\'s value -> then once contract is deployed, go back and add the contract address as delegate for your channel\n    to, // to recipient, put YOUR_CHANNEL_ADDRESS in case you want Broadcast or Subset. For Targetted put the address to which you want to send\n\n    bytes(\n        string(\n            // We are passing identity here: https://push.org/docs/notifications/notification-standards/notification-standards-advance/#notification-identity\n            abi.encodePacked(\n                "0", // this represents minimal identity, learn more: https://push.org/docs/notifications/notification-standards/notification-standards-advance/#notification-identity\n                "+", // segregator\n                "3", // define notification type:  https://push.org/docs/notifications/build/types-of-notification (1, 3 or 4) = (Broadcast, targeted or subset)\n                "+", // segregator\n                "Title", // this is notification title\n                "+", // segregator\n                "Body" // notification body\n            )\n        )\n    )\n);\n'})}),"\n",(0,i.jsx)(e.h3,{id:"step-5\ufe0f\u20e3---add-your-smart-contract-address-as-your-channel-delegate",children:"Step 5\ufe0f\u20e3 - Add your smart contract address as your channel delegate"}),"\n",(0,i.jsxs)(e.p,{children:["The last step is to go back to your channel and add the smart contract address as a delegate ensuring notifications sent by your smart contract are routed through your channel and presented to your users. Checkout ",(0,i.jsx)(e.a,{href:"/docs/notifications/tutorials/create-your-channel/#adding-delegates-for-channel",title:"Guide to adding delegates to your channel",children:"guide for adding delegates for channel"})," to understand how to add delegates to your channel."]}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsxs)(e.p,{children:["Here's an example of ",(0,i.jsx)(e.a,{href:"/docs/notifications/tutorials/token-transfer-notification-from-smart-contract/",children:"how to build your ERC-20 token with in-built notifications"})]})})]})}function h(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(l,{...t})}):l(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>c});var i=n(296540);const o={},a=i.createContext(o);function s(t){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:s(t.components),i.createElement(a.Provider,{value:e},t.children)}}}]);