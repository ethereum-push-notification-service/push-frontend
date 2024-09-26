(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[48410],{692484:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var i=n(474848),o=n(28453),r=n(313554),s=n.n(r);const a={id:"docs-notifications-tutorial-integrate-notifications-via-delivery-node",title:"Integrate notifications via Delivery Node",hide_title:!0,slug:"./integrate-notifications-via-delivery-node",displayed_sidebar:"pushNotificationSidebar",sidebar_position:7,image:"/assets/docs/previews/docs_notifications_tutorial--integrate_notifications_via_delivery_node.png"},l="Integrate Notifications via Delivery Node",c={id:"notifications/tutorials/docs-notifications-tutorial-integrate-notifications-via-delivery-node",title:"Integrate notifications via Delivery Node",description:"Do check out integrating notifications section for your frontend to see other recommended ways for integrating notifications on your frontend.",source:"@site/docs/notifications/05-tutorials/07-Tutorial-Integrate-Notifications-Delivery-Node.mdx",sourceDirName:"notifications/05-tutorials",slug:"/notifications/tutorials/integrate-notifications-via-delivery-node",permalink:"/push-website/pr-preview/pr-887/docs/notifications/tutorials/integrate-notifications-via-delivery-node",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/notifications/05-tutorials/07-Tutorial-Integrate-Notifications-Delivery-Node.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"docs-notifications-tutorial-integrate-notifications-via-delivery-node",title:"Integrate notifications via Delivery Node",hide_title:!0,slug:"./integrate-notifications-via-delivery-node",displayed_sidebar:"pushNotificationSidebar",sidebar_position:7,image:"/assets/docs/previews/docs_notifications_tutorial--integrate_notifications_via_delivery_node.png"},sidebar:"pushNotificationSidebar",previous:{title:"Send notification via your subgraph",permalink:"/push-website/pr-preview/pr-887/docs/notifications/tutorials/send-notification-via-subgraph"},next:{title:"Integrate notifications via AWS SNS",permalink:"/push-website/pr-preview/pr-887/docs/notifications/tutorials/integrate-notifications-via-aws-sns"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Setup",id:"setup",level:2},{value:"Step 1\ufe0f\u20e3 - Prerequisites",id:"step-1\ufe0f\u20e3---prerequisites",level:3},{value:"Step 2\ufe0f\u20e3 - Clone Push delivery node repo",id:"step-2\ufe0f\u20e3---clone-push-delivery-node-repo",level:3},{value:"Step 3\ufe0f\u20e3 - Environment configuration",id:"step-3\ufe0f\u20e3---environment-configuration",level:3},{value:"Step 4\ufe0f\u20e3 - Infra Setup: Local",id:"step-4\ufe0f\u20e3---infra-setup-local",level:3},{value:"Step 5\ufe0f\u20e3 - (Optional) Infra Setup: Server (Production)",id:"step-5\ufe0f\u20e3---optional-infra-setup-server-production",level:3},{value:"Step 6\ufe0f\u20e3 - FCM Project Setup",id:"step-6\ufe0f\u20e3---fcm-project-setup",level:3},{value:"Step 7\ufe0f\u20e3 - Build the delivery node project",id:"step-7\ufe0f\u20e3---build-the-delivery-node-project",level:3},{value:"Step 8\ufe0f\u20e3 - Start the delivery node project",id:"step-8\ufe0f\u20e3---start-the-delivery-node-project",level:3},{value:"Step 9\ufe0f\u20e3 - Device Registration",id:"step-9\ufe0f\u20e3---device-registration",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"integrate-notifications-via-delivery-node",children:"Integrate Notifications via Delivery Node"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["Do check out ",(0,i.jsx)(t.a,{href:"/docs/notifications/build/integrating-notifications",title:"Learn how to integrate notifications from Push protocol to your frontend",children:"integrating notifications section"})," for your frontend to see other recommended ways for integrating notifications on your frontend."]})}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.h1,{id:"push-delivery-nodes-is-a-whitelabel-solution-to-enable-any-app-either-mobile-desktop-or-extension-to-allow-web3-push-notifications-to-their-app",children:"Push delivery Nodes is a Whitelabel solution to enable any app, either mobile, desktop, or extension, to allow Web3 push notifications to their app."}),"\n","\n","\n",(0,i.jsxs)(t.p,{children:["It is a decentralized solutions to enable web3 to web2 bridging. It allows any platform (whether centralized or decentralized) to receive communication from ",(0,i.jsx)(t.strong,{children:"Push storage nodes"}),", i.e., the nodes validating and indexing all communications and tying them to your wallet address (and multi-chain identity)."]}),"\n",(0,i.jsx)(s(),{controls:!0,width:"100%",url:"https://www.youtube.com/watch?v=OlRHL3qd4oY"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsxs)(t.p,{children:["The whitelabel solution of Push delivery node ",(0,i.jsx)(t.a,{href:"https://github.com/push-protocol/push-delivery-node",title:"Repo of delivery node of Push protocol",children:"is located in this github repo"}),". Below are the steps for getting started \u2014"]}),"\n",(0,i.jsx)(t.h3,{id:"step-1\ufe0f\u20e3---prerequisites",children:"Step 1\ufe0f\u20e3 - Prerequisites"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"MYSQL (Version >= 5.7)"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Redis (Version >= 6.0)"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Docker (For local setup)"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Google FCM Account Setup"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"step-2\ufe0f\u20e3---clone-push-delivery-node-repo",children:"Step 2\ufe0f\u20e3 - Clone Push delivery node repo"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-zsh",children:"git clone https://github.com/push-protocol/push-delivery-node.git\n"})}),"\n",(0,i.jsx)(t.h3,{id:"step-3\ufe0f\u20e3---environment-configuration",children:"Step 3\ufe0f\u20e3 - Environment configuration"}),"\n",(0,i.jsx)(t.p,{children:"Refer env sample file. The MYSQL DB credentials and Redis URL needs to be updated. The remaining conf need not be edited as of now."}),"\n",(0,i.jsx)(t.p,{children:"If you use docker-compose for the local setup MYSQL DB and Redis config can be left as it is."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"# REDIS\n\nREDIS_URL=redis://localhost:6379\n\n# DELIVERY NODE MYSQL DATABASE\n\nDELIVERY_NODE_DB_HOST=localhost\nDELIVERY_NODE_DB_NAME=dbname\nDELIVERY_NODE_DB_USER=user\nDELIVERY_NODE_DB_PASS=pass\nDELIVERY_NODE_DB_PORT=3306\n"})}),"\n",(0,i.jsx)(t.h3,{id:"step-4\ufe0f\u20e3---infra-setup-local",children:"Step 4\ufe0f\u20e3 - Infra Setup: Local"}),"\n",(0,i.jsx)(t.p,{children:"The docker-compose will bring up the MYSQL, Redis, and PHPMyAdmin containers for the delivery node."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-zsh",children:"docker compose up\n"})}),"\n",(0,i.jsx)(t.h3,{id:"step-5\ufe0f\u20e3---optional-infra-setup-server-production",children:"Step 5\ufe0f\u20e3 - (Optional) Infra Setup: Server (Production)"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Host MYSQL and Redis Separately"}),"\n",(0,i.jsx)(t.li,{children:"Add MYSQL and Redis credentials in the .env file"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"step-6\ufe0f\u20e3---fcm-project-setup",children:"Step 6\ufe0f\u20e3 - FCM Project Setup"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Refer ",(0,i.jsx)(t.a,{href:"https://firebase.google.com/docs/admin/setup",title:"Article from google on how to setup Firebase",children:"Firebase docs"})," to setup FCM"]}),"\n",(0,i.jsx)(t.li,{children:"Create the firebase-adminsdk.json file in the root folder and add the FCM JSON to this file"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"step-7\ufe0f\u20e3---build-the-delivery-node-project",children:"Step 7\ufe0f\u20e3 - Build the delivery node project"}),"\n",(0,i.jsx)(t.p,{children:"You should then be able to build the project using"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-zsh",children:"cd push-delivery-node\nnpm install\n"})}),"\n",(0,i.jsx)(t.h3,{id:"step-8\ufe0f\u20e3---start-the-delivery-node-project",children:"Step 8\ufe0f\u20e3 - Start the delivery node project"}),"\n",(0,i.jsx)(t.p,{children:"You should then be able to start the server using the following"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-zsh",children:"cd push-delivery-node\nnpm start\n"})}),"\n",(0,i.jsx)(t.h3,{id:"step-9\ufe0f\u20e3---device-registration",children:"Step 9\ufe0f\u20e3 - Device Registration"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"An endpoint is hosted as part of the delivery node project, which can be used for Device Registration."}),"\n",(0,i.jsx)(t.li,{children:"Below is the API to create a mapping between the wallet address and the device token for which the messages need to be delivered."}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"<delivery_node_url>"})," is the base URL of the delivery node you have hosted."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Below is the curl request of this endpoint"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-zsh",children:'\ncurl --location --request POST \'https://<delivery_node_url>/apis/v1/pushtokens/register\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n\n    "wallet": "eip155:0x35B84d6848D16415177c64D64504663b998A6ab4",\n    "device_token": "device_token",\n    "platform": "android"\n}\'\n'})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},914744:e=>{"use strict";var t=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===n}(e)}(e)};var n="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function i(e,t){return!1!==t.clone&&t.isMergeableObject(e)?l((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function o(e,t,n){return e.concat(t).map((function(e){return i(e,n)}))}function r(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return Object.propertyIsEnumerable.call(e,t)})):[]}(e))}function s(e,t){try{return t in e}catch(n){return!1}}function a(e,t,n){var o={};return n.isMergeableObject(e)&&r(e).forEach((function(t){o[t]=i(e[t],n)})),r(t).forEach((function(r){(function(e,t){return s(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,r)||(s(e,r)&&n.isMergeableObject(t[r])?o[r]=function(e,t){if(!t.customMerge)return l;var n=t.customMerge(e);return"function"==typeof n?n:l}(r,n)(e[r],t[r],n):o[r]=i(t[r],n))})),o}function l(e,n,r){(r=r||{}).arrayMerge=r.arrayMerge||o,r.isMergeableObject=r.isMergeableObject||t,r.cloneUnlessOtherwiseSpecified=i;var s=Array.isArray(n);return s===Array.isArray(e)?s?r.arrayMerge(e,n,r):a(e,n,r):i(n,r)}l.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return l(e,n,t)}),{})};var c=l;e.exports=c},6147:e=>{function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function n(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,i,o){var r=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");"function"==typeof i&&(o=i,i={}),i=i||{},o=o||function(){},s.type=i.type||"text/javascript",s.charset=i.charset||"utf8",s.async=!("async"in i)||!!i.async,s.src=e,i.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(s,i.attrs),i.text&&(s.text=""+i.text),("onload"in s?t:n)(s,o),s.onload||t(s,o),r.appendChild(s)}},241811:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});var i=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function o(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(o=e[n],r=t[n],!(o===r||i(o)&&i(r)))return!1;var o,r;return!0}const r=function(e,t){var n;void 0===t&&(t=o);var i,r=[],s=!1;return function(){for(var o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];return s&&n===this&&t(o,r)||(i=e.apply(this,o),s=!0,n=this,r=o),i}}},28453:(e,t,n)=>{"use strict";n.d(t,{R:()=>s,x:()=>a});var i=n(296540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);