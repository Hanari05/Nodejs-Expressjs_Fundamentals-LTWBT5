/**
 * Middleware kiểm tra age từ Query String
 * - age thiếu / không phải số nguyên hợp lệ: 400
 * - Nếu age < 18: trả về lỗi 403, không cho request đi tiếp
 * - Nếu age >= 18: tiếp tục xử lý
 */
const checkAge = (req, res, next) => {
  const raw = req.query.age;

  // raw phải là 1 chuỗi duy nhất (chặn ?age=1&age=2 -> array) và là số nguyên thuần
  if (typeof raw !== "string" || !/^-?\d+$/.test(raw.trim())) {
    return res.status(400).json({
      success: false,
      message: "Age is required and must be a valid integer.",
    });
  }

  const age = Number(raw.trim());

  if (age < 18) {
    return res.status(403).json({
      success: false,
      message: "Access denied. You must be at least 18 years old.",
    });
  }

  req.age = age; // để route handler dùng lại, không parse lần 2
  next();
};

module.exports = checkAge;
