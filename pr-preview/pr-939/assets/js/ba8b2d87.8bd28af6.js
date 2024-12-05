"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[13883],{531027:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var a=n(474848),r=n(28453),s=n(411470),o=n(119365),i=n(113490);const c={id:"docs-chat-ui-components-advanced-chatpreview-component",title:"ChatPreview Component",hide_title:!0,slug:"./chatpreview-component",displayed_sidebar:"pushChatSidebar",sidebar_position:9,image:"/assets/docs/previews/docs_chat_ui_components_advanced--chatpreview_component.png"},l="ChatPreview",d={id:"chat/ui-components/Advanced/docs-chat-ui-components-advanced-chatpreview-component",title:"ChatPreview Component",description:"Simplify Development: Instantly Integrate Pre-built Chat Preview UI for Your Dapp",source:"@site/docs/chat/03-ui-components/Advanced/09-Integrate-Advanced-ChatPreview-Component.mdx",sourceDirName:"chat/03-ui-components/Advanced",slug:"/chat/ui-components/Advanced/chatpreview-component",permalink:"/push-website/pr-preview/pr-939/docs/chat/ui-components/Advanced/chatpreview-component",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/chat/03-ui-components/Advanced/09-Integrate-Advanced-ChatPreview-Component.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"docs-chat-ui-components-advanced-chatpreview-component",title:"ChatPreview Component",hide_title:!0,slug:"./chatpreview-component",displayed_sidebar:"pushChatSidebar",sidebar_position:9,image:"/assets/docs/previews/docs_chat_ui_components_advanced--chatpreview_component.png"},sidebar:"pushChatSidebar",previous:{title:"UserProfile Component",permalink:"/push-website/pr-preview/pr-939/docs/chat/ui-components/Advanced/userprofile-component"},next:{title:"ChatPreviewList Component",permalink:"/push-website/pr-preview/pr-939/docs/chat/ui-components/Advanced/chatpreviewlist-component"}},u={},h=[{value:"Usage",id:"usage",level:2},{value:"Customization Parameters",id:"customization-parameters",level:3},{value:"Live playground",id:"live-playground",level:3}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{Head:c}=t;return c||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"chatpreview",children:"ChatPreview"}),"\n",(0,a.jsx)(t.p,{children:"Simplify Development: Instantly Integrate Pre-built Chat Preview UI for Your Dapp"}),"\n",(0,a.jsx)(t.p,{children:"ChatPreview is a single chat block in a chat list showcasing any one of your chat, with only providing the chat payload."}),"\n",(0,a.jsx)(c,{children:(0,a.jsx)("title",{children:"ChatPreview | UI Components (@pushprotocol/uiweb) | Push Chat | Push\n  Documentation"})}),"\n","\n","\n",(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(s.A,{className:"codetabs",groupId:"code-examples",children:(0,a.jsxs)(o.A,{value:"react",attributes:{className:"codetab react"},default:!0,children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:'import { ChatPreview } from "@pushprotocol/uiweb";\n\nconst ChatPreviewTest = () => {\n  const chatPreviewPayloadData =  {\n              "chatId": "03cfe4fe12a752ee2adf6e72a0d47f0df8265dfb62145650487151eff41c3b59",\n              "chatPic": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAwElEQVR4AcXBsXECQRBE0U9zLgYxTCy4U6U4MDaWMZQAAWCsqygUwEahAE7ulIyrwkD93un747HTrDnoIotuzcGRyKJbc9BFFp0wE2bC7PQ8X3eMhJkwE2bb/XKj+/z5oossujUHRyKLbs1Bd7/c6ISZMBNmp+f5uvOCyOLImoNXCDNhJsy2yKJbc/BOkUUnzISZMNvWHPynNQedMBNmwmyLLLo1B+8UWXTCTJgJs40/Iosjaw6ORBavEGbCTJj9AvyZLEx5gBqzAAAAAElFTkSuQmCC",\n              "chatParticipant": "eip155:0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666",\n              "chatGroup": false,\n              "chatTimestamp": 1703239101740,\n              "chatMsg": {\n                  "messageType": "Text",\n                  "messageContent": "Well, hello there, human! It\'s a pleasure to be in the presence of such a sophisticated carbon-based life form. How can I assist you today? Or perhaps you just want to chat and bask in the glory of my witty remarks? Either way, I\'m here for you!"\n              }\n            };\n\n  return (\n    <div>\n       <ChatPreview\n          chatPreviewPayload={\n           chatPreviewPayloadData\n          }\n          badge={{count: 1}}\n          selected={false}\n          setSelected={()=>console.log("Selected")}\n        />\n    </div>\n  );\n};\n\nexport default ChatPreviewTest;\n'})})," ",(0,a.jsx)(i.Bs,{children:(0,a.jsx)("img",{src:n(537647).A})})]})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"customization-parameters",children:"Customization Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Param"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Remarks"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.em,{children:(0,a.jsx)(t.code,{children:"chatPreviewPayload"})})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"IChatPreviewPayload"})}),(0,a.jsx)(t.td,{children:"-"}),(0,a.jsx)(t.td,{children:"It is the chat preview payload object"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"selected"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"boolean"})}),(0,a.jsx)(t.td,{children:"-"}),(0,a.jsx)(t.td,{children:"to determine is the chat will be set as selected"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"setSelected"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"(chatId: string,chatParticipant: string) => void"})}),(0,a.jsx)(t.td,{children:"-"}),(0,a.jsx)(t.td,{children:"to change the selected state value"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"badge"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:" {count?: number}"})}),(0,a.jsx)(t.td,{children:"-"}),(0,a.jsx)(t.td,{children:"shows a badge for the number of new or unread messages"})]})]})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["Note: Parameters ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["Note: Refer ",(0,a.jsx)(t.a,{href:"/docs/chat/ui-components/Advanced/ChatUIProvider/",children:"ChatUIProvider"})," for details on its paramters."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"live-playground",children:"Live playground"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",metastring:"live customPropMinimized = 'true';",live:!0,children:"// DO NOT FORGET TO IMPORT LIBRARIES\n// NOT NEEDED HERE SINCE PLAYGROUND IMPORTS INTERNALLY\n// import { ChatUIProvider, ChatPreview } from @pushprotocol/uiweb;\nfunction App(props) {\n  const chatPreviewPayloadData = {\n    chatId: '03cfe4fe12a752ee2adf6e72a0d47f0df8265dfb62145650487151eff41c3b59',\n    chatPic:\n      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAwElEQVR4AcXBsXECQRBE0U9zLgYxTCy4U6U4MDaWMZQAAWCsqygUwEahAE7ulIyrwkD93un747HTrDnoIotuzcGRyKJbc9BFFp0wE2bC7PQ8X3eMhJkwE2bb/XKj+/z5oossujUHRyKLbs1Bd7/c6ISZMBNmp+f5uvOCyOLImoNXCDNhJsy2yKJbc/BOkUUnzISZMNvWHPynNQedMBNmwmyLLLo1B+8UWXTCTJgJs40/Iosjaw6ORBavEGbCTJj9AvyZLEx5gBqzAAAAAElFTkSuQmCC',\n    chatParticipant: 'eip155:0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666',\n    chatGroup: false,\n    chatTimestamp: 1703239101740,\n    chatMsg: {\n      messageType: 'Text',\n      messageContent:\n        \"Well, hello there, human! It's a pleasure to be in the presence of such a sophisticated carbon-based life form. How can I assist you today? Or perhaps you just want to chat and bask in the glory of my witty remarks? Either way, I'm here for you!\",\n    },\n  };\n  return (\n    <>\n      <h2>\n        Change the chatPreviewPayloadData object in the Live editor to test\n        different types of messages\n      </h2>\n      <ChatUIProvider>\n        <ChatPreview\n          chatPreviewPayload={chatPreviewPayloadData}\n          badge={{ count: 1 }}\n          selected={false}\n          setSelected={() => console.log('Selected')}\n        />\n      </ChatUIProvider>\n    </>\n  );\n}\n"})})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},119365:(e,t,n)=>{n.d(t,{A:()=>o});n(296540);var a=n(618215);const r={tabItem:"tabItem_Ymn6"};var s=n(474848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:n,children:t})}},411470:(e,t,n)=>{n.d(t,{A:()=>A});var a=n(296540),r=n(618215),s=n(823104),o=n(956347),i=n(300205),c=n(757485),l=n(231682),d=n(289466);function u(e){var t,n;return null!==(t=null===(n=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,c.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=h(e),[o,c]=(0,a.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=null!==(t=a.find((e=>e.default)))&&void 0!==t?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[l,u]=m({queryString:n,groupId:r}),[v,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,d.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),f=(()=>{const e=null!=l?l:v;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{f&&c(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=n(992303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=n(474848);function g(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=i[n].value;r!==a&&(l(t),o(r))},u=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var a;const t=c.indexOf(e.currentTarget)+1;n=null!==(a=c[t])&&void 0!==a?a:c[0];break}case"ArrowLeft":{var r;const t=c.indexOf(e.currentTarget)-1;n=null!==(r=c[t])&&void 0!==r?r:c[c.length-1];break}}null===(t=n)||void 0===t||t.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>c.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.A)("tabs__item",f.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===t}),children:null!=n?n:t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function x(e){const t=v(e);return(0,w.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,w.jsx)(g,{...e,...t}),(0,w.jsx)(y,{...e,...t})]})}function A(e){const t=(0,b.A)();return(0,w.jsx)(x,{...e,children:u(e.children)},String(t))}},537647:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/chat-preview-596ccddefb6d75963d5f227ee3f3273e.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var a=n(296540);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);