const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const { addMsg, getMsg } = require("./user");

app.get("/users", async (req, res) => {
  const list = await getMsg();
  res.json(list);
});

app.post("/add-msg", async (req, res) => {
  const message = req.body;
  await addMsg(message);
  res.json({ message: "Added Successfully" });
});

app.listen(4000, () => console.log("server started"));
