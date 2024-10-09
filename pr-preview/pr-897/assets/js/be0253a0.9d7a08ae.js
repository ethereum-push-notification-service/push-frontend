"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[57925],{393209:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var a=t(474848),s=t(28453),r=t(411470),o=t(119365),i=t(113490);const l={id:"docs-chat-ui-components-advanced-chatviewbubble-component",title:"ChatViewBubble Component",hide_title:!0,slug:"./chatviewbubble-component",displayed_sidebar:"pushChatSidebar",sidebar_position:6,image:"/assets/docs/previews/docs_chat_ui_components_advanced--chatviewbubble_component.png"},c="ChatViewBubble",u={id:"chat/ui-components/Advanced/docs-chat-ui-components-advanced-chatviewbubble-component",title:"ChatViewBubble Component",description:"Simplify Development: Instantly Integrate Pre-built Chat Bubble UI for Your Dapp",source:"@site/docs/chat/03-ui-components/Advanced/06-Integrate-Advanced-ChatViewBubble-Component.mdx",sourceDirName:"chat/03-ui-components/Advanced",slug:"/chat/ui-components/Advanced/chatviewbubble-component",permalink:"/push-website/pr-preview/pr-897/docs/chat/ui-components/Advanced/chatviewbubble-component",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/chat/03-ui-components/Advanced/06-Integrate-Advanced-ChatViewBubble-Component.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"docs-chat-ui-components-advanced-chatviewbubble-component",title:"ChatViewBubble Component",hide_title:!0,slug:"./chatviewbubble-component",displayed_sidebar:"pushChatSidebar",sidebar_position:6,image:"/assets/docs/previews/docs_chat_ui_components_advanced--chatviewbubble_component.png"},sidebar:"pushChatSidebar",previous:{title:"MessageInput Component",permalink:"/push-website/pr-preview/pr-897/docs/chat/ui-components/Advanced/messageinput-component"},next:{title:"CreateGroupModal Component",permalink:"/push-website/pr-preview/pr-897/docs/chat/ui-components/Advanced/creategroupmodal-component"}},d={},h=[{value:"Usage",id:"usage",level:2},{value:"Customization Parameters",id:"customization-parameters",level:3},{value:"Live playground",id:"live-playground",level:3}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{Head:l}=n;return l||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"chatviewbubble",children:"ChatViewBubble"}),"\n",(0,a.jsx)(n.p,{children:"Simplify Development: Instantly Integrate Pre-built Chat Bubble UI for Your Dapp"}),"\n",(0,a.jsx)(n.p,{children:"ChatViewBubble serves as the fundamental building block for a chat view, allowing users to showcase individual chat messages while formatting them based on the provided payload. This essential component facilitates the presentation and customization of single chat messages with ease."}),"\n",(0,a.jsx)(l,{children:(0,a.jsx)("title",{children:"ChatViewBubble | UI Components (@pushprotocol/uiweb) | Push Chat | Push\n  Documentation"})}),"\n","\n","\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(r.A,{className:"codetabs",groupId:"code-examples",children:(0,a.jsxs)(o.A,{value:"react",attributes:{className:"codetab react"},default:!0,children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'import { ChatViewBubble } from "@pushprotocol/uiweb";\n\nconst ChatViewBubbleTest = () => {\n  const msg = {\n    fromCAIP10: "eip155:0xAC5d2aE3b4307D8F4304C0292D11de8968eB9DFd",\n    toCAIP10:\n      "b8e068e02fe12d7136bc2f24408835573f30c6fbf0b65ea26ab4c7055a2c85f1",\n    fromDID: "eip155:0xAC5d2aE3b4307D8F4304C0292D11de8968eB9DFd",\n    toDID: "b8e068e02fe12d7136bc2f24408835573f30c6fbf0b65ea26ab4c7055a2c85f1",\n    messageObj: {\n      content: "heyyy",\n    },\n    messageContent: "heyyy",\n    messageType: "Text",\n    timestamp: 1695170770877,\n    encType: "PlainText",\n    encryptedSecret: "",\n    signature:\n      "-----BEGIN PGP SIGNATURE-----\\n\\nwsBzBAEBCAAnBQJlCkDSCRB79EVvuUuFJxYhBKgXzyQx/165mhxKK3v0RW+5\\nS4UnAAD+pgf+PFVDOzs8dP5wrzVQZdNf8t/jXEMqqYF00VFzVwsirVJY8YEm\\nN0eXNB5Ndk99g4+k1aPxR1ToKk67nJxnUvZi6lqFFcqaOfsIzgxPNO0dtkw/\\nvDNaVJIAE2B6YqdLQmv7kjbPUXZD1vQjzxR/8qusQWqt0IeO8c2SXTciT6uI\\ndsjiJgZctH6VINz8I6H9gf35aPrDf3f4VqhgHDgwhtjyfQXLBMPh1vZ78sAB\\noOKVNQN464llAsCjK7Q8zTANgAwT/G14V7IiHdDX0ZRRqH38AKRstX1y44l8\\nQYQRlQXqGGwz3n3upnT5ZXpPNkdO/btuoNj8W8npic8CIc9rBRoTXg==\\n=Xmu2\\n-----END PGP SIGNATURE-----\\n",\n    sigType: "pgpv2",\n    verificationProof:\n      "pgpv2:-----BEGIN PGP SIGNATURE-----\\n\\nwsBzBAEBCAAnBQJlCkDSCRB79EVvuUuFJxYhBKgXzyQx/165mhxKK3v0RW+5\\nS4UnAAC1mwf/Ydi97nNrk7y58tO8Pmw6i7bGHbie7KNEEvH5aL3sMgzeOWTX\\nAozDvWXuQI0/InVhqAe8l7VR6/mXEaWsewn1S/gcPkIxHSTaD0UIVbXHcoq3\\nNcuCzZaXL6n1mhx+wJSKCsAaa7Z/L7+4Ru6yj9LGEAzRpDQrY7RfgQP6ezSz\\nxNLz2XavBMmIEwMS/wuC5nvT4Xl8amQlmPkFxZK6+2sfDxxzKMPVVewlFIwh\\n4yHd2EYpIlVfuhQh/2KidLg9LAlqHUUgmrE0GU1aCV8bwKl/4hyjzREPahGc\\nJ0wB1059rCMaJBXI+YbE0Z1bhX/G+4nM095QBsWDajAWmwnDUQYmFA==\\n=BiZz\\n-----END PGP SIGNATURE-----\\n",\n    link: "bafyreianm5wnvhdhm2dymbykleoi4w54z2et7q4gbkxogaax5life7btqi",\n    cid: "bafyreihzt35ubpsq2vsi4swfnuq4mjaiufpnwt6nx2ngthtu5wk5h2z6ca",\n  };\n\n  return (\n    <div>\n      <ChatViewBubble decryptedMessagePayload={msg} />\n    </div>\n  );\n};\n\nexport default ChatViewBubbleTest;\n'})})," ",(0,a.jsx)(i.Bs,{children:(0,a.jsx)("img",{src:t(86538).A})})]})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"customization-parameters",children:"Customization Parameters"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Param"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Default"}),(0,a.jsx)(n.th,{children:"Remarks"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.code,{children:"decryptedMessagePayload"})})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"IMessagePayload"})}),(0,a.jsx)(n.td,{children:"-"}),(0,a.jsx)(n.td,{children:"It is a decrypted message payload object"})]})})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Note: Parameters ",(0,a.jsx)(n.em,{children:(0,a.jsx)(n.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Note: Refer ",(0,a.jsx)(n.a,{href:"/docs/chat/ui-components/Advanced/ChatUIProvider/",children:"ChatUIProvider"})," for details on its paramters."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"live-playground",children:"Live playground"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:"customPropMinimized = 'true';\n\n// DO NOT FORGET TO IMPORT LIBRARIES\n// NOT NEEDED HERE SINCE PLAYGROUND IMPORTS INTERNALLY\n// import { ChatUIProvider, ChatViewBubble } from @pushprotocol/uiweb;\nfunction App(props) {\n  const msg = {\n    fromCAIP10: 'eip155:0xAC5d2aE3b4307D8F4304C0292D11de8968eB9DFd',\n    toCAIP10:\n      'b8e068e02fe12d7136bc2f24408835573f30c6fbf0b65ea26ab4c7055a2c85f1',\n    fromDID: 'eip155:0xAC5d2aE3b4307D8F4304C0292D11de8968eB9DFd',\n    toDID: 'b8e068e02fe12d7136bc2f24408835573f30c6fbf0b65ea26ab4c7055a2c85f1',\n    messageObj: {\n      content: 'heyyy',\n    },\n    messageContent: 'heyyy',\n    messageType: 'Text',\n    timestamp: 1695170770877,\n    encType: 'PlainText',\n    encryptedSecret: '',\n    signature:\n      '-----BEGIN PGP SIGNATURE-----\\n\\nwsBzBAEBCAAnBQJlCkDSCRB79EVvuUuFJxYhBKgXzyQx/165mhxKK3v0RW+5\\nS4UnAAD+pgf+PFVDOzs8dP5wrzVQZdNf8t/jXEMqqYF00VFzVwsirVJY8YEm\\nN0eXNB5Ndk99g4+k1aPxR1ToKk67nJxnUvZi6lqFFcqaOfsIzgxPNO0dtkw/\\nvDNaVJIAE2B6YqdLQmv7kjbPUXZD1vQjzxR/8qusQWqt0IeO8c2SXTciT6uI\\ndsjiJgZctH6VINz8I6H9gf35aPrDf3f4VqhgHDgwhtjyfQXLBMPh1vZ78sAB\\noOKVNQN464llAsCjK7Q8zTANgAwT/G14V7IiHdDX0ZRRqH38AKRstX1y44l8\\nQYQRlQXqGGwz3n3upnT5ZXpPNkdO/btuoNj8W8npic8CIc9rBRoTXg==\\n=Xmu2\\n-----END PGP SIGNATURE-----\\n',\n    sigType: 'pgpv2',\n    verificationProof:\n      'pgpv2:-----BEGIN PGP SIGNATURE-----\\n\\nwsBzBAEBCAAnBQJlCkDSCRB79EVvuUuFJxYhBKgXzyQx/165mhxKK3v0RW+5\\nS4UnAAC1mwf/Ydi97nNrk7y58tO8Pmw6i7bGHbie7KNEEvH5aL3sMgzeOWTX\\nAozDvWXuQI0/InVhqAe8l7VR6/mXEaWsewn1S/gcPkIxHSTaD0UIVbXHcoq3\\nNcuCzZaXL6n1mhx+wJSKCsAaa7Z/L7+4Ru6yj9LGEAzRpDQrY7RfgQP6ezSz\\nxNLz2XavBMmIEwMS/wuC5nvT4Xl8amQlmPkFxZK6+2sfDxxzKMPVVewlFIwh\\n4yHd2EYpIlVfuhQh/2KidLg9LAlqHUUgmrE0GU1aCV8bwKl/4hyjzREPahGc\\nJ0wB1059rCMaJBXI+YbE0Z1bhX/G+4nM095QBsWDajAWmwnDUQYmFA==\\n=BiZz\\n-----END PGP SIGNATURE-----\\n',\n    link: 'bafyreianm5wnvhdhm2dymbykleoi4w54z2et7q4gbkxogaax5life7btqi',\n    cid: 'bafyreihzt35ubpsq2vsi4swfnuq4mjaiufpnwt6nx2ngthtu5wk5h2z6ca',\n  };\n  return (\n    <>\n      <h2>\n        Change the msg object in the Live editor to test different types of\n        messages\n      </h2>\n      <ChatUIProvider>\n        <ChatViewBubble decryptedMessagePayload={msg} />\n      </ChatUIProvider>\n    </>\n  );\n}\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},119365:(e,n,t)=>{t.d(n,{A:()=>o});t(296540);var a=t(618215);const s={tabItem:"tabItem_Ymn6"};var r=t(474848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,o),hidden:t,children:n})}},411470:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(296540),s=t(618215),r=t(823104),o=t(956347),i=t(300205),l=t(757485),c=t(231682),u=t(289466);function d(e){var n,t;return null!==(n=null===(t=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=h(e),[o,l]=(0,a.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=null!==(n=a.find((e=>e.default)))&&void 0!==n?n:a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[c,d]=m({queryString:t,groupId:s}),[b,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,u.Dv)(t);return[s,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),x=(()=>{const e=null!=c?c:b;return p({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),v(e)}),[d,v,r]),tabValues:r}}var v=t(992303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=t(474848);function f(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),s=i[t].value;s!==a&&(c(n),o(s))},d=e=>{var n;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var a;const n=l.indexOf(e.currentTarget)+1;t=null!==(a=l[n])&&void 0!==a?a:l[0];break}case"ArrowLeft":{var s;const n=l.indexOf(e.currentTarget)-1;t=null!==(s=l[n])&&void 0!==s?s:l[l.length-1];break}}null===(n=t)||void 0===n||n.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...r,className:(0,s.A)("tabs__item",x.tabItem,null==r?void 0:r.className,{"tabs__item--active":a===n}),children:null!=t?t:n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function C(e){const n=b(e);return(0,w.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,w.jsx)(f,{...e,...n}),(0,w.jsx)(g,{...e,...n})]})}function y(e){const n=(0,v.A)();return(0,w.jsx)(C,{...e,children:d(e.children)},String(n))}},86538:(e,n,t)=>{t.d(n,{A:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATMAAACgCAYAAABg3YsHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAACV2SURBVHhe7d0LXBTl/j/wT7rugsv9LpdVQUHQBFS8a2qiZdrfo2VlplKe9Jw0u2m/NP+/c46Wv9Q6mXbSMsmOmvlL86h5w9K8o6Z4RUxIucUdERAW0X7PMzMLu7Dowl6A4ft+vZadGXZ3ZtjhM8/zzDMzDwH4gz0IIaRZayU9E0JIs0ZhRgiRBQozQogsUJgRQmSBwowQIgsUZoQQWaAwI4TIAoUZIUQWKMwIIbJAYUYIkQUKM0KILFCYEUJkgcKMECILFGaEEFmgMCOEyAKFGSFEFijMCCGyQGFGCJEFCjNCiCxQmBFCZIHCjBAiCxRmhBBZaPRbzdnZOcCtS3e4dewCZ/+OcPDyg72rB5RqR7RuoxJec/eOFhWlxSgrzENJTgaK0n9DwW9XUHDlPMrLS4TXEEJatkYJM0+1L6IChiPSbzBaDeiOayF3pd/UT6ek1rh39DzOZhzCqbT9yC3NlH5DCGlpbBpm4b4DMTRoHHr4PSJNAX4NvmtWmHW+2loaA85k/IwDyVtxLvOINIUQ0lLYJMx6du6HxzQvIcQzUppSzZJhppOUexZ7Ur/EL78el6YQQuTOqmHm38ETr8ycgi63xqL4qr001ZA1woxzDC7DFadt+HTlOqRfz5WmEkLkymphNuHFoVjwz6m4k+6MG996NEqYtX8mD238i7Dw9a+wee0B6TfW4IHwqZ/gr6NCEeAmHrSoKMtD8oEN+HjlaqRVCJMa7rkt2PVSqDRiimIcfLsPlvwijZrw/oqCdCT+EodNny7FuTqOqTy74jImm7oYBYfwzoQZOCeNYlgs/ndeH6ilUWMSvwzDm99II5bWcxU2fDAYrkjE18PHY5M0+f7m4MP9MQit+fe0JmUfjJy5AM8MDYSP9C9TUZSOc/u/wmefbUSWOKlK+NvxWBztKI09SO11V3aYiMkvT8XQh/3hqvsXLStG2oUd+Nf7i+rcFpoiq3TN+MenL+G91S/Drq1SmtJ4+DLwZeHLZB2BGLJgKxZPihCDrEyL0jK2kdh7IHTUbKxYvQRRjf9neCClmz/Co2OweMshzH8sQppqOUFhfvcNMsIox2PuuljMHiUGWYVuW3L2R9T4d7Eq1rLbkrLfcqxa/S7G9RaDrKKEzY89YO+IgN4TsfibffhrP1ODsvFZtGRm76jG9CXzENavhzQF0OYrUHRJDW2eQppiGyqPSjh3LYXKvVKaAlw+fgar577Pdjyl0hTzuY7fgti/hEKJPBxd9ire25MgTFdHLMT/LByPILaRFO6Zi+eX7RSmN0hVyao+pQo9D3i/0i0CUcNnY/LEPghw4FPycHDBE1hyvFj4vU5VySwxFqNmLRUnmmj0B2fx154qZG2LwYsr46WpNtQMSmYDFsRj/iMsPMpSsHXBVKxJyBOmqwcux0dvRyOAbUtZ22awv98hYTpXVTKrWRJ+EGUM5n8zBwOcWYglb8F/v7mgqhSm7DAdcxbPxgBPNlLfz21EFiuZ2bm4Y/DcFch2GoYDl1yqHseyHHDJ/SGhKmnswfGqYkMenLHP5A8+Tz5v/WXhy8aXkS+rZQzG5D/xIGMb2a53q4KMK01YgDf/GQ8em67DJmJ0Ey6dVRQk4OjmGEyftAgHheZFDwx5fSnChd9aQjSCNLz6rUXy5UYIsmYhBkN68lKQFue+fK4qyLjSI7Px37vShWGfAeMt872MjEYUCzJUJGDNrOog4yqur8Z7b21BGh9x64PRw4TJTZ5FwoyXyB55cyncAk1tUGk8fBn5svJlNlvQaIT78IF0HPt39d5Sp+KnnThVwAaUoRgwUpzmw0pJ2/Zfxq79Z/Hh+EBxYhVHRM2LZ79jv9+xBc/6SZNtpWQjPv5CDGC+ET87RphqARHQ8L08cpF9QZjQuJR9MG7BPvzvLv49sMeueKx+/12EC6XSunhgwF92Yu0O6T17z2LtiuUY2aGuapgHwieswuLYeGzbK71H+F75vBZiQK33ecBNmH8FCtMMS8Rc1m8Z7DeMmz8ChCnmCQ/0wB1WhUXyWew01qabEY9kvu1CBTdvYUqTZ5Ew41XL5hBkOnxZ+TKbLSIIQpYVpOCc0QOmW5CazZ9V0ISNFqZksaL91xe1wrTQqYsMSmzKfkvx2jBx75z41RxsyhCn21LFT7E4IrQyq9CpZ4wwzWz9qv9O1/zexeL1Z6v+ubet34nZo/oIpVvb8MeItbGY9og/1OzvLLQRKXVtRHXtQJQIfz0O89nOx0cpvqeitQo+odGYveYHzK3VrhTBquRxWPzyYIQHOEJZIb6Ht3+J7VHjMX/FVzXmlYhsITwcEdS7dptlUFiQ+DfKSmavNN+55SPw9Jiw+zQXeKJNE65NGGN2mPGGdf02suaCL7O5BwWC2kkbcdktCNuhEYnp4l7W1V8X9inY+t5GJAobdgSmzIsRN1JlDOa8xdt0eLXiE7yzJYVPbQSHcO4aD1tA3TEUQcKQeZRB/sJ6wb4PXlk2EeFubB15INxlv/MJxMg3YhH7txgx8KzOET4+rLq7ZS6eHhWJp8dGYuy05TjKd0b2oZj8/hIj66yCq48KWT8vx/Qx0nvGzsXWZP53YlXyeasNdkquLy3C5FBWra5Ix072nY6S3sPD4+m/xSGLl4TYvMY8Fy2+QbATX3+fKJS+AsZ/gvljouHKP1MZiKipW/A/ozzYCNvJbV+FZP5yK1OOZdVQoaTIdtT7hUlNnllhxrtfPPfycGms+eHLztehoRzUvNGBuZVbvw0sdykWfSVuuOqBM/BaPw+MXviq0BjLG1yXvB8rVilqYf9suurKfR4b3hZLgQ1VWCbN3d4JRmteoTFG51v1WDFHeqGofyepCMIbsPVDZMxoLNmVLqyr68BXMX+S5Y+iGlMYtwCzPtspVqcZgzYiv0fwbPUJKlUqEmPx5kK9bjYlO7Fm1ic4WsSG2U5p5Au6JgN/jAz1QwV7Xdb+RfiXXtsXx9u/vj4p7ixc2xuub9Y3UzHro0NIK2NV2tnLsYFXg3ftxN8nhUJdko6Dy2LwZl07ObfBWGzsu9A9Nq8yva3Nbw4WvxQh7GRLj2zBpmbSTbPBYcY7xPJ+ZM0dXwe+LrZWuEVX3XTEkLfjMK0nbyDPw8F/zsEp40nWTPnDhyUi/+cujFuEN/VCBBUpOPjReHx8hJdeVQj602wMEH9jRek4sNbIkeWMJThwlQ84IixKv8TEaXHq+6UolMaqVMRi3y9iyTvo4fHCM//8TW+xoB4VhhdZMBlTtbOoQdnhRUx7YbBw1JITukrwEjzn4I+op2ZgpLXbUf1mY/EnMQjly5B7vx1r09PgMJv6X5ORc9sRqXliJ1GNR7nRh7dzBVRt7gmvsSU+Tz5vY8vEHxxfdr4OfF1sT6+66aAS9oKFccvxcY3uEIZ4t4IwjHrA4/kPzOgGYgreNcPIfKseBu0w1f/cz3+wxcg/RjEO7jgrBoVzEHpZu3BWZ/tmMRJvSE0CNUpMLOmQXMfpvqd+E48ywjeojpKPB3yC+iA8eg4mz47Fith4/F1oF63Bk5WGVkxHFNuv8q4S74wNY1VZsWrKq8EH07RQdxiM2ctWGe9rxrtQGPsudA8TulcoQxdixafTEc5rCLnxWP7WjGa1Y21QmAX17os7HUdj33lX4cGN6F5o9BEVVAyXttV9vWyFz5PP29gy8QenW36+Lnyd6iu1kNcxGFYdE/8K92HsJIfcLTh1Xaxy8L1/1rWzTWIvGOAm/bew6nOqOGRdvyRLPdtVUBk/ocOi6v83Zt9Rvd7kiIBRy/GhcKDjENaujsXit2Pw7Jg+COIHBKRX6Qt6YYxYGmKh9J6RrhJLpktVWs/BmFxVpbUcn8diserj8Qji7QpZbBn+HIO9jXAAyhwNCrOOI6ewUo1d1YPTeGiNPnxcGq9kxudtbJn4g9NfB75O9VWYL5WinDzRSRyqJdRf3AsX/l77GJTr+KV4ljcUC/jRzaUYZ/sabw0TEd5JXKbCX+NrV60ahJdOQus+A0Aplkxt5YHzqrXjYX+PB73prm6nxLvffIUVb0Qj1EclntaWkICDWzZizQezMX1CH7zzU+3Sd1RH3sDP/uYJccZLQ6xKe/SCOI+A4JrVYHM4ImrmPqx6qw982I6k9OJGTH9xBo42o9OYdOodZr4R/eHZxTYNtbbE14mvW70kSCUKt0CEGw2hGLYn5s9apF6uUfVj1Yp3p0odbrctxU6+F+RH0+bPeXApz4qUw6IRIRzXKMblExaorgYtwVqhdPIVXuknTatpoNR1g1VJU63dD83NH0FGgykQUZ2lHU96dednkSc0PaXBGoaESKWk7HSpGjcds18Qv1d+oGHCmMGY9dZELPlsEbbGxSGtoBhKM0ufSpWTNGQuDwyY9wP+PtafLa8WabsWYepri8w/l7iR1DvMOg0bKw3JT73XLXknzglp5o/+LwwWJulTDhuMCF5sr0jE0b3iNFEgxs2fKDWyxmH5ylj865M4oRSk7DYR79bqTGsjDhMxZ4Z0MnjGz9j0szDVPMkJSBZq46wEMFLqhmIgAs8+FSHOM/ks9lr9HykQQ6ca2RkHz0D/DnygGOcOxAmTqtWx7MrpGCkcuAES41cJz+gZCY3wQvY5+420ESpjMELo6W/oVJLY9ubaczSGGAtb9r4BD4vzyrpm/MBC/bB1ensr5g+Tunx8NQOzPtpYfXCmGapXmKk928Gv5yBpTH74uvF1NN2hqr5BPqMWYb5e509+buaHr4vBUPjzRoNe1rx6Obkb3zDzsHfZbHGP/su7+Fiofti+uqn26YMBE2Kxev27GODGp7Dl+mSuhfozbcSXe8V/VPXAV/HhX0ZXVzd5T/wPVmNysPS3+HyRhaq19xcw4ROD70rZYTYWLx4tlA4rLn6HL4ycg1lr2Vnwz149A+HSDunrb6Sq4wVd+58jwsca9p1TB0/H3NVSF5wakr+NEw8GOffBaysWIsqtOvCUbuMxbYX0vrIEbP3cAqeE9VyE16KlIPsyBm+uj28S7bXmqNeJ5qGjn0fEczOlsWpDu94UHsbwI4a8kV3XtlbT/S7j8yD3u3wQP2LJG/p17WM16c7XrCnhm5VI3LlBGjNFBEazf8i/6va2/EoHLJDUusPraTvx3vS51e0gfnPw4Srx0HfhTwsQ877e3lv/5N/EWMyYtVT8x6g6Udx0hXFzq49q1uf9d/NwcOE4LDli2D+Ka/iJ5jX+RrxHPFvpNtJRXKEUs3I63tlmWL2r+yRq3QngbFFqXjaoal1rnFCuO9G8IAWJdwMRyncW/Ltim4+aLYcglzd867cX6eaTjsRET4QKHWFrLHsZm8+sqdh0XdcOxks8rOomBAVzV+pe0Vq3TWiRfDEXAd1Y1Y6F4DvPSTszRriKxd+ihbYrjnfNuMOeq5aPfTd7//YElusd8W7YieaO7LuMF79LE1j10kwWVK+SmV/kQGlIvuq/jgnY+fYTeGd9AtIKWHDaixstb/hN3LUcs/SDjFep/kuqXhbF44tlNaohFbFY+ql4bqQylFX5nrNR2yT/h8tKwdEtSzFr/GCjQWYe/jcajukfsdJHlhYVSvY34mHAgiErkVWzpw2vFWTWk46v/zwXmxLyqpYD0nc1fUpdDd/FOPXmDCyPSxF3VMKyFyPt5EYWRiwwq4KMY6/9YJy4PfDqNQ8x9no1m552cgvemzYYs96Lh3CWm2ckhgTzAVHF8dmYMX0Rtp5MRyELQCV/H3tU8OuL8Xmx70Y/yBpuIsItcWpHE2NyyYyfmL388HfSmKEOnuXo6CX23aqpqZbMfsuxw/Vc48s0e9BTFr1MECHE+kwOsyGPR+KL7XOlMdM11TC7nz8/uQQHd5+VxgghzYHJ1cxuPTpKQ/LXktaVELkwOcw6hflLQ/LXktaVELkwOcw0gV7SkPy1pHUlRC5MDjOvdo3ZL922WtK6EiIXJoeZs6vRK1vJUktaV0LkwuQwU9m3kYbkryWtKyFyYXKYEUJIU2ZymGnL+IkVLUNLWldC5MLkMCsqbIYXOGqglrSuhMiFyWGW87strmfQNLSkdSVELkwOs9SUHGlI/lrSuhIiFyaH2bXL0o0bWoCWtK6EyAWdaG6EqSeaDxkh36vuktr++OMPVGjLoWWP26XFKCkuQvGtmygqzJdeQRqTyWHm0FaN7bHfS2OGnENvwylUd4M/Q0W3FUjOthOejXHLfwhueSYXEA0UeNxDgbvxxXduW4kg73Lh2ZhbifYoSmwrjRl6MuZPKLn94EsAUZgRHnCF+TnIy8lCbnYG7twxuEIdsaF6XWl2/qNrEOIZKY1V8/9TPgLGNa+9U9pWd6R/7y6NVUvKPYv3fpwmjd0fhRnRV1iQi+zMNGRl2uQGfaSGehWJzmZY4kYKTVtLWEdiHa5ungjpGonOXbrDvi2dEmdr9QqzU2n7pSH5agnrSKznoYcegp8mEEHBXeHkItwdhthIvcIstzQTZzIscf+xpomvG19HQszl4dUOHTuFUqDZUL1b3g8kb5WG5EfO60Zsj1c7NR06U5XTRuodZucyjwiN5HLD14mvGyGWxEto/qzaSayPd/D6mzhoutuKXEQPGQqVe6XwcA4rg7q98f5cd8taoTxLifJsJSry29R6cIq294Tn+tLmK1CWrjL6uXdvt0Yr5R9o1cb4wVptrhKVJa2r1mHt0Q/we0H9Ost2COoiDRFSN0cnF2jLy4R+acR66tU1Q9/iZW9h5OPiPSaV7neEQDDmdpoK2T86o5Q9G+P1yC14DW7Yl5xzyBk5PztJY4bUAVp4P1qEtuzZGB6EPPS4vbuP4J23lgnD9UFdM4ipeLeNy+dOUT80K6p3NVPn05Xr0Ma/CI7BZXUGGcdLZjzIiq/aG31o84x3pjUFf6+xz+QPPk8+77rwZebLzteBrwsh1sTbzzy9/aQxYg0NDrP067lY+PpX0ljzxdeBrwsh1ubh5SMNEWtocJhxm9cewDefN99+WXzZ+ToQYguu7l5wdq191gmxDLPCjPv/r3yJI3HnpbHmgy8zX3ZCbIV3qOUHA4h1mB1m3KvPLceF08nSWNPHl5UvMyG25uDoLA0RS7NImBUX3cb0Py1rFoHGl5EvK19mQmytrdpRGiKW1qB+ZsbcLinH9s3xuOfeDaWqjrieayc8slLtcedXOzx0y/g1y/ilg5zruHzQg9xKbItbV4xfxqfcHshgJfrftMqqZdm1/TLmTV6MooJi6VXmoX5mpCHSbzSfWkxzYrEw4yor7uDEDz8hq8IPtxwihQC5+bsKDr8rYF/Gu7TVZq0wu6lohYsKBRJLxCDbv2k3ti5aKCyjpVCYkfpq3VqBGylJ0hixJItUM2s6tXYJTq5ZjLsV5dKUxsOXgS8LXyZCGhs/CECswyphxiUf2I4f5k7EtTON13WDz5svA18WQoi8WS3MuNLc37Ev9l2s/uE1m56czufF58nnzZeBECJ/Vg0zncs3jgiXov7w0GyrXg+NfzafB58XnychpOVo8Inm5vBU+yIqYDgi/Qbj0Zc1Db5/AL+O/4+fpwqXuuZXiLX1hRXpRHPSEAf3bZOGiCU1Spjp43d96vVIMLr16IhOYf7QBHrBq50rnF0doLIXr2qhLbuDosIS4U7j/Aa9/L6WF8/8htM/XzXpLkrWQmFGGoLCzDoaPcyaM4uEmc8EvDw5Avwkl8rMw1i7fjduir+pgyeiJs7CUH8FUJGJw+tW4nih9CvSLFCYWYdN2szIfWRtxn/OFAiDCt9+eKKXpzBcF3WvZzCIBxkqkXHkWwoyQiQUZk1A9v4dOCuEkgJ+A8cjsq5LvCmGYMxAX/YqFmXpx7HtNF26iBAdCrMmIQlxOxLE6qVSg6HjhgiBZcgOkeOGQaNkgxWpOLB5NxqvtZCQpofazMxg6QMA3sPfwpQe/NZk5bi6cwm2Xa4+g0IRMQOvjtCwkKv9O9hFIOrRoYjs7AkXHnZMZUUJsq8cw579B5Fv9ELAdnDvMgpDB3aDxsUOCr5bu1eJ0puZOL9vPQ6nlogvq0GleRwjBkeis5cDFFLiVhbl4vLx/2D/+RRW+SUPQm1m1mHRczNbGkufm1machuO3bvCW6WAu38ACs6cQR6/14tiEJ4c1wuebQDt1ThsOJwC3S1gFJ0mIGbiowhrp4Yd+zYryytx514rKJVKOHkHoUdkKO5dPYl0gzPLNIic8Aqe6qOBq70Cre5WQlvBPrG1AnZtnRHQbRC6OhXh3LXMqvnw8Asc/homR3eBt6OSFenZe7T8t62gaKuGd6ce6NFeiaQL11jckvu5nnxFGiKWRGFmBsufaJ6Fa3k+iOjqBWUbV/g75OPUtZsIHDUJg3xZMag0Cdu+2Y78qiRjIffsIATYseGiFOzZuALbDsQh/sSPiE9qDb+QDnC2d0T7YB+knb4A3W1jXIb8GRO68kvRVCL79Hf4cuM3OBp/AMePxSPXsSs6edujrXdnaLQXcSFTvFSSImwqJj3iC17wu3llHzb8OxYHjrP3HD+KK9qO6NrRGSqn9ujixJc5S3gPMY7CzDqozaypub4BOy6IVTz1w8MxNPhJDA/jaVWCxL3fIkWvHqfu3wvB/KIhlZk4vHENzudVl4kq8/Zh04bTELojO4agfw/+GVxfDOkm3mW79NJWrPspAdX3ryrB1T0rsfsq/xwF/HqOgLcw3RP9egeC31+Ldx/ZsF2/6lqO/NOrsO6keERWHdq37gMYhFgRhVkTlLp7F84Ll1xzQ9RYsQ9a6aV92H1NvwJnh+4dxG4c2pRzOG7sEm2FW3HmOk8dBXw79RWndQqBn3DVpAJcPpQgTDJUjsRjV8SDEc7t0N2LPSv6IZA/s5JcyhnjBx5uHjyNVGFWvgjpJk4jxJYozJqkBOzZfak6NIqTsHvv6RqN613gIV20NC/rsDhgRGbBLeFZ4ewllrLYm9T8uTQXyXVdozInB7eEmTnB3Zc9+bvCgY8iB9mXhQEjUpEvfJ4CTh50B29iexRmTdX1S0iV0qw09ZxB9bI+skuk0pzSXqgmmuYmSoW6pwKtdbXTB0pBiXSNzTYq4zdmJsSaKMxkzttBSqOyYrH9zCQuUAvJV4lSsWBngkA42ItD5aUZ4gAhNkRh1mxdQZ50eNLDZ5A4UIsdfD3EUlJlSYFYbc0qFp/Vngiq694aPn5wEhrxb6E0jz2l50jni7KqapgwUJuiE9yFz+N91ejMBGJ7FGbNVjnOp4qhoQoMRz9jweQ6Cj004qHF7NQTwjOuJyFD6G3hhrDBEcIkQ3YI7RskHHTg7WpJOey58jRS+TOrdgb2eFxsc6vBZWB3iLPKwY2LwiRCbIrCrBkrPXYaV3kwKXwxaOI0dPeobuBSeIzAs8/3gnD/7OJLOHxCdyT0BA5elLpRdB2HKcMi9NrSHBD82Ew8Hsw/pxIZ8buQKkzPxfGTKUIXDoXvIDz/5BC4V3W/sIN7rxmY0lvq7nHhCI43sH2PEHPQ6UxmsO71zCIw5pUJCGXFoNJLm/HpD8a6UfDa3QRMGR0Bd91pTOWVuNtKAZU0jvJMHP53zcsE8TMApiK6gxR+lZXQsgBqrVSIpzUxNy9sxdrd+kdQ+RkAMzG2hxsrnzH3+FkD/KQB9h4p2LTph7Fu44MuYUTodCbroDMAzGDdW835IKR3V3iyULqTewmnfjXeq/5ewSWcTchHK2cvODqp0VbVCgp+WtPtAqQnHsZ3324WS28GipB1KR5Xij3g4eYEtb0Syjat0OqPStzMvY6zOz7D979c1zuViatEYcoxnElTw83LBc52dlAq2XtY+GkLMnH552/x7f5ToFsrPxidAWAdVDIzA11pljQElcysg9rMCCGyQGFGCJEFCjNCiCxQmBFCZIHCjBAiCxRmhBBZoDAjhMgChRkhRBYozAghskBhRgiRBQozQogsUJgRQmSBwowQIgt01QwzyPWqGQrfJ/HUmF7QOIsXKtMWpODYtvU4pXdfTqArHvvL8+hu7Aq3mYexZP1uacQYO7h3fwajBwXBWy3Oo/J2Ln499B/sPp8iXkOtwxS8MiHE6FVtReVI3PwP7LgujTYjdNUM66CSGTHkMwEvTuoLjaocKQkncOpSLipdAjF00jREGQSXRrjmf2VxLlJTMw0fWQZXgqzFpe80THksBN4oROLpEzh+Ogn58EToY1PxTF+N+KLbOcio+bn8kV4i3rS4ogBZpt+hhbQAVDIzg/xKZnaIfHYeojW3cOqLZTggZZKi0xRMHxcCxZXtWL5dupcAm/YKm1Zy5B9Yd0y/xPYgfTF25pMI/iMJ361eV30LPcUgjJ3xOIKRgm0r1+CqNNmQHQJHz8VTYZVI3PoRdhjcFLn5oJKZddCVZs1g3SvNNoaBLKA7wznrNL49ea3qSrP3CorhEtYD/m5A2qlz4DeFUnQZhkc0rZF24kdcrc91sn37Y0C4D/5IOYR9VzKlicy9VCj9H0Enby1yj55EujRZnyJsKiYN8IT28k5sOpFa40q4+vglx1/F2BA1rjtEY/LTYzF00KPoE9kdHuU5SMkulN5r/HUDenaH2+1MXL0ViscmvYgnR4zEoAGPIiJAjcwrSSiue8YmoSvNWgdVM0k1jZ9wo5LSwt/1rv3PpSA9l01Ru8FPut6/xo3XOQtQ7jsTr7zxPubOfR9vzHwdY7oHivcI0Ok7U/jdK09Id4LK3IwvP5qHT3eeFserhMDXk72zshLGy1sReHxoIFQVqTi2p+bd3evg0QvPDPRC+bXThlXZXp7SCyT8df3dcDOJvS4hFTdbsddFT8BLMU8ipFUmzh47jcSscqg1ffHUqL7Sm0hTQ2FGqrUSY6iksHbJofQOjw9HePjzMU+09+I3Q/FFZGQbpCacEEKghIeAfrtXPbj0jUaYM6C9loCz0jR96sFDhZu75CfswlmTkoxRAtmH1uDL7Vtx+Kd1WLdqN67eVsCv7/9j1Vk9ykr8um0JNvzAXrdvFTYkFLBioBucS09g3do1OHBkK3Z8fQBXWcqq/IJQ/7UjtkBhRqrZtRFKVZX3HtQW1R6qNuypmLd7/RM7ftouhMDnn+9GCg+L/qMQqSuenViJJUtYSayOu0txLg9Pw/ODfaFgn7djl9QmZyAEg0JZaYqVys4cEW9+Z5LSZBxm1dEqlYdx5je2bm29EKifSKU3cEmv/a20XBzOv7ZP705Tp5DNR6TAJ00PhRmpVn5HqL4pWlXff9O409izeh6WfKbXgM+VH8ZJHhYKX7Q3KPrUxQ7u/WdiyuOBUBenYM+mGp+n02UQQnipLYWV2kwtlXFFOdJ9P6ul5vN7hjrA3Vcc1zH2sYahzobNbCsj1kVhRqrdE/+lHVxrH9hQt+ElkmLkVbXMO0BlJPMyC4vZTwXUTuJ43RwQ/MQbeGmgL1oXJOC7L9bgfB09OoKDfaFiYZJy3liprYHqE4qkWaAwM8Mff8isV0tqBvLZP7natZ1hIz4C4c8b50sLkM1DgHdonTsPMx4bJP5aT2cvV/azBPl6Bypr4zchfgNjuzpAe/0g1q7ZbLxEJuiKQD+WmqwqeK6+HWTtHeEtDepo3Pmd1wuQU4/aqiXJbptpQijMzFCh1a+GyMEJJGWyVPHtikE8kySKToMQzMa1aUlI4ROuJyHjNqDqEI5+eq+D65PoHchCr+gGztYZFnYIfGKScDf10ktb8elm/XYpIxRB8Oadc3Nv1KoyPhArYfbupFd8tBuB/p3ZeNHvOJ8jTbMx+W0zTQf1MzODl48/q2rZS2NyUImsEl9EdG2PDg/3QTsnV3h3GYXHB2mgvpOJ49u3Il34X0xHVqtQhAf6omPXSHiqPeDZeSgei+4KjzYlSNy1FmcKpKIW75oxcSwiXPLFu7L7jMPT0RrY3StHodYdId16o5vBowMqLl5CVef+wL4YGOqB8pQD+CXl/mcWVNPdDV4Bz5A+6ODqDpeAAYh+PBLtVPrLJ72Oze2i1H9O4N8bA9o7ovjGj7ig1+EtoPujaG9X47X1dLu0BL9n3JDGiCVRycwMt0t5+5DMXN+ANZtOILWMlaAi+iKqqycUN1NwYP0aHNfLkpsn1mDdniRk33NDcK++6BehgX1JKg6vv3/PfO9uGrjwgVZ28Nb4QlPr4QV34ZUSD0fh/MzSEqFMWD+lSTicUAyPkF7o1ysQzloWyJs+adQzB2S5zTQRdDqTGfzbB6FTyMPSGGk6eM/+CQhFEjZ9uq7+1VMrupZ0Aek3kqUxYklUMjND8a2b1KBLTMa3Fb7NEOugMDNDUWE+CvMbqSWZNDt8W+HbDLEOCjMz5eVkSUOE3B9tK9ZFbWZmatNGibDwKLi61Th5mRA9hQW5uHzuFO7cqZCmEEujkpmZ+MaZnZlGbWekTnzb4NsIBZl1UZhZQFZmKjLTfpPGCDHEtw2+jRDrojCzkPTUFOTl/C6NESLi2wTfNoj1UZhZSNntEqRe/1VoGyGE49sC3yb4tkGsjw4AWJiTixs0HTrDw6udNIW0RLxExoPs1k1+ySFiCxRmVmDf1gH+mkD4BnTEQw/xPzFpKXhjP28j41VLKpHZFoWZFfn4auDtG0DdNloIXq3kRy2psb9xUJhZGe+H5untx6qdPnB196KSmszwkhjv2c87xOZmZ1D3i0ZEYWZDzq7ucHRygYOjM9qqHaFS2UHJHhRwzQMPLn49Mi178KtflBQXCeda0ilKTQOFGSFEFqhrBiFEFijMCCGyQGFGCJEFCjNCiCxQmBFCZIHCjBAiCxRmhBBZoDAjhMgChRkhRBYozAghskBhRgiRBQozQogsUJgRQmSBwowQIgsUZoQQWaAwI4TIAoUZIUQWKMwIITIA/B+exRHeS8n6lQAAAABJRU5ErkJggg=="},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var a=t(296540);const s={},r=a.createContext(s);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);