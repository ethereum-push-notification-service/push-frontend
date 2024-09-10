"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[21163],{921300:e=>{e.exports=JSON.parse('{"title":"EPNS Roadmap 2022","description":"EPNS Roadmap 2022","frontMatter":{"slug":"epns-roadmap-2022","title":"EPNS Roadmap 2022","authors":["push"],"image":"./cover-image.webp","description":"EPNS Roadmap 2022","text":"2021 was the year of enormous things in the crypto world. We witnessed DeFi taking over the world, NFTs driving adoption and landing mainstream spots, Metaverse coming to a room near you and so many more things!","tags":["Blockchain","Epnsproject","Web3","Crypto"]},"content":{"id":"epns-roadmap-2022","metadata":{"permalink":"/push-website/pr-preview/858/blog/epns-roadmap-2022","source":"@site/blog/2022-04-24-epns-roadmap-2022/index.md","title":"EPNS Roadmap 2022","description":"EPNS Roadmap 2022","date":"2022-04-24T00:00:00.000Z","formattedDate":"April 24, 2022","tags":[{"label":"Blockchain","permalink":"/push-website/pr-preview/858/blog/tags/blockchain"},{"label":"Epnsproject","permalink":"/push-website/pr-preview/858/blog/tags/epnsproject"},{"label":"Web3","permalink":"/push-website/pr-preview/858/blog/tags/web-3"},{"label":"Crypto","permalink":"/push-website/pr-preview/858/blog/tags/crypto"}],"readingTime":10.53,"hasTruncateMarker":true,"authors":[{"name":"Push Protocol","url":"https://twitter.com/pushprotocol","imageURL":"/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"epns-roadmap-2022","title":"EPNS Roadmap 2022","authors":["push"],"image":"./cover-image.webp","description":"EPNS Roadmap 2022","text":"2021 was the year of enormous things in the crypto world. We witnessed DeFi taking over the world, NFTs driving adoption and landing mainstream spots, Metaverse coming to a room near you and so many more things!","tags":["Blockchain","Epnsproject","Web3","Crypto"]},"unlisted":false,"prevItem":{"title":"Wrapping Up Rockstars of EPNS NFT Drops","permalink":"/push-website/pr-preview/858/blog/wrapping-up-rockstars-of-epns-nft-drops"},"nextItem":{"title":"BUIDL w/ EPNS: Ideas to hack the future of #Web3Comm!","permalink":"/push-website/pr-preview/858/blog/buidl-w-epns-ideas-to-hack"}},"content":"import { ImageText } from \'@site/src/css/SharedStyling\';\\n\\n![Cover Image of EPNS Roadmap 2022](./cover-image.webp)\\n\\n\x3c!--truncate--\x3e\\n\\n2021 was the year of enormous things in the crypto world. We witnessed DeFi taking over the world, NFTs driving adoption and landing mainstream spots, Metaverse coming to a room near you and so many more things! And of course, the creation of EPNS Protocol, the communication layer for Web3 that will ensure all of these things (and more!) can function properly.\\n\\nWe had a phenomenal 2021 with building the tech that will empower the future of the internet aka Web3. Continuing with our vision of becoming the de-facto communication layer for Web3, the 2022 roadmap is designed to enable faster adoption of the EPNS protocol, becoming multi-chain, further perfecting the protocol, and enabling developers and wallets alike to integrate the protocol in the smoothest way possible.\\n\\nTo help us achieve our objectives, we will focus on the following product themes:\\n\\n- EPNS Protocol & Smart Contracts (Send Notifications)\\n- Progressive Decentralized Governance\\n- Front-End products: dApp, Mobile App, Browser extension\\n- PUSH Nodes (Retrieval & Dispatch)\\n- Technical Documentation\\n\\nTLDR;\\n\\n![First Image of Roadmap 2022](./image-1.webp)\\n\\n### EPNS Protocol (Send Notifications)\\n\\n![Second Image of Roadmap 2022](./image-2.webp)\\n\\n2021 witnessed the creation and [successful audit](https://epns.io/EPNS-Protocol-Audit2021.pdf) of the EPNS Smart Contracts!\\n\\nThe main goal of the EPNS Protocol is to make sure all communication is prepared and sent in compliance with the protocol standards. This will make every notification readily available to be picked up by the PUSH Nodes in charge of dispatching.\\n\\nThe year 2021 witnessed quite significant modifications in the EPNS Smart contract.\\n\\nAs we continue to work towards our vision of becoming blockchain agnostic, we have now ensured that our protocol is capable of effectively supporting multi-chain interoperability.\\n\\nIn order for us to provide a communication layer across multiple chains, our protocol has now been divided into 2 major components namely EPNS Core & EPNS Comm(Communicator). As per the current architecture, the EPNSCore contract shall only be deployed to the Ethereum blockchain, the EPNSComm is designed to be used in multiple chains. Read more about the in-depth details about the contracts [here](https://medium.com/ethereum-push-notification-service/roadmap-q3-audited-epns-push-protocol-v1-is-here-f4560dfe550c).\\n\\nWhile some of our imperative features like Channel Creation, notification sending, subscribe/unsubscribe, etc; were already designed in our smart contracts, new features are coming to the protocol this year. For instance:\\n\\n- [Channel State cycles](https://medium.com/ethereum-push-notification-service/roadmap-q3-audited-epns-push-protocol-v1-is-here-f4560dfe550c): This feature allows a channel\u2019s state to be changed in the protocol. A specific channel can either have an inactive, active, deactivated or even a blocked state. Moreover, a channel\u2019s activities and capabilities in the protocol will also be highly dependent on the state of the channel,\\n- Addition or Removal of Delegate Notification senders: Yes, the whole procedure of Sending notifications to subscribers can now be delegated to any given wallet address. As per the current architecture of the protocol, a channel owner has the power to add any specific wallet address as a valid delegate for his/her channel, thus allowing the wallet to send notifications on his behalf,\\n- Verification of Channels through the smart contracts.\\n- Meta transaction for Subscribing, Unsubscribing Sending notifications, etc\\n\\nAlthough most of the MVP features are already in place, there will be quite significant upgrades to the EPNS smart contracts in the year 2022 as well.\\n\\n#### Functionality for Claiming Interests:\\n\\n- One of the most significant features of our smart contracts and perhaps much-awaited one is the claim interests functionality that allows the users to claim their incentives from the contract.\\n- While this feature was initially planned for just the channel owners as well as subscribers in the EPNS contract, it is now being designed to distribute rewards among all $PUSH Token Holders. The incentives shall be in the form of $PUSH tokens themselves.\\n- This entire claim procedure shall be a part of the EPNS Core contracts and will be included very soon.\\n\\n#### On-Chain Governance Mechanism:\\n\\n- Since the launch of our EPNS Governance, it has been quite evident that EPNS wholeheartedly believes in the significance & power of a progressive decentralized governance system.\\n- While the EPNS community is actively participating in different governance frameworks like the Weekly Rockstar NFT, Grants program, etc, we shall have a similar procedure for the further development & upgrades of our smart contracts as well.\\n- As the EPNS Governance contracts have already qualified the entire security audit, the community shall soon be able to participate in the decision-making process for the inclusion of any new features in the contracts, upgrades of the contract to newer versions as well as the overall growth of the protocol.\\n- Moreover, some of the imperative functionalities of the current EPNS Core contract like blocking a channel permanently, verifying a channel, or revoking a channel\u2019s verification shall also be handled via the on-chain governance procedure itself.\\n\\n#### Wallet-to-Wallet Chat Functionality\\n\\n- As per our recent announcement, one of the super interesting features that we are planning to launch this year is the Wallet to Wallet Chat feature. This functionality is undoubtedly is one of its kind and we are planning to modify our EPNS Core and Comm contracts to ensure this feature can be used adequately.\\n\\n#### Designing EPNS Comm Contract for Non-EVM Chains:\\n\\n- Becoming blockchain agnostic demands equal attention to all the different types of chains that exist in the Web3 world.\\n- While EPNS smart contracts are specifically designed for EVM compatible chains at the moment, we shall soon initiate the design and development process of our smart contracts for non-EVM chains as well.\\n- Since the EPNS Communicator contract is supposed to be deployed on multiple chains, it is, by design, comparatively simpler than Core and does not rely on the core contract for any of its actions. Hence, we shall especially be focussing on designing the EPNS Communicator contract in order to make it ready for deployment across all different types of chains, including the non-EVM compatible chains.\\n\\nWe are making it easier for teams and individual contributors to make use of all these features to create solutions. A revamped version of the Showrunners Framework will be made available together with Integration Guides aiming to foster a healthy and creative developers community using EPNS as the building block for communication needs.\\n\\n### Progressive Decentralized Governance\\n\\n![Third Image of Roadmap 2022](./image-3.webp)\\n\\nWe began the year 2021 with a firm belief in the fact that an effective Governance mechanism is one of the most crucial pillars for a decentralized protocol as well as the bridge that links and connects the community to the project. And it can undoubtedly be stated that we haven\u2019t left a single stone unturned in our journey to build a <b>Progressive Decentralized Governance</b>, ever since.\\n\\nHere\u2019s what we did so far when it comes to governance:\\n\\n- Since its inception in the month of September 2021, the Governance framework was launched with 3 imperative ways for the community to be involved, i.e., <i>Weekly Rockstar NFT, Grants Program as well as Metagovernance.</i>\\n- In order to ensure adequate coordination within the community to make better decisions, the initial phase of the governance was more about laying out the specific processes, rules as well as roles of governance.\\n- Moreover, we gradually shifted towards the use of Snapshot for a decentralized voting mechanism. Considering Snapshot\u2019s easy gasless voting mechanism as well as our weekly EPNS Rockstart program, we saw steady growth in the number of delegates and participants in the Governance.\\n\\nWhile these were just a few of the highlights from last year, the EPNS governance has much bigger and more interesting plans for 2022. True to those same themes, 2022 will bring to the Community additional contribution & reward streams and further $PUSH voting empowerment involving the EPNS ecosystem and protocol.\\n\\nThe goal of the governance team is to bring us ever closer to becoming a true DAO. In 2022 we\u2019ll deliver the following:\\n\\n<i>EPNS On-Chain Governance Contracts</i>: While the EPNS Governance contracts were already audited last year, we shall achieve one of our most crucial milestones this year with the launch of our governance smart contracts.\\n\\nWith the deployment of the EPNS Governance contracts, we shall be able to ensure that the community is capable of actively participating as well as contributing to the overall development of the smart contracts.\\n\\n<i>Meta-Governance and DAO Partnerships</i>: The process of \u201cDAO-ification\u201d requires a robust governance environment and we get closer to that goal every day.\\n\\nWe\u2019ll continue growing our Community, delivering the features wanted, and facilitating contributors to dedicate their talents to EPNS. One overall piece will be meta-governance, this means making our governance processes available to other communities outside our own and vice versa \u2014 giving $PUSH holders a greater voice in the web3 ecosystem.\\n\\nUnder this umbrella is partnering with other DAOs we identify as a community to be beneficial. That part is sort of intentionally vague because web3 collaboration is always changing and we want to evolve with it.\\n\\n<i>Governance Website & dApp</i>: Additionally we shall also have a separate website specifically for the Governance procedure. This shall include all information regarding our governance. It shall allow our community members to create new proposals, vote on proposals, and also include our governance dashboard as well as other governance tooling integration.\\n\\n### Front-End Products\\n\\n![Fourth Image of Roadmap 2022](./image-4.webp)\\n\\nWe started 2021 with a very specific plan of providing effective user interfaces for our users to connect with our products and services. The three main UI components that we built last year were:\\n\\n- dApp (Decentralized Application)\\n- Mobile Apps (IOS & Android)\\n- Browser Extension\\n\\n#### dApp (Decentralized Application)\\n\\nWhile most of the foundational features for the dApp were already developed in Q1 of 2021 itself, we have included some really interesting as well as significant features for both Channels and Users, as well. For instance:\\n\\nFor Channel Owners:\\n\\n- A Channel Profile Page for every channel that includes all important details about a channel as well as crucial channel settings. Moreover, a specific channel\u2019s profile page shall only be accessible by the owner of the channel.\\n- The Addition or Removal of a Delegate is an imperative action that can only be taken by the owner of a particular channel. This shall allow channel owners to add any wallet address as a valid delegate to send the notification on the channel\u2019s behalf. Importantly, the channel owner can also a particular delegate at any given time.\\n- Deactivation of a Channel feature is a new feature that allows a channel owner to deactivate his/her channel. However, it\'s imperative to note that deactivation is an action that can only be performed by the owner of that channel while also allowing the channel owner to reactivate their channel whenever they want. The in-depth details about the deactivate channel feature can be found [here](https://medium.com/ethereum-push-notification-service/roadmap-q3-audited-epns-push-protocol-v1-is-here-f4560dfe550c).\\n- The [Channel verification badge](https://medium.com/ethereum-push-notification-service/roadmap-q3-audited-epns-push-protocol-v1-is-here-f4560dfe550c) feature is now also live on the dApp. This is a really interesting feature that not just assigns a verification badge for channels and aligns them in a better position in the UI but also allows the verified channels to verify other unverified channels.\\n\\n<i>For Subscribers</i>\\n\\n- Gasless Subscribe or Unsubscribe is perhaps one of the most significant and useful features that we implemented in the dApp. This allows an incredibly smooth as well as a zero-cost opt-in procedure for the users. Subscribing to a channel is now as simple as just signing the transaction with your wallet address without the need to pay any gas.\\n- Channel Search Bar in the dApp now allows users to look out for any channel that they want and opt-in easily.\\n\\n#### What\u2019s Next for the dApp?\\n\\nNow that we have the basic and important features in place already, this year we are planning to add quite significant ones to enhance the user experience on the dApp. Some of them being:\\n\\n- Redesigning of the dApp UI: To begin with, the [EPNS dApp](https://app.epns.io/) shall soon have a brand new UI design with a comparatively better experience for users. Since we already have started working on our new interface, we might have the new UI ready by Q1 of this year itself.\\n- Notification settings for Users and Channels: One of the most significant features that shall be launched this year is the notification setting for both users and channels.\\n  When it comes to notifications, a specific channel might have different types of notifications. While some notifications deal with the Governance updates of that channel, others might be related to the loan liquidations. Now with Channel notification settings, the channel owner shall be able to provide specific notification options to its users depending on the different kinds of notification a channel might have to offer.\\n\\nOn the other hand, notification settings for users shall allow users to be capable of being selective in terms of the notifications that they receive. Users will be able to precisely select only those notification options from a channel that they are interested in.\\n\\nIn other words, a user only interested in the governance proposals of a particular channel shall not receive other types of notifications from that channel despite being a valid subscriber of the channel.\\n\\n- The dApp will also include a feature that allows editing or modifying a Channel\u2019s Detail. This, however, shall only be doable by the owner of that channel.\\n- Search and Filteration of Notifications shall also be included in the dApp to simplify the process of searching for a particular notification.\\n\\n#### Mobile App\\n\\nQuite similarly to the dApp, our mobile apps have also come a long way now. While the early stages had only some of the initial important features on the apps, we have included quite a lot of significant features in the last year and modified our apps. Some of those features are as follows:\\n\\n- Channel Discovery feature was added, which allows users to look at all the channels associated with EPNS.\\n- The Spam Box feature on our mobile apps ensured that the Spam notifications never entered the inbox of a user.\\n- Quite importantly, the Wallet Connect sign feature was enabled in the mobile app to ease the sign-in process.\\n- Moreover, the Opt-in feature was included in the mobile app. This allowed users to subscribed to their favorite channels right from their mobile.\\n\\nThis year, we are planning to add the following features to the mobile app:\\n\\n- Support sign-in with multiple wallets so that the users can receive notifications for all their wallet addresses in one single place.\\n- Filters and search options for the channels list.\\n- Options to mute notifications for a specific time\\n- Visualizations for multi-chain notifications.\\n- Provide richer notifications for channels.\\n\\n#### Browser Extension\\n\\nWhile we already have the Browser Extension in place and completely functional now, this year we are planning on providing a richer and better UI design for the EPNS extension to ensure its on-pair with all other front-end product capabilities where it makes sense.\\n\\n### PUSH Nodes (Retrieval & Dispatch)\\n\\n![Fifth Image of Roadmap 2022](./image-5.webp)\\n\\nPush Nodes can undoubtedly be stated as one of the most crucial components in our journey towards becoming a true reliable communication layer for the Web3 world.\\n\\nLast year we included the following features in our Push Nodes:\\n\\n- Off-Chain Notification\\n- Spam Feature\\n- Support for Polygon Notification\\n- Using local IPFS instance\\n- S3 Bucket Backup\\n\\nWhile some of the very significant features of the Push Nodes were already built last year, this year we are planning to make our Push Nodes more powerful and effective. Some of the critical features that we are planning for the year 2022 are as follows:\\n\\n- <b>Decentralization of Push Nodes</b>: While there is no denying the fact that our aim is to become a blockchain agnostic communication layer, we also understand that decentralization of our Push Nodes is unquestionably one of our top priorities. This is why we have tasked ourselves to decentralize the push nodes this year and achieve our goal of becoming a truly decentralized middleware solution.\\n  Decentralization of our push nodes is going to be a very imperative step towards becoming blockchain agnostic as this ensures higher scalability, stronger support for Layer 2 solutions as well enhanced performance, etc.\\n\\nMoreover, along with the decentralization of our nodes, we shall also be implementing an effectual incentive mechanism for our active participants.\\n\\n- <b>User and Channel Notification settings</b>: As previously mentioned, the notification settings for both users and channels are one of the much-awaited features that we shall introduce this year.\\n\\nWhile our audited EPNS Core and EPNS Comm smart contracts already have the notification settings functions for both channels & users respectively, one of our important tasks this year is to ensure our push nodes are ready to support this feature.\\n\\n- <b>Wallet-to-Wallet Chat feature</b>: The wallet-to-wallet chat feature is one of those super interesting features that the community is really looking forward to. Therefore, effectively enabling our push nodes to support this feature is one of the major tasks we are planning to work on by the Q3 of the year 2022.\\n- <b>Multi-chain support</b>: Since the EPNS smart contracts are already designed keeping in mind our vision of becoming blockchain agnostic, we also plan to ensure that our Push nodes are capable of handling multi-chain support. While we are already on the Ethereum blockchain, we will very soon launch our contracts on different chains like Polygon, BSC, etc. The year 2022 will not just witness the EPNS Contract on EVM compatible chains but also on non-EVM compatible chains like Solana.\\n\\nAdditionally, we are also planning to provide an analytics dashboard for Push Nodes\\n\\n#### Technical Documentation\\n\\n![Sixth Image of Roadmap 2022](./image-6.webp)\\n\\nWhile we have been more inclined towards developing different components of our product, we are quite aware of the significance of effectual documentation.\\n\\nThis year, we are also planning to roll out extensive technical documentation as well as guides for both developers and users. Along with publishing new documentation we shall also be updating our previous technical documents, whitepaper and ensure that they are up-to-the-minute with all the latest changes.\\n\\nSome of the crucial topics that we are planning to cover this year are as follows:\\n\\n<i>\\n- Documentation on Back-end SDK\\n- Documentation on Front-end SDK\\n- Tutorial for Using Backend-SDK to Set-Up notifications for a channels\\n- Tutorial for Using Frontend SDK to integrate EPNS on a specific Protocol\u2019s dApp\\n- Detailed description and explanation of CLAIM Functionality and incentive mechanisms of our EPNS Core smart contract\\n- Detailed Explanation on W2W Chat Feature.\\n</i>\\n\\nWith these plans for the product\u2019s roadmap 2022, we have started this year with utmost belief and commitment to our mission of providing an effective and reliable communication layer for the Web3 world.\\n\\nIf you have any comments or questions please feel free to reach out to us on telegram or check out our website for more details: https://epns.io/"}}')}}]);