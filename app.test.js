// generate integration test jest

const request = require("supertest");
const app = require("./app");

describe("GET /", () => {
  it("respond with Hello world", (done) => {
    request(app).get("/").expect("Hello world", done);
  });
});
