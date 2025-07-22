import React from "react";

const PostActions = () => (
  <div className="flex justify-end gap-4 pt-4">
    <button
      type="button"
      className="px-6 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-sm"
    >
      Lưu vào nháp
    </button>
    <button
      type="submit"
      className="px-6 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 text-sm"
    >
      Đăng tin
    </button>
  </div>
);

export default PostActions;
