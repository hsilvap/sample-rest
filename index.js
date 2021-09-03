const express = require("express");
const axios = require("axios");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/random-cat", async (req, res) => {
  const result = await axios({
    method: "get",
    url: "https://api.thecatapi.com/v1/images/search",
    headers: { "x-api-key": "36f66790-4986-4490-a054-b26952d733fc" },
  });

  res.send(result.data[0]);
});

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
module.exports = { app, server };
