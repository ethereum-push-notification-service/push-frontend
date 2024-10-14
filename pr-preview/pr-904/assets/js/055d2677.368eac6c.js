"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[16451],{961595:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=a(474848),n=a(28453),r=a(411470),l=a(119365);const i={id:"docs-chat-quickstart",title:"Quickstart",hide_title:!1,slug:"./quickstart",displayed_sidebar:"pushChatSidebar",sidebar_position:2,image:"/assets/docs/previews/docs_chat--quickstart.png"},o="Quickstart",c={id:"chat/docs-chat-quickstart",title:"Quickstart",description:"Everything you will need to get up and running in 2 mins or less!",source:"@site/docs/chat/02-Quickstart-Push-Chat.mdx",sourceDirName:"chat",slug:"/chat/quickstart",permalink:"/push-website/pr-preview/pr-904/docs/chat/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/chat/02-Quickstart-Push-Chat.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"docs-chat-quickstart",title:"Quickstart",hide_title:!1,slug:"./quickstart",displayed_sidebar:"pushChatSidebar",sidebar_position:2,image:"/assets/docs/previews/docs_chat--quickstart.png"},sidebar:"pushChatSidebar",previous:{title:"Intro to Push Chat",permalink:"/push-website/pr-preview/pr-904/docs/chat/"},next:{title:"Supported Wallet Standards",permalink:"/push-website/pr-preview/pr-904/docs/chat/supported-wallet-standards"}},u={},d=[{value:"Installation",id:"installation",level:3},{value:"Import libraries",id:"import-libraries",level:3},{value:"Initialize Chat",id:"initialize-chat",level:3},{value:"Send Message",id:"send-message",level:3},{value:"Stream / Real time updates / Socket",id:"stream--real-time-updates--socket",level:3}];function h(e){const t={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...e.components},{Head:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"quickstart",children:"Quickstart"}),"\n",(0,s.jsx)(t.p,{children:"Everything you will need to get up and running in 2 mins or less!"}),"\n",(0,s.jsx)(a,{children:(0,s.jsx)("title",{children:"Quickstart | Push Chat | Push Documentation"})}),"\n","\n","\n",(0,s.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(r.A,{className:"codetabs",groupId:"code-examples",children:[(0,s.jsx)(l.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// Install Libraries\nnpm install @pushprotocol/restapi@latest @pushprotocol/socket@latest ethers@^5.7\n"})})}),(0,s.jsx)(l.A,{value:"react",attributes:{className:"codetab react"},default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// Install Libraries\nnpm install @pushprotocol/restapi@latest @pushprotocol/socket@latest ethers@^5.7\n"})})}),(0,s.jsx)(l.A,{value:"reactnative",attributes:{className:"codetab reactnative"},default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// Install Libraries\nnpm install @pushprotocol/restapi@latest @pushprotocol/socket@latest ethers@^5.7\n"})})})]}),"\n",(0,s.jsx)(t.h3,{id:"import-libraries",children:"Import libraries"}),"\n",(0,s.jsxs)(r.A,{className:"codetabs",groupId:"code-examples",children:[(0,s.jsx)(l.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// Import restapi for function calls\n// Import socket for listening for real time messages\nimport { PushAPI, CONSTANTS } from '@pushprotocol/restapi';\n\n// Ethers or Viem, both are supported\nimport { ethers } from 'ethers';\n"})})}),(0,s.jsx)(l.A,{value:"react",attributes:{className:"codetab react"},default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// Import restapi for function calls\n// Import socket for listening for real time messages\nimport { PushAPI, CONSTANTS } from '@pushprotocol/restapi';\n\n// Ethers or Viem, both are supported\nimport { ethers } from 'ethers';\n"})})}),(0,s.jsx)(l.A,{value:"reactnative",attributes:{className:"codetab reactnative"},default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// Import restapi for function calls\n// Import socket for listening for real time messages\nimport { PushAPI, CONSTANTS } from '@pushprotocol/restapi';\n\n// Ethers or Viem, both are supported\nimport { ethers } from 'ethers';\n"})})})]}),"\n",(0,s.jsx)(t.h3,{id:"initialize-chat",children:"Initialize Chat"}),"\n",(0,s.jsxs)(r.A,{className:"codetabs",groupId:"code-examples",children:[(0,s.jsx)(l.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// Creating a random signer from a wallet, ideally this is the wallet you will connect\nconst signer = ethers.Wallet.createRandom();\n\n// Initialize wallet user\n// 'CONSTANTS.ENV.PROD' -> mainnet apps | 'CONSTANTS.ENV.STAGING' -> testnet apps\nconst userAlice = await PushAPI.initialize(signer, {\n  env: CONSTANTS.ENV.STAGING,\n});\n"})})}),(0,s.jsx)(l.A,{value:"react",attributes:{className:"codetab react"},default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// Creating a random signer from a wallet, ideally this is the wallet you will connect\nconst signer = ethers.Wallet.createRandom();\n\n// Initialize wallet user\n// 'CONSTANTS.ENV.PROD' -> mainnet apps | 'CONSTANTS.ENV.STAGING' -> testnet apps\nconst userAlice = await PushAPI.initialize(signer, {\n  env: CONSTANTS.ENV.STAGING,\n});\n"})})}),(0,s.jsx)(l.A,{value:"reactnative",attributes:{className:"codetab reactnative"},default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// Creating a random signer from a wallet, ideally this is the wallet you will connect\nconst signer = ethers.Wallet.createRandom();\n\n// Initialize wallet user\n// 'CONSTANTS.ENV.PROD' -> mainnet apps | 'CONSTANTS.ENV.STAGING' -> testnet apps\nconst userAlice = await PushAPI.initialize(signer, {\n  env: CONSTANTS.ENV.STAGING,\n});\n"})})})]}),"\n",(0,s.jsx)(t.h3,{id:"send-message",children:"Send Message"}),"\n",(0,s.jsxs)(r.A,{className:"codetabs",groupId:"code-examples",children:[(0,s.jsx)(l.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// This will be the wallet address of the recipient\nconst toWalletAddress = ethers.Wallet.createRandom().address;\n\n// Send a message to Bob\nconst aliceMessagesBob = await userAlice.chat.send(toWalletAddress, {\n  content: 'Hello Bob!',\n  type: 'Text',\n});\n"})})}),(0,s.jsx)(l.A,{value:"react",attributes:{className:"codetab react"},default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// This will be the wallet address of the recipient\nconst toWalletAddress = ethers.Wallet.createRandom().address;\n\n// Send a message to Bob\nconst aliceMessagesBob = await userAlice.chat.send(toWalletAddress, {\n  content: 'Hello Bob!',\n  type: 'Text',\n});\n"})})}),(0,s.jsx)(l.A,{value:"reactnative",attributes:{className:"codetab reactnative"},default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// This will be the wallet address of the recipient\nconst bobWalletAddress = ethers.Wallet.createRandom().address;\n\n// Send a message to Bob\nconst aliceMessagesBob = await userAlice.chat.send(bobWalletAddress, {\n  content: 'Hello Bob!',\n  type: 'Text',\n});\n"})})})]}),"\n",(0,s.jsx)(t.h3,{id:"stream--real-time-updates--socket",children:"Stream / Real time updates / Socket"}),"\n",(0,s.jsxs)(r.A,{className:"codetabs",groupId:"code-examples",children:[(0,s.jsx)(l.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// Initialize Stream\nconst stream = await userAlice.initStream([CONSTANTS.STREAM.CHAT]);\n\n// Configure stream listen events and what to do\nstream.on(CONSTANTS.STREAM.CHAT, (message) => {\n  console.log(message);\n});\n\n// Connect Stream\nstream.connect();\n"})})}),(0,s.jsx)(l.A,{value:"react",attributes:{className:"codetab react"},default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// Initialize Stream\nconst stream = await userAlice.initStream([CONSTANTS.STREAM.CHAT]);\n\n// Configure stream listen events and what to do\nstream.on(CONSTANTS.STREAM.CHAT, (message) => {\n  console.log(message);\n});\n\n// Connect Stream\nstream.connect();\n"})})}),(0,s.jsx)(l.A,{value:"reactnative",attributes:{className:"codetab reactnative"},default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// Initialize Stream\nconst stream = await userAlice.initStream([CONSTANTS.STREAM.CHAT]);\n\n// Configure stream listen events and what to do\nstream.on(CONSTANTS.STREAM.CHAT, (message) => {\n  console.log(message);\n});\n\n// Connect Stream\nstream.connect();\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},119365:(e,t,a)=>{a.d(t,{A:()=>l});a(296540);var s=a(618215);const n={tabItem:"tabItem_Ymn6"};var r=a(474848);function l(e){let{children:t,hidden:a,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,l),hidden:a,children:t})}},411470:(e,t,a)=>{a.d(t,{A:()=>A});var s=a(296540),n=a(618215),r=a(823104),l=a(956347),i=a(300205),o=a(757485),c=a(231682),u=a(289466);function d(e){var t,a;return null!==(t=null===(a=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===a?void 0:a.filter(Boolean))&&void 0!==t?t:[]}function h(e){const{values:t,children:a}=e;return(0,s.useMemo)((()=>{const e=null!=t?t:function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:s,default:n}}=e;return{value:t,label:a,attributes:s,default:n}}))}(a);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.W6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,o.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=h(e),[l,o]=(0,s.useState)((()=>function(e){var t;let{defaultValue:a,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=null!==(t=s.find((e=>e.default)))&&void 0!==t?t:s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[c,d]=m({queryString:a,groupId:n}),[b,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Dv)(a);return[n,(0,s.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),f=(()=>{const e=null!=c?c:b;return p({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,r]),tabValues:r}}var g=a(992303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(474848);function j(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const t=e.currentTarget,a=o.indexOf(t),n=i[a].value;n!==s&&(c(t),l(n))},d=e=>{var t;let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var s;const t=o.indexOf(e.currentTarget)+1;a=null!==(s=o[t])&&void 0!==s?s:o[0];break}case"ArrowLeft":{var n;const t=o.indexOf(e.currentTarget)-1;a=null!==(n=o[t])&&void 0!==n?n:o[o.length-1];break}}null===(t=a)||void 0===t||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},t),children:i.map((e=>{let{value:t,label:a,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...r,className:(0,n.A)("tabs__item",f.tabItem,null==r?void 0:r.className,{"tabs__item--active":s===t}),children:null!=a?a:t},t)}))})}function N(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function x(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,n.A)("tabs-container",f.tabList),children:[(0,v.jsx)(j,{...e,...t}),(0,v.jsx)(N,{...e,...t})]})}function A(e){const t=(0,g.A)();return(0,v.jsx)(x,{...e,children:d(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>l,x:()=>i});var s=a(296540);const n={},r=s.createContext(n);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);