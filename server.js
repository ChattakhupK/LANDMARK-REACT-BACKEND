const express = require("express");
const app = express();
const { readdirSync } = require("fs");

// middleware
const cors = require("cors");
const morgan = require("morgan");
const handleError = require("./middlewares/error");

// use
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

readdirSync("./routes").map((list) =>
  app.use("/api", require("./routes/" + list))
);

app.use(handleError);

const PORT = 5000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
