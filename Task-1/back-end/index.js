const express = require("express");
const cors = require("cors");
const connection = require("./configs/db");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home page");
});

const registerController = require("./controllers/register.controller");
app.use("/register", registerController);


app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connnected to DB successfully");
  } catch (err) {
    console.log("Error connecting to DB");
    console.log(err);
  }
  console.log(`listening on port ${process.env.PORT}`);
});
