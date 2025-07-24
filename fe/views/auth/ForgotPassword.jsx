import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (email.trim() === '') {
      alert('Vui lòng nhập email.');
      return;
    }
    navigate('/verify-otp');
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 w-full max-w-lg">
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-[#4CAF50] leading-tight">Món Quà Nhỏ</h2>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#326E51]">Quên mật khẩu</h1>
        </div>

        <p className="text-gray-600 text-sm mb-4">
          Nhập email của bạn để xác minh, chúng tôi sẽ gửi mã gồm 4 chữ số đến email của bạn.
        </p>

        <input
          type="email"
          placeholder="Nhập Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-[#4CAF50] text-white font-semibold py-2 rounded-md transition duration-300 hover:bg-green-600"
        >
          TIẾP TỤC
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
