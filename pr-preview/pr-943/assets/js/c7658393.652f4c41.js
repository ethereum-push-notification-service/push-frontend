"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[87401],{185323:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=o(474848),r=o(28453);const i={id:"docs-notifications-showrunners-scaffold-deepdive",title:"Scaffold Deepdive",hide_title:!0,slug:"./scaffold-deepdive",displayed_sidebar:"pushNotificationSidebar",sidebar_position:2,image:"/assets/docs/previews/docs_notifications_showrunners--scaffold_deepdive.png"},t="Showrunners deepdive overview",l={id:"notifications/showrunners-scaffold/docs-notifications-showrunners-scaffold-deepdive",title:"Scaffold Deepdive",description:"Showrunners framework provides you with a scaffold that enables plug and play for your channel or even for multiple channels having their own logic triggers.",source:"@site/docs/notifications/04-showrunners-scaffold/02-Showrunner-Scaffold-Scaffold-Deepdive.mdx",sourceDirName:"notifications/04-showrunners-scaffold",slug:"/notifications/showrunners-scaffold/scaffold-deepdive",permalink:"/push-website/pr-preview/pr-943/docs/notifications/showrunners-scaffold/scaffold-deepdive",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/notifications/04-showrunners-scaffold/02-Showrunner-Scaffold-Scaffold-Deepdive.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"docs-notifications-showrunners-scaffold-deepdive",title:"Scaffold Deepdive",hide_title:!0,slug:"./scaffold-deepdive",displayed_sidebar:"pushNotificationSidebar",sidebar_position:2,image:"/assets/docs/previews/docs_notifications_showrunners--scaffold_deepdive.png"},sidebar:"pushNotificationSidebar",previous:{title:"Get Started",permalink:"/push-website/pr-preview/pr-943/docs/notifications/showrunners-scaffold/get-started"},next:{title:"NFT transfer trigger",permalink:"/push-website/pr-preview/pr-943/docs/notifications/showrunners-scaffold/Examples/nft-transfer-trigger"}},a={},d=[{value:"Channel Structure",id:"channel-structure",level:2},{value:"Mandatory files required inside Channel directory",id:"mandatory-files-required-inside-channel-directory",level:3},{value:"Optional files inside channel directory",id:"optional-files-inside-channel-directory",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Head:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"showrunners-deepdive-overview",children:"Showrunners deepdive overview"}),"\n",(0,s.jsx)(n.p,{children:"Showrunners framework provides you with a scaffold that enables plug and play for your channel or even for multiple channels having their own logic triggers."}),"\n",(0,s.jsxs)(n.p,{children:["Let's understand the requirements for the folder structure inside the ",(0,s.jsx)(n.code,{children:"src/showrunners"})," folder and how you can use them to quickly refine / debug / deploy your channels."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Ensure you have read ",(0,s.jsx)(n.a,{href:"/docs/notifications/showrunners-scaffold/get-started",title:"Guide for getting started with Showrunners scaffold for trigger notificatons via Push protocol",children:"get started guide"})," for Showrunners scaffold before diving in specifics of this guide as the guide relies on terminologies used over there."]})}),"\n",(0,s.jsx)(o,{children:(0,s.jsx)("title",{children:"Showrunners Scaffold Deepdive | Showrunners Scaffold | Push Notifications |\n  Push Documentation"})}),"\n",(0,s.jsx)(n.h2,{id:"channel-structure",children:"Channel Structure"}),"\n",(0,s.jsxs)(n.p,{children:["Each folder inside ",(0,s.jsx)(n.code,{children:"src/showrunners"})," is treated as their own channel and can have their own triggers for firing custom notifications."]}),"\n",(0,s.jsxs)(n.p,{children:["Showrunners is designed to be a plug and play solution for your channel which means that each of the folders designated filenames are used to add-on various functionalities. You can have a look at all the files that are required to be inside your channel folder and ",(0,s.jsx)(n.a,{href:"https://github.com/push-protocol/push-showrunners-framework/tree/main/src/sample_showrunners/helloWorld",title:"Hello World channel with custom trigger using Showrunners scaffold",children:"it's structure here"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Note: For example, we will assume that your are creating a channel called ",(0,s.jsx)(n.strong,{children:"helloWorld"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"mandatory-files-required-inside-channel-directory",children:"Mandatory files required inside Channel directory"}),"\n",(0,s.jsx)(n.p,{children:"At the very least, two files are required to be inside your channel directory:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"{channelname}"}),(0,s.jsx)(n.strong,{children:"Channel.js [.ts]"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For example: ",(0,s.jsx)(n.strong,{children:"helloWorldChannel.js"})," | ",(0,s.jsx)(n.a,{href:"https://github.com/push-protocol/push-showrunners-framework/blob/main/src/sample_showrunners/helloWorld/helloWorldChannel.ts",title:"Example file in repo for helloWorldChannel.js",children:"demo file here"})]}),"\n",(0,s.jsx)(n.li,{children:"This file contains all the logic functions of your channel, it can for instance have a way to poll all opted in users of your channel and based on certain conditions that are met, fire notifications out."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"{channelname}"}),(0,s.jsx)(n.strong,{children:"Keys.js[.ts]"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For example: ",(0,s.jsx)(n.strong,{children:"helloWorldKeys.json"})," | ",(0,s.jsx)(n.a,{href:"https://github.com/push-protocol/push-showrunners-framework/blob/main/src/sample_showrunners/helloWorld/helloWorldKeys.json",title:"Example file in repo for helloWorldKeys.js",children:"demo file here"})]}),"\n",(0,s.jsx)(n.li,{children:"This file contains all your private keys that you either belong to the channel you created or have authorized the wallets to send notification on your channel's behalf."}),"\n",(0,s.jsxs)(n.li,{children:["Sample json file should look like:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'{\n  "PRIVATE_KEY_NEW_STANDARD_1":\n  {\n      "PK": "YOUR_CHANNEL_PRIVATE_KEY_HERE",\n      "CHAIN_ID": "CHAIN_ID_HERE"\n  },\n  "PRIVATE_KEY_NEW_STANDARD_2":\n  {\n      "PK": "YOUR_CHANNEL_DELEGATE_1_PRIVATE_KEY_HERE",\n      "CHAIN_ID": "CHAIN_ID_HERE"\n  },\n  "PRIVATE_KEY_NEW_STANDARD_3":\n  {\n      "PK": "YOUR_CHANNEL_DELEGATE_2_PRIVATE_KEY_HERE",\n      "CHAIN_ID": "CHAIN_ID_HERE"\n  },\n  }\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"Only one private key is required and your channel delegate key also works. Some devs prefer to not expose their channel creator key even when it's used on your server or local backend to sign the notification payload."}),(0,s.jsx)(n.p,{children:"It's also useful when you create a channel from a smart contract or a multisig / multisafe."})]}),"\n",(0,s.jsx)(n.p,{children:"These two files inside your channel folder will ensure that your channel is correctly loaded in showrunners framework but it doesn't do any magic by itself. Do ensure that your channel is triggering logic points either through cron job or through postman routes, you need ways to trigger that which leads us to the optional files that enables that."}),"\n",(0,s.jsx)(n.h3,{id:"optional-files-inside-channel-directory",children:"Optional files inside channel directory"}),"\n",(0,s.jsx)(n.p,{children:"These files while optional enables certain trigger points for your channel to operate on."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"{channelname}"}),(0,s.jsx)(n.strong,{children:"Routes.js [.ts]"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For example: ",(0,s.jsx)(n.strong,{children:"helloWorldRoutes.js"})," | ",(0,s.jsx)(n.a,{href:"https://github.com/push-protocol/push-showrunners-framework/blob/main/src/sample_showrunners/helloWorld/helloWorldRoutes.ts",title:"Example file in repo for helloWorldRoutes.js",children:"demo file here"})]}),"\n",(0,s.jsxs)(n.li,{children:["This file contains the routes that you will enable to ensure you are able to manually trigger notification or any other logic points in your ",(0,s.jsx)(n.code,{children:"{channelname}"}),(0,s.jsx)(n.strong,{children:"Channel.js [.ts]"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"You will ideally use the route of this files in postman to trigger logic functions / test them out."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"{channelname}"}),(0,s.jsx)(n.strong,{children:"Jobs.js [.ts]"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For example: ",(0,s.jsx)(n.strong,{children:"helloWorldJobs.js"})," | ",(0,s.jsx)(n.a,{href:"https://github.com/push-protocol/push-showrunners-framework/blob/main/src/sample_showrunners/helloWorld/helloWorldJobs.ts",title:"Example file in repo for helloWorldJobs.js",children:"demo file here"})]}),"\n",(0,s.jsxs)(n.li,{children:["This file contains your cron jobs to trigger logic points in your ",(0,s.jsx)(n.code,{children:"{channelname}"}),(0,s.jsx)(n.strong,{children:"Channel.js [.ts]"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["This file is based on ",(0,s.jsx)(n.a,{href:"https://github.com/node-schedule/node-schedule",title:"Repo of node-schedule, an advance cron job library for node",children:"node-schdeule"})," and can handle a wide variety of automated cron jobs to enable sending wide array of notifications based on triggers."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"{channelname}"}),(0,s.jsx)(n.strong,{children:"AWSSNS.js [.ts]"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For example: ",(0,s.jsx)(n.strong,{children:"helloWorldAWSSNS.ts"})," | ",(0,s.jsx)(n.a,{href:"https://github.com/push-protocol/push-showrunners-framework/blob/main/src/sample_showrunners/helloWorld/helloWorldAWSSNS.ts",title:"Example file in repo for helloWorldAWSSNS.js",children:"demo file here"})]}),"\n",(0,s.jsx)(n.li,{children:"This file contains the webhook helpers and handle the logic points for consuming a webhook."}),"\n",(0,s.jsxs)(n.li,{children:["This file is based on ",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/sns/",title:"Learn about AWS SNS",children:"AWS-SNS"})," and can handle the variety of logics for consuming webhook to enable sending wide array of notifications based on webhook triggers."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Congrats, that is all you need to know to start creating your channel and sending notifications. [Checkout examples of showrunners channel notification triggers] for different implementations of custom notification triggers that you can do to inform users of your protocol about various things."})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>l});var s=o(296540);const r={},i=s.createContext(r);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);