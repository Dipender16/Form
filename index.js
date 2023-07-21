const express = require("express");
const app = express();
let cors = require("cors");
const dotenv = require("dotenv").config();
const router = require("./routes/routes");

const connectDb = require("./dbConfig/mongoDbConnection");

connectDb();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(process.env.PORT, () =>
  console.log("server is running on port:-", process.env.PORT)
);
