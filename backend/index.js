const express = require("express");
const cors = require("cors");
require('dotenv').config();
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/auth", async (req,res) => {
  const { username } = req.body;

  const response = await axios.put(
    "https://api.chatengine.io/users/",
    {
      username: username,
      secret: username,
      first_name: username
    },
    { headers: { "private-key": process.env.KEY} }
  );
  return res.json(response.data)
});

app.listen(3001, () => console.log("HI"));
