import React from 'react';
import successIcon from '../../../src/assets/img/success.png'
import { useNavigate } from 'react-router-dom';

const SuccessPopup = ({ recipientName = 'Người nhận', onClose }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
      <div className="relative bg-[#F2FDF6] rounded-xl w-[400px] px-6 pt-12 pb-6 text-center shadow-lg">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#D1FADF] w-16 h-16 rounded-full flex items-center justify-center border-4 border-[#F2FDF6]">
          <img src={successIcon} alt="success" className="w-8 h-8" />
        </div>

        <h2 className="text-xl font-bold text-[#2C3E50] mb-1">Thành công</h2>

        <p className="text-sm text-[#2C3E50] mb-6">
          Sản phẩm của bạn đã được chấp thuận gửi cho<br />
          <span className="font-semibold">{recipientName}</span>
        </p>

        <div className="flex justify-center gap-2">
         <button
            onClick={onClose}
            className="w-1/2 bg-gray-200 text-gray-600 font-semibold py-2 rounded hover:bg-gray-300"
            >
            Đóng
        </button>
          <button
            onClick={() => navigate('/')}
            className="w-1/2 bg-green-700 text-white font-semibold py-2 rounded hover:bg-green-800"
          >
            Quay về trang chủ
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPopup;
