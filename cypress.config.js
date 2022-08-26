const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  projectId: "ixpgsw",
  video : false,
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      //const version.env.version || 'nonprod'
      //config.env = require(`.cypress/config/${version}.json`);
      //config.baseUrl = config.env.baseUrl;
      return config;
    },
    baseUrl: 'https://conexaoqa.herokuapp.com'
  },
});

