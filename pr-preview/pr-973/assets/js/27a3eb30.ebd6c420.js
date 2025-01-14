"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[46098],{240166:e=>{e.exports=JSON.parse('{"title":"Innovations by Push Chain","description":"Innovations by Push Chain","frontMatter":{"slug":"innovations-by-push-chain","title":"Innovations by Push Chain","authors":["push"],"image":"./cover-image.webp","description":"Innovations by Push Chain","text":"Unlike traditional L1 chains, Push Chain introduces ten key innovations and optimized mechanisms to unify any chain, any user, and any app. This article will help you understand - What Innovations Push Chain brings to Web3! ","tags":["Push Chain","Shared App Experience","Any Chain Tx","Universal Smart Contracts","Shared State Blockchain","Consumer Tx","Parallel Validators","Dynamic Sharding"]},"content":{"id":"innovations-by-push-chain","metadata":{"permalink":"/push-website/pr-preview/pr-973/blog/innovations-by-push-chain","source":"@site/blog/2024-12-20-innovations-by-push-chain/index.md","title":"Innovations by Push Chain","description":"Innovations by Push Chain","date":"2024-12-20T00:00:00.000Z","formattedDate":"December 20, 2024","tags":[{"label":"Push Chain","permalink":"/push-website/pr-preview/pr-973/blog/tags/push-chain"},{"label":"Shared App Experience","permalink":"/push-website/pr-preview/pr-973/blog/tags/shared-app-experience"},{"label":"Any Chain Tx","permalink":"/push-website/pr-preview/pr-973/blog/tags/any-chain-tx"},{"label":"Universal Smart Contracts","permalink":"/push-website/pr-preview/pr-973/blog/tags/universal-smart-contracts"},{"label":"Shared State Blockchain","permalink":"/push-website/pr-preview/pr-973/blog/tags/shared-state-blockchain"},{"label":"Consumer Tx","permalink":"/push-website/pr-preview/pr-973/blog/tags/consumer-tx"},{"label":"Parallel Validators","permalink":"/push-website/pr-preview/pr-973/blog/tags/parallel-validators"},{"label":"Dynamic Sharding","permalink":"/push-website/pr-preview/pr-973/blog/tags/dynamic-sharding"}],"readingTime":7.113333333333333,"hasTruncateMarker":true,"authors":[{"name":"Push Protocol","url":"https://twitter.com/pushprotocol","imageURL":"/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"innovations-by-push-chain","title":"Innovations by Push Chain","authors":["push"],"image":"./cover-image.webp","description":"Innovations by Push Chain","text":"Unlike traditional L1 chains, Push Chain introduces ten key innovations and optimized mechanisms to unify any chain, any user, and any app. This article will help you understand - What Innovations Push Chain brings to Web3! ","tags":["Push Chain","Shared App Experience","Any Chain Tx","Universal Smart Contracts","Shared State Blockchain","Consumer Tx","Parallel Validators","Dynamic Sharding"]},"unlisted":false,"prevItem":{"title":"Push Year In Review 2024","permalink":"/push-website/pr-preview/pr-973/blog/push-year-in-review-2024"},"nextItem":{"title":"Evolution of Push","permalink":"/push-website/pr-preview/pr-973/blog/evolution-of-push"}},"content":"![Cover image of Innovations By Push Chain](./cover-image.webp)\\n\\n\x3c!--truncate--\x3e\\n\\n## Introduction\\n\\nPush recently unveiled its new layer 1 blockchain - Push Chain, a shared state blockchain designed for shared app experiences.\\n\\nUnlike traditional Layer 1 chains, Push Chain introduces ten key innovations and optimized mechanisms to unify any chain, any user, and any app.\\n\\nThis article will help you understand:\\n\\n- What innovations Push Chain brings to web3\\n- How Push Chain enables any user to connect to any app from any chain\\n- How Push Chain is positioned to onboard the first billion users to web3 (for real!)\\n\\n### TLDR;\\n\\n[Push Chain](https://push.org/chain/) is a Proof of Stake shared state blockchain designed to support the development of hyper-scalable, consumer-centric, universal web3 applications by unifying settlement from any L1s, L2s and L3s.\\n\\n\x3c!-- architecture diagram --\x3e\\n\\n![push architecture diagram](./image1.webp)\\n\\nKey Innovations and Superpowers of Push Chain include:\\n\\n\u2192 1. **Blockchain agnostic wallet addresses**\\n\\n\u2192 2. **Support Txns from any chain**\\n\\n\u2192 3. **Fee Abstraction**\\n\\n\u2192 4. **Wallet abstractio**\\n\\n\u2192 5. **Consumer (Unordered) and Traditional (Ordered) Transactions**\\n\\n\u2192 6. **True Scale: Sub Second Finality (speed)**\\n\\n\u2192 7. **True Scale: Parallel validators (scaling write throughput)**\\n\\n\u2192 8. **True Scale: Dynamic Sharding (scaling read throughput)**\\n\\n\u2192 9. **Push ID**\\n\\n\u2192 10. **Universal Smart Contracts and Shared State**\\n\\nLet\u2019s take a closer look at each of these innovations and enhancements\\n\\n## Innovations By Push Chain\\n\\n### 1. Blockchain agnostic wallet addresses\\n\\nFor Apps to support users from any chain and achieve **universal compatibility** - there must be a way to identify, interpret and transact with addresses incoming from various chains.\\n\\nAs a shared-state blockchain, Push Chain is designed to parse and handle blockchain addresses alongside the specific chains they originate from.\\n\\nFor instance, Push Chain can identify and support Solana, EVM, Cosmos and any other chain\u2019s addresses.\\nTo achieve this, Push Chain fully adopts [CAIP-10](https://github.com/ChainAgnostic/CAIPs/blob/main/CAIPs/caip-10.md) blockchain-agnostic wallet addresses, enabling it to deduce the chain, network, and address associated with each transaction ensuring universal compatibility across multiple blockchain ecosystems.\\n\\n### 2. Support Txns from any chain\\n\\nIn addition to parsing addresses across various chains, Push Chain supports transactions from any wallet, regardless of the originating chain\u2014be it Ethereum, Solana, or any other network.\\n\\nPush Chain achieves this by accepting signed payload data and supporting the native signers of individual chains. Validator nodes then verify these signatures \u2192 conduct pre-transaction checks (such as fee validation) \u2192 and then admit the transactions to the network.\\n\\n\x3c!-- Here\u2019s a quick demo of an app that lets you send transactions to Push Chain from any chain of your choice.\\n\\n\\n<video width=\\"640\\" height=\\"360\\" controls>\\n  <source src=\\"./simulate_push_chain.mp4\\" type=\\"video/mp4\\" />\\n\\n</video> --\x3e\\n\\nTo clarify, a user doesn\u2019t have to \u201cbridge\u201d to another chain to use our platform. Instead, the app becomes universal and available to all users of any chain.\\n\\nPush Chain also introduces a new mechanism called **Push ID** to create a consistent and unified interface for users, no matter which wallet they use.\\n\\n**_More on Push ID below..._**\\n\\n### 3. Fee Abstraction\\n\\nWith web3\u2019s progression towards true interoperability, the necessity to hold native tokens for basic interactions creates unnecessary barriers in what should be a borderless ecosystem.\\n\\n**Push Chain\u2019s Fee Abstraction eliminates these digital borders, ensuring universal accessibility and removing the economic friction of owning native tokens for network fees.**\\n\\n- **Onchain Swappers**: Fee contracts on every chain convert native tokens to cover fees automatically\u2014no explicit swaps for Push Chain\u2019s tokens are required.\\n\\n- **Bulk Fee Payments**: Lock and release fees in bulk, then send them to Push Chain directly in the transaction. This removes the bottleneck of waiting on a specific blockchain\u2019s speed.\\n\\n- **Delegated Fees**: Wallets or web3 apps can cover fees, enabling a web2-like UX where the \u201cwebsite\u201d pays for the user.\\n\\nThese mechanisms bridge web2 paradigms into web3 enabling web2 UX in a web3 world -\\n\\n- **Pay-for-content models**: Apps like Facebook and Instagram cover user interaction fees.\\n\\n- **Freemium models**: Apps absorb user costs temporarily, enabling users to later pay in bulk for services after experiencing them for free (e.g., Spotify, Google Drive).\\n\\nPush Chain makes these models possible, creating a frictionless experience and paving the way for building universal apps with borderless shared experiences.\\n\\n### 4. Wallet abstraction\\n\\nAt a higher level, there are two user personas in web3:\\n\\n- **Degens (aka existing web3 users)** - Well accustomed to the fragmented UX, have app & chain specific preferences for every on-chain activity.\\n\\n- **Normies (aka new web3 users)** - New or casual users unfamiliar with web3 complexities - Struggle with the manual and often complicated process of setting up a wallet.\\n\\nWith the rapid proliferation of L1s, L2s and L3s, the UX gap between Degens and Normies is widening, creating a disproportionate balance in user experiences.\\n\\n**Push Chain\u2019s Wallet Abstraction diminishes this divide by creating a balanced ground for every web3 user persona.**\\n\\nWallet abstraction provides a flexible, **embeddable wallet experience**, tailored to individual user journeys enabling any wallet from any chain to connect, interact and transact with Push Chain.\\n\\n**Existing Web3 Users?**\\n\\nAlready using Ethereum, Solana, or another chain? Push Wallet lets you continue using your existing setup\u2014no extra hoops. Combined with fee abstraction, transactions stay native to the source blockchain, making cross-chain use effortless.\\n\\n**New Web3 Users (Web2 Normies)?**\\n\\nNot web3-savvy? No problem. Just log in with an email or social account. Under the hood, the wallet uses sharding and pass keys to stay non-custodial but feels as simple and intuitive as web2.\\n\\n**For users logging in via email or social platforms**, Push Chain ensures security and non-custodial functionality through key sharding. The user\u2019s credentials are divided into three encrypted shards stored across the Push Backend (trusted), local storage (encrypted via a passkey), and Push Chain (also encrypted via a passkey). This approach allows key reconstruction only when accessed by the user, providing a secure yet user-friendly experience that bridges the gap between web2 familiarity and web3 security.\\n\\n### 5. Consumer (Unordered) and Traditional (Ordered) Transactions\\n\\nPresent web3 infra is heavily skewed towards financial apps that require strict ordering of transactions and precise state accuracy.\\nHowever consumer apps, on the other hand, are inclined towards more flexible, faster and parallel transaction needs.\\nConsumer apps are made of two primary elements where:\\n\\n1. _Order is necessary (user payments, financial instruments) and_\\n2. _Order is not critical (messages, comments or likes on a post, retweet, chat, email, gameplay, etc.)._\\n\\nTraditional chains don\u2019t provide the right experience for such use cases forcing consumer apps to make suboptimal compromises impacting their performance and usability.\\n\\n**_Could there be a way of supporting consumer actions in an unordered, parallel and yet decentralised manner?_**\\n\\nAbsolutely yes! This is where **Push Chain innovates a new transaction type - Consumer Transaction**- which instantly unlocks non-financial, mixed-financial apps for web3 helping consumer apps reach faster PMF.\\n\\nManaging hyper-scalable apps with thousands of parallel transactions on-chain - is not easy.\\nPush Chain makes it possible using its new innovation - **True Scale**.\\n\\nWith True Scale, Push Chain\'s network capacity and its read-write throughput grow organically, as more nodes join its consensus.\\nThis enables parallel execution of thousands of consumer transactions, near-instant finality and quicker information storage and retrieval.\\n\\nHere\u2019s how the Push Chain achieves true scale.\\n\\n### 6. True Scale: Sub second finality (speed)\\n\\nPush Chain splits the nodes into three types - **Validator, Storage and Archival** and enables a node governance smart contract that keeps track of all the nodes that are present in the network.\\n\\n- **Validator Nodes** - Responsible for validating transactions.\\n\\n- **Storage Nodes** - Dynamically shard data based on the hash of blockchain-agnostic addresses and store it.\\n\\n- **Archival Nodes** - Maintain a full snapshot of all transactions on the network.\\n\\nThese role-specific nodes enable parallel validation to be done on any type of consumer transaction ensuring near-instant finality.\\n\\n**Note:** All txs (write or read) are attested by random validators/storage nodes ensuring that malicious nodes result in slashing.\\n\\n**Node Registry Smart Contract:** Push Chain employs a registry smart contract to register these nodes, manage dynamic sharding, set replication factors, and enable parallel validators that scale dynamically with the number of nodes in the network. This approach ensures linear scaling, allowing the network to handle increased read and write demands efficiently as it grows.\\n\\nBecause of these different nodes and smart contract setting up parallel validators, the tx sent to the network can land on any of the _\u2018n\u2019_ number of parallel validators which are then instantly moved to processing (250ms block), this is what enables sub-second finality for Push Chain.\\n\\n### 7. True Scale: Parallel validators (scaling write throughput)\\n\\nPush Chain achieves true scaling of write transactions, particularly for consumer transactions, where the consumer txs are packed in unordered blocks (or should we call them **stateless blocks**!? ).\\n\\nAllowing these transactions to be processed through any active validator node promises near-instant finality, and the write throughput (or TPS) of the chain increases linearly as the number of nodes in the network grows.\\n\\n### 8. True Scale: Dynamic Sharding (scaling read throughput)\\n\\n**Push Chain achieves true scaling of reading transactions by implementing dynamic sharding on storage nodes.**\\n\\nData chunks within each shard are mapped to blockchain-agnostic addresses and are dynamically redistributed as new storage nodes are added to the network.\\n\\nIn addition, the chain introduces a node governing smart contract onto which each node (regardless of the type) is registered before getting admitted to the network. Since this node-registry smart contract knows the number of nodes in the network, it is able to dynamically shard and assign data chunks and replication factors ensuring the network is fast and becomes faster in retrieving data as new nodes are added.\\n\\n### 9. Push ID\\n\\nIn a universal chain like Push Chain - One essential element for bringing shared app experiences to users is the ability to track users\u2019 on-chain identity - and not just their wallets.\\n\\nOne user may have multiple wallets, spanning various chains and ecosystems whether EVM or nonEVM.\\nThis led us to create the unified Push ID, giving each user one identity that spans all their wallets, both EVM and non-EVM. Instead of tying interactions strictly to a single wallet, transactions are now accredited to a user\u2019s Push ID.\\n\\nThe Push ID mapping allows for reverse lookups guaranteeing a consistent and unified interface for users, no matter which wallet they use. developers can fetch, index, and understand a user\u2019s full spectrum of interactions across chains, all mapped to one identity.\\n\\n### 10. Shared State and Universal Smart Contracts\\n\\n\x3c!-- shared state diagram --\x3e\\n\\n![shared state diagram](./image2.webp)\\n\\n**Shared State**\\n\\nWith Push ID and Any Chain Tx, we realized that accessing a wallet\u2019s state across different blockchains is a game changer.\\n\\nOne thing that\u2019s missing over here though was the ability to get the individual state of all the wallets which in essence will allow smart contracts to know the entire state of individual wallet(s) that are connected to the user. This feature is what we call a Shared state.\\n\\n**Shared state allows Push Chain to access data from its own chain as well as supported external chains!**\\n\\nWith shared state, you can read wallet activities like NFTs, DeFi positions, governance participation, and so much more!\\n\\n**Universal Smart Contracts**\\n\\nA shared state chain is essential to enable shared app experiences. This chain must have the ability to read the state of wallets across other chains, facilitating universal smart contracts and creating an ecosystem where users from any chain\u2014or even web2\u2014can interact seamlessly. Such a chain would provide shared settlement across both EVM and non-EVM chains, ushering in an era of universal apps and shared experiences.\\n\\nUsing shared state in VM, Push allows developers to write universal smart contracts with which universal app experiences become possible. Users, regardless of their origin\u2014whether from any chain or ecosystem\u2014can effortlessly interact with consumer apps that prioritize user engagement without regard to how or where they enter the system.\\n\\nUltimately, **Universal Smart Contracts and the ability to interact with all chains through Push Chain and represent our ultimate goal: Eliminating Web3 friction and delivering the best shared app experience possible.**\\n\\n## Build Universal Apps!\\n\\nUniversal AI apps, Universal social apps, Unified Prediction markets and many more!\\nWant to know the countless app innovations that you can make happen because of Push Chain?\\nExplore our [Innovations that can be built on Push Chain Blog](https://push.org/blog/consumer-apps-that-can-be-built-on-push-chain/)\\n\\n### Next Steps\u200b\ud83d\udc47\\n\\n- Check out the [Push Chain Whitepaper](https://whitepaper.push.org/?utm_source=pushblog&utm_medium=referral&utm_campaign=pcgov) for a detailed overview of the vision and the underlying technicalities.\\n\\n- Visit the [Push Chain Website](https://push.org/chain/?utm_source=pushblog&utm_medium=referral&utm_campaign=pcgov) to find a one-pager explanation of the vision.\\n\\n- [Push Chain Devnet](https://scan.push.org/home?utm_source=pushblog&utm_medium=referral&utm_campaign=pcgov) is running live on Proof-of-Stake network validators, storage and archival nodes. The network already supports consumer transactions as well.\\n\\n- [Push Chain Simulate Tx](https://simulate.push.org/?utm_source=pushblog&utm_medium=referral&utm_campaign=pcgov) already provides a way for everyone to send tx from any chain using wallet abstraction."}}')}}]);