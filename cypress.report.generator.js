const marge = require('mochawesome-report-generator')
const {merge} = require('mochawesome-merge')
const fs = require('fs')
const reportDir = 'tests/e2e/reports'
const options = {
  files: [
    `${reportDir}/*.json`
  ]
}
console.log('\x1b[32m\x1b[1m', '\nRunning Mocha Tests Merge ', '\x1b[0m')
merge(options)
  .then(report => {
    fs.rmdirSync(reportDir, {recursive: true})
    fs.mkdirSync(reportDir)
    fs.writeFileSync(`${reportDir}/output.json`, JSON.stringify(report))
    marge.create(report, {
      reportDir
    })
  })
