import React from 'react';
import Register from '../../../src/assets/img/register.png';
import Icon3 from '../../../src/assets/img/icon3.png';
import Chat from '../../../src/assets/img/chat.png';
import Post from '../../../src/assets/img/post.png';

const DonationSteps = () => {
  const steps = [
    {
      icon: Register,
      title: 'Đăng ký tài khoản',
      desc: 'Tạo tài khoản để bắt đầu hành trình lan tỏa yêu thương.',
    },
    {
      icon: Icon3,
      title: 'Chọn chương trình phù hợp',
      desc: 'Khám phá chương trình để chia sẻ món quà đúng nơi cần.',
    },
    {
      icon: Chat,
      title: 'Liên hệ và gửi vật phẩm',
      desc: 'Gửi món quà đến địa chỉ bạn chọn thông qua tin nhắn.',
    },
    {
      icon: Post,
      title: 'Lan tỏa thông điệp',
      desc: 'Chia sẻ câu chuyện và khuyến khích cộng đồng cùng hành động.',
    },
  ];

  return (
    <div className="bg-[#E8F5E9] py-12 px-4 sm:px-8 rounded-lg">
      <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
        CÁCH THỨC QUYÊN GÓP
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center text-gray-700">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={step.icon}
              alt={step.title}
              className="w-16 h-16 mb-3 object-contain"
            />
            <p className="font-semibold text-base">{step.title}</p>
            <p className="text-sm mt-1 max-w-[200px]">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationSteps;
