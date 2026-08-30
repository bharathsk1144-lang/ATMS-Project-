const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send("🚚 Welcome to ATMS - Anbu Transport Management System");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`ATMS Server running on http://localhost:${PORT}`);
});