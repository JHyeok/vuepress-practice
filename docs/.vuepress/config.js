module.exports = {
  theme:"antdocs",
  title: "VuePress-Practice",
  description: "VuePress project.",
  base: "/",
  head: [
    ["link",{ rel: "icon",href: "/assets/logo.png" }]
  ],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "Last Updated",
    repo: "https://github.com/JHyeok/vuepress-practice",
    editLinks: false,
  },
};