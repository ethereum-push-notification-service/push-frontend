"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[30601],{348208:e=>{e.exports=JSON.parse('{"title":"A Beginner\u2019s Guide to EPNS Channels!","description":"A Beginner\u2019s Guide to EPNS Channels!","frontMatter":{"slug":"a-beginners-guide-to-epns-channels","title":"A Beginner\u2019s Guide to EPNS Channels!","description":"A Beginner\u2019s Guide to EPNS Channels!","authors":["push"],"image":"./cover-image.webp","text":"With the dawn of Web3.0 and the rising need for a decentralized communication system between dApp services and users, came the creation of **Ethereum Push Notification Service** (EPNS). EPNS is a **decentralized notification protocol** at its heart. It provides the means to communicate information which can be of different types, carry different utilities and perform different tasks as per their use cases. It also allows users to be in control of what notifications they receive allowing them to subscribe to and even unsubscribe from the channels that they deem fit.","tags":["Ethereum","Blockchain","Web3","Notifications","Blog"]},"content":{"id":"a-beginners-guide-to-epns-channels","metadata":{"permalink":"/push-website/pr-preview/pr-904/blog/a-beginners-guide-to-epns-channels","source":"@site/blog/2020-08-14-a-beginners-guide-to-epns-channels/index.md","title":"A Beginner\u2019s Guide to EPNS Channels!","description":"A Beginner\u2019s Guide to EPNS Channels!","date":"2020-08-14T00:00:00.000Z","formattedDate":"August 14, 2020","tags":[{"label":"Ethereum","permalink":"/push-website/pr-preview/pr-904/blog/tags/ethereum"},{"label":"Blockchain","permalink":"/push-website/pr-preview/pr-904/blog/tags/blockchain"},{"label":"Web3","permalink":"/push-website/pr-preview/pr-904/blog/tags/web-3"},{"label":"Notifications","permalink":"/push-website/pr-preview/pr-904/blog/tags/notifications"},{"label":"Blog","permalink":"/push-website/pr-preview/pr-904/blog/tags/blog"}],"readingTime":4.89,"hasTruncateMarker":true,"authors":[{"name":"Push Protocol","url":"https://twitter.com/pushprotocol","imageURL":"/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"a-beginners-guide-to-epns-channels","title":"A Beginner\u2019s Guide to EPNS Channels!","description":"A Beginner\u2019s Guide to EPNS Channels!","authors":["push"],"image":"./cover-image.webp","text":"With the dawn of Web3.0 and the rising need for a decentralized communication system between dApp services and users, came the creation of **Ethereum Push Notification Service** (EPNS). EPNS is a **decentralized notification protocol** at its heart. It provides the means to communicate information which can be of different types, carry different utilities and perform different tasks as per their use cases. It also allows users to be in control of what notifications they receive allowing them to subscribe to and even unsubscribe from the channels that they deem fit.","tags":["Ethereum","Blockchain","Web3","Notifications","Blog"]},"unlisted":false,"prevItem":{"title":"How Decentralized Notifications can Revolutionize On-Chain Governance (Part I)!","permalink":"/push-website/pr-preview/pr-904/blog/how-decentralized-notifications-can-revolutionize-on-chain"},"nextItem":{"title":"EPNS Update: Gitcoin Kernel Week 3","permalink":"/push-website/pr-preview/pr-904/blog/epns-update-gitcoin-kernel-week-3"}},"content":"import { ImageText } from \'@site/src/css/SharedStyling\';\\n\\n![Cover Image of A Beginner\u2019s Guide to EPNS Channels!](./cover-image.webp)\\n\\n\x3c!--truncate--\x3e\\n\\nAn overview of types, activation mechanism and use cases of an EPNS Channel\\n\\nWith the dawn of Web3.0 and the rising need for a decentralized communication system between dApp services and users, came the creation of **Ethereum Push Notification Service** (EPNS). EPNS is a **decentralized notification protocol** at its heart. It provides the means to communicate information which can be of different types, carry different utilities and perform different tasks as per their use cases. It also allows users to be in control of what notifications they receive allowing them to subscribe to and even unsubscribe from the channels that they deem fit.\\n\\nAll this sounds great! But now the question arises from someone who is providing a dApp service \u2014 \u201c_How do I create a channel and access all these cool features to be able to communicate with my clients?_\u201d.\\n\\nAnd the solution, my dear friend, is actually really (and I do mean REALLY) simple! But before I answer that question for you, let\u2019s just lay down a general idea of what a channel is and what can it really do.\\n\\n# Channels\\n\\n> Any user on the protocol who activates themselves on it to send notifications is called a **Channel**.\\n\\nIn other words, anyone who is a user of the protocol has the ability to become a channel owner and start sending notifications to its subscribers. One may consider this to be something similar to a Youtube Channel, where any user \u2014 if they want to \u2014 can create a channel and start posting content on their channel.\\n\\nA service just needs to follow a one-time procedure in order to upgrade itself to create a channel and the channel owner will always be the first subscriber of the channel as soon as the channel is activated, it\u2019s not possible to remove the channel owner (subscriber) from their own channel.\\n\\n## Types Of Channels\\n\\nJust like any other feature provided in the protocol, EPNS provides the channel owner full freedom in what kind of a channel it wants to create based on its business use case! This allows channel owners to be flexible and adapt their own channel to the use case they wish to accomplish from the protocol. Currently, the protocol offers 3 main types of channels with the promise to add even more types in the near future!\\n\\nThe 3 types of channels available now are:\\n\\n1\\\\. **Open Channel**: This is the default channel type on EPNS. In this, the channel is created by the service and is intended to be open for any user to come and subscribe without any restrictions. But it doesn\u2019t end there, what if you as a service wants to add a user to the channel to increase reach? In this case, a channel can also indirectly subscribe the user to it, but here\u2019s the catch, the channel must pay the user a minor fee in order to do an indirect subscription. This creates a **win-win** situation for both the user and the channel \u2014 the channel is able to bring a new user into their communication stream and the user gets paid a fee for being subscribed to the channel without consent. But if a user feels that the channel is not of their interest, they may choose to unsubscribe from that channel and the channel will not be able to add that same user back again through indirect subscription, in this way the user still has a control on what they see and do not see!\\n\\n2\\\\. **Closed Channel**: A service can opt to create a closed channel. Just as the name suggests, these types of channels are closed and cannot be directly subscribed by the user, but can only be added by the channel owner. A good analogy to this would be your group chats in your favourite messaging apps like Whatsapp and Telegram (if you haven\u2019t joined our Telegram group do so [here](https://t.me/epnsproject)!). Just like group chats in Whatsapp \u2014 only users added to the group are able to communicate with the group members and see messages passed within the group \u2014 Closed channels provide a way for services to control to an extent which users are able to access the channel and be a part of it. And yes, the minor fee still exists, since the service is technically subscribing users to their channel without consent, it is an indirect subscription.\\n\\nLet\u2019s take the example of MakerDAO. MakerDAO can create an official channel where any user can subscribe to it (open channel) but they can also create a MakerDAO Token Holder Channel wherein they only allow wallet addresses that hold the MakerDAO tokens to gain access to the channel. What would be the reason they would create such a channel? Well, MakerDAO would add token holders for the purpose of governance voting. In this way, they get to ensure to provide a smooth means of communication with the user as well as organize their governance system much better.\\n\\n3\\\\. **Mutual Channel:** EPNS also allows a service to create a mutual channel \u2014 one could say, a mix of both the above types of channels \u2014 In this the user may opt to subscribe directly to the service channel but will only be considered subscribed after the mutual consent of the channel owner as well. This could be considered as sending a follow request to a private Instagram account!\\n\\nA channel can be updated as long as there are no subscribers. The channel becomes immutable as soon as a new subscriber joins the channel.\\n\\n# What must I do to activate a Channel?\\n\\nSo far we have explored what a channel is and the different types of channels there are. So what must a user do to activate itself as a channel?\\n\\nAs stated before, a service needs to activate itself on the protocol as a one-time step before they can send notifications to their subscribers. When a service is activated on the protocol, they are referred to as a Channel.\\n\\nDid we mention that a user earns tokens when they subscribe to a channel? Good news, they do!\\n\\nBut where do these tokens come from?\\n\\nWhen a channel is activated, the channel is required to stake fees in DAI of 50 DAI or higher, this is used to create a staking pool which in turn interacts with the AAVE Protocol to earn interest. This interest is then distributed back to all the subscribers of the channel of that service in a weighted manner, favouring early subscribers more than the later ones. So if a channel stakes more DAI, then it incentivizes more users to subscribe to their channel in order to earn higher interests!\\n\\n## What can a Channel Owner do?\\n\\nSo, you\u2019ve activated yourself as a channel, you\u2019ve staked your DAI, you\u2019ve even started to get subscribers. Now what? Well, now you may send various types of notifications to your subscribers! Gone are the old days of dreading a boring old plain text notification, now you may even add images, videos and link to your own website through the EPNS protocol!\\n\\nAlthough notifications and its types may be an article on itself, here is a small brief on the various types of notifications provided by the protocol.\\n\\n1\\\\. **Direct Payload Notification**: Direct payloads are special payloads meant for sending directly to the protocol.\\n\\n2\\\\. **Broadcast Notification**: Broadcast notification goes to all subscribers of a channel; the notification payload, in this case, is not encrypted.\\n\\n3\\\\. **Secret Notification**: Secret notifications are intended to be delivered to one subscriber of the channel, and are encrypted.\\n\\n4\\\\. **Targeted Notification**: Targeted notifications go to a single subscriber of a channel; the notification payload, in this case, is not encrypted.\\n\\n# Conclusion\\n\\nEPNS is a decentralized DeFi Notification protocol that enables users (wallet addresses) to receive notifications and earn from them. It enables wallet addresses to receive notifications in a platform-agnostic fashion from both decentralized and centralized carriers.\\n\\nWith incentives for users to subscribe to channels in order to gain weighted interest from the stake of the channel and with the added flexibility for channels to create different types of channels to reach out to their user in not just plain text notifications but also various forms of multimedia like video and images. Services get to fulfil their business goal to be able to reach their customers and provide a more fluid and dynamic experience. Services can now reach their users, rather than a user going to the service. EPNS sounds like a good deal for almost every participant involved!\\n\\n_Connect with us if you have any questions!_\\n\\n> _Telegram:_ [_https://t.me/epnsproject_](https://t.me/epnsproject)\\n>\\n> _Twitter:_ [_https://twitter.com/epnsproject_](https://twitter.com/epnsproject)\\n>\\n> [_Github_](https://github.com/push-protocol)_:_ [_https://github.com/push-protocol_](https://github.com/push-protocol)\\n\\n_Reference:_ [_EPNS Whitepaper_](https://whitepaper.epns.io/)"}}')}}]);