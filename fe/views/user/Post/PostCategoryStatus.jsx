import React from "react";

const PostCategoryStatus = ({ form, handleChange }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-medium mb-1">3. DANH MỤC</label>
      <select name="category" value={form.category} onChange={handleChange} className="w-full border rounded px-4 py-2 text-sm">
        <option value="">Chọn Danh Mục</option>
        <option value="Quần áo">Quần áo</option>
        <option value="Sách">Sách</option>
        <option value="Đồ dùng">Đồ dùng</option>
      </select>
    </div>
    <div>
      <label className="block text-sm font-medium mb-1">4. TÌNH TRẠNG</label>
      <select name="condition" value={form.condition} onChange={handleChange} className="w-full border rounded px-4 py-2 text-sm">
        <option value="">Chọn tình trạng</option>
        <option value="Mới">Mới</option>
        <option value="Đã sử dụng">Đã sử dụng</option>
      </select>
    </div>
  </div>
);

export default PostCategoryStatus;
