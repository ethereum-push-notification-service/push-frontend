"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[20209],{109664:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=t(474848),o=t(28453);const s={id:"docs-notifications-showrunners-examples-nft-based-trigger",title:"NFT based trigger",hide_title:!0,slug:"./nft-based-trigger",displayed_sidebar:"pushNotificationSidebar",sidebar_position:2,image:"/assets/docs/previews/docs_notifications_showrunners_examples--nft_based_trigger.png"},r="NFT based trigger via showrunner scaffold",a={id:"notifications/showrunners-scaffold/Examples/docs-notifications-showrunners-examples-nft-based-trigger",title:"NFT based trigger",description:"This is a step-by-step introductory tutorial that will teach you how to build a channel based on NFTs and their respective events in a contract.",source:"@site/docs/notifications/04-showrunners-scaffold/03-Examples/02-Showrunner-Example-NFT-Based-Trigger-Example.mdx",sourceDirName:"notifications/04-showrunners-scaffold/03-Examples",slug:"/notifications/showrunners-scaffold/Examples/nft-based-trigger",permalink:"/push-website/pr-preview/pr-887/docs/notifications/showrunners-scaffold/Examples/nft-based-trigger",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/notifications/04-showrunners-scaffold/03-Examples/02-Showrunner-Example-NFT-Based-Trigger-Example.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"docs-notifications-showrunners-examples-nft-based-trigger",title:"NFT based trigger",hide_title:!0,slug:"./nft-based-trigger",displayed_sidebar:"pushNotificationSidebar",sidebar_position:2,image:"/assets/docs/previews/docs_notifications_showrunners_examples--nft_based_trigger.png"},sidebar:"pushNotificationSidebar",previous:{title:"NFT transfer trigger",permalink:"/push-website/pr-preview/pr-887/docs/notifications/showrunners-scaffold/Examples/nft-transfer-trigger"},next:{title:"Service based trigger",permalink:"/push-website/pr-preview/pr-887/docs/notifications/showrunners-scaffold/Examples/service-based-trigger"}},c={},l=[{value:"Setup channel folder",id:"setup-channel-folder",level:3},{value:"Use case",id:"use-case",level:3},{value:"Sample code structure",id:"sample-code-structure",level:3},{value:"Logic overview",id:"logic-overview",level:4},{value:"Channel File",id:"channel-file",level:4},{value:"The Channel Class Creation (The Boilerplate)",id:"the-channel-class-creation-the-boilerplate",level:4},{value:"The Fetching of Block Numbers",id:"the-fetching-of-block-numbers",level:4},{value:"The Notification Trigger Logic",id:"the-notification-trigger-logic",level:4},{value:"Jobs File",id:"jobs-file",level:4}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"nft-based-trigger-via-showrunner-scaffold",children:"NFT based trigger via showrunner scaffold"}),"\n",(0,i.jsx)(n.p,{children:"This is a step-by-step introductory tutorial that will teach you how to build a channel based on NFTs and their respective events in a contract."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Greetings!!"})," If you are new to Push protocol and don't have a proper idea of how to create an NFT-based channel for notifications on top of ",(0,i.jsx)(n.a,{href:"/docs/notifications/showrunners-scaffold/get-started",children:"showrunners"}),". This guide is for you ;)"]}),"\n",(0,i.jsxs)(n.p,{children:["We will walk through coding and interacting with the ",(0,i.jsx)(n.a,{href:"https://www.digible.io/",children:"Digible "}),"to create the notification regarding the NFTs listed there. And don\u2019t worry if you don\u2019t understand what any these words mean yet, I'll explain everything!"]}),"\n",(0,i.jsxs)(n.p,{children:["You can access the ",(0,i.jsx)(n.a,{href:"https://github.com/push-protocol/push-showrunners-framework-staging/tree/main/src/sample_showrunners/digible",children:"code"})," for the channel and get some vibe for how the code is looking !!"]}),"\n",(0,i.jsx)(t,{children:(0,i.jsx)("title",{children:"NFT based trigger | Example | Showrunners Scaffold | Push Notifications |\n  Push Documentation"})}),"\n",(0,i.jsx)(n.h3,{id:"setup-channel-folder",children:"Setup channel folder"}),"\n",(0,i.jsx)(n.p,{children:"For starting with showrunners and setting it up follow this guide here. // need to add link"}),"\n",(0,i.jsxs)(n.p,{children:["First we need to create a folder in ",(0,i.jsx)(n.code,{children:"src/showrunners/<your_channel_name>"})]}),"\n",(0,i.jsx)(n.h3,{id:"use-case",children:"Use case"}),"\n",(0,i.jsx)(n.p,{children:"To Notify a User when the Phygital Status of a NFT has changed."}),"\n",(0,i.jsx)(n.h3,{id:"sample-code-structure",children:"Sample code structure"}),"\n",(0,i.jsx)(n.h4,{id:"logic-overview",children:"Logic overview"}),"\n",(0,i.jsx)(n.p,{children:"Digible has provided us with the Contract Addresses and ABIs for the concerned event. The most basic approach will be monitoring the function concerning the Phygital Status and triggering a notification whenever the concerned function is called."}),"\n",(0,i.jsx)(n.p,{children:"To get the Idea of when the function is called we monitor the block numbers of every transaction in the given contract address if it concerned to call the monitored event.Whenever we observe a new block number, we trigger a notification and also update the latest block number in our temporary storage for further monitoring."}),"\n",(0,i.jsx)(n.h4,{id:"channel-file",children:(0,i.jsx)(n.a,{href:"https://github.com/push-protocol/push-showrunners-framework/blob/main/src/sample_showrunners/digible/digibleChannel.ts",children:"Channel File"})}),"\n",(0,i.jsx)(n.p,{children:"The channel file is the brain for every channel notification logic. The file follows basic steps of input obtainment, some processed logic and conditions and when the condition for logic is satisfied the code generates the notification."}),"\n",(0,i.jsx)(n.h4,{id:"the-channel-class-creation-the-boilerplate",children:"The Channel Class Creation (The Boilerplate)"}),"\n",(0,i.jsx)(n.p,{children:"Every development procedure initiates with creating a channel specific class with contains various information regarding the concerned channel, such as:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The network to monitor for the Channel"}),"\n",(0,i.jsx)(n.li,{children:"Name of the Channel"}),"\n",(0,i.jsx)(n.li,{children:"The URL of channel owner"}),"\n",(0,i.jsx)(n.li,{children:"Whether channel uses off chain notification or not"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"import { Inject, Service } from 'typedi';\nimport { Logger } from 'winston';\nimport config, { defaultSdkSettings } from '../../config';\nimport { EPNSChannel } from '../../helpers/epnschannel';\n\nexport default class DigibleChannel extends EPNSChannel {\n  constructor(@Inject('logger') public logger: Logger, @Inject('cached') private cached) {\n    super(logger, {\n      sdkSettings: {\n        epnsCoreSettings: defaultSdkSettings.epnsCoreSettings,\n        epnsCommunicatorSettings: defaultSdkSettings.epnsCommunicatorSettings,\n        networkSettings: defaultSdkSettings.networkSettings,\n      },\n      networkToMonitor: config.web3PolygonMainnetRPC,\n      dirname: __dirname,\n      name: 'Digible',\n      url: '<https://www.digible.io/>',\n      useOffChain: true,\n    });\n  }\n"})}),"\n",(0,i.jsx)(n.h4,{id:"the-fetching-of-block-numbers",children:"The Fetching of Block Numbers"}),"\n",(0,i.jsx)(n.p,{children:"The block number for the latest transaction and also the block number for the last transaction of the concerned event is fetched."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Getting the Block Number for the event and the Latest block number from the contract"})}),"\n",(0,i.jsxs)(n.p,{children:["The below given function fetches the block number previously saved for the Event, for example in this case ",(0,i.jsx)(n.strong,{children:"fromBlockDigiTrack"})," is the latest block number in the local database for the Event."]}),"\n",(0,i.jsxs)(n.p,{children:["Also the Latest block number for the contract is fetched and save as the ",(0,i.jsx)(n.strong,{children:"toBlock."})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"//Get the Block Number previously saved for each of the events.\n  async getBlockNumbers(simulate, contract: ethers.Contract) {\n    this.logInfo(`Getting Block Numbers`);\n\n    let fromBlockDigiTrack = simulate?.logicOverride?.mode\n      ? simulate?.logicOverride?.fromBlock\n      : (await contract.provider.getBlockNumber());\n\n    let toBlock = simulate?.logicOverride?.mode\n      ? simulate?.logicOverride?.toBlock\n      : await contract.provider.getBlockNumber();\n\n    const contractNumber = await contract.provider.getBlockNumber();\n\n    //Declaring or somewhat re-saving the imported Block Numbers\n    const result = {\n      fromBlockDigiTrack,\n      toBlock: toBlock,\n    };\n    return result;\n  }\n"})}),"\n",(0,i.jsx)(n.h4,{id:"the-notification-trigger-logic",children:"The Notification Trigger Logic"}),"\n",(0,i.jsxs)(n.p,{children:["The digible channel follows a primary logic of event monitoring. In this specific use case we are monitoring an event named ",(0,i.jsx)(n.strong,{children:"\u201cStatusUpdated()\u201d"})," The following are the steps followed to monitor the event and trigger a notification, if required."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Getting the contract information to monitor the event"})}),"\n",(0,i.jsx)(n.p,{children:"The below given lines of code are using our SDK to get a contract from the Provided contract address and the ABI for the contract.This then also filters out and assigns the concerned event a variable to be worked upon. The blockNumbers variable is assigned to the value of block numbers fetched from the contract using the above explained getBlockNumbers function."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"const sdk = await this.getSdk();\nconst digibleContract = await sdk.getContract(\n  digibleSettings.digiTrackContractAddressMainnet,\n  JSON.stringify(digiTrackABI)\n);\nconst filter = digibleContract.contract.filters.StatusUpdated();\nconst blockNumbers = await this.getBlockNumbers(\n  simulate,\n  digibleContract.contract\n);\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Implementing a condition to trigger the notification"})}),"\n",(0,i.jsx)(n.p,{children:"The following condition is then implemented:-"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"if (blockNumbers.toBlock > blockNumbers.fromBlockDigiTrack)\n"})}),"\n",(0,i.jsx)(n.p,{children:"This conditions allows us to trigger a notification if the fetched block number from the contract is greater than the latest saved block number in the model file.The greater block number implies that a new transaction utilising the concerned event was made."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Structuring the Notification"})}),"\n",(0,i.jsx)(n.p,{children:"If the above condition is verified the process of triggering a notification is initiated."}),"\n",(0,i.jsx)(n.p,{children:"First of all a \u201cFor\u201d condition is implemented to send the notifs for all the times the event was called."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"for (const e of events)\n"})}),"\n",(0,i.jsx)(n.p,{children:"For sending a notification we use an inbuilt EPNS class function called \u201csendNotification\u201d.This function to send the notification requires certain data from our side.The following data is what we generally provide in a notification:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Recipient Address"}),"\n",(0,i.jsx)(n.li,{children:"Notification Title"}),"\n",(0,i.jsx)(n.li,{children:"Notification Message"}),"\n",(0,i.jsx)(n.li,{children:"Call to Action Link (The link which redirects the user to the channel holders domain for further actions)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Sometimes to provide we have to provide some necessary information in the notification message. For this we use the contract and fetch the different arguments for the concerned event. In the case of involvement of token, we use the ERC20 (if the token is listed in ERC20) Json to extract the information for a specific token."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"const contract = await sdk.getContract(\n  e.args.nftAddress,\n  JSON.stringify(ERC20ABI)\n);\nconst name = await contract.contract.name();\nconst newStatus = e.args[2];\nconst tokenId = e.args[1];\n"})}),"\n",(0,i.jsx)(n.p,{children:"After we get the required information from the arguments we frame the Title and Message for the notification."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"const title = `DigiTrack-Phygital Status Updated !!`;\nconst message = `DigiSafe status for ${name} has been updated to ${newStatus}.`;\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Triggering a Notification"})}),"\n",(0,i.jsx)(n.p,{children:"After getting all the data from our side the notification is good-to-go, and the sendNotification function is implemented."}),"\n",(0,i.jsx)(n.p,{children:"This notification is addressed only to the people who are involved in the specific event transaction.Hence the recipient addresses are also fetched from the Event arguments."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"await this.sendNotification({\n  recipient: e.args[3],\n  title,\n  message,\n  payloadMsg,\n  payloadTitle,\n  cta: `https://www.digible.io/`,\n  notificationType,\n  simulate,\n  image: null,\n});\n"})}),"\n",(0,i.jsx)(n.h4,{id:"jobs-file",children:(0,i.jsx)(n.a,{href:"https://github.com/push-protocol/push-showrunners-framework/blob/main/src/sample_showrunners/digible/digibleJobs.ts",children:"Jobs File"})}),"\n",(0,i.jsx)(n.p,{children:"This folder is responsible to run the Cron Jobs. Expanding on the \u201cCron Jobs\u201d, this is a function which uses a module called Node-Schedule to run a code at a specific, repeating time interval. Though the main logic resides in the Channel file, the logic is constantly run by this file, so that as soon as the function satisfies the condition when its called, a notification is sent."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Creation of a Time Rule"})}),"\n",(0,i.jsx)(n.p,{children:"This involves creating a type of countdown values for a specific job to run.This is customised on the basis of the requirement of a certain use case. For example in this case we create a Daily Rule which makes the channel logic run once in every 10 minutes."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"const startTime = new Date(new Date().setHours(0, 0, 0, 0));\nconst channel = Container.get(DigibleChannel);\n\nconst tenMinuteRule = new schedule.RecurrenceRule();\ntenMinuteRule.minute = new schedule.Range(0, 59, 10);\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Calling the Channel Function for a Job"})}),"\n",(0,i.jsx)(n.p,{children:"Once the schedule job is set to run. The below stated function calls the Task Function from the Channel file to run and send the notification if need be."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"schedule.scheduleJob(\n  { start: startTime, rule: tenMinuteRule },\n  async function () {\n    const taskName = `${channel.cSettings.name} getDigiTrackEvents(false)`;\n    try {\n      channel.getDigiTrackEvents(false);\n      channel.logInfo(`\ud83d\udc23 Cron Task Completed -- ${taskName}`);\n    } catch (err) {\n      logger.error(`\u274c Cron Task Failed -- ${taskName}`);\n      logger.error(`Error Object: %o`, err);\n    }\n  }\n);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can now heat up the server by running ",(0,i.jsx)(n.code,{children:"docker-compose up"})," and ",(0,i.jsx)(n.code,{children:"npm run dev"})," and start sending notification."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.em,{children:["In the channel file you can also track the block numbers for which last notification by using ",(0,i.jsx)(n.code,{children:"database"})," , so that next time the jobs hit the engine, it won't repeat sending notification from same block again i.e. repeated notifications"]})}),"\n",(0,i.jsx)(n.p,{children:"That's all for now :)"}),"\n",(0,i.jsxs)(n.p,{children:["If you enjoyed this tutorial, Do join our ",(0,i.jsx)(n.a,{href:"https://discord.com/invite/pushprotocol",children:"discord server"})," to meet other dev and builders."]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(296540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);