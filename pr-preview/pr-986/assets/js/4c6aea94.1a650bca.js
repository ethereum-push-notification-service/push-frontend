"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[66326],{422270:e=>{e.exports=JSON.parse('{"title":"Web3\u2019s Ultimate Communication Layer is Around the Corner","description":"Web3\u2019s Ultimate Communication Layer is Around the Corner","frontMatter":{"slug":"web3-ultimate-communication-layer","title":"Web3\u2019s Ultimate Communication Layer is Around the Corner","description":"Web3\u2019s Ultimate Communication Layer is Around the Corner","authors":["push"],"image":"./cover-image.gif","text":"The EPNS mainnet launches on January 11, 2022. With it, applications across Web3 will begin exploring what it means to communicate with each other and with their users in a decentralized, permissionless, and incentivized way.","tags":["Mainnet","Web3","Ethereum","Notifications","Blockchain"]},"content":{"id":"web3-ultimate-communication-layer","metadata":{"permalink":"/push-website/pr-preview/pr-986/blog/web3-ultimate-communication-layer","source":"@site/blog/2021-12-21-web3-ultimate-communication-layer/index.md","title":"Web3\u2019s Ultimate Communication Layer is Around the Corner","description":"Web3\u2019s Ultimate Communication Layer is Around the Corner","date":"2021-12-21T00:00:00.000Z","formattedDate":"December 21, 2021","tags":[{"label":"Mainnet","permalink":"/push-website/pr-preview/pr-986/blog/tags/mainnet"},{"label":"Web3","permalink":"/push-website/pr-preview/pr-986/blog/tags/web-3"},{"label":"Ethereum","permalink":"/push-website/pr-preview/pr-986/blog/tags/ethereum"},{"label":"Notifications","permalink":"/push-website/pr-preview/pr-986/blog/tags/notifications"},{"label":"Blockchain","permalink":"/push-website/pr-preview/pr-986/blog/tags/blockchain"}],"readingTime":2.73,"hasTruncateMarker":true,"authors":[{"name":"Push Protocol","url":"https://twitter.com/pushprotocol","imageURL":"/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"web3-ultimate-communication-layer","title":"Web3\u2019s Ultimate Communication Layer is Around the Corner","description":"Web3\u2019s Ultimate Communication Layer is Around the Corner","authors":["push"],"image":"./cover-image.gif","text":"The EPNS mainnet launches on January 11, 2022. With it, applications across Web3 will begin exploring what it means to communicate with each other and with their users in a decentralized, permissionless, and incentivized way.","tags":["Mainnet","Web3","Ethereum","Notifications","Blockchain"]},"unlisted":false,"prevItem":{"title":"How EPNS Can Be Integrated Into the Various Aspects of DeFi","permalink":"/push-website/pr-preview/pr-986/blog/how-epns-can-be-integrated"},"nextItem":{"title":"EPNS sponsoring Gitcoin Grants Round 12!","permalink":"/push-website/pr-preview/pr-986/blog/epns-sponsoring-gitcoin-grants-12"}},"content":"import { ImageText } from \'@site/src/css/SharedStyling\';\\n\\n![Cover image of Web3\u2019s Ultimate Communication Layer is Around the Corner](./cover-image.gif)\\n\\n\x3c!--truncate--\x3e\\n\\n**The EPNS mainnet launches on January 11, 2022.** With it, applications across Web3 will begin exploring what it means to communicate with each other and with their users in a decentralized, permissionless, and incentivized way.\\n\\nThe rise of Web2 has brought over 60% of the world\u2019s population online to transact, work, create, and explore. Fundamental to the success and engagement of Web2 is a ubiquitous communication network that keeps bringing users _back_ to the web, over and over again. One of the most revolutionary digital communication techniques of the last 20 years has been the trusty push notification. By keeping users constantly updated about various happenings on the internet, this notification tool has shaped the way users and applications interact with each other on the web.\\n\\nWith the rise of blockchain technology, an ecosystem of decentralized applications have exploded, offering new tools to developers, investors, creators, and more. Like the early days of the internet, however, this nascent landscape has no means of internal communication, and instead has been reliant entirely on legacy centralized platforms.\\n\\nThis has created unnecessary friction between users and protocols, leading to non-deal user experience and lower engagement rates. This is why EPNS has been building the ultimate communication layer for Web3. Now, with the launch of the EPNS mainnet, push notifications and on-chain communication will officially become a fundamental link in the mesh of Web3.\\n\\nHere\u2019s taking a quick look at how EPNS is poised to change the communication game in Web3.\\n\\n### Building the Web3 Communication Layer\\n\\nFor a better understanding of what EPNS does, it is critical to recall how EPNS works. The EPNS ecosystem consists of three main players \u2014 **users, channels, and subscribers.**\\n\\nEveryone using EPNS in any possible way is considered a _user_ of the platform, split between _providers_ and _consumers._ Service providers can register themselves as _channels_ and send notifications, whereas consumers can subscribe to those channels to receive notifications (thus becoming _subscribers_). Furthermore, a channel itself can subscribe to other channels to receive their notifications. \ud83e\udd2f\\n\\nWith the launch of our mainnet, businesses, service providers, and dApps in Web3 will officially be able to create channels to communicate with their own communities. The best part? The utilities are nearly limitless. DeFi applications can set up notifications that are triggered with on-chain information like loan liquidations and governance proposals. Good samaritans can set up channels to notify their subscribers about airdrops, or when suspicious activity could portent security issues. Centralized exchanges can notify people when new tokens are launched. All of this happens with just a click of a button, putting so much more power into the hands of the everyday Web3 user.\\n\\nSince the EPNS token generation event in Spring 2021, we have partnered with dozens of DeFi, gaming, NFT, and infrastructure projects to build channel and notification prototypes with them. Many of these will be immediately available at mainnet launch.\\n\\n# Becoming Blockchain Agnostic\\n\\nAs our name suggests, our initial focus was to enable this communication network for Ethereum. Once we succeeded in building that technology, we updated our goal to become the _default communication layer for all of Web3._ We now have a solution to be blockchain-agnostic, meaning businesses across any L1 or L2 will be able to effectively communicate and collaborate through EPNS.\\n\\n> **To achieve this, we divided our protocol into two different smart contracts \u2014 EPNS Core and EPNS Communicator.**\\n\\nThe EPNS Core smart contract deals with most of the heavy lifting, including channel creation, governance, and incentive mechanisms. The EPNS Core smart contract will remain on the Ethereum blockchain.\\n\\nThe EPNS Communicator enables multi-chain communication. It can be deployed on any blockchain network that wants to integrate push notifications. This smart contract is responsible for actually sending out notifications and handling channel subscriptions. The operations of both these smart contracts are overseen by a system of PUSH Nodes that are central to our architecture.\\n\\nPUSH Nodes track the events and smart contracts of different protocols across blockchain networks. Based on these events, they dispatch relevant notifications from the correct service provider to its corresponding subscribers without fail. What these nodes do is map the blockchain address of every subscriber with all the channels they have subscribed to and then deliver notifications as and when they\u2019re triggered by an event at the service provider\u2019s end. They\u2019re also capable of deconstructing and synchronizing payloads (notifications) sent from a channel in the database.\\n\\nTo learn more about Core, Communicator, and Nodes \u2014 [see here.](https://medium.com/ethereum-push-notification-service/push-nodes-p2p-web3s-way-to-communicate-6a473577d173)\\n\\n# For the New-Age Internet\\n\\nPush notifications played a vital role in the success of businesses across industries in Web2. Now, by bringing a similar service in the Web3 space, EPNS will ensure it can fast pace the growth of the new age internet services, becoming an integral part of its operations."}}')}}]);