import React from 'react';
import Image from '../../../src/assets/img/image.png';

const Banner = () => {
  return (
    <section className="bg-[#E8F5E9] py-6 px-6 rounded-lg mb-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-[#29752F] leading-snug">
          Tặng món đồ cũ, <br className="hidden md:block" />
          trao đi yêu thương mới
        </h1>
        <p className="text-gray-600 text-sm mt-2">
          Lan tỏa niềm vui từ những điều nhỏ bé
        </p>
        <p className="text-gray-600 text-sm mt-2">
          Chia sẻ những món đồ không dùng đến với cộng đồng. Miễn phí, nhanh chóng, đầy nhân văn
        </p>

        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 sm:gap-4">
          <button className="bg-[#53A05A] text-white px-4 py-2 rounded-full hover:bg-green-700 transition w-full sm:w-auto">
            Bắt đầu tặng đồ
          </button>
          <button className="bg-white text-[#53A05A] border border-[#53A05A] px-4 py-2 rounded-full hover:bg-gray-100 transition w-full sm:w-auto">
            Tìm món đồ cần thiết
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src={Image}
          alt="Banner"
          className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default Banner;
