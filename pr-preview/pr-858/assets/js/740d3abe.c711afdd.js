"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[16286],{504309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=n(474848),s=n(28453),i=n(411470),o=n(119365),a=n(113490);const c={id:"docs-chat-ui-components-advanced-chatpreviewlist-component",title:"ChatPreviewList Component",hide_title:!0,slug:"./chatpreviewlist-component",displayed_sidebar:"pushChatSidebar",sidebar_position:10,image:"/assets/docs/previews/docs_chat_ui_components_advanced--chatpreviewlist_component.png"},d="ChatPreviewList",l={id:"chat/ui-components/Advanced/docs-chat-ui-components-advanced-chatpreviewlist-component",title:"ChatPreviewList Component",description:"Seamless integration made simple: Add a comprehensive list of your chats with just one line of code, effortlessly enhancing your Dapp's functionality.",source:"@site/docs/chat/03-ui-components/Advanced/10-Integrate-Advanced-ChatPreviewList-Component.mdx",sourceDirName:"chat/03-ui-components/Advanced",slug:"/chat/ui-components/Advanced/chatpreviewlist-component",permalink:"/push-website/pr-preview/pr-858/docs/chat/ui-components/Advanced/chatpreviewlist-component",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/chat/03-ui-components/Advanced/10-Integrate-Advanced-ChatPreviewList-Component.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"docs-chat-ui-components-advanced-chatpreviewlist-component",title:"ChatPreviewList Component",hide_title:!0,slug:"./chatpreviewlist-component",displayed_sidebar:"pushChatSidebar",sidebar_position:10,image:"/assets/docs/previews/docs_chat_ui_components_advanced--chatpreviewlist_component.png"},sidebar:"pushChatSidebar",previous:{title:"ChatPreview Component",permalink:"/push-website/pr-preview/pr-858/docs/chat/ui-components/Advanced/chatpreview-component"},next:{title:"Themization",permalink:"/push-website/pr-preview/pr-858/docs/chat/ui-components/Advanced/themization"}},h={},u=[{value:"Usage",id:"usage",level:2},{value:"Customization Parameters",id:"customization-parameters",level:3},{value:"Live playground",id:"live-playground",level:3}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{Head:c}=t;return c||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"chatpreviewlist",children:"ChatPreviewList"}),"\n",(0,r.jsx)(t.p,{children:"Seamless integration made simple: Add a comprehensive list of your chats with just one line of code, effortlessly enhancing your Dapp's functionality."}),"\n",(0,r.jsx)(t.p,{children:"ChatPreviewList is a unified chat list showcasing your recent conversations with ease, simplifying your messaging experience by consolidating all interactions into a single, user-friendly interface."}),"\n",(0,r.jsx)(c,{children:(0,r.jsx)("title",{children:"ChatPreviewList | UI Components (@pushprotocol/uiweb) | Push Chat | Push\n  Documentation"})}),"\n","\n","\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(i.A,{className:"codetabs",groupId:"code-examples",children:(0,r.jsxs)(o.A,{value:"react",attributes:{className:"codetab react"},default:!0,children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"import { ChatPreviewList } from \"@pushprotocol/uiweb\";\n\nconst ChatPreviewListTest = () => {\n\n\n  return (\n    <div>\n      <ChatPreviewList listType='CHATS'/>\n    </div>\n  );\n};\n\nexport default ChatPreviewListTest;\n"})})," ",(0,r.jsx)(a.Bs,{children:(0,r.jsx)("img",{src:n(362986).A})})]})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"customization-parameters",children:"Customization Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Remarks"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"overrideAccount"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"override the connected user account"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"listType"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:'"CHATS"'})," &#124 ",(0,r.jsx)(t.code,{children:'"REQUESTS"'})," &#124 ",(0,r.jsx)(t.code,{children:'"SEARCH"'})]}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"type of chat list that needs to be fetched and displayed"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"prefillChatPreviewList"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Array<IChatPreviewProps>"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"shows a fixed set of chat objects"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"searchParamter"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsxs)(t.td,{children:["chatId or ens or address of users whos chat needs to be searched. The listType for searching should be ",(0,r.jsx)(t.code,{children:'"SEARCH"'})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"onChatSelected"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"(chatId: string,chatParticipant: string) => void"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"custom function which triggered when any chat is selected"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"onUnreadCountChange"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"(count: number) => void;"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"custom function which triggered when new messages are received in any chat"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"onPreload"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"(chats: Array<IChatPreviewPayload>) => void"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"custom function which is triggered when chats are loaded for the first time"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"onPreload"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"(chats: Array<IChatPreviewPayload>) => void"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"custom function which is triggered when chats are loaded for the first time"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"onPaging"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"(chats: Array<IChatPreviewPayload>) => void"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"custom function which is triggered when more chats are loaded on scrolling down"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"onLoading"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"(chats: Array<IChatPreviewPayload>) => void"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"custom function which is triggered when chats are loading"})]})]})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Note: Parameters ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Note: Refer ",(0,r.jsx)(t.a,{href:"/docs/chat/ui-components/Advanced/ChatUIProvider/",children:"ChatUIProvider"})," for details on its paramters."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"live-playground",children:"Live playground"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",metastring:"live",live:!0,children:"customPropMinimized = 'true';\n\n// DO NOT FORGET TO IMPORT LIBRARIES\n// NOT NEEDED HERE SINCE PLAYGROUND IMPORTS INTERNALLY\n// import { ChatUIProvider, ChatPreviewList } from @pushprotocol/uiweb;\nfunction App(props) {\n  const [signer, setSigner] = useState(null);\n  const connectWallet = async () => {\n    // Demo only supports MetaMask (or other browser based wallets) and gets provider that injects as window.ethereum into each page\n    const provider = new ethers.providers.Web3Provider(window.ethereum);\n\n    // Get provider\n    await provider.send('eth_requestAccounts', []);\n\n    // Grabbing signer from provider\n    const signer = provider.getSigner();\n\n    // store signer\n    setSigner(signer);\n  };\n\n  const disconnectWallet = async () => {\n    setSigner(null);\n  };\n  const buttonStyle = {\n    padding: '10px 20px',\n    backgroundColor: '#dd44b9',\n    color: '#FFF',\n    border: 'none',\n    borderRadius: '5px',\n    cursor: 'pointer',\n    marginTop: '20px',\n  };\n  return (\n    <>\n      <ChatUIProvider signer={signer}>\n        <label>\n          For this demo, You will need Metamask (or equivalent browser injected\n          wallet), you will also need to sign a transaction to see the\n          notifications. Connect wallet for better usage of the ChatViewList\n          component.\n        </label>\n\n        <p />\n        <button\n          style={buttonStyle}\n          onClick={signer ? disconnectWallet : connectWallet}\n        >\n          {signer ? 'Disconnect wallet' : 'Connect Wallet'}\n        </button>\n\n        <div\n          style={{\n            height: '75vh',\n            margin: '20px auto',\n            overflow: 'hidden scroll',\n          }}\n        >\n          <ChatPreviewList listType='CHATS' />\n        </div>\n      </ChatUIProvider>\n    </>\n  );\n}\n"})})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},119365:(e,t,n)=>{n.d(t,{A:()=>o});n(296540);var r=n(618215);const s={tabItem:"tabItem_Ymn6"};var i=n(474848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:n,children:t})}},411470:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(296540),s=n(618215),i=n(823104),o=n(956347),a=n(300205),c=n(757485),d=n(231682),l=n(289466);function h(e){var t,n;return null!==(t=null===(n=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,c.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=u(e),[o,c]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=null!==(t=r.find((e=>e.default)))&&void 0!==t?t:r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:i}))),[d,h]=m({queryString:n,groupId:s}),[v,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,l.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),j=(()=>{const e=null!=d?d:v;return p({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{j&&c(j)}),[j]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),x(e)}),[h,x,i]),tabValues:i}}var x=n(992303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(474848);function f(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),l=e=>{const t=e.currentTarget,n=c.indexOf(t),s=a[n].value;s!==r&&(d(t),o(s))},h=e=>{var t;let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{var r;const t=c.indexOf(e.currentTarget)+1;n=null!==(r=c[t])&&void 0!==r?r:c[0];break}case"ArrowLeft":{var s;const t=c.indexOf(e.currentTarget)-1;n=null!==(s=c[t])&&void 0!==s?s:c[c.length-1];break}}null===(t=n)||void 0===t||t.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:h,onClick:l,...i,className:(0,s.A)("tabs__item",j.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===t}),children:null!=n?n:t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=v(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,b.jsx)(f,{...e,...t}),(0,b.jsx)(g,{...e,...t})]})}function y(e){const t=(0,x.A)();return(0,b.jsx)(w,{...e,children:h(e.children)},String(t))}},362986:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/chat-preview-list-cde1809c22b42b28b66a97de144d250c.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(296540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);