# Express Demo Example

This is a minimal Express project demonstrating how to use the CI/CD & documentation template.

## How to run

1. Install dependencies:

   ```
   npm install
   ```

2. Start the server:

   ```
   npm start
   ```

3. Open [http://localhost:3000/api-docs](http://localhost:3000/api-docs) to view the Swagger documentation.

4. Test the API at [http://localhost:3000/api/hello](http://localhost:3000/api/hello)

## How to run unit tests

1. Install test dependencies (if not already):

   ```
   npm install --save-dev jest supertest
   ```

2. Run tests:
   ```
   npm test
   ```

- The file `tests/hello.test.js` contains an example of how to test the `/api/hello` endpoint using Jest and Supertest.

## Project structure

```
express-demo/
├── app.js
├── package.json
├── routes/
│   └── hello.js
├── tests/
│   └── hello.test.js
```

---
