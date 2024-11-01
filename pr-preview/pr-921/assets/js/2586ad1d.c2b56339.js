"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[31374],{702564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var a=n(474848),r=n(28453),i=n(411470),s=n(119365);const o={id:"docs-chat-ui-components-integrate-chat-widget",title:"Integrate Chat Widget",hide_title:!0,slug:"./integrate-chat-widget",displayed_sidebar:"pushChatSidebar",sidebar_position:3,image:"/assets/docs/previews/docs_chat_ui_components--integrate_chat_widget.png"},l="Integrate Chat Widget V2",c={id:"chat/ui-components/docs-chat-ui-components-integrate-chat-widget",title:"Integrate Chat Widget",description:"Introducing the ChatWidget: a compact yet comprehensive chat experience condensed into widget form , allowing users to initiate conversations with any wallet or group seamlessly.",source:"@site/docs/chat/03-ui-components/03-Integrate-Chat-Widget.mdx",sourceDirName:"chat/03-ui-components",slug:"/chat/ui-components/integrate-chat-widget",permalink:"/push-website/pr-preview/pr-921/docs/chat/ui-components/integrate-chat-widget",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/chat/03-ui-components/03-Integrate-Chat-Widget.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"docs-chat-ui-components-integrate-chat-widget",title:"Integrate Chat Widget",hide_title:!0,slug:"./integrate-chat-widget",displayed_sidebar:"pushChatSidebar",sidebar_position:3,image:"/assets/docs/previews/docs_chat_ui_components--integrate_chat_widget.png"},sidebar:"pushChatSidebar",previous:{title:"Integrate Support Bot",permalink:"/push-website/pr-preview/pr-921/docs/chat/ui-components/integrate-support-bot"},next:{title:"ChatUIProvider",permalink:"/push-website/pr-preview/pr-921/docs/chat/ui-components/Advanced/chatuiprovider"}},d={},h=[{value:"Installation",id:"installation",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage",id:"usage",level:2},{value:"Customization parameters",id:"customization-parameters",level:3},{value:"Advance Usage",id:"advance-usage",level:2},{value:"Live Playground",id:"live-playground",level:2}];function u(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{Head:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"integrate-chat-widget-v2",children:"Integrate Chat Widget V2"}),"\n",(0,a.jsx)(t.p,{children:"Introducing the ChatWidget: a compact yet comprehensive chat experience condensed into widget form , allowing users to initiate conversations with any wallet or group seamlessly."}),"\n",(0,a.jsx)(t.p,{children:"With its integration into the ChatUIProvider, using the Chat Widget component is as straightforward as any other chat component. Simply wrap it with the ChatUIProvider parent wrapper to leverage its capabilities and provide users with an intuitive and powerful chat experience."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Chat Widget using Push Chat protocol",src:n(181276).A+"",width:"789",height:"1214"})}),"\n",(0,a.jsx)(o,{children:(0,a.jsx)("title",{children:"Integrate Chat Widget V2 | UI Components | Push Chat | Push Documentation"})}),"\n","\n","\n",(0,a.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["If you're using Next.js to integrate UI Components, we recommend using ",(0,a.jsx)(t.code,{children:"Next.js 13"})," with the latest ",(0,a.jsx)(t.a,{href:"https://nextjs.org/docs/app",children:"App Router"}),"."]})}),"\n",(0,a.jsxs)(i.A,{className:"installation",groupId:"bot-installation",children:[(0,a.jsx)(s.A,{value:"npm",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-zsh",children:"npm install @pushprotocol/uiweb\n"})})}),(0,a.jsx)(s.A,{value:"yarn",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-zsh",children:"yarn add @pushprotocol/uiweb\n"})})})]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"styled-components"})," is a peerDependency. Please install it in your dApp if you don't have it already! Install ",(0,a.jsx)(t.code,{children:"@pushprotocol/restapi"})," package as well."]}),"\n",(0,a.jsxs)(i.A,{className:"installation",groupId:"bot-installation",children:[(0,a.jsx)(s.A,{value:"npm",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-zsh",children:"npm install styled-components\n\nnpm install @pushprotocol/restapi\n"})})}),(0,a.jsx)(s.A,{value:"yarn",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-zsh",children:"yarn add styled-components\n\nyarn add @pushprotocol/restapi\n"})})})]}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(t.p,{children:"Make sure your parent component is wrapped within ChatUIProvider. For example \u2014"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:'import { ChatUIProvider } from "@pushprotocol/uiweb";\nimport { darkChatTheme } from "@pushprotocol/uiweb";\n\nexport function App({ Component }) {\n  return (\n    <ChatUIProvider theme={darkChatTheme}>\n      <Component />\n    </ChatUIProvider>\n  );\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.p,{children:"Import the SDK package in the component file where you want to render the chat widget component."}),"\n",(0,a.jsx)(i.A,{className:"codetabs",groupId:"code-examples",children:(0,a.jsx)(s.A,{value:"react",attributes:{className:"codetab react"},default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:'import { ChatWidget, ChatUIProvider } from "@pushprotocol/uiweb";\n\n// Push Chat is interoperable and you can receive it on any of the supported platforms\n// We recommend https://app.push.org/chat or https://staging.push.org/chat or Push mobile app \n// https://app.push.org/#receive-notifications\n <ChatUIProvider>\n   <ChatWidget\n  chatId="0xd9c1CCAcD4B8a745e191b62BA3fcaD87229CB26d"\n/>\n  </ChatUIProvider>\n\n'})})})}),"\n",(0,a.jsx)(t.h3,{id:"customization-parameters",children:"Customization parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Prop"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Remarks"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["_ ",(0,a.jsx)(t.code,{children:"chatId"}),"_"]}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"string"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"-"})}),(0,a.jsx)(t.td,{children:"recipient's address or chatId"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"modalTitle"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"string"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"'Chat with us!'"})}),(0,a.jsx)(t.td,{children:"Modal header title."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"welcomeComponent"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"React.ReactNode"})}),(0,a.jsx)(t.td,{children:"-"}),(0,a.jsx)(t.td,{children:"Custom React component that will be displayed if wallet is not connected. This is the welcome screen of the chat widget component."})]})]})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["Note: Parameters ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.code,{children:"in this style"})})," are mandatory.\nNote: Refer ",(0,a.jsx)(t.a,{href:"/docs/chat/ui-components/Advanced/ChatUIProvider/",children:"ChatUIProvider"})," for details on its paramters."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"advance-usage",children:"Advance Usage"}),"\n",(0,a.jsx)(t.p,{children:"You can also customize the chat according to your preference \u2014"}),"\n",(0,a.jsx)(i.A,{className:"codetabs",groupId:"code-examples",children:(0,a.jsx)(s.A,{value:"react",attributes:{className:"codetab react"},default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"import React from 'react';\nimport { ChatWidget, ChatUIProvider  } from '@pushprotocol/uiweb';\n\n\n  return (\n    <ChatUIProvider>\n   <ChatWidget\n  chatId=\"0xd9c1CCAcD4B8a745e191b62BA3fcaD87229CB26d\" //chatId or recipient's address\n   welcomeComponent={<div style={{display: \"flex\",flexDirection:'column',border:'1px solid black',overflow:'auto',height:'100%',width:'100%'}}>\n          <p>Welcome</p>\n          </div}\n/>\n  </ChatUIProvider>\n  );\n\n"})})})}),"\n",(0,a.jsx)(t.h2,{id:"live-playground",children:"Live Playground"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",metastring:"live",live:!0,children:"customPropMinimized=\"true\"\n\n// DO NOT FORGET TO IMPORT LIBRARIES\n// NOT NEEDED HERE SINCE PLAYGROUND IMPORTS INTERNALLY\n// import { ChatUIProvider, ChatWidget, lightChatTheme } from @pushprotocol/uiweb;\nfunction App(props) {\nconst customisedChatWidgetTheme: IChatTheme = {\n ...lightChatTheme,\n  border: {\n    ...lightChatTheme.border,\n    chatProfile: '1px solid #E4E8EF',\n    messageInput: '1px solid #E4E8EF',\n    chatWidget:'1px solid #E4E8EF',\n    chatReceivedBubble:'1px solid #E4E8EF',\n  }\n};\n\n  return (\n    <>\n      <h2>\n        Live chat with pushai.eth, connect your wallet and chat to get sassy\n        response from PushAI.eth\n      </h2>\n      <label>\n        For this demo, You will need Metamask (or equivalent browser injected\n        wallet), you will also need to sign a transaction.\n      </label>\n\n      <p />\n     \n\n      <ChatUIProvider theme={customisedChatWidgetTheme}>\n     <ChatWidget\n    chatId=\"pushai.eth\" //chatId or recipient's address\n  />\n    </ChatUIProvider>\n    </>\n  );\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},119365:(e,t,n)=>{n.d(t,{A:()=>s});n(296540);var a=n(618215);const r={tabItem:"tabItem_Ymn6"};var i=n(474848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:n,children:t})}},411470:(e,t,n)=>{n.d(t,{A:()=>C});var a=n(296540),r=n(618215),i=n(823104),s=n(956347),o=n(300205),l=n(757485),c=n(231682),d=n(289466);function h(e){var t,n;return null!==(t=null===(n=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=u(e),[s,l]=(0,a.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=null!==(t=a.find((e=>e.default)))&&void 0!==t?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,h]=m({queryString:n,groupId:r}),[g,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,d.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),x=(()=>{const e=null!=c?c:g;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),v(e)}),[h,v,i]),tabValues:i}}var v=n(992303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(474848);function f(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==a&&(c(t),s(r))},h=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var a;const t=l.indexOf(e.currentTarget)+1;n=null!==(a=l[t])&&void 0!==a?a:l[0];break}case"ArrowLeft":{var r;const t=l.indexOf(e.currentTarget)-1;n=null!==(r=l[t])&&void 0!==r?r:l[l.length-1];break}}null===(t=n)||void 0===t||t.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:h,onClick:d,...i,className:(0,r.A)("tabs__item",x.tabItem,null==i?void 0:i.className,{"tabs__item--active":a===t}),children:null!=n?n:t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=g(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,b.jsx)(f,{...e,...t}),(0,b.jsx)(j,{...e,...t})]})}function C(e){const t=(0,v.A)();return(0,b.jsx)(w,{...e,children:h(e.children)},String(t))}},181276:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/chat-widget-preview-c4d834b396c06b42e4ee7fb0f41ca415.png"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var a=n(296540);const r={},i=a.createContext(r);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);