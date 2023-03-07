const request = require("supertest");
const { app, server } = require("./app");

afterAll(() => {
  server.close();
});

describe("GET /", () => {
  it("respond with Hello world", (done) => {
    request(app).get("/").expect("Hello world", done);
  });
});
