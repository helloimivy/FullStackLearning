const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(express.json()); //req.body
app.use(cors());

//routes

app.listen(5500, () => {
  console.log("server is running on port 5500");
});

//register and login routes

app.use("/auth", require("./routes/jwtAuth"));
