const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

const port = process.env.PORT;
if (!port) {
  throw Error("You must set a Port for the App to Run");
}

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

server.close();
module.exports = { app, server };
