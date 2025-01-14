"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[30857],{861479:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=t(474848),a=t(28453);t(113490);const o={slug:"audited-epns-push-protocol-v1-is-here",title:"Roadmap Q3: Audited EPNS Push Protocol V1 is here!",authors:["push"],image:"./cover-image.webp",description:"Roadmap Q3: Audited EPNS Push Protocol V1 is here!",text:"Since its inception, EPNS has been on its mission to build the most effective and reliable communication layer on Web3 to allow sending platform-agnostic and decentralized notifications.",tags:["Ethereum","Epnsproject","Protocol","Roadmaps"]},s=void 0,r={permalink:"/push-website/pr-preview/pr-973/blog/audited-epns-push-protocol-v1-is-here",source:"@site/blog/2021-11-02-audited-push-protocol-is-here/index.md",title:"Roadmap Q3: Audited EPNS Push Protocol V1 is here!",description:"Roadmap Q3: Audited EPNS Push Protocol V1 is here!",date:"2021-11-02T00:00:00.000Z",formattedDate:"November 2, 2021",tags:[{label:"Ethereum",permalink:"/push-website/pr-preview/pr-973/blog/tags/ethereum"},{label:"Epnsproject",permalink:"/push-website/pr-preview/pr-973/blog/tags/epnsproject"},{label:"Protocol",permalink:"/push-website/pr-preview/pr-973/blog/tags/protocol"},{label:"Roadmaps",permalink:"/push-website/pr-preview/pr-973/blog/tags/roadmaps"}],readingTime:9.84,hasTruncateMarker:!0,authors:[{name:"Push Protocol",url:"https://twitter.com/pushprotocol",imageURL:"/assets/blog/authors/authorpush.png",key:"push"}],frontMatter:{slug:"audited-epns-push-protocol-v1-is-here",title:"Roadmap Q3: Audited EPNS Push Protocol V1 is here!",authors:["push"],image:"./cover-image.webp",description:"Roadmap Q3: Audited EPNS Push Protocol V1 is here!",text:"Since its inception, EPNS has been on its mission to build the most effective and reliable communication layer on Web3 to allow sending platform-agnostic and decentralized notifications.",tags:["Ethereum","Epnsproject","Protocol","Roadmaps"]},unlisted:!1,prevItem:{title:"EPNS to Add Push Notifications to ENS Decentralized Domain Name Services",permalink:"/push-website/pr-preview/pr-973/blog/epns-to-add-push-notifications"},nextItem:{title:"Timeswap Partners with EPNS To Bring Push Notifications to Its Users",permalink:"/push-website/pr-preview/pr-973/blog/timeswap-partners-with-epns"}},c={image:t(144577).A,authorsImageUrls:[void 0]},l=[{value:"Understanding the Crucial Changes in the EPNS Protocol",id:"understanding-the-crucial-changes-in-the-epns-protocol",level:3},{value:"Protocol Transformation",id:"protocol-transformation",level:4},{value:"User Incentives Transformation",id:"user-incentives-transformation",level:4},{value:"EPNS Core Protocol",id:"epns-core-protocol",level:3},{value:"a. Channel Creation on EPNS Core Protocol",id:"a-channel-creation-on-epns-core-protocol",level:4},{value:"b. Channel State Cycles",id:"b-channel-state-cycles",level:4},{value:"c. Channel Verification Feature",id:"c-channel-verification-feature",level:4},{value:"EPNS Communicator Protocol",id:"epns-communicator-protocol",level:3},{value:"a. Sending notifications",id:"a-sending-notifications",level:4},{value:"Understanding Delegated Notifications",id:"understanding-delegated-notifications",level:4},{value:"b. Meta Transactions",id:"b-meta-transactions",level:4},{value:"c. Subscribing to a Channel",id:"c-subscribing-to-a-channel",level:4},{value:"d. Unsubscribing a Channel",id:"d-unsubscribing-a-channel",level:4}];function h(e){const n={a:"a",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Cover Image of Roadmap Q3: Audited EPNS Push Protocol V1 is here!",src:t(724618).A+"",width:"1400",height:"700"})}),"\n",(0,i.jsx)(n.p,{children:"Since its inception, EPNS has been on its mission to build the most effective and reliable communication layer on Web3 to allow sending platform-agnostic and decentralized notifications."}),"\n",(0,i.jsx)(n.p,{children:"While the initial idea was to build a notification protocol on Ethereum blockchain specifically, we have always had the vision to become Blockchain agnostic. With this goal in mind, we set ourselves the task to make sure we end Q3 with our EPNS Protocol ready to support multi-chain interoperability."}),"\n",(0,i.jsx)(n.h3,{id:"understanding-the-crucial-changes-in-the-epns-protocol",children:"Understanding the Crucial Changes in the EPNS Protocol"}),"\n",(0,i.jsx)(n.h4,{id:"protocol-transformation",children:"Protocol Transformation"}),"\n",(0,i.jsxs)(n.p,{children:["The EPNS Protocol has now been divided into two different smart contracts, i.e., ",(0,i.jsx)("i",{children:"EPNS Core & EPNS Communicator."})]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)("b",{children:"EPNS Core Protocol"}),": The Core protocol (EPNSCore.sol), as the name might indicate, is the main smart contract as it handles some of the most crucial features like Channel creation, governance, channel state changes as well as funds and incentive mechanisms, etc."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"It\u2019s very important to note, however, that the EPNS Core smart contract will only be deployed on the Ethereum blockchain and not on any other chain."}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)("b",{children:"EPNS Communicator Protocol"}),": Unlike the EPNS Core smart contract, the Communicator Protocol (EPNSComm.sol) is designed to be deployed on multiple chains. The EPNS Communicator protocol is comparatively quite simple."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The communicator protocol includes features that allow users to subscribe to a channel, unsubscribe from a channel as well as the imperative one, i.e., sending notifications. As the communicator protocol can be deployed on various chains, it allows us to trigger notifications on multiple chains and not just the Ethereum blockchain."}),"\n",(0,i.jsx)(n.h4,{id:"user-incentives-transformation",children:"User Incentives Transformation"}),"\n",(0,i.jsx)(n.p,{children:"With Protocol V1, we move towards blockchain agnostic behavior, the architecture also means that users preferences and notifications validation falls on the network (Push Nodes) as opposed to Ethereum smart contract."}),"\n",(0,i.jsxs)(n.p,{children:["With this new horizon, we understood that our staking (by service) \u2014 lending (by protocol)\u2014 interest (to users) will be complicated (if not improbable) to design for multi-chain. With this in mind, we are pivoting the earning to Push Token holders, the ",(0,i.jsx)(n.a,{href:"https://etherscan.io/token/0xf418588522d5dd018b425e472991e52ebbeeeeee#readContract",children:"token already had time weight"})," built into it when we launched it in April 2021, we will be utilizing this to calculate the interest and distribute to Push holders."]}),"\n",(0,i.jsxs)("blockquote",{children:["Note: This feature still required some work as per the ",(0,i.jsx)("a",{href:"https://twitter.com/ChainSafeth/status/1452640644397248520",children:"audit done by Chainsafe"}),", we will be introducing this feature soon via update once we iron out the clinks."]}),"\n",(0,i.jsx)(n.p,{children:"With that being said, we still are keeping the weight calculation formula on EPNS Communication contracts and will be exploring incentives for the users on different chains as we launch on them."}),"\n",(0,i.jsx)(n.p,{children:"Alright, it\u2019s time to dive deeper and understand the significant details about both of these smart contracts. Let\u2019s begin with the EPNS Core first."}),"\n",(0,i.jsx)(n.h3,{id:"epns-core-protocol",children:"EPNS Core Protocol"}),"\n",(0,i.jsx)(n.h4,{id:"a-channel-creation-on-epns-core-protocol",children:"a. Channel Creation on EPNS Core Protocol"}),"\n",(0,i.jsxs)(n.p,{children:["The creation of channels as well as storing all the imperative details about a channel is ",(0,i.jsx)("b",{children:"handled only by the EPNS Core protocol on the Ethereum blockchain."})]}),"\n",(0,i.jsx)(n.p,{children:"Before we proceed to understand how exactly channels are created in the EPNS Core, it's quite important to understand the 4 different states of channels in the protocol."}),"\n",(0,i.jsx)(n.p,{children:"Every channel in the protocol might have any one of the following states at a given time:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Inactive State: The Inactive state simply means that a particular address has not been activated as a channel yet, on the EPNS Core protocol."}),"\n",(0,i.jsx)(n.li,{children:"Activated State: Once a channel is created for a particular Ethereum address, it is marked as Activated. Activated channels are capable of sending notifications as well as using all other channel-related features available in the protocol."}),"\n",(0,i.jsx)(n.li,{children:"Deactivated State: Every active channel has the power to deactivate itself in the protocol and stop providing its services to the users. Deactivation of a particular channel can only be done by the Channel owner."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Channel deactivation is not a permanent action as the channel owner can choose to reactivate their channel at any time and can go back from Deactivated to Active state, more on this later. 4. Blocked State: Every Activated or Deactivated channel can be sent to a blocked state. Blocking a particular channel is a permanent action as once blocked, a channel cannot reactivate itself on the EPNS Core protocol again."}),"\n",(0,i.jsxs)("blockquote",{children:["While as per the current protocol design, only the Push channel admin can block a channel, this power will eventually be shifted to ",(0,i.jsx)("i",{children:"On-Chain Governance."})]}),"\n",(0,i.jsx)(n.p,{children:"Alright, now that we have a brief idea about all the possible states of a Channel in the protocol, let\u2019s understand the channel creation process on EPNS Core."}),"\n",(0,i.jsx)(n.p,{children:"Keeping in mind the fact that the EPNS Core resides only on the Ethereum blockchain, it\u2019s important to note that every channel must be created on Ethereum itself."}),"\n",(0,i.jsx)(n.p,{children:"The entire channel creation process in the protocol can be well understood by breaking it down into 4 main steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)("b",{children:"Checkpoints"}),": Before the channel creation process is initiated, the channel address must go through some crucial checkpoints to ensure that it is valid. For instance, some of the significant factors to check are:\na. A channel must not be in an active state before the channel creation process starts.\nb. Channel addresses that are already in a blocked state should never be allowed to create channels again.\nc. The amount of DAI being deposited for channel creation must be above the minimum threshold, etc."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)("b",{children:"Deposit of Channel Creation Fee"}),": Creating a channel on EPNS Core requires a channel creation fee of at least 50 DAI. In order to create a channel, the channel owner must deposit a sum of at least 50 DAI or more."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The amount of DAI transferred by a channel owner while creating their channel is directly deposited on Aave\u2019s lending pool in order to generate interests in aDAI. 3. ",(0,i.jsx)("b",{children:"Storing imperative Channel data"}),": Once the deposited amount is handled properly, the significant details like channel\u2019s pool contribution, state, weight, the channel creation block number as well as the total number of channels in the protocol, etc, are updated and stored on-chain. 4. ",(0,i.jsx)("b",{children:"Subscribing to important channels"}),": As per the current architecture of the protocol, the new channel being created must subscribe to 3 important channels right at the time of its creation:\na. EPNS Alerter Channel\nb. Push Channel Admin\nc. Channel owner must subscribe to its own channel as well.\nOnce all the above-mentioned steps are completed successfully, the channel\u2019s state is activated and it's all set to start sending notifications \ud83d\udd14."]}),"\n",(0,i.jsx)(n.h4,{id:"b-channel-state-cycles",children:"b. Channel State Cycles"}),"\n",(0,i.jsx)(n.p,{children:"As discussed previously, a channel can have 4 states in the protocol, i.e., inactive, activated, deactivated, and blocked. Now that we already have a better understanding of the activated state of a channel, let\u2019s understand the deactivation, reactivation, and blocking of a channel."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)("b",{children:"Channel Deactivation"}),": A channel that is currently in an active state can choose to deactivate itself using the deactivateChannel() function of the protocol. It\u2019s important to note that a channel can only be deactivated by the channel owner."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"When a channel is deactivated, a small amount of 10 DAI is deducted as channel deactivation fees. However, the remaining DAI amount, initially deposited at the time of Channel creation, is refunded back to the channel owner in the form of PUSH tokens."}),"\n",(0,i.jsxs)(n.p,{children:["As previously mentioned, the deactivation of a channel is not a permanent action as the channel owner can choose to reactivate their channel at any time. Moreover, it's interesting to note that the channel deactivation fees are added back to the channel\u2019s pool contribution account, once it's reactivated. Let\u2019s understand more about this in the reactivate channel section. 2. ",(0,i.jsx)("b",{children:"Channel Reactivation"}),": Any deactivated channel can always be reactivated at any time by calling the reactivateChannel() function of the EPNS Core protocol. Reactivation of a channel can be done by the channel owner only. The reactivateChannel() function basically changes the state of the channel from a deactivated to an activated state."]}),"\n",(0,i.jsx)(n.p,{children:"It\u2019s important to note that while reactivating their channel, the channel owner must deposit a sum of at least 50 DAI or more to complete the reactivation process."}),"\n",(0,i.jsxs)(n.p,{children:["Alright, now it's time to understand the entire working mechanism of ",(0,i.jsx)("b",{children:"channel activation, deactivation, and reactivation fees."})]}),"\n",(0,i.jsx)("blockquote",{children:(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"You Create a new Channel:\n-> Minimum Channel Creation fees = 50 DAI\n-> 50 DAI is deposited to create a new channel.\n-> Channel\u2019s Pool contribution in Core protocol is 50 DAI"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"You Deactivate your Channel.\n-> Channel Deactivation Fees = 10 DAI\n-> 10 DAI is deducted, and 40 DAI is refunded back to you\n-> Channel\u2019s Pool contribution in Core protocol now is 10 DAI"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"You Reactivate your Channel.\n-> Minimum reactivation fees = 50 DAI\n-> You deposit 50 DAI, for channel reactivation.\n-> Your Channel\u2019s Pool contribution in Core protocol now is 60 DAI\n(Reactivation Fee(50) + Previous Deactivation Fee(10))"}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"First Image of Roadmap Q3: Audited EPNS Push Protocol V1 is here!",src:t(625738).A+"",width:"1400",height:"933"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)("b",{children:"Blocking a Channel"}),": As the name implies, blocking a channel changes the channel state from Active to Blocked state."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Since blocking a channel is a permanent action, once blocked a channel can never go back to the activated state again. A channel can be blocked whenever the blockChannel() function in the protocol is triggered. This function can only be activated by the Push channel admin as of now and no other channel owners can trigger this function."}),"\n",(0,i.jsx)(n.p,{children:"Once a channel is blocked, it is no more a part of the protocol, and therefore, the total count of channels in the protocol decreases as well."}),"\n",(0,i.jsx)(n.p,{children:"Most importantly, unlike the channel deactivation process in the protocol, blocking a channel doesn\u2019t refund any amount back to the owner of that channel."}),"\n",(0,i.jsx)(n.h4,{id:"c-channel-verification-feature",children:"c. Channel Verification Feature"}),"\n",(0,i.jsx)(n.p,{children:"EPNS Core contract also includes a new Channel Verification feature which allows Channels to have a verification tag."}),"\n",(0,i.jsx)(n.p,{children:"The verification tag of a Channel has its own significance. While on one hand, a verified channel enhances the user\u2019s reliability on the channel and its notifications, it also gets a comparatively better position on the User interface."}),"\n",(0,i.jsx)(n.p,{children:"Understanding the Channel Verification procedure\nChannels in the EPNS Core protocol can have either a Primary or a Secondary verification tag."}),"\n",(0,i.jsxs)(n.p,{children:["a. ",(0,i.jsx)("b",{children:"Primary Verification tag"}),": Channels that have directly been verified by the Push Channel Admin are the ones that have a primary verification tag.\nAll Primary Verified channels have the power to verify other unverified channels."]}),"\n",(0,i.jsxs)(n.p,{children:["b. ",(0,i.jsx)("b",{children:"Secondary Verification tag"}),": Channels that have been verified by other Primary Verified channels and not directly by the Push Channel Admin, have a secondary verification tag."]}),"\n",(0,i.jsx)("b",{children:"Revocation of the Verification Tag"}),"\n",(0,i.jsx)(n.p,{children:"The protocol also allows revocation of the verification tag of any specific channel in specific circumstances. Any channel can be unverified either by the Channel\u2019s actual verifier or Push Channel Admin."}),"\n",(0,i.jsxs)(n.p,{children:["a. ",(0,i.jsx)("b",{children:"Unverifying a Primary verified channel"}),": The verification tag of a primary verified channel can only be revoked by the Push channel admin.\nHowever, an imperative part to note here is the fact that once a specific target channel with a primary verification tag is unverified, the secondary verification tag of all those channels that were verified by this target channel will be revoked as well.\nFor instance:"]}),"\n",(0,i.jsx)("blockquote",{children:(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Push Channel Admin verifies Channel A \u2014 Primary Verification"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Channel A verifies Channel B, C & D \u2014 Secondary Verification"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Push channel admin revokes the verification of Channel A"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Channel B, C, & D are unverfied as well"}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(n.p,{children:"A quick look at the infographics below will help understand the verification procedure in the core smart contract effectively."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Second Image of Roadmap Q3: Audited EPNS Push Protocol V1 is here!",src:t(943979).A+"",width:"1400",height:"1400"})}),"\n",(0,i.jsxs)(n.p,{children:["b. ",(0,i.jsx)("b",{children:"Unverifying a Secondary verified channel"}),": A channel with a secondary verification tag can be unverified either by the actual verifier of the channel or by the Push channel admin itself. As channels with secondary verification tags cannot verify other channels, their revocation of the verification tag has no impact on any other Channel\u2019s verification tag."]}),"\n",(0,i.jsx)(n.p,{children:"Now that we have quite a better understanding of the EPNS Core protocol, let\u2019s start with EPNS Communicator"}),"\n",(0,i.jsx)(n.h3,{id:"epns-communicator-protocol",children:"EPNS Communicator Protocol"}),"\n",(0,i.jsx)(n.h4,{id:"a-sending-notifications",children:"a. Sending notifications"}),"\n",(0,i.jsx)(n.p,{children:"Well, it can undoubtedly be stated that sendNotification() is one of the most imperative functions of the EPNS Communicator protocol. While the older EPNS protocol had a simpler sendNotification function, EPNS Communicator has expanded the boundaries for this feature."}),"\n",(0,i.jsx)(n.p,{children:"Unlike the previous version of the protocol, sending the notification is now not just for the owner of the channels themselves, but there is more to it.\nLet\u2019s understand this clearly."}),"\n",(0,i.jsx)(n.p,{children:"As per the current architecture of the Communicator protocol, there can be 4 main actors who can send notifications:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)("b",{children:"Channel Owners"}),": It goes without saying, that the owners of a particular channel can definitely send notifications to their subscribers."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)("b",{children:"EPNS Alerter"}),": These are the notifications that come from the Push channel admin and are mostly targeted at every user."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)("b",{children:"Delegatee Notification Senders"}),": This is a new feature that allows any address to send notifications on behalf of a channel, to its subscribers. However, the notification must be allowed by the channel to do so. More on this later."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)("b",{children:"Sending notification to yourself"}),": Yes, the EPNS Communicator allows any address to send notifications to themselves \ud83d\ude03. It\u2019s important to note, however, that the address sends the notification to themselves only. In other words, any address can trigger a notification provided that the recipient of the notification is the caller himself/herself."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"understanding-delegated-notifications",children:"Understanding Delegated Notifications"}),"\n",(0,i.jsx)(n.p,{children:"In very simpler terms, delegated notifications is a feature that allows channel owners to delegate their power of sending notifications to any wallet address or multiple addresses of their choice."}),"\n",(0,i.jsx)(n.p,{children:"This mechanism of sending delegated notifications is quite effective in providing value-added services to the channels. It also ensures the availability of mechanisms that can be used by EPNS or any other third-party infrastructure to send on-chain notifications on the channel\u2019s behalf."}),"\n",(0,i.jsxs)(n.p,{children:["In order to enable the channel owner to validate a particular address to send notifications on the channel\u2019s behalf, there are 2 specific functions called ",(0,i.jsx)("i",{children:"addDelegate() & removeDelagate()"})," in the Communicator protocol itself."]}),"\n",(0,i.jsx)(n.p,{children:"The channel owner can trigger the above-mentioned functions to either allow or remove an address as a valid notification sender. However, once allowed, the specific address can send a notification to the subscribers on behalf of the channel."}),"\n",(0,i.jsx)(n.h4,{id:"b-meta-transactions",children:"b. Meta Transactions"}),"\n",(0,i.jsx)(n.p,{children:"It can undeniably be stated that paying gas fees for every transaction on the Ethereum blockchain is still one of the most daunting tasks. If you don\u2019t always have some ETH ready in your wallet, it might be comparatively difficult for you to interact with the protocols on the ethereum blockchain as you need to pay the gas fees."}),"\n",(0,i.jsx)(n.p,{children:"Well, interaction with the EPNS Communicator protocol requires gas as well but don\u2019t worry, we have got you covered."}),"\n",(0,i.jsx)(n.p,{children:"EPNS Communicator protocol supports meta transactions or, in other words, gasless transactions. In simpler terms, the protocol allows you to interact with its functions without actually paying any gas fee."}),"\n",(0,i.jsx)(n.p,{children:"All you really need to do is simply sign the transaction that you want to put on the blockchain with your keys. This action doesn\u2019t really require any gas fees as you aren\u2019t actually interacting with the protocol on-chain but just signing a transaction."}),"\n",(0,i.jsx)(n.p,{children:"The signed transaction will then be submitted on the blockchain by the operator by paying some gas fees. Once the transaction is submitted on the blockchain, the communicator protocol verifies your signature to ensure it\u2019s a valid signed transaction and executes the required function on your behalf."}),"\n",(0,i.jsx)(n.p,{children:"The protocol currently allows meta transactions for the following functions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"subscribe()"}),"\n",(0,i.jsx)(n.li,{children:"unsubscribe()"}),"\n",(0,i.jsx)(n.li,{children:"sendNotification()"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"c-subscribing-to-a-channel",children:"c. Subscribing to a Channel"}),"\n",(0,i.jsx)(n.p,{children:"The subscribe() function in the protocol allows users to subscribe to any channel that is in an activated state."}),"\n",(0,i.jsx)(n.p,{children:"While the subscribe function can be called by any address, the caller must pass a valid channel address, that they want to subscribe to, as an input for this function."}),"\n",(0,i.jsx)(n.p,{children:"Once the subscribe() function is called it performs the following actions:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)("b",{children:"Checkpoints"}),":\n-> Once the function is called, the push nodes verify whether or not the channel address passed as an input is a valid channel in an active state."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"-> If the channel is a valid one, the communicator contract then ensures that the caller (subscriber) of the function must not already be subscribed to the channel. If the user is already a subscriber of the channel, the transaction gets reverted."}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)("b",{children:"User Activation"}),": The subscribe() function also includes an imperative procedure wherein a completely new user that is trying to subscribe to any specific channel for the first time, gets activated and added to the protocol first. At this step, the total user count in that particular Communicator contract is increased as well."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)("b",{children:"Subscribed to the Channel"}),": Once the checkpoints are passed successfully, the user is added as a valid subscriber of the given channel address"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)("b",{children:"User information storage"}),": As the final step of this function, all the relevant and crucial information about the user is stored in the protocol. At this step, the subscribed_Count of the user, i.e., the total number of channels a single user is subscribed to, is also increased."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"d-unsubscribing-a-channel",children:"d. Unsubscribing a Channel"}),"\n",(0,i.jsx)(n.p,{children:"The unsubscribe() function in the protocol is quite simple, as the name already suggests."}),"\n",(0,i.jsx)(n.p,{children:"It allows users to unsubscribe from a specific channel, provided that the caller of the function was already subscribed to that channel before. The unsubscribe() function updates the user\u2019s state in the protocol by removing it as a subscriber for the given channel and decreasing the total subscribed_Count of the user."})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},144577:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/cover-image-8b23d8d4de47f43e740bd6fdb2c36400.webp"},724618:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/cover-image-8b23d8d4de47f43e740bd6fdb2c36400.webp"},625738:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-1-8dc5914e97fc536864ee191f01660c6e.webp"},943979:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-2-c3878238f78e598186d6a4c6678b88d6.webp"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var i=t(296540);const a={},o=i.createContext(a);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);