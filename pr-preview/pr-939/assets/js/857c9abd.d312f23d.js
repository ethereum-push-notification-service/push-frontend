"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[53312],{534285:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=t(474848),r=t(28453),a=t(411470),c=t(119365),l=t(641622);t(113490);const i={id:"docs-chat-develop-manage-chat-requests",title:"Chat Requests",hide_title:!0,slug:"./chat-requests",displayed_sidebar:"pushChatSidebar",sidebar_position:4,image:"/assets/docs/previews/docs_chat_develop_manage--chat_requests.png"},d="Chat requests overview",o={id:"chat/build/docs-chat-develop-manage-chat-requests",title:"Chat Requests",description:"You can send a message using chat.send API to either an existing chat connection or to initiate a new chat to a wallet you haven't chatted with before (which is called sending a chat request).",source:"@site/docs/chat/01-build/05-Develop-Chat-Requests.mdx",sourceDirName:"chat/01-build",slug:"/chat/build/chat-requests",permalink:"/push-website/pr-preview/pr-939/docs/chat/build/chat-requests",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/chat/01-build/05-Develop-Chat-Requests.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"docs-chat-develop-manage-chat-requests",title:"Chat Requests",hide_title:!0,slug:"./chat-requests",displayed_sidebar:"pushChatSidebar",sidebar_position:4,image:"/assets/docs/previews/docs_chat_develop_manage--chat_requests.png"},sidebar:"pushChatSidebar",previous:{title:"Fetch Chats",permalink:"/push-website/pr-preview/pr-939/docs/chat/build/fetch-chats"},next:{title:"Send Message",permalink:"/push-website/pr-preview/pr-939/docs/chat/build/send-message"}},h={},u=[{value:"Accept chat requests API",id:"accept-chat-requests-api",level:2},{value:"Accept chat request parameters",id:"accept-chat-request-parameters",level:3},{value:"Reject chat request API",id:"reject-chat-request-api",level:2},{value:"Reject chat request parameters",id:"reject-chat-request-parameters",level:3},{value:"Chat Info API",id:"chat-info-api",level:2},{value:"Chat Info parameters",id:"chat-info-parameters",level:3},{value:"Block chat request API",id:"block-chat-request-api",level:2},{value:"Block chat request parameters",id:"block-chat-request-parameters",level:3},{value:"Unblock a user API",id:"unblock-a-user-api",level:2},{value:"Unblock a user parameters",id:"unblock-a-user-parameters",level:3}];function p(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{Head:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"chat-requests-overview",children:"Chat requests overview"}),"\n",(0,n.jsxs)(s.p,{children:["You can send a message using ",(0,n.jsx)(s.a,{href:"/docs/chat/build/send-message",children:"chat.send API"})," to either an existing chat connection or to initiate a new chat to a wallet you haven't chatted with before (which is called sending a chat request)."]}),"\n",(0,n.jsxs)(s.p,{children:["Any chat from a push user who is not your connection already to your wallet lands in your ",(0,n.jsx)(s.strong,{children:"chat requests"})," and you will need to ",(0,n.jsx)(s.strong,{children:"accept"}),", ",(0,n.jsx)(s.strong,{children:"reject"})," or ",(0,n.jsx)(s.strong,{children:"block"})," them accordingly. This enables a seamless UX and ",(0,n.jsx)(s.strong,{children:"eliminates spam"})," problems with chat."]}),"\n",(0,n.jsx)(t,{children:(0,n.jsx)("title",{children:"Manage Chat Requests | Push Chat | Push Documentation"})}),"\n","\n","\n",(0,n.jsx)(s.h2,{id:"accept-chat-requests-api",children:"Accept chat requests API"}),"\n",(0,n.jsx)(s.p,{children:"To accept an incoming chat requests. Only called once per chat request. Once chat request is accepted, the chat connection is marked as active and any chat you receive moving forward will also send push notifications driving re-engagement to your app."}),"\n",(0,n.jsx)(a.A,{className:"codetabs",groupId:"code-examples",children:(0,n.jsx)(c.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"// userAlice.chat.accept(recipient)\n// recipient - Can be wallet address, nft address or chatid | See Types of Recipient for more info\nconst bobAcceptAliceRequest = await userBob.chat.accept(aliceAddress);\n"})})})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"accept-chat-request-parameters",children:"Accept chat request parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Param"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Default"}),(0,n.jsx)(s.th,{children:"Remarks"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.em,{children:(0,n.jsx)(s.code,{children:"recipient"})})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"string"})}),(0,n.jsx)(s.td,{children:"-"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.a,{href:"/docs/chat/supported-wallet-standards/",title:"Supported wallet standards for Push Chat",children:"Recipient supports a number of address format"})," including wallet addresses, chain agnostic wallet addresses, NFT addresses or even chatid which is useful for groups"]})]})})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["Note: Parameters ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,n.jsx)(l.A,{summary:"Expected response",children:"200 OK"}),"\n",(0,n.jsx)(s.h2,{id:"reject-chat-request-api",children:"Reject chat request API"}),"\n",(0,n.jsx)(s.p,{children:"To reject an incoming chat request. Once rejected, the user can still send you a message that will land in your chat request again."}),"\n",(0,n.jsx)(a.A,{className:"codetabs",groupId:"code-examples",children:(0,n.jsx)(c.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"// userAlice.chat.reject(recipient)\n// recipient - Can be wallet address, nft address or chatid | See Types of Recipient for more info\nconst bobAcceptAliceRequest = await userBob.chat.reject(aliceAddress);\n"})})})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"reject-chat-request-parameters",children:"Reject chat request parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Param"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Default"}),(0,n.jsx)(s.th,{children:"Remarks"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.em,{children:(0,n.jsx)(s.code,{children:"recipient"})})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"string"})}),(0,n.jsx)(s.td,{children:"-"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.a,{href:"/docs/chat/supported-wallet-standards/",title:"Supported wallet standards for Push Chat",children:"Recipient supports a number of address format"})," including wallet addresses, chain agnostic wallet addresses, NFT addresses or even chatid which is useful for groups"]})]})})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["Note: Parameters ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,n.jsx)(l.A,{summary:"Expected response",children:"200 OK"}),"\n",(0,n.jsx)(s.h2,{id:"chat-info-api",children:"Chat Info API"}),"\n",(0,n.jsx)(s.p,{children:"Chat Info API can be used to get the status of a chat between users, basically to check if a chat request is pending or if it has been accepted by the other user."}),"\n",(0,n.jsx)(a.A,{className:"codetabs",groupId:"code-examples",children:(0,n.jsx)(c.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"// To check the status of a chat between userAlice and userBob\n// userAlice.chat.info(chatId, bobAddress)\nconst statusOfChatWithBob = await userAlice.chat.info(chatId, bobAddress);\n"})})})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"chat-info-parameters",children:"Chat Info parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Param"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Default"}),(0,n.jsx)(s.th,{children:"Remarks"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.em,{children:(0,n.jsx)(s.code,{children:"chatId"})})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"string"})}),(0,n.jsx)(s.td,{children:"-"}),(0,n.jsx)(s.td,{children:"The unique identifier of the chat between Alice and Bob"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.em,{children:(0,n.jsx)(s.code,{children:"address"})})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"string"})}),(0,n.jsx)(s.td,{children:"-"}),(0,n.jsx)(s.td,{children:"The address of the user to check the status with."})]})]})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["Note: Parameters ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,n.jsxs)(l.A,{summary:"Expected response (When Alice's chat request has already been accepted by Bob)",children:[(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:'{\n    "meta": {\n        "group": false\n    },\n    "list": "CHATS"\n}\n\n'})}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Param"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Remarks"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"meta.group"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"boolean"})}),(0,n.jsxs)(s.td,{children:["returns ",(0,n.jsx)(s.code,{children:"true"})," when the passed chatId is of a group chat and vice versa."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"list"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"string"})}),(0,n.jsxs)(s.td,{children:["returns ",(0,n.jsx)(s.code,{children:"CHATS"})," when the chat request has been accepted by the other user."]})]})]})]})]}),"\n",(0,n.jsxs)(l.A,{summary:"Expected response (When Alice's Chat request is pending or not yet accepted by Bob)",children:[(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:'{\n    "meta": {\n        "group": false\n    },\n    "list": "REQUESTS"\n}\n\n'})}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Param"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Remarks"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"meta.group"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"boolean"})}),(0,n.jsxs)(s.td,{children:["returns ",(0,n.jsx)(s.code,{children:"true"})," when the passed chatId is of a group chat and vice versa."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"list"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"string"})}),(0,n.jsxs)(s.td,{children:["returns ",(0,n.jsx)(s.code,{children:"REQUESTS"})," when the chat request has been accepted by the other user."]})]})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"block-chat-request-api",children:"Block chat request API"}),"\n",(0,n.jsx)(s.p,{children:"To block an incoming chat requests. Once blocked, the user will not be able to send you DMs or invite you to a group."}),"\n",(0,n.jsx)(a.A,{className:"codetabs",groupId:"code-examples",children:(0,n.jsx)(c.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"// userAlice.chat.block([recipient])\n// recipient - Can be wallet address, nft address or chatid | See Types of Recipient for more info\nconst bobBlockAliceRequest = await userBob.chat.block([aliceAddress]);\n"})})})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"block-chat-request-parameters",children:"Block chat request parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Param"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Default"}),(0,n.jsx)(s.th,{children:"Remarks"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.em,{children:(0,n.jsx)(s.code,{children:"recipient"})})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"string[]"})}),(0,n.jsx)(s.td,{children:"-"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.a,{href:"/docs/chat/supported-wallet-standards/",title:"Supported wallet standards for Push Chat",children:"Recipient supports a number of address format"})," including wallet addresses, chain agnostic wallet addresses, NFT addresses or even chatid which is useful for groups"]})]})})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["Note: Parameters ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,n.jsx)(l.A,{summary:"Expected response",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:'{\n  "did": "eip155:0xE95d1c080E72021d94Ef247d86897766C5807A98",\n  "wallets": "eip155:0xE95d1c080E72021d94Ef247d86897766C5807A98",\n  "publicKey": "-----BEGIN PGP PUBLIC KEY BLOCK-----...-----END PGP PUBLIC KEY BLOCK-----\\n",\n  "encryptedPrivateKey": "{...}",\n  "verificationProof": "eip191v2:0x6f5fa197aaf6760ec7479b0512756224b57c7ff431c2f2c086e0730d30c4dec429615b619f4509cbcf36874ed507bc40161266eabe7d8516962199565309bc811b",\n  "msgSent": 0,\n  "maxMsgPersisted": 1000,\n  "profile": {\n    "name": null,\n    "desc": null,\n    "picture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA1klEQVR4AcXBsWkDMRiG4TcfApVe4UDFDaAN3NwuHuh2SXNNag3gQuAVXAUVIWl/uxAYB77n+fj6/vklKG0Q7fcb77icFqJeM5EwE2bCTJgJM2EmzBJPes1EGyvR53FlZjuvRJ05YSbMhFniSWmDaL/fiC6nhZn9uBJdTgtRr5lImAkzYZZKG0S9Zh4cPOg1M3XwoNdMVNogEmbCTJilXjMz23klKm0ws51XZnrNRMJMmAmzVNrgP5U2eIUwE2bCLPWaiUobRL1m3lHaIOo1EwkzYSbM/gDz9DEdwejLXwAAAABJRU5ErkJggg==",\n    "blockedUsersList": [ "eip155:0x4Fc0F35B0ab1201ae9F8F8f589bea01f556022dF" ],\n    "profileVerificationProof": "pgpv2:-----BEGIN PGP SIGNATURE-----...-----END PGP SIGNATURE-----\\n"\n  },\n  "origin": null,\n  "name": null,\n  "about": null,\n  "profilePicture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA1klEQVR4AcXBsWkDMRiG4TcfApVe4UDFDaAN3NwuHuh2SXNNag3gQuAVXAUVIWl/uxAYB77n+fj6/vklKG0Q7fcb77icFqJeM5EwE2bCTJgJM2EmzBJPes1EGyvR53FlZjuvRJ05YSbMhFniSWmDaL/fiC6nhZn9uBJdTgtRr5lImAkzYZZKG0S9Zh4cPOg1M3XwoNdMVNogEmbCTJilXjMz23klKm0ws51XZnrNRMJMmAmzVNrgP5U2eIUwE2bCLPWaiUobRL1m3lHaIOo1EwkzYSbM/gDz9DEdwejLXwAAAABJRU5ErkJggg==",\n  "numMsg": 0,\n  "allowedNumMsg": 1000,\n  "encryptionType": "eip191-aes256-gcm-hkdf-sha256",\n  "signature": "0x6f5fa197aaf6760ec7479b0512756224b57c7ff431c2f2c086e0730d30c4dec429615b619f4509cbcf36874ed507bc40161266eabe7d8516962199565309bc811b",\n  "sigType": "eip191v2",\n  "encryptedPassword": null,\n  "nftOwner": null,\n  "linkedListHash": null,\n  "nfts": null\n}\n'})})}),"\n",(0,n.jsx)(s.h2,{id:"unblock-a-user-api",children:"Unblock a user API"}),"\n",(0,n.jsx)(s.p,{children:"To unblock an user."}),"\n",(0,n.jsx)(a.A,{className:"codetabs",groupId:"code-examples",children:(0,n.jsx)(c.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"// userAlice.chat.unblock([recipient])\n// recipient - Can be wallet address, nft address or chatid | See Types of Recipient for more info\nconst bobUnblockAlice = await userBob.chat.unblock([aliceAddress]);\n"})})})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"unblock-a-user-parameters",children:"Unblock a user parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Param"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Default"}),(0,n.jsx)(s.th,{children:"Remarks"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.em,{children:(0,n.jsx)(s.code,{children:"recipient"})})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"string[]"})}),(0,n.jsx)(s.td,{children:"-"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.a,{href:"/docs/chat/supported-wallet-standards/",title:"Supported wallet standards for Push Chat",children:"Recipient supports a number of address format"})," including wallet addresses, chain agnostic wallet addresses, NFT addresses or even chatid which is useful for groups"]})]})})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["Note: Parameters ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,n.jsx)(l.A,{summary:"Expected response",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:'{\n  "did": "eip155:0xE95d1c080E72021d94Ef247d86897766C5807A98",\n  "wallets": "eip155:0xE95d1c080E72021d94Ef247d86897766C5807A98",\n  "publicKey": "-----BEGIN PGP PUBLIC KEY BLOCK-----...-----END PGP PUBLIC KEY BLOCK-----\\n",\n  "encryptedPrivateKey": "{...}",\n  "verificationProof": "eip191v2:0x6f5fa197aaf6760ec7479b0512756224b57c7ff431c2f2c086e0730d30c4dec429615b619f4509cbcf36874ed507bc40161266eabe7d8516962199565309bc811b",\n  "msgSent": 0,\n  "maxMsgPersisted": 1000,\n  "profile": {\n    "name": null,\n    "desc": null,\n    "picture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA1klEQVR4AcXBsWkDMRiG4TcfApVe4UDFDaAN3NwuHuh2SXNNag3gQuAVXAUVIWl/uxAYB77n+fj6/vklKG0Q7fcb77icFqJeM5EwE2bCTJgJM2EmzBJPes1EGyvR53FlZjuvRJ05YSbMhFniSWmDaL/fiC6nhZn9uBJdTgtRr5lImAkzYZZKG0S9Zh4cPOg1M3XwoNdMVNogEmbCTJilXjMz23klKm0ws51XZnrNRMJMmAmzVNrgP5U2eIUwE2bCLPWaiUobRL1m3lHaIOo1EwkzYSbM/gDz9DEdwejLXwAAAABJRU5ErkJggg==",\n    "blockedUsersList": [],\n    "profileVerificationProof": "pgpv2:-----BEGIN PGP SIGNATURE-----...-----END PGP SIGNATURE-----\\n"\n  },\n  "origin": null,\n  "name": null,\n  "about": null,\n  "profilePicture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA1klEQVR4AcXBsWkDMRiG4TcfApVe4UDFDaAN3NwuHuh2SXNNag3gQuAVXAUVIWl/uxAYB77n+fj6/vklKG0Q7fcb77icFqJeM5EwE2bCTJgJM2EmzBJPes1EGyvR53FlZjuvRJ05YSbMhFniSWmDaL/fiC6nhZn9uBJdTgtRr5lImAkzYZZKG0S9Zh4cPOg1M3XwoNdMVNogEmbCTJilXjMz23klKm0ws51XZnrNRMJMmAmzVNrgP5U2eIUwE2bCLPWaiUobRL1m3lHaIOo1EwkzYSbM/gDz9DEdwejLXwAAAABJRU5ErkJggg==",\n  "numMsg": 0,\n  "allowedNumMsg": 1000,\n  "encryptionType": "eip191-aes256-gcm-hkdf-sha256",\n  "signature": "0x6f5fa197aaf6760ec7479b0512756224b57c7ff431c2f2c086e0730d30c4dec429615b619f4509cbcf36874ed507bc40161266eabe7d8516962199565309bc811b",\n  "sigType": "eip191v2",\n  "encryptedPassword": null,\n  "nftOwner": null,\n  "linkedListHash": null,\n  "nfts": null\n}\n'})})})]})}function b(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},641622:(e,s,t)=>{t.d(s,{A:()=>j});var n=t(296540),r=t(618215),a=t(15066),c=t(992303),l=t(41422);const i={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var d=t(474848);function o(e){return!!e&&("SUMMARY"===e.tagName||o(e.parentElement))}function h(e,s){return!!e&&(e===s||h(e.parentElement,s))}function u(e){let{summary:s,children:t,...r}=e;const u=(0,c.A)(),p=(0,n.useRef)(null),{collapsed:b,setCollapsed:j}=(0,l.u)({initialState:!r.open}),[x,m]=(0,n.useState)(r.open),f=n.isValidElement(s)?s:(0,d.jsx)("summary",{children:null!=s?s:"Details"});return(0,d.jsxs)("details",{...r,ref:p,open:x,"data-collapsed":b,className:(0,a.A)(i.details,u&&i.isBrowser,r.className),onMouseDown:e=>{o(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const s=e.target;o(s)&&h(s,p.current)&&(e.preventDefault(),b?(j(!1),m(!0)):j(!0))},children:[f,(0,d.jsx)(l.N,{lazy:!1,collapsed:b,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{j(e),m(!e)},children:(0,d.jsx)("div",{className:i.collapsibleContent,children:t})})]})}const p={details:"details_b_Ee"},b="alert alert--info";function j(e){let{...s}=e;return(0,d.jsx)(u,{...s,className:(0,r.A)(b,p.details,s.className)})}},119365:(e,s,t)=>{t.d(s,{A:()=>c});t(296540);var n=t(618215);const r={tabItem:"tabItem_Ymn6"};var a=t(474848);function c(e){let{children:s,hidden:t,className:c}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,c),hidden:t,children:s})}},411470:(e,s,t)=>{t.d(s,{A:()=>w});var n=t(296540),r=t(618215),a=t(823104),c=t(956347),l=t(300205),i=t(757485),d=t(231682),o=t(289466);function h(e){var s,t;return null!==(s=null===(t=n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==s?s:[]}function u(e){const{values:s,children:t}=e;return(0,n.useMemo)((()=>{const e=null!=s?s:function(e){return h(e).map((e=>{let{props:{value:s,label:t,attributes:n,default:r}}=e;return{value:s,label:t,attributes:n,default:r}}))}(t);return function(e){const s=(0,d.X)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,t])}function p(e){let{value:s,tabValues:t}=e;return t.some((e=>e.value===s))}function b(e){let{queryString:s=!1,groupId:t}=e;const r=(0,c.W6)(),a=function(e){let{queryString:s=!1,groupId:t}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:s,groupId:t});return[(0,i.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const s=new URLSearchParams(r.location.search);s.set(a,e),r.replace({...r.location,search:s.toString()})}),[a,r])]}function j(e){const{defaultValue:s,queryString:t=!1,groupId:r}=e,a=u(e),[c,i]=(0,n.useState)((()=>function(e){var s;let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=null!==(s=n.find((e=>e.default)))&&void 0!==s?s:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:a}))),[d,h]=b({queryString:t,groupId:r}),[j,x]=function(e){let{groupId:s}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(s),[r,a]=(0,o.Dv)(t);return[r,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),m=(()=>{const e=null!=d?d:j;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{m&&i(m)}),[m]);return{selectedValue:c,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),h(e),x(e)}),[h,x,a]),tabValues:a}}var x=t(992303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(474848);function g(e){let{className:s,block:t,selectedValue:n,selectValue:c,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),o=e=>{const s=e.currentTarget,t=i.indexOf(s),r=l[t].value;r!==n&&(d(s),c(r))},h=e=>{var s;let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{var n;const s=i.indexOf(e.currentTarget)+1;t=null!==(n=i[s])&&void 0!==n?n:i[0];break}case"ArrowLeft":{var r;const s=i.indexOf(e.currentTarget)-1;t=null!==(r=i[s])&&void 0!==r?r:i[i.length-1];break}}null===(s=t)||void 0===s||s.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},s),children:l.map((e=>{let{value:s,label:t,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===s?0:-1,"aria-selected":n===s,ref:e=>i.push(e),onKeyDown:h,onClick:o,...a,className:(0,r.A)("tabs__item",m.tabItem,null==a?void 0:a.className,{"tabs__item--active":n===s}),children:null!=t?t:s},s)}))})}function A(e){let{lazy:s,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(s){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,s)=>(0,n.cloneElement)(e,{key:s,hidden:e.props.value!==r})))})}function v(e){const s=j(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,f.jsx)(g,{...e,...s}),(0,f.jsx)(A,{...e,...s})]})}function w(e){const s=(0,x.A)();return(0,f.jsx)(v,{...e,children:h(e.children)},String(s))}},28453:(e,s,t)=>{t.d(s,{R:()=>c,x:()=>l});var n=t(296540);const r={},a=n.createContext(r);function c(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);