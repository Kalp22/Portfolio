const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

require("dotenv").config();

const home = require("./api/home");
app.use("/", home);

const PORT = process.env.PORT || 3500;

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
