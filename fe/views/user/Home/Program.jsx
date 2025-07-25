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
    <section className="bg-[#E8F5E9] p-6 rounded-lg mb-6 relative">
      <div className="container mx-auto px-2">
        <div className="flex justify-between items-center mb-2 container mx-auto px-2">
        <h2 className="text-3xl font-bold text-[#29752F]">CHƯƠNG TRÌNH</h2>
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
        Tham gia các chương trình ý nghĩa để lan tỏa tinh thần chia sẻ trong
        cộng đồng
      </p>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-6">
          {programs.map((program) => {
            const progress = (program.raised / program.goal) * 100;

            return (
              <div
                key={program.id}
                className="bg-white rounded-lg shadow-md w-full flex flex-col overflow-hidden"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-60 object-cover rounded-t-lg"
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
                  <div className="w-full bg-gray-200 h-2 rounded mb-2">
                    <div
                      className="bg-green-600 h-2 rounded"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">
                    Mục Tiêu: {program.goal.toLocaleString()} VNĐ
                  </p>
                  <button className="mt-auto bg-green-600 text-white px-4 py-2 w-full rounded-full hover:bg-green-700 transition">
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
