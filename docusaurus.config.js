// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GriefPrevention',
  tagline: 'The self-service anti-griefing plugin for Minecraft servers since 2011',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://grief-prevention-docs.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GriefPrevention', // Usually your GitHub org/user name.
  projectName: 'GriefPrevention', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'GriefPrevention',
        logo: {
          alt: 'My Site Logo',
          src: 'img/gp-logo-icon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: '/faq',
            label: 'FAQ',
            position: 'left'
          },
          {
            href: 'https://github.com/GriefPrevention/GriefPrevention/releases/',
            label: 'Downloads',
            position: 'right'
          },
          {
            href: 'https://www.spigotmc.org/resources/griefprevention.1884/',
            className: "header-icon-link header-spigot-link",
            position: "right",
          },
          {
            href: 'https://modrinth.com/plugin/griefprevention',
            className: "header-icon-link header-modrinth-link",
            position: "right",
          },
          {
            href: 'https://r.griefprevention.com/dumcord/',
            className: "header-icon-link header-discord-link",
            position: "right",
          },
          {
            href: 'https://github.com/GriefPrevention',
            className: "header-icon-link header-github-link",
            position: "right",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'IRC Chat',
                href: 'https://griefprevention.com/chat/',
              },
              {
                label: 'Discord',
                href: 'https://r.griefprevention.com/dumcord/',
              },
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/GriefPrevention/GriefPrevention/discussions',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'BukkitDev',
                href: 'https://dev.bukkit.org/projects/grief-prevention',
              },
              {
                label: 'Spigot',
                href: 'https://www.spigotmc.org/resources/griefprevention.1884/',
              },
              {
                label: 'Modrinth',
                href: 'https://modrinth.com/plugin/griefprevention',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/GriefPrevention',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GriefPrevention. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
