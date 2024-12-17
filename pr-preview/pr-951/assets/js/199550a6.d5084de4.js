"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[27165],{771901:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=s(474848),r=s(28453),a=s(411470),i=s(119365);const o={id:"docs-chat-message-type-meta",title:"Meta",hide_title:!0,slug:"./meta",displayed_sidebar:"pushChatSidebar",sidebar_position:6,image:"/assets/docs/previews/docs_chat_message_type--meta.png"},c="Message type - Meta",l={id:"chat/message-types/docs-chat-message-type-meta",title:"Meta",description:"Enables sending arbitary meta actions in a group. This message type has some rules and it's recommeneded to not interact directly with this message type as Push SDK will handle it for you. It's documentated just for the curious minds.",source:"@site/docs/chat/02-message-types/06-Message-Type-Meta.mdx",sourceDirName:"chat/02-message-types",slug:"/chat/message-types/meta",permalink:"/push-website/pr-preview/pr-951/docs/chat/message-types/meta",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/chat/02-message-types/06-Message-Type-Meta.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"docs-chat-message-type-meta",title:"Meta",hide_title:!0,slug:"./meta",displayed_sidebar:"pushChatSidebar",sidebar_position:6,image:"/assets/docs/previews/docs_chat_message_type--meta.png"},sidebar:"pushChatSidebar",previous:{title:"Reaction",permalink:"/push-website/pr-preview/pr-951/docs/chat/message-types/reaction"},next:{title:"UI Components",permalink:"/push-website/pr-preview/pr-951/docs/chat/ui-components"}},d={},u=[{value:"Customization parameters",id:"customization-parameters",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"message-type---meta",children:"Message type - Meta"}),"\n",(0,n.jsx)(t.p,{children:"Enables sending arbitary meta actions in a group. This message type has some rules and it's recommeneded to not interact directly with this message type as Push SDK will handle it for you. It's documentated just for the curious minds."}),"\n",(0,n.jsx)(s,{children:(0,n.jsx)("title",{children:"Message Type - Meta | Push Chat | Push Documentation"})}),"\n","\n","\n",(0,n.jsx)(a.A,{className:"codetabs",groupId:"code-examples",children:(0,n.jsx)(i.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:'// userAlice.chat.send(recipient, message)\n// This section focuses on customization parameters for \'message\' object\nconst aliceMessagesBob = await userAlice.chat.send(recipient, {\n  type: \'Meta\',\n  content: "Alice.eth create the grp \'xyz\'", // content can be eliminated\n  action: "CreateGroup", // can be "AddMember", "RemoveMember", "PromoteAdmin", etc\n  info: { // any added info that is not visible but can be programmatically understood\n    affected: [], // recipients // this can be array\n    arbitary: { // optional, can have anything, never shown based on type\n      timestamp: // epoch one, include timestamp so session key becomes different\n    }\n  }\n});\n'})})})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"customization-parameters",children:"Customization parameters"}),"\n",(0,n.jsx)(t.p,{children:"When sending a message, you can customize the following params"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Param"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Subtype"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Remarks"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:(0,n.jsx)(t.code,{children:"recipient"})})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:"-"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"/docs/chat/supported-wallet-standards/",title:"Supported wallet standards for Push Chat",children:"Recipient supports a number of address format"})," including wallet address, chain agnostic wallet address, NFT addresses or even chatid which is useful in groups"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:(0,n.jsx)(t.code,{children:"message"})})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"object"})}),(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:"Configuration for message to be sent"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:(0,n.jsx)(t.code,{children:"message.type"})})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Meta"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Text"})}),(0,n.jsx)(t.td,{children:"Type of message Content"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:(0,n.jsx)(t.code,{children:"message.content"})})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:"Message Content"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:(0,n.jsx)(t.code,{children:"options.action"})})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"string"}),", choose from ",(0,n.jsx)(t.code,{children:"CreateGroup"}),", ",(0,n.jsx)(t.code,{children:"AddMember"}),", ",(0,n.jsx)(t.code,{children:"RemoveMember"}),", ",(0,n.jsx)(t.code,{children:"PromoteAdmin"}),", ",(0,n.jsx)(t.code,{children:"DemoteAdmin"}),", ",(0,n.jsx)(t.code,{children:"UpdareGroupinfo"})]}),(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:"Action that is getting applied in the Meta message action"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:(0,n.jsx)(t.code,{children:"options.info"})})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"{ affected : string[]: arbitrary?: { [key: string]: any } }"})}),(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:"Pass recipients in the affected array list, any arbitary data if applicable can be passed in arbitary object"})]})]})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Note: Parameters ",(0,n.jsx)(t.em,{children:(0,n.jsx)(t.code,{children:"in this style"})})," are mandatory."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},119365:(e,t,s)=>{s.d(t,{A:()=>i});s(296540);var n=s(618215);const r={tabItem:"tabItem_Ymn6"};var a=s(474848);function i(e){let{children:t,hidden:s,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,i),hidden:s,children:t})}},411470:(e,t,s)=>{s.d(t,{A:()=>w});var n=s(296540),r=s(618215),a=s(823104),i=s(956347),o=s(300205),c=s(757485),l=s(231682),d=s(289466);function u(e){var t,s;return null!==(t=null===(s=n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))||void 0===s?void 0:s.filter(Boolean))&&void 0!==t?t:[]}function h(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:function(e){return u(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:r}}=e;return{value:t,label:s,attributes:n,default:r}}))}(s);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,s])}function p(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:s}=e;const r=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:t,groupId:s});return[(0,c.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}),[a,r])]}function b(e){const{defaultValue:t,queryString:s=!1,groupId:r}=e,a=h(e),[i,c]=(0,n.useState)((()=>function(e){var t;let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+s+'" but none of its children has the corresponding value. Available values are: '+n.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return s}const r=null!==(t=n.find((e=>e.default)))&&void 0!==t?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[l,u]=m({queryString:s,groupId:r}),[b,x]=function(e){let{groupId:t}=e;const s=function(e){return e?"docusaurus.tab."+e:null}(t),[r,a]=(0,d.Dv)(s);return[r,(0,n.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:r}),j=(()=>{const e=null!=l?l:b;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{j&&c(j)}),[j]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error("Can't select invalid tab value="+e);c(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=s(992303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(474848);function g(e){let{className:t,block:s,selectedValue:n,selectValue:i,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),d=e=>{const t=e.currentTarget,s=c.indexOf(t),r=o[s].value;r!==n&&(l(t),i(r))},u=e=>{var t;let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var n;const t=c.indexOf(e.currentTarget)+1;s=null!==(n=c[t])&&void 0!==n?n:c[0];break}case"ArrowLeft":{var r;const t=c.indexOf(e.currentTarget)-1;s=null!==(r=c[t])&&void 0!==r?r:c[c.length-1];break}}null===(t=s)||void 0===t||t.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},t),children:o.map((e=>{let{value:t,label:s,attributes:a}=e;return(0,f.jsx)("li",Object.assign({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:u,onClick:d},a,{className:(0,r.A)("tabs__item",j.tabItem,null==a?void 0:a.className,{"tabs__item--active":n===t}),children:null!=s?s:t}),t)}))})}function y(e){let{lazy:t,children:s,selectedValue:r}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function v(e){const t=b(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,f.jsx)(g,Object.assign({},e,t)),(0,f.jsx)(y,Object.assign({},e,t))]})}function w(e){const t=(0,x.A)();return(0,f.jsx)(v,Object.assign({},e,{children:u(e.children)}),String(t))}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>o});var n=s(296540);const r={},a=n.createContext(r);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);