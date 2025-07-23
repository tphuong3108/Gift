import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userService } from '../../src/services/userService'; 

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = userService.login(username, password);
    if (result.success) {
      navigate('/');
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm mx-auto mt-12">
      <h1 className="text-green-600 text-2xl font-bold text-center mb-1">Món Quà Nhỏ</h1>
      <p className="text-center mb-6 font-medium">Đăng nhập</p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tên đăng nhập hoặc Email"
          className="w-full border rounded px-4 py-2 text-sm"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          className="w-full border rounded px-4 py-2 text-sm"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700 text-sm"
        >
          Đăng Nhập
        </button>

        <div className="flex gap-2 justify-center mt-2">
          <button type="button" className="bg-red-600 text-white px-4 py-1 rounded text-sm">Google</button>
          <button type="button" className="bg-blue-600 text-white px-4 py-1 rounded text-sm">Facebook</button>
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
