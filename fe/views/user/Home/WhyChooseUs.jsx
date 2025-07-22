import React from 'react';
import { FaRecycle, FaHeart, FaLightbulb, FaRocket } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className="bg-white px-6 py-10 rounded-lg mb-6 text-center">
      <h2 className="text-2xl font-bold text-[#29752F]">
        VÌ SAO NÊN CHỌN CHÚNG TÔI
      </h2>
      <p className="text-[#3E3C63] text-base mb-8">
        Chúng tôi hướng đến một cộng đồng chia sẻ tích cực và bền vững
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-[#F9F9F9] p-6 rounded-lg shadow text-center">
          <FaRecycle className="text-green-700 text-3xl mx-auto mb-4" />
          <h3 className="text-lg font-bold text-green-800 mb-2">Bảo vệ môi trường</h3>
          <p className="text-sm text-gray-600">
            Giảm rác thải bằng cách tái sử dụng đồ cũ, góp phần bảo vệ hành tinh xanh.
          </p>
        </div>
        <div className="bg-[#F9F9F9] p-6 rounded-lg shadow text-center">
          <FaHeart className="text-green-700 text-3xl mx-auto mb-4" />
          <h3 className="text-lg font-bold text-green-800 mb-2">Lan tỏa yêu thương</h3>
          <p className="text-sm text-gray-600">
            Chia sẻ đồ dùng với những người cần, mang lại niềm vui và sự hỗ trợ.
          </p>
        </div>

        <div className="bg-[#F9F9F9] p-6 rounded-lg shadow text-center">
          <FaLightbulb className="text-green-700 text-3xl mx-auto mb-4" />
          <h3 className="text-lg font-bold text-green-800 mb-2">Văn minh & tiết kiệm</h3>
          <p className="text-sm text-gray-600">
            Thói quen tái sử dụng giúp tiết kiệm chi phí và xây dựng lối sống bền vững.
          </p>
        </div>
        <div className="bg-[#F9F9F9] p-6 rounded-lg shadow text-center">
          <FaRocket className="text-green-700 text-3xl mx-auto mb-4" />
          <h3 className="text-lg font-bold text-green-800 mb-2">Dễ dàng sử dụng</h3>
          <p className="text-sm text-gray-600">
            Giao diện thân thiện, thao tác đơn giản, ai cũng có thể tham gia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
