"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[75642],{351138:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var t=i(474848),o=i(28453),s=i(113490);const a={id:"docs-notifications-push-notifs-for-web3",title:"Push Notifications For Web3",hide_title:!0,slug:"./push-notifications-for-web3",displayed_sidebar:"pushNotificationSidebar",sidebar_position:2,image:"/assets/docs/previews/docs_notifications_push_notifs_for_web3--push_notifications_for_web3.png"},c="Push Notifications For Web3",r={id:"notifications/concepts/docs-notifications-push-notifs-for-web3",title:"Push Notifications For Web3",description:"Push Notifications are a crucial part of any dApp (or protocol) that wants to re-engage their users. It becomes more crucial for Web3 as users are anonymous wallet addresses (akin to web3 usernames) and you need a direct communication link between them and your protocol.",source:"@site/docs/notifications/06-concepts/02-Concepts-Push-Notif-Web3.mdx",sourceDirName:"notifications/06-concepts",slug:"/notifications/concepts/push-notifications-for-web3",permalink:"/push-website/pr-preview/pr-921/docs/notifications/concepts/push-notifications-for-web3",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/notifications/06-concepts/02-Concepts-Push-Notif-Web3.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"docs-notifications-push-notifs-for-web3",title:"Push Notifications For Web3",hide_title:!0,slug:"./push-notifications-for-web3",displayed_sidebar:"pushNotificationSidebar",sidebar_position:2,image:"/assets/docs/previews/docs_notifications_push_notifs_for_web3--push_notifications_for_web3.png"},sidebar:"pushNotificationSidebar",previous:{title:"Push Notification Architecture",permalink:"/push-website/pr-preview/pr-921/docs/notifications/concepts/push-notification-architecture"},next:{title:"Notification Standards",permalink:"/push-website/pr-preview/pr-921/docs/notifications/notification-standards"}},l={},h=[{value:"Who can Send Notifications?",id:"who-can-send-notifications",level:2},{value:"What are Channels?",id:"what-are-channels",level:2},{value:"What is a Channel Alias?",id:"what-is-a-channel-alias",level:3},{value:"What are Channel Delegates?",id:"what-are-channel-delegates",level:3},{value:"Types of Notifications?",id:"types-of-notifications",level:2},{value:"What are Delegated Notifications?",id:"what-are-delegated-notifications",level:3},{value:"Designing Notification Content?",id:"designing-notification-content",level:3}];function d(e){const n={admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"push-notifications-for-web3",children:"Push Notifications For Web3"}),"\n",(0,t.jsx)(n.p,{children:"Push Notifications are a crucial part of any dApp (or protocol) that wants to re-engage their users. It becomes more crucial for Web3 as users are anonymous wallet addresses (akin to web3 usernames) and you need a direct communication link between them and your protocol."}),"\n",(0,t.jsx)(n.p,{children:"Push protocol solves this issue by providing the communication middleware that your dApp, smart contract, protocol or backend can use to seamlessly reach those users."}),"\n",(0,t.jsx)(i,{children:(0,t.jsx)("title",{children:"Push Notification for Web3 | Push Notifications | Push Documentation"})}),"\n","\n","\n",(0,t.jsx)(n.h2,{id:"who-can-send-notifications",children:"Who can Send Notifications?"}),"\n",(0,t.jsx)(n.p,{children:"As per the current design of the protocol, these are the main actors who can send notifications:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Channel Owners:"})," The owners of a particular channel can send notifications to their subscribers."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Channel Delegates:"})," Channel owners can allow any particular wallet address to send notifications on behalf of their channel."]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"Sending notifications is a gasless transaction and therefore notification senders need not pay any gas fee while sending notifications via the Dapp."}),(0,t.jsx)(n.p,{children:"Gas Fees are only applicable when on-chain notifications are triggered directly from smart contracts."})]}),"\n",(0,t.jsx)(n.h2,{id:"what-are-channels",children:"What are Channels?"}),"\n",(0,t.jsx)(n.p,{children:"Any protocol that activates itself on Push protocol is known as a channel and gains the capability of sending notifications. The creation of a channel is a one-time process. Channel creation happens on the Ethereum blockchain and any other chains you want the channel to be."}),"\n",(0,t.jsx)(n.p,{children:"Note: One wallet address can only create one channel only the protocol."}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"Although channel creation only happens on the Ethereum blockchain, the protocol is designed to be chain-agnostic, i.e., channel owners can choose to send notification on any chain of their choice and not just Ethereum network"}),(0,t.jsx)(n.p,{children:"This is acheived by setting up a Channel alias \ud83d\udc47"})]}),"\n",(0,t.jsx)(n.h3,{id:"what-is-a-channel-alias",children:"What is a Channel Alias?"}),"\n",(0,t.jsx)(n.p,{children:"In order to enable your channel to be blockchain-agnostic and allow multi-chain communication, you need to setup a Channel alias. This enables your channel to send notifications on any other blockchain. In simpler terms, a channel alias address is a native representation of your Ethereum channel on any other EVM or Non-EVM chain through which you wish to communicate with your subscribers."}),"\n",(0,t.jsxs)(n.p,{children:["You can communicate with your subscribers on Polygon, BSC, Solana, etc. using an alias address that is compatible with that respective blockchain. Follow ",(0,t.jsx)(s.Yo,{href:"/docs/notifications/tutorials/enabling-channel-on-other-chains/",title:"Tutorial on how to enable different chains for your channel",children:"how to set-up a alias for your channel"})," for step by step instructions."]}),"\n",(0,t.jsx)(n.h3,{id:"what-are-channel-delegates",children:"What are Channel Delegates?"}),"\n",(0,t.jsx)(n.p,{children:"Channel Delegates are additional wallets that the channel creators have authorised to send notifications on the channels behalf. They are extremely useful to expand on sending notification capabilities and helps in ensuring an additional level of security besides enabling multiple wallets to send notifications on your behalf."}),"\n",(0,t.jsx)(n.h2,{id:"types-of-notifications",children:"Types of Notifications?"}),"\n",(0,t.jsx)(n.p,{children:"Below listed are the different types of notifications you can send to the subscribers of your channel on Push protocol."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Broadcast Notifications:"})," This type of notification is broadcasted or sent to all the subscribers of a channel at once."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Targeted Notifications:"})," This type of notification is sent to a single wallet address."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Subset Notifications:"})," This type of notification is sent to a a subset (or a group) of your channel subscribers."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"what-are-delegated-notifications",children:"What are Delegated Notifications?"}),"\n",(0,t.jsx)(n.p,{children:"Delegated notifications is a feature that allows channel owners to delegate their power of sending notifications to any other wallet address or multiple wallets of their choice."}),"\n",(0,t.jsx)(n.p,{children:"Once approved by the channel owner, a wallet address can send notifications on behalf of the channel to its subscribers. The channel owner can, however, revoke the approval at any given time."}),"\n",(0,t.jsx)(n.p,{children:"This mechanism of sending delegated notifications is quite effective in providing value-added services to the channels. It also ensures the availability of mechanisms that can be used by Push protocol or any other third-party infrastructure to send on-chain notifications on the channel\u2019s behalf."}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"Adding a delegate notification sender doesn't remove the ability of the channel maintainer to send notifications."}),(0,t.jsx)(n.p,{children:"They can keep on sending notifications as well as the delegate notification sender which will always be shown as coming from the same channel."})]}),"\n",(0,t.jsx)(n.h3,{id:"designing-notification-content",children:"Designing Notification Content?"}),"\n",(0,t.jsx)(n.p,{children:"Push Protocol enables you to send rich-media-enabled notifications and add suitable details to make them as engaging and useful as possible. Here is a quick dive into all the interesting stuff that you can send in a notification."})]})}function f(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>c});var t=i(296540);const o={},s=t.createContext(o);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);