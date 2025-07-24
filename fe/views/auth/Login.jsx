import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userService } from '../../src/services/userService';
import FB from '../../src/assets/img/FB.png';
import GG from '../../src/assets/img/Google.png';
import Eye from '../../src/assets/img/Eye.png';
import Eye1 from '../../src/assets/img/eye1.png';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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

  const handleGoogleLogin = () => {
    alert("Google login click");
  };

  const handleFacebookLogin = () => {
    alert("Facebook login click");
  };

  return (
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm">
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

        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Mật khẩu"
            className="w-full border rounded px-4 py-2 text-sm pr-10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <img
            src={showPassword ? Eye : Eye1}
            alt="Toggle"
            onClick={() => setShowPassword(!showPassword)}
            className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          />
        </div>

        <div className="flex justify-end text-xs">
          <Link
            to="/forgot-password"
            className="text-green-600 hover:underline"
          >
            Quên mật khẩu?
          </Link>
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-40 bg-green-600 text-white py-2 rounded-full hover:bg-green-700 text-sm"
          >
            Đăng Nhập
          </button>
        </div>

        <div className="relative text-center my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative bg-white px-3 text-sm text-gray-500">Hoặc</div>
        </div>
        <div className="flex justify-between gap-3">
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="w-1/2 hover:opacity-90"
          >
            <img src={GG} alt="Google Login" className="w-full" />
          </button>

          <button
            onClick={handleFacebookLogin}
            type="button"
            className="w-1/2 hover:opacity-90"
          >
            <img src={FB} alt="Facebook Login" className="w-full" />
          </button>
        </div>


        <p className="text-sm text-center mt-6">
          Chưa có tài khoản?{' '}
          <Link to="/register" className="text-green-600 font-medium">Đăng ký ngay</Link><br />
          <Link to="/" className="text-green-500 mt-2 inline-block">Trở về trang chủ</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
