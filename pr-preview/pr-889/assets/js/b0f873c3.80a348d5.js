"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[26259],{183174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var r=n(474848),a=n(28453),o=n(411470),s=n(119365),i=n(113490);const l={id:"docs-chat-ui-components-advanced-chatprofile-component",title:"ChatProfile Component",hide_title:!0,slug:"./chatprofile-component",displayed_sidebar:"pushChatSidebar",sidebar_position:3,image:"/assets/docs/previews/docs_chat_ui_components_advanced--chatprofile_component.png"},c="ChatProfile",d={id:"chat/ui-components/Advanced/docs-chat-ui-components-advanced-chatprofile-component",title:"ChatProfile Component",description:"Empower User Interaction: Showcase Wallet Addresses, Group Names, and Member Management with ChatProfile in Your Dapp.",source:"@site/docs/chat/03-ui-components/Advanced/03-Integrate-Advanced-ChatProfile-Component.mdx",sourceDirName:"chat/03-ui-components/Advanced",slug:"/chat/ui-components/Advanced/chatprofile-component",permalink:"/push-website/pr-preview/pr-889/docs/chat/ui-components/Advanced/chatprofile-component",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/chat/03-ui-components/Advanced/03-Integrate-Advanced-ChatProfile-Component.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"docs-chat-ui-components-advanced-chatprofile-component",title:"ChatProfile Component",hide_title:!0,slug:"./chatprofile-component",displayed_sidebar:"pushChatSidebar",sidebar_position:3,image:"/assets/docs/previews/docs_chat_ui_components_advanced--chatprofile_component.png"},sidebar:"pushChatSidebar",previous:{title:"ChatView Component",permalink:"/push-website/pr-preview/pr-889/docs/chat/ui-components/Advanced/chatview-component"},next:{title:"ChatViewList Component",permalink:"/push-website/pr-preview/pr-889/docs/chat/ui-components/Advanced/chatviewlist-component"}},u={},h=[{value:"Usage",id:"usage",level:2},{value:"Customization parameters",id:"customization-parameters",level:3},{value:"Live playground",id:"live-playground",level:3}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components},{Head:l}=t;return l||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"chatprofile",children:"ChatProfile"}),"\n",(0,r.jsx)(t.p,{children:"Empower User Interaction: Showcase Wallet Addresses, Group Names, and Member Management with ChatProfile in Your Dapp."}),"\n",(0,r.jsx)(t.p,{children:"The ChatProfile feature empowers you to autonomously construct the header of a chat view component with minimal effort, requiring just the inclusion of a chatId. It extends beyond the fundamental profile view, offering additional capabilities such as a group management modal, enhancing your chat experience."}),"\n",(0,r.jsx)(l,{children:(0,r.jsx)("title",{children:"ChatProfile | UI Components (@pushprotocol/uiweb) | Push Chat | Push\n  Documentation"})}),"\n","\n","\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(o.A,{className:"codetabs",groupId:"code-examples",children:(0,r.jsxs)(s.A,{value:"react",attributes:{className:"codetab react"},default:!0,children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"import ChatProfile from \"@pushprotocol/uiweb\";\n\nexport const ChatProfileTest () => {\nreturn (\n    <ChatProfile chatId={'330cae5f963f2df3d6d692a7075317c906468e3fe60bfb8280a7e125208939e1'} style='Info' />\n  )\n}\n"})})," ",(0,r.jsx)(i.Bs,{children:(0,r.jsx)("img",{src:n(954949).A})})]})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"customization-parameters",children:"Customization parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Remarks"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.em,{children:(0,r.jsx)(t.code,{children:"chatId"})})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"Chat id for a particular chat"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"groupInfoModalBackground"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"ModalBackgroundType"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsxs)(t.td,{children:["Default value is ",(0,r.jsx)(t.code,{children:'"OVERLAY"'}),", decides the group info modal background, possible values are ",(0,r.jsx)(t.code,{children:'"OVERLAY"'})," &#124 ",(0,r.jsx)(t.code,{children:'"BLUR"'})," &#124 ",(0,r.jsx)(t.code,{children:'"TRANSPARENT"'})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"groupInfoModalPosition"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"ModalBackgroundType"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsxs)(t.td,{children:["Default value is ",(0,r.jsx)(t.code,{children:'"GLOBAL"'}),", decides the group info modal position, it can be either relative to immediate parent(RELATIVE) or the entire screen(GLOBAL), possible values are ",(0,r.jsx)(t.code,{children:'"RELATIVE"'})," &#124 ",(0,r.jsx)(t.code,{children:'"GLOBAL"'})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"chatProfileRightHelperComponent"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"React.ReactNode"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"Custom React component that will be displayed on the right side of chat profile header"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"chatProfileLeftHelperComponent"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"React.ReactNode"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"Custom React component that will be displayed on the left side of chat profile header"})]})]})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Note: Parameters ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Note: Refer ",(0,r.jsx)(t.a,{href:"/docs/chat/ui-components/Advanced/ChatUIProvider/",children:"ChatUIProvider"})," for details on its paramters."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"live-playground",children:"Live playground"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",metastring:"live",live:!0,children:"// DO NOT FORGET TO IMPORT LIBRARIES\n// NOT NEEDED HERE SINCE PLAYGROUND IMPORTS INTERNALLY\n// import { ChatUIProvider, ChatProfile } from @pushprotocol/uiweb;\nfunction App(props) {\n  return (\n    <>\n      <h2>Interact with ChatProfile by changing the chatId.</h2>\n      <ChatUIProvider>\n        <ChatProfile\n          chatId='0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666'\n          style='Info'\n        />\n      </ChatUIProvider>\n    </>\n  );\n}\n"})})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},119365:(e,t,n)=>{n.d(t,{A:()=>s});n(296540);var r=n(618215);const a={tabItem:"tabItem_Ymn6"};var o=n(474848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},411470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(296540),a=n(618215),o=n(823104),s=n(956347),i=n(300205),l=n(757485),c=n(231682),d=n(289466);function u(e){var t,n;return null!==(t=null===(n=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[s,l]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=null!==(t=r.find((e=>e.default)))&&void 0!==t?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,u]=m({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),v=(()=>{const e=null!=c?c:f;return p({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var b=n(992303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(474848);function j(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),a=i[n].value;a!==r&&(c(t),s(a))},u=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var r;const t=l.indexOf(e.currentTarget)+1;n=null!==(r=l[t])&&void 0!==r?r:l[0];break}case"ArrowLeft":{var a;const t=l.indexOf(e.currentTarget)-1;n=null!==(a=l[t])&&void 0!==a?a:l[l.length-1];break}}null===(t=n)||void 0===t||t.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,a.A)("tabs__item",v.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===t}),children:null!=n?n:t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function C(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,x.jsx)(j,{...e,...t}),(0,x.jsx)(g,{...e,...t})]})}function w(e){const t=(0,b.A)();return(0,x.jsx)(C,{...e,children:u(e.children)},String(t))}},954949:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/chat-profile-7f941d02777085008f2d03827c5a9efc.png"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(296540);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);