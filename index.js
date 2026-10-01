require("dotenv").config();
const express = require("express");
const infoRouter = require("./routes/info");

const app = express();
const PORT = process.env.PORT || 3000;

// Routes
app.use("/api", infoRouter);

// 404 handler (JSON)
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.originalUrl} not found.`,
  });
});

// Error handler (JSON)
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    success: false,
    message: "Internal server error.",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
