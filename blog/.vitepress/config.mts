import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FipsDev",
  description: "Personal Blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "CSS", link: "/css" },
      { text: "JS", link: "/js" },
      { text: "HTML", link: "/html" },
    ],

    sidebar: [
      {
        text: "CSS",
        items: [
          {
            text: "Grid",
            link: "/css/grid",
          },
        ],
      },
    ],

    search: {
      provider: "local",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
