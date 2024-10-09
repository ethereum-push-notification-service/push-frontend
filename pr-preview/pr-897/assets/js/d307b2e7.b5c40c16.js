"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[55567],{896883:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>h,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>p});var n=t(474848),a=t(28453),r=t(411470),o=t(119365),l=t(641622),i=t(113490);const d={id:"docs-chat-develop-send-message",title:"Send Message",hide_title:!0,slug:"./send-message",displayed_sidebar:"pushChatSidebar",sidebar_position:5,image:"/assets/docs/previews/docs_chat_develop--send_message.png"},c="Send message overview",u={id:"chat/build/docs-chat-develop-send-message",title:"Send Message",description:"Push Chat doesn't require a user to be on the network for you to send message \ud83d\ude00. Instead, it gives you the freedom to send a nudge to an account or a message (or a meme).",source:"@site/docs/chat/01-build/06-Develop-Send-Message.mdx",sourceDirName:"chat/01-build",slug:"/chat/build/send-message",permalink:"/push-website/pr-preview/pr-897/docs/chat/build/send-message",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/chat/01-build/06-Develop-Send-Message.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"docs-chat-develop-send-message",title:"Send Message",hide_title:!0,slug:"./send-message",displayed_sidebar:"pushChatSidebar",sidebar_position:5,image:"/assets/docs/previews/docs_chat_develop--send_message.png"},sidebar:"pushChatSidebar",previous:{title:"Chat Requests",permalink:"/push-website/pr-preview/pr-897/docs/chat/build/chat-requests"},next:{title:"Create Group",permalink:"/push-website/pr-preview/pr-897/docs/chat/build/create-group"}},h={},p=[{value:"Send message API",id:"send-message-api",level:2},{value:"Send message parameters",id:"send-message-parameters",level:3},{value:"Sending images, payments, reactions, etc",id:"sending-images-payments-reactions-etc",level:2}];function m(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components},{Head:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"send-message-overview",children:"Send message overview"}),"\n",(0,n.jsx)(s.p,{children:"Push Chat doesn't require a user to be on the network for you to send message \ud83d\ude00. Instead, it gives you the freedom to send a nudge to an account or a message (or a meme)."}),"\n",(0,n.jsx)(s.p,{children:"Every chat message sent from Push is completely E2EE. The only exception to this is when a message is sent to the user that is not yet on the Push network. Push leaves it up to the developers to decide on how they want this to be: Send non-encrypted message, empty nudge or only send message to onboarded user (which will always be E2EE)."}),"\n",(0,n.jsx)(t,{children:(0,n.jsx)("title",{children:"Send message | Push Chat | Push Documentation"})}),"\n","\n","\n",(0,n.jsx)(s.h2,{id:"send-message-api",children:"Send message API"}),"\n",(0,n.jsx)(r.A,{className:"codetabs",groupId:"code-examples",children:(0,n.jsx)(o.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"// userAlice.chat.send(recipient, {message})\n// recipient - Can be wallet address, nft address or chatid | See Types of Recipient for more info\n// message - Can be modified to send various types of messages like Images, Reactions, etc\nconst aliceMessagesBob = await userAlice.chat.send(bobAccount, {\n  type: 'Text',\n  content: 'Hello Bob!',\n});\n"})})})}),"\n",(0,n.jsxs)(s.p,{children:["See ",(0,n.jsx)(i.Yo,{href:"/chat/message-types/",children:"Message Types"})," to understand how ",(0,n.jsx)(s.code,{children:"message"})," object can be customized to send variety of messages."]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"send-message-parameters",children:"Send message parameters"}),"\n",(0,n.jsx)(s.p,{children:"When sending a message, you can customize the following params"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Param"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Subtype"}),(0,n.jsx)(s.th,{children:"Default"}),(0,n.jsx)(s.th,{children:"Remarks"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.em,{children:(0,n.jsx)(s.code,{children:"recipient"})})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"string"})}),(0,n.jsx)(s.td,{children:"-"}),(0,n.jsx)(s.td,{children:"-"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.a,{href:"/docs/chat/supported-wallet-standards/",title:"Supported wallet standards for Push Chat",children:"Recipient supports a number of address format"})," including wallet addresses, chain agnostic wallet addresses, NFT addresses or even chatid which is useful for groups"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.em,{children:(0,n.jsx)(s.code,{children:"message"})})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"object"})}),(0,n.jsx)(s.td,{children:"-"}),(0,n.jsx)(s.td,{children:"-"}),(0,n.jsx)(s.td,{children:"Configuration for message to be sent"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"-"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.em,{children:(0,n.jsx)(s.code,{children:"message.type"})})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"Text"}),", ",(0,n.jsx)(s.code,{children:"Image"}),", ",(0,n.jsx)(s.code,{children:"File"}),", ",(0,n.jsx)(s.code,{children:"MediaEmbed"}),", etc"]}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Text"})}),(0,n.jsxs)(s.td,{children:["Type of message, see ",(0,n.jsx)(s.a,{href:"/docs/chat/message-types",children:"Message Types"})," for passing specific parameters based on message type"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"-"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.em,{children:(0,n.jsx)(s.code,{children:"message.content"})})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"string"})}),(0,n.jsx)(s.td,{children:"-"}),(0,n.jsx)(s.td,{children:"Message Content"})]})]})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["Note: Parameters ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,n.jsx)(l.A,{summary:"Expected response",children:"200 OK"}),"\n",(0,n.jsx)(s.h2,{id:"sending-images-payments-reactions-etc",children:"Sending images, payments, reactions, etc"}),"\n",(0,n.jsxs)(s.p,{children:["The second parameter of ",(0,n.jsx)(s.code,{children:"chat.send"})," contains the ",(0,n.jsx)(s.code,{children:"message"})," object that can be customized to send an evergrowing types of supported formats from the protocol."]}),"\n",(0,n.jsxs)(s.p,{children:["See ",(0,n.jsx)(i.Yo,{href:"/docs/chat/message-types/",children:"Message Types"})," to understand how ",(0,n.jsx)(s.code,{children:"message"})," object can be customized to send variety of messages."]})]})}function b(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},641622:(e,s,t)=>{t.d(s,{A:()=>b});var n=t(296540),a=t(618215),r=t(15066),o=t(992303),l=t(41422);const i={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var d=t(474848);function c(e){return!!e&&("SUMMARY"===e.tagName||c(e.parentElement))}function u(e,s){return!!e&&(e===s||u(e.parentElement,s))}function h(e){let{summary:s,children:t,...a}=e;const h=(0,o.A)(),p=(0,n.useRef)(null),{collapsed:m,setCollapsed:b}=(0,l.u)({initialState:!a.open}),[g,f]=(0,n.useState)(a.open),x=n.isValidElement(s)?s:(0,d.jsx)("summary",{children:null!=s?s:"Details"});return(0,d.jsxs)("details",{...a,ref:p,open:g,"data-collapsed":m,className:(0,r.A)(i.details,h&&i.isBrowser,a.className),onMouseDown:e=>{c(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const s=e.target;c(s)&&u(s,p.current)&&(e.preventDefault(),m?(b(!1),f(!0)):b(!0))},children:[x,(0,d.jsx)(l.N,{lazy:!1,collapsed:m,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{b(e),f(!e)},children:(0,d.jsx)("div",{className:i.collapsibleContent,children:t})})]})}const p={details:"details_b_Ee"},m="alert alert--info";function b(e){let{...s}=e;return(0,d.jsx)(h,{...s,className:(0,a.A)(m,p.details,s.className)})}},119365:(e,s,t)=>{t.d(s,{A:()=>o});t(296540);var n=t(618215);const a={tabItem:"tabItem_Ymn6"};var r=t(474848);function o(e){let{children:s,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,o),hidden:t,children:s})}},411470:(e,s,t)=>{t.d(s,{A:()=>w});var n=t(296540),a=t(618215),r=t(823104),o=t(956347),l=t(300205),i=t(757485),d=t(231682),c=t(289466);function u(e){var s,t;return null!==(s=null===(t=n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==s?s:[]}function h(e){const{values:s,children:t}=e;return(0,n.useMemo)((()=>{const e=null!=s?s:function(e){return u(e).map((e=>{let{props:{value:s,label:t,attributes:n,default:a}}=e;return{value:s,label:t,attributes:n,default:a}}))}(t);return function(e){const s=(0,d.X)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,t])}function p(e){let{value:s,tabValues:t}=e;return t.some((e=>e.value===s))}function m(e){let{queryString:s=!1,groupId:t}=e;const a=(0,o.W6)(),r=function(e){let{queryString:s=!1,groupId:t}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:s,groupId:t});return[(0,i.aZ)(r),(0,n.useCallback)((e=>{if(!r)return;const s=new URLSearchParams(a.location.search);s.set(r,e),a.replace({...a.location,search:s.toString()})}),[r,a])]}function b(e){const{defaultValue:s,queryString:t=!1,groupId:a}=e,r=h(e),[o,i]=(0,n.useState)((()=>function(e){var s;let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=null!==(s=n.find((e=>e.default)))&&void 0!==s?s:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:r}))),[d,u]=m({queryString:t,groupId:a}),[b,g]=function(e){let{groupId:s}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(s),[a,r]=(0,c.Dv)(t);return[a,(0,n.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),f=(()=>{const e=null!=d?d:b;return p({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var g=t(992303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(474848);function j(e){let{className:s,block:t,selectedValue:n,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),c=e=>{const s=e.currentTarget,t=i.indexOf(s),a=l[t].value;a!==n&&(d(s),o(a))},u=e=>{var s;let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{var n;const s=i.indexOf(e.currentTarget)+1;t=null!==(n=i[s])&&void 0!==n?n:i[0];break}case"ArrowLeft":{var a;const s=i.indexOf(e.currentTarget)-1;t=null!==(a=i[s])&&void 0!==a?a:i[i.length-1];break}}null===(s=t)||void 0===s||s.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},s),children:l.map((e=>{let{value:s,label:t,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===s?0:-1,"aria-selected":n===s,ref:e=>i.push(e),onKeyDown:u,onClick:c,...r,className:(0,a.A)("tabs__item",f.tabItem,null==r?void 0:r.className,{"tabs__item--active":n===s}),children:null!=t?t:s},s)}))})}function v(e){let{lazy:s,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(s){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,s)=>(0,n.cloneElement)(e,{key:s,hidden:e.props.value!==a})))})}function y(e){const s=b(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,x.jsx)(j,{...e,...s}),(0,x.jsx)(v,{...e,...s})]})}function w(e){const s=(0,g.A)();return(0,x.jsx)(y,{...e,children:u(e.children)},String(s))}},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>l});var n=t(296540);const a={},r=n.createContext(a);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);