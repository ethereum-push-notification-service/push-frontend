"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[83319],{880132:e=>{e.exports=JSON.parse('{"title":"Push Game Theory Explained","description":"Cover Image Push Game Theory Explained","frontMatter":{"slug":"push-game-theory-explained","title":"Push Game Theory Explained","authors":["push"],"image":"./cover-image.webp","text":"In this post, we cover Push in more detail and explain the game theory used in its design.","tags":["Game Theory","Blockchain","Design","Notifications","Blog"]},"content":{"id":"push-game-theory-explained","metadata":{"permalink":"/push-website/pr-preview/pr-897/blog/push-game-theory-explained","source":"@site/blog/2020-04-26-push-game-theory-explained/index.md","title":"Push Game Theory Explained","description":"Cover Image Push Game Theory Explained","date":"2020-04-26T00:00:00.000Z","formattedDate":"April 26, 2020","tags":[{"label":"Game Theory","permalink":"/push-website/pr-preview/pr-897/blog/tags/game-theory"},{"label":"Blockchain","permalink":"/push-website/pr-preview/pr-897/blog/tags/blockchain"},{"label":"Design","permalink":"/push-website/pr-preview/pr-897/blog/tags/design"},{"label":"Notifications","permalink":"/push-website/pr-preview/pr-897/blog/tags/notifications"},{"label":"Blog","permalink":"/push-website/pr-preview/pr-897/blog/tags/blog"}],"readingTime":1.92,"hasTruncateMarker":true,"authors":[{"name":"Push Protocol","url":"https://twitter.com/pushprotocol","imageURL":"/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"push-game-theory-explained","title":"Push Game Theory Explained","authors":["push"],"image":"./cover-image.webp","text":"In this post, we cover Push in more detail and explain the game theory used in its design.","tags":["Game Theory","Blockchain","Design","Notifications","Blog"]},"unlisted":false,"prevItem":{"title":"Hello World: BUIDLing a working EPNS Mobile app","permalink":"/push-website/pr-preview/pr-897/blog/hello-world-buid-ling-a-working-epns-mobile-app"},"nextItem":{"title":"Building Ethereum Push Notification Service protocol","permalink":"/push-website/pr-preview/pr-897/blog/building-ethereum-push-notification-service-protocol"}},"content":"import { ImageText } from \'@site/src/css/SharedStyling\';\\n\\n![Cover Image Push Game Theory Explained](./cover-image.webp)\\n\\n\x3c!--truncate--\x3e\\n\\nIn this post, we cover Push in more detail and explain the game theory used in its design.\\n\\nPush provides a easy and simple way to send notifications to users by different Channel Owners (App Owners). Notifications can be sent via the web, mobile, and Web3.0 providers like Metamask. To ensure consistent messaging throughout the project we have created the following nomenclature of terms, roles that will be used in the rest of the project lifecycle.\\n\\n- Contract Owner \u2014 The owner of the contract, specifically the address by whom the contract is deployed.\\n- App Owner \u2014 Referred to as <b>Channel Owners</b>. The third-party projects, dApps or smart contract, specifically the address which form their identity as well as the custom opt-in group that the subscribed users will receive message from.\\n- Users \u2014 All the users who don\u2019t fall in either of the above categories.\\n- App Owner Group \u2014 Referred to as <b>Channel</b>. The group which contains subscribed users of a particular channel.\\n- Subscribed Users \u2014 The users who have subscribed to a specific channel.\\n\\nFor the purpose of explaining the above EPNS terms, let\u2019s take the example of Youtube and the various associated roles.\\n\\n- Youtube \u2014 Contract Owner\\n- Channels \u2014 App Owner Groups\\n- Channel Owners \u2014 App Owners\\n- Users \u2014 Users\\n- Subscribed Users \u2014 Users subscribed to a specific App owner group\\n\\n<b>Game Theory -- Push</b>\\n\\nIn order to ensure the proper participation of all roles, following game theory is proposed, features marked with \\\\*\\\\*\\\\* will mostly be excluded from the upcoming MVP:\\n\\n- The <b>contract owner</b> doesn\u2019t have any ability to send messages on behalf of <b>channel owners</b>.\\n- The <b>channel owners</b> might spoof other trusted apps and thus will have to be verified or a spam system developed so that users can mark them as spoof or a similar mechanism.\\n- The <b>channel owners</b> need explicit permission from the users before messages can be sent to them.\\n- The <b>channel owners</b> need to stake some minimum DAI to ensure a spam-free environment, this is going to be minimal but good enough to ascertain good behavior (for example, 50 DAI).\\n- The <b>users</b> need to transact on blockchain to specifically subscribe or unsubscribe to a channel, this leads to an incentive issue, ie: why would a user spend gas in most cases?\\n- To counter this, The staked DAI from <b>channel owners</b> can inturn be used as an incentive for <b>users</b> to subscribe to the specific channel.\\n- This can be done by using services like AAVE to accrue interest on the said DAI and distribute it to the subscribed users group.\\n- This incentivizes the users to spend gas to perform \u201csubscribe\u201d transaction operation.\\n- The <b>channel owners</b> can stake more DAI if they want to since the users are incentivized to subscribe.\\n- The <b>channel owner</b> can blacklist a certain user from their channel if they want to.\\n- The <b>channel owners</b> can reclaim this DAI back, reclaiming this DAI will also destroy the channel, a fee of 10 DAI will also be held back for the <b>contract owner</b>, the fees is small enough for serious players to not worry about but will act as a further deterrent for bad players.\\n\\nWe would love to hear your feedback and ideas to better the overall experience. Stay tuned for more updates!"}}')}}]);