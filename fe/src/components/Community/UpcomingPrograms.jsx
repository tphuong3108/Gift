import React from 'react';

const mockPrograms = [
  { id: 1, day: '03', month: 'Tháng 10', title: 'Sách cho em', author: 'Thành Nhân - Dudi Software' },
  { id: 2, day: '06', month: 'Tháng 10', title: 'Sách cho em', author: 'Thành Nhân - Dudi Software' },
  { id: 3, day: '06', month: 'Tháng 10', title: 'Sách cho em', author: 'Thành Nhân - Dudi Software' },
];

const UpcomingPrograms = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow text-sm">
      <h3 className="font-semibold text-green-700 mb-2">Các chương trình sắp diễn ra</h3>
      <div className="space-y-4">
        {mockPrograms.map((item) => (
          <div key={item.id} className="flex items-start gap-3">
            <div className="flex flex-col items-center justify-center bg-green-100 text-green-800 rounded px-2 py-1 text-xs font-semibold w-10 h-10 text-center">
              <span>{item.day}</span>
              <span>{item.month}</span>
            </div>
            <div className="flex-1">
              <p className="font-medium">{item.title}</p>
              <p className="text-gray-500 text-xs">{item.author}</p>
              <a href="#" className="text-green-600 text-xs hover:underline">Chi tiết</a>
            </div>
          </div>
        ))}
      </div>
      <div className="text-xs text-green-600 text-right mt-2 cursor-pointer hover:underline">
        Xem thêm →
      </div>
    </div>
  );
};

export default UpcomingPrograms;
