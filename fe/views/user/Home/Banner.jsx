import React from 'react';
import Image from '../../../src/assets/img/image.png';
import search from '../../../src/assets/img/search.png';

const Banner = () => {
  return (
    <div className="w-full bg-[#E8F5E952] mb-10 ">
      <div className="max-w-7xl container mx-auto px-2 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1 text-center md:text-left">
         <h2 className="text-[28px] md:text-[35px] font-bold text-[#29752F] leading-tight font-sans">
              Tặng món đồ cũ, <br className="hidden md:block" />
              trao đi yêu thương mới
            </h2>
            <p className="text-gray-700 text-xs md:text-sm mt-3 font-sans">
              Lan tỏa niềm vui từ những điều nhỏ bé
            </p>
            <p className="text-gray-700 text-xs md:text-sm mt-2 font-sans">
              Chia sẻ những món đồ không dùng đến với cộng đồng. Miễn phí, nhanh chóng, đầy nhân văn
            </p>
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
            <button className="h-12 bg-[#2E7D32] text-white px-6 rounded-full hover:bg-green-700 transition w-full sm:w-auto text-sm font-sans">
              Bắt đầu tặng đồ
            </button>
            <button className="h-12 bg-white text-[#53A05A] border border-[#53A05A] px-6 rounded-full hover:bg-gray-100 transition w-full sm:w-auto flex items-center gap-2 text-sm font-sans">
              <img src={search} alt="Tìm kiếm" className="w-5 h-5 flex-shrink-0" />
              Tìm món đồ cần thiết
            </button>
          </div>  
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={Image}
            alt="Banner"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="border-b border-[#000000B2] w-full"></div>
    </div>
  );
};

export default Banner;
