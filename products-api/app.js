const { request, response } = require("express");
const express = require("express");

const PORT = 3000;
const app = express();

app.get("/", (request, response) => {
  response.send("<h1>API de Produtos</h1>");
});

app.get("/products", (request, response) => {
  const productsMock = [
    { id: 1, title: "iPhone 14", capacity: 128, price: 509900 },
    { id: 2, title: "iPhone 14", capacity: 256, price: 589900 },
    { id: 3, title: "iPhone 14 Plus", capacity: 256, price: 649900 },
    { id: 4, title: "iPhone 14 Pro", capacity: 256, price: 679900 },
    { id: 4, title: "iPhone 14 Pro Max", capacity: 256, price: 729900 },
  ];

  response.send(productsMock);
});

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
