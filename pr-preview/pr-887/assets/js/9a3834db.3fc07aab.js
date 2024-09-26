"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[65727],{544758:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=s(474848),n=s(28453),r=s(411470),i=s(119365);const l={id:"docs-chat-message-type-media-embed",title:"Media Embed",hide_title:!0,slug:"./media-embed",displayed_sidebar:"pushChatSidebar",sidebar_position:4,image:"/assets/docs/previews/docs_chat_message_type--media_embed.png"},d="Message type - Media embed",o={id:"chat/message-types/docs-chat-message-type-media-embed",title:"Media Embed",description:"Enables sending a image URLs or media URLs as a message. You can send GIFs, Tweets, Youtube links, etc. Simply pass in the URL of the media as content.",source:"@site/docs/chat/02-message-types/04-Message-Type-Media-Embed.mdx",sourceDirName:"chat/02-message-types",slug:"/chat/message-types/media-embed",permalink:"/push-website/pr-preview/pr-887/docs/chat/message-types/media-embed",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/chat/02-message-types/04-Message-Type-Media-Embed.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"docs-chat-message-type-media-embed",title:"Media Embed",hide_title:!0,slug:"./media-embed",displayed_sidebar:"pushChatSidebar",sidebar_position:4,image:"/assets/docs/previews/docs_chat_message_type--media_embed.png"},sidebar:"pushChatSidebar",previous:{title:"File",permalink:"/push-website/pr-preview/pr-887/docs/chat/message-types/file"},next:{title:"Reaction",permalink:"/push-website/pr-preview/pr-887/docs/chat/message-types/reaction"}},c={},u=[{value:"Customization parameters",id:"customization-parameters",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"message-type---media-embed",children:"Message type - Media embed"}),"\n",(0,a.jsx)(t.p,{children:"Enables sending a image URLs or media URLs as a message. You can send GIFs, Tweets, Youtube links, etc. Simply pass in the URL of the media as content."}),"\n",(0,a.jsx)(s,{children:(0,a.jsx)("title",{children:"Message Type - Media Embed | Push Chat | Push Documentation"})}),"\n","\n","\n",(0,a.jsx)(r.A,{className:"codetabs",groupId:"code-examples",children:(0,a.jsx)(i.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"// userAlice.chat.send(recipient, message)\n// This section focuses on customization parameters for 'message' object\nconst aliceMessagesBob = await userAlice.chat.send(recipient, {\n  type: 'MediaEmbed',\n  content:\n    'https://media1.giphy.com/media/FtlUfrq3pVZXVNjoxf/giphy360p.mp4?cid=ecf05e47jk317254v9hbdjrknemduocie4pf54wtsir98xsx&ep=v1_videos_search&rid=giphy360p.mp4&ct=v',\n});\n"})})})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"customization-parameters",children:"Customization parameters"}),"\n",(0,a.jsx)(t.p,{children:"When sending a message, you can customize the following params"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Param"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Subtype"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Remarks"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.em,{children:(0,a.jsx)(t.code,{children:"recipient"})})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"string"})}),(0,a.jsx)(t.td,{children:"-"}),(0,a.jsx)(t.td,{children:"-"}),(0,a.jsxs)(t.td,{children:[(0,a.jsx)(t.a,{href:"/docs/chat/supported-wallet-standards/",title:"Supported wallet standards for Push Chat",children:"Recipient supports a number of address format"})," including wallet address, chain agnostic wallet address, NFT addresses or even chatid which is useful in groups"]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.em,{children:(0,a.jsx)(t.code,{children:"message"})})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"object"})}),(0,a.jsx)(t.td,{children:"-"}),(0,a.jsx)(t.td,{children:"-"}),(0,a.jsx)(t.td,{children:"Configuration for message to be sent"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"-"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.em,{children:(0,a.jsx)(t.code,{children:"message.type"})})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"MediaEmbed"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"Text"})}),(0,a.jsx)(t.td,{children:"Type of message Content"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"-"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.em,{children:(0,a.jsx)(t.code,{children:"message.content"})})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"string"})}),(0,a.jsx)(t.td,{children:"-"}),(0,a.jsx)(t.td,{children:"Message Content"})]})]})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["Note: Parameters ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.code,{children:"in this style"})})," are mandatory."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},119365:(e,t,s)=>{s.d(t,{A:()=>i});s(296540);var a=s(618215);const n={tabItem:"tabItem_Ymn6"};var r=s(474848);function i(e){let{children:t,hidden:s,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,i),hidden:s,children:t})}},411470:(e,t,s)=>{s.d(t,{A:()=>w});var a=s(296540),n=s(618215),r=s(823104),i=s(956347),l=s(300205),d=s(757485),o=s(231682),c=s(289466);function u(e){var t,s;return null!==(t=null===(s=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===s?void 0:s.filter(Boolean))&&void 0!==t?t:[]}function h(e){const{values:t,children:s}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:function(e){return u(e).map((e=>{let{props:{value:t,label:s,attributes:a,default:n}}=e;return{value:t,label:s,attributes:a,default:n}}))}(s);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function p(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:s}=e;const n=(0,i.W6)(),r=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:t,groupId:s});return[(0,d.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function b(e){const{defaultValue:t,queryString:s=!1,groupId:n}=e,r=h(e),[i,d]=(0,a.useState)((()=>function(e){var t;let{defaultValue:s,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const n=null!==(t=a.find((e=>e.default)))&&void 0!==t?t:a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[o,u]=m({queryString:s,groupId:n}),[b,f]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,c.Dv)(s);return[n,(0,a.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:n}),x=(()=>{const e=null!=o?o:b;return p({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{x&&d(x)}),[x]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var f=s(992303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(474848);function j(e){let{className:t,block:s,selectedValue:a,selectValue:i,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.a_)(),c=e=>{const t=e.currentTarget,s=d.indexOf(t),n=l[s].value;n!==a&&(o(t),i(n))},u=e=>{var t;let s=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{var a;const t=d.indexOf(e.currentTarget)+1;s=null!==(a=d[t])&&void 0!==a?a:d[0];break}case"ArrowLeft":{var n;const t=d.indexOf(e.currentTarget)-1;s=null!==(n=d[t])&&void 0!==n?n:d[d.length-1];break}}null===(t=s)||void 0===t||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":s},t),children:l.map((e=>{let{value:t,label:s,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>d.push(e),onKeyDown:u,onClick:c,...r,className:(0,n.A)("tabs__item",x.tabItem,null==r?void 0:r.className,{"tabs__item--active":a===t}),children:null!=s?s:t},t)}))})}function v(e){let{lazy:t,children:s,selectedValue:n}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function y(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,n.A)("tabs-container",x.tabList),children:[(0,g.jsx)(j,{...e,...t}),(0,g.jsx)(v,{...e,...t})]})}function w(e){const t=(0,f.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(t))}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>l});var a=s(296540);const n={},r=a.createContext(n);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);