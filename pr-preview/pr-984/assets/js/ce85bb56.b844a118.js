"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[67760],{178313:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=i(474848),n=i(28453),o=i(113490);const a={slug:"hello-world-buid-ling-a-working-epns-mobile-app",title:"Hello World: BUIDLing a working EPNS Mobile app",authors:["push"],image:"./cover-image.webp",text:"It\u2019s another day at EthGlobal HackMoney hackathon and we are back with more detail and further progress. While most of the dev project cycles start at smart contract and end at dApp, we have taken a different approach and instead are focusing on getting the EPNS mobile app and push notification server built out first.",tags:["Ethereum","Solidity","Ethglobal","Notifications","Developer"]},r=void 0,l={permalink:"/push-website/pr-preview/pr-984/blog/hello-world-buid-ling-a-working-epns-mobile-app",source:"@site/blog/2020-05-01-hello-world-buid-ling-a-working/index.md",title:"Hello World: BUIDLing a working EPNS Mobile app",description:"Cover Image of Hello World: BUIDLing a working EPNS Mobile app",date:"2020-05-01T00:00:00.000Z",formattedDate:"May 1, 2020",tags:[{label:"Ethereum",permalink:"/push-website/pr-preview/pr-984/blog/tags/ethereum"},{label:"Solidity",permalink:"/push-website/pr-preview/pr-984/blog/tags/solidity"},{label:"Ethglobal",permalink:"/push-website/pr-preview/pr-984/blog/tags/ethglobal"},{label:"Notifications",permalink:"/push-website/pr-preview/pr-984/blog/tags/notifications"},{label:"Developer",permalink:"/push-website/pr-preview/pr-984/blog/tags/developer"}],readingTime:2.3866666666666667,hasTruncateMarker:!0,authors:[{name:"Push Protocol",url:"https://twitter.com/pushprotocol",imageURL:"/assets/blog/authors/authorpush.png",key:"push"}],frontMatter:{slug:"hello-world-buid-ling-a-working-epns-mobile-app",title:"Hello World: BUIDLing a working EPNS Mobile app",authors:["push"],image:"./cover-image.webp",text:"It\u2019s another day at EthGlobal HackMoney hackathon and we are back with more detail and further progress. While most of the dev project cycles start at smart contract and end at dApp, we have taken a different approach and instead are focusing on getting the EPNS mobile app and push notification server built out first.",tags:["Ethereum","Solidity","Ethglobal","Notifications","Developer"]},unlisted:!1,prevItem:{title:"EPNS push notifications are never boring",permalink:"/push-website/pr-preview/pr-984/blog/epns-push-notifications-are-never-boring"},nextItem:{title:"Push Game Theory Explained",permalink:"/push-website/pr-preview/pr-984/blog/push-game-theory-explained"}},h={image:i(45315).A,authorsImageUrls:[void 0]},c=[{value:"Features",id:"features",level:3},{value:"Tech Specs",id:"tech-specs",level:3},{value:"Storing User Wallet Private Key (Offline on the User\u2019s Device)",id:"storing-user-wallet-private-key-offline-on-the-users-device",level:4},{value:"Mapping user\u2019s wallet address to device tokens",id:"mapping-users-wallet-address-to-device-tokens",level:4},{value:"Communicate with the epns server to verify and store these device tokens (mapped to wallet address)",id:"communicate-with-the-epns-server-to-verify-and-store-these-device-tokens-mapped-to-wallet-address",level:4},{value:"Handling Incoming Push Notifications",id:"handling-incoming-push-notifications",level:4},{value:"Fetching Previous Notifications of the User",id:"fetching-previous-notifications-of-the-user",level:4}];function p(e){const t={a:"a",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Cover Image of Hello World: BUIDLing a working EPNS Mobile app",src:i(604464).A+"",width:"1400",height:"700"})}),"\n",(0,s.jsxs)(t.p,{children:["It\u2019s another day at ",(0,s.jsx)(t.a,{href:"https://www.ethglobal.co/",children:"EthGlobal HackMoney hackathon"})," and we are back with more detail and further progress."]}),"\n",(0,s.jsx)(t.p,{children:"While most of the dev project cycles start at smart contract and end at dApp, we have taken a different approach and instead are focusing on getting the EPNS mobile app and push notification server built out first."}),"\n",(0,s.jsx)(t.p,{children:"The reasons? We are quite happy with the app specs and don\u2019t think that will change anytime soon while we wanted to think and iterate a bit more on smart contract so we choose this route. Without further ado, Let\u2019s dive into how we are going to create the magic in the mobile app."}),"\n",(0,s.jsx)(t.h3,{id:"features",children:"Features"}),"\n",(0,s.jsx)(t.p,{children:"The EPNS mobile app is built using react native and provides the following features:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"App should be able to receive push notifications."}),"\n",(0,s.jsx)(t.li,{children:"App should be able to connect the user\u2019s wallet (singular at the moment) in a secure manner."}),"\n",(0,s.jsx)(t.li,{children:"App should connect the user wallet to the push notification device tokens that are generated by Apple Push Notification Service or Android Push Notification Service."}),"\n",(0,s.jsx)(t.li,{children:"App should be able to send this information to the epns server in a secure format."}),"\n",(0,s.jsx)(t.li,{children:"App should be able to fetch user notifications (kind of like emails) that were already delivered to them."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Notification announcement Image",src:i(583792).A+"",width:"625",height:"468"}),"\n",(0,s.jsx)(o.Lv,{children:"We all get a notification, woohoo !!"})]}),"\n",(0,s.jsx)(t.h3,{id:"tech-specs",children:"Tech Specs"}),"\n",(0,s.jsxs)(t.p,{children:["Mobile push notifications use ",(0,s.jsx)(t.a,{href:"https://help.pushwoosh.com/hc/en-us/articles/360000364923-What-is-a-Device-token-",children:"device tokens"})," for registration of the device and the push notification server then sends out mass or specific messages using these device tokens. For EPNS to work, we need to register these device tokens as well as the wallet to which they belong to."]}),"\n",(0,s.jsx)(t.p,{children:"For the EPNS Service to work, the following modules need to be built:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Storing User Wallet Private Key (Offline on the User\u2019s Device)"}),"\n",(0,s.jsx)(t.li,{children:"Mapping user\u2019s wallet address to device tokens"}),"\n",(0,s.jsx)(t.li,{children:"Communicate with the epns server to verify and store these device tokens (mapped to wallet address)"}),"\n",(0,s.jsx)(t.li,{children:"Handling Incoming Push Notifications"}),"\n",(0,s.jsx)(t.li,{children:"Fetching Previous Notifications of the User"}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"storing-user-wallet-private-key-offline-on-the-users-device",children:"Storing User Wallet Private Key (Offline on the User\u2019s Device)"}),"\n",(0,s.jsx)(t.p,{children:"The app needs to store the user\u2019s wallet private key to decrypt the message received by the user and to encrypt the token registration process. This ensures that the epns server only maps the verified device tokens to the user wallet."}),"\n",(0,s.jsxs)(t.p,{children:["Furthermore, we need to provide either biometric or passcode based security to the user in the app since the app is storing sensitive user credentials. We will also be storing these user credentials in an encrypted format, we will mostly be using ",(0,s.jsx)(t.a,{href:"https://github.com/oblador/react-native-keychain",children:"React-Native-Keychain"})," for this."]}),"\n",(0,s.jsx)(t.h4,{id:"mapping-users-wallet-address-to-device-tokens",children:"Mapping user\u2019s wallet address to device tokens"}),"\n",(0,s.jsx)(t.p,{children:"Once a user has imported the wallet, the device tokens which are generated would be mapped to the wallet of the user."}),"\n",(0,s.jsx)(t.h4,{id:"communicate-with-the-epns-server-to-verify-and-store-these-device-tokens-mapped-to-wallet-address",children:"Communicate with the epns server to verify and store these device tokens (mapped to wallet address)"}),"\n",(0,s.jsxs)(t.p,{children:["We will mostly be using ",(0,s.jsx)(t.a,{href:"https://github.com/pubkey/eth-crypto",children:"Eth-Crypto"})," to handle the secure verification process."]}),"\n",(0,s.jsxs)(t.p,{children:["Current proposal is to send the operation code as ",(0,s.jsx)("b",{children:"Register"})," along with the device token as the signature of the user using the above library and the public wallet address. The server will first decrypt the hash to find the public wallet address of the user and will only proceed if the public wallet address sent matches with the decrypted address of the public wallet. This ensures that spoofing can\u2019t be done by any user to receive notifications meant for the intended recipients."]}),"\n",(0,s.jsxs)(t.p,{children:["To know more about the server and it\u2019s architecture, please head to [",(0,s.jsx)(t.a,{href:"https://github.com/ethereum-push-notification-system",children:"epns-push-notification-server repo"}),"]"]}),"\n",(0,s.jsx)(t.h4,{id:"handling-incoming-push-notifications",children:"Handling Incoming Push Notifications"}),"\n",(0,s.jsx)(t.p,{children:"The push notification handling (for when the app is open) will also be built to handle notifications received by the users when they are inside the app."}),"\n",(0,s.jsx)(t.h4,{id:"fetching-previous-notifications-of-the-user",children:"Fetching Previous Notifications of the User"}),"\n",(0,s.jsx)(t.p,{children:"TBA. We are still contemplating storing a cache on the epns server or handle it alternatively, community brainstorming is welcome :)"}),"\n",(0,s.jsxs)(t.p,{children:["TLDR; try out the (not so complete work in progress) ",(0,s.jsx)(t.a,{href:"https://github.com/ethereum-push-notification-system/epns-mobile-app",children:"react native"})," app."]}),"\n",(0,s.jsx)(t.p,{children:"Please feel free to share your support and amazing feedback. If you liked this article, consider reading our previous posts as well!"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://medium.com/@epnsdapp/building-ethereum-protocol-notification-system-d406f0efdba0",children:"EPNS General specs"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://medium.com/@epnsdapp/epns-game-theory-explained-25425bbe4eae",children:"EPNS Game theory"})}),"\n",(0,s.jsx)(t.p,{children:"Connect with us if you have any questions!"})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},45315:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/cover-image-5f410054272f99221ba0a2a927cd460c.webp"},604464:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/cover-image-5f410054272f99221ba0a2a927cd460c.webp"},583792:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/image-1-1116a57c7b82892a0f405a8dfc0540b2.webp"},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>r});var s=i(296540);const n={},o=s.createContext(n);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);