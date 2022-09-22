const { defineConfig } = require("@vue/cli-service");
const { generateModifyVars } = require("./build");
const { PurgeIcons } = require("purge-icons-webpack-plugin");
const path = require("path");

const resolve = (dir) => {
  return path.join(__dirname, dir);
};

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config
      .plugin("purgeIcons")
      .use(PurgeIcons)
      .tap((args) => {
        return args;
      });
    config.module.rule("svg").exclude.add(resolve("src/assets/svg")).end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/assets/svg")) // 这里填svg资源的路径，根据实际情况填写
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: generateModifyVars("#005CB8"),
          javascriptEnabled: true,
        },
      },
    },
  },
});
