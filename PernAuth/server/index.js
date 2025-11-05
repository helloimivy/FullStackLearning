const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(express.json()); //req.body
app.use(cors());

//dashboard route

app.use("/dashboard", require("./routes/dashboard"));

//register and login routes

app.use("/auth", require("./routes/jwtAuth"));

app.listen(5500, () => {
  console.log("server is running on port 5500");
});
