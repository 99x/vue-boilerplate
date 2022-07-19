import {defineConfig} from 'cypress'

export default defineConfig({
  fixturesFolder: 'tests/e2e/fixtures',
  screenshotsFolder: 'tests/e2e/screenshots',
  videosFolder: 'tests/e2e/videos',
  videoCompression: 16,
  viewportWidth: 1920,
  viewportHeight: 1080,
  requestTimeout: 40000,
  defaultCommandTimeout: 20000,
  retries: {
    runMode: 0,
    openMode: 0
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'tests/e2e/reports',
    overwrite: false,
    html: false,
    json: true
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents (on, config) {
      return require('./tests/e2e/plugins/index.js')(on, config)
    },
    specPattern: 'tests/e2e/specs/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'tests/e2e/support/index.js'
  }
})
