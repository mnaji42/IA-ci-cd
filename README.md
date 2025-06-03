# CI/CD & Documentation Automation Template

Reusable template for automating documentation, unit tests, and CI/CD pipelines for any backend project (Node.js, Express, Rust, Python, etc.).

---

## 🎯 Purpose

This repository provides ready-to-use configurations for:

- Automated API documentation (Swagger/OpenAPI)
- CI/CD pipelines (GitHub Actions)
- Automated unit testing
- Code quality and linting standards

**No framework or language dependency required** — this template is stack-agnostic and can be plugged into any project.

---

## 📂 Structure

```
ci-cd-docs-template/
├── .github/workflows/         # GitHub Actions configurations
│   ├── test.yml               # Automated testing pipeline
│   ├── docs.yml               # Documentation generation pipeline
│   └── lint.yml               # Code quality checks pipeline (example: ESLint)
│
├── docs/templates/            # Documentation templates
│   ├── openapi-template.yaml  # OpenAPI/Swagger template
│   ├── rapidoc-template.html  # RapiDoc HTML template
│   └── readme-template.md     # README template
│
├── config/                    # Reusable configuration files (examples)
│   ├── jest.config.js         # Jest config for unit tests (JavaScript example)
│   └── swagger.config.js      # Swagger config example (JavaScript example)
│
└── examples/                  # Implementation examples
    ├── express-demo/          # Example for Express (with unit tests)
    ├── fastify/               # Example for Fastify
    └── nest/                  # Example for NestJS
```

---

## 🚀 How to Use This Template

### For a New Project

1. Clone or download this repository.
2. Copy the `.github/workflows/`, `config/`, and optionally `docs/templates/` folders into your new project.
3. Adapt the configurations as needed (update project name, adjust test/lint scripts, etc.).
4. Use the provided examples to see how to integrate documentation and testing.

### For an Existing Project

1. Copy the `.github/workflows/` and `config/` folders into your project.
2. Integrate the configs into your existing structure (merge or replace config files as needed).
3. Adjust workflow YAML files to match your stack (e.g., update test or lint commands).
4. Use the OpenAPI template in `docs/templates/openapi-template.yaml` to start your API documentation.

---

## 📚 Automated Documentation

### Swagger/OpenAPI

To add automated documentation to a JavaScript/Express project:

1. Install dependencies:

   ```
   npm install swagger-ui-express swagger-jsdoc --save-dev
   ```

2. Copy `config/swagger.config.js` into your project.

3. Integrate Swagger into your Express app:

   ```js
   const swaggerUi = require("swagger-ui-express")
   const swaggerConfig = require("./config/swagger.config")
   const specs = swaggerJSDoc(swaggerConfig)

   app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs))
   ```

4. Document your routes using JSDoc comments (see examples in `examples/express-demo/routes/hello.js`).

5. You can start your API documentation from the template in `docs/templates/openapi-template.yaml`.

For other languages/stacks, use the relevant tools and adapt the workflow accordingly.

---

## 🧪 Automated Unit Testing

The provided example uses Jest for JavaScript projects.  
**For other languages or frameworks, replace with your preferred test runner and configuration.**

1. Copy or create your test config (e.g., `jest.config.js` for JS, or the equivalent for your stack).
2. Install test dependencies (e.g., `npm install jest supertest --save-dev` for JS).
3. Update the `test` script in your `package.json` or equivalent.
4. Create your tests in a `tests/` folder.

---

## 🔄 CI/CD with GitHub Actions

1. Copy the `.github/workflows/` folder into your project.
2. Adjust the YAML files as needed:
   - **test.yml**: Update the test command to fit your stack (e.g., `pytest` for Python, `cargo test` for Rust, etc.).
   - **lint.yml**: By default, runs ESLint for JS/TS.
     - If you use another linter (e.g., `flake8` for Python, `clippy` for Rust), update the command accordingly.
     - If you don't want linting, you can remove or ignore this workflow.
   - **docs.yml**: Update the doc generation command to fit your stack/tooling.
3. Commit and push — workflows will run automatically on GitHub.

For advanced usage and customization of workflows, see [workflows.md](workflows.md).

---

## 🧹 Linting & Code Quality

This template does **not** provide a default linter configuration, because linting rules and tools depend on your language and stack.

**How to use linting in your project:**

- For JavaScript/TypeScript, install [ESLint](https://eslint.org/) and create your own config (`npx eslint --init`).
- For Python, use [flake8](https://flake8.pycqa.org/).
- For Rust, use [clippy](https://doc.rust-lang.org/clippy/).
- For any other language, use the recommended linter for your stack.
- Update the `lint.yml` workflow to run your chosen linter, or remove it if you don't need linting in your project.

---

## 📋 Examples

See the `examples/` folder for full implementations with different frameworks.

- `express-demo/` includes a working Express app with Swagger documentation and unit tests.

---

## 💡 Tips

- You can use [RapiDoc](https://mrin9.github.io/RapiDoc/) or [DapperDox](https://dapperdox.io/) for alternative API documentation UIs — just point them to your generated OpenAPI file.
- Integrate these docs into your CI/CD pipeline to ensure they stay up to date.
- Expand or customize the configs for your specific needs.
- When copying to a new project, remember to update project-specific fields (like project name, description, and endpoints) in your OpenAPI and config files.

---

## 🤝 Contributing

1. Fork this repo
2. Create a branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push your branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## 📄 License

MIT
