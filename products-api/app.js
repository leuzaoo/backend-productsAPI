const { request, response } = require("express");
const express = require("express");
const productsJSON = require("./products.json");

const PORT = 3000;
const app = express();

app.get("/", (request, response) => {
  response.send("<h1>API de Produtos</h1>");
});

app.get("/products", (request, response) => {
  response.json(productsJSON);
});

app.get("/products/:id", (request, response) => {
  const product = productsJSON.find(
    (product) => product.id === Number(request.params.id)
  );

  if (!product) {
    return response.status(404).json({
      error: "Not found.",
    });
  }

  response.json(product);
});

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
