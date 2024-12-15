"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[48410],{692484:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>d,metadata:()=>l,toc:()=>p});var n=t(474848),o=t(28453),s=t(313554),r=t.n(s);const d={id:"docs-notifications-tutorial-integrate-notifications-via-delivery-node",title:"Integrate notifications via Delivery Node",hide_title:!0,slug:"./integrate-notifications-via-delivery-node",displayed_sidebar:"pushNotificationSidebar",sidebar_position:7,image:"/assets/docs/previews/docs_notifications_tutorial--integrate_notifications_via_delivery_node.png"},a="Integrate Notifications via Delivery Node",l={id:"notifications/tutorials/docs-notifications-tutorial-integrate-notifications-via-delivery-node",title:"Integrate notifications via Delivery Node",description:"Do check out integrating notifications section for your frontend to see other recommended ways for integrating notifications on your frontend.",source:"@site/docs/notifications/05-tutorials/07-Tutorial-Integrate-Notifications-Delivery-Node.mdx",sourceDirName:"notifications/05-tutorials",slug:"/notifications/tutorials/integrate-notifications-via-delivery-node",permalink:"/push-website/pr-preview/pr-945/docs/notifications/tutorials/integrate-notifications-via-delivery-node",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/notifications/05-tutorials/07-Tutorial-Integrate-Notifications-Delivery-Node.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"docs-notifications-tutorial-integrate-notifications-via-delivery-node",title:"Integrate notifications via Delivery Node",hide_title:!0,slug:"./integrate-notifications-via-delivery-node",displayed_sidebar:"pushNotificationSidebar",sidebar_position:7,image:"/assets/docs/previews/docs_notifications_tutorial--integrate_notifications_via_delivery_node.png"},sidebar:"pushNotificationSidebar",previous:{title:"Send notification via your subgraph",permalink:"/push-website/pr-preview/pr-945/docs/notifications/tutorials/send-notification-via-subgraph"},next:{title:"Integrate notifications via AWS SNS",permalink:"/push-website/pr-preview/pr-945/docs/notifications/tutorials/integrate-notifications-via-aws-sns"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Setup",id:"setup",level:2},{value:"Step 1\ufe0f\u20e3 - Prerequisites",id:"step-1\ufe0f\u20e3---prerequisites",level:3},{value:"Step 2\ufe0f\u20e3 - Clone Push delivery node repo",id:"step-2\ufe0f\u20e3---clone-push-delivery-node-repo",level:3},{value:"Step 3\ufe0f\u20e3 - Environment configuration",id:"step-3\ufe0f\u20e3---environment-configuration",level:3},{value:"Step 4\ufe0f\u20e3 - Infra Setup: Local",id:"step-4\ufe0f\u20e3---infra-setup-local",level:3},{value:"Step 5\ufe0f\u20e3 - (Optional) Infra Setup: Server (Production)",id:"step-5\ufe0f\u20e3---optional-infra-setup-server-production",level:3},{value:"Step 6\ufe0f\u20e3 - FCM Project Setup",id:"step-6\ufe0f\u20e3---fcm-project-setup",level:3},{value:"Step 7\ufe0f\u20e3 - Build the delivery node project",id:"step-7\ufe0f\u20e3---build-the-delivery-node-project",level:3},{value:"Step 8\ufe0f\u20e3 - Start the delivery node project",id:"step-8\ufe0f\u20e3---start-the-delivery-node-project",level:3},{value:"Step 9\ufe0f\u20e3 - Device Registration",id:"step-9\ufe0f\u20e3---device-registration",level:3}];function h(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"integrate-notifications-via-delivery-node",children:"Integrate Notifications via Delivery Node"}),"\n",(0,n.jsx)(i.admonition,{type:"tip",children:(0,n.jsxs)(i.p,{children:["Do check out ",(0,n.jsx)(i.a,{href:"/docs/notifications/build/integrating-notifications",title:"Learn how to integrate notifications from Push protocol to your frontend",children:"integrating notifications section"})," for your frontend to see other recommended ways for integrating notifications on your frontend."]})}),"\n",(0,n.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(i.h1,{id:"push-delivery-nodes-is-a-whitelabel-solution-to-enable-any-app-either-mobile-desktop-or-extension-to-allow-web3-push-notifications-to-their-app",children:"Push delivery Nodes is a Whitelabel solution to enable any app, either mobile, desktop, or extension, to allow Web3 push notifications to their app."}),"\n","\n","\n",(0,n.jsxs)(i.p,{children:["It is a decentralized solutions to enable web3 to web2 bridging. It allows any platform (whether centralized or decentralized) to receive communication from ",(0,n.jsx)(i.strong,{children:"Push storage nodes"}),", i.e., the nodes validating and indexing all communications and tying them to your wallet address (and multi-chain identity)."]}),"\n",(0,n.jsx)(r(),{controls:!0,width:"100%",url:"https://www.youtube.com/watch?v=OlRHL3qd4oY"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(i.h2,{id:"setup",children:"Setup"}),"\n",(0,n.jsxs)(i.p,{children:["The whitelabel solution of Push delivery node ",(0,n.jsx)(i.a,{href:"https://github.com/push-protocol/push-delivery-node",title:"Repo of delivery node of Push protocol",children:"is located in this github repo"}),". Below are the steps for getting started \u2014"]}),"\n",(0,n.jsx)(i.h3,{id:"step-1\ufe0f\u20e3---prerequisites",children:"Step 1\ufe0f\u20e3 - Prerequisites"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"MYSQL (Version >= 5.7)"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"Redis (Version >= 6.0)"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"Docker (For local setup)"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"Google FCM Account Setup"})}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"step-2\ufe0f\u20e3---clone-push-delivery-node-repo",children:"Step 2\ufe0f\u20e3 - Clone Push delivery node repo"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-zsh",children:"git clone https://github.com/push-protocol/push-delivery-node.git\n"})}),"\n",(0,n.jsx)(i.h3,{id:"step-3\ufe0f\u20e3---environment-configuration",children:"Step 3\ufe0f\u20e3 - Environment configuration"}),"\n",(0,n.jsx)(i.p,{children:"Refer env sample file. The MYSQL DB credentials and Redis URL needs to be updated. The remaining conf need not be edited as of now."}),"\n",(0,n.jsx)(i.p,{children:"If you use docker-compose for the local setup MYSQL DB and Redis config can be left as it is."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-ts",children:"# REDIS\n\nREDIS_URL=redis://localhost:6379\n\n# DELIVERY NODE MYSQL DATABASE\n\nDELIVERY_NODE_DB_HOST=localhost\nDELIVERY_NODE_DB_NAME=dbname\nDELIVERY_NODE_DB_USER=user\nDELIVERY_NODE_DB_PASS=pass\nDELIVERY_NODE_DB_PORT=3306\n"})}),"\n",(0,n.jsx)(i.h3,{id:"step-4\ufe0f\u20e3---infra-setup-local",children:"Step 4\ufe0f\u20e3 - Infra Setup: Local"}),"\n",(0,n.jsx)(i.p,{children:"The docker-compose will bring up the MYSQL, Redis, and PHPMyAdmin containers for the delivery node."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-zsh",children:"docker compose up\n"})}),"\n",(0,n.jsx)(i.h3,{id:"step-5\ufe0f\u20e3---optional-infra-setup-server-production",children:"Step 5\ufe0f\u20e3 - (Optional) Infra Setup: Server (Production)"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Host MYSQL and Redis Separately"}),"\n",(0,n.jsx)(i.li,{children:"Add MYSQL and Redis credentials in the .env file"}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"step-6\ufe0f\u20e3---fcm-project-setup",children:"Step 6\ufe0f\u20e3 - FCM Project Setup"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Refer ",(0,n.jsx)(i.a,{href:"https://firebase.google.com/docs/admin/setup",title:"Article from google on how to setup Firebase",children:"Firebase docs"})," to setup FCM"]}),"\n",(0,n.jsx)(i.li,{children:"Create the firebase-adminsdk.json file in the root folder and add the FCM JSON to this file"}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"step-7\ufe0f\u20e3---build-the-delivery-node-project",children:"Step 7\ufe0f\u20e3 - Build the delivery node project"}),"\n",(0,n.jsx)(i.p,{children:"You should then be able to build the project using"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-zsh",children:"cd push-delivery-node\nnpm install\n"})}),"\n",(0,n.jsx)(i.h3,{id:"step-8\ufe0f\u20e3---start-the-delivery-node-project",children:"Step 8\ufe0f\u20e3 - Start the delivery node project"}),"\n",(0,n.jsx)(i.p,{children:"You should then be able to start the server using the following"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-zsh",children:"cd push-delivery-node\nnpm start\n"})}),"\n",(0,n.jsx)(i.h3,{id:"step-9\ufe0f\u20e3---device-registration",children:"Step 9\ufe0f\u20e3 - Device Registration"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"An endpoint is hosted as part of the delivery node project, which can be used for Device Registration."}),"\n",(0,n.jsx)(i.li,{children:"Below is the API to create a mapping between the wallet address and the device token for which the messages need to be delivered."}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"<delivery_node_url>"})," is the base URL of the delivery node you have hosted."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Below is the curl request of this endpoint"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-zsh",children:'\ncurl --location --request POST \'https://<delivery_node_url>/apis/v1/pushtokens/register\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n\n    "wallet": "eip155:0x35B84d6848D16415177c64D64504663b998A6ab4",\n    "device_token": "device_token",\n    "platform": "android"\n}\'\n'})})]})}function u(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>d});var n=t(296540);const o={},s=n.createContext(o);function r(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);