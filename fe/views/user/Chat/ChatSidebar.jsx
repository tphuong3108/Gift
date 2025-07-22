import React from 'react';
import Avatar from '../../../src/assets/img/avatar.png';

const ChatSidebar = () => {
  return (
    <div className="w-1/3 border-r p-4 bg-white overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Tin nhắn</h2>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-3 mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded"
        >
          <img src={Avatar} alt="avatar" className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-semibold">Lê Thị Minh Tâm</p>
            <p className="text-sm text-gray-500">Bạn: Hi hi</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatSidebar;
