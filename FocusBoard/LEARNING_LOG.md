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

---

## Buổi 3: Tách Component & Props
* **Đã hoàn thành**: Tạo component `Header.jsx` trong thư mục `src/components/`, truyền dữ liệu `title` và `subtitle` từ `App.jsx` xuống qua Props.
* **Kiến thức cốt lõi**:
  * Tư duy Component hóa để tái sử dụng và chia nhỏ giao diện.
  * Bản chất của Props: Dữ liệu truyền 1 chiều (Top-down), bất biến (Read-only).
  * Destructuring Props trong tham số component và cách đặt giá trị mặc định (Default Value).
* **Đánh giá**: Trả lời chính xác 100% các câu hỏi kiểm tra về Props và cú pháp ES6.

---

## Buổi 4: Thiết kế Data Model & Component Thống kê (Hoàn thành Giai đoạn 1)
* **Đã hoàn thành**: Thiết kế Data Model cho Task, viết component `TaskSummary.jsx`, tính toán và truyền các chỉ số thống kê (`total`, `completed`, `pending`) từ `App.jsx` xuống.
* **Kiến thức cốt lõi**:
  * Thiết kế cấu trúc dữ liệu (Object Schema) tương đương Entity/DTO trong C#.
  * Tư duy Dữ liệu phái sinh (Derived Data / Computed Properties): Chỉ lưu trữ nguồn dữ liệu gốc, các chỉ số phái sinh được tính toán trực tiếp trong hàm khi render.
  * Phân biệt cú pháp JSX Expression `{}` (truyền kiểu Number, Object, Boolean) với thuộc tính chuỗi `""` (String).
* **Đánh giá**: Code sạch, tư duy data model tốt, hiểu rõ cơ chế re-render của component.
