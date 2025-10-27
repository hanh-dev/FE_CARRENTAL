# Cấu Trúc Dự Án

## 📁 Folder Structure

```
src/
├── components/          # Reusable components (Button, CarCard, etc.)
├── layouts/            # Layout components
│   ├── MainLayout.tsx  # Layout cho user thường
│   └── AdminLayout.tsx # Layout cho admin
├── pages/              # Pages/Views
│   ├── Home.tsx        # Trang chủ
│   ├── About.tsx       # Về chúng tôi
│   ├── Cars.tsx        # Danh sách xe
│   ├── Pricing.tsx     # Bảng giá
│   ├── Blog.tsx        # Blog
│   ├── Contact.tsx     # Liên hệ
│   └── admin/          # Admin pages
│       ├── Dashboard.tsx
│       └── CarsManagement.tsx
└── App.tsx             # Router configuration
```

## 🚀 Cách thêm Layout mới

### 1. Tạo Layout mới trong `src/layouts/`

```tsx
import { Outlet } from "react-router-dom";

const YourLayout = () => {
  return (
    <div>
      {/* Header, Sidebar, etc. */}
      <Outlet /> {/* Content sẽ render ở đây */}
      {/* Footer */}
    </div>
  );
};

export default YourLayout;
```

### 2. Tạo Pages cho layout đó trong `src/pages/`

```tsx
const YourPage = () => {
  return <div>Your Page Content</div>;
};

export default YourPage;
```

### 3. Thêm Routes vào `src/App.tsx`

```tsx
import YourLayout from "./layouts/YourLayout";
import YourPage from "./pages/YourPage";

<Route path="/your-route" element={<YourLayout />}>
  <Route index element={<YourPage />} />
  {/* Add more sub-routes */}
</Route>
```

## 📝 Ví dụ với AdminLayout

### Admin Routes hiện tại:
- `/admin` hoặc `/admin/dashboard` → Dashboard
- `/admin/cars` → Cars Management
- `/admin/users` → Users (chưa tạo)
- `/admin/orders` → Orders (chưa tạo)
- `/admin/settings` → Settings (chưa tạo)

### Để thêm trang mới vào Admin:
1. Tạo page trong `src/pages/admin/YourPage.tsx`
2. Import vào `src/App.tsx`
3. Thêm route trong phần Admin routes

## 💡 Lợi ích của cấu trúc này:
- ✅ Tách biệt rõ ràng giữa public và admin
- ✅ Dễ dàng thêm layout mới
- ✅ Code dễ maintain và scale
- ✅ Mỗi layout có UI/UX riêng
- ✅ Có thể protect routes dễ dàng

