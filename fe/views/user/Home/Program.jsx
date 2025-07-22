import React from 'react';
import ProgramImg from '../../../src/assets/img/program.png'; 
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const programs = [
  {id: 1, category: 'Trẻ Em', title: 'Sách Cho Em', description: 'Quyên Góp Sách Giáo Khoa, Truyện Thiếu Nhi Cho Trẻ Em Hiếu Học Vùng Cao Khó Khăn', raised: 600000, goal: 100000000, image: ProgramImg, },
  {id: 2, category: 'Trẻ Em', title: 'Sách Cho Em', description:'Quyên Góp Sách Giáo Khoa, Truyện Thiếu Nhi Cho Trẻ Em Hiếu Học Vùng Cao Khó Khăn', raised: 600000, goal: 100000000, image: ProgramImg, },
  {id: 3, category: 'Trẻ Em', title: 'Sách Cho Em', description: 'Quyên Góp Sách Giáo Khoa, Truyện Thiếu Nhi Cho Trẻ Em Hiếu Học Vùng Cao Khó Khăn', raised: 600000, goal: 100000000, image: ProgramImg, },
  {
    id: 4,
    category: 'Trẻ Em',
    title: 'Sách Cho Em',
    description:
      'Quyên Góp Sách Giáo Khoa, Truyện Thiếu Nhi Cho Trẻ Em Hiếu Học Vùng Cao Khó Khăn',
    raised: 600000,
    goal: 100000000,
    image: ProgramImg,
  },
  {
    id: 5,
    category: 'Trẻ Em',
    title: 'Sách Cho Em',
    description:
      'Quyên Góp Sách Giáo Khoa, Truyện Thiếu Nhi Cho Trẻ Em Hiếu Học Vùng Cao Khó Khăn',
    raised: 600000,
    goal: 100000000,
    image: ProgramImg,
  },
];

const Program = () => {
  return (
    <section className="bg-[#E8F5E9] p-6 rounded-lg mb-6 relative">
      {/* Tiêu đề + icon điều hướng */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-bold text-[#29752F]">CHƯƠNG TRÌNH</h2>
        <div className="flex gap-2 text-[#29752F]">
          <button className="p-2 hover:bg-green-100 rounded-full transition">
            <FaChevronLeft />
          </button>
          <button className="p-2 hover:bg-green-100 rounded-full transition">
            <FaChevronRight />
          </button>
        </div>
      </div>

      <p className="text-gray-700 mb-6">
        Tham gia các chương trình ý nghĩa để lan tỏa tinh thần chia sẻ trong cộng đồng
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {programs.map((program) => {
          const progress = (program.raised / program.goal) * 100;

          return (
            <div key={program.id} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-36 object-cover rounded mb-4"
              />
              <p className="text-green-700 text-sm font-medium mb-1">{program.category}</p>
              <h3 className="font-bold mb-1">{program.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{program.description}</p>
              <div className="mb-1 text-sm text-gray-600 flex justify-between">
                <span>Tiến Độ</span>
                <span>{program.raised.toLocaleString()} VNĐ</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded mb-2">
                <div
                  className="bg-green-600 h-2 rounded"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Mục Tiêu: {program.goal.toLocaleString()} VNĐ
              </p>
              <button className="bg-green-600 text-white px-4 py-2 w-full rounded hover:bg-green-700 transition">
                THAM GIA NGAY
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Program;
