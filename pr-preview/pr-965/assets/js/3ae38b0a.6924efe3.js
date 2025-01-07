"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[28236],{254506:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=i(474848),s=i(28453);const o={id:"docs-notifications-tutorial-integrate-notifications-via-aws-sns",title:"Integrate notifications via AWS SNS",hide_title:!0,slug:"./integrate-notifications-via-aws-sns",displayed_sidebar:"pushNotificationSidebar",sidebar_position:8,image:"/assets/docs/previews/docs_notifications_tutorial--integrate_notifications_via_aws_sns.png"},a="Integrate Notifications via AWS SNS",r={id:"notifications/tutorials/docs-notifications-tutorial-integrate-notifications-via-aws-sns",title:"Integrate notifications via AWS SNS",description:"Notifications via AWS SNS is more of a Web2.5 approach than Web3. Do check out integrating notifications section for your frontend to see other recommended ways for integrating notifications on your frontend.",source:"@site/docs/notifications/05-tutorials/08-Tutorial-Integrate-Notifications-AWS-SNS.mdx",sourceDirName:"notifications/05-tutorials",slug:"/notifications/tutorials/integrate-notifications-via-aws-sns",permalink:"/push-website/pr-preview/pr-965/docs/notifications/tutorials/integrate-notifications-via-aws-sns",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/notifications/05-tutorials/08-Tutorial-Integrate-Notifications-AWS-SNS.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"docs-notifications-tutorial-integrate-notifications-via-aws-sns",title:"Integrate notifications via AWS SNS",hide_title:!0,slug:"./integrate-notifications-via-aws-sns",displayed_sidebar:"pushNotificationSidebar",sidebar_position:8,image:"/assets/docs/previews/docs_notifications_tutorial--integrate_notifications_via_aws_sns.png"},sidebar:"pushNotificationSidebar",previous:{title:"Integrate notifications via Delivery Node",permalink:"/push-website/pr-preview/pr-965/docs/notifications/tutorials/integrate-notifications-via-delivery-node"},next:{title:"Concepts",permalink:"/push-website/pr-preview/pr-965/docs/notifications/concepts"}},c={},l=[{value:"Integration process",id:"integration-process",level:2},{value:"Step 1\ufe0f\u20e3 - Implement webhook",id:"step-1\ufe0f\u20e3---implement-webhook",level:3},{value:"Step 2\ufe0f\u20e3 - Test endpoint",id:"step-2\ufe0f\u20e3---test-endpoint",level:3},{value:"Step 3\ufe0f\u20e3 - Get whitelisted",id:"step-3\ufe0f\u20e3---get-whitelisted",level:3},{value:"Push SNS Boilerplate",id:"push-sns-boilerplate",level:2},{value:"SNS Sample Messages",id:"sns-sample-messages",level:2},{value:"Subscription Confirmation",id:"subscription-confirmation",level:3},{value:"Notification",id:"notification",level:3},{value:"Message",id:"message",level:4}];function d(t){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"integrate-notifications-via-aws-sns",children:"Integrate Notifications via AWS SNS"}),"\n",(0,n.jsx)(e.admonition,{type:"caution",children:(0,n.jsxs)(e.p,{children:["Notifications via AWS SNS is more of a Web2.5 approach than Web3. Do check out ",(0,n.jsx)(e.a,{href:"/docs/notifications/build/integrating-notifications",title:"Learn how to integrate notifications from Push protocol to your frontend",children:"integrating notifications section"})," for your frontend to see other recommended ways for integrating notifications on your frontend."]})}),"\n",(0,n.jsx)(e.p,{children:"SNS module for Push delivery node allows any developer to receive notifications, chats, or any other form of web3 communication directly to the platform they are building with the help of webhooks."}),"\n",(0,n.jsx)(e.p,{children:"Hosted SNS Module is a mid-level solution that eliminates all the heavy load of running a node or syncing information and gives you webhooks that you implement to start receiving notifications, chats, or any other web3 communication in your software."}),"\n",(0,n.jsx)(e.h2,{id:"integration-process",children:"Integration process"}),"\n",(0,n.jsx)(e.p,{children:"Integrating the SNS module into your code takes less than 10 mins and contains just 3 steps:"}),"\n",(0,n.jsx)(e.h3,{id:"step-1\ufe0f\u20e3---implement-webhook",children:"Step 1\ufe0f\u20e3 - Implement webhook"}),"\n",(0,n.jsxs)(e.p,{children:["Implement a webhook to listen to ",(0,n.jsx)(e.a,{href:"https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/sns-examples.html",title:"Example of AWS SNS",children:"AWS SNS"}),". Here\u2019s a ",(0,n.jsx)(e.a,{href:"https://github.com/push-protocol/push-sns-boilerplate",title:"Push SNS boilerplate repo",children:"boilerplate"})," along with specs to get you npm installed and running."]}),"\n",(0,n.jsx)(e.h3,{id:"step-2\ufe0f\u20e3---test-endpoint",children:"Step 2\ufe0f\u20e3 - Test endpoint"}),"\n",(0,n.jsx)(e.p,{children:"You will need to open an endpoint either at a dedicated IP that listens to SNS or, if you are testing locally, have to expose the public endpoint for which tons of software is available."}),"\n",(0,n.jsx)(e.admonition,{type:"tip",children:(0,n.jsxs)(e.p,{children:["For testing locally, You can also use ",(0,n.jsx)(e.a,{href:"https://ngrok.com/download",title:"ngrok download link",children:"ngrok"})," to expose the public endpoint. If you use this with the boilerplate, the port needs to be 6000. The ngrok URL is now the SNS endpoint required in step 3."]})}),"\n",(0,n.jsx)(e.h3,{id:"step-3\ufe0f\u20e3---get-whitelisted",children:"Step 3\ufe0f\u20e3 - Get whitelisted"}),"\n",(0,n.jsxs)(e.p,{children:["Once you set up this, you need to contact us by either shouting / tagging us on ",(0,n.jsx)(e.a,{href:"https://discord.com/invite/pushprotocol",title:"Invite link to Push Discord server",children:"Push Discord server"}),". We need this as the SNS module requires whitelisting of your webhook endpoint."]}),"\n",(0,n.jsx)(e.h2,{id:"push-sns-boilerplate",children:"Push SNS Boilerplate"}),"\n",(0,n.jsxs)(e.p,{children:["For your reference, here's ",(0,n.jsx)(e.a,{href:"https://github.com/push-protocol/push-sns-boilerplate",title:"Push AWS SNS boilerplate",children:"Push AWS SNS boilerplate"})," which can be used as a starting point to consume the feeds from the Push SNS Topic."]}),"\n",(0,n.jsx)(e.p,{children:"Here\u2019s a timelapse of how everything works\u2026 see you on the other side \ud83d\ude03"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Timelapse gif of Push AWS SNS boilerplate setup",src:i(321125).A+"",title:"Representation of how to setup Push SNS AWS boilerplate",width:"1556",height:"1192"})}),"\n",(0,n.jsx)(e.h2,{id:"sns-sample-messages",children:"SNS Sample Messages"}),"\n",(0,n.jsx)(e.h3,{id:"subscription-confirmation",children:"Subscription Confirmation"}),"\n",(0,n.jsx)(e.p,{children:"This is a one-time message confirming if the SNS subscription is successful."}),"\n",(0,n.jsx)(e.h3,{id:"notification",children:"Notification"}),"\n",(0,n.jsx)(e.p,{children:"These are the actual notifications which need to be delivered to the end users."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-js",children:'{\n    Type: \'Notification\',\n    MessageId: \'62918f56-9bce-5497-a23e-d422c782a01d\',\n    TopicArn: \'arn:aws:sns:us-east-1:293359341249:dev-epns-notifications\',\n    Message: \'{"sid":121,"users":["0x35B84d6848D16415177c64D64504663b998A6ab4"],"payload":{"apns":{"payload":{"aps":{"category":"withappicon","mutable-content":1,"content-available":1}},"fcm_options":{"image":"https://gateway.ipfs.io/ipfs/QmQM97KUTGTT6nt6Xd7xAJpdGB8adiJ1LVUJoN8RoFUYfx"}},"data":{"app":"Shunya","sid":"121","url":"https://shunya.fi/","acta":"https://shunya.fi","aimg":"https://shunya.fi/_nuxt/img/shunya.cfece51.png","amsg":"Your portfolio is up by 0.08% since yesterday.","asub":"Assets Daily","icon":"https://gateway.ipfs.io/ipfs/QmQM97KUTGTT6nt6Xd7xAJpdGB8adiJ1LVUJoN8RoFUYfx","type":"3","epoch":"1660554419","appbot":"0","hidden":"0","secret":""},"android":{"notification":{"icon":"@drawable/ic_stat_name","color":"#e20880","image":"https://gateway.ipfs.io/ipfs/QmQM97KUTGTT6nt6Xd7xAJpdGB8adiJ1LVUJoN8RoFUYfx","default_vibrate_timings":true}},"notification":{"body":"Your portfolio is up by 0.08% since yesterday.","title":"Shunya - Assets Daily"}},"epoch":"1660554419","topic":"Notification","subtopic":"Channel"}\',\n    Timestamp: \'2022-08-15T14:37:00.408Z\',\n    SignatureVersion: \'1\',\n    Signature: \'iqnfhnF/SsQYaqVrhAjWlCFWYoeMSftRLRrkkxje3CppCNm/CATg13ljIz0tChVa7OJEoaVI/tpUERiuhZ9wxuGmDI6ReaGORam4Yda4CC0HqfitqYG8M0AamScXgiqN9hgcGHbbitYQWWIp2vmFKC+P1j9Hq9Lz19fBlHz1/9hJwHlRfKDADqh1I15wERZZGGUu//Z+S6bnJ9k2JrektKDNRukSihSU1u07563RirE+EJ6TCxQGUY4GzuuwlOu6vj9ESsVE4mBdfxnmNLsZoVBl87KHg7/z9Uh1IJTqkdRyN5+XXg4XDE1puYr9qypfhk8abmZQIrn5obrHDe+ZBQ==\',\n    SigningCertURL: \'https://sns.us-east-1.amazonaws.com/SimpleNotificationService-56e67fcb41f6fec09b0196692625d385.pem\',\n    UnsubscribeURL: \'https://sns.us-east-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-1:293359341249:dev-epns-notifications:cc473de2-b46e-462c-95d4-178580487a26\'\n}\n'})}),"\n",(0,n.jsxs)(e.p,{children:["The ",(0,n.jsx)(e.strong,{children:"Message"})," is the field in the above JSON is the actual notification sent from the Push in JSON stringified format."]}),"\n",(0,n.jsx)(e.h4,{id:"message",children:"Message"}),"\n",(0,n.jsx)(e.p,{children:"When converted to JSON, a sample message looks like the one below."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-js",children:'{\n\t"sid": 121,\n\t"users": ["0x35B84d6848D16415177c64D64504663b998A6ab4"],\n\t"sender": "0x35B84d6848D16415177c64D64504663b998A6ab4",\n\t"payload": {\n\t\t"data": {\n\t\t\t"app": "Shunya",\n\t\t\t"sid": "121",\n\t\t\t"url": "https://shunya.fi/",\n\t\t\t"acta": "https://shunya.fi",\n\t\t\t"aimg": "https://shunya.fi/_nuxt/img/shunya.cfece51.png",\n\t\t\t"amsg": "Your portfolio is up by 0.08% since yesterday.",\n\t\t\t"asub": "Assets Daily",\n\t\t\t"icon": "https://gateway.ipfs.io/ipfs/QmQM97KUTGTT6nt6Xd7xAJpdGB8adiJ1LVUJoN8RoFUYfx",\n\t\t\t"type": "3",\n\t\t\t"epoch": "1660554419",\n\t\t\t"appbot": "0",\n\t\t\t"hidden": "0",\n\t\t\t"secret": ""\n\t\t},\n\t\t"notification": {\n\t\t\t"body": "Your portfolio is up by 0.08% since yesterday.",\n\t\t\t"title": "Shunya - Assets Daily"\n\t\t}\n\t},\n\t"epoch": "1660554419",\n\t"topic": "Notification",\n\t"subtopic": "Channel"\n}\n'})}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"sid"})," - unique id from the push"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"users"})," - list of wallet addresses for which the notification needs to be delivered"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"payload"})," - an actual payload that needs to be delivered to the user's device"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"epoch"})," - timestamp when the payload is generated"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"topic"})," - the type of payload, i.e. Notification, Chat etc"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"subtopic"})," - mode of delivery, i.e. Channel or User level"]}),"\n"]})]})}function h(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(d,{...t})}):d(t)}},321125:(t,e,i)=>{i.d(e,{A:()=>n});const n=i.p+"assets/images/knowYourChannel-17e31e6207fc2bada43d2874e0da6eab.png"},28453:(t,e,i)=>{i.d(e,{R:()=>a,x:()=>r});var n=i(296540);const s={},o=n.createContext(s);function a(t){const e=n.useContext(o);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:a(t.components),n.createElement(o.Provider,{value:e},t.children)}}}]);