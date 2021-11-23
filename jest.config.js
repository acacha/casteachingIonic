module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/default',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  transformIgnorePatterns: ['/node_modules/(?!@ionic/vue|@ionic/vue-router)']
}
