const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const connectDB = require("./config/mongodb");
const app = express();

app.use(cors());
require("dotenv").config();
const port = process.env.PORT;

connectDB();

app.use(express.json());

app.use("/api/v1", routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
