module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [ "../preset.js", "@storybook/addon-essentials" ],
  core: {
    builder: {
      name: 'webpack5',
      options: {
        lazyCompilation: true,
      }
    }
  },
  features: {
    storyStoreV7: true
  },
};