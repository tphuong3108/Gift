import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Logo from '../../src/assets/img/logo_1.png';

const AuthLayout = () => {
  const location = useLocation();
  const isRegister = location.pathname.includes('register');

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Bên trái hoặc phải tùy theo isRegister */}
      {isRegister ? (
        <>
          {/* Logo - chỉ hiện ở md trở lên */}
          <div className="hidden md:flex md:w-1/2 items-center justify-center bg-[#E8F5E9]">
            <img src={Logo} alt="Logo" className="w-60" />
          </div>

          {/* Form content */}
          <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-4 py-6">
            <Outlet />
          </div>
        </>
      ) : (
        <>
          {/* Form content */}
          <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-4 py-6">
            <Outlet />
          </div>

          {/* Logo - chỉ hiện ở md trở lên */}
          <div className="hidden md:flex md:w-1/2 items-center justify-center bg-[#E8F5E9]">
            <img src={Logo} alt="Logo" className="w-60" />
          </div>
        </>
      )}
    </div>
  );
};

export default AuthLayout;
