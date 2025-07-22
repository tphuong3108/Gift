import React from "react";
const PostAddress = ({ form, handleChange }) => (
  <div>
    <label className="block text-sm font-medium mb-1">5. ĐỊA CHỈ</label>
    <div className="flex flex-wrap gap-2">
      <select name="province" value={form.province} onChange={handleChange} className="flex-1 border rounded px-4 py-2 text-sm">
        <option value="">Chọn tỉnh</option>
        <option value="Hồ Chí Minh">Hồ Chí Minh</option>
      </select>
      <select name="ward" value={form.ward} onChange={handleChange} className="flex-1 border rounded px-4 py-2 text-sm">
        <option value="">Chọn xã</option>
        <option value="Thủ Đức">Thủ Đức</option>
      </select>
      <input
        type="text"
        name="addressDetail"
        placeholder="Nhập địa chỉ chi tiết"
        value={form.addressDetail}
        onChange={handleChange}
        className="flex-1 border rounded px-4 py-2 text-sm"
      />
    </div>
  </div>
);

export default PostAddress;
