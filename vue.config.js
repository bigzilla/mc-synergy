module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: process.env.NODE_ENV === "production" ? "/mc-synergy/" : "/",
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "Magic Chess Synergy Builder",
    },
  },
};
