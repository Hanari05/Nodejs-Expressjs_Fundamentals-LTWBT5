const express = require("express");
const router = express.Router();
const checkAge = require("../middlewares/checkAge");

/**
 * GET /api/info
 * Query String: name, age
 * Middleware: checkAge (age phải >= 18)
 */
router.get("/info", checkAge, (req, res) => {
  const { name, age } = req.query;

  if (!name) {
    return res.status(400).json({
      success: false,
      message: "Name is required.",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Request successful.",
    data: {
      name: name,
      age: parseInt(age),
    },
  });
});

module.exports = router;
