"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[90709],{846680:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var i=t(785893),s=t(511151);t(23734);const o={slug:"how-to-get-started-with-epns",title:"How to Get Started with EPNS (for Devs!)",description:"How to Get Started with EPNS (for Devs!)",authors:["push"],image:"./cover-image.webp",text:"EPNS is an open-source, decentralized notification protocol. The protocol went live on Ethereum Mainnet on Jan 11th and it now has 19 official channels by major projects in Web3 including ENS, MakerDAO, Coindesk and dYdX.",tags:["Epnsproject","Web3","Blockchain","Notifications","Developer"]},r="EPNS Integration",c={permalink:"/blog/how-to-get-started-with-epns",source:"@site/blog/2022-01-25-how-to-get-started-with-epns/index.md",title:"How to Get Started with EPNS (for Devs!)",description:"How to Get Started with EPNS (for Devs!)",date:"2022-01-25T00:00:00.000Z",formattedDate:"January 25, 2022",tags:[{label:"Epnsproject",permalink:"/blog/tags/epnsproject"},{label:"Web3",permalink:"/blog/tags/web-3"},{label:"Blockchain",permalink:"/blog/tags/blockchain"},{label:"Notifications",permalink:"/blog/tags/notifications"},{label:"Developer",permalink:"/blog/tags/developer"}],readingTime:3.0633333333333335,hasTruncateMarker:!0,authors:[{name:"Push Protocol",url:"https://twitter.com/pushprotocol",imageURL:"/assets/blog/authors/authorpush.png",key:"push"}],frontMatter:{slug:"how-to-get-started-with-epns",title:"How to Get Started with EPNS (for Devs!)",description:"How to Get Started with EPNS (for Devs!)",authors:["push"],image:"./cover-image.webp",text:"EPNS is an open-source, decentralized notification protocol. The protocol went live on Ethereum Mainnet on Jan 11th and it now has 19 official channels by major projects in Web3 including ENS, MakerDAO, Coindesk and dYdX.",tags:["Epnsproject","Web3","Blockchain","Notifications","Developer"]},unlisted:!1,prevItem:{title:"Dmitry Buterin \u2014 Rockstars of Ethereum Vol 2 #1 Recap",permalink:"/blog/dmitry-buterin\u2014rockstars-of-ethereum-vol-2"},nextItem:{title:"EPNS Allies With Angle Protocol to Facilitate Push Notifications for Users",permalink:"/blog/epns-allies-with-angle-protocol"}},a={image:t(514754).Z,authorsImageUrls:[void 0]},h=[{value:"Fetching the notifications",id:"fetching-the-notifications",level:2},{value:"Parsing the notifications",id:"parsing-the-notifications",level:2},{value:"<strong>Rendering the notifications</strong>",id:"rendering-the-notifications",level:2}];function d(e){const n={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Cover image of How to Get Started with EPNS (for Devs!)",src:t(997450).Z+"",width:"1400",height:"700"})}),"\n",(0,i.jsxs)(n.p,{children:["EPNS is an open-source, decentralized notification protocol. The protocol went live on ",(0,i.jsx)(n.a,{href:"https://medium.com/ethereum-push-notification-service/the-epns-mainnet-is-here-470faec0c01",children:"Ethereum Mainnet on Jan 11th"})," and it now has 19 official channels by major projects in Web3 including ENS, MakerDAO, Coindesk and dYdX."]}),"\n",(0,i.jsxs)(n.p,{children:["Any service, protocol, or individual who wants to send notifications could start right away with EPNS. ",(0,i.jsx)(n.strong,{children:"In this post, we\u2019ve made it easy to learn how to get started."})]}),"\n",(0,i.jsxs)(n.p,{children:["The initial step for EPNS integration is ",(0,i.jsx)(n.strong,{children:"channel creation"}),". Here is the ",(0,i.jsx)(n.a,{href:"https://medium.com/ethereum-push-notification-service/getting-started-with-epns-ca2dd7f43329",children:(0,i.jsx)(n.strong,{children:"step-by-step guide on how to create a channel"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Once the channel is created, the channel owner could start sending notifications from the dApp and receive notifications on all of the EPNS platforms \u2014 dApp, Android App, iOS App, Browser Extension."}),"\n",(0,i.jsx)(n.h1,{id:"integrating-with-the-backend-sdk",children:(0,i.jsx)(n.strong,{children:"Integrating with the Backend SDK"})}),"\n",(0,i.jsxs)(n.p,{children:["The back-end SDK allows developers & protocols to access EPNS Protocol functionalities from within their backends and implement custom logic for notifications. This SDK also comes packed with tooling for easy debugging and testing of notifications through the ",(0,i.jsx)(n.em,{children:"simulate"})," object."]}),"\n",(0,i.jsxs)(n.p,{children:["Check-out our  ",(0,i.jsx)(n.a,{href:"https://github.com/ethereum-push-notification-service/backend-sdk-starter-code",children:(0,i.jsx)(n.strong,{children:"Starter guide to implementing the EPNS backend SDK"})}),(0,i.jsx)(n.strong,{children:"."})," The quickest way to get started using our SDK."]}),"\n",(0,i.jsx)(n.p,{children:"Here is how you can integrate the SDK to your back-end server:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 1:"})," Install the npm package"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"npm install @epnsproject/backend-sdk   \n//this is the package for our production environment**OR**npm install @epnsproject/backend-sdk-staging   \n//this is the package for our staging environment recommended for testing.\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 2:"})," Import the package."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'import EpnsSDK from "@epnsproject/backend-sdk"   \n// for production**OR**import EpnsSDK from "@epnsproject/backend-sdk-staging"   \n// for testing or development.\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 3:"})," Initialise the SDK instance."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"// the private key of the address which you used to create a channel  \nconst  CHANNEL\\_PK = '0x0000000000000000000000000000000000000000000000000000000000000fff';// Initialise the SDK  \nconst  epnsSdk = new EpnsSDK(CHANNEL\\_PK);const  CHANNEL\\_PK = '0x0000000000000000000000000000000000000000000000000000000000000fff'; // the private key of the address which you used to create a channel// Initialise the SDK  \nconst  epnsSdk = new EpnsSDK(CHANNEL\\_PK);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you are yet to create a channel you can proceed to ",(0,i.jsx)(n.a,{href:"http://staging-app.epns.io/",children:"our staging dapp"})," to create one or refer to our ",(0,i.jsx)(n.a,{href:"https://www.notion.so/epns/How-to-EPNS-853afe64839b4cdd8c63209342a783d0",children:"how-to guides"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 4:"})," Implement the notification logic whether it\u2019s on-chain or off-chain, based on which the notification is to be sent."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 5:"})," Let's send a notification!!"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"const tx = await sdk.sendNotification(  \n        recipientAddress,  \n        pushNotificationtitle,  \n        pushNotificationMessage,  \n        notificationTitle,  \n        notificationMessage,  \n        3, //this is the notificationType  \n        cta, // a url for users to be redirected to  \n        image ,// an image url, or an empty string  \n        null, //this can be left as null  \n      );\n"})}),"\n",(0,i.jsxs)(n.p,{children:["More details on the parameters for the backend SDK can be found in ",(0,i.jsx)(n.a,{href:"https://github.com/ethereum-push-notification-service/epns-backend-sdk-staging",children:"the documentation"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The owner of the address specified as the recipient can log into ",(0,i.jsx)(n.a,{href:"https://staging-app.epns.io/",children:"our staging"})," or ",(0,i.jsx)(n.a,{href:"http://app.epns.io/",children:"production environment"})," in order to see the notification received, or get our chrome extension or mobile application in order to receive the notification."]}),"\n",(0,i.jsxs)(n.p,{children:["For more complex logic in your notifications you can refer to ",(0,i.jsx)(n.a,{href:"https://github.com/ethereum-push-notification-service/epns-backend-sdk-staging",children:"the documentation"}),", or clone our ",(0,i.jsx)(n.a,{href:"https://github.com/ethereum-push-notification-service/backend-sdk-starter-code",children:"starter guide to implementing our backend SDK"})," which contains a working example."]}),"\n",(0,i.jsx)(n.h1,{id:"integrating-with-the-frontend-sdk",children:"Integrating with the Frontend SDK"}),"\n",(0,i.jsx)(n.p,{children:"Front-end SDK allows developers & protocols to integrate the notifications to their dApp or mobile app."}),"\n",(0,i.jsx)(n.p,{children:"The SDK comprises of three modules majorly:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Fetching notifications from the EPNS backend."}),"\n",(0,i.jsx)(n.li,{children:"Parsing the fetched notifications."}),"\n",(0,i.jsx)(n.li,{children:"Rendering the parsed notification on mobile and the web."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Here is how you can integrate your React Frontend Dapp with EPNS Decentralized notification service:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 1:"})," Install the npm package"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"npm install @epnsproject/frontend-sdk\n"})}),"\n",(0,i.jsx)(n.h2,{id:"fetching-the-notifications",children:"Fetching the notifications"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 2:"})," Import the just-installed package."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'import { api, utils, NotificationItem } from "@epnsproject/frontend-sdk"\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 3:"})," Define the required variables to make a request to fetch some notifications!"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'// define the variables required to make a request**const walletAddress = "0x1234567890abcdcdefghijklmnopqrstuvwxyz123";  \nconst pageNumber = 1;  \nconst itemsPerPage = 20;**\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 4:"})," Make a request to fetch some notifications!"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"//fetch the notifications**const fetchedNotifications = await api.fetchNotifications(walletAddress, itemsPerPage, pageNumber)  \nconsole.log(fetchedNotifications);**\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parsing-the-notifications",children:"Parsing the notifications"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 5:"})," The next step is to parse the just-fetched notifications, essentially converting the massive object we have you above into a more readable format."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"//parse the notification fetched**const parsedResponse = utils.parseApiResponse(fetchedNotifications.results);  \nconsole.log(parsedResponse);**\n"})}),"\n",(0,i.jsx)(n.h2,{id:"rendering-the-notifications",children:(0,i.jsx)(n.strong,{children:"Rendering the notifications"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 6:"})," Finally, we proceed to render the object above as a notification using JSX."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'// This is used to render the text present in a notification body as a JSX element**<NotificationItem  \nnotificationTitle="ETH Tracker - ETH at $3,235.16"  \nnotificationBody="\\\\\\[d:Summary & Latest Balance\\]\\\\n---------  \\\\n\\\\n\\[\u2795\\] \\[d:ETH: \\] \\[b:2.961\\] \\[t:ETH\\] \\[\\[dg:+-0.000 ETH\\]\\]\\[timestamp: 1630069200\\]"  \ncta="www.cta.com"  \n/>**\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"First image of How to Get Started with EPNS (for Devs!)",src:t(666893).Z+"",width:"1400",height:"651"})}),"\n",(0,i.jsx)(n.h1,{id:"subscribing-to-channels-from-your-own-dapp",children:"Subscribing to channels from your own DApp"}),"\n",(0,i.jsxs)(n.p,{children:["In order to implement signing we take advantage of ",(0,i.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-712",children:"EIP-712"})," (more details on the ",(0,i.jsx)(n.strong,{children:"signer"})," parameter can be found ",(0,i.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-712",children:"here"}),"), you can also take a look at our working ",(0,i.jsx)(n.a,{href:"https://github.com/ethereum-push-notification-service/epns-frontend-sdk-staging/blob/main/sample_codes/loadNotifications/src/App.js",children:"example"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 1:"})," Create a button component:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"<button onClick={epnsSubscribe}/>"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 2:"})," Implement the function to subscribe/unsubscribe to the channel:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'  \nimport {  \n  channels,  \n} from "[@epnsproject/frontend-sdk-staging](http://twitter.com/epnsproject/frontend-sdk-staging)";const epnsSubscribe = () => {  \n     await channels.optIn(  \n         [signer](https://docs.ethers.io/v5/api/signer/),  \n         channelAddress,  \n         chainId,  \n         userAddress,  \n         {  \n            onSuccess: () =>  // do something after success  \n         }  \n    )}  \nconst epnsUnSubscribe = () => {  \n     await channels.optOut(  \n         [signer](https://docs.ethers.io/v5/api/signer/),  \n         channelAddress,  \n         chainId,  \n         userAddress,  \n         {  \n            onSuccess: () =>  // do something after success  \n         }  \n    )}\n'})}),"\n",(0,i.jsx)(n.h1,{id:"mainnet-urls",children:"Mainnet URLs"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"EPNS dapp"})," -",(0,i.jsx)(n.a,{href:"https://app.epns.io/",children:"https://app.epns.io/"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Back-end SDK"})," - ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/@epnsproject/backend-sdk",children:"https://www.npmjs.com/package/@epnsproject/backend-sdk"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Front-end SDK"})," - ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/@epnsproject/frontend-sdk",children:"https://www.npmjs.com/package/@epnsproject/frontend-sdk"})]}),"\n",(0,i.jsx)(n.h1,{id:"testnet-urls",children:"Testnet URLs"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"EPNS Staging dapp"})," -",(0,i.jsx)(n.a,{href:"https://staging-app.epns.io/",children:"https://staging-app.epns.io/"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Back-end SDK Staging"})," - ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/@epnsproject/backend-sdk-staging",children:"https://www.npmjs.com/package/@epnsproject/backend-sdk-staging"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Front-end SDK Staging"})," -",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/@epnsproject/frontend-sdk-staging",children:"https://www.npmjs.com/package/@epnsproject/frontend-sdk-staging"})]}),"\n",(0,i.jsx)(n.h1,{id:"starter-repositories-urls",children:"Starter Repositories URLs"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Frontend SDK starter code"})," \u2014",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"https://github.com/ethereum-push-notification-service/epns-frontend-sdk-staging/tree/main/sample_codes/loadNotifications",children:"https://github.com/ethereum-push-notification-service/epns-frontend-sdk-staging/tree/main/sample_codes/loadNotifications"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Backend SDK starter code \u2014"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ethereum-push-notification-service/backend-sdk-starter-code",children:"https://github.com/ethereum-push-notification-service/backend-sdk-starter-code"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},514754:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/cover-image-81e314c31c518944e9e9f1d301b5420f.webp"},997450:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/cover-image-81e314c31c518944e9e9f1d301b5420f.webp"},666893:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/image-1-f5023ae096d28c74ff6b1c90d755d482.webp"},511151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var i=t(667294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);