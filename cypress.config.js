const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: null, // Não definimos baseUrl para usar arquivos locais
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: false,
    chromeWebSecurity: false, // Permite acesso a arquivos locais
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});