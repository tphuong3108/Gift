import React from 'react';
import { Image, Video, Calendar, Pencil } from 'lucide-react';
import Avatar from '../../assets/img/avatar_1.png'
const ShareBar = () => {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="flex items-center gap-3 mb-4">
        <img
          src={Avatar}
          alt="avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
        <input
          type="text"
          placeholder="Bạn đang nghĩ gì?"
          className="flex-1 border border-gray-200 rounded-full px-4 py-2 focus:outline-none bg-gray-100"
        />
      </div>

      <div className="flex justify-around text-sm text-green-700 font-medium">
        <div className="flex items-center gap-1 cursor-pointer hover:underline">
          <Image size={16} /> Hình ảnh
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:underline">
          <Video size={16} /> Video
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:underline">
          <Calendar size={16} /> Sự kiện
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:underline">
          <Pencil size={16} /> Bài viết
        </div>
      </div>
    </div>
  );
};

export default ShareBar;
