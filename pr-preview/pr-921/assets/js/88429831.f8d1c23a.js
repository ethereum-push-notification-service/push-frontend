"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[30794],{734889:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var i=s(474848),n=s(28453),o=s(113490),r=s(334837);const c={id:"docs-notifications-push-smart-contracts-section",title:"Push Smart Contracts",hide_title:!0,slug:"./push-smart-contracts",displayed_sidebar:"pushNotificationSidebar",sidebar_position:108,image:"/assets/docs/previews/docs_notifications__section--push_smart_contracts.png"},a="Push Smart Contracts Overview",d={id:"notifications/docs-notifications-push-smart-contracts-section",title:"Push Smart Contracts",description:"This is an advance concept section. You will be interacting mostly with Push SDK to do everything, all of which is gasless with only smart contracts native notifications relying on some of these concepts.",source:"@site/docs/notifications/108-Push-Smart-Contracts-Section.mdx",sourceDirName:"notifications",slug:"/notifications/push-smart-contracts",permalink:"/push-website/pr-preview/pr-921/docs/notifications/push-smart-contracts",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/notifications/108-Push-Smart-Contracts-Section.mdx",tags:[],version:"current",sidebarPosition:108,frontMatter:{id:"docs-notifications-push-smart-contracts-section",title:"Push Smart Contracts",hide_title:!0,slug:"./push-smart-contracts",displayed_sidebar:"pushNotificationSidebar",sidebar_position:108,image:"/assets/docs/previews/docs_notifications__section--push_smart_contracts.png"},sidebar:"pushNotificationSidebar",previous:{title:"Notification Standards (Advance)",permalink:"/push-website/pr-preview/pr-921/docs/notifications/notification-standards/notification-standards-advance"},next:{title:"Push Core Contract",permalink:"/push-website/pr-preview/pr-921/docs/notifications/push-smart-contracts/core-smart-contract"}},l={},u=[];function h(t){const e={admonition:"admonition",h1:"h1",p:"p",strong:"strong",...(0,n.R)(),...t.components},{Head:s}=e;return s||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"push-smart-contracts-overview",children:"Push Smart Contracts Overview"}),"\n",(0,i.jsxs)(e.admonition,{type:"important",children:[(0,i.jsx)(e.p,{children:"This is an advance concept section. You will be interacting mostly with Push SDK to do everything, all of which is gasless with only smart contracts native notifications relying on some of these concepts."}),(0,i.jsxs)(e.p,{children:["All smart contracts related to Push protocol are hosted at ",(0,i.jsx)(o.Yo,{href:"https://github.com/push-protocol/push-smart-contracts",title:"Review Push protocol github repo",children:"Push protocol github repo"})]})]}),"\n",(0,i.jsx)(s,{children:(0,i.jsx)("title",{children:"Push smart contracts section | Push Notifications | Push Documentation"})}),"\n","\n",(0,i.jsx)(e.p,{children:"In order for the protocol to be chain-agnostic as well as truly decentralized, Push smart contracts play a major role."}),"\n",(0,i.jsxs)(e.p,{children:["The Push smart contracts are divided into two different smart contracts \u2014 ",(0,i.jsx)(e.strong,{children:"Push Core & Push Communicator"}),"."]}),"\n","\n","\n",(0,i.jsx)(r.A,{})]})}function p(t={}){const{wrapper:e}={...(0,n.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(h,{...t})}):h(t)}},334837:(t,e,s)=>{s.d(e,{A:()=>g});s(296540);var i=s(618215),n=s(884142),o=s(175489),r=s(721312),c=s(320053);const a={cardContainer:"cardContainer_VPOR",cardTitle:"cardTitle_deVx",cardDescription:"cardDescription_crxe"};var d=s(486025),l=s(474848);function u(t){let{href:e,children:s}=t;return(0,l.jsx)(o.A,{href:(0,d.A)(e),className:(0,c.default)("card padding--lg",a.cardContainer),children:s})}function h(t){let{href:e,icon:s,title:i,description:n}=t;return(0,l.jsxs)(u,{href:(0,d.A)(e),children:[(0,l.jsxs)("h2",{className:(0,c.default)("text--truncate",a.cardTitle),title:i,children:[s," ",i]}),n&&(0,l.jsx)("p",{className:(0,c.default)("text--truncate",a.cardDescription),title:n,children:n})]})}function p(t){var e;let{item:s}=t;return(0,l.jsx)(h,{icon:"\ud83d\uddc3\ufe0f",title:s.label,description:null!==(e=s.description)&&void 0!==e?e:(0,r.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:s.items.length})})}function m(t){var e,s;let{item:i}=t;const o=(0,n.cC)(null!==(e=i.docId)&&void 0!==e?e:void 0);return(0,l.jsx)(h,{href:i.href,icon:"",title:i.label,description:null!==(s=i.description)&&void 0!==s?s:null==o?void 0:o.description})}function f(t){let{item:e}=t;switch(e.type){case"link":return(0,l.jsx)(m,{item:e});case"category":return(0,l.jsx)(p,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function x(t){let{className:e}=t;const s=(0,n.$S)();return(0,l.jsx)(g,{items:s.items,className:e})}function g(t){const{items:e,className:s}=t;if(!e)return(0,l.jsx)(x,{...t});const o=(0,n.d1)(e);return(0,l.jsx)("section",{className:(0,i.A)("row",s),children:o.map(((t,e)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(f,{item:t})},e)))})}},28453:(t,e,s)=>{s.d(e,{R:()=>r,x:()=>c});var i=s(296540);const n={},o=i.createContext(n);function r(t){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:r(t.components),i.createElement(o.Provider,{value:e},t.children)}}}]);