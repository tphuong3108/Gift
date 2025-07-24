// components/UserProfileCard/OtherProfileCard.jsx
import React, { useState } from 'react';
import MoreIcon from '../../../src/assets/img/more.png';
import ShareIcon from '../../../src/assets/img/share1.png';
import ChatIcon from '../../../src/assets/img/chat1.png';
import ReportIcon from '../../../src/assets/img/report.png';
import Plus from '../../../src/assets/img/plus.png';
import Followers from '../../../src/assets/img/Followers.png';
import Projects from '../../../src/assets/img/Projects.png';
import MsgIcon from '../../../src/assets/img/mess.png';
import CalendarIcon from '../../../src/assets/img/calendar.png';
import ParticipateIcon from '../../../src/assets/img/participate.png';
import MapIcon from '../../../src/assets/img/map2.png';
import FB from '../../../src/assets/img/facebook.png';
import Zalo from '../../../src/assets/img/zalo.png';
import Gmail from '../../../src/assets/img/mail.png';

const OtherProfileCard = ({ user }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <div className="relative w-full bg-white rounded-xl shadow-md p-4 pt-6 text-center">
      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={() => setDropdownVisible(!dropdownVisible)}
          className="bg-white rounded-full shadow p-1"
        >
          <img src={MoreIcon} alt="More" className="w-5 h-5" />
        </button>

        {dropdownVisible && (
          <div className="absolute top-full right-0 mt-2 w-52 bg-white rounded-xl shadow-lg text-sm border z-50">
            <ul className="py-2">
              <li className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
                <img src={ShareIcon} className="w-4 h-4" />
                <span>Chia sẻ trang cá nhân</span>
              </li>
              <li className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
                <img src={ChatIcon} className="w-4 h-4" />
                <span>Chat</span>
              </li>
              <li className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
                <img src={ReportIcon} className="w-4 h-4" />
                <span>Báo cáo người dùng</span>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="w-24 h-24 mx-auto rounded-full border-[4px] border-green-500 overflow-hidden mt-2">
        <img src={user.avatar} alt="Avatar" className="w-full h-full object-cover" />
      </div>

      <h2 className="mt-3 text-xl font-bold text-green-700">{user.name}</h2>

      <div className="flex justify-center items-center gap-6 my-2 text-green-600 font-medium">
        <span className="flex items-center gap-1 text-sm">
          <img src={Followers} className="w-4 h-4" />
          {user.followers}
        </span>
        <span className="flex items-center gap-1 text-sm">
          <img src={Projects} className="w-4 h-4" />
          {user.productsSold}
        </span>
      </div>

      <button className="mt-2 px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 flex items-center gap-2 justify-center mx-auto text-sm">
        <img src={Plus} className="w-4 h-4" alt="Follow" />
        Theo dõi
      </button>

      <div className="mt-4 text-left text-sm text-gray-700 space-y-2">
        <p className="flex items-center gap-2">
          <img src={MsgIcon} className="w-4 h-4" />
          Phản hồi chat: 95% (Trong 18 phút)
        </p>
        <p className="flex items-center gap-2">
          <img src={CalendarIcon} className="w-4 h-4" />
          Đã tham gia: 1 ngày
        </p>
        <p className="flex items-center gap-2">
          <img src={ParticipateIcon} className="w-4 h-4" />
          Đã tham gia: 1 ngày
        </p>
        <p className="flex items-center gap-2">
          <img src={MapIcon} className="w-4 h-4" />
          Địa chỉ: {user.location}
        </p>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <img src={FB} alt="Facebook" className="w-6 h-6" />
        <img src={Zalo} alt="Zalo" className="w-6 h-6" />
        <img src={Gmail} alt="Gmail" className="w-6 h-6" />
      </div>
    </div>
  );
};

export default OtherProfileCard;
