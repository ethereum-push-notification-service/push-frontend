"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[93702],{247790:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>c,metadata:()=>a,toc:()=>p});var n=i(474848),o=i(28453),s=i(334837);const c={id:"docs-notifications-ui-components-section",title:"UI Components",hide_title:!0,slug:"./ui-components",displayed_sidebar:"pushNotificationSidebar",sidebar_position:102,image:"/assets/docs/previews/docs_notifications__section--ui_components.png"},r="UI Components",a={id:"notifications/docs-notifications-ui-components-section",title:"UI Components",description:"This Section will show you how you can easily integrate Notification UI widgets, SubscriptionManager in your dapp with just few lines of code using our components from @pushprotocol/uiweb",source:"@site/docs/notifications/102-UI-Components-Section.mdx",sourceDirName:"notifications",slug:"/notifications/ui-components",permalink:"/push-website/pr-preview/pr-858/docs/notifications/ui-components",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/notifications/102-UI-Components-Section.mdx",tags:[],version:"current",sidebarPosition:102,frontMatter:{id:"docs-notifications-ui-components-section",title:"UI Components",hide_title:!0,slug:"./ui-components",displayed_sidebar:"pushNotificationSidebar",sidebar_position:102,image:"/assets/docs/previews/docs_notifications__section--ui_components.png"},sidebar:"pushNotificationSidebar",previous:{title:"Integrating Notifications",permalink:"/push-website/pr-preview/pr-858/docs/notifications/build/integrating-notifications"},next:{title:"WidgetUIProvider",permalink:"/push-website/pr-preview/pr-858/docs/notifications/ui-components/widgetuiprovider"}},d={},p=[];function u(e){const t={a:"a",code:"code",em:"em",h1:"h1",p:"p",...(0,o.R)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"ui-components",children:"UI Components"}),"\n",(0,n.jsxs)(t.p,{children:["This Section will show you how you can easily integrate Notification UI widgets, SubscriptionManager in your dapp with just few lines of code using our components from ",(0,n.jsx)(t.code,{children:"@pushprotocol/uiweb"})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:(0,n.jsx)(t.code,{children:"Note"})})," - If you're using Next.js to integrate UI Components, we recommend using ",(0,n.jsx)(t.code,{children:"Next.js 13"})," with the latest ",(0,n.jsx)(t.a,{href:"https://nextjs.org/docs/app",children:"App Router"}),"."]}),"\n",(0,n.jsx)(i,{children:(0,n.jsx)("title",{children:"UI Components | Push Notifications | Push Documentation"})}),"\n","\n","\n",(0,n.jsx)(s.A,{})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},334837:(e,t,i)=>{i.d(t,{A:()=>x});i(296540);var n=i(618215),o=i(884142),s=i(175489),c=i(721312),r=i(320053);const a={cardContainer:"cardContainer_VPOR",cardTitle:"cardTitle_deVx",cardDescription:"cardDescription_crxe"};var d=i(474848);function p(e){let{href:t,children:i}=e;return(0,d.jsx)(s.A,{href:t,className:(0,r.default)("card padding--lg",a.cardContainer),children:i})}function u(e){let{href:t,icon:i,title:n,description:o}=e;return(0,d.jsxs)(p,{href:t,children:[(0,d.jsxs)("h2",{className:(0,r.default)("text--truncate",a.cardTitle),title:n,children:[i," ",n]}),o&&(0,d.jsx)("p",{className:(0,r.default)("text--truncate",a.cardDescription),title:o,children:o})]})}function l(e){var t;let{item:i}=e;return(0,d.jsx)(u,{icon:"\ud83d\uddc3\ufe0f",title:i.label,description:null!==(t=i.description)&&void 0!==t?t:(0,c.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:i.items.length})})}function m(e){var t,i;let{item:n}=e;const s=(0,o.cC)(null!==(t=n.docId)&&void 0!==t?t:void 0);return(0,d.jsx)(u,{href:n.href,icon:"",title:n.label,description:null!==(i=n.description)&&void 0!==i?i:null==s?void 0:s.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(m,{item:t});case"category":return(0,d.jsx)(l,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const i=(0,o.$S)();return(0,d.jsx)(x,{items:i.items,className:t})}function x(e){const{items:t,className:i}=e;if(!t)return(0,d.jsx)(f,{...e});const s=(0,o.d1)(t);return(0,d.jsx)("section",{className:(0,n.A)("row",i),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:e})},t)))})}},28453:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>r});var n=i(296540);const o={},s=n.createContext(o);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);