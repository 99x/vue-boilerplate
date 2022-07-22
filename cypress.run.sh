EXIT=0

rm -r tests/e2e/reports
yarn vue-cli-service test:e2e --headless|| EXIT=$?
node cypress.report.generator.js || EXIT=$?

exit $EXIT
