const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// Serve all files inside public folder
app.use(express.static(path.join(__dirname, "public")));

// Open index.html as homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Render uses its own PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`ATMS Server running on port ${PORT}`);
});