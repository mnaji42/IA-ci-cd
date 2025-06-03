const express = require("express")
const swaggerUi = require("swagger-ui-express")
const swaggerJsdoc = require("swagger-jsdoc")
const helloRoutes = require("./routes/hello")

const app = express()
const port = 3000

// Swagger config
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Express Demo API",
      version: "1.0.0",
      description: "A simple Express API with Swagger docs",
    },
    servers: [{ url: "http://localhost:3000" }],
  },
  apis: ["./routes/*.js"],
}

const swaggerDocs = swaggerJsdoc(swaggerOptions)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

// Use routes
app.use("/api", helloRoutes)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
  console.log(`Swagger docs at http://localhost:${port}/api-docs`)
})
