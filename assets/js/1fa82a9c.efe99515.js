"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[82893],{288038:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var t=e(785893),o=e(511151);const s={slug:"getting-started-with-push-sdk-uiweb-api",title:"Getting Started With Push SDK: uiweb API\ud83d\udee0\ufe0f",authors:["push"],image:"./cover-image.webp",text:"The @pushprotocol/uiweb package is a collection of React components for building dApps that interact with the Push Protocol. It includes components for rendering notifications, spam notifications, and forms for subscribing and unsubscribing to spam notification channels.",tags:["Web3","Developer","Blockchain Development","Web3 Notifications"]},a=void 0,c={permalink:"/blog/getting-started-with-push-sdk-uiweb-api",source:"@site/blog/2023-02-21-getting-started-with-push-sdk/index.md",title:"Getting Started With Push SDK: uiweb API\ud83d\udee0\ufe0f",description:"Cover image of Getting Started With Push SDK: uiweb API\ud83d\udee0\ufe0f",date:"2023-02-21T00:00:00.000Z",formattedDate:"February 21, 2023",tags:[{label:"Web3",permalink:"/blog/tags/web-3"},{label:"Developer",permalink:"/blog/tags/developer"},{label:"Blockchain Development",permalink:"/blog/tags/blockchain-development"},{label:"Web3 Notifications",permalink:"/blog/tags/web-3-notifications"}],readingTime:4.74,hasTruncateMarker:!0,authors:[{name:"Push Protocol",url:"https://twitter.com/pushprotocol",imageURL:"/assets/blog/authors/authorpush.png",key:"push"}],frontMatter:{slug:"getting-started-with-push-sdk-uiweb-api",title:"Getting Started With Push SDK: uiweb API\ud83d\udee0\ufe0f",authors:["push"],image:"./cover-image.webp",text:"The @pushprotocol/uiweb package is a collection of React components for building dApps that interact with the Push Protocol. It includes components for rendering notifications, spam notifications, and forms for subscribing and unsubscribing to spam notification channels.",tags:["Web3","Developer","Blockchain Development","Web3 Notifications"]},unlisted:!1,prevItem:{title:"Push @ETHDenver Full Itinerary \ud83c\udf04",permalink:"/blog/push-eth-denver-full-itinerary"},nextItem:{title:"Empower Your Wallet, App, or Platform with Push Delivery Nodes\u26a1",permalink:"/blog/empower-your-wallet-app-or-platform-with-push-delivery-nodes"}},r={image:e(740053).Z,authorsImageUrls:[void 0]},h=[{value:"Components",id:"components",level:2},{value:"NotificationItem",id:"notificationitem",level:3},{value:"Putting it all together",id:"putting-it-all-together",level:2}];function l(n){const i={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Cover image of Getting Started With Push SDK: uiweb API\ud83d\udee0\ufe0f",src:e(314120).Z+"",width:"1400",height:"735"})}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)("b",{children:"@pushprotocol/uiweb"})," package is a collection of React components for building dApps that interact with the Push Protocol. It includes components for rendering notifications, spam notifications, and forms for subscribing and unsubscribing to spam notification channels."]}),"\n",(0,t.jsxs)(i.p,{children:["In this blog post, we'll take a closer look at the components included in the ",(0,t.jsx)("b",{children:"@pushprotocol/uiweb"})," package and how you can use them in your dApp."]}),"\n",(0,t.jsx)(i.h2,{id:"components",children:"Components"}),"\n",(0,t.jsx)(i.h3,{id:"notificationitem",children:"NotificationItem"}),"\n",(0,t.jsx)(i.p,{children:"This component displays a single notification item. It takes the following props:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)("b",{children:"notificationTitle"})," (string): The title of the notification."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)("b",{children:"notificationBody"})," (string): The body of the notification."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)("b",{children:"app"})," (string): The name of the app that sent the notification."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)("b",{children:"icon"})," (string): The URL of an icon to display next to the notification title."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)("b",{children:"image"})," (string): The URL of an image to display in the notification."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)("b",{children:"url"})," (string): The URL to open when the notification is clicked."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)("b",{children:"theme"})," (string): The theme to use for the notification. Possible values are 'light' and 'dark'."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)("b",{children:"chainName"}),' (string): The name of the blockchain the notification was sent on. Possible values are "ETH_TEST_GOERLI", "POLYGON_TEST_MUMBAI\u201d.']}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)("b",{children:"isSpam"})," (boolean, optional): Set to true if the notification is spam."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)("b",{children:"subscribeFn"}),' (function, optional): A function to call when the user clicks the "Opt-in" button on a spam notification.']}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)("b",{children:"isSubscribedFN"})," (function, optional): A function that returns a boolean indicating whether the user is subscribed to the spam notification's channel."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Example:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:'import { NotificationItem } from "@pushprotocol/uiweb";\n\nfunction MydApp() {\n  const notifications = [\n    {\n      title: "Notification 1",\n      message: "This is the first notification",\n      app: "My App",\n      icon: "https://my-app.com/icon.png",\n      image: "https://my-app.com/image.png",\n      url: "https://my-app.com/notification-1",\n      blockchain: "ETH_TEST_GOERLI"\n    },\n    {\n      title: "Notification 2",\n      message: "This is the second notification",\n      app: "My App",\n      icon: "https://my-app.com/icon.png",\n      image: "https://my-app.com/image.png",\n      url: "https://my-app.com/notification-2",\n      blockchain: "ETH_TEST_GOERLI"\n    }\n  ];\n\n  return (\n    <div>\n      {notifications.map((notification, i) => (\n        <NotificationItem\n          key={i}\n          notificationTitle={notification.title}\n          notificationBody={notification.message}\n          app={notification.app}\n          icon={notification.icon}\n          image={notification.image}\n          url={notification.url}\n          theme={{ background: "blue", color: "white" }}\n          chainName={notification.blockchain}\n        />\n      ))}\n    </div>\n  );\n}\n\n'})}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)("b",{children:"Notification Item"})," component can also be used to render spam notifications. To get the spam data, you can use the ",(0,t.jsx)("b",{children:"PushAPI.user.getFeeds() "})," method with the ",(0,t.jsx)("b",{children:"spam"})," parameter set to ",(0,t.jsx)("b",{children:"true"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)("b",{children:"NotificationItem"})," component is a general-purpose component that can be used to render any type of notification item, including spam notifications. It accepts props such as ",(0,t.jsx)("b",{children:"notificationTitle, notificationBody, cta, app, icon, image,"})," and ",(0,t.jsx)("b",{children:"url"})," to customize the appearance and behavior of the component."]}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)("b",{children:"Spam"})," component is a specialized variant of the ",(0,t.jsx)("b",{children:"NotificationItem"})," component that is specifically designed for rendering spam notifications. It includes additional props such as ",(0,t.jsx)("b",{children:"isSpam, subscribeFn,"})," and ",(0,t.jsx)("b",{children:"isSubscribedFn"})," that allow the user to interact with the spam notification channel. It also includes an unsubscribe form that is displayed if the user is subscribed to the spam notification channel."]}),"\n",(0,t.jsxs)(i.p,{children:["You can use the ",(0,t.jsx)("b",{children:"PushAPI.user.getFeeds()"})," method with the ",(0,t.jsx)("b",{children:"spam"})," parameter set to ",(0,t.jsx)("b",{children:"true"})," to get the spam data. Here's an example of how you can use it:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:"const spams = await PushAPI.user.getFeeds({\n  user: 'eip155:11155111:0xD8634C39BBFd4033c0d3289C4515275102423681',\n  spam: true,\n  env: 'staging'\n});\n"})}),"\n",(0,t.jsxs)(i.p,{children:["To render the ",(0,t.jsx)("b",{children:"Notification Item"})," component for each spam notification, you'll need to pass in the additional props ",(0,t.jsx)("b",{children:"isSpam, subscribeFn,"})," and ",(0,t.jsx)("b",{children:"isSubscribedFn"})]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"isSpam: A boolean value indicating whether the notification is a spam notification"}),"\n",(0,t.jsx)(i.li,{children:"subscribeFn: A function that opts the user in to the spam notification's channel"}),"\n",(0,t.jsx)(i.li,{children:"isSubscribedFn: A function that returns a boolean value indicating whether the user is subscribed to the spam notification's channel\nHere\u2019s an example of how you can render the Notification Item component for each spam notification:"}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:"{spams.map((oneNotification, i) => {\n  const { \n    cta,\n    title,\n    message,\n    app,\n    icon,\n    image,\n    url,\n    blockchain,\n    secret,\n    notification\n  } = oneNotification;\n\nreturn (\n    <NotificationItem\n      key={`spam-${i}`}\n      notificationTitle={title}\n      notificationBody={message}\n      cta={cta}\n      app={app}\n      icon={icon}\n      image={image}\n      url={url}\n      theme={theme}\n      chainName={blockchain}\n      isSpam={true}\n      subscribeFn={subscribeFn}\n      isSubscribedFn={isSubscribedFn}\n    />\n  );\n})}\n"})}),"\n",(0,t.jsxs)(i.p,{children:["To implement the ",(0,t.jsx)("b",{children:"subscribeFn"})," and ",(0,t.jsx)("b",{children:"isSubscribedFn"})," functions, you can use the ",(0,t.jsx)("b",{children:"PushAPI.channel.subscribe()"})," and ",(0,t.jsx)("b",{children:"PushAPI.channel.subscribe()"})," methods from @pushprotocol/restapi package, respectively."]}),"\n",(0,t.jsxs)(i.p,{children:["For examples on how you can implement these functions, check out ",(0,t.jsx)(i.a,{href:"https://medium.com/push-protocol/getting-started-with-push-sdk-rest-api-%EF%B8%8F-821e5b8389cc",children:"PUSH-SDK Rest API blog post"})," we recently published."]}),"\n",(0,t.jsx)(i.p,{children:"Here\u2019s an example of how you can implement these functions:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:"await PushAPI.channels.subscribe({\n  signer: _signer,\n  user: 'eip155:11155111:0xD8634C39BBFd4033c0d3289C4515275102423681',\n  channel: 'eip155:11155111:0xD8634C39BBFd4033c0d3289C4515275102423681',\n\tenv: 'staging'\n});\n\nconst subscriptions = await PushAPI.user.getSubscriptions({\n  user: 'eip155:11155111:0xD8634C39BBFd4033c0d3289C4515275102423681',\n  env: 'staging'\n});\n"})}),"\n",(0,t.jsx)(i.h2,{id:"putting-it-all-together",children:"Putting it all together"}),"\n",(0,t.jsxs)(i.p,{children:["Here is an example using ",(0,t.jsx)("b",{children:"subscribeFn"})," that demonstrates the ",(0,t.jsx)("b",{children:"uiweb"})," components used together."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:"import React, { useState, useEffect } from \"react\";\nimport { NotificationItem, chainNameType } from \"@pushprotocol/uiweb\";\n\nfunction MydApp() {\n  const [notifications, setNotifications] = useState([]);\n  useEffect(() => {\n    const fetchNotifications = async () => {\n      // fetch user notifications using the PushAPI\n      const notifications = await PushAPI.user.getFeeds({\n        user: 'eip155:11155111:0xD8634C39BBFd4033c0d3289C4515275102423681', // user address in CAIP\n        env: 'staging'\n      });\n      setNotifications(notifications);\n    };\n    fetchNotifications();\n  }, []);\n  return (\n    <div>\n      <h1>MydApp</h1>\n      <h2>Notifications</h2>\n      {notifications.map((notification, i) => {\n        const {\n          title,\n          message,\n          app,\n          icon,\n          image,\n          url,\n          blockchain\n        } = notification;\n        return (\n          <NotificationItem\n            key={i}\n            notificationTitle={title}\n            notificationBody={message}\n            app={app}\n            icon={icon}\n            image={image}\n            url={url}\n            theme={theme}\n            chainName={blockchain as chainNameType}\n          />\n        );\n      })}\n    </div>\n  );\n}\n"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)("b",{children:"MydApp"})," is a component that renders a list of notifications and spam notifications, as well as a form for subscribing to or unsubscribing from spam notifications. It uses the following components from the ",(0,t.jsx)("b",{children:"@pushprotocol/uiweb"})," package:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)("b",{children:"NotificationItem:"})," A React component for rendering a single notification item."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)("b",{children:"Spam:"})," A React component for rendering a single spam notification item, with options for subscribing or unsubscribing to the spam notification channel."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)("b",{children:"Subscribe:"})," A React component for rendering a form for subscribing to a spam notification channel."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)("b",{children:"Unsubscribe:"})," A React component for rendering a form for unsubscribing from a spam notification channel."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)("b",{children:"MydApp"})," uses the ",(0,t.jsx)("b",{children:"useState"})," and ",(0,t.jsx)("b",{children:"useEffect"})," Hooks to fetch and display the user's notifications and spam notifications using the ",(0,t.jsx)("b",{children:"PushAPI"}),". It also defines event handlers for subscribing to and unsubscribing from spam notifications."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)("b",{children:"MydApp"})," returns a JSX element that contains the following elements:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["A ",(0,t.jsx)("b",{children:"div"})," element with a ",(0,t.jsx)("b",{children:"h1"})," element for the title of the application and a ",(0,t.jsx)("b",{children:"h2"})," element for the section heading for the notifications."]}),"\n",(0,t.jsxs)(i.li,{children:["A loop that renders a ",(0,t.jsx)("b",{children:"NotificationItem"})," component for each notification in the ",(0,t.jsx)("b",{children:"notifications"})," array."]}),"\n",(0,t.jsxs)(i.li,{children:["A ",(0,t.jsx)("b",{children:"h2"})," element for the section heading for the spam notifications."]}),"\n",(0,t.jsxs)(i.li,{children:["A loop that renders a ",(0,t.jsx)("b",{children:"Spam"})," component for each spam notification in the ",(0,t.jsx)("b",{children:"spamNotifications"})," array."]}),"\n",(0,t.jsxs)(i.li,{children:["A ",(0,t.jsx)("b",{children:"h2"})," element for the section heading for the subscription form."]}),"\n",(0,t.jsxs)(i.li,{children:["An ",(0,t.jsx)("b",{children:"Unsubscribe"})," component if the user is subscribed to spam notifications, or a ",(0,t.jsx)("b",{children:"Subscribe"})," component if the user is not subscribed to spam notifications."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["There are of course other React components that you can to compliment the uiweb API. For instance: the ",(0,t.jsx)("b",{children:"Feed "}),"component is a container for displaying a list of notifications in a UI. It takes the following props:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"notifications (array of Notification objects): An array of notifications to be displayed in the feed. Each Notification object should have the following shape:"}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)("b",{children:"cta"})," (string): The call-to-action text for the notification."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)("b",{children:"title"})," (string): The title of the notification."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)("b",{children:"message"})," (string): The body of the notification."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)("b",{children:"app"})," (string): The name of the app that sent the notification."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)("b",{children:"icon"})," (string): The URL of an icon to be displayed with the notification."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)("b",{children:"image"})," (string): The URL of an image to be displayed with the notification."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)("b",{children:"url"})," (string): The URL to be opened when the notification is clicked."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)("b",{children:"blockchain"})," (string): The name of the blockchain on which the notification was sent."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)("b",{children:"theme"}),"(Theme object): An object defining the colors and styles to be used in the feed. The Theme object should have the following shape:"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)("b",{children:"background"})," (string): The background color of the feed."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)("b",{children:"color"})," (string): The text color of the feed."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)("b",{children:"chainName"})," (string): The name of the blockchain to be displayed in the feed."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Example:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:'import NotificationItem from "@pushprotocol/uiweb/NotificationItem";\nimport Feed from "./Feed"; // User-implemented component\n\nconst notifications = [\n  {\n    cta: "Learn More",\n    title: "Notification 1",\n    message: "This is the first notification",\n    app: "My App",\n    icon: "<https://my-app.com/icon.png>",\n    image: "<https://my-app.com/image.png>",\n    url: "<https://my-app.com/notification-1>",\n    blockchain: "Ethereum"\n  },\n  {\n    cta: "Get Started",\n    title: "Notification 2",\n    message: "This is the second notification",\n    app: "My App",\n    icon: "<https://my-app.com/icon.png>",\n    image: "<https://my-app.com/image.png>",\n    url: "<https://my-app.com/notification-2>",\n    blockchain: "Ethereum"\n  }\n];\nfunction MydApp() {\n  return (\n    <Feed\n      notifications={notifications}\n      theme={{ background: "blue", color: "white" }}\n      chainName="Ethereum"\n    />\n  );\n}\n'})}),"\n",(0,t.jsxs)(i.p,{children:["That\u2019s it! You now know how to use the components of the ",(0,t.jsx)("b",{children:"@pushprotocol/uiweb"})," API to add push notification functionality to your application."]}),"\n",(0,t.jsxs)(i.p,{children:["We\u2019ll cover the other parts of the SDK in the coming posts. More reference material is available in the ",(0,t.jsx)(i.a,{href:"https://push.org/docs/",children:"Push Protocol SDK documentation"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["In addition, try out the ",(0,t.jsx)(i.a,{href:"https://github.com/ethereum-push-notification-service/push-sdk-sandbox",children:"Push SDK sandbox"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"Keep PUSHING! #PoweredbyPush"})]})}function p(n={}){const{wrapper:i}={...(0,o.a)(),...n.components};return i?(0,t.jsx)(i,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},740053:(n,i,e)=>{e.d(i,{Z:()=>t});const t=e.p+"assets/images/cover-image-46ba0bbb6bc69c7ef9eb465d55da5ff9.webp"},314120:(n,i,e)=>{e.d(i,{Z:()=>t});const t=e.p+"assets/images/cover-image-46ba0bbb6bc69c7ef9eb465d55da5ff9.webp"},511151:(n,i,e)=>{e.d(i,{Z:()=>c,a:()=>a});var t=e(667294);const o={},s=t.createContext(o);function a(n){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function c(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:a(n.components),t.createElement(s.Provider,{value:i},n.children)}}}]);