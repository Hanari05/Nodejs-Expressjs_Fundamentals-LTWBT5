require("dotenv").config();
const express = require("express");
const infoRouter = require("./routes/info");

const app = express();
const PORT = process.env.PORT || 3000;

// Parse JSON bodies
app.use(express.json());

// Routes
app.use("/api", infoRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
