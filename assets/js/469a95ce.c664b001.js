"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[17106],{831313:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var i=n(785893),t=n(511151);n(23734);const r={slug:"push-game-theory-explained",title:"Push Game Theory Explained",authors:["push"],image:"./cover-image.webp",text:"In this post, we cover Push in more detail and explain the game theory used in its design.",tags:["Game Theory","Blockchain","Design","Notifications","Blog"]},o=void 0,a={permalink:"/blog/push-game-theory-explained",source:"@site/blog/2020-04-26-push-game-theory-explained/index.md",title:"Push Game Theory Explained",description:"Cover Image Push Game Theory Explained",date:"2020-04-26T00:00:00.000Z",formattedDate:"April 26, 2020",tags:[{label:"Game Theory",permalink:"/blog/tags/game-theory"},{label:"Blockchain",permalink:"/blog/tags/blockchain"},{label:"Design",permalink:"/blog/tags/design"},{label:"Notifications",permalink:"/blog/tags/notifications"},{label:"Blog",permalink:"/blog/tags/blog"}],readingTime:1.92,hasTruncateMarker:!0,authors:[{name:"Push Protocol",url:"https://twitter.com/pushprotocol",imageURL:"/assets/blog/authors/authorpush.png",key:"push"}],frontMatter:{slug:"push-game-theory-explained",title:"Push Game Theory Explained",authors:["push"],image:"./cover-image.webp",text:"In this post, we cover Push in more detail and explain the game theory used in its design.",tags:["Game Theory","Blockchain","Design","Notifications","Blog"]},unlisted:!1,prevItem:{title:"Hello World: BUIDLing a working EPNS Mobile app",permalink:"/blog/hello-world-buid-ling-a-working-epns-mobile-app"},nextItem:{title:"Building Ethereum Push Notification Service protocol",permalink:"/blog/building-ethereum-push-notification-service-protocol"}},l={image:n(63295).Z,authorsImageUrls:[void 0]},h=[];function c(e){const s={img:"img",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Cover Image Push Game Theory Explained",src:n(76875).Z+"",width:"1334",height:"750"})}),"\n",(0,i.jsx)(s.p,{children:"In this post, we cover Push in more detail and explain the game theory used in its design."}),"\n",(0,i.jsx)(s.p,{children:"Push provides a easy and simple way to send notifications to users by different Channel Owners (App Owners). Notifications can be sent via the web, mobile, and Web3.0 providers like Metamask. To ensure consistent messaging throughout the project we have created the following nomenclature of terms, roles that will be used in the rest of the project lifecycle."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Contract Owner \u2014 The owner of the contract, specifically the address by whom the contract is deployed."}),"\n",(0,i.jsxs)(s.li,{children:["App Owner \u2014 Referred to as ",(0,i.jsx)("b",{children:"Channel Owners"}),". The third-party projects, dApps or smart contract, specifically the address which form their identity as well as the custom opt-in group that the subscribed users will receive message from."]}),"\n",(0,i.jsx)(s.li,{children:"Users \u2014 All the users who don\u2019t fall in either of the above categories."}),"\n",(0,i.jsxs)(s.li,{children:["App Owner Group \u2014 Referred to as ",(0,i.jsx)("b",{children:"Channel"}),". The group which contains subscribed users of a particular channel."]}),"\n",(0,i.jsx)(s.li,{children:"Subscribed Users \u2014 The users who have subscribed to a specific channel."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"For the purpose of explaining the above EPNS terms, let\u2019s take the example of Youtube and the various associated roles."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Youtube \u2014 Contract Owner"}),"\n",(0,i.jsx)(s.li,{children:"Channels \u2014 App Owner Groups"}),"\n",(0,i.jsx)(s.li,{children:"Channel Owners \u2014 App Owners"}),"\n",(0,i.jsx)(s.li,{children:"Users \u2014 Users"}),"\n",(0,i.jsx)(s.li,{children:"Subscribed Users \u2014 Users subscribed to a specific App owner group"}),"\n"]}),"\n",(0,i.jsx)("b",{children:"Game Theory -- Push"}),"\n",(0,i.jsx)(s.p,{children:"In order to ensure the proper participation of all roles, following game theory is proposed, features marked with *** will mostly be excluded from the upcoming MVP:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)("b",{children:"contract owner"})," doesn\u2019t have any ability to send messages on behalf of ",(0,i.jsx)("b",{children:"channel owners"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)("b",{children:"channel owners"})," might spoof other trusted apps and thus will have to be verified or a spam system developed so that users can mark them as spoof or a similar mechanism."]}),"\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)("b",{children:"channel owners"})," need explicit permission from the users before messages can be sent to them."]}),"\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)("b",{children:"channel owners"})," need to stake some minimum DAI to ensure a spam-free environment, this is going to be minimal but good enough to ascertain good behavior (for example, 50 DAI)."]}),"\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)("b",{children:"users"})," need to transact on blockchain to specifically subscribe or unsubscribe to a channel, this leads to an incentive issue, ie: why would a user spend gas in most cases?"]}),"\n",(0,i.jsxs)(s.li,{children:["To counter this, The staked DAI from ",(0,i.jsx)("b",{children:"channel owners"})," can inturn be used as an incentive for ",(0,i.jsx)("b",{children:"users"})," to subscribe to the specific channel."]}),"\n",(0,i.jsx)(s.li,{children:"This can be done by using services like AAVE to accrue interest on the said DAI and distribute it to the subscribed users group."}),"\n",(0,i.jsx)(s.li,{children:"This incentivizes the users to spend gas to perform \u201csubscribe\u201d transaction operation."}),"\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)("b",{children:"channel owners"})," can stake more DAI if they want to since the users are incentivized to subscribe."]}),"\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)("b",{children:"channel owner"})," can blacklist a certain user from their channel if they want to."]}),"\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)("b",{children:"channel owners"})," can reclaim this DAI back, reclaiming this DAI will also destroy the channel, a fee of 10 DAI will also be held back for the ",(0,i.jsx)("b",{children:"contract owner"}),", the fees is small enough for serious players to not worry about but will act as a further deterrent for bad players."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"We would love to hear your feedback and ideas to better the overall experience. Stay tuned for more updates!"})]})}function d(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},63295:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/cover-image-dcf4d4a2b63a8e55fe306bfdd9ff7d16.webp"},76875:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/cover-image-dcf4d4a2b63a8e55fe306bfdd9ff7d16.webp"},511151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>o});var i=n(667294);const t={},r=i.createContext(t);function o(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);