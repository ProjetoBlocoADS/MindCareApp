const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    defaultCommandTimeout: 10000,
    responseTimeout: 30000,
    requestTimeout: 15000,
    pageLoadTimeout: 60000,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    },
  },
});
