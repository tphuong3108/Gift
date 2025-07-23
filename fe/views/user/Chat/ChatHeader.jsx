import React from 'react';
import Avatar from '../../../src/assets/img/avatar.png';
import Information from '../../../src/assets/img/information.png';
import Call from '../../../src/assets/img/call.png';

const ChatHeader = ({ user, toggleInfo }) => {
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
          className="w-5 h-5 cursor-pointer"
          onClick={toggleInfo}
        />
        <img
          src={Information}
          alt="Thông tin"
          className="w-12 h-12 cursor-pointer"
          onClick={toggleInfo}
        />
      </div>
    </div>
  );
};

// const ChatHeader = ({ user, toggleInfo }) => {
//   return (
//     <div className="bg-white px-4 py-3 flex items-center justify-between shadow-sm border-b">
//       <div className="flex items-center gap-3">
//         <img
//           src={user?.avatar || '/default-avatar.png'}
//           alt="avatar"
//           className="w-10 h-10 rounded-full object-cover"
//         />
//         <div>
//           <p className="font-semibold text-gray-800">{user?.name}</p>
//           <p className="text-xs text-gray-500">Đang hoạt động</p>
//         </div>
//       </div>

//       <button
//         onClick={toggleInfo}
//         className="text-green-600 text-sm hover:underline"
//       >
//         Xem thêm
//       </button>
//     </div>
//   );
// };

export default ChatHeader;

