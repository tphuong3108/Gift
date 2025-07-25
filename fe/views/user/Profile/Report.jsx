import React  from 'react';

const Report = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute w-full h-full bg-black opacity-50" onClick={onClose}></div>

      <div className="relative bg-white rounded-xl p-6 w-[500px] z-50 shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-left">BÁO CÁO VI PHẠM</h2>

        <div className="mb-4">
          <label className="block mb-1 text-left font-medium">TIN NÀY CÓ VẤN ĐỀ GÌ</label>
          <select className="w-full border rounded-md p-2">
            <option>CHỌN VẤN ĐỀ</option>
            <option>Thông tin sai sự thật</option>
            <option>Hành vi lừa đảo</option>
            <option>Nội dung không phù hợp</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-left font-medium">CHI TIẾT</label>
          <textarea className="w-full border rounded-md p-2" rows={4}></textarea>
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-left font-medium">Thông tin để "MÓN QUÀ NHỎ" liên hệ với bạn khi cần thiết</label>
          <input type="email" placeholder="Email" className="w-full mb-2 border rounded-md p-2" />
          <input type="text" placeholder="Số điện thoại" className="w-full border rounded-md p-2" />
        </div>
        <div className="flex gap-4 mt-4">
          <button
            onClick={onClose}
            className="w-1/2 py-2 rounded-md border border-gray-300"
          >
            Đóng
          </button>
          <button
            type="submit"
            className="w-1/2 py-2 rounded-md text-white"
            style={{ backgroundColor: '#047857' }}
          >
            Gửi báo cáo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Report;
