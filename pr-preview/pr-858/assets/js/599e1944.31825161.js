"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[79449],{195606:e=>{e.exports=JSON.parse('{"title":"Introducing Notification Settings: Customize Your Web3 Notifications\ud83d\udd14\u2699\ufe0f","description":"Introducing Notification Settings: Customize Your Web3 Notifications\ud83d\udd14\u2699\ufe0f","frontMatter":{"slug":"introducing-notification-settings","title":"Introducing Notification Settings: Customize Your Web3 Notifications\ud83d\udd14\u2699\ufe0f","authors":["push"],"image":"./cover-image.webp","description":"Introducing Notification Settings: Customize Your Web3 Notifications\ud83d\udd14\u2699\ufe0f","text":"We are extremely excited to be releasing a long-awaited feature - Notification Settings! This new feature enables both channels and users to customize the type of notifications they send and receive respectively.","tags":["Push Protocol","Web3","Blockchain Technology","Decentralization"]},"content":{"id":"introducing-notification-settings","metadata":{"permalink":"/push-website/pr-preview/pr-858/blog/introducing-notification-settings","source":"@site/blog/2023-11-07-introducing-notification-settings/index.md","title":"Introducing Notification Settings: Customize Your Web3 Notifications\ud83d\udd14\u2699\ufe0f","description":"Introducing Notification Settings: Customize Your Web3 Notifications\ud83d\udd14\u2699\ufe0f","date":"2023-11-07T00:00:00.000Z","formattedDate":"November 7, 2023","tags":[{"label":"Push Protocol","permalink":"/push-website/pr-preview/pr-858/blog/tags/push-protocol"},{"label":"Web3","permalink":"/push-website/pr-preview/pr-858/blog/tags/web-3"},{"label":"Blockchain Technology","permalink":"/push-website/pr-preview/pr-858/blog/tags/blockchain-technology"},{"label":"Decentralization","permalink":"/push-website/pr-preview/pr-858/blog/tags/decentralization"}],"readingTime":3.783333333333333,"hasTruncateMarker":true,"authors":[{"name":"Push Protocol","url":"https://twitter.com/pushprotocol","imageURL":"/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"introducing-notification-settings","title":"Introducing Notification Settings: Customize Your Web3 Notifications\ud83d\udd14\u2699\ufe0f","authors":["push"],"image":"./cover-image.webp","description":"Introducing Notification Settings: Customize Your Web3 Notifications\ud83d\udd14\u2699\ufe0f","text":"We are extremely excited to be releasing a long-awaited feature - Notification Settings! This new feature enables both channels and users to customize the type of notifications they send and receive respectively.","tags":["Push Protocol","Web3","Blockchain Technology","Decentralization"]},"unlisted":false,"prevItem":{"title":"Push x ETHGlobal Istanbul - Enhance Your UX and Win $10k in Bounties \ud83e\uddff","permalink":"/push-website/pr-preview/pr-858/blog/push-ethglobal-istanbul"},"nextItem":{"title":"Monthly Recap October \ud83c\udf83","permalink":"/push-website/pr-preview/pr-858/blog/october-monthly-recap"}},"content":"import { ImageText, VideoContainer } from \'@site/src/css/SharedStyling\';\\n\\n![Cover Image of Introducing Notification Settings: Customize Your Web3 Notifications\ud83d\udd14\u2699\ufe0f](./cover-image.webp)\\n\\n\x3c!--truncate--\x3e\\n\\nWe are extremely excited to be releasing a long-awaited feature - Notification Settings!\\n\\nThis new feature enables both channels and users to customize the type of notifications they send and receive respectively.\\n\\nWhether it\'s specifying which categories of articles on Coindesk you want to receive notifications for or setting alerts for when the price of ETH passes $2,000 \u2013 a world of customization and personalization is now available for how you stay up-to-date in web3.\\n\\nYou can browse available channels to opt-in to here in the Push dApp \ud83d\udc49https://app.push.org/channels\\n\\nIn this article we\u2019ll explore:\\n\\n- Why Notification Settings are important\\n- How Notification Settings work for Channel Owners\\n- What the UI/UX looks like for Channel Subscribers\\n  Let\u2019s dive in.\\n\\n### Why Notification Settings?\\n\\nSince the launch of v1 of Push smart contracts, we\u2019ve strived to leverage communication tools to help dApps deliver the most user-friendly and sticky user experience possible.\\n\\nWhile we\u2019ve always given dApps the ability to create \u2018channels\u2019 that users can subscribe to, segmenting different kinds of notifications for different users has always remained a challenge.\\n\\nWith Notification Settings, we\u2019re now solving this long standing pain point to create an unparalleled level of customization and control for users. Channel Owners now have the ability to segment and categorize different notifications and Channel Subscribers now have the ability to select notifications that match their preferences.\\n\\nJust as you might customize notifications through \u201cAdvanced Notifications Settings\u201d on your favorite web2 mobile apps, Notification Settings through Push brings a similar level of personalization to web3-native subscribers.\\n\\nSo, how do Notification Settings work for both Channel Owners and Channel Subscribers? We\u2019ll walk you through everything there is to know.\\n\\n### Notification Settings for Channel Owners\\n\\nPush is a thriving community with hundreds of diverse channels spanning DeFi, gaming, web3 media, and beyond. These channels often have a wide range of content, notifications, and updates to share with their users.\\n\\nFor example, a DeFi channel might want to send various notifications like loan liquidation alerts, price alerts, or governance proposal notifications. Just as a newsletter might want to send notifications for new articles in its blog, but wouldn\u2019t want to send every article to every subscriber.\\n\\nWith Notification Settings, Channel Owners can now define specific categories for their notifications. Consequently, when a channel triggers a notification for that specific category, only the users who\'ve opted for that preference will receive a notification.\\n\\nThere are two types of channel settings for Channel Owners:\\n\\n1. True/False Notification Settings: The first channel setting lets you set up a channel with a simple true/false trigger setting. For instance, say your channel covers web3 news. You can define settings for categories of articles like \\"tech\\" and \u201cpartnership announcements\u201d and give users the option to turn each On (true) or Off (false). Adding one of these Notification Settings for every content category gives end-users the option to opt-in for content categories that match their preferences and avoid ones that don\u2019t.\\n2. Range Value Notification Settings: The second channel setting lets you set up a range of values for a specific category that might trigger a notification. For instance, say you want to set up a Notification Setting that triggers when the price of ETH passes a given value. You can simply create a range, say from 0-10,000 and subscribers will be able to select any value within that range to set their custom ETH price notification.\\n   You can set as many or as few Notification Settings for your channel as you like.\\n   Here\u2019s how it looks.\\n\\n![Introducing Notification Settings](./image-1.webp)\\n<ImageText><b>Caption:</b> This channel has 5 Notification Settings. 4 of which are True/False Notification Settings and 1 of which is a Range Value Notification Setting. As such, end-users will have the choice to toggle on/off preferences for each of these 5 notifications separately.</ImageText>\\n\\nNote, each channel will also set a \u2018default value\u2019 setting. This ensures subscribers who opt-in without specifying their preferences will simply receive notifications based on the channel\'s default settings.\\n\\nFor builders looking to integrate Notification Settings, you can find all the relevant and associated documentation here\\n\\n\ud83d\udc49 https://push.org/docs/notifications/build/create-channel-settings/\\n\\n### Notification Settings for Channel Subscribers\\n\\nEmpowering Channel Subscribers (end-users) to personalize their notifications is a massive step towards a more user-centric and user-friendly web3 experience. Channel Subscribers can filter out notifications they aren\'t interested in receiving to reduce notification clutter. This optimizes user inboxes, reduces spam, and helps personalize the user experience.\\n\\nHere\u2019s how it works for Channel Subscribers:\\n\\n1. When you subscribe to a channel that has enabled Notification Settings, you\u2019ll have the option to personalize your notification preferences based on the available settings the Channel Owner has preset.\\n   The choice to customize is optional. You can always opt-in for the \u2018default values\u2019 of a channel (these \u2018default value\u2019 notifications are determined by the Channel Owner).\\n   Once you\u2019ve selected your preferences for all of the Notification Settings, you can click \u2018opt-in\u2019 to initiate the subscription and begin receiving notifications!\\n   This is how the UI will prompt you to select your choice of notification for the channel:\\n\\n![Introducing Notification Settings](./image-3.webp)\\n<ImageText><b>Caption:</b> For this channel, there are 4 available Notification Settings to pick from. 3 settings correspond to simple on-off toggles and 1 corresponds to a range value. For this range value setting, you can set any value (price) that you want to receive notifications for within that range.</ImageText>\\n\\n2. You can review all the channels you are receiving notifications for and manage those settings directly within your \u201cNotification Settings\u201d tab. This dashboard gives you a complete birds-eye-view of all your notifications and lets you edit and change your settings any time at no cost.\\n\\n![Introducing Notification Settings](./image-2.webp)\\n\\nHere are a few popular channels to get you started!\\n\\n- [Push Protocol](http://app.push.org/channels?channel=0xB88460Bb2696CAb9D66013A05dFF29a28330689D)\\n- [BTC Price Tracker](http://app.push.org/channels?channel=0x03EAAAa48ea78d1E66eA3458364d553AD981871E)\\n- [ETH Price Tracker](http://app.push.org/channels?channel=0xDBc5936E4daaE94F415C39D284f6a69c4d553F2F)\\n\\nFull list of Push channels \ud83d\udc49https://app.push.org/channels\\n\\nHere\u2019s a full demo on how to both setup and sign up for Notification Settings:\\n\\n<VideoContainer>\\n<iframe width=\\"100%\\" height=\\"100%\\" style={{ borderRadius: \\"32px\\" }} src=\\"https://www.youtube.com/embed/XDJFnfzVxsQ\\" title=\\"Introducing Notification Settings: Customize Your Web3 Notifications\ud83d\udd14\u2699\ufe0f\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" allowfullscreen></iframe>\\n</VideoContainer>\\n\\n### Pushing Personalized Communication Experiences\\n\\nNotification Settings is a game-changer.\\n\\nFor Channel Owners that want to provide the best level of control and personalization for their users, Notification Settings mean being able to now categorize notifications and updates to only give users information they want.\\n\\nFor Channel Subscribers that want a personalized and engaging user experience, Notification Settings mean being able to accommodate their personal preferences.\\nAt Push, we\u2019re constantly reaffirming our commitment to decentralizing communication and onboarding the next one billion users to web3. As such, we\u2019re looking to build upon Notification Settings and release more communication personalization features soon.\\n\\nStay tuned because the best is yet to come."}}')}}]);