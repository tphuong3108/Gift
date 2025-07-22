import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm">
      <h1 className="text-green-600 text-2xl font-bold text-center mb-1">Món Quà Nhỏ</h1>
      <p className="text-center mb-6 font-medium">Đăng nhập</p>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Tên đăng nhập hoặc Email"
          className="w-full border rounded px-4 py-2 text-sm"
        />
        <input
          type="password"
          placeholder="Mật Khẩu"
          className="w-full border rounded px-4 py-2 text-sm"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700 text-sm"
        >
          Đăng Nhập
        </button>

        <div className="flex gap-2 justify-center mt-2">
          <button className="bg-red-600 text-white px-4 py-1 rounded text-sm">Google</button>
          <button className="bg-blue-600 text-white px-4 py-1 rounded text-sm">Facebook</button>
        </div>

        <p className="text-sm text-center mt-4">
          Chưa có tài khoản? <Link to="/register" className="text-green-600 font-medium">Đăng ký ngay</Link><br />
          <Link to="/" className="text-green-500 mt-2 inline-block">Trở về trang chủ</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
