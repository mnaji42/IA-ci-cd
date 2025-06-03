# CI/CD & Documentation Automation Template

Reusable template for automating documentation, unit tests, and CI/CD pipelines for any backend project (Node.js, Express, Rust, etc.).

---

## 🎯 Purpose

This repository provides ready-to-use configurations for:

- Automated API documentation (Swagger/OpenAPI)
- CI/CD pipelines (GitHub Actions)
- Automated unit testing
- Code quality and linting standards

**No framework dependency required** — this template is framework-agnostic and can be plugged into any backend project.

---

## 📂 Structure

```
ci-cd-docs-template/
├── .github/workflows/         # GitHub Actions configurations
│   ├── test.yml               # Automated testing pipeline
│   ├── docs-generation.yml    # Documentation generation pipeline
│   └── quality-checks.yml     # Code quality checks pipeline
│
├── docs/templates/            # Documentation templates
│   ├── openapi-template.yaml  # OpenAPI/Swagger template
│   ├── rapidoc-template.html  # RapiDoc HTML template
│   └── readme-template.md     # README template
│
├── config/                    # Reusable configuration files
│   ├── jest.config.js         # Jest config for unit tests
│   ├── eslint.config.js       # ESLint config for code linting
│   └── swagger.config.js      # Swagger config example
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
3. Adapt the configurations as needed (e.g., update project name, adjust test scripts).
4. Use the provided examples to see how to integrate documentation and testing.

### For an Existing Project

1. Copy the `.github/workflows/` and `config/` folders into your project.
2. Integrate the configs into your existing structure (e.g., merge or replace config files).
3. Adjust workflow YAML files as needed (e.g., if your test script isn't `npm test`, update the workflow accordingly).
4. Use the OpenAPI template in `docs/templates/openapi-template.yaml` to start your API documentation.

---

## 📚 Automated Documentation

### Swagger/OpenAPI

To add automated documentation to an Express project:

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

---

## 🧪 Automated Unit Testing

1. Copy `config/jest.config.js` into your project.
2. Install Jest and dependencies:
   ```
   npm install jest supertest --save-dev
   ```
3. Add this script to your `package.json`:
   ```
   "scripts": {
     "test": "jest"
   }
   ```
4. Create your tests in a `tests/` folder (see `examples/express-demo/tests/hello.test.js`).

---

## 🔄 CI/CD with GitHub Actions

1. Copy the `.github/workflows/` folder into your project.
2. Adjust the YAML files as needed (e.g., change the test script or add steps for linting or docs generation).
3. Commit and push — workflows will run automatically on GitHub.

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
