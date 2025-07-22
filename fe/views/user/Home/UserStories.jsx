import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import Picture from '../../../src/assets/img/image_1.png';
import Imange from '../../../src/assets/img/image_2.png';

const testimonials = [
  { id: 1, name: 'Anh Hùng, Q.1', image: Picture, quote: 'Mình tặng một chiếc áo khoác cũ, không ngờ lại giúp được một bạn nhỏ.', rating: 5 },
  { id: 2, name: 'Chị Lan, Q.3', image: Imange, quote: 'Thật tuyệt khi có thể chia sẻ đồ dùng còn mới cho người cần nó hơn.', rating: 4 },
  { id: 3, name: 'Chị An, Thủ Đức', image: Imange, quote: 'Nhờ mọi người tặng sách mà mình có thêm tài liệu học tốt hơn.', rating: 5 },
];

const TestimonialCard = ({ data, isMain }) => (
  <div
    className={`bg-white rounded-lg shadow-md px-6 py-6 transition-all duration-300 flex-shrink-0
      ${isMain ? 'scale-105 z-10 max-w-sm w-full' : 'scale-95 opacity-70 max-w-xs w-full'}
    `}
  >
    <img
      src={data.image}
      alt={data.name}
      className={`mx-auto mb-4 rounded-full ${isMain ? 'w-24 h-24' : 'w-20 h-20'}`}
    />
    <p className={`${isMain ? 'text-base' : 'text-sm'} text-gray-700 italic`}>
      “{data.quote}”
    </p>
    {isMain && (
      <div className="flex justify-center text-orange-400 mb-1 mt-2">
        {Array.from({ length: data.rating }).map((_, i) => (
          <FaStar key={i} className="mx-0.5" />
        ))}
      </div>
    )}
    <p className={`${isMain ? 'text-sm font-semibold' : 'text-sm font-medium'} text-green-700 mt-2`}>
      – {data.name}
    </p>
  </div>
);

const UserStories = () => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const getIndex = (offset) => (current + offset + testimonials.length) % testimonials.length;

  return (
    <section className="bg-[#E8F5E9] px-4 sm:px-6 py-10 sm:py-12 rounded-lg text-center relative">
      <h2 className="text-2xl font-bold text-[#29752F]">CÂU CHUYỆN CỦA NGƯỜI DÙNG</h2>
      <p className="text-[#3E3C63] mb-8">Những chia sẻ của các cá nhân đã đồng hành cùng chúng tôi</p>

      {/* Cards container */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 px-2">
        <TestimonialCard data={testimonials[getIndex(-1)]} />
        <TestimonialCard data={testimonials[getIndex(0)]} isMain />
        <TestimonialCard data={testimonials[getIndex(1)]} />
      </div>

      {/* Controls */}
      <div className="flex justify-center mt-6 gap-4">
        <button
          onClick={prev}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow text-green-700 hover:bg-green-100 transition"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={next}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow text-green-700 hover:bg-green-100 transition"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default UserStories;
