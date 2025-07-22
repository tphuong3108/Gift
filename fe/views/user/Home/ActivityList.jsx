import React from 'react';
import Register from '../../../src/assets/img/register.png';
import Photo from '../../../src/assets/img/photo.png';
import Description from '../../../src/assets/img/description.png';
import Post from '../../../src/assets/img/post.png';

const ActivityList = () => {
  const activities = [
    {
      title: 'Đăng ký tài khoản',
      desc: 'Tạo tài khoản để bắt đầu sử dụng món đồ',
      icon: Register,
    },
    {
      title: 'Chụp ảnh món đồ',
      desc: 'Đăng ảnh để nhận được hỗ trợ',
      icon: Photo,
    },
    {
      title: 'Mô tả chi tiết',
      desc: 'Mô tả để nhận được hỗ trợ',
      icon: Description,
    },
    {
      title: 'Đăng bài và chờ',
      desc: 'Tăng cơ hội nhận được hỗ trợ',
      icon: Post,
    },
  ];

  return (
    <section className="bg-gray-50 p-6 rounded-lg mb-6">
      <h2 className="text-2xl font-bold text-[#29752F]">
        CÁC HOẠT ĐỘNG
      </h2>
      <p className="text-gray-600 mb-4 text-center">
        Khám phá các danh mục món đồ được chia sẻ nhiều nhất trong cộng đồng
      </p>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        {activities.map((item, index) => (
          <div key={index} className="flex-1 text-center">
            <img
              src={item.icon}
              alt={item.title}
              className="h-16 w-16 mx-auto mb-2 object-contain"
            />
            <p className="text-gray-700 font-medium">{item.title}</p>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActivityList;
