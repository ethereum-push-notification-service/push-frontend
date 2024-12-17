"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[1499],{639030:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var r=s(474848),t=s(28453);const i={slug:"parallel-validators-and-dynamic-sharding",title:"Benchmarking Push Chain : Scaling with Validator Nodes",authors:["push"],image:"./cover-image.webp",description:"Benchmarking Push Chain : Scaling with Validator Nodes",text:"The Push Chain Network, a Proof-of-Stake (PoS) blockchain designed for consumer-centric applications, offers an innovative approach to scalability and usability in the decentralized space. By leveraging features like dynamic sharding, parallel block execution, and true scale, Push Chain promises a seamless environment for universal applications.",tags:["Push Chain","Push Chain Benchmark","Parallel Validators","Dynamic Sharding"]},o=void 0,d={permalink:"/push-website/pr-preview/pr-951/blog/parallel-validators-and-dynamic-sharding",source:"@site/blog/2024-12-09-parallel-validators-and-dynamic-sharding/index.md",title:"Benchmarking Push Chain : Scaling with Validator Nodes",description:"Benchmarking Push Chain : Scaling with Validator Nodes",date:"2024-12-09T00:00:00.000Z",formattedDate:"December 9, 2024",tags:[{label:"Push Chain",permalink:"/push-website/pr-preview/pr-951/blog/tags/push-chain"},{label:"Push Chain Benchmark",permalink:"/push-website/pr-preview/pr-951/blog/tags/push-chain-benchmark"},{label:"Parallel Validators",permalink:"/push-website/pr-preview/pr-951/blog/tags/parallel-validators"},{label:"Dynamic Sharding",permalink:"/push-website/pr-preview/pr-951/blog/tags/dynamic-sharding"}],readingTime:7.626666666666667,hasTruncateMarker:!0,authors:[{name:"Push Protocol",url:"https://twitter.com/pushprotocol",imageURL:"/assets/blog/authors/authorpush.png",key:"push"}],frontMatter:{slug:"parallel-validators-and-dynamic-sharding",title:"Benchmarking Push Chain : Scaling with Validator Nodes",authors:["push"],image:"./cover-image.webp",description:"Benchmarking Push Chain : Scaling with Validator Nodes",text:"The Push Chain Network, a Proof-of-Stake (PoS) blockchain designed for consumer-centric applications, offers an innovative approach to scalability and usability in the decentralized space. By leveraging features like dynamic sharding, parallel block execution, and true scale, Push Chain promises a seamless environment for universal applications.",tags:["Push Chain","Push Chain Benchmark","Parallel Validators","Dynamic Sharding"]},unlisted:!1,prevItem:{title:"Push Chain\u2019s Frequently Asked Questions",permalink:"/push-website/pr-preview/pr-951/blog/faq-push-chain"},nextItem:{title:"\ud83d\udc4b Randomized Parallel Validators of Push Chain",permalink:"/push-website/pr-preview/pr-951/blog/randomized-node-selection-push-chain"}},a={image:s(755456).A,authorsImageUrls:[void 0]},l=[{value:"Introduction",id:"introduction",level:2},{value:"Node Types and Roles",id:"node-types-and-roles",level:2},{value:"Benchmarking Setup",id:"benchmarking-setup",level:2},{value:"Environment Configurations",id:"environment-configurations",level:3},{value:"Benchmark Results",id:"benchmark-results",level:2},{value:"1. Ping Validator Test",id:"1-ping-validator-test",level:3},{value:"2. Get Token Validator Test",id:"2-get-token-validator-test",level:3},{value:"3. Send Transactions to Validator Test",id:"3-send-transactions-to-validator-test",level:3},{value:"4. Get Transactions Test",id:"4-get-transactions-test",level:3},{value:"5. Get Push ID Info Test",id:"5-get-push-id-info-test",level:3},{value:"<strong>Conclusions</strong>",id:"conclusions",level:2}];function h(e){const n={blockquote:"blockquote",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Cover Image of Benchmarking Push Chain : Scaling with Validator Nodes",src:s(169993).A+"",width:"1600",height:"900"})}),"\n",(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(n.p,{children:"The Push Chain Network, a Proof-of-Stake (PoS) blockchain designed for consumer-centric applications, offers an innovative approach to scalability and usability in the decentralized space. By leveraging features like dynamic sharding, parallel block execution, and true scale, Push Chain promises a seamless environment for universal applications. This blog explores the benchmarking results of Push Chain under varying node configurations, providing insights into how the network behaves and scales as the number of nodes increases."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"node-types-and-roles",children:"Node Types and Roles"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Validator Nodes:"})," Responsible for handling transaction validation and serving as the primary interface for client interactions."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Storage Nodes:"})," Tasked with storing validated transactions in a sharded manner for optimized data access and storage efficiency."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Archival Nodes:"})," Maintain a comprehensive record of all network transactions, enabling historical data access and providing support for applications like blockchain explorers."]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\ud83d\udca1 Note: While the roles described above provide a high-level overview, nodes in the Push Chain Network perform significantly more complex tasks, including dynamic sharding, transaction propagation, and ensuring data consistency across the network."}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"benchmarking-setup",children:"Benchmarking Setup"}),"\n",(0,r.jsx)(n.p,{children:"The benchmarking tests were conducted in controlled environments with different node configurations:"}),"\n",(0,r.jsx)(n.h3,{id:"environment-configurations",children:"Environment Configurations"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Configuration 1"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"5 Validator Nodes"}),", ",(0,r.jsx)(n.strong,{children:"8 Storage Nodes"}),", ",(0,r.jsx)(n.strong,{children:"5 Archival Nodes"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"2 CPU cores"})," allocated."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Configuration 2"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"10 Validator Nodes"}),", ",(0,r.jsx)(n.strong,{children:"8 Storage Nodes"}),", ",(0,r.jsx)(n.strong,{children:"5 Archival Nodes"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"4 CPU cores"})," allocated."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Configuration 3"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"20 Validator Nodes"}),", ",(0,r.jsx)(n.strong,{children:"8 Storage Nodes"}),", ",(0,r.jsx)(n.strong,{children:"5 Archival Nodes"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"8 CPU cores"})," allocated."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The benchmarks primarily evaluate the performance of the ",(0,r.jsx)(n.strong,{children:"validator nodes"}),", which serve as the gateway for client interactions. However, since validator nodes interact with storage nodes and archival nodes internally, the results effectively reflect the performance of the entire network."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u26a1 ",(0,r.jsx)(n.strong,{children:"Note on"})," ",(0,r.jsx)(n.strong,{children:"Controlled Environment:"})," All of these benchmarks were performed in a controlled internal network environment. As a result, any network lags or latency typically observed in real-world public networks were kept to a minimum, ensuring that the results reflect the network\u2019s inherent capabilities rather than external factors. This setup allows for more accurate measurement of the Push Chain Network\u2019s performance under varying configurations without the interference of significant network delays."]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\ud83d\udcca ",(0,r.jsx)(n.strong,{children:"Note on CPU Scaling:"})," In order to simulate a decentralized network more realistically, the number of CPU cores allocated scales proportionally with the number of nodes. For instance, 2 CPU cores are allocated for 5 validator nodes, 4 CPU cores for 10 nodes, and 8 CPU cores for 20 nodes. This approach mirrors how resources would likely be distributed in a decentralized system, where each node operator contributes computational resources to the network."]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u2699\ufe0f ",(0,r.jsx)(n.strong,{children:"Note on Node Configuration:"})," For simplicity and consistency, the number of ",(0,r.jsx)(n.strong,{children:"Storage Nodes"})," and ",(0,r.jsx)(n.strong,{children:"Archival Nodes"})," is kept constant at ",(0,r.jsx)(n.strong,{children:"8"})," and ",(0,r.jsx)(n.strong,{children:"5"}),", respectively, across all configurations. This ensures that the focus remains on evaluating the performance of the ",(0,r.jsx)(n.strong,{children:"Validator Nodes"})," and their interactions with the network, without introducing additional variables."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The benchmarks primarily evaluate the performance of the ",(0,r.jsx)(n.strong,{children:"validator nodes"}),", which serve as the gateway for client interactions. However, since validator nodes interact with storage nodes and archival nodes internally, the results effectively reflect the performance of the entire network."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"benchmark-results",children:"Benchmark Results"}),"\n",(0,r.jsxs)(n.p,{children:["The following tests were conducted to measure the performance of the Push Chain Network under varying configurations, focusing on the behavior of ",(0,r.jsx)(n.strong,{children:"validator nodes"})," as the number of nodes increases. Each test was performed using multiple parallel threads, simulating real-world scenarios where multiple users interact with the network simultaneously."]}),"\n",(0,r.jsx)(n.h3,{id:"1-ping-validator-test",children:"1. Ping Validator Test"}),"\n",(0,r.jsx)(n.p,{children:"This test measures the round-trip time taken by multiple threads to select and ping a random validator node, simulating basic connectivity under increasing load."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Threads"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Configuration 1"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Configuration 2"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Configuration 3"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10"}),(0,r.jsx)(n.td,{children:"21.72 ms"}),(0,r.jsx)(n.td,{children:"27.96 ms"}),(0,r.jsx)(n.td,{children:"26.43 ms"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"50"}),(0,r.jsx)(n.td,{children:"296.98 ms"}),(0,r.jsx)(n.td,{children:"94.45 ms"}),(0,r.jsx)(n.td,{children:"124.54 ms"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"100"}),(0,r.jsx)(n.td,{children:"371.32 ms"}),(0,r.jsx)(n.td,{children:"137.20 ms"}),(0,r.jsx)(n.td,{children:"151.44 ms"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"250"}),(0,r.jsx)(n.td,{children:"396.70 ms"}),(0,r.jsx)(n.td,{children:"232.06 ms"}),(0,r.jsx)(n.td,{children:"209.23 ms"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"500"}),(0,r.jsx)(n.td,{children:"497.69 ms"}),(0,r.jsx)(n.td,{children:"342.74 ms"}),(0,r.jsx)(n.td,{children:"287.24 ms"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1000"}),(0,r.jsx)(n.td,{children:"785.19 ms"}),(0,r.jsx)(n.td,{children:"705.11 ms"}),(0,r.jsx)(n.td,{children:"545.10 ms"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2000"}),(0,r.jsx)(n.td,{children:"1498.14 ms"}),(0,r.jsx)(n.td,{children:"1245.16 ms"}),(0,r.jsx)(n.td,{children:"1085.70 ms"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"5000"}),(0,r.jsx)(n.td,{children:"5608.33 ms"}),(0,r.jsx)(n.td,{children:"3637.42 ms"}),(0,r.jsx)(n.td,{children:"3297.24 ms"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10000"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Errored Out"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Errored Out"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Errored Out"})})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Observations:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["As the number of validator nodes increases, the network handles higher traffic more efficiently, as seen in ",(0,r.jsx)(n.strong,{children:"Configuration 3"}),", which consistently shows the lowest response times across all thread counts."]}),"\n",(0,r.jsx)(n.li,{children:"Traffic is split among more validator nodes in configurations with higher node counts, reducing the load on individual nodes and improving overall response times."}),"\n",(0,r.jsxs)(n.li,{children:["At ",(0,r.jsx)(n.strong,{children:"10,000 threads"}),", all configurations errored out, indicating the upper limit of the network under the current setup. However, ",(0,r.jsx)(n.strong,{children:"Configuration 3"})," demonstrated the highest capacity before encountering errors, highlighting the benefits of increased validator nodes for scalability."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"2-get-token-validator-test",children:"2. Get Token Validator Test"}),"\n",(0,r.jsx)(n.p,{children:"This test measures the time taken for multiple threads to request an access token from a random validator node. Access tokens are essential for sending transactions and performing other write operations on the network."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Threads"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Configuration 1"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Configuration 2"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Configuration 3"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10"}),(0,r.jsx)(n.td,{children:"250.46 ms"}),(0,r.jsx)(n.td,{children:"253.37 ms"}),(0,r.jsx)(n.td,{children:"170.53 ms"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"50"}),(0,r.jsx)(n.td,{children:"969.38 ms"}),(0,r.jsx)(n.td,{children:"855.97 ms"}),(0,r.jsx)(n.td,{children:"427.89 ms"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"100"}),(0,r.jsx)(n.td,{children:"1540.05 ms"}),(0,r.jsx)(n.td,{children:"1294.32 ms"}),(0,r.jsx)(n.td,{children:"638.69 ms"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"250"}),(0,r.jsx)(n.td,{children:"2855.72 ms"}),(0,r.jsx)(n.td,{children:"2108.26 ms"}),(0,r.jsx)(n.td,{children:"1325.33 ms"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"500"}),(0,r.jsx)(n.td,{children:"4869.79 ms"}),(0,r.jsx)(n.td,{children:"3645.61 ms"}),(0,r.jsx)(n.td,{children:"3033.06 ms"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1000"}),(0,r.jsx)(n.td,{children:"7850.41 ms"}),(0,r.jsx)(n.td,{children:"6541.31 ms"}),(0,r.jsx)(n.td,{children:"5036.91 ms"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2000"}),(0,r.jsx)(n.td,{children:"21562.69 ms"}),(0,r.jsx)(n.td,{children:"12378.07 ms"}),(0,r.jsx)(n.td,{children:"7839.82 ms"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"5000"}),(0,r.jsx)(n.td,{children:"62539.38 ms"}),(0,r.jsx)(n.td,{children:"37642.91 ms"}),(0,r.jsx)(n.td,{children:"22250.88 ms"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10000"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Errored Out"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Errored Out"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Errored Out"})})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Observations:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["As the number of validator nodes increases, the network demonstrates significantly improved performance under higher thread counts. ",(0,r.jsx)(n.strong,{children:"Configuration 3"})," consistently shows the lowest response times, benefiting from better load distribution."]}),"\n",(0,r.jsxs)(n.li,{children:["At lower thread counts (e.g., 10 or 50), the differences between configurations are minimal since the traffic does not fully utilize the network's capacity. However, at higher thread counts (e.g., 500 or more), ",(0,r.jsx)(n.strong,{children:"Configuration 3"})," outperforms the others due to its ability to handle a higher volume of concurrent requests."]}),"\n",(0,r.jsxs)(n.li,{children:["At ",(0,r.jsx)(n.strong,{children:"10,000 threads"}),", all configurations errored out, indicating the network\u2019s throughput limit under the current setup. However, ",(0,r.jsx)(n.strong,{children:"Configuration 3"})," reached significantly higher performance thresholds before encountering errors."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"3-send-transactions-to-validator-test",children:"3. Send Transactions to Validator Test"}),"\n",(0,r.jsx)(n.p,{children:"This test measures the time taken for multiple threads to send transactions to validator nodes. Each transaction submission involves the following steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Retrieving an ",(0,r.jsx)(n.strong,{children:"access token"})," from a validator node."]}),"\n",(0,r.jsxs)(n.li,{children:["Sending the transaction as an ",(0,r.jsx)(n.strong,{children:"RPC request"})," to the validator node using the retrieved token."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Additionally, each transaction validation requires attestations from a subset of validator nodes."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\ud83d\udd17 Note on Attestations: Each transaction validation includes attestations from N validator nodes, where N is a dynamic variable. For this test, N was kept constant at 4 to ensure consistent results."}),"\n"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Threads"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Configuration 1"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Configuration 2"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Configuration 3"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10"}),(0,r.jsx)(n.td,{children:"1052.11 ms"}),(0,r.jsx)(n.td,{children:"726.95 ms"}),(0,r.jsx)(n.td,{children:"481.58 ms"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"50"}),(0,r.jsx)(n.td,{children:"7059.86 ms"}),(0,r.jsx)(n.td,{children:"5783.53 ms"}),(0,r.jsx)(n.td,{children:"4866.28 ms"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"100"}),(0,r.jsx)(n.td,{children:"17140.02 ms"}),(0,r.jsx)(n.td,{children:"14252.35 ms"}),(0,r.jsx)(n.td,{children:"10992.26 ms"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"250"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Errored Out"})}),(0,r.jsx)(n.td,{children:"38932.29 ms"}),(0,r.jsx)(n.td,{children:"30432.74 ms"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"500"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Errored Out"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Errored Out"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Errored Out"})})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Observations:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The network\u2019s performance improves with an increasing number of validator nodes, as seen in ",(0,r.jsx)(n.strong,{children:"Configuration 3"}),", which consistently shows the best results under higher thread counts."]}),"\n",(0,r.jsxs)(n.li,{children:["At lower thread counts (e.g., 10 or 50), the differences between configurations are smaller due to minimal load. However, at higher thread counts, ",(0,r.jsx)(n.strong,{children:"Configuration 3"})," handles a significantly larger volume of transactions before encountering errors."]}),"\n",(0,r.jsxs)(n.li,{children:["Errors such as timeouts occurred at ",(0,r.jsx)(n.strong,{children:"250 threads"})," for ",(0,r.jsx)(n.strong,{children:"Configuration 1"})," and ",(0,r.jsx)(n.strong,{children:"500 threads"})," for ",(0,r.jsx)(n.strong,{children:"Configuration 2"}),", highlighting the limits of these setups. ",(0,r.jsx)(n.strong,{children:"Configuration 3"})," demonstrated a higher capacity before reaching its threshold."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"4-get-transactions-test",children:"4. Get Transactions Test"}),"\n",(0,r.jsx)(n.p,{children:"This test measures the time required for threads to retrieve transaction data of a particular blockchain address from validator nodes, simulating a typical query load where users request information about transactions. The process involves the following steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["The validator node determines the ",(0,r.jsx)(n.strong,{children:"shard"})," corresponding to the requested address."]}),"\n",(0,r.jsxs)(n.li,{children:["The validator then identifies the ",(0,r.jsx)(n.strong,{children:"storage nodes"})," responsible for that shard and queries them for the transaction data."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Since the number of storage nodes remains constant across configurations, the performance at higher thread counts is influenced by this dependency."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Threads"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Configuration 1"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Configuration 2"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Configuration 3"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10"}),(0,r.jsx)(n.td,{children:"1727.71 ms"}),(0,r.jsx)(n.td,{children:"949.33 ms"}),(0,r.jsx)(n.td,{children:"1108.42 ms"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"50"}),(0,r.jsx)(n.td,{children:"2893.36 ms"}),(0,r.jsx)(n.td,{children:"2252.80 ms"}),(0,r.jsx)(n.td,{children:"1750.41 ms"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"100"}),(0,r.jsx)(n.td,{children:"4483.29 ms"}),(0,r.jsx)(n.td,{children:"3436.79 ms"}),(0,r.jsx)(n.td,{children:"2884.57 ms"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"250"}),(0,r.jsx)(n.td,{children:"10896.20 ms"}),(0,r.jsx)(n.td,{children:"8963.94 ms"}),(0,r.jsx)(n.td,{children:"8788.58 ms"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"500"}),(0,r.jsx)(n.td,{children:"28982.37 ms"}),(0,r.jsx)(n.td,{children:"15828.90 ms"}),(0,r.jsx)(n.td,{children:"15184.05 ms"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1000"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Errored Out"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Errored Out"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Errored Out"})})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Observations:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["With an increasing number of validator nodes, traffic is distributed more efficiently among the nodes, leading to better response times in ",(0,r.jsx)(n.strong,{children:"Configuration 3"}),", particularly under moderate thread counts (e.g., 50\u2013250)."]}),"\n",(0,r.jsxs)(n.li,{children:["At lower thread counts (e.g., 10 or 50), the performance differences are less pronounced since the network does not experience significant load. However, as thread counts increase, ",(0,r.jsx)(n.strong,{children:"Configuration 3"})," handles requests more effectively due to its ability to distribute load better across a higher number of validator nodes."]}),"\n",(0,r.jsxs)(n.li,{children:["Errors at ",(0,r.jsx)(n.strong,{children:"1000 threads"})," in all configurations highlight the scalability limitations imposed by the constant number of storage nodes. Increasing the number of storage nodes could improve performance at these higher thread counts."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"5-get-push-id-info-test",children:"5. Get Push ID Info Test"}),"\n",(0,r.jsx)(n.p,{children:"This test measures the time required for threads to retrieve Push ID information from validator nodes for a given blockchain address, simulating a typical query load where users request mappings of Push IDs. The process involves the following steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["The validator node identifies the ",(0,r.jsx)(n.strong,{children:"shard"})," corresponding to the requested address or Push ID."]}),"\n",(0,r.jsxs)(n.li,{children:["It then queries the ",(0,r.jsx)(n.strong,{children:"storage nodes"})," responsible for that shard to fetch the required data."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"As with other tests, the number of storage nodes remains constant, which impacts performance at higher thread counts."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Threads"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Configuration 1"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Configuration 2"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Configuration 3"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10"}),(0,r.jsx)(n.td,{children:"1589.68 ms"}),(0,r.jsx)(n.td,{children:"1180.90 ms"}),(0,r.jsx)(n.td,{children:"1062.32 ms"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"50"}),(0,r.jsx)(n.td,{children:"1551.96 ms"}),(0,r.jsx)(n.td,{children:"1924.95 ms"}),(0,r.jsx)(n.td,{children:"1139.00 ms"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"100"}),(0,r.jsx)(n.td,{children:"3168.10 ms"}),(0,r.jsx)(n.td,{children:"2280.93 ms"}),(0,r.jsx)(n.td,{children:"2784.76 ms"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"250"}),(0,r.jsx)(n.td,{children:"6141.76 ms"}),(0,r.jsx)(n.td,{children:"5376.59 ms"}),(0,r.jsx)(n.td,{children:"5170.25 ms"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"500"}),(0,r.jsx)(n.td,{children:"13462.41 ms"}),(0,r.jsx)(n.td,{children:"10437.36 ms"}),(0,r.jsx)(n.td,{children:"8337.95 ms"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1000"}),(0,r.jsx)(n.td,{children:"23817.09 ms"}),(0,r.jsxs)(n.td,{children:["18082.24 ",(0,r.jsx)(n.strong,{children:"ms"})]}),(0,r.jsx)(n.td,{children:"15132.23 ms"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2000"}),(0,r.jsx)(n.td,{children:"59157.55 ms"}),(0,r.jsx)(n.td,{children:"42868.81 ms"}),(0,r.jsx)(n.td,{children:"35978.39 ms"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"5000"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Errored Out"})}),(0,r.jsx)(n.td,{children:"104845.75 ms"}),(0,r.jsx)(n.td,{children:"77467.87 ms"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10000"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Errored Out"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Errored Out"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Errored Out"})})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Observations:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["As the number of validator nodes increases, the load on each individual vnode decreases, improving performance in ",(0,r.jsx)(n.strong,{children:"Configuration 3"}),", especially under moderate thread counts (e.g., 50\u2013500)."]}),"\n",(0,r.jsx)(n.li,{children:"At higher thread counts (e.g., 1000 or more), the dependency on storage nodes becomes the primary bottleneck, leading to errors or significantly increased retrieval times. Increasing the number of storage nodes would help alleviate these limitations at scale."}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Configuration 3"})," consistently shows the best results at all thread counts before errors occur, showcasing the benefits of distributing the load across more validator nodes."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"conclusions",children:(0,r.jsx)(n.strong,{children:"Conclusions"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Scalability:"})," As the number of nodes increased, the Push Chain Network demonstrated significantly improved scalability, particularly in ",(0,r.jsx)(n.strong,{children:"Configuration 3"}),". This configuration exhibited the best performance across most tests, showcasing the network\u2019s ability to scale efficiently without sacrificing speed. The benefits of ",(0,r.jsx)(n.strong,{children:"dynamic sharding"})," ensured that even as the network grew, the system maintained fast response times, handling multiple concurrent threads effectively."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Performance Bottlenecks:"})," While performance remained strong as the node count grew, the network did experience timeouts and errors at higher thread counts. This indicates that, although the system can scale, there are throughput limits at extreme loads. However, ",(0,r.jsx)(n.strong,{children:"Configuration 3"})," was able to handle a larger volume of requests compared to smaller configurations, validating the advantages of scaling up the number of validator nodes. Given that the ",(0,r.jsx)(n.strong,{children:"goal of the Push Chain Network"})," is to scale up to ",(0,r.jsx)(n.strong,{children:"100,000 validator nodes"}),", the throughput limits observed at high thread counts are just the beginning. As the network grows, these limits would become significantly larger, making the network capable of handling a vastly higher volume of requests."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Real-World Application:"})," The results illustrate how the Push Chain Network becomes more scalable as nodes are added, making it a robust solution for future consumer-centric applications where network demands will increase."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"These benchmarks offer valuable insights into the scaling behaviour of the Push Chain Network, demonstrating its readiness to support growing adoption and demanding workloads. Moving forward, continued optimizations in areas like transaction propagation, parallel processing, and sharding will further enhance the network\u2019s performance, enabling it to handle even higher loads."}),"\n",(0,r.jsx)(n.hr,{})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},755456:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/cover-image-6113608a2ad3b73e9016d5eb7c399257.webp"},169993:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/cover-image-6113608a2ad3b73e9016d5eb7c399257.webp"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var r=s(296540);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);