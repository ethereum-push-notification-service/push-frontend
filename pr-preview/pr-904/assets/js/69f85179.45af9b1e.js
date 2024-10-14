"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[23180],{221889:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var o=i(474848),r=i(28453);i(113490);const n={slug:"epns-litepaper",title:"Ethereum Push Notification Service (EPNS) Litepaper",description:"Ethereum Push Notification Service (EPNS) Litepaper",authors:["push"],image:"./cover-image.webp",text:"The Ethereum Push Notification Service(EPNS) Litepaper can be also downloaded from here. The content of the Litepaper is included in the article below.",tags:["Lite Paper","Cryptocurrency","Defi","Ethereum","Blog"]},s="Abstract",a={permalink:"/push-website/pr-preview/pr-904/blog/epns-litepaper",source:"@site/blog/2020-11-06-epns-litepaper/index.md",title:"Ethereum Push Notification Service (EPNS) Litepaper",description:"Ethereum Push Notification Service (EPNS) Litepaper",date:"2020-11-06T00:00:00.000Z",formattedDate:"November 6, 2020",tags:[{label:"Lite Paper",permalink:"/push-website/pr-preview/pr-904/blog/tags/lite-paper"},{label:"Cryptocurrency",permalink:"/push-website/pr-preview/pr-904/blog/tags/cryptocurrency"},{label:"Defi",permalink:"/push-website/pr-preview/pr-904/blog/tags/defi"},{label:"Ethereum",permalink:"/push-website/pr-preview/pr-904/blog/tags/ethereum"},{label:"Blog",permalink:"/push-website/pr-preview/pr-904/blog/tags/blog"}],readingTime:5.476666666666667,hasTruncateMarker:!0,authors:[{name:"Push Protocol",url:"https://twitter.com/pushprotocol",imageURL:"/assets/blog/authors/authorpush.png",key:"push"}],frontMatter:{slug:"epns-litepaper",title:"Ethereum Push Notification Service (EPNS) Litepaper",description:"Ethereum Push Notification Service (EPNS) Litepaper",authors:["push"],image:"./cover-image.webp",text:"The Ethereum Push Notification Service(EPNS) Litepaper can be also downloaded from here. The content of the Litepaper is included in the article below.",tags:["Lite Paper","Cryptocurrency","Defi","Ethereum","Blog"]},unlisted:!1,prevItem:{title:"Notify Decentralized Prediction Markets (DPM) with EPNS",permalink:"/push-website/pr-preview/pr-904/blog/notify-decentralized-prediction-markets"},nextItem:{title:"DeFi Forensics\ud83d\udd75\ufe0f\u200d\ufe0f- HARVEST Finance",permalink:"/push-website/pr-preview/pr-904/blog/defi-forensics-harvest-finance"}},c={image:i(321051).A,authorsImageUrls:[void 0]},l=[{value:"High Level Application Flow",id:"high-level-application-flow",level:2},{value:"Definitions",id:"definitions",level:2},{value:"Description",id:"description",level:2},{value:"Protocol Features",id:"protocol-features",level:2},{value:"Incentivized Notifications for Users",id:"incentivized-notifications-for-users",level:2},{value:"Platform Agnostic",id:"platform-agnostic",level:2},{value:"Flexible (Arbitrary) Payload",id:"flexible-arbitrary-payload",level:2},{value:"User-Centric and opt-in notifications",id:"user-centric-and-opt-in-notifications",level:2},{value:"Spam score and throttling",id:"spam-score-and-throttling",level:2},{value:"Governance",id:"governance",level:2}];function h(e){const t={a:"a",br:"br",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Cover Image of Ethereum Push Notification Service (EPNS) Litepaper",src:i(394738).A+"",width:"1400",height:"788"})}),"\n",(0,o.jsxs)(t.p,{children:["The Ethereum Push Notification Service(EPNS) Litepaper can be also downloaded from ",(0,o.jsx)(t.a,{href:"https://github.com/push-protocol/push-whitepaper/blob/master/Ethereum%20Push%20Notification%20Service%20Litepaper.pdf",children:"here"}),". The content of the Litepaper is included in the article below."]}),"\n",(0,o.jsxs)(t.p,{children:["The document introduces a decentralized notifications protocol that enables wallet addresses to receive notifications in a platform-agnostic fashion from both decentralized and centralized carriers. ",(0,o.jsx)(t.em,{children:"Examples of platforms can be dApps, User Wallets, iOS and Android apps, Chrome or Firefox browsers, or any other such platforms."})]}),"\n",(0,o.jsx)(t.p,{children:"It also explores and describes the theory and technical aspects of the protocol/platform and the game theory that the protocol utilizes to ensure incentives for good actors in the ecosystem."}),"\n",(0,o.jsx)(t.h1,{id:"the-problem",children:"The Problem"}),"\n",(0,o.jsx)(t.p,{children:"The blockchain space is growing at an extremely rapid pace and the exponential growth is projected to continue rapidly in terms of users, services, and revenue. Despite this growth, services (dApps, platforms, services, smart contracts) still lack a genuine and decentralized communication medium with their users. Today, communication between provider and consumer often occurs on mediums like email, social media like Twitter, and community platforms like Telegram. These methods defeat the purpose of Web3.0."}),"\n",(0,o.jsx)(t.p,{children:"Below are quick summaries of pain points that Web3.0 services currently have, and how the lack of a decentralized communication layer results in missing events, actions, and other important updates."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"On AAVE, Compound, and other DeFi protocols, users don\u2019t learn about their loan liquidations until they manually check, since there is no way for users to receive notifications."}),"\n",(0,o.jsx)(t.li,{children:"Every time a trade order is placed on a DEX, the user is expected to manually check the service or their wallet address to see if the trade is completed or not."}),"\n",(0,o.jsx)(t.li,{children:"ENS domain expiry has to be put on Twitter in the hopes that the grace domain user might read it."}),"\n",(0,o.jsx)(t.li,{children:"Inform users whenever their governance tokens can be used on important proposals, as well as the status and time left for any active governance proposals."}),"\n",(0,o.jsx)(t.li,{children:"Instead of waiting for a tweet, a PoolTogether lottery winner in the future can simply receive their winning lottery via notification."}),"\n",(0,o.jsx)(t.li,{children:"Availability of digital art on a decentralized marketplace or limited edition NFTs can be shared with users by simple notification."}),"\n",(0,o.jsx)(t.li,{children:"Announcements of new protocol feature launch are shared in real-time with users."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"These examples highlight a critical pain point in Web3.0 communication, and the problem will only worsen as services and dApps keep growing, especially within DeFi."}),"\n",(0,o.jsx)(t.h1,{id:"the-solution",children:(0,o.jsx)(t.strong,{children:"The Solution"})}),"\n",(0,o.jsx)(t.p,{children:"Ethereum Push Notification Service (EPNS) is a blockchain protocol that enables services to communicate with its users (wallet addresses) in a decentralized way. The DeFi aspect of the protocol ensures the notifications are incentivized i.e. users will also be receiving token incentives from the notifications."}),"\n",(0,o.jsx)(t.p,{children:"Furthermore, The decentralized nature of the protocol enables delivery to any centralized or decentralized platforms which paves the way for communication to occur across any platform whether it\u2019s a mobile app, user crypto wallets, web browsers or any other platform that chooses to integrate the protocol."}),"\n",(0,o.jsx)(t.h1,{id:"epns-protocol",children:(0,o.jsx)(t.strong,{children:"EPNS Protocol"})}),"\n",(0,o.jsx)(t.h2,{id:"high-level-application-flow",children:"High Level Application Flow"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Image of Ethereum Push Notification Service (EPNS) Litepaper",src:i(478658).A+"",width:"1400",height:"1798"})}),"\n",(0,o.jsx)(t.p,{children:"High level application flow"}),"\n",(0,o.jsx)(t.h2,{id:"definitions",children:"Definitions"}),"\n",(0,o.jsx)(t.p,{children:"The following definitions are used to refer to certain roles in the ecosystem."}),"\n",(0,o.jsx)(t.p,{children:"Roles"}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(t.p,{children:"EPNS is a notification protocol at its heart. Built on top of Ethereum, It is a fully decentralized middleware layer that enables any dApps, smart contracts, or traditional services to communicate with their users in a privacy-centric (wallet address) and decentralized fashion."}),"\n",(0,o.jsx)(t.p,{children:"Among other things, the middleware ensures a spam free, user-centric, opt-in, transparent environment for the services and users to communicate."}),"\n",(0,o.jsxs)(t.p,{children:["The protocol also assigns a content type to payloads which essentially means that the services are free to communicate whatever information they want with the users, ie: Sending images, call to actions, videos, or even encrypted transactions. Various examples of payloads and how they operate are further provided in the whitepaper. ",(0,o.jsx)(t.a,{href:"https://whitepaper.epns.io/protocol-specs-section/specifications/notification-payload-specs#payload-types",children:(0,o.jsxs)(t.strong,{children:["[",(0,o.jsx)(t.strong,{children:"Read in Detail"}),"]"]})})]}),"\n",(0,o.jsx)(t.h2,{id:"protocol-features",children:"Protocol Features"}),"\n",(0,o.jsx)(t.h2,{id:"incentivized-notifications-for-users",children:"Incentivized Notifications for Users"}),"\n",(0,o.jsxs)(t.p,{children:["The protocol requires services that want to send notifications to their subscribers to activate themselves by staking $DAI, this ",(0,o.jsx)(t.strong,{children:"stake"})," is then ",(0,o.jsx)(t.strong,{children:"lend"})," out by protocol to AAVE DeFi protocol (at the time of writing) and starts generating ",(0,o.jsx)(t.strong,{children:"interest"})," which is then distributed in a weighted proportion to all the subscribers that have opted in to receive notifications, the weightage rewards the early subscribers a bit more as they become the early adopters. ",(0,o.jsx)(t.a,{href:"https://whitepaper.epns.io/protocol-specs-section/epns-protocol/channels/channel-activation-deactivation#game-theory-and-user-incentives",children:(0,o.jsxs)(t.strong,{children:["[",(0,o.jsx)(t.strong,{children:"Read in Detail"}),"]"]})})]}),"\n",(0,o.jsx)(t.h2,{id:"platform-agnostic",children:"Platform Agnostic"}),"\n",(0,o.jsxs)(t.p,{children:["The protocol allows retrievable information (encrypted or plain) of each notification. IPFS stores most of the payload storage, but different storage (decentralized or centralized) are possible in the future for different payload types. This enables universal notification delivery to any crypto wallets, mobile apps, web browsers, dApps, or other platforms as long as they integrate the protocol. As a reward for the integration, the fees paid by the service for these notifications is shared between all wallets and infrastructure providers that enable the delivery of notifications to user wallets. ",(0,o.jsx)(t.a,{href:"https://whitepaper.epns.io/protocol-specs-section/specifications/notification-payload-specs#notification-json-payload",children:"[Read in Detail]"})]}),"\n",(0,o.jsx)(t.h2,{id:"flexible-arbitrary-payload",children:"Flexible (Arbitrary) Payload"}),"\n",(0,o.jsxs)(t.p,{children:["Notification is stored and treated like JSON payload which is transformed as per the rules of the different carriers when the notification reaches them. JSON Payload can differ with payload types which ensures the flexibility of the content, data, storage interpretation, and delivery. This helps in creating different rules and content interpretation of the notification (for example: carrying images, call to action, live videos, etc). ",(0,o.jsx)(t.a,{href:"https://whitepaper.epns.io/protocol-specs-section/specifications/notification-payload-specs#notification-json-payload",children:(0,o.jsxs)(t.strong,{children:["[",(0,o.jsx)(t.strong,{children:"Read in Detail"}),"]"]})})]}),"\n",(0,o.jsx)(t.h2,{id:"user-centric-and-opt-in-notifications",children:"User-Centric and opt-in notifications"}),"\n",(0,o.jsxs)(t.p,{children:["The protocol allows users to be in direct control of what services they get notification from; it imposes rules on the services including spam protection for users, limiting their ability to add wallets as subscribers, etc. ",(0,o.jsx)(t.a,{href:"https://whitepaper.epns.io/protocol-specs-section/epns-protocol/subscribers/user-direct-action-subscribe",children:(0,o.jsxs)(t.strong,{children:["[",(0,o.jsx)(t.strong,{children:"Read in Detail"}),"]"]})})]}),"\n",(0,o.jsx)(t.h2,{id:"spam-score-and-throttling",children:"Spam score and throttling"}),"\n",(0,o.jsxs)(t.p,{children:["Each channel has a spam score that ranges from 0\u20131. Value of 0 means the channel has an excellent score and 1 means the channel is very unhealthy. The range adjusts based on positive actions such as a higher number of subscribers, with the passing of time while negative actions are higher than usual unsubscribers, higher than usual notifications, etc. This is guided by the protocol and at a certain range, the protocol will start throttling the notifications or even stop them until the score comes back to a healthier range. ",(0,o.jsx)(t.a,{href:"https://whitepaper.epns.io/protocol-specs-section/epns-protocol/channels/spam-rating-and-throttling",children:"[Read in Detail]"})]}),"\n",(0,o.jsx)(t.h2,{id:"governance",children:"Governance"}),"\n",(0,o.jsxs)(t.p,{children:["The protocol governance is designed to incentivize continued adoption of the EPNS protocol. This is achieved by ensuring incentives for all the users involved by rewarding or encouraging them through incentives and penalty, their continued involvement is seen to be necessary for the growth and adoption of the protocol and to achieve the ",(0,o.jsx)(t.strong,{children:"vision of becoming a web3 notification standard"}),". The EPNS user are categorized as ",(0,o.jsx)(t.strong,{children:"Service Providers, Subscribers, Wallet / Infra Services, and Governance Users"}),", all of them are rewarded for their involvement and to ensure that they keep other parties in check for a healthy ecosystem according to the game theory described in the whitepaper. ",(0,o.jsx)(t.a,{href:"https://whitepaper.epns.io/governance-section/governance/game-theory",children:(0,o.jsxs)(t.strong,{children:["[",(0,o.jsx)(t.strong,{children:"Read in Detail"}),"]"]})})]}),"\n",(0,o.jsx)(t.h1,{id:"epns-product",children:(0,o.jsx)(t.strong,{children:"EPNS Product"})}),"\n",(0,o.jsx)(t.p,{children:"In order to facilitate the adoption of the protocol and to provide value to services, we are also building a product suite of EPNS to catalyze the adoption and growth. These currently include developing:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"EPNS Mobile App"})," \u2014 Serves the purpose of delivering notifications from decentralized protocol to centralized EPNS Infra to centralized platforms (iOS and Android)."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"dApp"})," \u2014 Enables receiving notifications from web browsers and also enables delivery of notifications from protocol to decentralized carriers."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"EPNS Infra (Push Service)"})," \u2014 Enables carrying notifications from decentralized protocol to centralized solutions (iOS, Android, Web, etc). Also enables third-party dApps, services, and protocols to start experiencing the notification impact as notifications are delivered following the entire protocol/product lifecycle."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Showrunners"})," -These are channels created and run by us for the benefit of the community and for users to come and see why push notifications transformed the traditional world. Few examples of showrunners which we will be running are -: Compound liquidation alert, Wallet crypto movement tracker, Eth Gas alerter, ENS domain expiry, etc."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"JS Library"})," \u2014 Considerably reduces the integration time required for third party dApps, servers. We see these products to enable instant value add to the protocol and help in increasing awareness and eventually drive the adoption of the protocol."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Future Features \u2014"})," There are some future features including decentralized video that is getting discussed and explored as well, you can read a brief synopsis of them over here. ",(0,o.jsx)(t.a,{href:"https://whitepaper.epns.io/protocol-specs-section/future-features-research",children:(0,o.jsxs)(t.strong,{children:["[",(0,o.jsx)(t.strong,{children:"Read in Detail"}),"]"]})})]}),"\n"]}),"\n",(0,o.jsx)(t.h1,{id:"governance-1",children:(0,o.jsx)(t.strong,{children:"Governance"})}),"\n",(0,o.jsxs)(t.p,{children:["The native digital cryptographically - secured utility token of the EPNS protocol (",(0,o.jsx)(t.strong,{children:"$PUSH"}),") is a transferable representation of attributed functions specified in the protocol/code of the EPNS protocol, which is designed to play a major role in the functioning of the ecosystem on the EPNS protocol and intended to be used solely as the primary utility token on the network."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"$PUSH"})," tokens are used to control various core functionalities of the EPNS protocol, allowing users to vote on features of the protocol. For the avoidance of doubt, the right to vote is restricted solely to voting on features of the EPNS protocol; the right to vote does not entitle $PUSH holders to vote on the operation and management of the Company, the Distributor or their respective affiliates, or their assets, and does not constitute any equity interest in any of the aforementioned entities. For example, the protocol fees are charged in ",(0,o.jsx)(t.strong,{children:"$ETH"})," or ",(0,o.jsx)(t.strong,{children:"$DAI"})," within the EPNS protocol, but the $PUSH token holders may vote to change these fee parameters. ",(0,o.jsxs)(t.a,{href:"https://whitepaper.epns.io/governance-section/governance/usage-and-design",children:["**[",(0,o.jsx)(t.strong,{children:"Read in Detail"}),"]**"]})]}),"\n",(0,o.jsx)(t.h1,{id:"achievements",children:"Achievements"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Image of Ethereum Push Notification Service (EPNS) Litepaper",src:i(486307).A+"",width:"1400",height:"788"})}),"\n",(0,o.jsx)(t.p,{children:"Authors: Harsh Rajat, Richa Joshi"}),"\n",(0,o.jsx)(t.p,{children:"Litepaper Version 1.0 | October 2020"}),"\n",(0,o.jsxs)(t.p,{children:["Ethereum Push Notification Service ",(0,o.jsx)(t.a,{href:"https://whitepaper.epns.io/",children:"Whitepaper"})]}),"\n",(0,o.jsx)(t.p,{children:"Draft for community review and subject to change"}),"\n",(0,o.jsxs)(t.p,{children:["Become part of our buzzing community! Join the conversation on one of our channels:",(0,o.jsx)(t.br,{}),"\n",(0,o.jsx)(t.a,{href:"https://twitter.com/epnsproject",children:"Twitter"})," | ",(0,o.jsx)(t.a,{href:"https://t.me/epnsproject",children:"Telegram"})]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},321051:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/cover-image-c9e72143a2654a50ae2726409387b39a.webp"},394738:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/cover-image-c9e72143a2654a50ae2726409387b39a.webp"},478658:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/image-1-091d6d6d66766222e4de90271a836f18.webp"},486307:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/image-2-c907586500cfd27f1c52c6505502f3cb.webp"},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var o=i(296540);const r={},n=o.createContext(r);function s(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);