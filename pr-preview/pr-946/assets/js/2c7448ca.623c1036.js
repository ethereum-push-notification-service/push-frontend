"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[69739],{72096:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=s(474848),n=s(28453),i=s(334837);const r={id:"docs-chat-message-types-section",title:"Message Types",hide_title:!0,slug:"./message-types",displayed_sidebar:"pushChatSidebar",sidebar_position:102,image:"/assets/docs/previews/docs_chat__section--message_types.png"},o="Intro to Message Types",c={id:"chat/docs-chat-message-types-section",title:"Message Types",description:"Each message of Push Chat is a json payload that carries with it a message type and some parameters that enable each frontend that integrates Push Chat to understand and display various message types.",source:"@site/docs/chat/102-Message-Types-Section.mdx",sourceDirName:"chat",slug:"/chat/message-types",permalink:"/push-website/pr-preview/pr-946/docs/chat/message-types",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/chat/102-Message-Types-Section.mdx",tags:[],version:"current",sidebarPosition:102,frontMatter:{id:"docs-chat-message-types-section",title:"Message Types",hide_title:!0,slug:"./message-types",displayed_sidebar:"pushChatSidebar",sidebar_position:102,image:"/assets/docs/previews/docs_chat__section--message_types.png"},sidebar:"pushChatSidebar",previous:{title:"All API Calls",permalink:"/push-website/pr-preview/pr-946/docs/chat/build/all-api-calls"},next:{title:"Text",permalink:"/push-website/pr-preview/pr-946/docs/chat/message-types/text"}},d={},l=[];function p(e){const t={code:"code",h1:"h1",p:"p",...(0,n.R)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"intro-to-message-types",children:"Intro to Message Types"}),"\n",(0,a.jsx)(t.p,{children:"Each message of Push Chat is a json payload that carries with it a message type and some parameters that enable each frontend that integrates Push Chat to understand and display various message types."}),"\n",(0,a.jsxs)(t.p,{children:["Push Chat supports an evergrowing list message types, all of which can be sent by ",(0,a.jsx)(t.code,{children:"chat.send"}),", though some require passing few additional parameters."]}),"\n",(0,a.jsx)(s,{children:(0,a.jsx)("title",{children:"Intro to Message Types | Push Chat | Push Documentation"})}),"\n","\n","\n",(0,a.jsx)(i.A,{})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},334837:(e,t,s)=>{s.d(t,{A:()=>y});s(296540);var a=s(618215),n=s(884142),i=s(175489),r=s(721312),o=s(320053);const c={cardContainer:"cardContainer_VPOR",cardTitle:"cardTitle_deVx",cardDescription:"cardDescription_crxe"};var d=s(486025),l=s(474848);function p(e){let{href:t,children:s}=e;return(0,l.jsx)(i.A,{href:(0,d.A)(t),className:(0,o.default)("card padding--lg",c.cardContainer),children:s})}function h(e){let{href:t,icon:s,title:a,description:n}=e;return(0,l.jsxs)(p,{href:(0,d.A)(t),children:[(0,l.jsxs)("h2",{className:(0,o.default)("text--truncate",c.cardTitle),title:a,children:[s," ",a]}),n&&(0,l.jsx)("p",{className:(0,o.default)("text--truncate",c.cardDescription),title:n,children:n})]})}function u(e){var t;let{item:s}=e;return(0,l.jsx)(h,{icon:"\ud83d\uddc3\ufe0f",title:s.label,description:null!==(t=s.description)&&void 0!==t?t:(0,r.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:s.items.length})})}function m(e){var t,s;let{item:a}=e;const i=(0,n.cC)(null!==(t=a.docId)&&void 0!==t?t:void 0);return(0,l.jsx)(h,{href:a.href,icon:"",title:a.label,description:null!==(s=a.description)&&void 0!==s?s:null==i?void 0:i.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(m,{item:t});case"category":return(0,l.jsx)(u,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function f(e){let{className:t}=e;const s=(0,n.$S)();return(0,l.jsx)(y,{items:s.items,className:t})}function y(e){const{items:t,className:s}=e;if(!t)return(0,l.jsx)(f,Object.assign({},e));const i=(0,n.d1)(t);return(0,l.jsx)("section",{className:(0,a.A)("row",s),children:i.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(g,{item:e})},t)))})}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>o});var a=s(296540);const n={},i=a.createContext(n);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);