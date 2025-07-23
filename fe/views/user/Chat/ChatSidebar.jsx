import React from 'react';
import Avatar from '../../../src/assets/img/avatar.png';

const ChatSidebar = ({ onSelectUser }) => {
  const users = [
    { id: 1, name: 'Lê Thị Minh Tâm' },
    { id: 2, name: 'Nguyễn Thị Trân' },
    { id: 3, name: 'Nguyễn Văn Dũng' },
    { id: 4, name: 'Hoàng Thị Hương' },
    { id: 5, name: 'James' },
  ];

  return (
    <div className="w-full sm:w-[300px] p-4 bg-white overflow-y-auto">
      <h2 className="text-xl font-bold mb-3">Tin nhắn</h2>
      <input
        type="text"
        placeholder="Tìm kiếm tin nhắn ...."
        className="w-full p-2 mb-4 border border-gray-300 rounded-full text-sm"
      />
      {users.map((user) => (
        <div
          key={user.id}
          className="flex items-center gap-3 mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded"
          onClick={() => onSelectUser(user)}
        >
          <img src={Avatar} alt="avatar" className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-500">Bạn: Hi hi</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatSidebar;
