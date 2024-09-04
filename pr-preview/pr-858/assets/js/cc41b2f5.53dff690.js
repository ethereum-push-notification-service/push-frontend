"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[37191],{757611:e=>{e.exports=JSON.parse('{"title":"Getting Started With EPNS","description":"Getting Started With EPNS","frontMatter":{"slug":"getting-started-with-epns","title":"Getting Started With EPNS","description":"Getting Started With EPNS","authors":["push"],"image":"./cover-image.webp","text":"The EPNS mainnet launched on January 11! We\u2019re thankful to the community for building with us over the last years, and we\u2019re excited for this next phase of decentralized, Web3 communication.","tags":["FAQ","Blockchain","Ethereum","Defi","Epnsproject"]},"content":{"id":"getting-started-with-epns","metadata":{"permalink":"/push-website/pr-preview/pr-858/blog/getting-started-with-epns","source":"@site/blog/2022-01-12-getting-started-with-epns/index.md","title":"Getting Started With EPNS","description":"Getting Started With EPNS","date":"2022-01-12T00:00:00.000Z","formattedDate":"January 12, 2022","tags":[{"label":"FAQ","permalink":"/push-website/pr-preview/pr-858/blog/tags/faq"},{"label":"Blockchain","permalink":"/push-website/pr-preview/pr-858/blog/tags/blockchain"},{"label":"Ethereum","permalink":"/push-website/pr-preview/pr-858/blog/tags/ethereum"},{"label":"Defi","permalink":"/push-website/pr-preview/pr-858/blog/tags/defi"},{"label":"Epnsproject","permalink":"/push-website/pr-preview/pr-858/blog/tags/epnsproject"}],"readingTime":3.0633333333333335,"hasTruncateMarker":true,"authors":[{"name":"Push Protocol","url":"https://twitter.com/pushprotocol","imageURL":"/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"getting-started-with-epns","title":"Getting Started With EPNS","description":"Getting Started With EPNS","authors":["push"],"image":"./cover-image.webp","text":"The EPNS mainnet launched on January 11! We\u2019re thankful to the community for building with us over the last years, and we\u2019re excited for this next phase of decentralized, Web3 communication.","tags":["FAQ","Blockchain","Ethereum","Defi","Epnsproject"]},"unlisted":false,"prevItem":{"title":"Just What Can You Use EPNS For?","permalink":"/push-website/pr-preview/pr-858/blog/just-what-can-you-use-epns-for"},"nextItem":{"title":"EPNS x Huobi Global: Never Miss a Token Listing","permalink":"/push-website/pr-preview/pr-858/blog/epns-x-huobi"}},"content":"import { ImageText } from \'@site/src/css/SharedStyling\';\\n\\n![Cover image of Getting Started With EPNS](./cover-image.webp)\\n\\n\x3c!--truncate--\x3e\\n\\n_Decentralized, Web3 communication is here. A guide to getting started with EPNS._\\n\\nThe EPNS mainnet launched on January 11! We\u2019re thankful to the community for building with us over the last years, and we\u2019re excited for this next phase of decentralized, Web3 communication.\\n\\nSo, now that EPNS is launched \u2014 what should you do? Check out the guide below to figure out how to get started, whether you want to send or receive notifications.\\n\\n# Channel or Subscriber \u2014 Who Are You?\\n\\nUsers of EPNS are classified into two groups: **channels** and **subscribers.**\\n\\n**Channels** are users who send out notifications. **Subscribers** are those who elect to receive notifications from certain channels. Businesses, dapps, and even individuals can all be channels; they can program notifications to be sent in response to on-chain information, and/or send notifications manually for off-chain activities. Subscribers opt-in to receive notifications from any of these channels. All of this happens through the [app.epns.io](http://app.epns.io) site.\\n\\n# Channels: How to Start Sending Notifications\\n\\nTo start sending out notifications, businesses, DEXs, and other protocols in DeFi need to create a dedicated channel. They can choose to create one of the three types of channels \u2014 open, closed, and mutual. An open channel is open for anyone to subscribe and start receiving notifications. If the channel creator wants a specific user to subscribe to their channel, they can pay a small fee to the subscriber and add them indirectly. The subscriber is of course free to opt-out of this subscription.\\n\\nA closed channel, on the other hand, is not universally open. Only users of the channel creator\u2019s choice get added to this channel. The mutual channel sits in between both these channels. Users can request to subscribe and the channel creator can either accept or reject their proposal.\\n\\nThe process of creating a channel on EPNS is quite simple and usually a one-time setup.\\n\\n- Users who want to create a channel are recommended to do it either from the EPNS dApp or the EPNS JS library. But apart from this, channels can also be created using custom JS libraries.\\n- To begin, users are required to visit [http://staging-app.epns.io/](http://staging-app.epns.io/)\\n- They are then prompted to connect to their crypto wallet, either Metamask, Ledger, or Portis.\\n- Once this is done, they can click on \u201ccreate your channel\u201d and upload the channel logo.\\n- To activate the channel, users are required to stake DAI tokens to contribute to the interest generating staking pool on AAVE. 50 DAI is the minimum stake fees and the more DAI that is staked, the more interest can be generated by a channel. Which inturn is used to incentivize subscribers.\\n- Once the DAI is staked, users can give their channel a name, a description, and click on \u201csetup channel\u201d to activate it.\\n\\n# How Subscribers Can Receive Notifications\\n\\nNow that the channels are created, users can start subscribing to them.\\n\\nEPNS provides a mobile application and a dApp to ensure that users receive notifications on time. The mobile app uses EPNS Infra to convert decentralized notifications into their centralized format that can be received on ios and Android devices. Unlike the boring web 2.0 notifications that only consist of text, EPNS notifications can consist of images, videos, and links. This takes the whole notification game to the next level, making it interesting for users to interact with.\\n\\nThe dApp brings notifications from web browsers and decentralized carriers. The combination of the dApp and app allows users to stay up to date with all the happenings of the market irrespective of the device they use. To subscribe to a channel,\\n\\n- Users can visit [https://app.epns.io/](https://app.epns.io/)\\n- Once on the website, they connect their crypto wallet to begin the process.\\n- EPNS has a dedicated channels page that houses all the created channels and users can access this page by clicking on \u201cchannels\u201d.\\n- Users can them browse the page for channels of their choice and click \u201csubscribe\u201d to start getting notifications from that particular channel.\\n\\nIn the next phase of the protocol, EPNS aims to launch incentivized notifications for users. The DAI used to create a channel is staked in a staking pool on AAVE and the interest generated is redistributed to all the subscribers of the channel. This means that users get rewarded for choosing to interact with the protocols.\\n\\n# What Does it Mean for the DeFi Ecosystem?\\n\\nIncentivized push notifications could do wonders for the DeFi ecosystem. The DeFi and Web 3.0 space today are quite fragmented, to say the least. There is no means for businesses and users to communicate with each other or among themselves. But EPNS is about to change that for good. We have created a reliable, robust communications layer that is poised to bring all the players of web 3.0 onto a single platform. Businesses can effectively reach their target consumers without waiting for them to reach out. With this, the existing communication gap disappears, driving user engagement and collaboration. This in turn can transform the course of the DeFi ecosystem for the better.\\n\\n_Note: the EPNS protocol has been under development for over a year, and completed a_ [_ChainSafe audit_](https://epns.io/EPNS-Protocol-Audit2021.pdf) _in April 2021. However, the mainnet is still a new product milestone. Always DYOR, and anticipate bugs and UI improvements. Learn how to report any bugs in our_ [_Discord_](https://discord.gg/YVPB99F9W5)_._\\n\\nStay in touch! [Website](https://epns.io/) | [Twitter](https://twitter.com/epnsproject) | [Telegram](https://t.me/epnsproject) | [Medium](https://medium.com/ethereum-push-notification-service) | [Whitepaper](https://whitepaper.epns.io/) | [Litepaper](https://medium.com/ethereum-push-notification-service/ethereum-push-notification-service-litepaper-e7ca0a662862)"}}')}}]);