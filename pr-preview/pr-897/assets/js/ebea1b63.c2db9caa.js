"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[99444],{245095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=n(474848),r=n(28453),s=n(411470),a=n(119365),d=n(113490);const o={id:"docs-chat-ui-components-advanced-chatview-component",title:"ChatView Component",hide_title:!0,slug:"./chatview-component",displayed_sidebar:"pushChatSidebar",sidebar_position:2,image:"/assets/docs/previews/docs_chat_ui_components_advanced--chatview_component.png"},c="ChatView",l={id:"chat/ui-components/Advanced/docs-chat-ui-components-advanced-chatview-component",title:"ChatView Component",description:"Effortless Messaging Integration: Add a Complete Chat Interface to Your Dapp with ChatView Component.",source:"@site/docs/chat/03-ui-components/Advanced/02-Integrate-Advanced-ChatView-Component.mdx",sourceDirName:"chat/03-ui-components/Advanced",slug:"/chat/ui-components/Advanced/chatview-component",permalink:"/push-website/pr-preview/pr-897/docs/chat/ui-components/Advanced/chatview-component",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/chat/03-ui-components/Advanced/02-Integrate-Advanced-ChatView-Component.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"docs-chat-ui-components-advanced-chatview-component",title:"ChatView Component",hide_title:!0,slug:"./chatview-component",displayed_sidebar:"pushChatSidebar",sidebar_position:2,image:"/assets/docs/previews/docs_chat_ui_components_advanced--chatview_component.png"},sidebar:"pushChatSidebar",previous:{title:"ChatUIProvider",permalink:"/push-website/pr-preview/pr-897/docs/chat/ui-components/Advanced/chatuiprovider"},next:{title:"ChatProfile Component",permalink:"/push-website/pr-preview/pr-897/docs/chat/ui-components/Advanced/chatprofile-component"}},h={},u=[{value:"Usage",id:"usage",level:2},{value:"Customization parameters",id:"customization-parameters",level:3},{value:"Live playground",id:"live-playground",level:3}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{Head:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"chatview",children:"ChatView"}),"\n",(0,i.jsx)(t.p,{children:"Effortless Messaging Integration: Add a Complete Chat Interface to Your Dapp with ChatView Component."}),"\n",(0,i.jsx)(t.p,{children:"If you want to easily add a chat feature to your application without dealing with complex API calls, this is the solution for you. With the Chat View component, you get everything you need for a chat interface, including the chat profile, input box, and message list, all in one simple package. Say goodbye to the hassle of integrating individual components or making API calls. Just input your chat ID and customize it as needed \u2013 it's that easy!"}),"\n",(0,i.jsx)(o,{children:(0,i.jsx)("title",{children:"ChatView | UI Components (@pushprotocol/uiweb) | Push Chat | Push\n  Documentation"})}),"\n","\n","\n",(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(s.A,{className:"codetabs",groupId:"code-examples",children:(0,i.jsxs)(a.A,{value:"react",attributes:{className:"codetab react"},default:!0,children:[(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:'import { ChatView } from "@pushprotocol/uiweb";\n\nconst ChatViewTest = () => {\n  return (\n    <div>\n      <ChatView\n        chatId="89f7b382b9b1496dca2b9a94ef87c80dd102db05dcb40b165fabfab28770fd55"\n        limit={10}\n        verificationFailModalPosition={MODAL_POSITION_TYPE.RELATIVE}\n      />\n    </div>\n  );\n};\n\nexport default ChatViewTest;\n'})}),(0,i.jsx)(d.Bs,{children:(0,i.jsx)("img",{src:n(532547).A})})]})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"customization-parameters",children:"Customization parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Param"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Remarks"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.code,{children:"chatId"})})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"Chat id for a particular chat"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"emoji"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean"})}),(0,i.jsx)(t.td,{children:"true"}),(0,i.jsx)(t.td,{children:"Default value is true, decides if the input field will have emoji option"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"gif"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean"})}),(0,i.jsx)(t.td,{children:"true"}),(0,i.jsx)(t.td,{children:"Default value is true,decides if the input field will have gif option"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"file"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean"})}),(0,i.jsx)(t.td,{children:"true"}),(0,i.jsx)(t.td,{children:"Default value is true,decides if the input field will have file upload option"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"isConnected"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean"})}),(0,i.jsx)(t.td,{children:"true"}),(0,i.jsx)(t.td,{children:"Default value is true,shows the connect button if signer, account and pgpPrivateKey is not passed"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"autoConnect"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean"})}),(0,i.jsx)(t.td,{children:"false"}),(0,i.jsx)(t.td,{children:"Default value is false, decrypts pgpPrivateKey after reload if true, or else disconnects the existing wallet connection"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"onVerificationFail"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"function"})}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"Function to perfom any task on gating access verification fail modal"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"messageInput"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean"})}),(0,i.jsx)(t.td,{children:"true"}),(0,i.jsx)(t.td,{children:"Default value is true,decides whether to show the message input field"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"chatProfile"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean"})}),(0,i.jsx)(t.td,{children:"true"}),(0,i.jsx)(t.td,{children:"Default value is true, decides whether to show the chat profile header"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"chatViewList"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean"})}),(0,i.jsx)(t.td,{children:"true"}),(0,i.jsx)(t.td,{children:"Default value is true,decides whether to show the message list"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"groupInfoModalBackground"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"ModalBackgroundType"})}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsxs)(t.td,{children:["Default value is ",(0,i.jsx)(t.code,{children:'"OVERLAY"'}),", decides the group info modal background, possible values are ",(0,i.jsx)(t.code,{children:'"OVERLAY"'})," &#124 ",(0,i.jsx)(t.code,{children:'"BLUR"'})," &#124 ",(0,i.jsx)(t.code,{children:'"TRANSPARENT"'})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"groupInfoModalPosition"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"ModalBackgroundType"})}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsxs)(t.td,{children:["Default value is ",(0,i.jsx)(t.code,{children:'"GLOBAL"'}),", decides the group info modal position, it can be either relative to immediate parent(RELATIVE) or the entire screen(GLOBAL), possible values are ",(0,i.jsx)(t.code,{children:'"RELATIVE"'})," &#124 ",(0,i.jsx)(t.code,{children:'"GLOBAL"'})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"verificationFailModalBackground"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"ModalBackgroundType"})}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsxs)(t.td,{children:["Default value is ",(0,i.jsx)(t.code,{children:'"OVERLAY"'}),", decides the access gating verification fail modal background, possible values are ",(0,i.jsx)(t.code,{children:'"OVERLAY"'})," &#124 ",(0,i.jsx)(t.code,{children:'"BLUR"'})," &#124 ",(0,i.jsx)(t.code,{children:'"TRANSPARENT"'})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"verificationFailModalPosition"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"ModalBackgroundType"})}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsxs)(t.td,{children:["Default value is ",(0,i.jsx)(t.code,{children:'"GLOBAL"'}),", decides the access gating verification fail modal position, it can be either relative to immediate parent(RELATIVE) or the entire screen(GLOBAL), possible values are ",(0,i.jsx)(t.code,{children:'"RELATIVE"'})," &#124 ",(0,i.jsx)(t.code,{children:'"GLOBAL"'})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.code,{children:"chatFilterList"})})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Array<string>"})}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"Array of cid's of messages that needs to be excluded from chatViewList"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"limit"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"number"})}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"Number of messages fetched in each paginated api call,default value is 10"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"chatProfileRightHelperComponent"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"React.ReactNode"})}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"Custom React component that will be displayed on the right side of chat profile header"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"chatProfileLeftHelperComponent"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"React.ReactNode"})}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"Custom React component that will be displayed on the left side of chat profile header"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"welcomeComponent"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"React.ReactNode"})}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"Custom React component that will be displayed if chatId is not passed on. This is the welcome screen of the chat View component"})]})]})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Note: Refer ",(0,i.jsx)(t.a,{href:"/docs/chat/ui-components/Advanced/ChatUIProvider/",children:"ChatUIProvider"})," for details on its paramters."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"live-playground",children:"Live playground"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",metastring:"live",live:!0,children:"// DO NOT FORGET TO IMPORT LIBRARIES\n// NOT NEEDED HERE SINCE PLAYGROUND IMPORTS INTERNALLY\n// import { ChatUIProvider, ChatView } from @pushprotocol/uiweb;\nfunction App(props) {\n  return (\n    <>\n      <h2>\n        Live chat with pushai.eth, connect your wallet and chat to get sassy\n        response from PushAI.eth\n      </h2>\n      <div style={{ height: '75vh', margin: '20px auto' }}>\n        <ChatUIProvider>\n          <ChatView\n            chatId='0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666'\n            limit={10}\n            isConnected={true}\n            autoConnect={false}\n            verificationFailModalPosition={MODAL_POSITION_TYPE.RELATIVE}\n          />\n        </ChatUIProvider>\n      </div>\n    </>\n  );\n}\n"})})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},119365:(e,t,n)=>{n.d(t,{A:()=>a});n(296540);var i=n(618215);const r={tabItem:"tabItem_Ymn6"};var s=n(474848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,a),hidden:n,children:t})}},411470:(e,t,n)=>{n.d(t,{A:()=>C});var i=n(296540),r=n(618215),s=n(823104),a=n(956347),d=n(300205),o=n(757485),c=n(231682),l=n(289466);function h(e){var t,n;return null!==(t=null===(n=i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function u(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=null!=t?t:function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:r}}=e;return{value:t,label:n,attributes:i,default:r}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:n}=e;const r=(0,a.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,o.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function j(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=u(e),[a,o]=(0,i.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=null!==(t=i.find((e=>e.default)))&&void 0!==t?t:i[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,h]=x({queryString:n,groupId:r}),[j,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,l.Dv)(n);return[r,(0,i.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),f=(()=>{const e=null!=c?c:j;return p({value:e,tabValues:s})?e:null})();(0,d.A)((()=>{f&&o(f)}),[f]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),m(e)}),[h,m,s]),tabValues:s}}var m=n(992303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(474848);function b(e){let{className:t,block:n,selectedValue:i,selectValue:a,tabValues:d}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),l=e=>{const t=e.currentTarget,n=o.indexOf(t),r=d[n].value;r!==i&&(c(t),a(r))},h=e=>{var t;let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{var i;const t=o.indexOf(e.currentTarget)+1;n=null!==(i=o[t])&&void 0!==i?i:o[0];break}case"ArrowLeft":{var r;const t=o.indexOf(e.currentTarget)-1;n=null!==(r=o[t])&&void 0!==r?r:o[o.length-1];break}}null===(t=n)||void 0===t||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:d.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>o.push(e),onKeyDown:h,onClick:l,...s,className:(0,r.A)("tabs__item",f.tabItem,null==s?void 0:s.className,{"tabs__item--active":i===t}),children:null!=n?n:t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=j(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,v.jsx)(b,{...e,...t}),(0,v.jsx)(g,{...e,...t})]})}function C(e){const t=(0,m.A)();return(0,v.jsx)(w,{...e,children:h(e.children)},String(t))}},532547:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/chat-view-6ad966dbd2d5595085496e8a5fc555dd.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>d});var i=n(296540);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);