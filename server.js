const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const connectDB = require("./server/database/connection");

const app = express();
app.use(cors());

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

// requests
app.use(morgan("tiny"));

// mongobd
connectDB();

// parse requests
// app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use("/", require("./server/routes/router"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
