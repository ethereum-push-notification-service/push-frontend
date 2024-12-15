"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[52338],{172051:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var s=i(474848),n=i(28453);const o={slug:"how-developers-can-integrate-cartesi-and-push-protocol",title:"How developers can integrate Cartesi and Push Protocol.",authors:["push"],image:"./cover-image.webp",description:"How developers can integrate Cartesi and Push Protocol.",text:"We\u2019re thrilled to share that contributors at Cartesi have created an integration template for developers to be able to also leverage web3-native communications for DApp builders on Cartesi.",tags:["Announcements"]},r=void 0,a={permalink:"/push-website/pr-preview/pr-945/blog/how-developers-can-integrate-cartesi-and-push-protocol",source:"@site/blog/2024-10-09-push-cartesi-blog/index.md",title:"How developers can integrate Cartesi and Push Protocol.",description:"How developers can integrate Cartesi and Push Protocol.",date:"2024-10-09T00:00:00.000Z",formattedDate:"October 9, 2024",tags:[{label:"Announcements",permalink:"/push-website/pr-preview/pr-945/blog/tags/announcements"}],readingTime:4.056666666666667,hasTruncateMarker:!0,authors:[{name:"Push Protocol",url:"https://twitter.com/pushprotocol",imageURL:"/assets/blog/authors/authorpush.png",key:"push"}],frontMatter:{slug:"how-developers-can-integrate-cartesi-and-push-protocol",title:"How developers can integrate Cartesi and Push Protocol.",authors:["push"],image:"./cover-image.webp",description:"How developers can integrate Cartesi and Push Protocol.",text:"We\u2019re thrilled to share that contributors at Cartesi have created an integration template for developers to be able to also leverage web3-native communications for DApp builders on Cartesi.",tags:["Announcements"]},unlisted:!1,prevItem:{title:"Token-Gated Group Chats",permalink:"/push-website/pr-preview/pr-945/blog/token-gated-group-chats"},nextItem:{title:"Introducing the Push Points Program",permalink:"/push-website/pr-preview/pr-945/blog/introducing-the-push-points-program"}},c={image:i(124365).A,authorsImageUrls:[void 0]},h=[{value:"<strong>What is Cartesi?</strong>",id:"what-is-cartesi",level:3},{value:"How Developers can Integrate Cartesi and Push Protocol:",id:"how-developers-can-integrate-cartesi-and-push-protocol",level:3},{value:"<strong>Technical Deep Dive: The Cartesi Push Notification Server</strong>",id:"technical-deep-dive-the-cartesi-push-notification-server",level:3},{value:"Setting up Notifications for Cartesi DApps:",id:"setting-up-notifications-for-cartesi-dapps",level:3},{value:"Sending Notifications for Cartesi DApps:",id:"sending-notifications-for-cartesi-dapps",level:3}];function l(e){const t={a:"a",code:"code",em:"em",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Cover Image of How developers can integrate Cartesi and Push Protocol.",src:i(848722).A+"",width:"1600",height:"900"})}),"\n",(0,s.jsxs)(t.p,{children:["We\u2019re thrilled to share that contributors at ",(0,s.jsx)(t.a,{href:"https://cartesi.io/",children:"Cartesi"})," have created an integration template for developers to be able to also leverage web3-native communications for DApp builders on Cartesi."]}),"\n",(0,s.jsx)(t.h3,{id:"what-is-cartesi",children:(0,s.jsx)(t.strong,{children:"What is Cartesi?"})}),"\n",(0,s.jsx)(t.p,{children:"Cartesi is an innovative modular blockchain protocol that empowers developers by providing a complete Linux environment along with high-performance rollups. This combination is designed to facilitate the development of advanced next-generation DApps. With it, decentralized applications should be easier, faster, and more scalable than ever before."}),"\n",(0,s.jsx)(t.p,{children:"Cartesi overcomes the constraints of traditional blockchains by providing developers with a complete Linux operating system and scalable rollups, tailored for real-world applications. This opens up exciting new possibilities for DApps in gaming, DeFi, and other cutting-edge industries, unlocking the future of innovation."}),"\n",(0,s.jsxs)(t.p,{children:["Cartesi-built projects have consistently excelled in ",(0,s.jsx)(t.a,{href:"https://ethglobal.com/",children:"ETHGlobal"})," hackathons with innovative projects like ",(0,s.jsx)(t.a,{href:"https://ethglobal.com/showcase/cartenix-7xxe6",children:"Cartenix"}),", ",(0,s.jsx)(t.a,{href:"https://ethglobal.com/showcase/doom-arena-hmu4j",children:"Doom Arena"}),", and ",(0,s.jsx)(t.a,{href:"https://ethglobal.com/showcase/chaingpt-and-accountability-for-ai-agents-doquk",children:"ChainGPT"})," gaining considerable traction. These projects not only showcase their commitment to decentralized computation but also highlight Cartesi\u2019s unique ability to unlock new possibilities for scalable, high-performance DApps across various real-world use cases. Other Cartesi Mainnet DApps like ",(0,s.jsx)(t.a,{href:"https://rives.io/",children:"Rives"})," and ",(0,s.jsx)(t.a,{href:"https://bugbuster.app/",children:"Bug Buster"})," also showed new unforeseen possibilities."]}),"\n",(0,s.jsx)(t.h3,{id:"how-developers-can-integrate-cartesi-and-push-protocol",children:"How Developers can Integrate Cartesi and Push Protocol:"}),"\n",(0,s.jsx)(t.p,{children:"Developer advocacy contributors at Cartesi have demonstrated how developers can integrate push notifications into their Cartesi dApps, enabling users to receive updates related to their activities within the Cartesi rollups environment. Developers can deliver finalized on-chain messages or simple in-app notifications that users care about."}),"\n",(0,s.jsx)(t.p,{children:"This integration enhances the interactivity of Cartesi DApps, so users can receive timely updates\u2014whether for verified outputs or simple messages\u2014without monitoring epoch finalization."}),"\n",(0,s.jsxs)(t.p,{children:["This is particularly useful when managing on-chain assets, where users need to execute a voucher once an epoch is finalized. Vouchers serve as transaction instruments on the base layer blockchain, facilitating operations like asset transfers. They enable modifications to the base layer by reflecting the application's state changes. Read ",(0,s.jsx)(t.a,{href:"https://docs.cartesi.io/cartesi-rollups/1.5/development/retrieve-outputs/#vouchers-on-chain-actions",children:"here"})," to learn more about vouchers. With notifications powered by Push, Cartesi users can also stay informed about unexecuted vouchers, ensuring they don't miss critical updates, like withdrawing assets."]}),"\n",(0,s.jsx)(t.h3,{id:"technical-deep-dive-the-cartesi-push-notification-server",children:(0,s.jsx)(t.strong,{children:"Technical Deep Dive: The Cartesi Push Notification Server"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"https://github.com/Mugen-Builders/push-cartesi/",children:"Cartesi Push Notification Server"})," is a crucial tool that enhances the user experience of Cartesi DApps by providing real-time push notifications. This service is powered by a simple cron job that allows Cartesi DApp creators to notify users of important events, such as those mentioned above, verified outputs, or the availability of vouchers for asset withdrawal, without requiring users to monitor blockchain events like epoch finalization manually."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Addressing the On-Chain Asset Challenge:"}),"\nOne key challenge in decentralized applications involving on-chain assets is the need for users to execute a voucher after an epoch has been finalized. Without notifications, users may miss the execution of vouchers, potentially delaying their withdrawal of assets. The Cartesi Push Notification Server directly solves this problem by alerting users when important events\u2014such as unexecuted vouchers\u2014occur, ensuring they remain informed and can act promptly in response to them."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"How It Works: Push Notifications for Cartesi DApps:"})}),"\n",(0,s.jsx)(t.p,{children:"The Push Cartesi Notification server operates through a cron job that regularly queries the Graphql server of the Cartesi dApp node to check for new or verified outputs. Here\u2019s how developers can implement it:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Push Notification Architecture:"}),"\nThe Push Cartesi Notification Server leverages a cron job that filters for ",(0,s.jsx)(t.a,{href:"https://docs.cartesi.io/cartesi-rollups/1.5/development/retrieve-outputs/#notices-off-chain-events",children:"notices"})," and verified proofs, sending timely notifications to users about these critical outputs. However, vouchers are intentionally excluded from the cron job, as they are deleted after execution. Instead, the system focuses on notifying users when a proof is available\u2014triggering them to take action, such as executing a voucher."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Here\u2019s the architecture of how the Push Cartesi Notification Server works:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Push Cartesi Notification Server",src:i(334185).A+"",width:"1340",height:"746"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Creating a Push Notification Channel:"}),"\nTo start, developers must set up a Push notification channel using ",(0,s.jsx)(t.a,{href:"https://push.org/docs/notifications/tutorials/create-your-channel/",children:"Push Protocol\u2019s official guide"}),". The rest of the setup process is explained below."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Efficient Notification Management Using Notices:"}),'\nDevelopers can include a "notice" alongside vouchers to ensure users are properly informed about important, on-chain events. For example, when an NFT is minted, a notice can be generated to notify the user of this event, while the voucher handles the asset\u2019s actual minting process. A notice is a verifiable data statement that confirms off-chain events or conditions, supported by accompanying proof.']}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Two Types of Notifications: Instant vs. Proofed:"}),"\nDevelopers have control over when notifications are sent to users through two types of notices:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Instant Notifications: These notifications are sent immediately after a notice is created, allowing users to get real-time updates."}),"\n",(0,s.jsx)(t.li,{children:"Proofed Notifications: These notifications are sent only when a proof is available, i.e., when the epoch finalizes, ensuring that users are alerted once the output is verified and actionable."}),"\n"]}),"\n",(0,s.jsxs)(t.ol,{start:"5",children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Streamlined Asset Withdrawals:"}),"\nThe Push/Cartesi notification system is particularly valuable in managing on-chain assets. When users need to withdraw assets, they are alerted when a voucher is ready for execution. By receiving these timely notifications, users can act quickly, avoiding delays or missed withdrawals."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"setting-up-notifications-for-cartesi-dapps",children:"Setting up Notifications for Cartesi DApps:"}),"\n",(0,s.jsxs)(t.p,{children:["Disclaimer: ",(0,s.jsx)(t.em,{children:"This integration is currently in its alpha stage and relies on certain trust assumptions regarding the Notifications server. Developers are encouraged to use this as an experimental step for integrating push notifications but should not consider it a final, mainnet-ready solution."})]}),"\n",(0,s.jsx)(t.p,{children:"First, make sure you have created a channel for Push. Once you\u2019ve done so, continue with the below steps to build and run the Notifications server with a sample Cartesi dApp on your local machine.:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Replace addresses in the code for the cron-job as follows:"})}),"\n",(0,s.jsx)(t.p,{children:"Inside notification.sender.js change the address to the address of your channel"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'pushChannelAdress = "0x41070EfeD9Ead91380AAE5e164DAC1001F64C991";\n'})}),"\n",(0,s.jsx)(t.p,{children:"Inside graphql/config.js,  update the endpoint with the graphql route of your node."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"endpoint: 'http://localhost:8080/graphql'\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Add private key"})}),"\n",(0,s.jsxs)(t.p,{children:["Disclaimer: ",(0,s.jsx)(t.em,{children:"This is just for test purposes. Do not try this with any real private key."})]}),"\n",(0,s.jsx)(t.p,{children:"Start the process by creating a .env file from the given sample and filling it with the private key of the channel creator or delegated messenger."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"cp .env.sample .env"})}),"\n",(0,s.jsx)(t.p,{children:"Now you can start testing and launching the sending function for notifications!"}),"\n",(0,s.jsx)(t.h3,{id:"sending-notifications-for-cartesi-dapps",children:"Sending Notifications for Cartesi DApps:"}),"\n",(0,s.jsx)(t.p,{children:"From inside your cron-job folder, use the following input:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"npm start\n"})}),"\n",(0,s.jsx)(t.p,{children:"Then, you can start the simple-node DApp inside its directory with the below command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"cartesi build\n"})}),"\n",(0,s.jsx)(t.p,{children:"To fully initiate testing, follow the above up with the below:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"cartesi run\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Send test inputs"})}),"\n",(0,s.jsx)(t.p,{children:"On another terminal window, type:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"cartesi send generic\n"})}),"\n",(0,s.jsx)(t.p,{children:"Then, send a string encoding as follows:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"{\u201ctype\u201d:\u201dinstant\u201d,\u201dmessage\u201d:\u201dsample message\u201d,\u201dtarget\u201d:\u201d*\u201d}\n"})}),"\n",(0,s.jsx)(t.p,{children:"The field marked \u201ctype\u201d can be filled with one of two values either \u2018instant\u2019 or \u2018proof\u2019"}),"\n",(0,s.jsx)(t.p,{children:"The target field for the destination of the message can be a wallet address or * for broadcasts to everyone who subscribes to the channel."}),"\n",(0,s.jsxs)(t.p,{children:["Once you are ready to deploy you can generate a container with the Dockerfile inside the cron-job folder and deploy it to ",(0,s.jsx)(t.a,{href:"https://fly.io/docs/launch/deploy/",children:"fly.io"})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://www.youtube.com/watch?v=SO-xhHT85Bk",children:"Here\u2019s"})," a demo video showing the ins and outs of how Cartesi DApps can integrate Push Notifications using ",(0,s.jsx)(t.a,{href:"https://github.com/Mugen-Builders/push-cartesi/blob/main/README.md",children:"Cartesi Push Notification Server"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["This integration is being tested out with ",(0,s.jsx)(t.a,{href:"https://x.com/Comet_ing/status/1837041254166589535",children:"Comet"})," - a Cartesi DApp."]}),"\n",(0,s.jsxs)(t.p,{children:["Got any questions? Feel free to drop us a line on our ",(0,s.jsx)(t.a,{href:"http://discord.gg/pushprotocol",children:"Discord"}),"; our team will help you."]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},124365:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/cover-image-77effe29668da141c8d27be8846664b9.webp"},848722:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/cover-image-77effe29668da141c8d27be8846664b9.webp"},334185:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/cover-image1-1a2d7a2eef09d0312d47790fdc03c045.webp"},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var s=i(296540);const n={},o=s.createContext(n);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);