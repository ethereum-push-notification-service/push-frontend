"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[1728],{728439:e=>{e.exports=JSON.parse('{"title":"EPNS push notifications are never boring","description":"Cover Image of EPNS push notifications are never boring","frontMatter":{"slug":"epns-push-notifications-are-never-boring","title":"EPNS push notifications are never boring","authors":["push"],"image":"./cover-image.webp","text":"We are back, sharing our ETHGlobal Hack Money hackathon story. Can\u2019t believe it\u2019s already week -3!! It\u2019s been an amazing learning experience so far. A big shout out to the ETHGlobal Team for always being there to help and organizing the best AMAs and office hours sessions. Getting feedback and ideas from the devs at Aavesome Compound, etc has made this learning process about DeFi landscape and tech amazingly fun.","tags":["Ethereum","Blockchain","Ethglobal","Blog","Notifications"]},"content":{"id":"epns-push-notifications-are-never-boring","metadata":{"permalink":"/push-website/pr-preview/pr-939/blog/epns-push-notifications-are-never-boring","source":"@site/blog/2020-05-13-epns-push-notifications-are-never-boring/index.md","title":"EPNS push notifications are never boring","description":"Cover Image of EPNS push notifications are never boring","date":"2020-05-13T00:00:00.000Z","formattedDate":"May 13, 2020","tags":[{"label":"Ethereum","permalink":"/push-website/pr-preview/pr-939/blog/tags/ethereum"},{"label":"Blockchain","permalink":"/push-website/pr-preview/pr-939/blog/tags/blockchain"},{"label":"Ethglobal","permalink":"/push-website/pr-preview/pr-939/blog/tags/ethglobal"},{"label":"Blog","permalink":"/push-website/pr-preview/pr-939/blog/tags/blog"},{"label":"Notifications","permalink":"/push-website/pr-preview/pr-939/blog/tags/notifications"}],"readingTime":3.236666666666667,"hasTruncateMarker":true,"authors":[{"name":"Push Protocol","url":"https://twitter.com/pushprotocol","imageURL":"/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"epns-push-notifications-are-never-boring","title":"EPNS push notifications are never boring","authors":["push"],"image":"./cover-image.webp","text":"We are back, sharing our ETHGlobal Hack Money hackathon story. Can\u2019t believe it\u2019s already week -3!! It\u2019s been an amazing learning experience so far. A big shout out to the ETHGlobal Team for always being there to help and organizing the best AMAs and office hours sessions. Getting feedback and ideas from the devs at Aavesome Compound, etc has made this learning process about DeFi landscape and tech amazingly fun.","tags":["Ethereum","Blockchain","Ethglobal","Blog","Notifications"]},"unlisted":false,"prevItem":{"title":"EPNS Update : Gitcoin Kernel Week-1","permalink":"/push-website/pr-preview/pr-939/blog/epns-update-gitcoin-kernel-week-1"},"nextItem":{"title":"Hello World: BUIDLing a working EPNS Mobile app","permalink":"/push-website/pr-preview/pr-939/blog/hello-world-buid-ling-a-working-epns-mobile-app"}},"content":"import { ImageText } from \'@site/src/css/SharedStyling\';\\n\\n![Cover Image of EPNS push notifications are never boring](./cover-image.webp)\\n\\n\x3c!--truncate--\x3e\\n\\nWe are back, sharing our [ETHGlobal](https://medium.com/u/3d1733b8e86a?source=post_page-----f5f5a1a2c477--------------------------------) Hack Money hackathon story. Can\u2019t believe it\u2019s already week -3!! It\u2019s been an amazing learning experience so far. A big shout out to the [ETHGlobal Team](https://medium.com/u/8687f4bcbbed?source=post_page-----f5f5a1a2c477--------------------------------) for always being there to help and organizing the best AMAs and office hours sessions. Getting feedback and ideas from the devs at [Aavesome](https://medium.com/u/13bfa9f22920?source=post_page-----f5f5a1a2c477--------------------------------), Compound, etc has made this learning process about DeFi landscape and tech amazingly fun.\\n\\nTo begin with, we never wanted to deliver plain notifications to the users. We mean they are cool but there are so many things you can do when you make notifications behave like your twitter feed. This led us to think a lot about the payloads, analogies and the way we want to present notifications\u2026 and that\u2019s how we came up with\u2026 drumbeats\u2026 notification feed and different formats of notifications.\\n\\n### Groups and secrets\u2026and secret groups?!\\n\\nLet\u2019s talk about the recipients of notifications first. Yes, there are two different target recipients: Groups and Secrets. Simply put, a channel owner or smart contract can send a broadcast to all recipients of their channel or can send encrypted messages (known as secret) to an individual person.\\n\\n#### Group Messages\\n\\nGroup messages serve the purpose of communicating a piece of information to a subscribed channel. For example, Gitcoin can alert the developer community about the recently added 1000USD bounty task to its pool (that would be exciting!!).\\n\\nBut wait, there\u2019s more\u2026 we went a step further\u2026while group messages are a great way to send out notifications to a group of users, we thought the ability to send encrypted messages from channel owners to a specific user would really add so much value to push notifications in a variety of different ways.\\n\\n#### Secret Messages\\n\\nSo how does the secret message work? Well, blockchain and specifically cryptocurrency has crypto in it for a reason, more on the specific details later as we think it needs an article on its own.\\n\\nThough in brief terms, the way we achieve this is by encrypting few parts of the message payload with a secret that is further encrypted by the user\u2019s public key.\\n\\nFor example, Aavesome can send its customer a message once the loan liquidation is complete.\\n\\n### Message attributes\\n\\nLet\u2019s talk message attributes aka how rich we can present user\u2019s with the information.\\n\\nMessages are more useful (and more fun) when they are clickable, when you can interact with them and when they contain a number of great contexts. This was the approach we used to form different attributes for the message.\\n\\nThe idea is to give the channel owners enough flexibility so that they can play with permutations and combinations of message types and come up with intuitive messages for their users.\\n\\nThere are 4 message attributes.\\n\\n1. Subject\\n2. Message text\\n3. Call To Action (CTA)\\n4. Image\\n\\n### Use Cases\\n\\nMessages get delivered to users as feeds on their [EPNS mobile app](https://medium.com/@epnsdapp/hello-world-buidling-a-working-epns-mobile-app-e9dcb8f5ed66), just like your Twitter feed, with flexible opt-in/opt-out capability to give users full control over the notifications they want to receive.\\n\\nThe cool thing about epns push notifications is that there are multiple ways of building messages to cater to different types of web3 users.\\n\\nAn epns general message is composed using a subject and message text together. Here we tried to make the message more interesting by introducing rich text format. Supporting text styles, bold, italics, colors, links, etc can be sent for enhanced user readability. This is a classic format of push notification to share key updates with the subscribed user group.\\n\\nFor example, it would be awesome to get notified when Uniswap V2 platform is launched this Q2 through a simple notification.\\n\\nWe took a stab at generating a few examples for the purpose of demonstrating how epns push notifications look in real life.\\n\\n![Uniswap V2 launch party Notification Image](./image-1.webp)\\n<ImageText>Looks like we are invited to the party!!</ImageText>\\n\\n![ENS Notification Image](./image-2.webp)\\n<ImageText>General Message Type</ImageText>\\n\\nTaking it further, epns messages lets the user tap on a link embedded in the notification. This type of message includes a Call to Action(CTA) wrapped in a group message explained above. This CTA+group message type is meant for a group of users to guide them to a dedicated web page of an event, news, sign-up form, etc.\\n\\nFor example, the [ETHGlobal Team](https://medium.com/u/8687f4bcbbed?source=post_page-----f5f5a1a2c477--------------------------------) can send out a notification to all hackers for 2021 Virtual Hackathon registration, the user has to simply click on the link in the feed to find the registration form.\\n\\n![Ethglobal notification Image](./image-3.webp)\\n\\nNow, these messages get more interesting when integrated with secret messages (meant for a single user). These targeted or smart CTAs can help enhance user experience as they securely deliver the right message to the right user.\\n\\nFor example, Binance DEX can send user notifications once their trade order is fulfilled.\\n\\n![EPNS Notification Image](./image-4.webp)\\n![Binance Notification Image](./image-5.webp)\\n\\nBut wait!! EPNS notifications can support images as well. A secret message with images can do so many cool things for a user.\\n\\nFor example, if a user\'s ENS domain name is in grace period and about to expire, the ENS team can send out encrypted QR image-based notification to its users. The user can then simply scan the QR image on their ENS domain page to complete the renewal and payment process.\\n\\n![App Bot Notification Image](./image-6.webp)\\n<ImageText>\\nEncrypted Image Message\\n</ImageText>\\n\\nWe think there are multiple ways in which epns push notifications can add value to the decentralized finance ecosystem. The possibilities and use cases with epns notifications are endless and we are just getting started :)\\n\\n<b>TLDR; try out the (almost complete) <a href=\'https://github.com/ethereum-push-notification-system/epns-mobile-app\'>react native</a> app.</b>\\n\\nNext up, the dApp and the smart contract\u2026Please feel free to share your support and amazing feedback."}}')}}]);