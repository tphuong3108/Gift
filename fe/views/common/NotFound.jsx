import React from 'react';
import Notfound from '../common/NotFound'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#F1FAF2] flex flex-col items-center justify-center text-center px-4">
      <img src= {Notfound} alt="404 robot" className="w-60 mb-6" />
      <Link
        to="/"
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm"
      >
        Quay về trang chủ
      </Link>
    </div>
  );
};

export default NotFound;
