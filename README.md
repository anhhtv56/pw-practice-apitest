npm init playwright@latest //Install
npx playwright test // Start test
npx playwright show-report // Show test reports
npx playwright test --project=chromium // To run only specific browser
npx playwright test example.spec.ts --project=chromium --headed // To run only specific test
npx playwright test -g "get started link" // to run only specific test with title
npx playwright test --project=chromium --headed
npx playwright test --ui // to run in ui
npx playwright test --project=firefox --trace on // get details with screenshot
npx playwright test --project=firefox --debug // to run debug mode see step by step
npx playwright test --project=chromium --grep @smoke // execute test with tag=smoke
npx playwright test --project=chromium --grep "@smoke|@block" // execute test with tag = smoke and block