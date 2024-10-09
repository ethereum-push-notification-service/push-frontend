"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[64521],{903083:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(474848),s=t(28453),r=t(411470),l=t(119365);const o={id:"docs-chat-playground-push-sdk-playground",title:"Push SDK Playground",hide_title:!0,slug:"./push-sdk-playground",displayed_sidebar:"pushChatSidebar",sidebar_position:1,image:"/assets/docs/previews/docs_chat_playground--push_sdk_playground.png"},u="Push SDK playground",i={id:"chat/playground/docs-chat-playground-push-sdk-playground",title:"Push SDK Playground",description:"This tutorial is designed to get you up and going by providing playground containing all API calls coverage for Push SDK. Checkout Push SDK example that utlizes @pushprotocol/restapi and @pushprotocol/socket for more info!",source:"@site/docs/chat/04-playground/01-Playground-Push-SDK-APIs-Playground.mdx",sourceDirName:"chat/04-playground",slug:"/chat/playground/push-sdk-playground",permalink:"/push-website/pr-preview/pr-897/docs/chat/playground/push-sdk-playground",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/chat/04-playground/01-Playground-Push-SDK-APIs-Playground.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"docs-chat-playground-push-sdk-playground",title:"Push SDK Playground",hide_title:!0,slug:"./push-sdk-playground",displayed_sidebar:"pushChatSidebar",sidebar_position:1,image:"/assets/docs/previews/docs_chat_playground--push_sdk_playground.png"},sidebar:"pushChatSidebar",previous:{title:"Tutorials",permalink:"/push-website/pr-preview/pr-897/docs/chat/playground"},next:{title:"Push SDK React Playground",permalink:"/push-website/pr-preview/pr-897/docs/chat/playground/push-react-component-playground-example"}},d={},c=[{value:"Step 1: Clone the Push SDK Repository",id:"step-1-clone-the-push-sdk-repository",level:2},{value:"Step 2: Install Dependencies",id:"step-2-install-dependencies",level:2},{value:"Step 3: Setup Push SDK Playground",id:"step-3-setup-push-sdk-playground",level:2},{value:"Step 4: Setup Environment Variables",id:"step-4-setup-environment-variables",level:2},{value:"Step 5: Run Playground Examples",id:"step-5-run-playground-examples",level:2},{value:"Expected Output",id:"expected-output",level:3}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{Head:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"push-sdk-playground",children:"Push SDK playground"}),"\n",(0,a.jsxs)(n.p,{children:["This tutorial is designed to get you up and going by providing playground containing all API calls coverage for Push SDK. Checkout ",(0,a.jsx)(n.a,{href:"https://github.com/push-protocol/push-sdk/tree/main/packages/examples/sdk-backend-node",children:"Push SDK example"})," that utlizes ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@pushprotocol/restapi",children:"@pushprotocol/restapi"})," and ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@pushprotocol/socket",children:"@pushprotocol/socket"})," for more info!"]}),"\n",(0,a.jsx)(o,{children:(0,a.jsx)("title",{children:"Push SDK APIs playground tutorial | Push Chat | Push Documentation"})}),"\n","\n","\n",(0,a.jsx)(n.h2,{id:"step-1-clone-the-push-sdk-repository",children:"Step 1: Clone the Push SDK Repository"}),"\n",(0,a.jsx)(n.p,{children:"Download the Push SDK repository to your local machine."}),"\n",(0,a.jsx)(r.A,{className:"codetabs",groupId:"code-examples",children:(0,a.jsx)(l.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-zsh",children:"git clone https://github.com/push-protocol/push-sdk.git\n"})})})}),"\n",(0,a.jsx)(n.h2,{id:"step-2-install-dependencies",children:"Step 2: Install Dependencies"}),"\n",(0,a.jsx)(n.p,{children:"Navigate to the SDK directory and install required dependencies."}),"\n",(0,a.jsx)(r.A,{className:"codetabs",groupId:"code-examples",children:(0,a.jsx)(l.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-zsh",children:"cd push-sdk\nyarn install\n"})})})}),"\n",(0,a.jsx)(n.h2,{id:"step-3-setup-push-sdk-playground",children:"Step 3: Setup Push SDK Playground"}),"\n",(0,a.jsx)(n.p,{children:"Navigate to the directory and install required dependencies."}),"\n",(0,a.jsx)(r.A,{className:"codetabs",groupId:"code-examples",children:(0,a.jsx)(l.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-zsh",children:"cd packages/examples/sdk-backend-node\nyarn install\n"})})})}),"\n",(0,a.jsx)(n.h2,{id:"step-4-setup-environment-variables",children:"Step 4: Setup Environment Variables"}),"\n",(0,a.jsxs)(n.p,{children:["Create a ",(0,a.jsx)(n.code,{children:".env"})," file and add values to it according to the given ",(0,a.jsx)(n.code,{children:".env.sample"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note"})," - It is possible to run a bare minimum examples without ",(0,a.jsx)(n.code,{children:".env"}),". All other examples will be skipped."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-zsh",children:"# WALLET PRIVATE KEY\nWALLET_PRIVATE_KEY=your_channel_private_key\n\n# ENVIRONMENT OF PUSH NETWORK - prod, staging OR dev\nPUSH_NODE_NETWORK=staging\n\n# TO ENABLE API RESPONSES TO BE SHOWN OR HIDDEN - true OR false\nSHOW_API_RESPONSE=false\n\n# NFT CONTRACT ADDRESS\nNFT_CONTRACT_ADDRESS_1=your_nft_contract_address\n\n# NFT CHAIN ID\nNFT_CHAIN_ID_1=your_nft_chain_id\n\n# NFT TOKEN ID\nNFT_TOKEN_ID_1=your_nft_token_id\n\n# NFT HOLDER WALLET PRIVATE KEY\nNFT_HOLDER_WALLET_PRIVATE_KEY_1=your_nft_holder_wallet_private_key\n\n# NFT PROFILE WALLET PASSWORD\nNFT_PROFILE_PASSWORD_1=your_nft_profile_password\n\n# NFT CONTRACT ADDRESS\nNFT_CONTRACT_ADDRESS_2=your_nft_contract_address\n\n# NFT CHAIN ID\nNFT_CHAIN_ID_2=your_nft_chain_id\n\n# NFT TOKEN ID\nNFT_TOKEN_ID_2=your_nft_token_id\n\n# NFT HOLDER WALLET PRIVATE KEY\nNFT_HOLDER_WALLET_PRIVATE_KEY_2=your_nft_holder_wallet_private_key\n\n# NFT PROFILE WALLET PASSWORD\nNFT_PROFILE_PASSWORD_2=your_nft_profile_password\n\n# VIDEO CHAIN ID\nVIDEO_CHAIN_ID=your_video_chain_id\n\n# VIDEO SENDER ADDRESS\nVIDEO_SENDER_ADDRESS=your_video_sender_address\n\n# VIDEO RECIPEINT ADDRESS\nVIDEO_RECIPEINT_ADDRESS=your_video_recipient_address\n\n# VIDEO CHAT ID\nVIDEO_CHAT_ID=your_video_chat_id\n"})}),"\n",(0,a.jsx)(r.A,{className:"codetabs",groupId:"code-examples",children:(0,a.jsx)(l.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-zsh",children:"# Create .env file\ntouch .env\n\n# Add different key values according to .env.sample\n"})})})}),"\n",(0,a.jsx)(n.h2,{id:"step-5-run-playground-examples",children:"Step 5: Run Playground Examples"}),"\n",(0,a.jsx)(r.A,{className:"codetabs",groupId:"code-examples",children:(0,a.jsx)(l.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-zsh",children:"yarn start\n"})})})}),"\n",(0,a.jsx)(n.h3,{id:"expected-output",children:"Expected Output"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"&quot;Push SDK API Playground&quot;",src:t(524315).A+"",title:"Example of how the playground will look like if setup properly",width:"1114",height:"627"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},119365:(e,n,t)=>{t.d(n,{A:()=>l});t(296540);var a=t(618215);const s={tabItem:"tabItem_Ymn6"};var r=t(474848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,l),hidden:t,children:n})}},411470:(e,n,t)=>{t.d(n,{A:()=>E});var a=t(296540),s=t(618215),r=t(823104),l=t(956347),o=t(300205),u=t(757485),i=t(231682),d=t(289466);function c(e){var n,t;return null!==(n=null===(t=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:function(e){return c(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,u.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=p(e),[l,u]=(0,a.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=null!==(n=a.find((e=>e.default)))&&void 0!==n?n:a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[i,c]=g({queryString:t,groupId:s}),[m,_]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,d.Dv)(t);return[s,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),v=(()=>{const e=null!=i?i:m;return h({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{v&&u(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);u(e),c(e),_(e)}),[c,_,r]),tabValues:r}}var _=t(992303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(474848);function b(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=u.indexOf(n),s=o[t].value;s!==a&&(i(n),l(s))},c=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var a;const n=u.indexOf(e.currentTarget)+1;t=null!==(a=u[n])&&void 0!==a?a:u[0];break}case"ArrowLeft":{var s;const n=u.indexOf(e.currentTarget)-1;t=null!==(s=u[n])&&void 0!==s?s:u[u.length-1];break}}null===(n=t)||void 0===n||n.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>u.push(e),onKeyDown:c,onClick:d,...r,className:(0,s.A)("tabs__item",v.tabItem,null==r?void 0:r.className,{"tabs__item--active":a===n}),children:null!=t?t:n},n)}))})}function f(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function x(e){const n=m(e);return(0,y.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,y.jsx)(b,{...e,...n}),(0,y.jsx)(f,{...e,...n})]})}function E(e){const n=(0,_.A)();return(0,y.jsx)(x,{...e,children:c(e.children)},String(n))}},524315:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/sdk-playground-0fa0602e82747a6f27c8686d2ab85015.png"},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var a=t(296540);const s={},r=a.createContext(s);function l(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);