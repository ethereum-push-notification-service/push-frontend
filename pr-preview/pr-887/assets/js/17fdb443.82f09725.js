"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[48448],{120345:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>h,toc:()=>d});var o=i(474848),t=i(28453),s=i(113490),a=i(671269);const r={id:"docs-notifications-tutorial-enabling-channel-on-other-chains",title:"Enabling channel on other chains",hide_title:!0,slug:"./enabling-channel-on-other-chains",displayed_sidebar:"pushNotificationSidebar",sidebar_position:2,image:"/assets/docs/previews/docs_notifications_tutorial--enabling_channel_on_other_chains.png"},l="Enabling your channel on other chains",h={id:"notifications/tutorials/docs-notifications-tutorial-enabling-channel-on-other-chains",title:"Enabling channel on other chains",description:"The protocol is designed to enable your channel to send notifications on multiple chains, instead of only Ethereum.",source:"@site/docs/notifications/05-tutorials/02-Tutorial-Enabling-Channel-Other-Chains.mdx",sourceDirName:"notifications/05-tutorials",slug:"/notifications/tutorials/enabling-channel-on-other-chains",permalink:"/push-website/pr-preview/pr-887/docs/notifications/tutorials/enabling-channel-on-other-chains",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/notifications/05-tutorials/02-Tutorial-Enabling-Channel-Other-Chains.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"docs-notifications-tutorial-enabling-channel-on-other-chains",title:"Enabling channel on other chains",hide_title:!0,slug:"./enabling-channel-on-other-chains",displayed_sidebar:"pushNotificationSidebar",sidebar_position:2,image:"/assets/docs/previews/docs_notifications_tutorial--enabling_channel_on_other_chains.png"},sidebar:"pushNotificationSidebar",previous:{title:"Creating your channel",permalink:"/push-website/pr-preview/pr-887/docs/notifications/tutorials/create-your-channel"},next:{title:"Advance - Create your channel using Safe",permalink:"/push-website/pr-preview/pr-887/docs/notifications/tutorials/create-your-channel-using-safe"}},c={},d=[{value:"How to set up Channel Alias?",id:"how-to-set-up-channel-alias",level:2},{value:"Setting channel alias for different chain (Example: Polygon)",id:"setting-channel-alias-for-different-chain-example-polygon",level:2},{value:"Channel Verification on Alias Network",id:"channel-verification-on-alias-network",level:3},{value:"Step-by-Step Guide to Alias Verification",id:"step-by-step-guide-to-alias-verification",level:3},{value:"Supported chains for Channel Alias",id:"supported-chains-for-channel-alias",level:2}];function p(n){const e={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.R)(),...n.components},{Head:i}=e;return i||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"enabling-your-channel-on-other-chains",children:"Enabling your channel on other chains"}),"\n",(0,o.jsx)(e.p,{children:"The protocol is designed to enable your channel to send notifications on multiple chains, instead of only Ethereum."}),"\n",(0,o.jsxs)(e.p,{children:["However, to enable a channel for sending notifications on chains other than Ethereum, the concept of ",(0,o.jsx)(e.strong,{children:"channel alias"})," plays a major role."]}),"\n",(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsxs)(e.p,{children:["Check out this section to get an introduction to ",(0,o.jsx)(e.a,{href:"/docs/notifications/concepts/push-notifications-for-web3/#what-is-a-channel-alias",title:"Section covering about channel alias and some important concepts of Push protocol",children:"channel alias"})]})}),"\n",(0,o.jsx)(i,{children:(0,o.jsx)("title",{children:"Enabling notification on other chains | Tutorial | Push Notifications | Push\n  Documentation"})}),"\n","\n","\n",(0,o.jsx)(e.h2,{id:"how-to-set-up-channel-alias",children:"How to set up Channel Alias?"}),"\n",(0,o.jsx)(e.p,{children:"Now that we understand channel alias, it's time to understand how one set up their channel alias address for any other chain."}),"\n",(0,o.jsx)(e.p,{children:"In order to set up a channel alias address for any preferred chain, one has to go through 2 simple steps:"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["Selecting the chain and providing the right ",(0,o.jsx)(e.strong,{children:"alias address"})," for the channel during channel creation itself."]}),"\n",(0,o.jsx)(e.li,{children:"Verification of the alias Address on the selected chain."}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["While the first step is quite simple and happens right at the time of channel creation itself, let's try to understand how the alias verification procedure is completed to adequately set up a channel's alias, using a quick example of the ",(0,o.jsx)(e.strong,{children:"Polygon chain"}),"."]}),"\n",(0,o.jsx)(e.h2,{id:"setting-channel-alias-for-different-chain-example-polygon",children:"Setting channel alias for different chain (Example: Polygon)"}),"\n",(0,o.jsxs)(e.admonition,{type:"caution",children:[(0,o.jsx)(e.p,{children:"This part of the guide assumes that you have successfully created a channel and passed the correct Polygon address as the alias address during the channel creation process."}),(0,o.jsxs)(e.p,{children:["If you haven't set up your channel yet, please read ",(0,o.jsx)(s.Yo,{href:"/docs/notifications/tutorials/create-your-channel/",title:"Tutorial for creating your channel on Push protocol",children:"guide to creating your channel"})," first. It's improtant to create your channel with the right alias address since alias can't be changed after channel creation."]})]}),"\n",(0,o.jsx)(e.p,{children:"Now that you have the channel created successfully on the Ethereum chain, and you have passed your preferred alias address for the Polygon chain, let's quickly understand how you can verify your alias address."}),"\n",(0,o.jsx)(e.h3,{id:"channel-verification-on-alias-network",children:"Channel Verification on Alias Network"}),"\n",(0,o.jsx)(e.p,{children:"In order to ensure that the alias address provided (during channel creation) actually belongs to the owner of the channel, alias verification is included as a part of the channel creation procedure."}),"\n",(0,o.jsx)(e.p,{children:"Additionally, a channel owner can only use his alias address to communicate with its subscribers on Polygon after the alias verification is successfully executed on the Polygon chain itself."}),"\n",(0,o.jsx)(e.h3,{id:"step-by-step-guide-to-alias-verification",children:"Step-by-Step Guide to Alias Verification"}),"\n",(0,o.jsx)(e.p,{children:"Verification of alias address must happen on the selected chain (in this case, Polygon) itself. Therefore, once your channel is successfully created on Ethereum, you need to switch your network to Polygon."}),"\n",(0,o.jsx)(e.admonition,{type:"info",children:(0,o.jsxs)(e.p,{children:["Make sure you have already added the Polygon network to your MetaMask. ",(0,o.jsx)(e.a,{href:"https://wiki.polygon.technology/docs/tools/wallets/metamask/config-polygon-on-metamask/",children:"This guide from Polygon"})," helps in case you don't how to add other networks to your MetaMask."]})}),"\n",(0,o.jsx)(e.p,{children:"Once you have switched your network to Polygon chain, follow the steps mentioned below:"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["Log into the Push dApp with the same address that was set as ",(0,o.jsx)(e.strong,{children:"alias address"})," during channel creation."]}),"\n",(0,o.jsxs)(e.li,{children:["Go to the ",(0,o.jsx)(e.strong,{children:"Developers > Create Channel"})," from the sidebar."]}),"\n",(0,o.jsxs)(e.li,{children:["Click the ",(0,o.jsx)(e.strong,{children:"Verify channel alias"})," button."]}),"\n",(0,o.jsx)(e.li,{children:"Approve the transaction required for Alias Verification, on Polygon chain"}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"That's it. Once the transaction is approved, your alias address is verified on Polygon and is now successfully set up and linked with your channel on the Ethereum chain."}),"\n",(0,o.jsx)(e.p,{children:"You will now be able to access your channel profile page and be able to send notifications from Polygon using your alias address."}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Video Guide for Alias Verification on Polygon Chain \ud83d\udc47"})}),"\n",(0,o.jsx)(a.A,{embedURL:"https://www.loom.com/embed/43c6b7d000b64dbbba2cd7a0165c5041?sid=10da4024-876d-4591-a253-7325d5458fc1"}),"\n",(0,o.jsx)(e.h2,{id:"supported-chains-for-channel-alias",children:"Supported chains for Channel Alias"}),"\n",(0,o.jsx)(e.p,{children:"Push protocol supports a number of different chains (EVMs) for setting channel aliases for notifications \u2014"}),"\n",(0,o.jsxs)(s.Bs,{children:[(0,o.jsx)(s.N4,{flexDirection:"column",maxWidth:"200px",onClick:()=>window.open("https://ethereum.org/","_blank"),children:(0,o.jsx)(s.FQ,{children:(0,o.jsxs)("span",{children:[(0,o.jsx)(e.p,{children:"Ethereum"}),(0,o.jsx)("svg",{width:"20",height:"28",viewBox:"0 0 29 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"m7.501 21.001 14-14M10.125 7.001H21.5v11.375",stroke:"#A0A3B1","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})})]})})})," ",(0,o.jsx)(s.N4,{flexDirection:"column",maxWidth:"200px",onClick:()=>window.open("https://polygon.technology/","_blank"),children:(0,o.jsx)(s.FQ,{children:(0,o.jsxs)("span",{children:[(0,o.jsx)(e.p,{children:"Polygon"}),(0,o.jsx)("svg",{width:"20",height:"28",viewBox:"0 0 29 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"m7.501 21.001 14-14M10.125 7.001H21.5v11.375",stroke:"#A0A3B1","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})})]})})})," ",(0,o.jsx)(s.N4,{flexDirection:"column",maxWidth:"200px",onClick:()=>window.open("https://www.bnbchain.org/en","_blank"),children:(0,o.jsx)(s.FQ,{children:(0,o.jsxs)("span",{children:[(0,o.jsx)(e.p,{children:"BNB"}),(0,o.jsx)("svg",{width:"20",height:"28",viewBox:"0 0 29 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"m7.501 21.001 14-14M10.125 7.001H21.5v11.375",stroke:"#A0A3B1","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})})]})})})," ",(0,o.jsx)(s.N4,{flexDirection:"column",maxWidth:"200px",onClick:()=>window.open("https://polygon.technology/","_blank"),children:(0,o.jsx)(s.FQ,{children:(0,o.jsxs)("span",{children:[(0,o.jsx)(e.p,{children:"Polygon zkEVM"}),(0,o.jsx)("svg",{width:"20",height:"28",viewBox:"0 0 29 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"m7.501 21.001 14-14M10.125 7.001H21.5v11.375",stroke:"#A0A3B1","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})})]})})}),(0,o.jsx)(s.N4,{flexDirection:"column",maxWidth:"200px",onClick:()=>window.open("https://arbitrum.io/","_blank"),children:(0,o.jsx)(s.FQ,{children:(0,o.jsxs)("span",{children:[(0,o.jsx)(e.p,{children:"Arbitrum One"}),(0,o.jsx)("svg",{width:"20",height:"28",viewBox:"0 0 29 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"m7.501 21.001 14-14M10.125 7.001H21.5v11.375",stroke:"#A0A3B1","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})})]})})})]})]})}function u(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(p,{...n})}):p(n)}},671269:(n,e,i)=>{i.d(e,{A:()=>a});i(296540);var o=i(944404),t=i(474848);const s=o.Ay.div.withConfig({displayName:"LoomEmbed__LoomWrapper",componentId:"sc-lg5kbk-0"})(["padding-bottom:56.25%;position:relative;& iframe{position:absolute;}"]),a=n=>{let{embedURL:e}=n;return(0,t.jsx)(s,{children:(0,t.jsx)("iframe",{src:e,frameBorder:"0",allowFullScreen:!0,style:{width:"100%",height:"100%",display:"block",margin:"auto",border:"none"}})})}},28453:(n,e,i)=>{i.d(e,{R:()=>a,x:()=>r});var o=i(296540);const t={},s=o.createContext(t);function a(n){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),o.createElement(s.Provider,{value:e},n.children)}}}]);