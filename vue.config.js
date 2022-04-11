const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin("feature-flags").tap(() => {
      return [{ __VUE_OPTIONS_API__: true, __VUE_PROD_DEVTOOLS__: true }];
    });
  },
});
