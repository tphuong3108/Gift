import React from 'react';
import ProgramImg from '../../../src/assets/img/program.png';
import Icon from '../../../src/assets/img/icon.png';

const programs = [
  {
    id: 1,
    category: 'Trẻ Em',
    title: 'Sách Cho Em',
    description:
      'Quyên Góp Sách Giáo Khoa, Truyện Thiếu Nhi Cho Trẻ Em Hiếu Học Vùng Cao Khó Khăn',
    raised: 600000,
    goal: 100000000,
    image: ProgramImg,
  },
  {
    id: 2,
    category: 'Trẻ Em',
    title: 'Sách Cho Em',
    description:
      'Quyên Góp Sách Giáo Khoa, Truyện Thiếu Nhi Cho Trẻ Em Hiếu Học Vùng Cao Khó Khăn',
    raised: 600000,
    goal: 100000000,
    image: ProgramImg,
  },
  {
    id: 3,
    category: 'Trẻ Em',
    title: 'Sách Cho Em',
    description:
      'Quyên Góp Sách Giáo Khoa, Truyện Thiếu Nhi Cho Trẻ Em Hiếu Học Vùng Cao Khó Khăn',
    raised: 600000,
    goal: 100000000,
    image: ProgramImg,
  },
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
    <section className="bg-[#E8F5E9] p-6 rounded-none mb-6 relative">
    <div className="container mx-auto px-2">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-3xl font-bold text-[#2E5E31]">CHƯƠNG TRÌNH</h2>
        <div className="flex gap-2">
          <button className="w-15 h-15 hover:scale-105 transition">
            <img
              src={Icon}
              alt="Next"
              className="w-full h-full object-contain"
            />
          </button>
        </div>
      </div>

      <p className="text-gray-700 mb-6">
        Tham gia các chương trình ý nghĩa để lan tỏa tinh thần chia sẻ trong cộng đồng
      </p>
      <div className="px-2 sm:px-4 lg:px-6">
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-6">
          {programs.map((program) => {
            const progress = (program.raised / program.goal) * 100;

            return (
              <div
                key={program.id}
                className="bg-white rounded-none shadow-md w-full flex flex-col overflow-hidden "
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-50 object-cover rounded-none"
                />
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-green-700 text-sm font-medium mb-1">
                    {program.category}
                  </p>
                  <h3 className="font-bold mb-1">{program.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 break-words">
                    {program.description}
                  </p>
                  <div className="mb-1 text-sm text-gray-600 flex justify-between">
                    <span>Tiến Độ</span>
                    <span>{program.raised.toLocaleString()} VNĐ</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-none">
                    <div
                      className="bg-green-600 h-2 rounded-none"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">
                    Mục Tiêu: {program.goal.toLocaleString()} VNĐ
                  </p>
                 <button className="mt-auto self-center bg-green-600 text-white text-sm px-3 py-2 rounded-full hover:bg-green-700 transition w-fit">
                    THAM GIA NGAY
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
  );
};

export default Program;
