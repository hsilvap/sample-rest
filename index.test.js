const { app } = require("./index");
const request = require('supertest');

test("get hello world", async () => {
  const res = await request(app).get("/");
  const response = {};
  expect(res.status).toBe(200);
  expect(res.body).toEqual(response);
});

test("get random cat", async () => {
    const res = await request(app).get("/random-cat");
    expect(res.status).toBe(200);
  });
  