"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[67131],{72336:e=>{e.exports=JSON.parse('{"title":"Boosting DAO Infrastructure and Operations tooling by leveraging EPNS as the Communication Layer","description":"Boosting DAO Infrastructure and Operations tooling by leveraging EPNS as the Communication Layer","frontMatter":{"slug":"boosting-dao-infrastructure","title":"Boosting DAO Infrastructure and Operations tooling by leveraging EPNS as the Communication Layer","description":"Boosting DAO Infrastructure and Operations tooling by leveraging EPNS as the Communication Layer","authors":["push"],"image":"./cover-image.webp","text":"EPNS and Genesis Shards collaborate to bring decentralized push notifications to the platform","tags":["Defi","Ethereum","Blockchain","Epnsproject"]},"content":{"id":"boosting-dao-infrastructure","metadata":{"permalink":"/push-website/pr-preview/pr-858/blog/boosting-dao-infrastructure","source":"@site/blog/2022-05-18-boosting-dao-infrastructure/index.md","title":"Boosting DAO Infrastructure and Operations tooling by leveraging EPNS as the Communication Layer","description":"Boosting DAO Infrastructure and Operations tooling by leveraging EPNS as the Communication Layer","date":"2022-05-18T00:00:00.000Z","formattedDate":"May 18, 2022","tags":[{"label":"Defi","permalink":"/push-website/pr-preview/pr-858/blog/tags/defi"},{"label":"Ethereum","permalink":"/push-website/pr-preview/pr-858/blog/tags/ethereum"},{"label":"Blockchain","permalink":"/push-website/pr-preview/pr-858/blog/tags/blockchain"},{"label":"Epnsproject","permalink":"/push-website/pr-preview/pr-858/blog/tags/epnsproject"}],"readingTime":5.03,"hasTruncateMarker":true,"authors":[{"name":"Push Protocol","url":"https://twitter.com/pushprotocol","imageURL":"/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"boosting-dao-infrastructure","title":"Boosting DAO Infrastructure and Operations tooling by leveraging EPNS as the Communication Layer","description":"Boosting DAO Infrastructure and Operations tooling by leveraging EPNS as the Communication Layer","authors":["push"],"image":"./cover-image.webp","text":"EPNS and Genesis Shards collaborate to bring decentralized push notifications to the platform","tags":["Defi","Ethereum","Blockchain","Epnsproject"]},"unlisted":false,"prevItem":{"title":"EPNS and Hermes DeFi Form An Alliance to Enable Seamless Communication for Users","permalink":"/push-website/pr-preview/pr-858/blog/epns-and-hermes"},"nextItem":{"title":"EPNS and Genesis Shards Join Forces to Bring Push Notifications to Users","permalink":"/push-website/pr-preview/pr-858/blog/epns-and-genesis-shards"}},"content":"import { ImageText } from \'@site/src/css/SharedStyling\';\\n\\n![Cover image of Boosting DAO Infrastructure and Operations tooling by leveraging EPNS as the Communication Layer](./cover-image.webp)\\n\\n\x3c!--truncate--\x3e\\n\\n<b>[DAOs (Decentralized Autonomous Organisations)]</b> are one of the fastest-growing verticals in the Web3 space this year. According to a [report by Kraken](https://kraken.docsend.com/view/kfzxp6qqaqnqyue6), as of February 2022, there are at least 188 DAOs controlling over $12 billion in assets. With such a mammoth amount of funds in DAO treasuries, there is also an overwhelming increase in the importance and management of DAO operations, as proven by the numbers (6.8K Snapshot spaces, 700K+ governance token holders). This opens up a door to build and create value in all the operational wings of this new era of digitally-native internet collective organizations.\\n\\nAlthough there is an increase in demand for robust DAO tooling, most of the space is still budding and isn\u2019t as streamlined as one would hope for it to be. EPNS aims to solve one of the significant challenges faced by DAO operations \u2014 <b>communication.</b>\\n\\nThe communication layer in web3 is often overlooked by many, even in DAOs. This eventually leads to slower workflows, inefficient processes, etc. among members, and often leads to going back to the reliance on centralized web2 services for communication such as Twitter and Discord.\\n\\n### What is a DAO?\\n\\nA DAO is an internet-native collective that comes together for a common purpose. They have a lower barrier to entry to coordinate assets and ideas compared to traditional organizations and they have no single person or group that controls the decisions of the entity\u2019s operations.\\n\\nAlthough there are many types of DAOs out there these days, most of them fall under the following categories: to build products (<a class=\\"af no\\" href=\\"https://yearn.finance/\\" rel=\\"noopener ugc nofollow\\" target=\\"_blank\\">yearn</a>, <a class=\\"af no\\" href=\\"https://sushi.com/\\" rel=\\"noopener ugc nofollow\\" target=\\"_blank\\">Sushi</a>), to invest (<a class=\\"af no\\" href=\\"https://www.thelao.io/\\" rel=\\"noopener ugc nofollow\\" target=\\"_blank\\">The LAO</a>, <a class=\\"af no\\" href=\\"https://metacartel.xyz/\\" rel=\\"noopener ugc nofollow\\" target=\\"_blank\\">MetaCartel Ventures</a>, <a class=\\"af no\\" href=\\"https://www.bitdao.io/\\" rel=\\"noopener ugc nofollow\\" target=\\"_blank\\">BitDAO</a>), to collect NFTs (<a class=\\"af no\\" href=\\"https://flamingodao.xyz/\\" rel=\\"noopener ugc nofollow\\" target=\\"_blank\\">FlamingoDAO</a>, <a class=\\"af no\\" href=\\"https://pleasr.org/\\" rel=\\"noopener ugc nofollow\\" target=\\"_blank\\">PleasrDAO</a>), Protocol DAOS (<a class=\\"af no\\" href=\\"https://makerdao.com/en/\\" rel=\\"noopener ugc nofollow\\" target=\\"_blank\\">Maker</a>, <a class=\\"af no\\" href=\\"https://compound.finance/\\" rel=\\"noopener ugc nofollow\\" target=\\"_blank\\">Compound</a>, <a class=\\"af no\\" href=\\"https://uniswap.org/\\" rel=\\"noopener ugc nofollow\\" target=\\"_blank\\">UniSwap</a>, <a class=\\"af no\\" href=\\"https://aave.com/\\" rel=\\"noopener ugc nofollow\\" target=\\"_blank\\">Aave</a> &amp; <a class=\\"af no\\" href=\\"https://epns.io/\\" rel=\\"noopener ugc nofollow\\" target=\\"_blank\\">EPNS</a> too), DAO Operating Systems( <a class=\\"af no\\" href=\\"https://aragon.org/\\" rel=\\"noopener ugc nofollow\\" target=\\"_blank\\">Aragon</a>, <a class=\\"af no\\" href=\\"https://daostack.io/\\" rel=\\"noopener ugc nofollow\\" target=\\"_blank\\">DAOStack</a>, <a class=\\"af no\\" href=\\"https://www.orcaprotocol.org/\\" rel=\\"noopener ugc nofollow\\" target=\\"_blank\\">Orca</a>), Social DAOs (<a class=\\"af no\\" href=\\"https://radicle.xyz/\\" rel=\\"noopener ugc nofollow\\" target=\\"_blank\\">Radicle</a>, <a class=\\"af no\\" href=\\"https://www.seedclub.xyz/\\" rel=\\"noopener ugc nofollow\\" target=\\"_blank\\">Seed Club</a>, <a class=\\"af no\\" href=\\"https://www.fwb.help/\\" rel=\\"noopener ugc nofollow\\" target=\\"_blank\\">FWB</a>) or to provide services (<a class=\\"af no\\" href=\\"https://www.raidguild.org/\\" rel=\\"noopener ugc nofollow\\" target=\\"_blank\\">RaidGuild</a>, <a class=\\"af no\\" href=\\"https://www.lexdao.coop/\\" rel=\\"noopener ugc nofollow\\" target=\\"_blank\\">LexDAO</a>, <a class=\\"af no\\" href=\\"https://www.metafactory.ai/\\" rel=\\"noopener ugc nofollow\\" target=\\"_blank\\">Metafactory</a>).\\n\\n### Solving Challenges in DAO Ops\\n\\nNo matter the sector these DAOs are focusing on, operations & communication are a mammoth task when you have thousands of members scattered across the globe. EPNS solves some of the major challenges in communications faced by DAOs through its decentralized web3 communication layer. Let us explore some of the possible use cases below.\\n\\n#### Contribution Management:\\n\\nDAOs have contributors who contribute to the DAO in various degrees. The journey of a contributor is hard to track and navigate. For a new member, this journey would be to navigate through the DAO and find a task they can assign themselves and make their first contribution to the DAO.\\n\\nBounties and Quests act as bite-sized tasks that members can tackle to \u201clevel up\u201d in the DAO. Yearn has a [dashboard that aggregates open issues](https://contribute.yearn.rocks/) across their repositories, Polygon Ecosystem DAO [posts bounties and tasks](https://app.dework.xyz/0xpolygon-ecosystem/overview) for members to pick up to help promote the Polygon Ecosystem. These act as great ways to aggregate the tasks at hand, but disseminating that information among members is also equally important.\\n\\nFor DAOs that measure contributor engagement as a KPI for the value one brings to it, it is important to surface the right information (tasks, bounties, etc.) to the right people at the right time.\\n\\nThe state of communication in DAOs is reliant on platforms like Discord, whenever a new task or bounty is generated, it\u2019s pushed to Discord as a message which could just get lost like a needle in a haystack. This is not an ideal form of communication that could be achieved by DAOs, much more can be done.\\n\\nEPNS can act as the communication layer that proves to be vital for giving real-time updates and notifications to DAO members when a bounty is added, updated, or completed. This allows members to stay updated on all things DAO-related, and also be able to jump onto tasks that they see fit. This reduces any sort of confusion and helps in matching the right kind of people to the right kind of jobs, hence increasing DAO productivity tenfold.\\n\\n#### Payroll Processing & Compensation:\\n\\nOnce bounties or quests are completed, then comes the need to get paid for one\u2019s efforts. Different DAOs have different payment structures and mechanisms, there may be some bounty completers, some who are kept on recurring salary by the DAO, etc. No matter the payment structure for the members of a DAO, it is important for members to know when their payroll has been processed.\\n\\nOften we see DAOs processing the payments and having to either individually message each member that it has been processed, or not mention it at all.\\n\\nWith EPNS, DAOs can easily notify contributors about the status of their compensation, and contributors can immediately know when their efforts have been reimbursed. No more emails, or DMs that say \u201cYour compensation has been processed\u201d. Get a notification right at your fingertips that say \u201cCha-Ching! your DAO has sent you $$$ for your contributions!\u201d\\n\\n#### Decision Making & Treasury Management:\\n\\nAnother area that is tightly coupled with the above 2 points is DAO decision making & treasury management. A DAO thrives on its treasury \u2014 without it, the DAO cannot function. Proposals are created to decide on how the funds in the treasury are used to help the DAO grow and achieve its goals while members debate and vote on them. Tools like Snapshot are used for off-chain signature-based voting, while signaling is usually done on platforms like Discord or Governance Forums.\\n\\nHowever, there is usually a disparity between the number of active voters and the number of members in the DAO. This, coupled with the challenges of DAO treasury management such as transparency and insights into asset allocation and spending to assess performance and financial health, causes general confusion about the state of the DAO and limits its growth.\\n\\nIt is often hard for members to keep track of active proposals and new proposals that are proposed in the DAO on a regular basis, most DAOs expect their members to be actively involved in the Discord or check their Snapshot page for new proposals. This is not always easy for all members, and hence there needs to be a better way to communicate with members regarding this.\\n\\nEPNS can send notifications right at the fingertips of DAO members whenever there is a new proposal or there is new activity on an existing proposal. Members can stay updated easily about the state of the DAO and be more actively involved in the decision-making process of it. This reduces voter apathy and increases voter turnout, hence increasing decentralization in terms of governance.\\n\\nAs decisions are made, DAOs need to manage finances in their treasury \u2014 allocating funds to initiatives, giving away grants, compensating working groups, etc. However, there are challenges to this as well. There need to be more transparent insights into the overall financial health of the DAO and members of the DAO need to be aware of the actions taken by the treasury each time. Communication regarding treasury inflows, and outflows, and linking it to proposal spending, needs to be communicated well to the members of the DAO so they can make educated decisions when voting on certain crucial proposals. Communication of KPIs of a DAO is crucial for its members to feel safe and important within that community.\\n\\nEPNS helps in communicating these insights with members on a timely basis. Giving members a regular bird\u2019s eye view of the state of the DAO at a particular time.\\n\\nWe are still at the dawn of the emergence of DAOs, many are still figuring out best practices, standards, and processes that work for coordinating a decentralized internet-native community all over the world to build, invest, and create amazing things. Just like how DeFi and NFTs entered the mainstream world, DAOs are soon to follow, and the new era of digital collectives will be here to stay.\\n\\nDAO operations and communication tooling is getting better each day, and we are glad to have become a fundamental building block for the Web3 space that can help DAOs communicate effectively with their members and grow exponentially, by lowering the barriers and increasing user experience."}}')}}]);