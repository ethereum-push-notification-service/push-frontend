"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[76572],{19170:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var o=t(474848),s=t(28453),i=t(113490);const c={slug:"geting-started-with-push-sdk-socket-api",title:"Getting Started with Push SDK: Socket API\ud83d\udd14",authors:["push"],image:"./cover-image.webp",text:"The Socket API is a package that helps you connect to the Push backend using WebSockets, built on top of Socket.IO With this API, you can easily subscribe to real-time notifications and updates from the Push network.",tags:["Web3","Blockchain","Blockchain Development","Developer"]},a=void 0,r={permalink:"/push-website/pr-preview/pr-939/blog/geting-started-with-push-sdk-socket-api",source:"@site/blog/2023-03-01-push-sdk/index.md",title:"Getting Started with Push SDK: Socket API\ud83d\udd14",description:"Cover image of Getting Started with Push SDK: Socket API\ud83d\udd14",date:"2023-03-01T00:00:00.000Z",formattedDate:"March 1, 2023",tags:[{label:"Web3",permalink:"/push-website/pr-preview/pr-939/blog/tags/web-3"},{label:"Blockchain",permalink:"/push-website/pr-preview/pr-939/blog/tags/blockchain"},{label:"Blockchain Development",permalink:"/push-website/pr-preview/pr-939/blog/tags/blockchain-development"},{label:"Developer",permalink:"/push-website/pr-preview/pr-939/blog/tags/developer"}],readingTime:3.0533333333333332,hasTruncateMarker:!0,authors:[{name:"Push Protocol",url:"https://twitter.com/pushprotocol",imageURL:"/assets/blog/authors/authorpush.png",key:"push"}],frontMatter:{slug:"geting-started-with-push-sdk-socket-api",title:"Getting Started with Push SDK: Socket API\ud83d\udd14",authors:["push"],image:"./cover-image.webp",text:"The Socket API is a package that helps you connect to the Push backend using WebSockets, built on top of Socket.IO With this API, you can easily subscribe to real-time notifications and updates from the Push network.",tags:["Web3","Blockchain","Blockchain Development","Developer"]},unlisted:!1,prevItem:{title:"February Monthly Recap \ud83d\ude80",permalink:"/push-website/pr-preview/pr-939/blog/february-monthly-recap"},nextItem:{title:"Launching The Future of Web3 Messaging with Push Chat & Push Group Chat\ud83d\ude80",permalink:"/push-website/pr-preview/pr-939/blog/launching-the-future-of-web3-messaging-with-push-chat-and-push-group-chat"}},h={image:t(636052).A,authorsImageUrls:[void 0]},d=[{value:"Note on Addresses",id:"note-on-addresses",level:2},{value:"Creating a Socket Connection",id:"creating-a-socket-connection",level:2},{value:"For Notifications",id:"for-notifications",level:2},{value:"For Push Chat",id:"for-push-chat",level:2},{value:"Connecting and Disconnecting",id:"connecting-and-disconnecting",level:2},{value:"Subscribing to Events",id:"subscribing-to-events",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Cover image of Getting Started with Push SDK: Socket API\ud83d\udd14",src:t(457185).A+"",width:"1100",height:"578"})}),"\n",(0,o.jsxs)(n.p,{children:["The Socket API is a package that helps you connect to the Push backend using WebSockets, built on top of ",(0,o.jsx)("a",{href:"https://socket.io/docs/v4/client-api/",children:(0,o.jsx)("b",{children:"Socket.IO"})}),". With this API, you can easily subscribe to real-time notifications and updates from the Push network."]}),"\n",(0,o.jsx)(n.p,{children:"In this article, we\u2019ll go over the PUSH-SDK Socket API and how to use it in your dApp."}),"\n","\n","\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"Socket API is deprecated. Push has revamped it's socket API into stream API which is more versatile and developer friendly, click on the link below to learn more \ud83d\udc47."})}),"\n",(0,o.jsx)(i.b1,{href:"/docs/chat/stream-chat",title:"Link to learn more about Push Stream API",children:"Learn about Push Stream API"}),"\n",(0,o.jsx)(n.h2,{id:"note-on-addresses",children:"Note on Addresses"}),"\n",(0,o.jsx)(n.p,{children:"In any of the specified methods (unless explicitly stated otherwise), you can use either CAIP format (specifically CAIP-10) or the ETH address format."}),"\n",(0,o.jsx)(n.p,{children:"Recall that CAIP, or Chain Agnostic Improvement Proposal, is a way to describe standards for blockchain projects that are not specific to a single chain. It was developed by the Ethereum Improvement Proposal (EIP) process and is used to identify and encode information about Ethereum addresses, contract addresses, and other crypto-assets. For example, an ETH mainnet address would be in the form:"}),"\n",(0,o.jsx)("b",{children:"eip155:1:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb"}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("blockquote",{children:"The sockets API uses CAIP-10 (but defaults to the Ethereum address format), which is a specific proposal within the CAIP specification that focuses on the identification of blockchain addresses. It defines a format for representing addresses in a way that is both chain-agnostic and human-readable."}),"\n",(0,o.jsxs)(n.p,{children:["The ETH address format is supported for backwards compatibility. For example, an ETH mainnet address would be in the form ",(0,o.jsx)("b",{children:"0xab16a96d359ec26a11e"})]}),"\n",(0,o.jsx)(n.h2,{id:"creating-a-socket-connection",children:"Creating a Socket Connection"}),"\n",(0,o.jsx)(n.p,{children:"To create a socket connection, you\u2019ll need to create a socket connection object."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"createSocketConnection(options: SocketConnectionOptions): SocketConnection\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can use the ",(0,o.jsx)("b",{children:"createSocketConnection"})," method to create a socket connection object. This method takes an options object as an argument, which allows you to specify the following parameters:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)("b",{children:"user"})," (",(0,o.jsx)("b",{children:"string"}),", required): The user account address, in ",(0,o.jsx)("a",{href:"https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-10.md#test-cases",children:"CAIP"})," format."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)("b",{children:"env"})," (",(0,o.jsx)("b",{children:"string"}),", optional, default: ",(0,o.jsx)("b",{children:"'prod'"}),"): The API environment to connect to. Can be ",(0,o.jsx)("b",{children:"'prod'"}),", ",(0,o.jsx)("b",{children:"'staging'"}),", or ",(0,o.jsx)("b",{children:"'dev'"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)("b",{children:"socketOptions"})," (",(0,o.jsx)("b",{children:"object"}),", optional): Options to pass to ",(0,o.jsx)("a",{href:"https://socket.io/docs/v4/client-options/",children:"SocketIO"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["This method returns a ",(0,o.jsx)("b",{children:"SocketConnection"})," object that you can use to connect, disconnect, and subscribe to events."]}),"\n",(0,o.jsx)(n.h2,{id:"for-notifications",children:"For Notifications"}),"\n",(0,o.jsx)(n.p,{children:"To create a socket connection for notifications, you\u2019ll need to create a socket connection object."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const pushSDKSocket = createSocketConnection({\n  user: 'eip155:11155111:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb', // CAIP-10 format\n  env: 'staging',\n  socketOptions: { autoConnect: false },\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"for-push-chat",children:"For Push Chat"}),"\n",(0,o.jsx)(n.p,{children:"To create a socket connection for chat, you should define the socket type as \u201cchat\u201d when instantiating the socket client. The user address can be in any format, including non-CAIP-10 formats."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const pushSDKSocket = createSocketConnection({\n  user: '0xFd6C2fE69bE13d8bE379CCB6c9306e74193EC1A9',\n  env: 'staging',\n  apiKey:\n    'jVPMCRom1B.iDRMswdehJG7NpHDiECIHwYMMv6k2KzkPJscFIDyW8TtSnk4blYnGa8DIkfuacU0',\n  socketType: 'chat',\n  socketOptions: { autoConnect: true, reconnectionAttempts: 3 },\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"This method takes an options object as an argument, which allows you to specify the following parameters:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)("b",{children:"user"})," (",(0,o.jsx)("b",{children:"string"}),", required): The user account address."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)("b",{children:"env"})," (",(0,o.jsx)("b",{children:"string"}),", optional, default: ",(0,o.jsx)("b",{children:"'prod'"}),"): The API environment to connect to. Can be ",(0,o.jsx)("b",{children:"'prod'"}),", ",(0,o.jsx)("b",{children:"'staging'"}),", or ",(0,o.jsx)("b",{children:"'dev'"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)("b",{children:"apiKey"})," (",(0,o.jsx)("b",{children:"string"}),", optional): The API key to use for authentication."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)("b",{children:"socketType"})," (",(0,o.jsx)("b",{children:"string"}),", optional, default: ",(0,o.jsx)("b",{children:"'notification'"}),"): The type of socket connection to create. Can be ",(0,o.jsx)("b",{children:"'notification'"})," or ",(0,o.jsx)("b",{children:"'chat'"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)("b",{children:"socketOptions"})," (",(0,o.jsx)("b",{children:"object"}),", optional): Options to pass to ",(0,o.jsx)("a",{href:"https://socket.io/docs/v4/client-options/",children:"SocketIO"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["This method returns a ",(0,o.jsx)("b",{children:"SocketConnection"})," object that you can use to connect, disconnect, and subscribe to events."]}),"\n",(0,o.jsx)(n.h2,{id:"connecting-and-disconnecting",children:"Connecting and Disconnecting"}),"\n",(0,o.jsxs)(n.p,{children:["Once you have a ",(0,o.jsx)("b",{children:"SocketConnection"})," object, you can use the ",(0,o.jsx)("b",{children:"connect"})," and ",(0,o.jsx)("b",{children:"disconnect"})," methods to establish or close the connection:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"SocketConnection.connect(): void\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Use the ",(0,o.jsx)("b",{children:"connect"})," method to establish a connection to the backend."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"SocketConnection.disconnect(): void\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Use the ",(0,o.jsx)("b",{children:"disconnect"})," method to close the connection to the backend."]}),"\n",(0,o.jsx)(n.h2,{id:"subscribing-to-events",children:"Subscribing to Events"}),"\n",(0,o.jsx)(n.p,{children:"Once you have a connection, you can subscribe to events to receive updates in real-time."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"SocketConnection.on(event: SocketEvent, callback: (data: any) => void):\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Use the ",(0,o.jsx)("b",{children:"on"})," method to subscribe to a socket event. This method takes an event name and a callback function as arguments. The callback function will be called whenever the specified event is triggered."]}),"\n",(0,o.jsx)(n.p,{children:"The following events are supported:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)("b",{children:"EVENTS.CONNECT:"})," Triggered when the socket connection is established."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)("b",{children:"EVENTS.DISCONNECT:"})," Triggered when the socket connection is closed."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)("b",{children:"EVENTS.USER_FEEDS:"})," Triggered when a new notification is received by the user after the last socket connection."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)("b",{children:"EVENTS.USER_SPAM_FEEDS:"})," Triggered when a new spam notification is received by the user after the last socket connection."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)("b",{children:"EVENTS.CHAT_RECEIVED_MESSAGE:"})," Triggered when a new chat message is received."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const pushSDKSocket = createSocketConnection({\n  user: 'eip155:11155111:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb',\n  env: 'staging',\n  socketOptions: { autoConnect: false },\n});\npushSDKSocket.connect();\npushSDKSocket.on(EVENTS.CONNECT, () => {\n  console.log('Connected to socket!');\n});\npushSDKSocket.on(EVENTS.DISCONNECT, () => {\n  console.log('Disconnected from socket!');\n});\npushSDKSocket.on(EVENTS.USER_FEEDS, (feedItem) => {\n  console.log(`Received notification: ${feedItem.title}`);\n});\npushSDKSocket.on(EVENTS.USER_SPAM_FEEDS, (feedItem) => {\n  console.log(`Received spam notification: ${feedItem.title}`);\n});\npushSDKSocket.on(EVENTS.CHAT_RECEIVED_MESSAGE, (message) => {\n  console.log(`Received chat message: ${message.text}`);\n});\n"})}),"\n",(0,o.jsx)("center",{children:(0,o.jsx)("b",{children:".   .   ."})}),"\n",(0,o.jsx)(n.p,{children:"That\u2019s it! You now know how to use the main features of the Push Protocol Socket API to add push notification functionality to your application\ud83c\udf89"}),"\n",(0,o.jsx)(n.p,{children:"We\u2019ll cover other parts of the Push SDK in coming posts so stay tuned!"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://push.org/docs/",children:"Push Protocol SDK documentation here"})," \u2014 if you\u2019d like more reference material to chew on."]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/push-protocol/push-sdk",children:"Push SDK on GitHub"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://discord.gg/pushprotocol",children:"Our Discord"})," \u2014 we\u2019ve got devs ready to give your project whatever support and consultation you need."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/docs/",title:"Push developer docs",children:"Push developer docs"})," to get started on building right away!"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"#PoweredbyPush"})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},636052:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/cover-image-2cebd69b4d9f418eb8e07d0fa8fd87ee.webp"},457185:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/cover-image-2cebd69b4d9f418eb8e07d0fa8fd87ee.webp"},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var o=t(296540);const s={},i=o.createContext(s);function c(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);