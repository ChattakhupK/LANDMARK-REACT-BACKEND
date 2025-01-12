const express = require("express");
const app = express();

// middleware
const cors = require("cors");
const morgan = require("morgan");

// use
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  console.log("hello world");
  //   res.send("Hello Backend");
  const user = { id: 2, userName: "Cks", level: 6 };

  res.json(user);
});

app.get("/camping", (req, res) => {
  res.send("Hello camping");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
