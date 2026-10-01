/**
 * Middleware kiểm tra age từ Query String
 * - Nếu age < 18: trả về lỗi, không cho request đi tiếp
 * - Nếu age >= 18: tiếp tục xử lý
 */
const checkAge = (req, res, next) => {
  const age = parseInt(req.query.age);

  if (isNaN(age)) {
    return res.status(400).json({
      success: false,
      message: "Age is required and must be a number.",
    });
  }

  if (age < 18) {
    return res.status(403).json({
      success: false,
      message: "Access denied. You must be at least 18 years old.",
    });
  }

  next();
};

module.exports = checkAge;
