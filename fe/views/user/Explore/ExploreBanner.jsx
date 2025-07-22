import React from 'react';
import bannerImage from '../../../src/assets/img/banner.png';
import search from '../../../src/assets/img/search.png';
import camera from '../../../src/assets/img/camera.png';

const ExploreBanner = () => {
  return (
    <div className="bg-[#F4FCEF] p-4 sm:p-6 rounded-md">
      {/* Banner nội dung */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-4 sm:p-6 rounded-xl shadow">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl font-bold text-[#007E2F]">
            Khám phá đồ tặng miễn phí
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Tìm kiếm, lọc và chọn món đồ bạn cần từ cộng đồng. Tất cả đều miễn phí, thân thiện và dễ sử dụng!
          </p>
          <button className="mt-4 bg-[#00A651] hover:bg-[#007E2F] text-white text-sm font-semibold px-5 py-2 rounded-full">
            Bắt đầu khám phá
          </button>
        </div>

        {/* Hình ảnh */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={bannerImage}
            alt="Món quà cũ"
            className="w-full max-w-xs sm:max-w-sm md:max-w-[300px] h-auto object-contain"
          />
        </div>
      </div>

      {/* Thanh tìm kiếm */}
      <div className="mt-6 w-full flex justify-center">
        <div className="w-full max-w-3xl bg-white rounded-full flex items-center px-4 sm:px-6 py-2 shadow-md">
          <img
            src={search}
            alt="Tìm kiếm"
            className="w-5 h-5 flex-shrink-0"
          />
          <input
            type="text"
            placeholder="Nhập đồ mà bạn muốn tìm kiếm...."
            className="flex-grow bg-white focus:outline-none text-gray-700 placeholder:text-gray-500 px-2 text-sm sm:text-base"
          />
          <img
            src={camera}
            alt="Camera"
            className="w-5 h-5 flex-shrink-0"
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreBanner;
