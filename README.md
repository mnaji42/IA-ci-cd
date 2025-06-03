# CI/CD & Documentation Automation Template

Reusable template for automating documentation, unit tests, and CI/CD pipelines for any backend project (Node.js/Express example provided, but easily adaptable to Rust, Python, Go, etc.).

---

## ⚠️ Important

> **All configuration files and workflows in this template are provided as examples for a Node.js/Express stack.  
> If you use another stack or language, you should adapt, replace, or remove these files as needed.  
> The automation principles and folder structure remain the same.**

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
│   ├── test.yml               # Automated testing pipeline (Node.js example)
│   ├── docs.yml               # Documentation generation pipeline (Node.js example)
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

> **This is an example for Node.js/Express. For other stacks, adapt to your doc generator.**

To set up automated documentation for your project:

1. **Create a documentation config file** (e.g., for Node.js/Express: `swagger.config.js`).
2. **Install the appropriate dependencies for your stack** (e.g., `swagger-ui-express` for Node.js, or the relevant doc generator for your language).
3. **Integrate the documentation middleware or tool into your application**.
4. **Document your endpoints or code according to your stack's best practices**.
5. **Adapt the `docs.yml` workflow to run your documentation generation command**.

For other languages/stacks, use the relevant tools and adapt the workflow accordingly.

---

## 🧪 Automated Unit Testing

> **This is an example for Node.js/Express. For other stacks, adapt to your test runner.**

To set up automated unit testing for your project:

1. **Create a test config file** (e.g., `jest.config.js` for JS, or the equivalent for your stack).
2. **Install the appropriate test dependencies** (e.g., `jest`, `supertest` for JS, or your stack's test runner).
3. **Add a test script to your package.json or project config**.
4. **Create your tests in a `tests/` folder**.
5. **Adapt the `test.yml` workflow to run your test command**.

---

## 🔄 CI/CD with GitHub Actions

> **This is an example for Node.js/Express. For other stacks, adapt the workflow commands.**

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

> **This is an example for Node.js/Express. For other stacks, adapt to your linter.**

To set up linting for your project:

1. **Create a linter config file** (e.g., `eslint.config.js` for JS, or the equivalent for your stack).
2. **Install the appropriate linter dependencies** (e.g., `eslint` for JS, `flake8` for Python, `clippy` for Rust).
3. **Add a lint script to your package.json or project config**.
4. **Adapt the `lint.yml` workflow to run your lint command**.
5. **If you don't want linting, you can remove or ignore this workflow.**

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
