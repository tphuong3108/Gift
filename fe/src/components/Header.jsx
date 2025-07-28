import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';

import AvatarIcon from '../../src/assets/img/Avatar_2.png';
import AccountIcon from '../../src/assets/img/account.png';
import SettingIcon from '../../src/assets/img/settings.png';
import NewsIcon from '../../src/assets/img/new.png';
import StoryIcon from '../../src/assets/img/story.png';
import LogoutIcon from '../../src/assets/img/logout.png';
import Bell from '../../src/assets/img/bell.png';
import Message from '../../src/assets/img/message_1.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [avatar, setAvatar] = useState(AvatarIcon);
  const [activeMenu, setActiveMenu] = useState('Trang chủ');
  const [username, setUsername] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    setIsLoggedIn(!!token);
    if (user?.avatar) setAvatar(user.avatar);
    if (user?.username) setUsername(user.username);
  }, []);

  useEffect(() => {
    const pathMap = {
      '/': 'Trang chủ',
      '/explore': 'Khám phá',
      '/program': 'Chương trình',
      '/community': 'Cộng đồng',
      '/faq': 'FAQ',
    };
    setActiveMenu(pathMap[location.pathname] || '');
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setDropdownOpen(false);
    navigate('/');
  };

  const menus = [
    { label: 'Trang chủ', path: '/' },
    { label: 'Khám phá', path: '/explore' },
    { label: 'Chương trình', path: '/program' },
    { label: 'Cộng đồng', path: '/community' },
    { label: 'FAQ', path: '/faq' },
  ];

  return (    
    <header className="relative h-22 bg-[#E8F5E9] border-b border-[#000000B2] p-3 px-4 sm:px-6 flex items-center justify-between z-50">
      <div className="text-2xl font-bold text-[#4CAF50] flex-shrink-0">Món Quà Nhỏ</div>
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-green-600 text-xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-50 md:hidden">
          <nav className="flex flex-col items-start space-y-2 p-4">
            {menus.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                onClick={() => {
                  setActiveMenu(item.label);
                  setMenuOpen(false);
                }}
                className="text-gray-700 hover:text-green-600 text-base"
              >
                {item.label}
              </Link>
            ))}
             <Link
                to="/post"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                + Đăng tin
              </Link>
            <hr className="my-3 w-full border-gray-200" />

            {isLoggedIn ? (
              <div className="flex flex-col gap-3 w-full">
                <div className="flex items-center gap-3">
                  <img src={avatar} className="w-10 h-10 rounded-full object-cover" alt="avatar" />
                  <span className="font-medium text-gray-800">Xin chào</span>
                </div>

                <Link
                  to={`/profile/${username}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 hover:text-green-600"
                >
                  Hồ sơ cá nhân
                </Link>

                <Link
                  to="/notifications"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 hover:text-green-600"
                >
                  Thông báo
                </Link>

                <Link
                  to="/messages"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 hover:text-green-600"
                >
                  Tin nhắn
                </Link>

                <Link
                  to="/my-posts"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 hover:text-green-600"
                >
                  Tin đã đăng
                </Link>

                
                <Link
                  to="/account-settings"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 hover:text-green-600"
                >
                  Cài đặt tài khoản
                </Link>

                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="text-left text-red-500 hover:text-red-600"
                >
                  Đăng xuất
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3 w-full">
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    navigate('/login');
                  }}
                  className="text-gray-700 hover:text-green-600 text-center"
                >
                  Đăng nhập / Đăng ký
                </button>
              </div>
            )}
          </nav>
        </div>
      )}

      <nav className="hidden md:flex flex-grow justify-center items-center space-x-6">
        {menus.map((item, idx) => (
          <Link
            key={idx}
            to={item.path}
            onClick={() => setActiveMenu(item.label)}
            className={`relative font-medium px-2 py-1 transition ${
              activeMenu === item.label
                ? 'text-green-600'
                : 'text-gray-600 hover:text-green-600'
            }`}
          >
            {item.label}
            {activeMenu === item.label && (
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-green-600"></span>
            )}
          </Link>
        ))}
       <Link
          to="/post"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          + Đăng tin
        </Link>
      </nav>

      <div className="hidden md:flex items-center space-x-3">
        <span className="bg-white text-green-600 rounded-full px-3 py-1 text-base font-bold">VN</span>

        {isLoggedIn ? (
          <>
            <Link to="/notifications">
              <img src={Bell} alt="bell" className="w-9 h-9 rounded-full object-cover" />
            </Link>
            <Link to="/messages">
              <img src={Message} alt="message" className="w-9 h-9 rounded-full object-cover" />
            </Link>

            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center bg-white rounded-full px-2 py-1 shadow gap-2"
              >
                <img src={avatar} alt="avatar" className="w-8 h-8 rounded-full object-cover" />
                <FaChevronDown className="text-green-600" />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg z-50 text-sm">
                  <ul className="py-2">
                    <li
                      onClick={() => {
                        navigate(`/profile/${username}`);
                        setDropdownOpen(false);
                      }}
                      className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <img src={AccountIcon} className="w-5 h-5" /> Hồ sơ cá nhân
                    </li>
                    <li
                      onClick={() => {
                        navigate('/my-posts');
                        setDropdownOpen(false);
                      }}
                      className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <img src={NewsIcon} className="w-5 h-5" /> Tin đã đăng
                    </li>
                    <li
                      onClick={() => {
                        navigate('/account-settings');
                        setDropdownOpen(false);
                      }}
                      className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <img src={SettingIcon} className="w-5 h-5" /> Cài đặt
                    </li>
                    <li
                      onClick={handleLogout}
                      className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <img src={LogoutIcon} className="w-5 h-5" /> Đăng xuất
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-green-600 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-green-700"
            >
              <img
                src={AvatarIcon}
                alt="avatar"
                className="w-6 h-6 rounded-full border border-white object-cover"
              />
              <span>Tài khoản</span>
              <FaChevronDown />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-60 bg-white rounded-xl shadow-lg z-50 text-sm">
                <ul className="py-2">
                  <li
                    className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setDropdownOpen(false);
                      navigate('/login');
                    }}
                  >
                    <img src={AccountIcon} alt="" className="w-5 h-5" />
                    Đăng ký / Đăng nhập
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
