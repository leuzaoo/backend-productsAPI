const express = require("express");
const sequelize = require("./database");
const routes = require("./routes");

const PORT = 3000;
const app = express();

routes(app);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
  });
});
