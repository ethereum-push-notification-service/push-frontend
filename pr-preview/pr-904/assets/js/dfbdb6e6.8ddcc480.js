"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[59990],{759927:e=>{e.exports=JSON.parse('{"title":"Introducing SNS for Push Delivery Nodes \u2014 Quickest Way to Bootstrap Your Wallet, App, or Any Platform to Power Web3 Notifications, Chats & More","description":"Introducing SNS for Push Delivery Nodes \u2014 Quickest Way to Bootstrap Your Wallet, App, or Any Platform to Power Web3 Notifications, Chats & More","frontMatter":{"slug":"introducing-sns-for-push-nodes","title":"Introducing SNS for Push Delivery Nodes \u2014 Quickest Way to Bootstrap Your Wallet, App, or Any Platform to Power Web3 Notifications, Chats & More","description":"Introducing SNS for Push Delivery Nodes \u2014 Quickest Way to Bootstrap Your Wallet, App, or Any Platform to Power Web3 Notifications, Chats & More","authors":["push"],"image":"./cover-image.webp","text":"Instantly integrate push notifications to your platform of choice, whether it\'s a wallet, browser extension, Telegram, Twitter, Discord, or any app.","tags":["Push Notification","Web3","Development","Blockchain","Developers"]},"content":{"id":"introducing-sns-for-push-nodes","metadata":{"permalink":"/push-website/pr-preview/pr-904/blog/introducing-sns-for-push-nodes","source":"@site/blog/2022-08-18-introducing-sns-for-push-delivery-nodes/index.md","title":"Introducing SNS for Push Delivery Nodes \u2014 Quickest Way to Bootstrap Your Wallet, App, or Any Platform to Power Web3 Notifications, Chats & More","description":"Introducing SNS for Push Delivery Nodes \u2014 Quickest Way to Bootstrap Your Wallet, App, or Any Platform to Power Web3 Notifications, Chats & More","date":"2022-08-18T00:00:00.000Z","formattedDate":"August 18, 2022","tags":[{"label":"Push Notification","permalink":"/push-website/pr-preview/pr-904/blog/tags/push-notification"},{"label":"Web3","permalink":"/push-website/pr-preview/pr-904/blog/tags/web-3"},{"label":"Development","permalink":"/push-website/pr-preview/pr-904/blog/tags/development"},{"label":"Blockchain","permalink":"/push-website/pr-preview/pr-904/blog/tags/blockchain"},{"label":"Developers","permalink":"/push-website/pr-preview/pr-904/blog/tags/developers"}],"readingTime":2.77,"hasTruncateMarker":true,"authors":[{"name":"Push Protocol","url":"https://twitter.com/pushprotocol","imageURL":"/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"introducing-sns-for-push-nodes","title":"Introducing SNS for Push Delivery Nodes \u2014 Quickest Way to Bootstrap Your Wallet, App, or Any Platform to Power Web3 Notifications, Chats & More","description":"Introducing SNS for Push Delivery Nodes \u2014 Quickest Way to Bootstrap Your Wallet, App, or Any Platform to Power Web3 Notifications, Chats & More","authors":["push"],"image":"./cover-image.webp","text":"Instantly integrate push notifications to your platform of choice, whether it\'s a wallet, browser extension, Telegram, Twitter, Discord, or any app.","tags":["Push Notification","Web3","Development","Blockchain","Developers"]},"unlisted":false,"prevItem":{"title":"BUIDLing the Future of Web3 Communication With EPNS at ETHOnline 2022","permalink":"/push-website/pr-preview/pr-904/blog/buid-ling-the-future-of-web3-communication-with-epns-at-eth-online-2022"},"nextItem":{"title":"Fast-tracking Proposals, Approved!","permalink":"/push-website/pr-preview/pr-904/blog/fast-tracking-proposals-approved"}},"content":"import { ImageText } from \'@site/src/css/SharedStyling\';\\n\\n![Cover image of Introducing SNS for Push Delivery Nodes \u2014 Quickest Way to Bootstrap Your Wallet, App, or Any Platform to Power Web3 Notifications, Chats & More](./cover-image.webp)\\n\\n\x3c!--truncate--\x3e\\n\\nToday, we are excited to unveil the next step towards integrating notifications (and communication as a whole) for developers with the launch of the SNS module for Push Delivery Nodes.\\n\\nSNS module allows any developer to receive notifications, chats, or any other form of web3 communication directly to the platform they are building with the help of webhooks.\\n\\nBut before deep diving into what it is and how it works, let\u2019s take a step back and understand the delivery nodes of EPNS.\\n\\n### What Are Push Delivery Nodes\\n\\n<i>\\nIt all starts with a notification\u2026 but where should the notification go \ud83e\udd14\\n</i>\\n\\nPush delivery nodes are a decentralized solution to enable web3 to web2 bridging. They allow any platform (whether centralized or decentralized) to receive communication from Push storage nodes, i.e., the nodes validating and indexing all communications and tying them to your wallet address (and multi-chain identity).\\n\\nAs a developer, you run them on your backend, and they ensure that you can connect your web2 infra to web3 communication, for example, when you want to extend communication a step further to web2 platform users apart from web3 wallet addresses. In essence, they enable:\\n\\n1. Mapping any device token or platform username of web2 that you want to relay to a specific web3 wallet address.\\n2. Utilize those mapping to send alerts to web2 or web2.5 platforms, extending push nodes\' communication outreach to any service running on any solution, whether centralized or decentralized.\\n\\nHere\u2019s an example, crypto wallet mobile apps, crypto wallet browser extensions, Telegram and Discord bots, email alerts, or anything in between.\\n\\n<blockquote><i>Listening to Push storage nodes or using their RPC endpoints / SDK is still the best solution for a pure web3 experience. But if you are a developer and want to extend these communications experience and bring it to a centralized platform, then Push delivery nodes are the way to go.</i></blockquote>\\n\\nThe delivery node solution is ideal for building the web3 stack (like running your own node). While delivering a node solution on our platform, we realized that there is another mid-solution, albeit a hosted one, that might eliminate most of the developers\u2019 effort and still give them the ability to achieve the desired result, aka Hosted SNS Module.\\n\\n#### Introducing Hosted SNS Module\\n\\n![First image of Introducing SNS for Push Delivery Nodes \u2014 Quickest Way to Bootstrap Your Wallet, App, or Any Platform to Power Web3 Notifications, Chats & More](./image-1.png)\\n<ImageText>Hosted SNS Module architecture</ImageText>\\n\\nHosted SNS Module is a mid-level solution that eliminates all the heavy load of running a node or syncing information and gives you webhooks that you implement to start receiving notifications, chats, or any other web3 communication in your software.\\n\\nIt works by writing all the user web3 wallet communication into Amazon SNS as a topic. You, as a developer, only need to subscribe to the topic to start receiving those notifications. This eliminates the majority of infra building on the developer side when they are trying to create a PoC out and ensures instant integration to web3 notifications.\\n\\n<blockquote><i>We understand that most developers want an ideal web3 solution from us, which is what the push delivery node will deliver. However, speaking with some of the devs and observing hosted solutions from The Graph and Lens Protocol made it clear that a web2.5 way needs to exist to ease a developer\u2019s burden while enabling web3 infra.</i></blockquote>\\n\\n### 3 Steps for Getting Started With Hosted SNS Module\\n\\nIntegrating the SNS module into your code takes less than 10 mins and contains just 3 steps:\\n\\n<b>Step 1</b>: Implement a webhook to listen to AWS SNS. Here\u2019s a boilerplate along with specs to get you npm installed and running: https://github.com/push-protocol/push-sns-boilerplate\\n\\n<b>Step 2</b>: You will need to open an endpoint either at a dedicated IP that listens to SNS or, if you are testing locally, have to expose the public endpoint for which tons of software is available.\\n\\n<b>Hint</b>: For testing locally, You can also use [ngrok](https://ngrok.com/download) to expose the public endpoint. Using this with the boilerplate, then the port needs to be 6,000. The ngrok URL can is now the SNS endpoint required in step 3.\\n\\n<b>Step 3</b>: Once you set up this, you need to contact us by either shouting / tagging us on [Discord](https://discord.com/invite/YVPB99F9W5) \u2014 SNS channel or reaching out via the [contact form](https://epns.io/#contact). We need this step as the SNS module requires whitelisting.\\n\\nHere\u2019s a time-lapse of how everything works\u2026 see you on the other side \ud83d\ude03\\n\\n![Second image of Introducing SNS for Push Delivery Nodes \u2014 Quickest Way to Bootstrap Your Wallet, App, or Any Platform to Power Web3 Notifications, Chats & More](./image-2.gif)\\n<ImageText>How the SNS module works behind the scene, powered by EPNS</ImageText>\\n\\n#### Useful links:\\n\\n- EPNS SNS boilerplate specs\\n  https://github.com/push-protocol/push-sns-boilerplate\\n- Documentation: https://docs.epns.io/developers/developer-zone/receiving-notifications"}}')}}]);