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
    ├── express/               # Example for Express
    ├── fastify/               # Example for Fastify
    └── nest/                  # Example for NestJS
```

---

## 🚀 How to Use This Template

### For a New Project

1. Clone or download this repository.
2. Copy relevant folders/files into your new project.
3. Adapt the configurations as needed.

### For an Existing Project

1. Copy the `.github/workflows/` and `config/` folders into your project.
2. Integrate the configs into your existing structure.
3. Use the provided examples to adapt for your framework.

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

4. Document your routes using JSDoc comments (see examples).

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
4. Create your tests in a `tests/` folder (see examples).

---

## 🔄 CI/CD with GitHub Actions

1. Copy the `.github/workflows/` folder into your project.
2. Adjust the YAML files as needed.
3. Commit and push — workflows will run automatically.

---

## 📋 Examples

See the `examples/` folder for full implementations with different frameworks.

---

## 💡 Tips

- You can use [RapiDoc](https://mrin9.github.io/RapiDoc/) or [DapperDox](https://dapperdox.io/) for alternative API documentation UIs — just point them to your generated OpenAPI file.
- Integrate these docs into your CI/CD pipeline to ensure they stay up to date.
- Expand or customize the configs for your specific needs.

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
