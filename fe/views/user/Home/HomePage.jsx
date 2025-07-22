import React from 'react';
import Banner from './Banner';
import ActivityList from './ActivityList';
import Program from './Program';
import Community from './Community';
import WhyChooseUs from './WhyChooseUs';
import UserStories from './UserStories';
import CallToAction from './CallToAction';
import PopularCategories from './PopularCategories';
import Categories from './categories';
import search from '../../../src/assets/img/search.png';
import camera from '../../../src/assets/img/camera.png';

const HomePage = () => {
  return (
    <div className="px-4 sm:px-6 py-4">
      <Banner />

      {/* Thanh tìm kiếm responsive */}
      <div className="mb-6 flex justify-center">
        <div className="w-full max-w-4xl bg-[#E8F5E9] rounded-full flex items-center px-4 sm:px-6 py-2 sm:h-12 shadow-inner">
          <img
            src={search}
            alt="Tìm kiếm"
            className="w-5 h-5 flex-shrink-0"
          />
          <input
            type="text"
            placeholder="Nhập đồ mà bạn muốn tìm kiếm...."
            className="flex-grow bg-transparent focus:outline-none text-gray-700 placeholder:text-gray-500 px-2 text-sm sm:text-base"
          />
          <img
            src={camera}
            alt="Camera"
            className="w-5 h-5 flex-shrink-0"
          />
        </div>
      </div>

      {/* Các thành phần chính */}
      <Categories />

      <div className="mb-6">
        <PopularCategories />
      </div>

      <div className="mb-6">
        <ActivityList />
      </div>

      <div className="mb-6">
        <Community />
      </div>

      <div className="mb-6">
        <Program />
      </div>

      <div className="mb-6">
        <WhyChooseUs />
      </div>

      <div className="mb-6">
        <UserStories />
      </div>

      <div className="mb-6">
        <CallToAction />
      </div>
    </div>
  );
};

export default HomePage;
