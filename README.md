# Nodejs-Expressjs Fundamentals - LTWBT5

Project Node.js sử dụng Express.js - Bài tập môn Lập Trình Web.

## 📌 API

### `GET /api/info`

Nhận 2 tham số từ **Query String**:
| Tham số | Kiểu   | Mô tả               |
|---------|--------|---------------------|
| `name`  | string | Tên người dùng      |
| `age`   | number | Tuổi người dùng     |

**Middleware:** Kiểm tra `age`:
- `age < 18` → `403 Forbidden`.
- `age` thiếu hoặc không phải số nguyên hợp lệ (vd: `abc`, `20abc`, `18.5`, `age` lặp lại) → `400 Bad Request`.
- `age >= 18` → tiếp tục xử lý.

Route cũng trả `400` nếu thiếu `name`, và các route không tồn tại trả về `404` dạng JSON.

#### Ví dụ request hợp lệ
```
GET /api/info?name=John&age=20
```

#### Response thành công (`age >= 18`)
```json
{
  "success": true,
  "message": "Request successful.",
  "data": {
    "name": "John",
    "age": 20
  }
}
```

#### Response lỗi (`age < 18`)
```json
{
  "success": false,
  "message": "Access denied. You must be at least 18 years old."
}
```

## 🚀 Cài đặt & Chạy

```bash
# 1. Clone repo
git clone https://github.com/Hanari05/Nodejs-Expressjs_Fundamentals-LTWBT5.git
cd Nodejs-Expressjs_Fundamentals-LTWBT5

# 2. Cài dependencies
npm install

# 3. Tạo file .env từ .env.example
cp .env.example .env

# 4. Chạy server
npm start
```

Server sẽ chạy tại: `http://localhost:3000`

## 📂 Cấu trúc thư mục

```
├── index.js                  # Entry point
├── routes/
│   └── info.js               # Route GET /api/info
├── middlewares/
│   └── checkAge.js           # Middleware kiểm tra age
├── .env                      # Biến môi trường (không push lên GitHub)
├── .env.example              # Template biến môi trường
├── .gitignore
└── package.json
```