"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[71170],{722169:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=i(474848),o=i(28453),s=i(334837);const r={id:"docs-notifications-playground-section",title:"Playground",hide_title:!0,slug:"./playground",displayed_sidebar:"pushNotificationSidebar",sidebar_position:103,image:"/assets/docs/previews/docs_notifications__section--playground.png"},c="Playground",a={id:"notifications/docs-notifications-playground-section",title:"Playground",description:"This section contains playgrounds that can help you understand the protocol and play with it's functionalities.",source:"@site/docs/notifications/103-Playground-Section.mdx",sourceDirName:"notifications",slug:"/notifications/playground",permalink:"/push-website/pr-preview/pr-939/docs/notifications/playground",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/notifications/103-Playground-Section.mdx",tags:[],version:"current",sidebarPosition:103,frontMatter:{id:"docs-notifications-playground-section",title:"Playground",hide_title:!0,slug:"./playground",displayed_sidebar:"pushNotificationSidebar",sidebar_position:103,image:"/assets/docs/previews/docs_notifications__section--playground.png"},sidebar:"pushNotificationSidebar",previous:{title:"Widget Themization",permalink:"/push-website/pr-preview/pr-939/docs/notifications/ui-components/widget-themization"},next:{title:"Push SDK Playground",permalink:"/push-website/pr-preview/pr-939/docs/notifications/playground/push-sdk-playground"}},d={},l=[];function u(t){const e={h1:"h1",p:"p",...(0,o.R)(),...t.components},{Head:i}=e;return i||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"playground",children:"Playground"}),"\n",(0,n.jsx)(e.p,{children:"This section contains playgrounds that can help you understand the protocol and play with it's functionalities."}),"\n",(0,n.jsx)(i,{children:(0,n.jsx)("title",{children:"Playground Section | Push Notifications | Push Documentation"})}),"\n","\n","\n",(0,n.jsx)(s.A,{})]})}function p(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(u,{...t})}):u(t)}},334837:(t,e,i)=>{i.d(e,{A:()=>y});i(296540);var n=i(618215),o=i(884142),s=i(175489),r=i(721312),c=i(320053);const a={cardContainer:"cardContainer_VPOR",cardTitle:"cardTitle_deVx",cardDescription:"cardDescription_crxe"};var d=i(486025),l=i(474848);function u(t){let{href:e,children:i}=t;return(0,l.jsx)(s.A,{href:(0,d.A)(e),className:(0,c.default)("card padding--lg",a.cardContainer),children:i})}function p(t){let{href:e,icon:i,title:n,description:o}=t;return(0,l.jsxs)(u,{href:(0,d.A)(e),children:[(0,l.jsxs)("h2",{className:(0,c.default)("text--truncate",a.cardTitle),title:n,children:[i," ",n]}),o&&(0,l.jsx)("p",{className:(0,c.default)("text--truncate",a.cardDescription),title:o,children:o})]})}function h(t){var e;let{item:i}=t;return(0,l.jsx)(p,{icon:"\ud83d\uddc3\ufe0f",title:i.label,description:null!==(e=i.description)&&void 0!==e?e:(0,r.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:i.items.length})})}function f(t){var e,i;let{item:n}=t;const s=(0,o.cC)(null!==(e=n.docId)&&void 0!==e?e:void 0);return(0,l.jsx)(p,{href:n.href,icon:"",title:n.label,description:null!==(i=n.description)&&void 0!==i?i:null==s?void 0:s.description})}function m(t){let{item:e}=t;switch(e.type){case"link":return(0,l.jsx)(f,{item:e});case"category":return(0,l.jsx)(h,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function g(t){let{className:e}=t;const i=(0,o.$S)();return(0,l.jsx)(y,{items:i.items,className:e})}function y(t){const{items:e,className:i}=t;if(!e)return(0,l.jsx)(g,{...t});const s=(0,o.d1)(e);return(0,l.jsx)("section",{className:(0,n.A)("row",i),children:s.map(((t,e)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(m,{item:t})},e)))})}},28453:(t,e,i)=>{i.d(e,{R:()=>r,x:()=>c});var n=i(296540);const o={},s=n.createContext(o);function r(t){const e=n.useContext(s);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:r(t.components),n.createElement(s.Provider,{value:e},t.children)}}}]);