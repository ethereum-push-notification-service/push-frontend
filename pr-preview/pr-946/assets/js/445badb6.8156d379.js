"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[38413],{187687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var o=n(474848),r=n(28453),a=n(411470),s=n(119365),l=n(113490);const i={id:"docs-chat-ui-components-advanced-creategroupmodal-component",title:"CreateGroupModal Component",hide_title:!0,slug:"./creategroupmodal-component",displayed_sidebar:"pushChatSidebar",sidebar_position:7,image:"/assets/docs/previews/docs_chat_ui_components_advanced--creategroupmodal_component.png"},c="CreateGroupModal",d={id:"chat/ui-components/Advanced/docs-chat-ui-components-advanced-creategroupmodal-component",title:"CreateGroupModal Component",description:"Effortless Modal Integration: Add a modal to create group effortlessly with CreateGroupModal.",source:"@site/docs/chat/03-ui-components/Advanced/07-Integrate-Advanced-CreateGroupModal-Component.mdx",sourceDirName:"chat/03-ui-components/Advanced",slug:"/chat/ui-components/Advanced/creategroupmodal-component",permalink:"/push-website/pr-preview/pr-946/docs/chat/ui-components/Advanced/creategroupmodal-component",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/chat/03-ui-components/Advanced/07-Integrate-Advanced-CreateGroupModal-Component.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"docs-chat-ui-components-advanced-creategroupmodal-component",title:"CreateGroupModal Component",hide_title:!0,slug:"./creategroupmodal-component",displayed_sidebar:"pushChatSidebar",sidebar_position:7,image:"/assets/docs/previews/docs_chat_ui_components_advanced--creategroupmodal_component.png"},sidebar:"pushChatSidebar",previous:{title:"ChatViewBubble Component",permalink:"/push-website/pr-preview/pr-946/docs/chat/ui-components/Advanced/chatviewbubble-component"},next:{title:"UserProfile Component",permalink:"/push-website/pr-preview/pr-946/docs/chat/ui-components/Advanced/userprofile-component"}},u={},p=[{value:"Usage",id:"usage",level:2},{value:"Customization parameters",id:"customization-parameters",level:3},{value:"Push CreateGroupModal Component live playground",id:"push-creategroupmodal-component-live-playground",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"creategroupmodal",children:"CreateGroupModal"}),"\n",(0,o.jsx)(t.p,{children:"Effortless Modal Integration: Add a modal to create group effortlessly with CreateGroupModal."}),"\n",(0,o.jsxs)(t.p,{children:["Creating groups becomes a straightforward task with this modal component, completely eliminating the need to concern yourself with its functionality. By simply passing an ",(0,o.jsx)(t.code,{children:"onClose"})," method for the modal, you can effortlessly integrate it into your application. This versatility allows you to create both gated and non-gated groups without any hassle."]}),"\n",(0,o.jsx)(i,{children:(0,o.jsx)("title",{children:"CreateGroupModal | UI Components (@pushprotocol/uiweb) | Push Chat | Push\n  Documentation"})}),"\n","\n","\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(a.A,{className:"codetabs",groupId:"code-examples",children:(0,o.jsxs)(s.A,{value:"react",attributes:{className:"codetab react"},default:!0,children:[(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"import { CreateGroupModal } from \"@pushprotocol/uiweb\";\n\nconst CreateGroupModalTest = () => {\n  return (\n    <div>\n    <CreateGroupModal onClose={()=>{console.log('closes the modal')}}/>\n    </div>\n  );\n};\n\nexport default CreateGroupModalTest;\n"})})," ",(0,o.jsx)(l.Bs,{children:(0,o.jsx)("img",{src:n(463326).A})})]})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h3,{id:"customization-parameters",children:"Customization parameters"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Param"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Default"}),(0,o.jsx)(t.th,{children:"Remarks"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.em,{children:(0,o.jsx)(t.code,{children:"onClose"})})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"function"})}),(0,o.jsx)(t.td,{children:"-"}),(0,o.jsx)(t.td,{children:"Function to perfom any task on clicking the cancel or cross button on the modal"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"modalBackground"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"ModalBackgroundType"})}),(0,o.jsx)(t.td,{children:"-"}),(0,o.jsxs)(t.td,{children:["Default value is ",(0,o.jsx)(t.code,{children:'"OVERLAY"'}),", decides the create group modal background, possible values are ",(0,o.jsx)(t.code,{children:'"OVERLAY"'})," &#124 ",(0,o.jsx)(t.code,{children:'"BLUR"'})," &#124 ",(0,o.jsx)(t.code,{children:'"TRANSPARENT"'})]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"modalPositionType"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"ModalPositionType"})}),(0,o.jsx)(t.td,{children:"-"}),(0,o.jsxs)(t.td,{children:["Default value is ",(0,o.jsx)(t.code,{children:'"GLOBAL"'}),", decides the create group modal position, it can be either relative to immediate parent(RELATIVE) or the entire screen(GLOBAL), possible values are ",(0,o.jsx)(t.code,{children:'"RELATIVE"'})," &#124 ",(0,o.jsx)(t.code,{children:'"GLOBAL"'})]})]})]})]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["Note: Parameters ",(0,o.jsx)(t.em,{children:(0,o.jsx)(t.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["Note: Refer ",(0,o.jsx)(t.a,{href:"/docs/chat/ui-components/Advanced/ChatUIProvider/",children:"ChatUIProvider"})," for details on its paramters."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"push-creategroupmodal-component-live-playground",children:"Push CreateGroupModal Component live playground"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",metastring:"live customPropMinimized = 'true';",live:!0,children:"// DO NOT FORGET TO IMPORT LIBRARIES\n// NOT NEEDED HERE SINCE PLAYGROUND IMPORTS INTERNALLY\n// import { ChatUIProvider, CreateGroupModal,MODAL_POSITION_TYPE } from @pushprotocol/uiweb;\nfunction App(props) {\n  const [signer, setSigner] = useState(null);\n  const connectWallet = async () => {\n    // Demo only supports MetaMask (or other browser based wallets) and gets provider that injects as window.ethereum into each page\n    const provider = new ethers.providers.Web3Provider(window.ethereum);\n\n    // Get provider\n    await provider.send('eth_requestAccounts', []);\n\n    // Grabbing signer from provider\n    const signer = provider.getSigner();\n\n    // store signer\n    setSigner(signer);\n  };\n\n  const disconnectWallet = async () => {\n    setSigner(null);\n  };\n  const buttonStyle = {\n    padding: '10px 20px',\n    backgroundColor: '#dd44b9',\n    color: '#FFF',\n    border: 'none',\n    borderRadius: '5px',\n    cursor: 'pointer',\n    marginTop: '20px',\n  };\n  return (\n    <>\n      <h2></h2>\n      <label>\n        For this demo, You will need Metamask (or equivalent browser injected\n        wallet), you will also need to sign a transaction to see the\n        notifications. Connect wallet for better usage of the CreateGroupModal\n        component.\n      </label>\n      <p />\n      <button\n        style={buttonStyle}\n        onClick={signer ? disconnectWallet : connectWallet}\n      >\n        {signer ? 'Disconnect wallet' : 'Connect Wallet'}\n      </button>\n\n      <ChatUIProvider signer={signer}>\n        <div\n          style={{ height: '75vh', margin: '20px auto', position: 'relative' }}\n        >\n          <CreateGroupModal\n            onClose={() => {\n              console.log('closes the modal');\n            }}\n            modalPositionType={MODAL_POSITION_TYPE.RELATIVE}\n          />\n        </div>\n      </ChatUIProvider>\n    </>\n  );\n}\n"})})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},119365:(e,t,n)=>{n.d(t,{A:()=>s});n(296540);var o=n(618215);const r={tabItem:"tabItem_Ymn6"};var a=n(474848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,o.A)(r.tabItem,s),hidden:n,children:t})}},411470:(e,t,n)=>{n.d(t,{A:()=>C});var o=n(296540),r=n(618215),a=n(823104),s=n(956347),l=n(300205),i=n(757485),c=n(231682),d=n(289466);function u(e){var t,n;return null!==(t=null===(n=o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function p(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=null!=t?t:function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:r}}=e;return{value:t,label:n,attributes:o,default:r}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,i.aZ)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}),[a,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=p(e),[s,i]=(0,o.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:o}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+o.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const r=null!==(t=o.find((e=>e.default)))&&void 0!==t?t:o[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,u]=m({queryString:n,groupId:r}),[b,v]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[r,a]=(0,d.Dv)(n);return[r,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),g=(()=>{const e=null!=c?c:b;return h({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error("Can't select invalid tab value="+e);i(e),u(e),v(e)}),[u,v,a]),tabValues:a}}var v=n(992303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(474848);function x(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),r=l[n].value;r!==o&&(c(t),s(r))},u=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var o;const t=i.indexOf(e.currentTarget)+1;n=null!==(o=i[t])&&void 0!==o?o:i[0];break}case"ArrowLeft":{var r;const t=i.indexOf(e.currentTarget)-1;n=null!==(r=i[t])&&void 0!==r?r:i[i.length-1];break}}null===(t=n)||void 0===t||t.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,f.jsx)("li",Object.assign({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>i.push(e),onKeyDown:u,onClick:d},a,{className:(0,r.A)("tabs__item",g.tabItem,null==a?void 0:a.className,{"tabs__item--active":o===t}),children:null!=n?n:t}),t)}))})}function j(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=b(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,f.jsx)(x,Object.assign({},e,t)),(0,f.jsx)(j,Object.assign({},e,t))]})}function C(e){const t=(0,v.A)();return(0,f.jsx)(y,Object.assign({},e,{children:u(e.children)}),String(t))}},463326:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/create-group-modal-0a7bbb15be28e5fc6e259844966ad992.png"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var o=n(296540);const r={},a=o.createContext(r);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);