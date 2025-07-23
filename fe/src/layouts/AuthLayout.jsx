import React from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../../src/assets/img/logo_1.png';

const AuthLayout = () => {
  return (
    <div className="flex h-screen bg-[#E8F5E9]">
      {/* Nội dung chính nằm bên trái */}
      <div className="flex-1 flex items-center justify-center">
        <Outlet />
      </div>

      <div className="hidden md:flex w-1/2 items-center justify-center">
        <img src={Logo} alt="Logo" className="w-60" />
      </div>
    </div>
  );
};

export default AuthLayout;
