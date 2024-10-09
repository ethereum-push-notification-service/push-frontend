"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[97202],{790379:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var t=s(474848),i=s(28453);const a={id:"docs-notifications-supported-wallet-standards",title:"Supported Wallet Standards",hide_title:!0,slug:"./supported-wallet-standards",displayed_sidebar:"pushNotificationSidebar",sidebar_position:4,image:"/assets/docs/previews/docs_notifications--supported_wallet_standards.png"},d="Supported Wallet Standards",r={id:"notifications/docs-notifications-supported-wallet-standards",title:"Supported Wallet Standards",description:"Push Notification is chain agnostic and even supports messaging wallet addresses, NFT addresses, all evms (and even non-EVM in the future). Below is the list of evergrowing standards that Push is compatible with, either of which you can use as per your requirements \u2014",source:"@site/docs/notifications/04-Supported-Wallet-Standards.mdx",sourceDirName:"notifications",slug:"/notifications/supported-wallet-standards",permalink:"/push-website/pr-preview/pr-897/docs/notifications/supported-wallet-standards",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/notifications/04-Supported-Wallet-Standards.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"docs-notifications-supported-wallet-standards",title:"Supported Wallet Standards",hide_title:!0,slug:"./supported-wallet-standards",displayed_sidebar:"pushNotificationSidebar",sidebar_position:4,image:"/assets/docs/previews/docs_notifications--supported_wallet_standards.png"},sidebar:"pushNotificationSidebar",previous:{title:"Important Concepts",permalink:"/push-website/pr-preview/pr-897/docs/notifications/important-concepts"},next:{title:"Build",permalink:"/push-website/pr-preview/pr-897/docs/notifications/build"}},o={},l=[{value:"Standard Wallet Address",id:"standard-wallet-address",level:3},{value:"Chain Specific Wallet Address",id:"chain-specific-wallet-address",level:3},{value:"Lens profile / Cyberconnect profile / Any NFT profile",id:"lens-profile--cyberconnect-profile--any-nft-profile",level:3}];function c(e){const n={code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Head:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"supported-wallet-standards",children:"Supported Wallet Standards"}),"\n",(0,t.jsx)(n.p,{children:"Push Notification is chain agnostic and even supports messaging wallet addresses, NFT addresses, all evms (and even non-EVM in the future). Below is the list of evergrowing standards that Push is compatible with, either of which you can use as per your requirements \u2014"}),"\n",(0,t.jsx)(s,{children:(0,t.jsx)("title",{children:"Supported Wallet Standards | Push Notifications | Push Documentation"})}),"\n",(0,t.jsx)(n.h3,{id:"standard-wallet-address",children:"Standard Wallet Address"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Standard Wallet Address"})," - Standard wallet is supported and used by default"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"usage"})})," - ",(0,t.jsx)(n.code,{children:"0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// Sending to standard wallet address - defaults to EVM format\nawait userAlice.channel.send(['0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666'], {\n  notification: {\n    title: 'Hello World',\n    body: 'Web3 native notification!',\n  },\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"chain-specific-wallet-address",children:"Chain Specific Wallet Address"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Chain Agnostic Wallet Address"})," - Pass ",(0,t.jsx)(n.strong,{children:"{chain_standard}:{chainId}:{account_id}"})," format to use this instead of standard wallet address. SDK converts all normal wallet address to chain agnostic ones by default."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"usage"})})," - ",(0,t.jsx)(n.code,{children:"eip155:1:0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"usage"})})," - ",(0,t.jsx)(n.code,{children:"eip155:11155111:0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"usage"})})," - ",(0,t.jsx)(n.code,{children:"eip155:137:0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// Sending to chain agnostic wallet address, support eip155 currently\nawait userAlice.channel.send(\n  ['eip155:1:0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666'],\n  {\n    notification: {\n      title: 'Hello World',\n      body: 'Web3 native notification!',\n    },\n  }\n);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"lens-profile--cyberconnect-profile--any-nft-profile",children:"Lens profile / Cyberconnect profile / Any NFT profile"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"NFT profile"})," - Pass ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"nft:{chain_standard}:{nftChainId}:{nftContractAddress}:{nftTokenId}"})})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"usage"})})," - ",(0,t.jsx)(n.code,{children:"nft:eip155:11155111:0x42af3147f17239341477113484752D5D3dda997B:2:1683058528"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// Sending to nft format, any nfts supported including .lens, .crypto, .polygon or your crypto punks\nawait userAlice.chat.send(\n  'nft:eip155:11155111:0x42af3147f17239341477113484752D5D3dda997B:2:1683058528',\n  {\n    notification: {\n      title: 'Hello World',\n      body: 'Web3 native notification!',\n    },\n  }\n);\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>r});var t=s(296540);const i={},a=t.createContext(i);function d(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);