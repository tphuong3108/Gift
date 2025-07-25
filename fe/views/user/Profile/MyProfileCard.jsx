import React from 'react';
import { Link } from 'react-router-dom'; 
import FB from '../../../src/assets/img/facebook.png';
import Zalo from '../../../src/assets/img/zalo.png';
import Gmail from '../../../src/assets/img/mail.png';
import Share2 from '../../../src/assets/img/share2.png';
import SettingIcon from '../../../src/assets/img/settings.png';
import MsgIcon from '../../../src/assets/img/mess.png';
import CalendarIcon from '../../../src/assets/img/calendar.png';
import ParticipateIcon from '../../../src/assets/img/participate.png';
import MapIcon from '../../../src/assets/img/map2.png';
import Followers from '../../../src/assets/img/Followers.png';
import Projects from '../../../src/assets/img/Projects.png';

const MyProfileCard = ({ user }) => {
  return (
    <div className="relative w-full bg-white rounded-xl shadow-md p-4 pt-6 text-center">
      <div className="w-24 h-24 mx-auto rounded-full border-[4px] border-green-500 overflow-hidden mt-2">
        <img src={user.avatar} alt="Avatar" className="w-full h-full object-cover" />
      </div>
      <h2 className="mt-3 text-xl font-bold text-green-700">{user.name}</h2>

      <div className="flex justify-center items-center gap-6 my-2 text-green-600 font-medium">
        <span className="flex items-center gap-1 text-sm">
          <img src={Followers} alt="Followers" className="w-4 h-4" />
          {user.followers}
        </span>
        <span className="flex items-center gap-1 text-sm">
          <img src={Projects} alt="Projects" className="w-4 h-4" />
          {user.productsSold}
        </span>
      </div>

      <button className="w-full mt-2 px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 flex items-center gap-2 justify-center text-sm shadow-md">
        <img src={Share2} className="w-4 h-4" alt="Share" />
        Chia sẻ trang cá nhân
      </button>

      <Link to="/account-settings" className="block w-full">
        <button className="w-full mt-2 px-5 py-2 bg-white border text-green-600 rounded-full hover:bg-gray-100 flex items-center gap-2 justify-center text-sm">
          <img src={SettingIcon} className="w-4 h-4" alt="Edit" />
          Chỉnh sửa trang cá nhân
        </button>
      </Link>

      <div className="mt-4 text-left text-sm text-gray-700 space-y-2">
        <p className="flex items-center gap-2">
          <img src={MsgIcon} className="w-4 h-4" /> Phản hồi chat: 95% (Trong 18 phút)
        </p>
        <p className="flex items-center gap-2">
          <img src={CalendarIcon} className="w-4 h-4" /> Đã tham gia: 1 ngày
        </p>
        <p className="flex items-center gap-2">
          <img src={ParticipateIcon} className="w-4 h-4" /> Đã tham gia: 1 ngày
        </p>
        <p className="flex items-center gap-2">
          <img src={MapIcon} className="w-4 h-4" /> Địa chỉ: {user.location}
        </p>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <img src={FB} alt="Facebook" className="w-6 h-6" />
        <img src={Zalo} alt="Zalo" className="w-9 h-6 object-contain" />
        <img src={Gmail} alt="Gmail" className="w-6 h-6" />
      </div>
    </div>
  );
};

export default MyProfileCard;
