"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[79242],{838418:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>h,default:()=>x,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var n=i(474848),r=i(28453);const t={slug:"benchmarking-push-chat-message",title:"Benchmarking Push Chat Message Architecture: What Changed? \ud83d\udcac \u26a1",authors:["push"],image:"./cover-image.webp",description:"Benchmarking Push Chat Message Architecture: What Changed? \ud83d\udcac \u26a1",text:"Push Chat has been a game-changer for  web3 messaging, offering a hassle-free experience for user to user, user to dApp, and group conversations. In essence, Push Chat makes messaging in web3 as seamless as it is in web2. One feature we\u2019ve been working on extensively within Push Chat is change in storage and retreivals of Push chat messages to make them much more faster.",tags:["Push Protocol","Web3","Blockchain Technology","EthGlobal"]},h=void 0,l={permalink:"/push-website/pr-preview/pr-904/blog/benchmarking-push-chat-message",source:"@site/blog/2024-03-04-benchmarking-push-chat-message-architecture/index.md",title:"Benchmarking Push Chat Message Architecture: What Changed? \ud83d\udcac \u26a1",description:"Benchmarking Push Chat Message Architecture: What Changed? \ud83d\udcac \u26a1",date:"2024-03-04T00:00:00.000Z",formattedDate:"March 4, 2024",tags:[{label:"Push Protocol",permalink:"/push-website/pr-preview/pr-904/blog/tags/push-protocol"},{label:"Web3",permalink:"/push-website/pr-preview/pr-904/blog/tags/web-3"},{label:"Blockchain Technology",permalink:"/push-website/pr-preview/pr-904/blog/tags/blockchain-technology"},{label:"EthGlobal",permalink:"/push-website/pr-preview/pr-904/blog/tags/eth-global"}],readingTime:5.5633333333333335,hasTruncateMarker:!0,authors:[{name:"Push Protocol",url:"https://twitter.com/pushprotocol",imageURL:"/assets/blog/authors/authorpush.png",key:"push"}],frontMatter:{slug:"benchmarking-push-chat-message",title:"Benchmarking Push Chat Message Architecture: What Changed? \ud83d\udcac \u26a1",authors:["push"],image:"./cover-image.webp",description:"Benchmarking Push Chat Message Architecture: What Changed? \ud83d\udcac \u26a1",text:"Push Chat has been a game-changer for  web3 messaging, offering a hassle-free experience for user to user, user to dApp, and group conversations. In essence, Push Chat makes messaging in web3 as seamless as it is in web2. One feature we\u2019ve been working on extensively within Push Chat is change in storage and retreivals of Push chat messages to make them much more faster.",tags:["Push Protocol","Web3","Blockchain Technology","EthGlobal"]},unlisted:!1,prevItem:{title:"Explaining Push Nodes: Everything You Need To Know",permalink:"/push-website/pr-preview/pr-904/blog/explaining-push-nodes"},nextItem:{title:"Announcing Decentralize with PUSH Contest",permalink:"/push-website/pr-preview/pr-904/blog/announcing-decentralize-with-push-contest"}},c={image:i(457412).A,authorsImageUrls:[void 0]},d=[{value:"Understanding Push Chat Message Architecture",id:"understanding-push-chat-message-architecture",level:3},{value:"V1 Architecture",id:"v1-architecture",level:4},{value:"V2 Architecture",id:"v2-architecture",level:4},{value:"Push Chat Benchmarks: Letting The Numbers Speak For Unprecedented Scale And Security",id:"push-chat-benchmarks-letting-the-numbers-speak-for-unprecedented-scale-and-security",level:3},{value:"List Paginated User Chats",id:"list-paginated-user-chats",level:4},{value:"List Latest Chat Message",id:"list-latest-chat-message",level:4},{value:"List Historical Chat Message",id:"list-historical-chat-message",level:4},{value:"Send Message",id:"send-message",level:4}];function a(e){const s={blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Cover Image of Push Chat message benchmark \ud83d\udcac \u26a1",src:i(240835).A+"",width:"1600",height:"840"})}),"\n",(0,n.jsx)(s.p,{children:"Push Chat has revolutionized web3 messaging, providing a seamless experience for user-to-user, user-to-dApp, and group conversations. Essentially, Push Chat bridges the gap between messaging in web3 and web2, offering a hassle-free transition. One pivotal enhancement we've diligently pursued within Push Chat involves reconfiguring the architecture for storing and retrieving messages, resulting in significantly faster performance."}),"\n",(0,n.jsx)(s.p,{children:"Whether you're engaging in public group chats, participating in private discussions, or accessing token-gated communities, Push Group Chat simplifies and secures connections. Now, Push is elevating its scalability and drastically improving message transmission speeds."}),"\n",(0,n.jsx)(s.h3,{id:"understanding-push-chat-message-architecture",children:"Understanding Push Chat Message Architecture"}),"\n",(0,n.jsx)(s.h4,{id:"v1-architecture",children:"V1 Architecture"}),"\n",(0,n.jsx)(s.p,{children:"In the earlier iteration of Push Chat, messages were managed within a linked list structure. This architecture employed references where each message pointed to the previous one, creating a sequential chain of messages. However, this design encountered some significant hurdles."}),"\n",(0,n.jsx)(s.p,{children:"One notable issue arose from the concurrent arrival of messages, as the linked list format struggled to handle the concurrent processing of incoming messages. This concurrency bottleneck often resulted in performance degradation and dropping of messages by Push nodes, undermining the real-time nature of Push Chat."}),"\n",(0,n.jsx)(s.p,{children:"Moreover, the process of retrieving messages from this linked list structure posed its own set of challenges. Since Push nodes primarily stored references to the latest message, retrieving older messages required traversing the entire linked list sequentially. This approach led to slow query speeds, as resolving previous messages necessitated the resolution of the current message first."}),"\n",(0,n.jsx)(s.h4,{id:"v2-architecture",children:"V2 Architecture"}),"\n",(0,n.jsx)(s.p,{children:"In the latest iteration, Push Chat has undergone a significant architectural transformation, one of the most notable changes in v2 is the abandonment of the linked list paradigm, where each message no longer references the previous one."}),"\n",(0,n.jsx)(s.p,{children:"By eliminating the requirement for messages to reference the previous one, v2 architecture significantly simplifies message processing, enabling Push nodes to handle concurrent messages more efficiently. This architectural shift has alleviated the concurrency bottleneck that plagued the earlier version, enhancing the scalability and responsiveness of Push Chat."}),"\n",(0,n.jsx)(s.p,{children:"Furthermore, in v2, Push nodes now cache every message instead of solely storing references to the latest message hash. This strategic enhancement plays a pivotal role in optimizing message retrieval speeds. By caching every message, Push nodes can swiftly access and deliver messages upon request, mitigating the latency issues associated with sequential message resolution."}),"\n",(0,n.jsx)(s.p,{children:"It's worth noting that despite these architectural changes, the fundamental immutable layer of Push Chat remains rooted in IPFS. Every message, whether in v1 or v2, continues to be backed up by a client-signed and verifiable verification proof. This cryptographic mechanism ensures the integrity and authenticity of messages, safeguarding them against tampering or unauthorized alterations."}),"\n",(0,n.jsx)(s.h3,{id:"push-chat-benchmarks-letting-the-numbers-speak-for-unprecedented-scale-and-security",children:"Push Chat Benchmarks: Letting The Numbers Speak For Unprecedented Scale And Security"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Note:: It's important to acknowledge that the benchmarking of v2 architecture was conducted on a development server, while the benchmarking of v1 architecture took place on a production server. It's worth highlighting that the production server possesses 16 times more CPU power than the development server, potentially providing an unfair advantage to v1 architecture. Additionally, it's crucial to recognize that the traffic volume on the production server is substantially higher compared to the development environment. These discrepancies in server specifications and traffic levels should be considered when interpreting the benchmark results."}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"list-paginated-user-chats",children:"List Paginated User Chats"}),"\n",(0,n.jsx)(s.p,{children:"Fn Breakdown"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Fetch lists of chat of a account with latest threadhash ( Page Limit = 10 ) - ",(0,n.jsx)(s.code,{children:"A"})]}),"\n",(0,n.jsxs)(s.li,{children:["Fetch latest message for every chat - ",(0,n.jsx)(s.code,{children:"B"})]}),"\n",(0,n.jsx)(s.li,{children:"Decrypt the latest message if its encrypted - Ignored for this benchmark"}),"\n"]}),"\n",(0,n.jsx)("div",{style:{display:"inline-block",marginRight:"20px"},children:(0,n.jsxs)("table",{children:[(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"V1 Message Architecture"})}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Call Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Time Taken ( ms )"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"A"}),(0,n.jsx)("td",{children:"825"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"B - 1"}),(0,n.jsx)("td",{children:"712"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"B - 2"}),(0,n.jsx)("td",{children:"718"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"B - 3"}),(0,n.jsx)("td",{children:"728"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"B - 4"}),(0,n.jsx)("td",{children:"734"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"B - 5"}),(0,n.jsx)("td",{children:"693"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"B - 6"}),(0,n.jsx)("td",{children:"694"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"B - 7"}),(0,n.jsx)("td",{children:"673"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"B - 8"}),(0,n.jsx)("td",{children:"716"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"B - 9"}),(0,n.jsx)("td",{children:"768"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"B - 10"}),(0,n.jsx)("td",{children:"713"})]})]})}),"\n",(0,n.jsx)("div",{style:{display:"inline-block"},children:(0,n.jsxs)("table",{children:[(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"V2 Message Architecture"})}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Call Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Time Taken ( ms )"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"A"}),(0,n.jsx)("td",{children:"696"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"B - 1"}),(0,n.jsx)("td",{children:"386"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"B - 2"}),(0,n.jsx)("td",{children:"447"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"B - 3"}),(0,n.jsx)("td",{children:"433"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"B - 4"}),(0,n.jsx)("td",{children:"509"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"B - 5"}),(0,n.jsx)("td",{children:"410"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"B - 6"}),(0,n.jsx)("td",{children:"431"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"B - 7"}),(0,n.jsx)("td",{children:"399"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"B - 8"}),(0,n.jsx)("td",{children:"359"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"B - 9"}),(0,n.jsx)("td",{children:"441"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"B - 10"}),(0,n.jsx)("td",{children:"410"})]})]})}),"\n",(0,n.jsx)(s.h4,{id:"list-latest-chat-message",children:"List Latest Chat Message"}),"\n",(0,n.jsx)(s.p,{children:"Fn Breakdown"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Fetch latest message reference - ",(0,n.jsx)(s.code,{children:"A"})]}),"\n",(0,n.jsxs)(s.li,{children:["Fetch latest message for that reference - ",(0,n.jsx)(s.code,{children:"B"})]}),"\n",(0,n.jsx)(s.li,{children:"Decrypt the latest message if its encrypted - Ignored for this benchmark"}),"\n"]}),"\n",(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{style:{display:"inline-block",marginRight:"20px"},children:(0,n.jsxs)("table",{children:[(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"V1 Message Architecture"})}),(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"Chat with 10 Messages"})}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Call Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Time Taken ( ms )"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"A"}),(0,n.jsx)("td",{children:"787"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"B"}),(0,n.jsx)("td",{children:"1403"})]})]})}),(0,n.jsx)("div",{style:{display:"inline-block"},children:(0,n.jsxs)("table",{children:[(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"V2 Message Architecture"})}),(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"Chat with 10 Messages"})}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Call Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Time Taken ( ms )"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"A"}),(0,n.jsx)("td",{children:"325"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"B"}),(0,n.jsx)("td",{children:"673"})]})]})})]}),"\n",(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{style:{display:"inline-block",marginRight:"20px"},children:(0,n.jsxs)("table",{children:[(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"V1 Message Architecture"})}),(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"Chat with 50 Messages"})}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Call Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Time Taken ( ms )"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"A"}),(0,n.jsx)("td",{children:"744"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"B"}),(0,n.jsx)("td",{children:"1381"})]})]})}),(0,n.jsx)("div",{style:{display:"inline-block"},children:(0,n.jsxs)("table",{children:[(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"V2 Message Architecture"})}),(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"Chat with 50 Messages"})}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Call Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Time Taken ( ms )"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"A"}),(0,n.jsx)("td",{children:"399"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"B"}),(0,n.jsx)("td",{children:"718"})]})]})})]}),"\n",(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{style:{display:"inline-block",marginRight:"20px"},children:(0,n.jsxs)("table",{children:[(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"V1 Message Architecture"})}),(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"Chat with 100 Messages"})}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Call Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Time Taken ( ms )"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"A"}),(0,n.jsx)("td",{children:"693"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"B"}),(0,n.jsx)("td",{children:"1524"})]})]})}),(0,n.jsx)("div",{style:{display:"inline-block"},children:(0,n.jsxs)("table",{children:[(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"V2 Message Architecture"})}),(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"Chat with 100 Messages"})}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Call Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Time Taken ( ms )"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"A"}),(0,n.jsx)("td",{children:"348"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"B"}),(0,n.jsx)("td",{children:"716"})]})]})})]}),"\n",(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{style:{display:"inline-block",marginRight:"20px"},children:(0,n.jsxs)("table",{children:[(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"V1 Message Architecture"})}),(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"Chat with 250 Messages"})}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Call Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Time Taken ( ms )"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"A"}),(0,n.jsx)("td",{children:"679"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"B"}),(0,n.jsx)("td",{children:"1462"})]})]})}),(0,n.jsx)("div",{style:{display:"inline-block"},children:(0,n.jsxs)("table",{children:[(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"V2 Message Architecture"})}),(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"Chat with 250 Messages"})}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Call Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Time Taken ( ms )"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"A"}),(0,n.jsx)("td",{children:"312"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"B"}),(0,n.jsx)("td",{children:"700"})]})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"list-historical-chat-message",children:"List Historical Chat Message"}),"\n",(0,n.jsx)(s.p,{children:"Fn Breakdown"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Fetch messages frm a given message reference ( Page Limit = 10 ) - ",(0,n.jsx)(s.code,{children:"A"})]}),"\n",(0,n.jsx)(s.li,{children:"Decrypt the latest message if its encrypted - Ignored for this benchmark"}),"\n"]}),"\n",(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{style:{display:"inline-block",marginRight:"20px"},children:(0,n.jsxs)("table",{children:[(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"V1 Message Architecture"})}),(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"Chat with 10 Messages"})}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Call Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Time Taken ( ms )"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"A"}),(0,n.jsx)("td",{children:"1616"})]})]})}),(0,n.jsx)("div",{style:{display:"inline-block"},children:(0,n.jsxs)("table",{children:[(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"V2 Message Architecture"})}),(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"Chat with 10 Messages"})}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Call Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Time Taken ( ms )"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"A"}),(0,n.jsx)("td",{children:"991"})]})]})})]}),"\n",(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{style:{display:"inline-block",marginRight:"20px"},children:(0,n.jsxs)("table",{children:[(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"V1 Message Architecture"})}),(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"Chat with 50 Messages"})}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Call Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Time Taken ( ms )"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"A"}),(0,n.jsx)("td",{children:"2414"})]})]})}),(0,n.jsx)("div",{style:{display:"inline-block"},children:(0,n.jsxs)("table",{children:[(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"V2 Message Architecture"})}),(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"Chat with 50 Messages"})}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Call Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Time Taken ( ms )"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"A"}),(0,n.jsx)("td",{children:"1060"})]})]})})]}),"\n",(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{style:{display:"inline-block",marginRight:"20px"},children:(0,n.jsxs)("table",{children:[(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"V1 Message Architecture"})}),(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"Chat with 100 Messages"})}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Call Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Time Taken ( ms )"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"A"}),(0,n.jsx)("td",{children:"2440"})]})]})}),(0,n.jsx)("div",{style:{display:"inline-block"},children:(0,n.jsxs)("table",{children:[(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"V2 Message Architecture"})}),(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"Chat with 100 Messages"})}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Call Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Time Taken ( ms )"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"A"}),(0,n.jsx)("td",{children:"1020"})]})]})})]}),"\n",(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{style:{display:"inline-block",marginRight:"20px"},children:(0,n.jsxs)("table",{children:[(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"V1 Message Architecture"})}),(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"Chat with 100 Messages"})}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Call Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Time Taken ( ms )"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"A"}),(0,n.jsx)("td",{children:"2360"})]})]})}),(0,n.jsx)("div",{style:{display:"inline-block"},children:(0,n.jsxs)("table",{children:[(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"V2 Message Architecture"})}),(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"Chat with 250 Messages"})}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Call Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Time Taken ( ms )"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"A"}),(0,n.jsx)("td",{children:"965"})]})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"send-message",children:"Send Message"}),"\n",(0,n.jsx)(s.p,{children:"Fn Breakdown"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Fetch receiver\u2019s details - Ignored for this benchmark"}),"\n",(0,n.jsx)(s.li,{children:"Encrypt message - Ignored for this benchmark"}),"\n",(0,n.jsxs)(s.li,{children:["POST Call to Push Nodes - ",(0,n.jsx)(s.code,{children:"A"})]}),"\n"]}),"\n",(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{style:{display:"inline-block",marginRight:"20px"},children:(0,n.jsxs)("table",{children:[(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"V1 Message Architecture"})}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Call Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Time Taken ( ms )"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"A - Avg of 10 Msg"}),(0,n.jsx)("td",{children:"854"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"A - Avg of 50 Msg"}),(0,n.jsx)("td",{children:"841"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"A - Avg of 100 Msg"}),(0,n.jsx)("td",{children:"820"})]})]})}),(0,n.jsx)("div",{style:{display:"inline-block"},children:(0,n.jsxs)("table",{children:[(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colspan:"2",children:"V2 Message Architecture"})}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Call Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Time Taken ( ms )"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"A - Avg of 10 Msg"}),(0,n.jsx)("td",{children:"823"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"A - Avg of 50 Msg"}),(0,n.jsx)("td",{children:"856"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"A - Avg of 100 Msg"}),(0,n.jsx)("td",{children:"832"})]})]})})]})]})}function x(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},457412:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/cover-image-dcdb2b80c6fc316614203ff627f1a1a9.webp"},240835:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/cover-image-dcdb2b80c6fc316614203ff627f1a1a9.webp"},28453:(e,s,i)=>{i.d(s,{R:()=>h,x:()=>l});var n=i(296540);const r={},t=n.createContext(r);function h(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:h(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);