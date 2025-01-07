"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[87393],{461490:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var r=t(474848),o=t(28453),s=t(411470),a=t(119365),i=t(113490);const l={id:"docs-chat-ui-components-advanced-userprofile-component",title:"UserProfile Component",hide_title:!0,slug:"./userprofile-component",displayed_sidebar:"pushChatSidebar",sidebar_position:7,image:"/assets/docs/previews/docs_chat_ui_components_advanced--userprofile_component.png"},c="UserProfile",d={id:"chat/ui-components/Advanced/docs-chat-ui-components-advanced-userprofile-component",title:"UserProfile Component",description:"Streamlined solution for effortless profile management: a user-friendly component designed to seamlessly display and edit user profile details.",source:"@site/docs/chat/03-ui-components/Advanced/08-Integrate-Advanced-UserProfile-Component.mdx",sourceDirName:"chat/03-ui-components/Advanced",slug:"/chat/ui-components/Advanced/userprofile-component",permalink:"/push-website/pr-preview/pr-965/docs/chat/ui-components/Advanced/userprofile-component",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/chat/03-ui-components/Advanced/08-Integrate-Advanced-UserProfile-Component.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"docs-chat-ui-components-advanced-userprofile-component",title:"UserProfile Component",hide_title:!0,slug:"./userprofile-component",displayed_sidebar:"pushChatSidebar",sidebar_position:7,image:"/assets/docs/previews/docs_chat_ui_components_advanced--userprofile_component.png"},sidebar:"pushChatSidebar",previous:{title:"CreateGroupModal Component",permalink:"/push-website/pr-preview/pr-965/docs/chat/ui-components/Advanced/creategroupmodal-component"},next:{title:"ChatPreview Component",permalink:"/push-website/pr-preview/pr-965/docs/chat/ui-components/Advanced/chatpreview-component"}},u={},p=[{value:"Usage",id:"usage",level:2},{value:"Customization parameters",id:"customization-parameters",level:3},{value:"Push UserProfile Component live playground",id:"push-userprofile-component-live-playground",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components},{Head:l}=n;return l||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"userprofile",children:"UserProfile"}),"\n",(0,r.jsx)(n.p,{children:"Streamlined solution for effortless profile management: a user-friendly component designed to seamlessly display and edit user profile details."}),"\n",(0,r.jsx)(n.p,{children:"This smart component streamlines profile editing with a one-liner integration, simplifying complex tasks for users."}),"\n",(0,r.jsx)(l,{children:(0,r.jsx)("title",{children:"UserProfile | UI Components (@pushprotocol/uiweb) | Push Chat | Push\n  Documentation"})}),"\n","\n","\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(s.A,{className:"codetabs",groupId:"code-examples",children:(0,r.jsxs)(a.A,{value:"react",attributes:{className:"codetab react"},default:!0,children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'import { UserProfile } from "@pushprotocol/uiweb";\n\nconst UserProfileTest = () => {\n  return (\n    <div>\n    <UserProfile />\n    </div>\n  );\n};\n\nexport default UserProfileTest;\n'})})," ",(0,r.jsx)(i.Bs,{children:(0,r.jsx)("img",{src:t(551457).A})})]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"customization-parameters",children:"Customization parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Remarks"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"updateUserProfileModalBackground"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ModalBackgroundType"})}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsxs)(n.td,{children:["Default value is ",(0,r.jsx)(n.code,{children:'"OVERLAY"'}),", decides the update user profile modal background, possible values are ",(0,r.jsx)(n.code,{children:'"OVERLAY"'})," &#124 ",(0,r.jsx)(n.code,{children:'"BLUR"'})," &#124 ",(0,r.jsx)(n.code,{children:'"TRANSPARENT"'})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"updateUserProfileModalPositionType"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ModalPositionType"})}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsxs)(n.td,{children:["Default value is ",(0,r.jsx)(n.code,{children:'"GLOBAL"'}),", decides the update user profile modal position, it can be either relative to immediate parent(RELATIVE) or the entire screen(GLOBAL), possible values are ",(0,r.jsx)(n.code,{children:'"RELATIVE"'})," &#124 ",(0,r.jsx)(n.code,{children:'"GLOBAL"'})]})]})]})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Note: Parameters ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Note: Refer ",(0,r.jsx)(n.a,{href:"/docs/chat/ui-components/Advanced/ChatUIProvider/",children:"ChatUIProvider"})," for details on its paramters."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"push-userprofile-component-live-playground",children:"Push UserProfile Component live playground"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:"live ",live:!0,children:"// DO NOT FORGET TO IMPORT LIBRARIES\n// NOT NEEDED HERE SINCE PLAYGROUND IMPORTS INTERNALLY\n// import { ChatUIProvider, UserProfile } from @pushprotocol/uiweb;\n\nfunction App(props) {\n  const [signer, setSigner] = useState(null);\n  const connectWallet = async () => {\n    // Demo only supports MetaMask (or other browser based wallets) and gets provider that injects as window.ethereum into each page\n    const provider = new ethers.providers.Web3Provider(window.ethereum);\n\n    // Get provider\n    await provider.send('eth_requestAccounts', []);\n\n    // Grabbing signer from provider\n    const signer = provider.getSigner();\n\n    // store signer\n    setSigner(signer);\n  };\n\n  const disconnectWallet = async () => {\n    setSigner(null);\n  };\n\n  const buttonStyle = {\n    padding: '10px 20px',\n    backgroundColor: '#dd44b9',\n    color: '#FFF',\n    border: 'none',\n    borderRadius: '5px',\n    cursor: 'pointer',\n    marginTop: '20px',\n  };\n\n  return (\n    <ChatUIProvider signer={signer}>\n      <label>\n        For this demo, You will need Metamask (or equivalent browser injected\n        wallet), you will also need to sign a transaction to see the\n        notifications. Connect wallet for better usage of the UserProfile\n        component.\n      </label>\n\n      <p />\n      <button\n        style={buttonStyle}\n        onClick={signer ? disconnectWallet : connectWallet}\n      >\n        {signer ? 'Disconnect wallet' : 'Connect Wallet'}\n      </button>\n\n     {signer && (<div\n            style={{\n        maxHeight: \"75vh\",\n        margin: \"20px auto\",\n        position: \"relative\",\n      }}\n      >\n        <UserProfile />\n      </div>)}\n    </ChatUIProvider>\n  );\n}\n"})})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},119365:(e,n,t)=>{t.d(n,{A:()=>a});t(296540);var r=t(618215);const o={tabItem:"tabItem_Ymn6"};var s=t(474848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,a),hidden:t,children:n})}},411470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(296540),o=t(618215),s=t(823104),a=t(956347),i=t(300205),l=t(757485),c=t(231682),d=t(289466);function u(e){var n,t;return null!==(n=null===(t=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const o=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}),[s,o])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,s=p(e),[a,l]=(0,r.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const o=null!==(n=r.find((e=>e.default)))&&void 0!==n?n:r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:s}))),[c,u]=m({queryString:t,groupId:o}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[o,s]=(0,d.Dv)(t);return[o,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:o}),v=(()=>{const e=null!=c?c:f;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);l(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=t(992303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(474848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),o=i[t].value;o!==r&&(c(n),a(o))},u=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var r;const n=l.indexOf(e.currentTarget)+1;t=null!==(r=l[n])&&void 0!==r?r:l[0];break}case"ArrowLeft":{var o;const n=l.indexOf(e.currentTarget)-1;t=null!==(o=l[n])&&void 0!==o?o:l[l.length-1];break}}null===(n=t)||void 0===n||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d},s,{className:(0,o.A)("tabs__item",v.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function j(e){let{lazy:n,children:t,selectedValue:o}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function y(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,o.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,Object.assign({},e,n)),(0,g.jsx)(j,Object.assign({},e,n))]})}function w(e){const n=(0,b.A)();return(0,g.jsx)(y,Object.assign({},e,{children:u(e.children)}),String(n))}},551457:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/user-profile-2241a75a053efe4da371142a44bce944.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(296540);const o={},s=r.createContext(o);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);