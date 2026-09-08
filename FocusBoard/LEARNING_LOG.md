# FocusBoard - Nhật ký học tập (Learning Log)

## Buổi 1: Khởi tạo & Luồng Bootstrap ứng dụng
* **Đã hoàn thành**: Khởi tạo project React bằng Vite (JavaScript thuần), chạy Local Dev Server.
* **Kiến thức cốt lõi**:
  * Luồng hoạt động của Single Page Application (SPA): `index.html` (chứa `#root`) -> `src/main.jsx` (`createRoot` & `render`) -> `src/App.jsx`.
  * Vai trò của `<StrictMode>` trong việc phát hiện lỗi tiềm ẩn ở môi trường Development (cơ chế render 2 lần).
* **Đánh giá**: Nắm vững luồng thực thi và cấu trúc thư mục.

---

## Buổi 2: JSX & Component đầu tiên
* **Đã hoàn thành**: Dọn dẹp mã nguồn mặc định của Vite, xây dựng giao diện khung của FocusBoard trong `App.jsx`, viết CSS ban đầu trong `App.css`.
* **Kiến thức cốt lõi**:
  * Định nghĩa Function Component (PascalCase, trả về JSX).
  * Quy tắc Single Root Element và khi nào nên dùng React Fragment (`<> ... </>`).
  * Phân biệt thuộc tính `className` (trong JSX) với từ khóa `class` (của JavaScript).
  * Cách nhúng biểu thức JavaScript vào JSX bằng cặp ngoặc nhọn `{expression}`.
* **Đánh giá**: Viết code sạch sẽ, nắm rõ bản chất Fragment và biểu thức JSX.
