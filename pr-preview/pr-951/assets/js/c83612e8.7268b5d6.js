"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[84075],{964904:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=t(474848),r=t(28453);t(411470),t(119365);const s={id:"docs-slider-settings-with-eth-tracker-showrunners-example",title:"Notification Settings in ETH Tracker",hide_title:!0,slug:"./eth-tracker-with-showrunners-example",displayed_sidebar:"pushNotificationSidebar",sidebar_position:8,image:"/assets/docs/previews/docs_slider_settings_with_eth_tracker_showrunners_example--notification_settings_in_eth_tracker.png"},a="Slider Notification Settings in Showrunners",o={id:"notifications/showrunners-scaffold/Examples/docs-slider-settings-with-eth-tracker-showrunners-example",title:"Notification Settings in ETH Tracker",description:"This example is intended to get you understand slider based notification settings with a real-world application. For the example we are going to look at a scenario where users can choose a time interval and showrunners framework will notify them as per their request. Checkout Showrunners Docs, Showrunners Framework, Channel Settings Docs and Channel Settings Demo for better understanding!",source:"@site/docs/notifications/04-showrunners-scaffold/03-Examples/08-Showrunner-Example-Eth-Tracker-Time-Interval.mdx",sourceDirName:"notifications/04-showrunners-scaffold/03-Examples",slug:"/notifications/showrunners-scaffold/Examples/eth-tracker-with-showrunners-example",permalink:"/push-website/pr-preview/pr-951/docs/notifications/showrunners-scaffold/Examples/eth-tracker-with-showrunners-example",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/notifications/04-showrunners-scaffold/03-Examples/08-Showrunner-Example-Eth-Tracker-Time-Interval.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"docs-slider-settings-with-eth-tracker-showrunners-example",title:"Notification Settings in ETH Tracker",hide_title:!0,slug:"./eth-tracker-with-showrunners-example",displayed_sidebar:"pushNotificationSidebar",sidebar_position:8,image:"/assets/docs/previews/docs_slider_settings_with_eth_tracker_showrunners_example--notification_settings_in_eth_tracker.png"},sidebar:"pushNotificationSidebar",previous:{title:"Showrunners X Notification Settings",permalink:"/push-website/pr-preview/pr-951/docs/notifications/showrunners-scaffold/Examples/notification-settings-with-showrunners-example"},next:{title:"Notification Settings in BTC Tracker",permalink:"/push-website/pr-preview/pr-951/docs/notifications/showrunners-scaffold/Examples/btc-tracker-with-showrunners-example"}},l={},c=[{value:"What we gonna build?",id:"what-we-gonna-build",level:2},{value:"Creating Eth Tracker in Showrunners",id:"creating-eth-tracker-in-showrunners",level:2},{value:"Step 1: Setup the Showrunners in your local machine",id:"step-1-setup-the-showrunners-in-your-local-machine",level:3},{value:"Step 2: Install Dependencies &amp; start up",id:"step-2-install-dependencies--start-up",level:3},{value:"Step 3: Import the Push SDK",id:"step-3-import-the-push-sdk",level:3},{value:"Channel File",id:"channel-file",level:4},{value:"Fetch subscribers data",id:"fetch-subscribers-data",level:3},{value:"Basic logic implementation",id:"basic-logic-implementation",level:3},{value:"Build the notification payload",id:"build-the-notification-payload",level:3},{value:"Setup Notification trigger",id:"setup-notification-trigger",level:3},{value:"How does it actually work?",id:"how-does-it-actually-work",level:3}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"slider-notification-settings-in-showrunners",children:"Slider Notification Settings in Showrunners"}),"\n",(0,i.jsxs)(n.p,{children:["This example is intended to get you understand slider based notification settings with a real-world application. For the example we are going to look at a scenario where users can choose a time interval and showrunners framework will notify them as per their request. Checkout ",(0,i.jsx)(n.a,{href:"https://push.org/docs/notifications/showrunners-scaffold/get-started/",title:"Push Showrunners Docs",children:"Showrunners Docs"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/push-protocol/push-showrunners-framework/tree/main",title:"Push Showrunners Github",children:"Showrunners Framework"}),", ",(0,i.jsx)(n.a,{href:"https://push.org/docs/notifications/build/create-channel-settings/",title:"Push Channel Settings Docs",children:"Channel Settings Docs"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/push-protocol/push-showrunners-framework/tree/main/src/sample_showrunners/bank",title:"Channel Settings Example Github",children:"Channel Settings Demo"})," for better understanding!"]}),"\n",(0,i.jsx)(t,{children:(0,i.jsx)("title",{children:"Price Alerts with Showrunners tutorial | Push Notification | Push Documentation"})}),"\n","\n","\n",(0,i.jsx)(n.h2,{id:"what-we-gonna-build",children:"What we gonna build?"}),"\n",(0,i.jsx)(n.p,{children:"Imagine you are a crypto trader or a general crypto enthusiast. You want to be notified every once in a while about the price movements and activities in the market. But you either lose track of time or forget about it. To solve this exact problem, we will be looking into a slider type notification settings implementation where you as a user can specify the time interval after which you would like to get notified."}),"\n",(0,i.jsxs)(n.p,{children:["We will choose the ",(0,i.jsx)(n.a,{href:"https://github.com/push-protocol/push-showrunners-channels/tree/wallet-tracker/Staging_channels/ethTicker",title:"Push Channel Eth Tracker",children:"Eth Tracker"})," channel to demonstrate this example."]}),"\n",(0,i.jsx)(n.h2,{id:"creating-eth-tracker-in-showrunners",children:"Creating Eth Tracker in Showrunners"}),"\n",(0,i.jsx)(n.h3,{id:"step-1-setup-the-showrunners-in-your-local-machine",children:"Step 1: Setup the Showrunners in your local machine"}),"\n",(0,i.jsxs)(n.p,{children:["For detailed, step-by-step guide visit the Showrunners ",(0,i.jsx)(n.a,{href:"https://push.org/docs/notifications/showrunners-scaffold/get-started/",title:"Push Showrunners Docs",children:"docs"}),". First we need to create a folder in ",(0,i.jsx)(n.code,{children:"src/showrunners/<your_channel_name>"})]}),"\n",(0,i.jsx)(n.h3,{id:"step-2-install-dependencies--start-up",children:"Step 2: Install Dependencies & start up"}),"\n",(0,i.jsx)(n.p,{children:"Navigate to the SDK directory and install required dependencies."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd push-showrunners-framework\nyarn install\ndocker-compose up\nyarn run dev\n"})}),"\n",(0,i.jsx)(n.h3,{id:"step-3-import-the-push-sdk",children:"Step 3: Import the Push SDK"}),"\n",(0,i.jsxs)(n.p,{children:["After you have created a channel folder. Refer to Showrunners ",(0,i.jsx)(n.a,{href:"https://push.org/docs/notifications/showrunners-scaffold/get-started/",title:"Push Showrunners Docs",children:"docs"}),". Move to the [name]Channel.ts file and import the dependencies."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"import { PushAPI } from '@pushprotocol/restapi';\n"})}),"\n",(0,i.jsx)(n.h4,{id:"channel-file",children:(0,i.jsx)(n.a,{href:"https://github.com/push-protocol/push-showrunners-framework/blob/main/src/sample_showrunners/bank/bankChannel.ts",title:"Eth Tracker Channel Github",children:"Channel File"})}),"\n",(0,i.jsx)(n.p,{children:"In order to send notification, we need to have the instance of the user channel. To get that, we need to add the below function in our 'Channel class'\n."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"const provider = new ethers.providers.JsonRpcProvider(settings.providerUrl);\nconst signer = new ethers.Wallet(keys.PRIVATE_KEY_NEW_STANDARD.PK, provider);\nconst userAlice = await PushAPI.initialize(signer, {\n  env: CONSTANTS.ENV.STAGING,\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Here, you can use any provider of your choice and fetch the signer using the private key of the wallet that was used to create the channel. The ",(0,i.jsx)(n.code,{children:"userAlice"})," is an instance of the channel using the ",(0,i.jsx)(n.code,{children:"PushAPI"})," from the sdk. This will allow us to fetch data of subscribers and their notification settings to build our logic around."]}),"\n",(0,i.jsx)(n.p,{children:"Let's get to building it."}),"\n",(0,i.jsx)(n.h3,{id:"fetch-subscribers-data",children:"Fetch subscribers data"}),"\n",(0,i.jsxs)(n.p,{children:["To fetch a list of all users who have opted into receiving notifications along with their opted value from ",(0,i.jsx)(n.code,{children:"userAlice"}),", you can use the ",(0,i.jsx)(n.code,{children:"subscribers"})," method. You can read about this method in detail ",(0,i.jsx)(n.a,{href:"https://push.org/docs/notifications/build/manage-channel/#get-channel-subscribers-api",title:"Channel Settings Docs",children:"here"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'\nconst userData: any = await userAlice.channel.subscribers({\n   page: i,\n   limit: 10,\n   setting: true,\n });\n\n// Output :\n{\n "itemcount": 5,\n "subscribers": [\n   {\n     "subscriber": "0x279c00e16c638a752ea42ae5e09db3c3992f70ad",\n     "settings": "[{\\"type\\": 2, \\"user\\": 8, \\"index\\": 1, \\"ticker\\": 1, \\"default\\": 1, \\"enabled\\": true, \\"lowerLimit\\": 1, \\"upperLimit\\": 10, \\"description\\": \\"Price Range\\"}]"\n   },\n   {\n     "subscriber": "0x49403ae592c82fc3f861cd0b9738f7524fb1f38c",\n     "settings": "[{\\"type\\": 2, \\"user\\": 1, \\"index\\": 1, \\"ticker\\": 1, \\"default\\": 1, \\"enabled\\": true, \\"lowerLimit\\": 1, \\"upperLimit\\": 10, \\"description\\": \\"Price Range\\"}]"\n   },\n   {\n     "subscriber": "0x71ffa5771e8019787190d098586efe02026a3c8c",\n     "settings": "[{\\"type\\": 2, \\"user\\": 2, \\"index\\": 1, \\"ticker\\": 1, \\"default\\": 1, \\"enabled\\": true, \\"lowerLimit\\": 1, \\"upperLimit\\": 10, \\"description\\": \\"Price Range\\"}]"\n   },\n   {\n     "subscriber": "0x7a45f2e84055b0c79696c9533c97a4b21dee30d3",\n     "settings": "[{\\"type\\": 2, \\"user\\": 2, \\"index\\": 1, \\"ticker\\": 1, \\"default\\": 1, \\"enabled\\": true, \\"lowerLimit\\": 1, \\"upperLimit\\": 10, \\"description\\": \\"Price Range\\"}]"\n   },\n   {\n     "subscriber": "0xc1836ce1eb918cfc8e9acab71ce9c6e1ebe0dff0",\n     "settings": "[{\\"type\\": 2, \\"user\\": 7, \\"index\\": 1, \\"ticker\\": 1, \\"default\\": 1, \\"enabled\\": true, \\"lowerLimit\\": 1, \\"upperLimit\\": 10, \\"description\\": \\"Price Range\\"}]"\n   }\n ]\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The main parameters that we need for our use-case is ",(0,i.jsx)(n.code,{children:"type"}),", ",(0,i.jsx)(n.code,{children:"user"}),", ",(0,i.jsx)(n.code,{children:"index"})," and ",(0,i.jsx)(n.code,{children:"enabled"}),". Let's go one by one in brief."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"type"})," - Type here tells us if a notification type is boolean or slider type. There are: ",(0,i.jsx)(n.code,{children:"1 ---\x3e boolean"})," and ",(0,i.jsx)(n.code,{children:"2 ---\x3e slider"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"user"})," - This parameter tells us the ",(0,i.jsx)(n.code,{children:"value a specific user"})," chose in their settings. A value in case of a slider and true/false in case of boolean."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"index"})," - This tells us the index of the notification settings as per their creation by the channel owner. The first channel settings gets the index value 1, the next gets 2 and so on."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"enabled"})," - As the name suggests, it tells us if an user have ",(0,i.jsx)(n.code,{children:"opted in for a settings or not"}),". It's values can be true or false."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"basic-logic-implementation",children:"Basic logic implementation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'let i = 1;\n\nwhile (true) {\n  const userData: any = await userAlice.channel.subscribers({\n    page: i,\n    limit: 10,\n    setting: true,\n  });\n\n  if (userData.itemcount != 0) {\n    i++;\n  } else {\n    console.log("Breakkkk.")\n    i=1;\n    break;\n  }\n\n  // Loop through the `settings` array for the required type (say 2 here) --\x3e Time interval\n  userData.subscribers.map(async (subscriberObj) => {\n    const userSettings = JSON.parse(subscriberObj.settin\n    const mappedValue = await ethTickerModel.findOne({ subscriber: subscriberObj.subscriber });\n\n    if (userSettings !== null) {\n      const temp = userSettings.find((obj) => obj.index == 2); // for time interval\n      let userValue: number;\n\n      //IF user has enabled notification then enter\n      if (temp.enabled === true) {\n        userValue = temp.userValue;\n\n        if (mappedValue.lastCycle + userValue == CYCLES) {\n          recipients.push(subscriberObj.subscriber);\n\n        // UPDATE the users mapped value in DB\n        await ethTickerModel.findOneAndUpdate(\n          { subscriber: subscriberObj.subscriber },\n          { lastCycle: mappedValue.lastCycle + userValue},\n          { upsert: true },\n        );\n      }\n    }\n  });\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Let's go step-by-step here."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"We run a loop through all the subscribers of a channel. Remember to handle pagination as the subscribers' list is paginated."}),"\n",(0,i.jsxs)(n.li,{children:["Here, we can consider a global variable ",(0,i.jsx)(n.code,{children:"CYCLES"})," that we store in our database that is responsible to track the iterations of the cron-job we setup for 1 hour."]}),"\n",(0,i.jsxs)(n.li,{children:["We check if a new subscriber is added to the channel at the start of every cron-job, if yes then we add ",(0,i.jsx)(n.code,{children:"subscriber address"})," mapped to the current ",(0,i.jsx)(n.code,{children:"CYCLES"})," value in MongoDB."]}),"\n",(0,i.jsxs)(n.li,{children:["For sending notification, if the ",(0,i.jsx)(n.code,{children:"mappedValue + userValue == CYCLES"}),", we send a notification."]}),"\n",(0,i.jsxs)(n.li,{children:["We then update the value in DB, ",(0,i.jsx)(n.code,{children:"mappedValue += userValue"})]}),"\n",(0,i.jsxs)(n.li,{children:["After the entire logic is done, we update the CYCLES variable, ",(0,i.jsx)(n.code,{children:"CYCLES++"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This is the basic logic behind the notification trigger."}),"\n",(0,i.jsx)(n.h3,{id:"build-the-notification-payload",children:"Build the notification payload"}),"\n",(0,i.jsxs)(n.p,{children:["Design your own payload with custom values in the when you want to trigger notifications. To learn more about notification settings, refer to ",(0,i.jsx)(n.a,{href:"https://push.org/docs/notifications/build/create-channel-settings/",children:"docs"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"const payload = {\n  notification: {\n    title: 'Title',\n    body: 'Notif Body',\n  },\n  payload: {\n    title: 'Title',\n    body: 'Payload body',\n    cta: 'https://google.com/',\n    embed: 'https://avatars.githubusercontent.com/u/64157541?s=200&v=4',\n    // index of the notification the channel wants to trigger, in this for 1nd index which is for Boolean type\n    category: 1, // Depending upon your use-case\n  },\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"setup-notification-trigger",children:"Setup Notification trigger"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"public async sendMessageToNode(simulate) {\n  const logger = this.logger;\n  this.getNewPrice()\n    .then(async (payload: any) => {\n      for (let i = 0; i < payload.recipients.length; i++) {\n        this.sendNotification({\n          recipient: payload.recipients[i], // new\n          title: payload.notifTitle,\n          message: payload.notifMsg,\n          payloadTitle: payload.title,\n          payloadMsg: payload.msg,\n          notificationType: payload.type,\n          simulate: simulate,\n          image: null,\n        });\n      }\n    })\n    .catch(err => {\n      logger.error(`[${new Date(Date.now())}]-[ETH Ticker]- Errored on CMC API... skipped with error: %o`, err);\n    });\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"how-does-it-actually-work",children:"How does it actually work?"}),"\n",(0,i.jsx)(n.p,{children:"Summarizing what we implemented in the example, we use a concept of a global clock (say CYCLES) using a variable that is stored in our database and it gets updated after every iteration of the cron-job that runs for every 1 hour. We check if any new users have subscribed to the channel after the last iteration and store a mapping of the user address and the current CYCLES value. This mapping will allow us to calculate the correct dispatch time of notification as per user."}),"\n",(0,i.jsx)(n.p,{children:"Well, that's it. You now have a clear understanding of how notification slider settings work and you can use it to build amazing use-cases. We'll see you in another one. Until then keep building\ud83d\udd25"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},119365:(e,n,t)=>{t.d(n,{A:()=>a});t(296540);var i=t(618215);const r={tabItem:"tabItem_Ymn6"};var s=t(474848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,a),hidden:t,children:n})}},411470:(e,n,t)=>{t.d(n,{A:()=>y});var i=t(296540),r=t(618215),s=t(823104),a=t(956347),o=t(300205),l=t(757485),c=t(231682),u=t(289466);function h(e){var n,t;return null!==(n=null===(t=i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}function d(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=null!=n?n:function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace(Object.assign({},r.location,{search:n.toString()}))}),[s,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=d(e),[a,l]=(0,i.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:i}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+i.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const r=null!==(n=i.find((e=>e.default)))&&void 0!==n?n:i[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,h]=f({queryString:t,groupId:r}),[b,g]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[r,s]=(0,u.Dv)(t);return[r,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),m=(()=>{const e=null!=c?c:b;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{m&&l(m)}),[m]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);l(e),h(e),g(e)}),[h,g,s]),tabValues:s}}var g=t(992303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=t(474848);function x(e){let{className:n,block:t,selectedValue:i,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==i&&(c(n),a(r))},h=e=>{var n;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var i;const n=l.indexOf(e.currentTarget)+1;t=null!==(i=l[n])&&void 0!==i?i:l[0];break}case"ArrowLeft":{var r;const n=l.indexOf(e.currentTarget)-1;t=null!==(r=l[n])&&void 0!==r?r:l[l.length-1];break}}null===(n=t)||void 0===n||n.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,w.jsx)("li",Object.assign({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:h,onClick:u},s,{className:(0,r.A)("tabs__item",m.tabItem,null==s?void 0:s.className,{"tabs__item--active":i===n}),children:null!=t?t:n}),n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function j(e){const n=b(e);return(0,w.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,w.jsx)(x,Object.assign({},e,n)),(0,w.jsx)(v,Object.assign({},e,n))]})}function y(e){const n=(0,g.A)();return(0,w.jsx)(j,Object.assign({},e,{children:h(e.children)}),String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(296540);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);