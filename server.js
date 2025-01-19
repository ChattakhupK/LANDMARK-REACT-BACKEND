const express = require("express");
const app = express();
const campingRoute = require("./routes/camping");

// middleware
const cors = require("cors");
const morgan = require("morgan");

// use
app.use(morgan("dev"));
app.use(cors());
app.use(express.json())


app.use("/api", campingRoute);

const PORT = 5000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
