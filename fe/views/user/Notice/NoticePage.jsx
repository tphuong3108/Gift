import React from 'react';
import { Link } from "react-router-dom";
import noticeImg from '../../../src/assets/img/notice.png';

const NoticePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-6 rounded-2xl shadow-md text-center max-w-sm w-full">
        <img
          src={noticeImg}
          alt="Thông báo"
          className="w-24 h-24 mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Thông báo!!!</h2>
        <p className="text-gray-600 mb-6">
          Trang web đang được phát triển <br />
          hãy quay lại sau nhé !!!!
        </p>
        <Link
            to="/"
            className="inline-block text-white px-6 py-2 rounded-full transition font-medium shadow"
            style={{
                background: 'linear-gradient(90deg, #53A059, rgba(4, 120, 87, 0.8), #4CAF50)',
            }}
            >
            Quay lại trang chủ
        </Link>
      </div>
    </div>
  );
};

export default NoticePage;
