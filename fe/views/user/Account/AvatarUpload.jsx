import React from 'react';
import UploadSimple from '../../../src/assets/img/UploadSimple.png';
import { userService } from '../../../src/services/userService';

const AvatarUpload = () => {
  const user = userService.getCurrentUser();

  if (!user || !user.avatar) return null;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-32 h-32 rounded overflow-hidden bg-gray-100 group">
        <img
          src={user.avatar}
          alt="avatar"
          className="w-full h-full object-cover"
        />
        <label
        htmlFor="upload-avatar"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
        className="absolute inset-0 text-white flex items-center justify-center text-sm cursor-pointer opacity-0 group-hover:opacity-150 transition-opacity"
        >
        <img src={UploadSimple} alt="upload" className="w-5 h-5 mr-1" />
        Tải hình ảnh lên
        </label>
        <input id="upload-avatar" type="file" accept="image/*" className="hidden" />
      </div>
      <span className="text-xs text-gray-500 text-center">
        Hình ảnh có kích thước tối đa 1MB
      </span>
    </div>
  );
};

export default AvatarUpload;
