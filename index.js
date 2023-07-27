const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://chatengine.io/projects/9c66fff5-f8df-4daa-aa41-126a86824f52#users",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "53210524-1d0e-4d4d-8411-d9a9aa2e4512" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    if (e.response && e.response.status) {
      return res.status(e.response.status).json(e.response.data);
    } else {
      // Handle the error when e.response is undefined or null
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
