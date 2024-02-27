"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[30312],{857040:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var i=t(617624),s=t(904552);const a={slug:"deep-dive-into-push-snaps-features-and-getting-started-all-the-technical-specifications-and-getting-started-tips-you-need",title:"Deep-dive into Push Snaps Features & Getting Started \ud83d\udee0\ufe0f",authors:["push"],image:"./cover-image.webp",description:"Deep-dive into Push Snaps Features & Getting Started \ud83d\udee0\ufe0f",text:"As we outlined in our announcement article \u2014 the Push Snap is a powerful tool that allows any wallet address and user to receive notifications directly in their MetaMask wallet.",tags:["Push Protocol","Metamask","Metamask Wallet","Web3","Blockchain"]},o="All the technical specifications and getting started tips you need.",l={permalink:"/blog/deep-dive-into-push-snaps-features-and-getting-started-all-the-technical-specifications-and-getting-started-tips-you-need",source:"@site/blog/2023-09-13-deep-dive-into-push-snaps/index.md",title:"Deep-dive into Push Snaps Features & Getting Started \ud83d\udee0\ufe0f",description:"Deep-dive into Push Snaps Features & Getting Started \ud83d\udee0\ufe0f",date:"2023-09-13T00:00:00.000Z",formattedDate:"September 13, 2023",tags:[{label:"Push Protocol",permalink:"/blog/tags/push-protocol"},{label:"Metamask",permalink:"/blog/tags/metamask"},{label:"Metamask Wallet",permalink:"/blog/tags/metamask-wallet"},{label:"Web3",permalink:"/blog/tags/web-3"},{label:"Blockchain",permalink:"/blog/tags/blockchain"}],readingTime:4.32,hasTruncateMarker:!0,authors:[{name:"Push Protocol",url:"https://twitter.com/pushprotocol",imageURL:"/assets/blog/authors/authorpush.png",key:"push"}],frontMatter:{slug:"deep-dive-into-push-snaps-features-and-getting-started-all-the-technical-specifications-and-getting-started-tips-you-need",title:"Deep-dive into Push Snaps Features & Getting Started \ud83d\udee0\ufe0f",authors:["push"],image:"./cover-image.webp",description:"Deep-dive into Push Snaps Features & Getting Started \ud83d\udee0\ufe0f",text:"As we outlined in our announcement article \u2014 the Push Snap is a powerful tool that allows any wallet address and user to receive notifications directly in their MetaMask wallet.",tags:["Push Protocol","Metamask","Metamask Wallet","Web3","Blockchain"]},unlisted:!1,prevItem:{title:"4 Reasons To Separate Your dApp\u2019s Communication and Execution Layers",permalink:"/blog/4-reasons-to-seperate-your-dapp-communication-and-execution-layers"},nextItem:{title:"Bringing Push to MetaMask Snaps",permalink:"/blog/bringing-push-to-meta-mask-snaps"}},r={image:t(717168).c,authorsImageUrls:[void 0]},h=[{value:"Core Snap Features",id:"core-snap-features",level:2},{value:"Brief glance at the Push Snap\u2019s working mechanism",id:"brief-glance-at-the-push-snaps-working-mechanism",level:2},{value:"Snap installation and Set-Up guide",id:"snap-installation-and-set-up-guide",level:2},{value:"Snap\u2019s permissions",id:"snaps-permissions",level:2},{value:"Technical Specifications",id:"technical-specifications",level:2},{value:"onRPCHandler Specifications",id:"onrpchandler-specifications",level:2},{value:"onCronjob Handler Specifications",id:"oncronjob-handler-specifications",level:2},{value:"Trouble getting started? We\u2019re here to help!",id:"trouble-getting-started-were-here-to-help",level:2},{value:"Other FAQs",id:"other-faqs",level:2},{value:"How can I install the Push Snap?",id:"how-can-i-install-the-push-snap",level:3},{value:"Can I add an address that I do not own?",id:"can-i-add-an-address-that-i-do-not-own",level:3},{value:"Can I opt for only in-app MetaMask notifications?",id:"can-i-opt-for-only-in-app-metamask-notifications",level:3},{value:"Can I opt into channels using this Push Snap?",id:"can-i-opt-into-channels-using-this-push-snap",level:3},{value:"Can the Push Snap sign and send transactions?",id:"can-the-push-snap-sign-and-send-transactions",level:3},{value:"Is there a way to minimize frequent notification pop-ups?",id:"is-there-a-way-to-minimize-frequent-notification-pop-ups",level:3},{value:"What permissions do I need to provide while installing or using the Push Snap?",id:"what-permissions-do-i-need-to-provide-while-installing-or-using-the-push-snap",level:3},{value:"Can I add more than one wallet to receive notifications?",id:"can-i-add-more-than-one-wallet-to-receive-notifications",level:3},{value:"If I have more than one wallet added to the Push Snap, will I receive notifications for all of them?",id:"if-i-have-more-than-one-wallet-added-to-the-push-snap-will-i-receive-notifications-for-all-of-them",level:3},{value:"Does the MetaMask Wallet need to be unlocked to receive notification?",id:"does-the-metamask-wallet-need-to-be-unlocked-to-receive-notification",level:3}];function c(e){const n={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Cover image of Deep-dive into Push Snaps Features &amp; Getting Started \ud83d\udee0\ufe0f",src:t(977796).c+"",width:"1400",height:"788"})}),"\n",(0,i.jsxs)(n.p,{children:["As we outlined in our ",(0,i.jsx)(n.a,{href:"https://push-protocol.medium.com/bringing-push-to-metamask-snaps-fc780fec004b",children:"announcement article"})," \u2014 the Push Snap is a powerful tool that allows any wallet address and user to receive notifications directly in their MetaMask wallet. With the Push Snap installed, you can now seamlessly receive notifications powered by ",(0,i.jsx)(n.a,{href:"https://push.org/",children:"Push Protocol"})," directly into your wallet, ensuring you never miss out on important updates from the channels you subscribe to."]}),"\n",(0,i.jsx)(n.p,{children:"By delivering notifications directly to your wallet address, we\u2019re eliminating the need to log in to any other front-end separately to get those same notifications and alerts. By bringing all your notifications into one place, we\u2019re saving you time, effort, and allowing you to more easily stay connected and informed."}),"\n",(0,i.jsx)(n.h2,{id:"core-snap-features",children:"Core Snap Features"}),"\n",(0,i.jsx)(n.p,{children:"The main features of version 1 of the Push Snap include:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)("b",{children:"Notifications"}),": Notifying users of all updates from the channels they\nopt-in to."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)("b",{children:"Address Selection"}),": Addition or removal of their desired addresses for\nnotifications."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)("b",{children:"Customization of Pop-Ups"}),": Push Snap allows users to toggle popup\nnotifications at their convenience."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"brief-glance-at-the-push-snaps-working-mechanism",children:"Brief glance at the Push Snap\u2019s working mechanism"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The snap requests permission to run periodically every minute."}),"\n",(0,i.jsx)(n.li,{children:"While running, it scouts for all new notifications/alerts received by your wallet"}),"\n",(0,i.jsx)(n.li,{children:"It then bundles all the notifications together and shows all of them in the form of a pop-up as well as in-app notification."}),"\n",(0,i.jsx)(n.li,{children:"The Push Snap allows users to update their address for which they prefer to receive notifications."}),"\n",(0,i.jsx)(n.li,{children:"The Push Snap also includes features to toggle the pop-up notifications as per the user\u2019s choice."}),"\n"]}),"\n",(0,i.jsx)("blockquote",{children:(0,i.jsx)("i",{children:(0,i.jsx)(n.p,{children:"Note: Currently, the Push Snap checks if more than 25 notifications are\nreceived per minute. If that\u2019s the case, the Push Snap automatically notifies\nthe user and snoozes the popups, which can always be turned back on from the\ndApp."})})}),"\n",(0,i.jsx)(n.h2,{id:"snap-installation-and-set-up-guide",children:"Snap installation and Set-Up guide"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If you don\u2019t already have a MetaMask wallet, install and ",(0,i.jsx)(n.a,{href:"https://support.metamask.io/hc/en-us/articles/360015489531-Getting-started-with-MetaMask",children:"set-up a wallet in MetaMask"})," here."]}),"\n",(0,i.jsxs)(n.li,{children:["Next, go to ",(0,i.jsx)(n.a,{href:"https://app.push.org/receive",children:"https://app.push.org/receive"})]}),"\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)("b",{children:"Install Snap"})," \u2192 ",(0,i.jsx)("i",{children:"approve the required permissions to run the snap"})]}),"\n",(0,i.jsx)(n.li,{children:"Once successfully installed the snap will redirect to Push Channels Dapp"}),"\n",(0,i.jsx)(n.li,{children:"Here you can opt-in to your favourite channels to receive notifications"}),"\n",(0,i.jsx)(n.li,{children:"Once done, you can go back to the Snap Settings Page."}),"\n",(0,i.jsxs)(n.li,{children:["With the connected wallet, click on ",(0,i.jsx)("b",{children:"Add Address:"})]}),"\n",(0,i.jsx)(n.li,{children:"This allows you to add an address for which you prefer to receive notifications"}),"\n",(0,i.jsx)(n.li,{children:"Once you click, simply sign the message to complete the process"}),"\n",(0,i.jsx)(n.li,{children:"Once done, you are all set. The address will now start receiving notifications."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"snaps-permissions",children:"Snap\u2019s permissions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)("b",{children:"Local storage"}),": To store the addresses to send notifications and PGP\nprivate key to send PUSH Chat notifications"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)("b",{children:"Periodic actions"}),": This includes sending notifications every minute to\nthe wallet"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)("b",{children:"Dialog Boxes"}),": This includes popups for showing notifications on screen\nand the initial screen"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)("b",{children:"Internet Access"}),": The Push Snap has internet access and can make API\ncalls using fetch()"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"technical-specifications",children:"Technical Specifications"}),"\n",(0,i.jsx)(n.p,{children:"Mentioned below are the imperative calls made by the Push Snap."}),"\n",(0,i.jsx)(n.h2,{id:"onrpchandler-specifications",children:"onRPCHandler Specifications"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)("b",{children:"\u2018pushproto_addaddress\u2019"})," \u2014 This stores the address in the local storage chosen\nby the user after the signature is successful. This address will be served the\nnotifications."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)("b",{children:"\u2018pushproto_removeaddress\u2019"})," \u2014 This removes the address from the local storage\nchosen by the user. That address won\u2019t be served the notification anymore."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)("b",{children:"\u2018pushproto_welcome\u2019"})," \u2014 Serves as an initial popup to introduce the user to\nwhat the snap does and redirects the user to ",(0,i.jsx)("a",{href:"https://app.push.org",children:"\napp.push.org\n"})," to opt-in to the push channels to start getting notifications."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)("b",{children:"\u2018pushproto_togglepopup\u2019"})," \u2014 This method turns off the snooze and notifications\nwould be allowed to be shown in the form of popups again."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"oncronjob-handler-specifications",children:"onCronjob Handler Specifications"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Check if the total notification received is >25. If not it continues to display notifications in the form of popups, otherwise it turns off popups notifying the user, and it can be toggled from the app"}),"\n",(0,i.jsx)(n.li,{children:"InApp notifications have a limit of 11 notifications per second since notifications could be sent every 5 sec, to adhere to that it\u2019s limited to 11 latest notifications per second fired every 5 seconds, adding up to 55 secs, and the next 5-sec gap is freed for the next iteration"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"trouble-getting-started-were-here-to-help",children:"Trouble getting started? We\u2019re here to help!"}),"\n",(0,i.jsx)(n.p,{children:"If you have any issues with setting up your Push Snap, we have a 24/7 dedicated team of devs to help you out."}),"\n",(0,i.jsxs)(n.p,{children:["You can find us here \ud83d\udc49",(0,i.jsx)(n.a,{href:"https://discord.gg/pushprotocol",children:"https://discord.gg/pushprotocol"})]}),"\n",(0,i.jsx)(n.h2,{id:"other-faqs",children:"Other FAQs"}),"\n",(0,i.jsx)(n.h3,{id:"how-can-i-install-the-push-snap",children:"How can I install the Push Snap?"}),"\n",(0,i.jsxs)(n.p,{children:["To install the Push Protocol Snap, you need to go to our dApp, ",(0,i.jsx)(n.a,{href:"https://app.push.org/receive",children:"https://app.push.org/receive"})," and click on the Receive Notifications section. From there, install the Push Snap by giving it the required permissions. After adding addresses, you\u2019re all set to start receiving notifications."]}),"\n",(0,i.jsx)(n.h3,{id:"can-i-add-an-address-that-i-do-not-own",children:"Can I add an address that I do not own?"}),"\n",(0,i.jsx)(n.p,{children:"The addresses to receive notifications can be added only after signing a message, which proves the ownership of that address, hence un-owned addresses cannot be added"}),"\n",(0,i.jsx)(n.h3,{id:"can-i-opt-for-only-in-app-metamask-notifications",children:"Can I opt for only in-app MetaMask notifications?"}),"\n",(0,i.jsx)(n.p,{children:"Yes, the Push Snap can run only on in-app notifications, to avail that, you need to go through the Push Snap settings in the Push dApp and turn off pop-up notifications."}),"\n",(0,i.jsx)(n.h3,{id:"can-i-opt-into-channels-using-this-push-snap",children:"Can I opt into channels using this Push Snap?"}),"\n",(0,i.jsx)(n.p,{children:"Opting-in to channels can only be done using the Push Protocol dApp. The Push Snap is only for receiving and displaying these notifications."}),"\n",(0,i.jsx)(n.h3,{id:"can-the-push-snap-sign-and-send-transactions",children:"Can the Push Snap sign and send transactions?"}),"\n",(0,i.jsx)(n.p,{children:"No, the Push Snap does not have access to the Ethereum provider nor the signer hence the Push Snap cannot initiate any kind of transaction that may or may not involve asset transfers."}),"\n",(0,i.jsx)(n.h3,{id:"is-there-a-way-to-minimize-frequent-notification-pop-ups",children:"Is there a way to minimize frequent notification pop-ups?"}),"\n",(0,i.jsx)(n.p,{children:"The Push Snap has an in-built feature to snooze frequent pop-up notifications. If you receive more than 25 notifications within 5 minutes, it automatically goes into snooze mode and notifications would only come in MetaMask. These settings can always be reset from the dApp."}),"\n",(0,i.jsx)(n.h3,{id:"what-permissions-do-i-need-to-provide-while-installing-or-using-the-push-snap",children:"What permissions do I need to provide while installing or using the Push Snap?"}),"\n",(0,i.jsx)(n.p,{children:"The only permissions required are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Local storage access for the Push Snap to store details of notifications received and allowed addresses"}),"\n",(0,i.jsx)(n.li,{children:"Internet access to gather notifications from Push Protocol"}),"\n",(0,i.jsx)(n.li,{children:"Periodic running of services while the browser is active to check for latest notifications"}),"\n",(0,i.jsx)(n.li,{children:"Dialog box access to allow pop-up notifications"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"can-i-add-more-than-one-wallet-to-receive-notifications",children:"Can I add more than one wallet to receive notifications?"}),"\n",(0,i.jsx)(n.p,{children:"Yes, more than one wallet can be added to receive notifications:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Go to the Push Snap settings on the Push dApp"}),"\n",(0,i.jsx)(n.li,{children:"Connect the wallet you want to add"}),"\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)("a",{children:"Add Address"})," button and sign a message"]}),"\n",(0,i.jsx)(n.li,{children:"The address will be added to the snap to receive notifications"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"if-i-have-more-than-one-wallet-added-to-the-push-snap-will-i-receive-notifications-for-all-of-them",children:"If I have more than one wallet added to the Push Snap, will I receive notifications for all of them?"}),"\n",(0,i.jsx)(n.p,{children:"Yes, every wallet you add will receive a notification."}),"\n",(0,i.jsx)(n.h3,{id:"does-the-metamask-wallet-need-to-be-unlocked-to-receive-notification",children:"Does the MetaMask Wallet need to be unlocked to receive notification?"}),"\n",(0,i.jsx)(n.p,{children:"Yes, the browser window needs to be active and MetaMask needs to be unlocked to start receiving notifications."})]})}function d(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},717168:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/cover-image-dc4fc741e7f89b68c30fa4b588200bc7.webp"},977796:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/cover-image-dc4fc741e7f89b68c30fa4b588200bc7.webp"},904552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>o});var i=t(811504);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);