/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  pushChainSidebar: [
    {
      type: 'doc',
      id: 'chain/introduction',
    },
    {
      type: 'doc',
      id: 'chain/docs-chain-quickstart',
    },
    {
      type: 'doc',
      id: 'chain/docs-chain-important-concepts',
    },
  ],

  pushNotificationSidebar: [
    {
      type: 'doc',
      id: 'notifications/notifications',
    },
    {
      type: 'doc',
      id: 'notifications/docs-notifications-quickstart',
    },
    {
      type: 'doc',
      id: 'notifications/docs-notifications-important-concepts',
    },
    {
      type: 'doc',
      id: 'notifications/docs-notifications-supported-wallet-standards',
    },
    {
      type: 'category',
      label: 'Build',
      link: {
        type: 'doc',
        id: 'notifications/docs-notifications-build-section',
      },
      collapsed: false,
      items: [
        { type: 'autogenerated', dirName: 'notifications/01-build' },
        {
          label: 'Build Push Chat',
          type: 'link',
          href: 'https://push.org/docs/chat',
        },
      ],
    },
    {
      type: 'category',
      label: 'UI Components',
      link: {
        type: 'doc',
        id: 'notifications/docs-notifications-ui-components-section',
      },
      collapsed: true,
      items: [
        { type: 'autogenerated', dirName: 'notifications/02-ui-components' },
      ],
    },
    {
      type: 'category',
      label: 'Playground',
      link: {
        type: 'doc',
        id: 'notifications/docs-notifications-playground-section',
      },
      collapsed: true,
      items: [
        { type: 'autogenerated', dirName: 'notifications/03-playground' },
      ],
    },
    {
      type: 'category',
      label: 'Showrunners Scaffold',
      link: {
        type: 'doc',
        id: 'notifications/docs-notifications-showrunners-scaffold-section',
      },
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'notifications/04-showrunners-scaffold',
        },
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      link: {
        type: 'doc',
        id: 'notifications/docs-notifications-tutorials-section',
      },
      collapsed: true,
      items: [{ type: 'autogenerated', dirName: 'notifications/05-tutorials' }],
    },
    {
      type: 'category',
      label: 'Concepts',
      link: {
        type: 'doc',
        id: 'notifications/docs-notifications-concepts-section',
      },
      collapsed: true,
      items: [{ type: 'autogenerated', dirName: 'notifications/06-concepts' }],
    },
    {
      type: 'category',
      label: 'Notification Standards',
      link: {
        type: 'doc',
        id: 'notifications/docs-notifications-notification-standards-section',
      },
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'notifications/07-notification-standards',
        },
      ],
    },
    {
      type: 'category',
      label: 'Push Smart Contracts',
      link: {
        type: 'doc',
        id: 'notifications/docs-notifications-push-smart-contracts-section',
      },
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'notifications/08-push-smart-contracts',
        },
      ],
    },
  ],
  pushChatSidebar: [
    {
      type: 'doc',
      id: 'chat/chat',
    },
    {
      type: 'doc',
      id: 'chat/docs-chat-quickstart',
    },
    {
      type: 'doc',
      id: 'chat/docs-chat-supported-wallet-standards',
    },
    {
      type: 'category',
      label: 'Build',
      link: {
        type: 'doc',
        id: 'chat/docs-chat-build-section',
      },
      collapsed: false,
      items: [
        { type: 'autogenerated', dirName: 'chat/01-build' },
        {
          label: 'Build Push Notfications',
          type: 'link',
          href: 'https://push.org/docs/notifications',
        },
      ],
    },
    {
      type: 'category',
      label: 'Message Types',
      link: {
        type: 'doc',
        id: 'chat/docs-chat-message-types-section',
      },
      collapsed: false,
      items: [{ type: 'autogenerated', dirName: 'chat/02-message-types' }],
    },
    {
      type: 'category',
      label: 'UI Components',
      link: {
        type: 'doc',
        id: 'chat/docs-chat-ui-components-section',
      },
      collapsed: true,
      items: [{ type: 'autogenerated', dirName: 'chat/03-ui-components' }],
    },
    {
      type: 'category',
      label: 'Playground',
      link: {
        type: 'doc',
        id: 'chat/docs-chat-playground-section',
      },
      collapsed: true,
      items: [{ type: 'autogenerated', dirName: 'chat/04-playground' }],
    },
    {
      type: 'category',
      label: 'Concepts',
      link: {
        type: 'doc',
        id: 'chat/docs-chat-concepts-section',
      },
      collapsed: true,
      items: [{ type: 'autogenerated', dirName: 'chat/05-concepts' }],
    },
  ],
  pushVideoSidebar: [
    {
      type: 'doc',
      id: 'video/video',
    },
    {
      type: 'doc',
      id: 'video/docs-video-quickstart',
    },
    {
      type: 'doc',
      id: 'video/docs-video-supported-wallet-standards',
    },
    {
      type: 'category',
      label: 'Build',
      link: {
        type: 'doc',
        id: 'video/docs-video-build-section',
      },
      collapsed: false,
      items: [
        { type: 'autogenerated', dirName: 'video/01-build' },
        {
          label: 'Build Push Notfications',
          type: 'link',
          href: 'https://push.org/docs/notifications',
        },
        {
          label: 'Build Push Chat',
          type: 'link',
          href: 'https://push.org/docs/chat',
        },
      ],
    },
    {
      type: 'category',
      label: 'Playground',
      link: {
        type: 'doc',
        id: 'video/docs-video-playground-section',
      },
      collapsed: true,
      items: [{ type: 'autogenerated', dirName: 'video/02-playground' }],
    },
  ],
  pushDaoSidebar: [
    {
      type: 'doc',
      id: 'dao/docs-dao-introduction-to-push-dao',
    },
    {
      type: 'doc',
      id: 'dao/docs-dao-mission-and-values',
    },
    {
      type: 'category',
      label: 'Governance',
      link: {
        type: 'doc',
        id: 'dao/docs-dao-governance-section',
      },
      collapsed: true,
      items: [{ type: 'autogenerated', dirName: 'dao/01-governance' }],
    },
    {
      type: 'category',
      label: 'Contribute to Push DAO',
      link: {
        type: 'doc',
        id: 'dao/docs-dao-contribute-to-push-dao-section',
      },
      collapsed: true,
      items: [
        { type: 'autogenerated', dirName: 'dao/02-contribute-to-push-dao' },
      ],
    },
  ],
  pushHackersSidebar: [
    {
      type: 'doc',
      id: 'hackers/docs-hackers-get-started',
    },
    {
      type: 'doc',
      id: 'hackers/docs-hackers-cheat-sheet',
    },
    {
      type: 'doc',
      id: 'hackers/docs-build-with-wallet-tracker',
    },
    {
      type: 'category',
      label: 'Push SDK',
      link: {
        type: 'doc',
        id: 'hackers/docs-hackers-push-sdk',
      },
      collapsed: true,
      items: [
        { type: 'autogenerated', dirName: 'hackers/03-Push-SDK' },
        {
          label: 'SDK Starter Kit',
          type: 'link',
          href: 'https://github.com/push-protocol/push-sdk',
        },
        {
          label: 'REST API',
          type: 'link',
          href: 'https://www.npmjs.com/package/@pushprotocol/restapi',
        },
        {
          label: 'React Native',
          type: 'link',
          href: 'https://www.npmjs.com/package/@pushprotocol/react-native-sdk',
        },
        {
          label: 'Socket',
          type: 'link',
          href: 'https://www.npmjs.com/package/@pushprotocol/socket',
        },
        {
          label: 'UIWeb',
          type: 'link',
          href: 'https://www.npmjs.com/package/@pushprotocol/uiweb',
        },
        {
          label: 'UI Embed',
          type: 'link',
          href: 'https://www.npmjs.com/package/@pushprotocol/uiembed',
        },
      ],
    },
    {
      type: 'category',
      label: 'Hackathon Winners',
      link: {
        type: 'doc',
        id: 'hackers/docs-hackers-hackathon-winners',
      },
      collapsed: true,
      items: [
        { type: 'autogenerated', dirName: 'hackers/01-Hackathon-Winners' },
      ],
    },
    {
      type: 'category',
      label: 'Explore More',
      link: {
        type: 'doc',
        id: 'hackers/docs-hackers-explore-more',
      },
      collapsed: false,
      items: [
        { type: 'autogenerated', dirName: 'hackers/05-Explore-More' },
        {
          label: 'Awesome Push Repository',
          type: 'link',
          href: 'https://github.com/push-protocol/awesome-push',
        },
        {
          label: 'Push Grants Program',
          type: 'link',
          href: 'https://pushprotocol.notion.site/Push-Grants-Program-8c9f7934f7e5418faf96e7a5bdcaac4a',
        },
        {
          label: 'Push Missions',
          type: 'link',
          href: 'https://pushprotocol.notion.site/Push-Missions-b38048e307d949aeaf807f40396cc731',
        },
        {
          label: 'Push DAO',
          type: 'link',
          href: 'https://push.org/docs/dao',
        },
        {
          label: 'Push FAQs',
          type: 'link',
          href: 'https://push.org/faq',
        },
      ],
    },
  ],
  pushTokenomicsSidebar: [
    {
      type: 'doc',
      id: 'tokenomics/docs-tokenomics-intro-to-push-protocol',
    },
    {
      type: 'category',
      label: 'Deepdive',
      link: {
        type: 'doc',
        id: 'tokenomics/docs-tokenomics-deepdive-section',
      },
      collapsed: false,
      items: [{ type: 'autogenerated', dirName: 'tokenomics/01-deepdive' }],
    },
  ],
  pushRoadmapSidebar: [
    {
      type: 'doc',
      id: 'roadmap/docs-roadmap-live-roadmap',
    },
    {
      type: 'category',
      label: 'Roadmap Recaps',
      link: {
        type: 'doc',
        id: 'roadmap/docs-roadmap-roadmap-recaps-section',
      },
      collapsed: false,
      items: [
        {
          label: 'Recap 2023',
          type: 'link',
          href: '/blog/push-roadmap-recap-2023/',
        },
        {
          label: 'Recap 2022',
          type: 'link',
          href: '/blog/push-2022-year-in-review/',
        },
        {
          label: 'Recap 2021',
          type: 'link',
          href: '/blog/our-2021-year-in-review/',
        },
      ],
    },
  ],
  pushRewardsSidebar: [
    {
      type: 'doc',
      id: 'rewards/docs-reward-points',
    },
  ],
};

module.exports = sidebars;
