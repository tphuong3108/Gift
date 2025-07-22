import React from 'react';
import Avatar from '../../../src/assets/img/avatar.png';
import Information from '../../../src/assets/img/information.png';
import Call from '../../../src/assets/img/call.png';


const ChatHeader = ({ toggleInfo, user }) => {
   return (
    <div className="flex items-center justify-between p-4 border-b bg-white">
      <div className="flex items-center gap-3">
        <img src={Avatar} alt="avatar" className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-semibold">{user?.name}</p>
          <p className="text-xs text-gray-500">Đang hoạt động</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <img
          src={Call}
          alt="Gọi"
          className="w-4 h-4 rounded-full cursor-pointer"
        />
        <img
          src={Information}
          alt="Thông tin"
          className="w-8 h-8 rounded-full cursor-pointer"
          onClick={toggleInfo}
        />
      </div>
    </div>
  );
};

export default ChatHeader;


