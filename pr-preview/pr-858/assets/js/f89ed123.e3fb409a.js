"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[6531],{214991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(474848),s=n(28453),o=n(411470),i=n(119365);const a={id:"docs-chat-ui-components-integrate-support-bot",title:"Integrate Support Bot",hide_title:!0,slug:"./integrate-support-bot",displayed_sidebar:"pushChatSidebar",sidebar_position:2,image:"/assets/docs/previews/docs_chat_ui_components--integrate_support_bot.png"},l="Integrate Support Bot",c={id:"chat/ui-components/docs-chat-ui-components-integrate-support-bot",title:"Integrate Support Bot",description:"Wallets are your protocol's users as they interact with your protocol. Support bot component enables any wallet to start chatting with you about any issues they are facing with your protocol without the hassle of providing extra information or doxxing their identities.",source:"@site/docs/chat/03-ui-components/02-Integrate-Support-Bot.mdx",sourceDirName:"chat/03-ui-components",slug:"/chat/ui-components/integrate-support-bot",permalink:"/push-website/pr-preview/858/docs/chat/ui-components/integrate-support-bot",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/chat/03-ui-components/02-Integrate-Support-Bot.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"docs-chat-ui-components-integrate-support-bot",title:"Integrate Support Bot",hide_title:!0,slug:"./integrate-support-bot",displayed_sidebar:"pushChatSidebar",sidebar_position:2,image:"/assets/docs/previews/docs_chat_ui_components--integrate_support_bot.png"},sidebar:"pushChatSidebar",previous:{title:"Integrate Push Chat",permalink:"/push-website/pr-preview/858/docs/chat/ui-components/integrate-push-chat"},next:{title:"Integrate Chat Widget",permalink:"/push-website/pr-preview/858/docs/chat/ui-components/integrate-chat-widget"}},d={},u=[{value:"Installation",id:"installation",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage",id:"usage",level:2},{value:"Customization parameters",id:"customization-parameters",level:3},{value:"Advance Usage",id:"advance-usage",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Live Playground",id:"live-playground",level:2}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{Head:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"integrate-support-bot",children:"Integrate Support Bot"}),"\n",(0,r.jsx)(t.p,{children:"Wallets are your protocol's users as they interact with your protocol. Support bot component enables any wallet to start chatting with you about any issues they are facing with your protocol without the hassle of providing extra information or doxxing their identities."}),"\n",(0,r.jsxs)(t.p,{children:["With our support chat component available in ",(0,r.jsx)(t.code,{children:"@pushprotocol/uiweb"})," package, wallet address are ",(0,r.jsx)(t.code,{children:"first-class citizens"})," and your protocol user only needs to connect their wallet to start solving their queries."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Support chat component using Push Chat protocol",src:n(278775).A+"",width:"1487",height:"1214"})}),"\n",(0,r.jsx)(a,{children:(0,r.jsx)("title",{children:"Integrate Support Bot | UI Components | Push Chat | Push Documentation"})}),"\n","\n","\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["If you're using Next.js to integrate UI Components, we recommend using ",(0,r.jsx)(t.code,{children:"Next.js 13"})," with the latest ",(0,r.jsx)(t.a,{href:"https://nextjs.org/docs/app",children:"App Router"}),"."]})}),"\n",(0,r.jsxs)(o.A,{className:"installation",groupId:"bot-installation",children:[(0,r.jsx)(i.A,{value:"npm",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-zsh",children:"npm install @pushprotocol/uiweb\n"})})}),(0,r.jsx)(i.A,{value:"yarn",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-zsh",children:"yarn add @pushprotocol/uiweb\n"})})})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"styled-components"})," is a peerDependency. Please install it in your dApp if you don't have it already! Install ",(0,r.jsx)(t.code,{children:"@pushprotocol/restapi"})," package as well."]}),"\n",(0,r.jsxs)(o.A,{className:"installation",groupId:"bot-installation",children:[(0,r.jsx)(i.A,{value:"npm",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-zsh",children:"npm install styled-components\n\nnpm install @pushprotocol/restapi\n"})})}),(0,r.jsx)(i.A,{value:"yarn",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-zsh",children:"yarn add styled-components\n\nyarn add @pushprotocol/restapi\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(t.p,{children:"Make sure you know how to derive the signer as you will need to pass it as a parameter in the component. For example \u2014"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:'// any other web3 ui lib is also acceptable\nimport { useWeb3React } from "@web3-react/core";\n.\n.\n.\nconst { account, library, chainId } = useWeb3React();\nconst signer = library.getSigner(account);\n'})}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.p,{children:"Import the SDK package in the component file where you want to render the support chat component."}),"\n",(0,r.jsx)(o.A,{className:"codetabs",groupId:"code-examples",children:(0,r.jsx)(i.A,{value:"react",attributes:{className:"codetab react"},default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'import { SupportChat } from "@pushprotocol/uiweb";\nimport { ITheme } from \'@pushprotocol/uiweb\';\n\n// Push Chat is interoperable and you can receive it on any of the supported platforms\n// We recommend https://app.push.org/chat or https://staging.push.org/chat or Push mobile app\n// https://app.push.org/#receive-notifications\n<SupportChat\n  supportAddress="0xd9c1CCAcD4B8a745e191b62BA3fcaD87229CB26d" //support address, this belongs to you\n  signer={signer}\n  env="staging" // can be "prod" or "staging"\n/>\n'})})})}),"\n",(0,r.jsx)(t.h3,{id:"customization-parameters",children:"Customization parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Prop"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Remarks"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"account"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"-"})}),(0,r.jsx)(t.td,{children:"user address(sender)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"supportAddress*"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"-"})}),(0,r.jsx)(t.td,{children:"support user's address(receiver)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.em,{children:(0,r.jsx)(t.code,{children:"signer*"})})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"ethers.js signer"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"-"})}),(0,r.jsx)(t.td,{children:"signer (used for decrypting chats)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"greetingMsg"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"'Hi there!'"})}),(0,r.jsx)(t.td,{children:"first message in chat screen"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"theme"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"ITheme"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"lightTheme"})}),(0,r.jsxs)(t.td,{children:["theme for chat modal (only ",(0,r.jsx)(t.code,{children:"lightTheme"})," available now)"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"modalTitle"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"'Chat with us!'"})}),(0,r.jsx)(t.td,{children:"Modal header title"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"env"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"'prod'"})}),(0,r.jsxs)(t.td,{children:["API env: ",(0,r.jsx)(t.code,{children:"'prod'"}),", ",(0,r.jsx)(t.code,{children:"'staging'"}),", ",(0,r.jsx)(t.code,{children:"'dev'"})]})]})]})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Note: Parameters ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"advance-usage",children:"Advance Usage"}),"\n",(0,r.jsx)(t.p,{children:"You can also customize the chat according to your preference \u2014"}),"\n",(0,r.jsx)(o.A,{className:"codetabs",groupId:"code-examples",children:(0,r.jsx)(i.A,{value:"react",attributes:{className:"codetab react"},default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"import React from 'react';\nimport { SupportChat, ITheme } from '@pushprotocol/uiweb';\n\nexport const ChatSupportTest = () => {\n  const theme: ITheme = {\n    bgColorPrimary: 'gray',\n    bgColorSecondary: 'purple',\n    textColorPrimary: 'white',\n    textColorSecondary: 'green',\n    btnColorPrimary: 'red',\n    btnColorSecondary: 'purple',\n    border: '1px solid black',\n    borderRadius: '40px',\n    moduleColor: 'pink',\n  };\n  return (\n    <SupportChat\n      supportAddress=\"0xFe6C8E9e25f7bcF374412c5C81B2578aC473C0F7\"\n      env='staging'\n      signer={signer}\n      theme={theme}\n    />\n  );\n};\nreturn (\n  <Chat\n    account='0xFe6C8E9e25f7bcF374412c5C81B2578aC473C0F7'\n    supportAddress=\"0xFe6C8E9e25f7bcF374412c5C81B2578aC473C0F7\"\n    env='staging'\n    signer={signer}\n    theme={theme}\n  />\n);\n};\n"})})})}),"\n",(0,r.jsxs)(t.p,{children:["Below is the reference sheet for what theme variables affect what portion of the UI \ud83d\udc47\n",(0,r.jsx)(t.img,{alt:"Support chat component customization cheatsheet",src:n(119458).A+"",width:"1600",height:"840"})]}),"\n",(0,r.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsx)(t.p,{children:"During the procedure, you might encounter an error, as can be seen in the image below."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Support chat component installation might encounter these type of errors",src:n(98664).A+"",width:"1200",height:"400"})}),"\n",(0,r.jsxs)(t.p,{children:["These are caused because of ",(0,r.jsx)(t.code,{children:"webpack 5"})," and ",(0,r.jsx)(t.code,{children:"crypto"})," library issues and requires polyfilling. If you run into such an error, try to include the code below in config-overrides.js in the root folder and switching to ",(0,r.jsx)(t.code,{children:"react-app-rewired"})," to solve the issue."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"const webpack = require('webpack');\n\nmodule.exports = function override(config, env) {\n  // do stuff with the webpack config...\n  config.resolve.fallback = {\n    assert: require.resolve('assert'),\n    buffer: require.resolve('buffer'),\n    child_process: false,\n    constants: require.resolve('constants-browserify'),\n    crypto: require.resolve('crypto-browserify'),\n    fs: false,\n    http: require.resolve('stream-http'),\n    https: require.resolve('https-browserify'),\n    os: require.resolve('os-browserify/browser'),\n    path: require.resolve('path-browserify'),\n    url: require.resolve('url'),\n    util: require.resolve('util/'),\n    stream: require.resolve('stream-browserify'),\n  };\n  config.resolve.extensions = [...config.resolve.extensions, '.ts', '.js'];\n  config.plugins = [\n    ...config.plugins,\n    new webpack.ProvidePlugin({\n      process: 'process/browser',\n      Buffer: ['buffer', 'Buffer'],\n    }),\n  ];\n  config.module.rules = [\n    ...config.module.rules,\n    {\n      test: /\\.m?js/,\n      resolve: {\n        fullySpecified: false,\n      },\n    },\n  ];\n\n  return config;\n};\n"})}),"\n",(0,r.jsx)(t.h2,{id:"live-playground",children:"Live Playground"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",metastring:"live",live:!0,children:"customPropMinimized = 'true';\n\n// DO NOT FORGET TO IMPORT LIBRARIES\n// NOT NEEDED HERE SINCE PLAYGROUND IMPORTS INTERNALLY\n// import { ChatUIProvider, ChatView } from @pushprotocol/uiweb;\nfunction App(props) {\n  const [signer, setSigner] = useState(null);\n\n  const connectWallet = async () => {\n    // Demo only supports MetaMask (or other browser based wallets) and gets provider that injects as window.ethereum into each page\n    const provider = new ethers.providers.Web3Provider(window.ethereum);\n\n    // Get provider\n    await provider.send('eth_requestAccounts', []);\n\n    // Grabbing signer from provider\n    const signer = provider.getSigner();\n\n    // store signer\n    setSigner(signer);\n  };\n\n  const disconnectWallet = async () => {\n    setSigner(null);\n  };\n\n  const buttonStyle = {\n    padding: '10px 20px',\n    backgroundColor: '#dd44b9',\n    color: '#FFF',\n    border: 'none',\n    borderRadius: '5px',\n    cursor: 'pointer',\n    marginTop: '20px',\n  };\n\n  return (\n    <>\n      <h2>\n        Live chat with pushai.eth, connect your wallet and chat to get sassy\n        response from PushAI.eth\n      </h2>\n      <label>\n        For this demo, You will need Metamask (or equivalent browser injected\n        wallet), you will also need to sign a transaction to see the\n        notifications.\n      </label>\n\n      <p />\n      <button\n        style={buttonStyle}\n        onClick={signer ? disconnectWallet : connectWallet}\n      >\n        {signer ? 'Disconnect wallet' : 'Connect Wallet'}\n      </button>\n\n      <div style={{ margin: '20px auto' }}>\n        {signer && (\n          <>\n            <SupportChat\n              supportAddress='0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666' //support address, this belongs to you\n              signer={signer}\n              env='prod' // can be \"prod\" or \"staging\"\n            />\n\n            <h2>\n              Signer obtained, you will be seeing a pink colored Push Chat icon\n              on the bottom right, click to interact.\n            </h2>\n          </>\n        )}\n      </div>\n    </>\n  );\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},119365:(e,t,n)=>{n.d(t,{A:()=>i});n(296540);var r=n(618215);const s={tabItem:"tabItem_Ymn6"};var o=n(474848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:n,children:t})}},411470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(296540),s=n(618215),o=n(823104),i=n(956347),a=n(300205),l=n(757485),c=n(231682),d=n(289466);function u(e){var t,n;return null!==(t=null===(n=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})}),[o,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,o=h(e),[i,l]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=null!==(t=r.find((e=>e.default)))&&void 0!==t?t:r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:o}))),[c,u]=g({queryString:n,groupId:s}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,o]=(0,d.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:s}),x=(()=>{const e=null!=c?c:m;return p({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var b=n(992303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(474848);function j(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),s=a[n].value;s!==r&&(c(t),i(s))},u=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var r;const t=l.indexOf(e.currentTarget)+1;n=null!==(r=l[t])&&void 0!==r?r:l[0];break}case"ArrowLeft":{var s;const t=l.indexOf(e.currentTarget)-1;n=null!==(s=l[t])&&void 0!==s?s:l[l.length-1];break}}null===(t=n)||void 0===t||t.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,s.A)("tabs__item",x.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===t}),children:null!=n?n:t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=m(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,f.jsx)(j,{...e,...t}),(0,f.jsx)(v,{...e,...t})]})}function w(e){const t=(0,b.A)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(t))}},98664:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/support-bot-troubleshoot-366aff655112dd04719f29ade4d59dbe.png"},119458:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/support-chat-customize-b91f621ed4d604e8fac315e34e804207.png"},278775:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/support-chat-preview-2f7fbf0013f1023f44baee1822dd5591.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(296540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);