const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Belimpex GDS",
  tagline:
    "Software Documentation designed to get technical and non-technical employees started with the Tissue Manufacturing Solution and Access Control System.",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Boulos", // Usually your GitHub org/user name.
  projectName: "Boulos Documentation", // Usually your repo name.
  themeConfig: {
    navbar: {
      
      logo: {
        alt: '',
        src: 'img/favicon.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Menu',
        },

        {to: 'https://boulos.ng', label: 'Boulos', position: 'left'},
        {
          href: 'https://github.com/BigDevTemy/boulos_documentation',
          label: 'GitHub',
          position: 'left',

        },
        
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Belimpex Global Data System`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
