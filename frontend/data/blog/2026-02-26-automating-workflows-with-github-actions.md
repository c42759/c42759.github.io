Automation is key in modern software development. Time spent on repetitive tasks is time taken away from building features.

## CI/CD Pipeline

My typical GitHub Actions workflow includes several essential jobs:

| Job Name | Description |
| :--- | :--- |
| **Linting** | Runs ESLint and Prettier to ensure code consistency. |
| **Testing** | Executes the Jest test suite to check for regressions. |
| **Build** | Creates the production build of the Next.js application. |

Here's an example of a simple GitHub Actions YAML configuration:

```yaml
name: CI

on:
  push:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Use Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20.x'
      - run: npm ci
      - run: npm run test
```

Automating the deployments means I can confidently merge PRs, knowing that checks will ensure only passing code hits production.
