"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[63240],{844690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>u});var r=n(474848),a=n(28453),s=n(113490),i=n(411470),o=n(119365);const d={id:"docs-chat-ui-components-integrate-push-chat",title:"Integrate Push Chat",hide_title:!0,slug:"./integrate-push-chat",displayed_sidebar:"pushChatSidebar",sidebar_position:1,image:"/assets/docs/previews/docs_chat_ui_components--integrate_push_chat.png"},l="Integrate Push Chat",c={id:"chat/ui-components/docs-chat-ui-components-integrate-push-chat",title:"Integrate Push Chat",description:"Streamline Chat Integration for Developers: Say goodbye to the hassles of UI design and API calls. With our web components available in the @pushprotocol/uiweb package, you can effortlessly integrate push chat functionality into your dapp using just a few lines of code.",source:"@site/docs/chat/03-ui-components/01-Integrate-Push-Chat.mdx",sourceDirName:"chat/03-ui-components",slug:"/chat/ui-components/integrate-push-chat",permalink:"/push-website/pr-preview/pr-904/docs/chat/ui-components/integrate-push-chat",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/chat/03-ui-components/01-Integrate-Push-Chat.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"docs-chat-ui-components-integrate-push-chat",title:"Integrate Push Chat",hide_title:!0,slug:"./integrate-push-chat",displayed_sidebar:"pushChatSidebar",sidebar_position:1,image:"/assets/docs/previews/docs_chat_ui_components--integrate_push_chat.png"},sidebar:"pushChatSidebar",previous:{title:"UI Components",permalink:"/push-website/pr-preview/pr-904/docs/chat/ui-components"},next:{title:"Integrate Support Bot",permalink:"/push-website/pr-preview/pr-904/docs/chat/ui-components/integrate-support-bot"}},h={},u=[{value:"Usage",id:"usage",level:2},{value:"Customization Parameters",id:"customization-parameters",level:2},{value:"ChatUIProvider",id:"chatuiprovider",level:3},{value:"ChatView",id:"chatview",level:3},{value:"Live playground",id:"live-playground",level:2}];function p(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components},{Head:d}=t;return d||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"integrate-push-chat",children:"Integrate Push Chat"}),"\n",(0,r.jsxs)(t.p,{children:["Streamline Chat Integration for Developers: Say goodbye to the hassles of UI design and API calls. With our web components available in the ",(0,r.jsx)(t.code,{children:"@pushprotocol/uiweb"})," package, you can effortlessly integrate push chat functionality into your dapp using just a few lines of code."]}),"\n",(0,r.jsxs)(t.p,{children:["As an example, take a look at how we seamlessly integrated the Push Chat View component into the ",(0,r.jsx)(t.a,{href:"/brb",title:"Billion Reasons to Build Challengathon by Push",children:(0,r.jsx)(t.code,{children:"push.org/brb"})})," website in the image below."]}),"\n",(0,r.jsx)(s.Bs,{children:(0,r.jsx)("img",{src:n(532547).A})}),"\n",(0,r.jsx)(d,{children:(0,r.jsx)("title",{children:"Integrate Push Chat | UI Components | Push Chat | Push Documentation"})}),"\n","\n","\n","\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.p,{children:"In order to add the above chatview component the developer just need to write few lines of code"}),"\n",(0,r.jsx)(i.A,{className:"codetabs",groupId:"code-examples",children:(0,r.jsx)(o.A,{value:"react",attributes:{className:"codetab react"},default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'import { ChatView, ChatUIProvider, darkChatTheme } from "@pushprotocol/uiweb";\n\nexport function App() {\n  // you can pass your own signer, if you don\'t pass a signer\n  // then it will automatically use the default onboarding kit i.e. blocknative\n  // !pgpPrivatekey && !account && !isConnected => will give the note\n  return (\n    <ChatUIProvider theme={darkChatTheme}>\n      <ChatView\n        chatId="b8e068e02fe12d7136bc2f24408835573f30c6fbf0b65ea26ab4c7055a2c85f1"\n        limit={10}\n        isConnected={true}\n        verificationFailModalPosition={MODAL_POSITION_TYPE.RELATIVE}\n      />\n    </ChatUIProvider>\n  );\n}\n'})})})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["If you're using Next.js to integrate UI Components, we recommend using ",(0,r.jsx)(t.code,{children:"Next.js 13"})," with the latest ",(0,r.jsx)(t.a,{href:"https://nextjs.org/docs/app",children:"App Router"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"customization-parameters",children:"Customization Parameters"}),"\n",(0,r.jsx)(t.h3,{id:"chatuiprovider",children:"ChatUIProvider"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Remarks"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"account"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"Supports wallet address or chain agnostic wallet address format"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"pgpPrivatekey"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"Decrypted pgp private key of the user"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"theme"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"IChatTheme"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"/docs/chat/ui-components/advanced/themization/",children:"Theme object"}),", it can be custom theme object, ",(0,r.jsx)(t.code,{children:"lightChatTheme"})," ",(0,r.jsx)(t.code,{children:"darkChatTheme"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.em,{children:(0,r.jsx)(t.code,{children:"children"})})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"React.ReactNode"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"env"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Env"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"API env - 'prod' or 'staging'"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"signer"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"SignerType"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"Ethers or Viem Signer"})]})]})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Note: Parameters ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,r.jsx)(t.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Providing only signer in ChatUIProvider automatically fetches account and pgpPrivatekey"}),"\n",(0,r.jsx)(t.li,{children:"Providing no signer, automatically uses the default onboarding kit i.e. blocknative"}),"\n",(0,r.jsx)(t.li,{children:"Providing account and pgpPrivateKey works as usual"}),"\n",(0,r.jsx)(t.li,{children:"Providing no account , signer, pgpPrivateKey or isConnected as false, prompts a warning"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"chatview",children:"ChatView"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Remarks"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.em,{children:(0,r.jsx)(t.code,{children:"chatId"})})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"Chat id for a particular chat"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"emoji"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsx)(t.td,{children:"true"}),(0,r.jsx)(t.td,{children:"Default value is true, decides if the input field will have emoji option"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"gif"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsx)(t.td,{children:"true"}),(0,r.jsx)(t.td,{children:"Default value is true,decides if the input field will have gif option"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"file"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsx)(t.td,{children:"true"}),(0,r.jsx)(t.td,{children:"Default value is true,decides if the input field will have file upload option"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"isConnected"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsx)(t.td,{children:"true"}),(0,r.jsx)(t.td,{children:"Default value is true,shows the connect button if signer, account and pgpPrivateKey is not passed"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"autoConnect"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"Default value is false, decrypts pgpPrivateKey after reload if true, or else disconnects the existing wallet connection"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"onVerificationFail"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"function"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"Function to perfom any task on gating access verification fail modal"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"messageInput"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsx)(t.td,{children:"true"}),(0,r.jsx)(t.td,{children:"Default value is true,decides whether to show the message input field"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"chatProfile"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsx)(t.td,{children:"true"}),(0,r.jsx)(t.td,{children:"Default value is true, decides whether to show the chat profile header"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"chatViewList"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsx)(t.td,{children:"true"}),(0,r.jsx)(t.td,{children:"Default value is true,decides whether to show the message list"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"groupInfoModalBackground"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"ModalBackgroundType"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsxs)(t.td,{children:["Default value is ",(0,r.jsx)(t.code,{children:'"OVERLAY"'}),", decides the group info modal background, possible values are ",(0,r.jsx)(t.code,{children:'"OVERLAY"'})," &#124 ",(0,r.jsx)(t.code,{children:'"BLUR"'})," &#124 ",(0,r.jsx)(t.code,{children:'"TRANSPARENT"'})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.em,{children:(0,r.jsx)(t.code,{children:"chatFilterList"})})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Array<string>"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"Array of cid's of messages that needs to be excluded from chatViewList"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"limit"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"number"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"Number of messages fetched in each paginated api call,default value is 10"})]})]})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Note: Parameters ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"live-playground",children:"Live playground"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",metastring:"live",live:!0,children:"customPropMinimized = 'true';\n\n// DO NOT FORGET TO IMPORT LIBRARIES\n// NOT NEEDED HERE SINCE PLAYGROUND IMPORTS INTERNALLY\n// import { ChatUIProvider, ChatView } from @pushprotocol/restapi;\nfunction App(props) {\n  // define custom chat theme for your frontend and pass it in ChatUIProvider\n  const PushChatTheme = {\n    borderRadius: {\n      ChatView: '32px',\n      chatProfile: '29px',\n      messageInput: '29px',\n      searchInput: '99px',\n      modal: '16px',\n      modalInnerComponents: '12px',\n    },\n\n    backgroundColor: {\n      ChatViewBackground: 'rgba(18, 18, 24, 0.65)',\n      chatProfileBackground: '#2A2A39',\n      messageInputBackground: 'transparent',\n      chatSentBubbleBackground: '#AF3FB1',\n      chatReceivedBubbleBackground: '#424258',\n      encryptionMessageBackground: '#2A2A39',\n      buttonBackground: 'rgb(202, 89, 155)',\n      modalBackground: '#2F3137',\n      criteriaLabelBackground: 'rgb(47, 49, 55)',\n      modalInputBackground: 'transparent',\n      modalHoverBackground: 'rgb(64, 70, 80)',\n      buttonDisableBackground: '#787E99',\n      toastSuccessBackground:\n        'linear-gradient(90.15deg, #30CC8B -125.65%, #30CC8B -125.63%, #2F3137 42.81%)',\n      toastErrorBackground:\n        'linear-gradient(89.96deg, #FF2070 -101.85%, #2F3137 51.33%)',\n      toastShadowBackground: '#00000010',\n    },\n\n    fontSize: {\n      chatProfileText: '17px',\n      messageInputText: '16px',\n      chatSentBubbleText: '14px',\n      chatReceivedBubbleText: '14px',\n      timestamp: '15px',\n      // chatBubblesSenderAddressText: '16px',\n      encryptionMessageText: '13px',\n      chatReceivedBubbleAddressText: '12px',\n      chatReceivedBubbleTimestampText: '12px',\n      chatSentBubbleTimestampText: '12px',\n      searchInputText: '16px',\n      searchPlaceholderText: '16px',\n    },\n\n    fontWeight: {\n      chatProfileText: '500',\n      messageInputText: '400',\n      chatSentBubbleText: '400',\n      chatReceivedBubbleText: '400',\n      timestamp: '300',\n      // chatBubblesSenderAddressText: '300',\n      encryptionMessageText: '400',\n      chatReceivedBubbleAddressText: '300',\n      chatReceivedBubbleTimestampText: '400',\n      chatSentBubbleTimestampText: '400',\n      searchInputText: '400',\n      searchPlaceholderText: '400',\n    },\n\n    fontFamily: 'inherit',\n\n    border: {\n      ChatView: '1px solid #3A3A4A',\n      chatProfile: '1px solid #3A3A4A',\n      messageInput: '1px solid #3A3A4A',\n      searchInput: '1px solid transparent',\n      modal: 'none',\n      modalInnerComponents: '1px solid rgb(74, 79, 103)',\n    },\n\n    iconColor: {\n      emoji: 'rgba(120, 126, 153, 1)',\n      attachment: 'rgba(120, 126, 153, 1)',\n      sendButton: 'rgba(120, 126, 153, 1)',\n      groupSettings: 'rgba(120, 126, 153, 1)',\n    },\n    textColor: {\n      chatProfileText: '#fff',\n      messageInputText: 'rgb(182, 188, 214)',\n      chatSentBubbleText: '#fff',\n      chatReceivedBubbleText: '#fff',\n      timestamp: '#87879A',\n      // chatBubblesSenderAddressText: 'rgb(182, 188, 214)',\n      encryptionMessageText: 'rgb(182, 188, 214)',\n      buttonText: '#fff',\n      chatReceivedBubbleAddressText: '#87879A',\n      chatReceivedBubbleTimestampText: 'red',\n      chatSentBubbleTimestampText: 'red',\n      searchInputText: '#fff',\n      searchPlaceholderText: 'rgb(101, 119, 149)',\n      modalHeadingText: '#fff',\n      modalSubHeadingText: 'rgb(182, 188, 214)',\n      buttonDisableText: '#B6BCD6',\n    },\n    backdropFilter: 'blur(6.5px)',\n    spinnerColor: 'rgb(202, 89, 155)',\n    scrollbarColor: 'rgb(202, 89, 155)',\n    // backdropFilter: 'blur(6.5px)',\n    // modalBackgroundColor:'rgba(47, 49, 55, 1)',\n    // spinnerColor:'rgb(202, 89, 155)',\n    // scrollbarColor:'rgb(202, 89, 155)',\n    // //the rest param needs to be included in categories\n    // modalPrimaryTextColor: '#B6BCD6',\n    // modalSearchBarBorderColor: '#4A4F67',\n    // modalSearchBarBackground: '#282A2E',\n    // snapFocusBg: '#404650',\n    // groupButtonBackgroundColor: '#2F3137',\n    // groupButtonTextColor: '#787E99',\n    // modalConfirmButtonBorder: '1px solid #787E99',\n    // groupSearchProfilBackground: '#404650',\n    // modalInputBorderColor: '#4A4F67',\n    // snackbarBorderText: '#B6BCD6',\n    // snackbarBorderIcon:\n    //     'brightness(0) saturate(100%) invert(89%) sepia(8%) saturate(1567%) hue-rotate(191deg) brightness(86%) contrast(93%)',\n    // modalContentBackground: '#2F3137',\n    // modalProfileTextColor: '#B6BCD6',\n    // toastSuccessBackground:\n    //     'linear-gradient(90.15deg, #30CC8B -125.65%, #30CC8B -125.63%, #2F3137 42.81%)',\n    // toastErrorBackground:\n    //     'linear-gradient(89.96deg, #FF2070 -101.85%, #2F3137 51.33%)',\n    // toastShadowColor: '#00000010',\n    // toastBorderColor: '#4A4F67',\n    // mainBg: '#000',\n    // modalBorderColor: '#4A4F67',\n    // modalDescriptionTextColor: '#787E99',\n    // modalIconColor: '#787E99',\n    // pendingCardBackground: 'rgba(173, 176, 190, 0.08)',\n    // modalHeadingColor: '#B6BCD6',\n    // defaultBorder: '#4A4F67',\n  };\n\n  return (\n    <>\n      <h2>Live chat with custom theme and token gated</h2>\n      <div\n        style={{\n          height: '75vh',\n          margin: '20px auto',\n          background: 'black',\n          borderRadius: '40px',\n        }}\n      >\n        <ChatUIProvider theme={PushChatTheme}>\n          <ChatView\n            chatId='4ac5ab85c9c3d57adbdf2dba79357e56b2f9ef0256befe750d9f93af78d2ca68'\n            limit={10}\n            isConnected={true}\n            onVerificationFail={() => setShowFaucet(true)}\n          />\n        </ChatUIProvider>\n      </div>\n    </>\n  );\n}\n"})})]})}function x(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},119365:(e,t,n)=>{n.d(t,{A:()=>i});n(296540);var r=n(618215);const a={tabItem:"tabItem_Ymn6"};var s=n(474848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:n,children:t})}},411470:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(296540),a=n(618215),s=n(823104),i=n(956347),o=n(300205),d=n(757485),l=n(231682),c=n(289466);function h(e){var t,n;return null!==(t=null===(n=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,d.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=u(e),[i,d]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=null!==(t=r.find((e=>e.default)))&&void 0!==t?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[l,h]=x({queryString:n,groupId:a}),[b,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),g=(()=>{const e=null!=l?l:b;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{g&&d(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),m(e)}),[h,m,s]),tabValues:s}}var m=n(992303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(474848);function f(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=d.indexOf(t),a=o[n].value;a!==r&&(l(t),i(a))},h=e=>{var t;let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{var r;const t=d.indexOf(e.currentTarget)+1;n=null!==(r=d[t])&&void 0!==r?r:d[0];break}case"ArrowLeft":{var a;const t=d.indexOf(e.currentTarget)-1;n=null!==(a=d[t])&&void 0!==a?a:d[d.length-1];break}}null===(t=n)||void 0===t||t.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>d.push(e),onKeyDown:h,onClick:c,...s,className:(0,a.A)("tabs__item",g.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===t}),children:null!=n?n:t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function C(e){const t=b(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,j.jsx)(f,{...e,...t}),(0,j.jsx)(v,{...e,...t})]})}function y(e){const t=(0,m.A)();return(0,j.jsx)(C,{...e,children:h(e.children)},String(t))}},532547:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/chat-view-6ad966dbd2d5595085496e8a5fc555dd.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(296540);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);