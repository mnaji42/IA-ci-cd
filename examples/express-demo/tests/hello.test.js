const request = require("supertest")
const express = require("express")
const helloRoutes = require("../routes/hello")

const app = express()
app.use("/api", helloRoutes)

describe("GET /api/hello", () => {
  it("should return Hello World!", async () => {
    const res = await request(app)
      .get("/api/hello")
      .expect("Content-Type", /text/)
      .expect(200)

    expect(res.text).toBe("Hello World!")
  })
})
