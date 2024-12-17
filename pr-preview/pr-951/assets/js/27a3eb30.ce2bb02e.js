"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[46098],{240166:e=>{e.exports=JSON.parse('{"title":"Benchmarking Push Chain : Scaling with Validator Nodes","description":"Benchmarking Push Chain : Scaling with Validator Nodes","frontMatter":{"slug":"parallel-validators-and-dynamic-sharding","title":"Benchmarking Push Chain : Scaling with Validator Nodes","authors":["push"],"image":"./cover-image.webp","description":"Benchmarking Push Chain : Scaling with Validator Nodes","text":"The Push Chain Network, a Proof-of-Stake (PoS) blockchain designed for consumer-centric applications, offers an innovative approach to scalability and usability in the decentralized space. By leveraging features like dynamic sharding, parallel block execution, and true scale, Push Chain promises a seamless environment for universal applications.","tags":["Push Chain","Push Chain Benchmark","Parallel Validators","Dynamic Sharding"]},"content":{"id":"parallel-validators-and-dynamic-sharding","metadata":{"permalink":"/push-website/pr-preview/pr-951/blog/parallel-validators-and-dynamic-sharding","source":"@site/blog/2024-12-09-parallel-validators-and-dynamic-sharding/index.md","title":"Benchmarking Push Chain : Scaling with Validator Nodes","description":"Benchmarking Push Chain : Scaling with Validator Nodes","date":"2024-12-09T00:00:00.000Z","formattedDate":"December 9, 2024","tags":[{"label":"Push Chain","permalink":"/push-website/pr-preview/pr-951/blog/tags/push-chain"},{"label":"Push Chain Benchmark","permalink":"/push-website/pr-preview/pr-951/blog/tags/push-chain-benchmark"},{"label":"Parallel Validators","permalink":"/push-website/pr-preview/pr-951/blog/tags/parallel-validators"},{"label":"Dynamic Sharding","permalink":"/push-website/pr-preview/pr-951/blog/tags/dynamic-sharding"}],"readingTime":7.626666666666667,"hasTruncateMarker":true,"authors":[{"name":"Push Protocol","url":"https://twitter.com/pushprotocol","imageURL":"/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"parallel-validators-and-dynamic-sharding","title":"Benchmarking Push Chain : Scaling with Validator Nodes","authors":["push"],"image":"./cover-image.webp","description":"Benchmarking Push Chain : Scaling with Validator Nodes","text":"The Push Chain Network, a Proof-of-Stake (PoS) blockchain designed for consumer-centric applications, offers an innovative approach to scalability and usability in the decentralized space. By leveraging features like dynamic sharding, parallel block execution, and true scale, Push Chain promises a seamless environment for universal applications.","tags":["Push Chain","Push Chain Benchmark","Parallel Validators","Dynamic Sharding"]},"unlisted":false,"prevItem":{"title":"Push Chain\u2019s Frequently Asked Questions","permalink":"/push-website/pr-preview/pr-951/blog/faq-push-chain"},"nextItem":{"title":"\ud83d\udc4b Randomized Parallel Validators of Push Chain","permalink":"/push-website/pr-preview/pr-951/blog/randomized-node-selection-push-chain"}},"content":"![Cover Image of Benchmarking Push Chain : Scaling with Validator Nodes](./cover-image.webp)\\n\\n\x3c!--truncate--\x3e\\n\\n## Introduction\\n\\nThe Push Chain Network, a Proof-of-Stake (PoS) blockchain designed for consumer-centric applications, offers an innovative approach to scalability and usability in the decentralized space. By leveraging features like dynamic sharding, parallel block execution, and true scale, Push Chain promises a seamless environment for universal applications. This blog explores the benchmarking results of Push Chain under varying node configurations, providing insights into how the network behaves and scales as the number of nodes increases.\\n\\n---\\n\\n## Node Types and Roles\\n\\n- **Validator Nodes:** Responsible for handling transaction validation and serving as the primary interface for client interactions.\\n- **Storage Nodes:** Tasked with storing validated transactions in a sharded manner for optimized data access and storage efficiency.\\n- **Archival Nodes:** Maintain a comprehensive record of all network transactions, enabling historical data access and providing support for applications like blockchain explorers.\\n\\n> \ud83d\udca1 Note: While the roles described above provide a high-level overview, nodes in the Push Chain Network perform significantly more complex tasks, including dynamic sharding, transaction propagation, and ensuring data consistency across the network.\\n\\n---\\n\\n## Benchmarking Setup\\n\\nThe benchmarking tests were conducted in controlled environments with different node configurations:\\n\\n### Environment Configurations\\n\\n1. **Configuration 1**:\\n   - **5 Validator Nodes**, **8 Storage Nodes**, **5 Archival Nodes**.\\n   - **2 CPU cores** allocated.\\n2. **Configuration 2**:\\n   - **10 Validator Nodes**, **8 Storage Nodes**, **5 Archival Nodes**.\\n   - **4 CPU cores** allocated.\\n3. **Configuration 3**:\\n   - **20 Validator Nodes**, **8 Storage Nodes**, **5 Archival Nodes**.\\n   - **8 CPU cores** allocated.\\n\\nThe benchmarks primarily evaluate the performance of the **validator nodes**, which serve as the gateway for client interactions. However, since validator nodes interact with storage nodes and archival nodes internally, the results effectively reflect the performance of the entire network.\\n\\n> \u26a1 **Note on** **Controlled Environment:** All of these benchmarks were performed in a controlled internal network environment. As a result, any network lags or latency typically observed in real-world public networks were kept to a minimum, ensuring that the results reflect the network\u2019s inherent capabilities rather than external factors. This setup allows for more accurate measurement of the Push Chain Network\u2019s performance under varying configurations without the interference of significant network delays.\\n\\n> \ud83d\udcca **Note on CPU Scaling:** In order to simulate a decentralized network more realistically, the number of CPU cores allocated scales proportionally with the number of nodes. For instance, 2 CPU cores are allocated for 5 validator nodes, 4 CPU cores for 10 nodes, and 8 CPU cores for 20 nodes. This approach mirrors how resources would likely be distributed in a decentralized system, where each node operator contributes computational resources to the network.\\n\\n> \u2699\ufe0f **Note on Node Configuration:** For simplicity and consistency, the number of **Storage Nodes** and **Archival Nodes** is kept constant at **8** and **5**, respectively, across all configurations. This ensures that the focus remains on evaluating the performance of the **Validator Nodes** and their interactions with the network, without introducing additional variables.\\n\\nThe benchmarks primarily evaluate the performance of the **validator nodes**, which serve as the gateway for client interactions. However, since validator nodes interact with storage nodes and archival nodes internally, the results effectively reflect the performance of the entire network.\\n\\n---\\n\\n## Benchmark Results\\n\\nThe following tests were conducted to measure the performance of the Push Chain Network under varying configurations, focusing on the behavior of **validator nodes** as the number of nodes increases. Each test was performed using multiple parallel threads, simulating real-world scenarios where multiple users interact with the network simultaneously.\\n\\n### 1. Ping Validator Test\\n\\nThis test measures the round-trip time taken by multiple threads to select and ping a random validator node, simulating basic connectivity under increasing load.\\n\\n| **Threads** | **Configuration 1** | **Configuration 2** | **Configuration 3** |\\n| ----------- | ------------------- | ------------------- | ------------------- |\\n| 10          | 21.72 ms            | 27.96 ms            | 26.43 ms            |\\n| 50          | 296.98 ms           | 94.45 ms            | 124.54 ms           |\\n| 100         | 371.32 ms           | 137.20 ms           | 151.44 ms           |\\n| 250         | 396.70 ms           | 232.06 ms           | 209.23 ms           |\\n| 500         | 497.69 ms           | 342.74 ms           | 287.24 ms           |\\n| 1000        | 785.19 ms           | 705.11 ms           | 545.10 ms           |\\n| 2000        | 1498.14 ms          | 1245.16 ms          | 1085.70 ms          |\\n| 5000        | 5608.33 ms          | 3637.42 ms          | 3297.24 ms          |\\n| 10000       | **Errored Out**     | **Errored Out**     | **Errored Out**     |\\n\\n**Observations:**\\n\\n- As the number of validator nodes increases, the network handles higher traffic more efficiently, as seen in **Configuration 3**, which consistently shows the lowest response times across all thread counts.\\n- Traffic is split among more validator nodes in configurations with higher node counts, reducing the load on individual nodes and improving overall response times.\\n- At **10,000 threads**, all configurations errored out, indicating the upper limit of the network under the current setup. However, **Configuration 3** demonstrated the highest capacity before encountering errors, highlighting the benefits of increased validator nodes for scalability.\\n\\n### 2. Get Token Validator Test\\n\\nThis test measures the time taken for multiple threads to request an access token from a random validator node. Access tokens are essential for sending transactions and performing other write operations on the network.\\n\\n| **Threads** | **Configuration 1** | **Configuration 2** | **Configuration 3** |\\n| ----------- | ------------------- | ------------------- | ------------------- |\\n| 10          | 250.46 ms           | 253.37 ms           | 170.53 ms           |\\n| 50          | 969.38 ms           | 855.97 ms           | 427.89 ms           |\\n| 100         | 1540.05 ms          | 1294.32 ms          | 638.69 ms           |\\n| 250         | 2855.72 ms          | 2108.26 ms          | 1325.33 ms          |\\n| 500         | 4869.79 ms          | 3645.61 ms          | 3033.06 ms          |\\n| 1000        | 7850.41 ms          | 6541.31 ms          | 5036.91 ms          |\\n| 2000        | 21562.69 ms         | 12378.07 ms         | 7839.82 ms          |\\n| 5000        | 62539.38 ms         | 37642.91 ms         | 22250.88 ms         |\\n| 10000       | **Errored Out**     | **Errored Out**     | **Errored Out**     |\\n\\n**Observations:**\\n\\n- As the number of validator nodes increases, the network demonstrates significantly improved performance under higher thread counts. **Configuration 3** consistently shows the lowest response times, benefiting from better load distribution.\\n- At lower thread counts (e.g., 10 or 50), the differences between configurations are minimal since the traffic does not fully utilize the network\'s capacity. However, at higher thread counts (e.g., 500 or more), **Configuration 3** outperforms the others due to its ability to handle a higher volume of concurrent requests.\\n- At **10,000 threads**, all configurations errored out, indicating the network\u2019s throughput limit under the current setup. However, **Configuration 3** reached significantly higher performance thresholds before encountering errors.\\n\\n### 3. Send Transactions to Validator Test\\n\\nThis test measures the time taken for multiple threads to send transactions to validator nodes. Each transaction submission involves the following steps:\\n\\n1. Retrieving an **access token** from a validator node.\\n2. Sending the transaction as an **RPC request** to the validator node using the retrieved token.\\n\\nAdditionally, each transaction validation requires attestations from a subset of validator nodes.\\n\\n> \ud83d\udd17 Note on Attestations: Each transaction validation includes attestations from N validator nodes, where N is a dynamic variable. For this test, N was kept constant at 4 to ensure consistent results.\\n\\n| **Threads** | **Configuration 1** | **Configuration 2** | **Configuration 3** |\\n| ----------- | ------------------- | ------------------- | ------------------- |\\n| 10          | 1052.11 ms          | 726.95 ms           | 481.58 ms           |\\n| 50          | 7059.86 ms          | 5783.53 ms          | 4866.28 ms          |\\n| 100         | 17140.02 ms         | 14252.35 ms         | 10992.26 ms         |\\n| 250         | **Errored Out**     | 38932.29 ms         | 30432.74 ms         |\\n| 500         | **Errored Out**     | **Errored Out**     | **Errored Out**     |\\n\\n**Observations:**\\n\\n- The network\u2019s performance improves with an increasing number of validator nodes, as seen in **Configuration 3**, which consistently shows the best results under higher thread counts.\\n- At lower thread counts (e.g., 10 or 50), the differences between configurations are smaller due to minimal load. However, at higher thread counts, **Configuration 3** handles a significantly larger volume of transactions before encountering errors.\\n- Errors such as timeouts occurred at **250 threads** for **Configuration 1** and **500 threads** for **Configuration 2**, highlighting the limits of these setups. **Configuration 3** demonstrated a higher capacity before reaching its threshold.\\n\\n### 4. Get Transactions Test\\n\\nThis test measures the time required for threads to retrieve transaction data of a particular blockchain address from validator nodes, simulating a typical query load where users request information about transactions. The process involves the following steps:\\n\\n1. The validator node determines the **shard** corresponding to the requested address.\\n2. The validator then identifies the **storage nodes** responsible for that shard and queries them for the transaction data.\\n\\nSince the number of storage nodes remains constant across configurations, the performance at higher thread counts is influenced by this dependency.\\n\\n| **Threads** | **Configuration 1** | **Configuration 2** | **Configuration 3** |\\n| ----------- | ------------------- | ------------------- | ------------------- |\\n| 10          | 1727.71 ms          | 949.33 ms           | 1108.42 ms          |\\n| 50          | 2893.36 ms          | 2252.80 ms          | 1750.41 ms          |\\n| 100         | 4483.29 ms          | 3436.79 ms          | 2884.57 ms          |\\n| 250         | 10896.20 ms         | 8963.94 ms          | 8788.58 ms          |\\n| 500         | 28982.37 ms         | 15828.90 ms         | 15184.05 ms         |\\n| 1000        | **Errored Out**     | **Errored Out**     | **Errored Out**     |\\n\\n**Observations:**\\n\\n- With an increasing number of validator nodes, traffic is distributed more efficiently among the nodes, leading to better response times in **Configuration 3**, particularly under moderate thread counts (e.g., 50\u2013250).\\n- At lower thread counts (e.g., 10 or 50), the performance differences are less pronounced since the network does not experience significant load. However, as thread counts increase, **Configuration 3** handles requests more effectively due to its ability to distribute load better across a higher number of validator nodes.\\n- Errors at **1000 threads** in all configurations highlight the scalability limitations imposed by the constant number of storage nodes. Increasing the number of storage nodes could improve performance at these higher thread counts.\\n\\n### 5. Get Push ID Info Test\\n\\nThis test measures the time required for threads to retrieve Push ID information from validator nodes for a given blockchain address, simulating a typical query load where users request mappings of Push IDs. The process involves the following steps:\\n\\n1. The validator node identifies the **shard** corresponding to the requested address or Push ID.\\n2. It then queries the **storage nodes** responsible for that shard to fetch the required data.\\n\\nAs with other tests, the number of storage nodes remains constant, which impacts performance at higher thread counts.\\n\\n| **Threads** | **Configuration 1** | **Configuration 2** | **Configuration 3** |\\n| ----------- | ------------------- | ------------------- | ------------------- |\\n| 10          | 1589.68 ms          | 1180.90 ms          | 1062.32 ms          |\\n| 50          | 1551.96 ms          | 1924.95 ms          | 1139.00 ms          |\\n| 100         | 3168.10 ms          | 2280.93 ms          | 2784.76 ms          |\\n| 250         | 6141.76 ms          | 5376.59 ms          | 5170.25 ms          |\\n| 500         | 13462.41 ms         | 10437.36 ms         | 8337.95 ms          |\\n| 1000        | 23817.09 ms         | 18082.24 **ms**     | 15132.23 ms         |\\n| 2000        | 59157.55 ms         | 42868.81 ms         | 35978.39 ms         |\\n| 5000        | **Errored Out**     | 104845.75 ms        | 77467.87 ms         |\\n| 10000       | **Errored Out**     | **Errored Out**     | **Errored Out**     |\\n\\n**Observations:**\\n\\n- As the number of validator nodes increases, the load on each individual vnode decreases, improving performance in **Configuration 3**, especially under moderate thread counts (e.g., 50\u2013500).\\n- At higher thread counts (e.g., 1000 or more), the dependency on storage nodes becomes the primary bottleneck, leading to errors or significantly increased retrieval times. Increasing the number of storage nodes would help alleviate these limitations at scale.\\n- **Configuration 3** consistently shows the best results at all thread counts before errors occur, showcasing the benefits of distributing the load across more validator nodes.\\n\\n---\\n\\n## **Conclusions**\\n\\n- **Scalability:** As the number of nodes increased, the Push Chain Network demonstrated significantly improved scalability, particularly in **Configuration 3**. This configuration exhibited the best performance across most tests, showcasing the network\u2019s ability to scale efficiently without sacrificing speed. The benefits of **dynamic sharding** ensured that even as the network grew, the system maintained fast response times, handling multiple concurrent threads effectively.\\n- **Performance Bottlenecks:** While performance remained strong as the node count grew, the network did experience timeouts and errors at higher thread counts. This indicates that, although the system can scale, there are throughput limits at extreme loads. However, **Configuration 3** was able to handle a larger volume of requests compared to smaller configurations, validating the advantages of scaling up the number of validator nodes. Given that the **goal of the Push Chain Network** is to scale up to **100,000 validator nodes**, the throughput limits observed at high thread counts are just the beginning. As the network grows, these limits would become significantly larger, making the network capable of handling a vastly higher volume of requests.\\n- **Real-World Application:** The results illustrate how the Push Chain Network becomes more scalable as nodes are added, making it a robust solution for future consumer-centric applications where network demands will increase.\\n\\nThese benchmarks offer valuable insights into the scaling behaviour of the Push Chain Network, demonstrating its readiness to support growing adoption and demanding workloads. Moving forward, continued optimizations in areas like transaction propagation, parallel processing, and sharding will further enhance the network\u2019s performance, enabling it to handle even higher loads.\\n\\n---"}}')}}]);