import React from 'react';
import { Trash2 } from 'lucide-react';

const FailurePopup = ({ onClose, requestTime }) => {
  const handleOverlayClick = (e) => {
    if (e.target.id === 'overlay') {
      onClose();
    }
  };

  return (
    <div
      id="overlay"
      onClick={handleOverlayClick}
      className="absolute inset-0 z-50 flex items-center justify-center"
    >
     <div class="absolute w-full h-full bg-black opacity-50"></div>

      <div className="relative z-10 bg-white rounded-xl shadow-lg p-6 w-full max-w-sm text-center">
        <div className="w-16 h-16 mx-auto -mt-16 bg-red-100 rounded-full flex items-center justify-center border-4 border-white shadow">
          <Trash2 size={36} className="text-red-600" />
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-4">Thất bại</h2>
        <p className="text-sm text-gray-600 mt-2">
          Bạn đã gửi yêu cầu nhận sản phẩm này<br />
          lúc {requestTime}
        </p>

        <div className="flex justify-center gap-2 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200"
          >
            Đóng
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="px-4 py-2 rounded bg-red-600 text-white font-semibold hover:bg-red-700"
          >
            Quay về trang chủ
          </button>
        </div>
      </div>
    </div>
  );
};

export default FailurePopup;
