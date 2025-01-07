"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[12820],{52028:e=>{e.exports=JSON.parse('{"title":"Roadmap Q2: Strategic Collabs and what we did so far with them!","description":"Roadmap Q2: Strategic Collabs and what we did so far with them!","frontMatter":{"slug":"strategic-collabs","title":"Roadmap Q2: Strategic Collabs and what we did so far with them!","authors":["push"],"image":"./cover-image.webp","description":"Roadmap Q2: Strategic Collabs and what we did so far with them!","text":"One of the items in our Q2 Roadmap was strategic collaborations and pilot programs with top projects of the ecosystem. We aimed for having 4-5 projects and to get them involved but were blown away by the love and reception given to us by over 25+ project with whom we are running the pilot program of EPNS.","tags":["Announcements","Ethereum","Blockchain","Newsletter","Roadmaps"]},"content":{"id":"strategic-collabs","metadata":{"permalink":"/push-website/pr-preview/pr-965/blog/strategic-collabs","source":"@site/blog/2021-06-21-strategic-collabs/index.md","title":"Roadmap Q2: Strategic Collabs and what we did so far with them!","description":"Roadmap Q2: Strategic Collabs and what we did so far with them!","date":"2021-06-21T00:00:00.000Z","formattedDate":"June 21, 2021","tags":[{"label":"Announcements","permalink":"/push-website/pr-preview/pr-965/blog/tags/announcements"},{"label":"Ethereum","permalink":"/push-website/pr-preview/pr-965/blog/tags/ethereum"},{"label":"Blockchain","permalink":"/push-website/pr-preview/pr-965/blog/tags/blockchain"},{"label":"Newsletter","permalink":"/push-website/pr-preview/pr-965/blog/tags/newsletter"},{"label":"Roadmaps","permalink":"/push-website/pr-preview/pr-965/blog/tags/roadmaps"}],"readingTime":3.1566666666666667,"hasTruncateMarker":true,"authors":[{"name":"Push Protocol","url":"https://twitter.com/pushprotocol","imageURL":"/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"strategic-collabs","title":"Roadmap Q2: Strategic Collabs and what we did so far with them!","authors":["push"],"image":"./cover-image.webp","description":"Roadmap Q2: Strategic Collabs and what we did so far with them!","text":"One of the items in our Q2 Roadmap was strategic collaborations and pilot programs with top projects of the ecosystem. We aimed for having 4-5 projects and to get them involved but were blown away by the love and reception given to us by over 25+ project with whom we are running the pilot program of EPNS.","tags":["Announcements","Ethereum","Blockchain","Newsletter","Roadmaps"]},"unlisted":false,"prevItem":{"title":"EPNS Collaborates with Aave to Bring Push Notifications to Aave Users","permalink":"/push-website/pr-preview/pr-965/blog/epns-collaborates-with-aave-to-bring"},"nextItem":{"title":"EPNS Monthly Blocks","permalink":"/push-website/pr-preview/pr-965/blog/epns-monthly-blocks-jun-2021"}},"content":"import { ImageText } from \'@site/src/css/SharedStyling\';\\n\\n![Cover Image of Roadmap Q2: Strategic Collabs and what we did so far with them](./cover-image.webp)\\n\\n\x3c!--truncate--\x3e\\n\\nOne of the items in our [Q2 Roadmap](https://medium.com/ethereum-push-notification-service/epns-roadmap-2021-c4ededc57a12) was strategic collaborations and pilot programs with top projects of the ecosystem. We aimed for having 4-5 projects and to get them involved but were blown away by the love and reception given to us by over 25+ project with whom we are running the pilot program of EPNS.\\n\\n![First Image of Roadmap Q2: Strategic Collabs and what we did so far with them!](./image-1.webp)\\n<ImageText>Meet Frens of EPNS</ImageText>\\n\\nWith them, we were able to put EPNS to test, and make sure what we are building is aligned to protocols needs now and in the foreseeable future. Let\u2019s look at the great progress we made with few of different Projects and what we learned from them.\\n\\n#### Uniswap\\n\\nWith Uniswap we implemented EPNS decentralized notifications to let users know when a new proposal is submitted.\\n\\n![Second Image of Roadmap Q2: Strategic Collabs and what we did so far with them!](./image-2.gif)\\n\\nBy making use of the Call to Action feature users will be able to go directly to the proposal with 1 click.\\n\\nIn this case we hooked directly with Uniswap\u2019s V2 contracts.\\n\\nCurrently, we are exploring implementing EPNS for more use cases available with V3 including sending notifs when the LP provider range of trading curve goes out, ie: they are unable to earn any fees.\\n\\n#### Aave\\n\\nWith Aave we had the opportunity for the first time to put EPNS to test looking at events happening in Polygon and sending notifications directly to wallet addresses.\\n\\n![Third Image of Roadmap Q2: Strategic Collabs and what we did so far with them!](./image-3.gif)\\n\\nWith this integration users are notified whenever the Health Factor representing the safety of their loans is reaching a low level.\\n\\nIn this case, the goal is using EPNS decentralized notifications to help protect user\u2019s assets in case they are in risk.\\n\\n#### Alpha Homora\\n\\nWith Alpha Homora we created a channel to which users can opt-in to receive notifications about their loan positions when they reach a risky level.\\n\\n![Fourth Image of Roadmap Q2: Strategic Collabs and what we did so far with them!](./image-4.gif)\\n\\nCurrently, the threshold is defined programmatically as this implementation relies on our Showrunners framework.\\n\\nWorking on this case gave us food for thought, and developed into internal brainstorming sessions to understand how to address some settings like this via the protocol.\\n\\n#### TrueFi\\n\\nWith TrueFi we worked on a solution to notify users when new loans are available for voting, and also to alert users when their loans are coming due.\\n\\n![Fifth Image of Roadmap Q2: Strategic Collabs and what we did so far with them!](./image-5.gif)\\n\\nImplementing this channel allowed us to use our Protocol in a different way, observing a dynamic list of contracts that can grow depending on the platform usage.\\n\\nWorking on this case also gave us the opportunity to learn new ways to optimize our protocol.\\n\\n### Milestone Learnings\\n\\nThis important milestone in our roadmap comes packed with lots of lessons learned and important facts & experiences that reassured to us that we are doing things right.\\n\\nWhile most of our features were validated, we also had the opportunity to adjust and even pivot into different direction some of our protocol features.\\n\\n### Protocol Features Update\\n\\n#### Protocol Settings\\n\\nWith AAVE Loan Liquidation, we understood the importance of deep customizations of a user setting for a particular channel.\\n\\n#### Indirect Subscribe\\n\\nWe are pivoting indirect subscribe from a service without user consent to now a spam box feature where in channels can send notifications to user wallets but if the user hasn\u2019t opted in to receive those notifications then it will not be shown as a push notification to the user and will land in their unauthorized box, think how twitter deals with DMs that you haven\u2019t accepted.\\n\\n#### Delegation of Channel Controls\\n\\nWorking with top DeFi projects made us realize that channel can\u2019t be only controlled by one wallet address as there might be few different owners of that channel (think co-founders or people assigned that responsibility). With that in mind, we also introduced delegation of channel controls and the ability to send notifications on channel behalf from other wallets.\\n\\n#### Verified Badges\\n\\nWe also realized that not all channels would be created with good intentions and wanted the frontend discovery dApp of ours to have that ability which will be done via verified badges that can be handed by us to verified channels and those verified channels can even hand over verification to others. This ensures that the Frontend is able to distinguish useful channels if the user wants to filter them out but at the same time ensures web3 ethos are taken care of.\\n\\n#### What\'s coming next?\\n\\nWe originally started this Pilot Program Collaborations with the goal of learning and spreading the word about EPNS with a handful of teams. We end this quarter amazed and humbled with the response received, as reached a list of more than 25 projects looking to work with us to implement EPNS decentralized notifications for their use cases.\\n\\nWe want to finish with a big thank you to our community and the teams working and about to work with us . The inputs and feedback received is invaluable to make sure we become the de-facto communication middleware for both Web3 and Web2 companies to benefit from.\\n\\n#### Stay Connected\\n\\nIf you are interested in providing feedback and working more closely with our development team to improve EPNS for developers, we invite you to join our [Discord Community Server](https://discord.gg/nYrqZ734nu)."}}')}}]);