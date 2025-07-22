import React, { useState } from 'react';
import Vector from '../../../src/assets/img/Vector.png';
import Book from '../../../src/assets/img/book.png';
import Game from '../../../src/assets/img/game.png';
import Blender from '../../../src/assets/img/blender.png';
import Laptop from '../../../src/assets/img/laptop.png';

const getIcon = (category) => {
  const icons = {
    'Quần áo': <img src={Vector} alt="Quần áo" className="h-10 mx-auto object-contain" />,
    'Sách vở': <img src={Book} alt="Sách vở" className="h-10 mx-auto object-contain" />,
    'Đồ chơi': <img src={Game} alt="Đồ chơi" className="h-10 mx-auto object-contain" />,
    'Đồ dùng': <img src={Blender} alt="Đồ dùng" className="h-10 mx-auto object-contain" />,
    'Đồ điện tử': <img src={Laptop} alt="Đồ điện tử" className="h-10 mx-auto object-contain" />,
  };
  return icons[category] || '🔍';
};

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const Categories = ['Quần áo', 'Sách vở', 'Đồ chơi', 'Đồ dùng', 'Đồ điện tử'];

  return (
    <section className="bg-[#E8F5E9] p-12 rounded-lg mb-6">
      <h2 className="text-2xl font-bold text-[#29752F]">
        DANH MỤC PHỔ BIẾN
      </h2>
      <p className="text-gray-600 mb-4 text-center">
        Khám phá các danh mục món đồ được chia sẻ nhiều nhất trong cộng đồng
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {Categories.map((item) => (
          <div
            key={item}
            onClick={() => setSelectedCategory(item)}
            className={`p-4 rounded-lg text-center cursor-pointer transition 
              ${
                selectedCategory === item
                  ? 'bg-white border-2 border-green-600 shadow-md'
                  : 'bg-white hover:bg-green-50'
              }`}
          >
            <div className="mb-2">{getIcon(item)}</div>
            <span
              className={`${
                selectedCategory === item ? 'text-green-700 font-semibold' : 'text-gray-700'
              }`}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
