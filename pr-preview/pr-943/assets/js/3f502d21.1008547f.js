"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[35966],{594139:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=n(474848),o=n(28453),r=n(411470),s=n(119365);const l={id:"docs-video-playground-push-react-component-playground-example",title:"Push SDK React Playground",hide_title:!0,slug:"./push-react-component-playground-example",displayed_sidebar:"pushVideoSidebar",sidebar_position:2,image:"/assets/docs/previews/docs_video_playground_push_react_component_playground_example--push_sdk_react_playground.png"},i="Push SDK React playground",u={id:"video/playground/docs-video-playground-push-react-component-playground-example",title:"Push SDK React Playground",description:"This tutorial is designed to get you up and going by providing playground containing a React implementation of Push Video. Checkout Push SDK React frontend example that utlizes @pushprotocol/uiweb @pushprotocol/restapi and @pushprotocol/socket for more info!",source:"@site/docs/video/02-playground/02-Playground-Push-React-Component-Playground-Tutorial.mdx",sourceDirName:"video/02-playground",slug:"/video/playground/push-react-component-playground-example",permalink:"/push-website/pr-preview/pr-943/docs/video/playground/push-react-component-playground-example",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/video/02-playground/02-Playground-Push-React-Component-Playground-Tutorial.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"docs-video-playground-push-react-component-playground-example",title:"Push SDK React Playground",hide_title:!0,slug:"./push-react-component-playground-example",displayed_sidebar:"pushVideoSidebar",sidebar_position:2,image:"/assets/docs/previews/docs_video_playground_push_react_component_playground_example--push_sdk_react_playground.png"},sidebar:"pushVideoSidebar",previous:{title:"Push SDK Playground",permalink:"/push-website/pr-preview/pr-943/docs/video/playground/push-sdk-playground"}},d={},c=[{value:"Step 1: Clone the Push SDK Repository",id:"step-1-clone-the-push-sdk-repository",level:2},{value:"Step 2: Install Dependencies",id:"step-2-install-dependencies",level:2},{value:"Step 3: Install playground dependencies",id:"step-3-install-playground-dependencies",level:2},{value:"Step 4: Run Push SDK React playground",id:"step-4-run-push-sdk-react-playground",level:2},{value:"Expected Output",id:"expected-output",level:3},{value:"Step 5: Experiment with Video implementation",id:"step-5-experiment-with-video-implementation",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Head:l}=t;return l||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"push-sdk-react-playground",children:"Push SDK React playground"}),"\n",(0,a.jsxs)(t.p,{children:["This tutorial is designed to get you up and going by providing playground containing a React implementation of Push Video. Checkout ",(0,a.jsx)(t.a,{href:"https://github.com/push-protocol/push-sdk/tree/main/packages/examples/sdk-frontend-react",children:"Push SDK React frontend example"})," that utlizes ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/@pushprotocol/uiweb",children:"@pushprotocol/uiweb"})," ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/@pushprotocol/restapi",children:"@pushprotocol/restapi"})," and ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/@pushprotocol/socket",children:"@pushprotocol/socket"})," for more info!"]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["The Push SDK React Playground is hosted live. To experiment with the React implementation of Push Video, visit the ",(0,a.jsx)(t.a,{href:"https://react-playground.push.org/#/video",children:"Push SDK React Playground Video Section"}),"."]})}),"\n",(0,a.jsx)(l,{children:(0,a.jsx)("title",{children:"Push SDK React playground tutorial | Push Video | Push Documentation"})}),"\n","\n","\n",(0,a.jsx)(t.h2,{id:"step-1-clone-the-push-sdk-repository",children:"Step 1: Clone the Push SDK Repository"}),"\n",(0,a.jsx)(t.p,{children:"Download the Push SDK repository to your local machine."}),"\n",(0,a.jsx)(r.A,{className:"codetabs",groupId:"code-examples",children:(0,a.jsx)(s.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-zsh",children:"git clone https://github.com/push-protocol/push-sdk.git\n"})})})}),"\n",(0,a.jsx)(t.h2,{id:"step-2-install-dependencies",children:"Step 2: Install Dependencies"}),"\n",(0,a.jsx)(t.p,{children:"Navigate to the SDK directory and install required dependencies."}),"\n",(0,a.jsx)(r.A,{className:"codetabs",groupId:"code-examples",children:(0,a.jsx)(s.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-zsh",children:"cd push-sdk\nyarn install\n"})})})}),"\n",(0,a.jsx)(t.h2,{id:"step-3-install-playground-dependencies",children:"Step 3: Install playground dependencies"}),"\n",(0,a.jsx)(t.p,{children:"React-playground depends on restapi and uiweb packages whose dependencies also need to be installed."}),"\n",(0,a.jsx)(r.A,{className:"codetabs",groupId:"code-examples",children:(0,a.jsx)(s.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-zsh",children:"# Navigate to restapi package and install package dependencies\ncd packages/restapi && yarn install\n\n# Nagivate back to root directory\ncd ../..\n\n# Navigate to uiweb package and install package dependencies\ncd packages/uiweb && yarn install\n\n# Nagivate back to root directory\ncd ../..\n"})})})}),"\n",(0,a.jsx)(t.h2,{id:"step-4-run-push-sdk-react-playground",children:"Step 4: Run Push SDK React playground"}),"\n",(0,a.jsx)(r.A,{className:"codetabs",groupId:"code-examples",children:(0,a.jsx)(s.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-zsh",children:"yarn nx run examples-sdk-frontend-react:serve:development\n"})})})}),"\n",(0,a.jsx)(t.h3,{id:"expected-output",children:"Expected Output"}),"\n",(0,a.jsxs)(t.p,{children:["The following React app should be running on ",(0,a.jsx)(t.code,{children:"http://localhost:4200/"})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"&quot;Push React Component Playground&quot;",src:n(535505).A+"",title:"Example of how the playground will look like if setup properly",width:"1347",height:"579"})}),"\n",(0,a.jsx)(t.h2,{id:"step-5-experiment-with-video-implementation",children:"Step 5: Experiment with Video implementation"}),"\n",(0,a.jsxs)(t.p,{children:["Click on the ",(0,a.jsx)(t.code,{children:"Video"})," tab to experiment with the React implementation of Push Video. Feel free to try calling your friend."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},119365:(e,t,n)=>{n.d(t,{A:()=>s});n(296540);var a=n(618215);const o={tabItem:"tabItem_Ymn6"};var r=n(474848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,s),hidden:n,children:t})}},411470:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(296540),o=n(618215),r=n(823104),s=n(956347),l=n(300205),i=n(757485),u=n(231682),d=n(289466);function c(e){var t,n;return null!==(t=null===(n=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:function(e){return c(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const o=(0,s.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,i.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(o.location.search);t.set(r,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}),[r,o])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,r=p(e),[s,i]=(0,a.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const o=null!==(t=a.find((e=>e.default)))&&void 0!==t?t:a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:r}))),[u,c]=m({queryString:n,groupId:o}),[g,b]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[o,r]=(0,d.Dv)(n);return[o,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),v=(()=>{const e=null!=u?u:g;return h({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error("Can't select invalid tab value="+e);i(e),c(e),b(e)}),[c,b,r]),tabValues:r}}var b=n(992303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(474848);function y(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),o=l[n].value;o!==a&&(u(t),s(o))},c=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var a;const t=i.indexOf(e.currentTarget)+1;n=null!==(a=i[t])&&void 0!==a?a:i[0];break}case"ArrowLeft":{var o;const t=i.indexOf(e.currentTarget)-1;n=null!==(o=i[t])&&void 0!==o?o:i[i.length-1];break}}null===(t=n)||void 0===t||t.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,f.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:c,onClick:d},r,{className:(0,o.A)("tabs__item",v.tabItem,null==r?void 0:r.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function x(e){let{lazy:t,children:n,selectedValue:o}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function j(e){const t=g(e);return(0,f.jsxs)("div",{className:(0,o.A)("tabs-container",v.tabList),children:[(0,f.jsx)(y,Object.assign({},e,t)),(0,f.jsx)(x,Object.assign({},e,t))]})}function w(e){const t=(0,b.A)();return(0,f.jsx)(j,Object.assign({},e,{children:c(e.children)}),String(t))}},535505:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/sdk-react-playground-efc071ee344194f2d746beed0a13801d.png"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var a=n(296540);const o={},r=a.createContext(o);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);