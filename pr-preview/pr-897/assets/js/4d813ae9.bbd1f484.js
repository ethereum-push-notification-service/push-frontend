"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[54864],{296651:e=>{e.exports=JSON.parse('{"title":"How to create your community on Push Chat?","description":"How to create your community on Push Chat?","frontMatter":{"slug":"how-to-create-your-community-on-push-chat","title":"How to create your community on Push Chat?","authors":["push"],"image":"./cover-image.webp","description":"How to create your community on Push Chat?","text":"Follow this guide to get started with building your first customizale - on-chain community on Push Chat.","tags":["Push Protocol","Web3","Wallets","Push Chat"]},"content":{"id":"how-to-create-your-community-on-push-chat","metadata":{"permalink":"/push-website/pr-preview/pr-897/blog/how-to-create-your-community-on-push-chat","source":"@site/blog/2024-07-04-how-to-create-your-community-on-push-chat/index.md","title":"How to create your community on Push Chat?","description":"How to create your community on Push Chat?","date":"2024-07-04T00:00:00.000Z","formattedDate":"July 4, 2024","tags":[{"label":"Push Protocol","permalink":"/push-website/pr-preview/pr-897/blog/tags/push-protocol"},{"label":"Web3","permalink":"/push-website/pr-preview/pr-897/blog/tags/web-3"},{"label":"Wallets","permalink":"/push-website/pr-preview/pr-897/blog/tags/wallets"},{"label":"Push Chat","permalink":"/push-website/pr-preview/pr-897/blog/tags/push-chat"}],"readingTime":2.9766666666666666,"hasTruncateMarker":true,"authors":[{"name":"Push Protocol","url":"https://twitter.com/pushprotocol","imageURL":"/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"how-to-create-your-community-on-push-chat","title":"How to create your community on Push Chat?","authors":["push"],"image":"./cover-image.webp","description":"How to create your community on Push Chat?","text":"Follow this guide to get started with building your first customizale - on-chain community on Push Chat.","tags":["Push Protocol","Web3","Wallets","Push Chat"]},"unlisted":false,"prevItem":{"title":"Interoperable communications: Moving across an open web with Push","permalink":"/push-website/pr-preview/pr-897/blog/interoperable-communications-moving-across-an-open-web-with-push"},"nextItem":{"title":"Case Study: How Wallets Use Push To Become a Super App?","permalink":"/push-website/pr-preview/pr-897/blog/how-wallets-use-push-to-become-a-super-app"}},"content":"![Cover image of blog - How to create your community on Push Chat?](./cover-image.webp)\\n\\n\x3c!--truncate--\x3e\\n\\nCreating your on-chain community on Push Protocol is fairly easy.\\n\\nThis guide will walk you through the step by step process of creating your own vibrant community on Push Protocol, right from setting up a strong foundation to complete community formation.\\n\\nTo illustrate the journey, lets imagine a community dedicated to a captivating NFT collection known as \'**Charcoal Cats\ud83d\udc31**\'. In this guide we will show you, how to create a conditionally gated group chat exclusively for these Charcoal Cats admirers.\\n\\n\\nBuilding a strong online community takes more than just setting up a group chat. \\nBefore diving in to the group creation process, let\'s explore some key considerations to form a solid foundation of your community.\\n\\n### 1.Define your community\'s purpose \\n\\nMembers join and leave the communities, but what remains constant is the community\'s  purpose.\\nFind out what common interests will unite your members?  \\nFor Example : The \'Charcoal Cats\ud83d\udc31\' community is cult camp of charcoal cat NFT lovers. The access to the chat is restricted to only those wallets who hold \'Charcoal Cats\' NFT/s.\\n\\n### 2.Choose your community type\\n    \\nDo you prefer a community which is more welcoming, open & visible to all (i.e Public Group Chats) or rather prefer to form a exclusive community which is only visible to the individuals who are invited, are a part of the community or satisfy the criteria to join it.\\n    \\nPush enables both, Public and Private communities with the ability to establish gating conditions for **controlled access**.\\n\\nWith respect to our  example, lets  keep the Charcoal Cats a private community where-in the messages are encrypted and only visible upon successfully joining the group.\\n\\n\\n### 3.Decide: Open to all OR Conditionally Gated Group Chat\\n\\nGroupchats that do not impose any pre-requsite condition before joining the group can be termed as **open groupchats**.\\nFor instance, media oriented groupchats can be joined by anyone directly.\\n\\n**Conditionally Gated Chats**\\n\\nGroup chats that impose one or multiple conditions for users and allows only those users who satisfy these conditions are termed as **conditionally gated chats**.\\n\\n**Conditions are a series of criterias that can be applied for both, joining the group as well as for chatting in the group.**\\n\\n### Tailoring Access with \\"Any\\" or \\"All\\" Settings\\n\\nPush Protocol gives you further control by letting you define how users meet the set criteria. You can choose between:\\n\\n- **\'Any\' setting:** Here, users only need to meet one of the defined criteria to gain access. This allows for a more inclusive approach.\\n- **\'All\' setting:** This requires users to satisfy all the defined criteria, creating a more exclusive space.\\n\\nPush Chat provides the following settings to configure your gated chat group:\\n\\n\x3c!-- type of communities --\x3e\\n![Types of communities](./image1.webp)\\n\\n| Criteria | Description |\\n| --- | --- |\\n| ERC20 -Tokens | User needs to hold XX token to join the group |\\n| ERC721 - NFTs | User needs to hold XX NFT to join the group. |\\n| Invite  | Both Owners and Admins can invite people to join the group. You can further customize invite privileges by specifying whether both Owner and Admin need to approve invites, or if either of them can do so independently. |\\n| Guild | Ability to set non-web3 native conditions using [Guild.xyz](https://guild.xyz/) |\\n| Custom Endpoint | URL provided for custom usecases. |\\n\\n\\nSo, are you ready to build your dream community?  Let\'s get started!  We\'ll walk you through the creation process using our example of : the \'Charcoal Cats\ud83d\udc31\' NFT Gated community groupchat.\\n\\n## Time to build our very first group chat\\n\\n**Step 0 : Visit [Push DApp](https://app.push.org/welcome?utm_source=google&utm_medium=blog&utm_campaign=create_group_chat) and Connect Wallet:**\\n\\n\x3c!-- step 0 screenshot --\x3e\\n![Connect Wallet](./image2.webp)\\n\\n**Step 1 : Unlock your Profile.**\\n\\nThe first step is to verify and unlock your profile on **[PushChat](https://app.push.org/chat?utm_source=google&utm_medium=blog&utm_campaign=create_group_chat)**.\\nYou can check the \u201c**Remember me**\u201d option for avoiding the profile unlock process everytime.\\n\\n![Unlock Profile](./image3.webp)\\n\x3c!-- step 1 screenshot --\x3e\\n\\nSelecting \'Remember me\' will save your Push Profile keys locally on your device. \\n\\n\\n**Step 2: Click on the \u2018+\u2019 button to create a new group**\\n\\n\x3c!--  step 2 screenshot --\x3e\\n![Create Group](./image4.webp)\\n\\n\\nClick on \u201cNew Group\u201d to start creating your group\\n\\n**Step 3: Create Group Chat Profile**\\n\\n\x3c!-- step 3 screenshot --\x3e\\n![Create Profile](./image5.webp)\\n\\n**Step 4: Specify the Joining Conditions (if any)**\\n\\nConditions can be levied on Joining the group as well as for chatting in the group.\\n\\n\x3c!-- step 4 screenshot --\x3e\\n![Add joining and chatting conditions](image6.webp)\\n\\n**Step 5: Add Participants.**\\n\\n\x3c!-- step 5 screenshot --\x3e\\n\\n![Add group participants](./image7.webp)\\n\\nThe address that creates the group chat is the \'**Group Owner**\' and the \'**Group Admin**\' by default.\\n\\nThe owner can delegate \'admin\' role to some other trusted participant of choice.\\n\\nInitially the owner can choose to add few early known participants and thereafter you can circulate the groupchat link OR joinees can search the chat name in search bar to join the chat.\\n\\nFinally, click on **Create Group** to get your own customized group chat up and running for free, with no gas fees!\\n\\n\\n**Fin-al Step : Time to Chat \ud83d\udcac**\\n\\nThis is how you can swiftly create your community with granular customization possibilities within no time for free!\\n\\n### Start building your community now \ud83d\udc49 [https://app.push.org/chat](https://app.push.org/chat?utm_source=google&utm_medium=blog&utm_campaign=create_group_chat)\\n\\nHave any queries?\\nWe\u2019ll be super happy to answer them on our [Discord](https://discord.com/invite/pushprotocol)"}}')}}]);