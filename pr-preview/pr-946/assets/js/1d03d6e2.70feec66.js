"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[73e3],{401705:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(474848),s=n(28453),o=n(411470),r=n(119365);const l={id:"docs-notifications-tutorials-push-react-component-playground-example",title:"Push SDK React Playground",hide_title:!0,slug:"./push-react-component-playground-example",displayed_sidebar:"pushNotificationSidebar",sidebar_position:2,image:"/assets/docs/previews/docs_notifications_tutorials_push_react_component_playground_example--push_sdk_react_playground.png"},i="Push SDK React playground",u={id:"notifications/playground/docs-notifications-tutorials-push-react-component-playground-example",title:"Push SDK React Playground",description:"This tutorial is designed to get you up and going by providing playground containing all frontend React components coverage. Checkout Push SDK React frontend example that utlizes @pushprotocol/uiweb @pushprotocol/restapi and @pushprotocol/socket for more info!",source:"@site/docs/notifications/03-playground/02-Playground-Push-React-Component-Playground-Tutorial.mdx",sourceDirName:"notifications/03-playground",slug:"/notifications/playground/push-react-component-playground-example",permalink:"/push-website/pr-preview/pr-946/docs/notifications/playground/push-react-component-playground-example",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/notifications/03-playground/02-Playground-Push-React-Component-Playground-Tutorial.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"docs-notifications-tutorials-push-react-component-playground-example",title:"Push SDK React Playground",hide_title:!0,slug:"./push-react-component-playground-example",displayed_sidebar:"pushNotificationSidebar",sidebar_position:2,image:"/assets/docs/previews/docs_notifications_tutorials_push_react_component_playground_example--push_sdk_react_playground.png"},sidebar:"pushNotificationSidebar",previous:{title:"Push SDK Playground",permalink:"/push-website/pr-preview/pr-946/docs/notifications/playground/push-sdk-playground"},next:{title:"Showrunners Scaffold",permalink:"/push-website/pr-preview/pr-946/docs/notifications/showrunners-scaffold"}},c={},d=[{value:"Step 1: Clone the Push SDK Repository",id:"step-1-clone-the-push-sdk-repository",level:2},{value:"Step 2: Install Dependencies",id:"step-2-install-dependencies",level:2},{value:"Step 3: Install playground dependencies",id:"step-3-install-playground-dependencies",level:2},{value:"Step 4: Run Push SDK React playground",id:"step-4-run-push-sdk-react-playground",level:2},{value:"Expected Output",id:"expected-output",level:3}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Head:l}=t;return l||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"push-sdk-react-playground",children:"Push SDK React playground"}),"\n",(0,a.jsxs)(t.p,{children:["This tutorial is designed to get you up and going by providing playground containing all frontend React components coverage. Checkout ",(0,a.jsx)(t.a,{href:"https://github.com/push-protocol/push-sdk/tree/main/packages/examples/sdk-frontend-react",children:"Push SDK React frontend example"})," that utlizes ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/@pushprotocol/uiweb",children:"@pushprotocol/uiweb"})," ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/@pushprotocol/restapi",children:"@pushprotocol/restapi"})," and ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/@pushprotocol/socket",children:"@pushprotocol/socket"})," for more info!"]}),"\n",(0,a.jsx)(l,{children:(0,a.jsx)("title",{children:"Push SDK React playground tutorial | Push Notification | Push Documentation"})}),"\n","\n","\n",(0,a.jsx)(t.h2,{id:"step-1-clone-the-push-sdk-repository",children:"Step 1: Clone the Push SDK Repository"}),"\n",(0,a.jsx)(t.p,{children:"Download the Push SDK repository to your local machine."}),"\n",(0,a.jsx)(o.A,{className:"codetabs",groupId:"code-examples",children:(0,a.jsx)(r.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-zsh",children:"git clone https://github.com/push-protocol/push-sdk.git\n"})})})}),"\n",(0,a.jsx)(t.h2,{id:"step-2-install-dependencies",children:"Step 2: Install Dependencies"}),"\n",(0,a.jsx)(t.p,{children:"Navigate to the SDK directory and install required dependencies."}),"\n",(0,a.jsx)(o.A,{className:"codetabs",groupId:"code-examples",children:(0,a.jsx)(r.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-zsh",children:"cd push-sdk\nyarn install\n"})})})}),"\n",(0,a.jsx)(t.h2,{id:"step-3-install-playground-dependencies",children:"Step 3: Install playground dependencies"}),"\n",(0,a.jsx)(t.p,{children:"React-playground depends on restapi and uiweb packages whose dependencies also need to be installed."}),"\n",(0,a.jsx)(o.A,{className:"codetabs",groupId:"code-examples",children:(0,a.jsx)(r.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-zsh",children:"# Navigate to restapi package and install package dependencies\ncd packages/restapi && yarn install\n\n# Nagivate back to root directory\ncd ../..\n\n# Navigate to uiweb package and install package dependencies\ncd packages/uiweb && yarn install\n\n# Nagivate back to root directory\ncd ../..\n"})})})}),"\n",(0,a.jsx)(t.h2,{id:"step-4-run-push-sdk-react-playground",children:"Step 4: Run Push SDK React playground"}),"\n",(0,a.jsx)(o.A,{className:"codetabs",groupId:"code-examples",children:(0,a.jsx)(r.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-zsh",children:"yarn nx run examples-sdk-frontend-react:serve:development\n"})})})}),"\n",(0,a.jsx)(t.h3,{id:"expected-output",children:"Expected Output"}),"\n",(0,a.jsxs)(t.p,{children:["The following React app should be running on ",(0,a.jsx)(t.code,{children:"http://localhost:4200/"})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"&quot;Push React Component Playground&quot;",src:n(535505).A+"",title:"Example of how the playground will look like if setup properly",width:"1347",height:"579"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},119365:(e,t,n)=>{n.d(t,{A:()=>r});n(296540);var a=n(618215);const s={tabItem:"tabItem_Ymn6"};var o=n(474848);function r(e){let{children:t,hidden:n,className:r}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,r),hidden:n,children:t})}},411470:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(296540),s=n(618215),o=n(823104),r=n(956347),l=n(300205),i=n(757485),u=n(231682),c=n(289466);function d(e){var t,n;return null!==(t=null===(n=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:s}}=e;return{value:t,label:n,attributes:a,default:s}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const s=(0,r.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,i.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(s.location.search);t.set(o,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}),[o,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,o=p(e),[r,i]=(0,a.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const s=null!==(t=a.find((e=>e.default)))&&void 0!==t?t:a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:o}))),[u,d]=g({queryString:n,groupId:s}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[s,o]=(0,c.Dv)(n);return[s,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:s}),b=(()=>{const e=null!=u?u:m;return h({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{b&&i(b)}),[b]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);i(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=n(992303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(474848);function v(e){let{className:t,block:n,selectedValue:a,selectValue:r,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),s=l[n].value;s!==a&&(u(t),r(s))},d=e=>{var t;let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{var a;const t=i.indexOf(e.currentTarget)+1;n=null!==(a=i[t])&&void 0!==a?a:i[0];break}case"ArrowLeft":{var s;const t=i.indexOf(e.currentTarget)-1;n=null!==(s=i[t])&&void 0!==s?s:i[i.length-1];break}}null===(t=n)||void 0===t||t.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,y.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:d,onClick:c},o,{className:(0,s.A)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function x(e){let{lazy:t,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function j(e){const t=m(e);return(0,y.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,y.jsx)(v,Object.assign({},e,t)),(0,y.jsx)(x,Object.assign({},e,t))]})}function w(e){const t=(0,f.A)();return(0,y.jsx)(j,Object.assign({},e,{children:d(e.children)}),String(t))}},535505:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/sdk-react-playground-efc071ee344194f2d746beed0a13801d.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var a=n(296540);const s={},o=a.createContext(s);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);