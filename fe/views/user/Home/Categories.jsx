import React, { useState } from 'react';
import Vector from '../../../src/assets/img/Vector.png';
import Book from '../../../src/assets/img/book.png';
import Game from '../../../src/assets/img/game.png';
import Blender from '../../../src/assets/img/blender.png';
import Laptop from '../../../src/assets/img/laptop.png';

const getIcon = (category) => {
  const icons = {
    'Quần áo': <img src={Vector} alt="Quần áo" className="h-38 mx-auto object-contain" />,
    'Sách vở': <img src={Book} alt="Sách vở" className="h-38 mx-auto object-contain" />,
    'Đồ chơi': <img src={Game} alt="Đồ chơi" className="h-38 mx-auto object-contain" />,
    'Đồ dùng': <img src={Blender} alt="Đồ dùng" className="h-38 mx-auto object-contain" />,
    'Đồ điện tử': <img src={Laptop} alt="Đồ điện tử" className="h-38 mx-auto object-contain" />,
  };
  return icons[category] || null;
};

const Categories = () => {
  const [ setSelectedCategory] = useState(null);
  const categories = ['Quần áo', 'Sách vở', 'Đồ chơi', 'Đồ dùng', 'Đồ điện tử'];

  return (
    <section className="bg-[#E8F5E9] p-12 rounded-lg mb-6">
      <div className="container mx-auto px-2">
      <h2 className="text-2xl font-bold text-[#29752F] text-center mb-2">
        DANH MỤC PHỔ BIẾN
      </h2>
      <p className="text-gray-600 text-center mb-6">
        Khám phá các danh mục món đồ được chia sẻ nhiều nhất trong cộng đồng
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {categories.map((item) => (
          <div
            key={item}
            onClick={() => setSelectedCategory(item)}
            className="cursor-pointer transition transform hover:scale-105"
          >
            {getIcon(item)}
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Categories;
