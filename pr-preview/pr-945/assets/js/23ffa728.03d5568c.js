"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[32300],{630874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var i=n(474848),a=n(28453);n(113490);const o={slug:"push-nodes-p2p",title:"Push Nodes P2P \u2014 Web3\u2019s way to communicate!",authors:["push"],image:"./cover-image.webp",description:"Push Nodes P2P \u2014 Web3\u2019s way to communicate!",text:"We are thrilled to announce the release of two new open-source EPNS tools to enhance the integration and implementation of EPNS Decentralized Notifications within your dApps and protocols, the EPNS Backend SDK Beta v1.0 and the EPNS Showrunners Framework; two of our most anticipated roadmap milestones for Q2.",tags:["Roadmap","Blockchain","Ethereum","Notifications","Newsletter"]},s=void 0,r={permalink:"/push-website/pr-preview/pr-945/blog/push-nodes-p2p",source:"@site/blog/2021-11-24-push-nodes-p2p/index.md",title:"Push Nodes P2P \u2014 Web3\u2019s way to communicate!",description:"Push Nodes P2P \u2014 Web3\u2019s way to communicate!",date:"2021-11-24T00:00:00.000Z",formattedDate:"November 24, 2021",tags:[{label:"Roadmap",permalink:"/push-website/pr-preview/pr-945/blog/tags/roadmap"},{label:"Blockchain",permalink:"/push-website/pr-preview/pr-945/blog/tags/blockchain"},{label:"Ethereum",permalink:"/push-website/pr-preview/pr-945/blog/tags/ethereum"},{label:"Notifications",permalink:"/push-website/pr-preview/pr-945/blog/tags/notifications"},{label:"Newsletter",permalink:"/push-website/pr-preview/pr-945/blog/tags/newsletter"}],readingTime:4.35,hasTruncateMarker:!0,authors:[{name:"Push Protocol",url:"https://twitter.com/pushprotocol",imageURL:"/assets/blog/authors/authorpush.png",key:"push"}],frontMatter:{slug:"push-nodes-p2p",title:"Push Nodes P2P \u2014 Web3\u2019s way to communicate!",authors:["push"],image:"./cover-image.webp",description:"Push Nodes P2P \u2014 Web3\u2019s way to communicate!",text:"We are thrilled to announce the release of two new open-source EPNS tools to enhance the integration and implementation of EPNS Decentralized Notifications within your dApps and protocols, the EPNS Backend SDK Beta v1.0 and the EPNS Showrunners Framework; two of our most anticipated roadmap milestones for Q2.",tags:["Roadmap","Blockchain","Ethereum","Notifications","Newsletter"]},unlisted:!1,prevItem:{title:"EPNS Enables Snapshot Voting for PUSH and PUSH/ETH LP Stakers!",permalink:"/push-website/pr-preview/pr-945/blog/epns-enables-snapshot-voting"},nextItem:{title:"Fabwelt partners with EPNS to bring push notifications to crypto gaming",permalink:"/push-website/pr-preview/pr-945/blog/fabwelt-partners-with-epns"}},c={image:n(356580).A,authorsImageUrls:[void 0]},h=[{value:"EPNS Protocol Overview / Recap",id:"epns-protocol-overview--recap",level:3},{value:"EPNS Core (Governance Smart Contract)",id:"epns-core-governance-smart-contract",level:4},{value:"EPNS Communicator",id:"epns-communicator",level:4},{value:"Push Nodes Overview",id:"push-nodes-overview",level:3},{value:"Push Nodes Architecture Deep Dive",id:"push-nodes-architecture-deep-dive",level:4},{value:"History Fetcher (Syncing / Indexing)",id:"history-fetcher-syncing--indexing",level:4},{value:"Web Sockets (Receiving)",id:"web-sockets-receiving",level:4},{value:"Validation and Admittance (Validators)",id:"validation-and-admittance-validators",level:4},{value:"Dispatching via Web Sockets (Dispatching)",id:"dispatching-via-web-sockets-dispatching",level:4},{value:"Dispatching via Web3 to Web2 bridge (Dispatching)",id:"dispatching-via-web3-to-web2-bridge-dispatching",level:4},{value:"Road Forward",id:"road-forward",level:4}];function l(e){const t={a:"a",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Cover Image of Push Nodes P2P \u2014 Web3\u2019s way to communicate!",src:n(94349).A+"",width:"1400",height:"700"})}),"\n",(0,i.jsxs)(t.p,{children:["In our ",(0,i.jsx)(t.a,{href:"https://medium.com/ethereum-push-notification-service/epns-roadmap-2021-c4ededc57a12",children:"2021 Roadmap"}),", we promised to launch the alpha of Push Nodes, which will enable communication across Ethereum and its emerging L2s."]}),"\n",(0,i.jsx)(t.p,{children:"We are ecstatic to share that the Push Nodes communication system has evolved beyond our initial roadmap, and is now on its way to support multi-chain, including EVM and non-EVM compatible chains!"}),"\n",(0,i.jsx)(t.p,{children:"Ready to learn how? Let\u2019s get started \ud83d\udcaa \ud83d\udd14"}),"\n",(0,i.jsx)(t.h3,{id:"epns-protocol-overview--recap",children:"EPNS Protocol Overview / Recap"}),"\n",(0,i.jsxs)(t.p,{children:["We recently released an article with an ",(0,i.jsx)(t.a,{href:"https://medium.com/ethereum-push-notification-service/roadmap-q3-audited-epns-push-protocol-v1-is-here-f4560dfe550c",children:"overview of the entire EPNS Protocol"}),". To summarize, the EPNS Protocol is a group of smart contracts that enables 1) validation and governance through EPNS Core and 2) communication through EPNS Communicator smart contracts and SDKs."]}),"\n",(0,i.jsxs)(t.p,{children:["Understanding the two components of the EPNS Protocol is critical, as Push Nodes interact with them to enable decentralized communication \u2014 aka the missing piece of Web3. We will briefly describe them below, but recommend reading ",(0,i.jsx)(t.a,{href:"https://medium.com/ethereum-push-notification-service/roadmap-q3-audited-epns-push-protocol-v1-is-here-f4560dfe550c",children:"the full article"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"epns-core-governance-smart-contract",children:"EPNS Core (Governance Smart Contract)"}),"\n",(0,i.jsx)(t.p,{children:"Before anyone can send a notification, they must first be activated on EPNS Core as a channel. It is important to note that the EPNS Core resides only on the Ethereum blockchain. EPNS Core handles a majority of governance and channel related task including:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Channel Creation"}),"\n",(0,i.jsx)(t.li,{children:"Channel Modification"}),"\n",(0,i.jsx)(t.li,{children:"Channel Blocking / Deletion"}),"\n",(0,i.jsx)(t.li,{children:"Verified Channels"}),"\n",(0,i.jsx)(t.li,{children:"Fees Management among token holders, etc"}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"epns-communicator",children:"EPNS Communicator"}),"\n",(0,i.jsx)(t.p,{children:"EPNS Communicator, as the name suggests, is the layer where actual communication happens. The Communicator Protocol is comparatively much simpler & handles tasks including:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Opt-in for notifications"}),"\n",(0,i.jsx)(t.li,{children:"Sending Notifs"}),"\n",(0,i.jsx)(t.li,{children:"Delegating responsibilities of Notifs to other wallets"}),"\n",(0,i.jsx)(t.li,{children:"Verifying multichain channel creation, etc"}),"\n"]}),"\n",(0,i.jsx)("blockquote",{children:(0,i.jsx)("i",{children:"Note: the EPNS Communicator resides on multiple blockchains, both EVM and non-EVM compatible. In addition to being available as smart contracts, the EPNS Communicator SDK enables sending notification payloads directly to Push Nodes as well as enabling off-chain transactions."})}),"\n",(0,i.jsx)(t.p,{children:"The EPNS Communicator ensures that on-chain and off-chain notifications alike can make it to your wallet address regardless of what a services chooses to send them from. In other words, notifications make it to you whether they come from the logic of a smart contract, dapp, or backend."}),"\n",(0,i.jsx)(t.p,{children:"With the brief intro out of the way, it\u2019s time to dive deep into Push Nodes and how they make everything possible \u2764\ufe0f!"}),"\n",(0,i.jsx)(t.h3,{id:"push-nodes-overview",children:"Push Nodes Overview"}),"\n",(0,i.jsx)(t.p,{children:"Multichain, huh! So if the contracts are deployed on multiple chains and governance happens on Ethereum how does everything work together \ud83e\udd14! Well Frens, the answer to that lies in Push Nodes!!!"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"First Image of Push Nodes P2P \u2014 Web3\u2019s way to communicate!",src:n(197945).A+"",width:"1400",height:"1400"})}),"\n",(0,i.jsx)(t.p,{children:"Push Nodes are the central piece of the network that enables the blockchain of Web3 notifications to work. In essence, they are validators that can be run by anyone in the future with staking and slashing. Push Nodes have three crucial tasks:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)("b",{children:"Listening"}),": Push Nodes listens to EPNS Communicator smart contracts on every blockchain. Besides that, they also enable off-chain or direct communication via API calls either from a backend or a dApp. This on-chain and off-chain communication listening enables EPNS to support just about any Web3 service\u2026 ie: smart contracts, dApps, backends or direct payloads!!"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)("b",{children:"Validating and Governing"}),": The communication which is driven by the EPNS Communicator layers require validation (Checking if the channel exists, is not spamming, is cross-chain verified, etc) which happens via the EPNS Core layer which contains functions to enable governance and to verify the existence of the channel."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)("b",{children:"Admitting to Network / Dispatching"}),": Lastly, the Push Nodes admit these notifications that are tied to wallet address in the network which can then be tapped into by any crypto frontend / wallet to display them. The dispatch functionality is also present in these nodes to allow bridging of Web3 notifications to be displayed in Web2 apps in case the wallet / frontend / software wants to enable that instead of handling direct socket connection."]}),"\n"]}),"\n",(0,i.jsx)("blockquote",{children:(0,i.jsx)("i",{children:"Push Nodes along with the functionality outlined above are already working in a test environment. We plan to decentralize push nodes after mainnet."})}),"\n",(0,i.jsx)(t.h4,{id:"push-nodes-architecture-deep-dive",children:"Push Nodes Architecture Deep Dive"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Second Image of Push Nodes P2P \u2014 Web3\u2019s way to communicate!",src:n(218268).A+"",width:"1400",height:"1313"})}),"\n",(0,i.jsx)(t.p,{children:"Let\u2019s briefly look at some of the key functionalities of the Push Nodes and how the multichain construction of payload and dispatching works."}),"\n",(0,i.jsx)(t.h4,{id:"history-fetcher-syncing--indexing",children:"History Fetcher (Syncing / Indexing)"}),"\n",(0,i.jsx)(t.p,{children:"Syncing the previous history of EPNS Core and EPNS Communicator is one of the crucial feature of this module. It ensures replication of data which is one of the core feature of push nodes apart from ensuring quick validation as it indexes EPNS Core data including channels."}),"\n",(0,i.jsx)(t.h4,{id:"web-sockets-receiving",children:"Web Sockets (Receiving)"}),"\n",(0,i.jsx)(t.p,{children:"The main job of Push Nodes is to enable wss sockets on both the receiving side, ie: EPNS Comm smart contracts (on-chain) and direct payloads coming from backend / dapp (off-chain) side as a way to listen and update the state of the persistent data storage. The web socket connection and the router that enables routes ensures this functionality."}),"\n",(0,i.jsx)(t.h4,{id:"validation-and-admittance-validators",children:"Validation and Admittance (Validators)"}),"\n",(0,i.jsx)(t.p,{children:"The received payloads whether direct or from EPNS Communicator smart contracts always trigger multiple validation phases which are outlined below:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Validating Payload Authenticity: The push nodes check any incoming payload for the channel address (or delegator address) to ensure that the payloads are authentic and will drop any payloads that doesn\u2019t fit the scenario."}),"\n",(0,i.jsx)(t.li,{children:"Extrapolating payload and recipients: The next step which happens is the extrapolation of data that fetches the actual payload from the identity following which will include looking at where the payload is stored (at the time of writing, supports IPFS and smart contract bytes), expanding on the recipient list (entire channel, subset or single), etc to get the list of recipients as well as the actual payload."}),"\n",(0,i.jsx)(t.li,{children:"Mapping to recipients inbox / spambox: The next step in the validation requires mapping these payloads of individual recipients to either their inbox or spambox based on the users opt-in that has already been recorded either via the history fetcher or via the EPNS Comm smart contracts or via direct opt-in on the push nodes itself."}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"dispatching-via-web-sockets-dispatching",children:"Dispatching via Web Sockets (Dispatching)"}),"\n",(0,i.jsx)(t.p,{children:"On the opposite side, the web sockets connection ensures that any crypto frontend / wallet can listen directly to the push nodes and use it to display the notifications / communications meant for the user wallet address."}),"\n",(0,i.jsx)(t.h4,{id:"dispatching-via-web3-to-web2-bridge-dispatching",children:"Dispatching via Web3 to Web2 bridge (Dispatching)"}),"\n",(0,i.jsx)(t.p,{children:"An optional functionality that runs locally and will not be synced across push nodes is the ability to transmit these notifications from Web3 to Web2 apps / extensions. For example: sending the notifications to a mobile app on iOS / Android."}),"\n",(0,i.jsx)(t.p,{children:"The way this bridge works is having a local functionality of mapping wallets addresses to device ids of a particular third party app along with the centralized credentials of the app push certificates. If this module is active then that push node not only syncs and validates the data but is also responsible for pushing the notifications out to web2 apps or extension."}),"\n",(0,i.jsx)(t.h4,{id:"road-forward",children:"Road Forward"}),"\n",(0,i.jsx)(t.p,{children:"All these features and other crucial data outlined above are present and working which is how you guys are getting the web3 notifications we all wanted \ud83d\ude03 (though running in a controlled environment)."}),"\n",(0,i.jsx)(t.p,{children:"In brief, the plan from here is to create a cluster of nodes that will communicate with each other and keep the data in sync and create decentralization around this layer as well."}),"\n",(0,i.jsx)("blockquote",{children:(0,i.jsx)("i",{children:(0,i.jsx)(t.p,{children:"We will be creating a rewards (via staking) and penalizing (via slashing) game theory around it which will ensure active participation and true decentralization of these nodes as we move further into syncing and readying our push nodes to be open for users to freely run on."})})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},356580:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/cover-image-c900f42135c7becbbdc468d432f190d1.webp"},94349:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/cover-image-c900f42135c7becbbdc468d432f190d1.webp"},197945:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/image-1-ffc0f9551df4b9e729afb1c475c7bb04.webp"},218268:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/image-2-22d75fa1b018a9d5bd6073cd1143713d.webp"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var i=n(296540);const a={},o=i.createContext(a);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);