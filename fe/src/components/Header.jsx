import React, { useState } from 'react';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Program from '../../src/assets/img/program.png';
import Bell from '../../src/assets/img/bell.png';
import Message from '../../src/assets/img/message_1.png';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState('Trang chủ');
  const [menuOpen, setMenuOpen] = useState(false);

  const menus = [
    { label: 'Trang chủ', path: '/' },
    { label: 'Khám phá', path: '/explore' },
    { label: 'Chương trình', path: '/program' },
    { label: 'Cộng đồng', path: '/community' },
    { label: 'FAQ', path: '/faq' },
  ];

  return (
    <header className="relative bg-[#E8F5E9] shadow p-4 px-6 flex items-center justify-between">
      {/* Logo */}
      <div className="text-xl font-bold text-[#4CAF50] flex-shrink-0">
        Món Quà Nhỏ
      </div>

      {/* Hamburger (Mobile) */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-green-600 text-xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Main Menu (Desktop) */}
      <nav className="hidden md:flex flex-grow justify-center items-center space-x-6">
        {menus.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            onClick={() => setActiveMenu(item.label)}
            className={`text-gray-600 relative group font-medium transition-all ${
              activeMenu === item.label ? 'text-green-600' : ''
            }`}
          >
            {item.label}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-green-600 transition-all duration-300 ${
                activeMenu === item.label ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            ></span>
          </Link>
        ))}
        <Link
          to="/post"
          className="bg-[#53A05A] text-white px-4 py-2 rounded-full hover:bg-green-700 transition whitespace-nowrap"
        >
          + Đăng tin
        </Link>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-50 p-4 flex flex-col md:hidden">
          {menus.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => {
                setActiveMenu(item.label);
                setMenuOpen(false);
              }}
              className={`py-2 px-4 rounded hover:bg-green-50 ${
                activeMenu === item.label ? 'text-green-600 font-semibold' : 'text-gray-700'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/post"
            onClick={() => setMenuOpen(false)}
            className="bg-[#53A05A] text-white px-4 py-2 mt-2 rounded-full text-center hover:bg-green-700"
          >
            + Đăng tin
          </Link>
        </div>
      )}

      {/* Icons */}
      <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
        <span className="bg-white text-green-600 rounded-full px-3 py-1 text-sm font-semibold">
          VN
        </span>
        <Link to="/notifications">
          <img src={Bell} alt="bell" className="w-8 h-8 rounded-full object-cover" />
        </Link>
        <Link to="/messages">
          <img src={Message} alt="message" className="w-8 h-8 rounded-full object-cover" />
        </Link>
        <img src={Program} alt="avatar" className="w-8 h-8 rounded-full object-cover" />
        <FaChevronDown className="text-green-600 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
