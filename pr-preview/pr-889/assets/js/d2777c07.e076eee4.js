"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[73294],{623352:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=s(474848),n=s(28453),a=s(411470),i=s(119365);const l={id:"docs-chat-message-type-text",title:"Text",hide_title:!0,slug:"./text",displayed_sidebar:"pushChatSidebar",sidebar_position:1,image:"/assets/docs/previews/docs_chat_message_type--text.png"},o="Message type - Text",c={id:"chat/message-types/docs-chat-message-type-text",title:"Text",description:"Enables sending simple text messages to the recipient.",source:"@site/docs/chat/02-message-types/01-Message-Type-Text.mdx",sourceDirName:"chat/02-message-types",slug:"/chat/message-types/text",permalink:"/push-website/pr-preview/pr-889/docs/chat/message-types/text",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/chat/02-message-types/01-Message-Type-Text.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"docs-chat-message-type-text",title:"Text",hide_title:!0,slug:"./text",displayed_sidebar:"pushChatSidebar",sidebar_position:1,image:"/assets/docs/previews/docs_chat_message_type--text.png"},sidebar:"pushChatSidebar",previous:{title:"Message Types",permalink:"/push-website/pr-preview/pr-889/docs/chat/message-types"},next:{title:"Image",permalink:"/push-website/pr-preview/pr-889/docs/chat/message-types/image"}},d={},u=[{value:"Customization parameters",id:"customization-parameters",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"message-type---text",children:"Message type - Text"}),"\n",(0,r.jsx)(t.p,{children:"Enables sending simple text messages to the recipient."}),"\n",(0,r.jsx)(s,{children:(0,r.jsx)("title",{children:"Message Type - Text | Push Chat | Push Documentation"})}),"\n","\n","\n",(0,r.jsx)(a.A,{className:"codetabs",groupId:"code-examples",children:(0,r.jsx)(i.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"// userAlice.chat.send(recipient, message)\n// This section focuses on customization parameters for 'message' object\nconst aliceMessagesBob = await userAlice.chat.send(recipient, {\n  type: 'Text',\n  content: 'Hello Bob!',\n});\n"})})})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"customization-parameters",children:"Customization parameters"}),"\n",(0,r.jsx)(t.p,{children:"When sending a message, you can customize the following params"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Subtype"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Remarks"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.em,{children:(0,r.jsx)(t.code,{children:"recipient"})})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"/docs/chat/supported-wallet-standards/",title:"Supported wallet standards for Push Chat",children:"Recipient supports a number of address format"})," including wallet address, chain agnostic wallet address, NFT addresses or even chatid which is useful in groups"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.em,{children:(0,r.jsx)(t.code,{children:"message"})})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"object"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"Configuration for message to be sent"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.em,{children:(0,r.jsx)(t.code,{children:"message.type"})})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Text"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Text"})}),(0,r.jsx)(t.td,{children:"Type of message content"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.em,{children:(0,r.jsx)(t.code,{children:"message.content"})})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"Pass plain text in the message content"})]})]})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Note: Parameters ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.code,{children:"in this style"})})," are mandatory."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},119365:(e,t,s)=>{s.d(t,{A:()=>i});s(296540);var r=s(618215);const n={tabItem:"tabItem_Ymn6"};var a=s(474848);function i(e){let{children:t,hidden:s,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,i),hidden:s,children:t})}},411470:(e,t,s)=>{s.d(t,{A:()=>w});var r=s(296540),n=s(618215),a=s(823104),i=s(956347),l=s(300205),o=s(757485),c=s(231682),d=s(289466);function u(e){var t,s;return null!==(t=null===(s=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===s?void 0:s.filter(Boolean))&&void 0!==t?t:[]}function h(e){const{values:t,children:s}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:function(e){return u(e).map((e=>{let{props:{value:t,label:s,attributes:r,default:n}}=e;return{value:t,label:s,attributes:r,default:n}}))}(s);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function p(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:s}=e;const n=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:t,groupId:s});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function x(e){const{defaultValue:t,queryString:s=!1,groupId:n}=e,a=h(e),[i,o]=(0,r.useState)((()=>function(e){var t;let{defaultValue:s,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const n=null!==(t=r.find((e=>e.default)))&&void 0!==t?t:r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,u]=m({queryString:s,groupId:n}),[x,b]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,d.Dv)(s);return[n,(0,r.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:n}),f=(()=>{const e=null!=c?c:x;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var b=s(992303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(474848);function j(e){let{className:t,block:s,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const t=e.currentTarget,s=o.indexOf(t),n=l[s].value;n!==r&&(c(t),i(n))},u=e=>{var t;let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var r;const t=o.indexOf(e.currentTarget)+1;s=null!==(r=o[t])&&void 0!==r?r:o[0];break}case"ArrowLeft":{var n;const t=o.indexOf(e.currentTarget)-1;s=null!==(n=o[t])&&void 0!==n?n:o[o.length-1];break}}null===(t=s)||void 0===t||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":s},t),children:l.map((e=>{let{value:t,label:s,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:u,onClick:d,...a,className:(0,n.A)("tabs__item",f.tabItem,null==a?void 0:a.className,{"tabs__item--active":r===t}),children:null!=s?s:t},t)}))})}function v(e){let{lazy:t,children:s,selectedValue:n}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function y(e){const t=x(e);return(0,g.jsxs)("div",{className:(0,n.A)("tabs-container",f.tabList),children:[(0,g.jsx)(j,{...e,...t}),(0,g.jsx)(v,{...e,...t})]})}function w(e){const t=(0,b.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(t))}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>l});var r=s(296540);const n={},a=r.createContext(n);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);