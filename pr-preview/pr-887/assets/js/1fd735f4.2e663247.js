"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[23983],{911874:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=t(474848),r=t(28453);const i={id:"docs-notifications-showrunners-examples-nft-transfer-trigger",title:"NFT transfer trigger",hide_title:!0,slug:"./nft-transfer-trigger",displayed_sidebar:"pushNotificationSidebar",sidebar_position:1,image:"/assets/docs/previews/docs_notifications_showrunners_examples--nft_transfer_trigger.png"},o="NFT transfer trigger via showrunner scaffold",a={id:"notifications/showrunners-scaffold/Examples/docs-notifications-showrunners-examples-nft-transfer-trigger",title:"NFT transfer trigger",description:"Alright, now that we understand the basics of showrunners and how to set it up. This guide will teach you how to get started with building one for your own use case.",source:"@site/docs/notifications/04-showrunners-scaffold/03-Examples/01-Showrunner-Example-NFT-Transfer-Trigger.mdx",sourceDirName:"notifications/04-showrunners-scaffold/03-Examples",slug:"/notifications/showrunners-scaffold/Examples/nft-transfer-trigger",permalink:"/push-website/pr-preview/pr-887/docs/notifications/showrunners-scaffold/Examples/nft-transfer-trigger",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/notifications/04-showrunners-scaffold/03-Examples/01-Showrunner-Example-NFT-Transfer-Trigger.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"docs-notifications-showrunners-examples-nft-transfer-trigger",title:"NFT transfer trigger",hide_title:!0,slug:"./nft-transfer-trigger",displayed_sidebar:"pushNotificationSidebar",sidebar_position:1,image:"/assets/docs/previews/docs_notifications_showrunners_examples--nft_transfer_trigger.png"},sidebar:"pushNotificationSidebar",previous:{title:"Scaffold Deepdive",permalink:"/push-website/pr-preview/pr-887/docs/notifications/showrunners-scaffold/scaffold-deepdive"},next:{title:"NFT based trigger",permalink:"/push-website/pr-preview/pr-887/docs/notifications/showrunners-scaffold/Examples/nft-based-trigger"}},c={},l=[{value:"Creating the NFT Transfer Showrunner",id:"creating-the-nft-transfer-showrunner",level:3},{value:"Developing the Channel Logic",id:"developing-the-channel-logic",level:3},{value:"Finally! Setting up the CRON Tasks",id:"finally-setting-up-the-cron-tasks",level:3},{value:"Wrapping it UP \ud83d\ude80",id:"wrapping-it-up-rocket",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"nft-transfer-trigger-via-showrunner-scaffold",children:"NFT transfer trigger via showrunner scaffold"}),"\n",(0,s.jsx)(n.p,{children:"Alright, now that we understand the basics of showrunners and how to set it up. This guide will teach you how to get started with building one for your own use case."}),"\n",(0,s.jsx)(n.p,{children:"In order to get an adequate understanding of the Showrunners, let's get our hands dirty with it and build one. "}),"\n",(0,s.jsxs)(n.p,{children:["A heads-up: ","\ud83d\ude07"," ",(0,s.jsxs)(n.em,{children:["We are going to build out simple showrunner that is going to monitor an event on some smart contract on the Ethereum blockchain. The event that we are going to pick is the ",(0,s.jsx)(n.code,{children:"Transfer"})," event in an ERC721 contract. We will use the Crypto Coven contract for this purpose."]})]}),"\n",(0,s.jsx)(t,{children:(0,s.jsx)("title",{children:"NFT transfer trigger | Example | Showrunners Scaffold | Push Notifications |\n  Push Documentation"})}),"\n",(0,s.jsx)(n.h3,{id:"creating-the-nft-transfer-showrunner",children:"Creating the NFT Transfer Showrunner"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Creation and Initial Set-Up"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step 1:"})," Create a new folder inside the ",(0,s.jsx)(n.code,{children:"src/showrunners"})," folder named ",(0,s.jsx)(n.code,{children:"nftTransfer"})]}),"\n",(0,s.jsx)(n.p,{children:"Step 2: Create a channel in the Push staging dApp"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step 3"}),": Get the private key for the wallet you used to create the channel and create a file called ",(0,s.jsx)(n.code,{children:"nftTransferKeys.json"})," inside the nftTransfer folder"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'{\n    "PRIVATE_KEY":"YOUR_CHANNEL_PRIVATE_KEY_HERE"\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step 4 :"})," Create the ",(0,s.jsx)(n.code,{children:"nftTransferChannel.ts"})," file"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"nftTransferChannel.ts"})," will be the file which will contain all the logic for the fetching the data and constructing the payload."]}),"\n",(0,s.jsx)(n.p,{children:"There is some boilerplate code involved in creating a channel. The channel.ts file will contain the following boilerplate:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { Inject, Service } from 'typedi';\nimport { Logger } from 'winston';\nimport config, { defaultSdkSettings } from '../../config';\nimport { EPNSChannel } from '../../helpers/epnschannel';\n\n@Service()\nexport default class NFTTransferChannel extends EPNSChannel {\n  constructor(@Inject('logger') public logger: Logger, @Inject('cached') public cached) {\n    super(logger, {\n      sdkSettings: {\n        epnsCoreSettings: defaultSdkSettings.epnsCoreSettings,\n        epnsCommunicatorSettings: defaultSdkSettings.epnsCommunicatorSettings,\n        networkSettings: defaultSdkSettings.networkSettings,\n      },\n      networkToMonitor: config.web3MainnetNetwork,\n      dirname: __dirname,\n      name: 'NFT Trasfer',\n      url: 'https://epns.io',\n      useOffChain: true,\n    });\n  }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"What's going on here?"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"W"}),"e are creating a new class ",(0,s.jsx)(n.code,{children:"NFTTransferChannel"})," which extends the Push Channel class."]}),"\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.code,{children:"super() the"})," constructor we pass in certain arguments required for the channel like the ",(0,s.jsx)(n.code,{children:"networkToMonitor"})," , name, and URL for the channel."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"useOffChain the"})," parameter tells the showrunner to use the off-chain notification instead of an on-chain one."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Getting the Contract address and ABI file"})}),"\n",(0,s.jsxs)(n.p,{children:["Our objective is to create a channel to send notifications about ",(0,s.jsx)(n.code,{children:"Transfer"})," events of an ERC721 contract. So we will need to fetch events from the blockchain and construct meaningful notification payload from them"]}),"\n",(0,s.jsx)(n.p,{children:"For that, we can make use of the Push backend-SDK for fetching the data from the blockchain."}),"\n",(0,s.jsxs)(n.p,{children:["Before the next thing we need is to pick an NFT for which we want to monitor the events. For this, we can use the Awesome ",(0,s.jsx)(n.code,{children:"Crypto Coven"})," NFTs."]}),"\n",(0,s.jsxs)(n.p,{children:["The address for the Crypto Coven contract is ",(0,s.jsx)(n.code,{children:"["}),(0,s.jsx)(n.a,{href:"https://etherscan.io/address/0x5180db8f5c931aae63c74266b211f580155ecac8",children:(0,s.jsx)(n.code,{children:"0x5180db8F5c931aaE63c74266b211F580155ecac8"})}),(0,s.jsx)(n.code,{children:"]"})]}),"\n",(0,s.jsxs)(n.p,{children:["You also will need to get the ABI file for the contract from ",(0,s.jsx)(n.a,{href:"https://etherscan.io/address/0x5180db8f5c931aae63c74266b211f580155ecac8",children:"etherscan"}),(0,s.jsx)(n.strong,{children:"."})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"What NEXT?"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Create a new file called ",(0,s.jsx)(n.code,{children:"abi.json"})," containing the ABI obtained from ",(0,s.jsx)(n.a,{href:"https://etherscan.io/address/0x5180db8f5c931aae63c74266b211f580155ecac8",children:"etherscan"}),(0,s.jsx)(n.strong,{children:"."})]}),"\n",(0,s.jsxs)(n.li,{children:["Then import the ABI at the top of the ",(0,s.jsx)(n.code,{children:"nttTransferChannel.ts"})," file"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import abi from './abi.json';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"developing-the-channel-logic",children:"Developing the Channel Logic"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Create a new variable in the class called ",(0,s.jsx)(n.code,{children:"LAST_CHECKED_BLOCK"})," this is to store the last block number until which we checked for transfer events."]}),"\n",(0,s.jsxs)(n.li,{children:["Inside the NFTTransferChannel class create a new method called ",(0,s.jsx)(n.code,{children:"sendTransferEventNotif"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"async sendTransferEventNotif() {\n    const sdk = await this.getSdk();\n    const coven = await sdk.getContract('0x5180db8f5c931aae63c74266b211f580155ecac8', JSON.stringify(abi));\n    const filter = await coven.contract.filters.Transfer();\n\n    if (!this.LAST_CHECKED_BLOCK) {\n      this.LAST_CHECKED_BLOCK = await coven.provider.getBlockNumber();\n    }\n\n    const toBlock = await coven.provider.getBlockNumber();\n    this.logInfo(`No of events fetching events from  ${this.LAST_CHECKED_BLOCK} to ${toBlock}`);\n\n    const events = await coven.contract.queryFilter(filter, this.LAST_CHECKED_BLOCK, toBlock);\n\n    this.logInfo(`No of events fetched ${events.length}`);\n\n    for (const evt of events) {\n      const msg = `Coven #${evt.args.tokenId} transferred from ${evt.args.from} to ${evt.args.to}`;\n      const payloadMsg = `Coven [b:#${evt.args.tokenId}] transferred\\nFrom :  [s:${evt.args.from}]\\nTo : [t:${evt.args.to}]`;\n      const title = `Coven Transferred`;\n      const payloadTitle = `Coven Transferred`;\n      await this.sendNotification({\n        title: title,\n        payloadTitle: payloadTitle,\n        message: msg,\n        payloadMsg: payloadMsg,\n        notificationType: 1,\n        recipient: this.channelAddress,\n        cta: `https://opensea.io/assets/0x5180db8f5c931aae63c74266b211f580155ecac8/${evt.args.tokenId}`,\n        simulate: false,\n        image: null,\n      });\n    }\n\n    this.LAST_CHECKED_BLOCK = toBlock;\n  }\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Phewww! \ud83e\udd2f, that's a lot of CODE. We really need to break this down now, to get a better understanding. ","\ud83d\ude07"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Breaking down the CODE"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const sdk = await this.getSdk();\nconst coven = await sdk.getContract(\n  '0x5180db8f5c931aae63c74266b211f580155ecac8',\n  JSON.stringify(abi)\n);\nconst filter = await coven.contract.filters.Transfer();\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In the above-mentioned lines, we are using the backend-SDK provided to us by the ",(0,s.jsx)(n.code,{children:"EPNSChannel"})," class."]}),"\n",(0,s.jsx)(n.li,{children:"And using it to get the contract for the crypto coven. Then we are using the contract to create a filter for Transfer() event which we will use later to get events."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"if (!this.LAST_CHECKED_BLOCK) {\n  this.LAST_CHECKED_BLOCK = await coven.provider.getBlockNumber();\n}\n\nconst toBlock = await coven.provider.getBlockNumber();\nthis.logInfo(\n  `No of events fetching events from  ${this.LAST_CHECKED_BLOCK} to ${toBlock}`\n);\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Here, we are checking if the ",(0,s.jsx)(n.code,{children:"LAST_CHECKED_BLOCK"})," is null and if it is not initialized we are initializing it with the current block number after fetching it."]}),"\n",(0,s.jsx)(n.li,{children:"The block is always the current block number."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const events = await coven.contract.queryFilter(\n  filter,\n  this.LAST_CHECKED_BLOCK,\n  toBlock\n);\n\nthis.logInfo(`No of events fetched ${events.length}`);\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In the above-mentioned lines, we are fetching the ",(0,s.jsx)(n.code,{children:"Transfer"})," events from the blockchain using the ",(0,s.jsx)(n.code,{children:"filter"})," and from and ",(0,s.jsx)(n.strong,{children:"toBlock"})," up to which the events are to be fetched."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"for (const evt of events) {\n  const msg = `Coven #${evt.args.tokenId} transferred from ${evt.args.from} to ${evt.args.to}`;\n  const payloadMsg = `Coven [b:#${evt.args.tokenId}] transferred\\nFrom :  [s:${evt.args.from}]\\nTo : [t:${evt.args.to}]`;\n  const title = `Coven Transferred`;\n  const payloadTitle = `Coven Transferred`;\n  await this.sendNotification({\n    title: title,\n    payloadTitle: payloadTitle,\n    message: msg,\n    payloadMsg: payloadMsg,\n    notificationType: 1,\n    recipient: this.channelAddress,\n    cta: `https://opensea.io/assets/0x5180db8f5c931aae63c74266b211f580155ecac8/${evt.args.tokenId}`,\n    simulate: false,\n    image: null,\n  });\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Here we are looping through all the events obtained and sending a broadcast notification using the epns-backend-sdk"}),"\n",(0,s.jsx)(n.li,{children:"We are constructing a payload by creating a title, message, and cta for the notification."}),"\n",(0,s.jsx)(n.li,{children:"A CTA is a call to action link which enables the notification to be clicked and redirected to the URL specified."}),"\n",(0,s.jsx)(n.li,{children:"Here we are redirecting to the open sea page for the token"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"finally-setting-up-the-cron-tasks",children:"Finally! Setting up the CRON Tasks"}),"\n",(0,s.jsx)(n.p,{children:"Now that we have finished the actual logic for fetching the data and constructing and sending the payload. Now we can focus on scheduling this method to run at certain intervals"}),"\n",(0,s.jsx)(n.p,{children:"For that, we use a jobs file for scheduling the method using the built-in scheduling engine that comes with the showrunners framework."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Step 1"}),": Create a file called ",(0,s.jsx)(n.code,{children:"nftTransferJobs.ts"})," inside the nftTransfer folder"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Step 2"}),": Import our channel class that we previously created and the necessary packages."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { Container } from 'typedi';\nimport schedule from 'node-schedule';\nimport NFTTransferChannel from './nftTransferChannel';\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Step 3"}),": Export a function containing the scheduling logic"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { Container } from 'typedi';\nimport schedule from 'node-schedule';\nimport NFTTransferChannel from './nftTransferChannel';\n\nexport default () => {\n  const startTime = new Date(new Date().setHours(0, 0, 0, 0));\n  const channel = Container.get(NFTTransferChannel);\n  const tenMinuteRule = new schedule.RecurrenceRule();\n  tenMinuteRule.minute = new schedule.Range(0, 59, 10);\n\n  channel.logInfo(\n    `-- \ud83d\udef5 Scheduling Showrunner ${channel.cSettings.name} -  Channel [on 5 mins ]`\n  );\n  schedule.scheduleJob(\n    { start: startTime, rule: tenMinuteRule },\n    async function () {\n      const taskName = `${channel.cSettings.name} snapShotProposalsTask(false)`;\n      try {\n        await channel.sendTransferEventNotif();\n        channel.logger.info(`\ud83d\udc23 Cron Task Completed -- ${taskName}`);\n      } catch (err) {\n        channel.logger.error(`\u274c Cron Task Failed -- ${taskName}`);\n        channel.logger.error(`Error Object: %o`, err);\n      }\n    }\n  );\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Here we are scheduling our showrunner for 10 mins. The method ",(0,s.jsx)(n.code,{children:"sendTransferEventNotif"})," runs every 10 mins and keeps on checking for Transfer Events and send broadcast notifications to the channel"]}),"\n",(0,s.jsxs)(n.h3,{id:"wrapping-it-up-rocket",children:["Wrapping it UP ","\ud83d\ude80"]}),"\n",(0,s.jsx)(n.p,{children:"This is a very minimalistic example of how to get started with the showrunners framework. The ways in which you can customize this to create basically any kind of notification is unlimited."}),"\n",(0,s.jsxs)(n.p,{children:["One can even go ahead and include an image in the notification using the ",(0,s.jsx)(n.code,{children:"image"})," parameter in the ",(0,s.jsx)(n.code,{children:"sendNotification"})," function."]}),"\n",(0,s.jsx)(n.p,{children:"Can send targeted notifications, subset notifications to a set of addresses etc. The possibilities are unlimited!!"})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(296540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);