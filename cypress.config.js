const cypress = require('cypress')
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '544m4j',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/LearningCypressFramework/*js',
    defaultCommandTimeout:8000,
    pageLoadTimeout:10000,

    "env":
    {
        "url":"https://rahulshettyacademy.com/angularpractice/"
    }
    
  }
})