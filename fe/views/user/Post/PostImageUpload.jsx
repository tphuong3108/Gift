import { Eye } from 'lucide-react';
import Upload from '../../../src/assets/img/upload.png';

const PostImageUpload = ({ handleFileChange }) => (
  <div>
    <label className="block text-sm font-medium mb-1 flex justify-between items-center">
      6. UPLOAD HÌNH ẢNH VÀ CHỈNH SỬA
      <span className="text-green-600 text-sm flex items-center gap-1 cursor-pointer">
        <Eye size={14} />
        Xem trước bài đăng
      </span>
    </label>
    <div className="border rounded-lg p-6 bg-gray-50 text-center">
      <label className="cursor-pointer block">
        <input
          type="file"
          accept="image/*,image/gif"
          multiple
          hidden
          onChange={handleFileChange}
        />
        <div className="flex justify-center">
         <img
            src={Upload}
            alt="Ảnh upload"
            className="max-h-40 w-auto mx-auto opacity-60 object-contain"
        />
        </div>
      </label>
      <p className="text-sm mt-2 text-gray-500">
        Chọn tối đa 5 hình ảnh. Định dạng: JPG, PNG, GIF (Mỗi ảnh tối đa 5MB)
      </p>
    </div>
  </div>
);

export default PostImageUpload;
