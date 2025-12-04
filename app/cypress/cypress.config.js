const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Timeouts abaixo são globais para os testes E2E.
    // Ajuste os valores (ms) conforme a necessidade do seu ambiente CI/local.
    // - defaultCommandTimeout: tempo padrão para comandos como `cy.get` / `cy.contains`.
    // - responseTimeout: tempo para esperas de resposta do servidor (XHR/fetch).
    // - requestTimeout: timeout para requisições do Cypress (ex.: cy.request).
    // - pageLoadTimeout: tempo máximo para o carregamento de uma página.
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
