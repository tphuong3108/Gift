import React, { useState, useEffect } from 'react';
import { userService } from '../../../src/services/userService';
import ProductCard from '../../../src/components/Product/ProductCard';
import FB from '../../../src/assets/img/facebook.png'; 
import Zalo from '../../../src/assets/img/zalo.png';  
import Gmail from '../../../src/assets/img/mail.png'; 
import Share from '../../../src/assets/img/share.png'; 

const ProfilePage = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const fetchUserData = () => {
      const userProfile = userService.getUserProfile(userId);  
      setUser(userProfile);
      setLoading(false);
    };

    fetchUserData();
  }, [userId]);

  if (loading) return <div>Đang tải...</div>;

  const toggleDropdown = () => setDropdownVisible(!isDropdownVisible);

  return (
    <div className="flex p-6 bg-green-50">
      {/* Thông tin người dùng bên trái */}
      <div className="w-1/3 bg-white rounded-lg shadow-md border-b-4 border-green-700">
        <div className="p-6 flex flex-col items-center">
          <img src={user.avatar} alt="Avatar" className="w-24 h-24 rounded-full mb-4" />
          <p className="text-2xl font-semibold text-green-700">{user.name}</p>
          
          {/* Số lượng followers và sản phẩm đã bán */}
          <div className="flex items-center text-gray-500 mt-2">
            <p className="mr-2">{user.followers} <span className="text-sm">followers</span></p>
            <p>{user.productsSold} <span className="text-sm">products sold</span></p>
          </div>
          <div className="flex justify-between w-full mt-4">
            <button onClick={toggleDropdown} className="text-gray-500">
              <img src={Share} alt="Share" className="w-6 h-6" />
            </button>
          </div>

          {/* Dropdown menu */}
          {isDropdownVisible && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg text-sm">
              <ul className="py-1">
                <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Chia sẻ trang cá nhân</a></li>
                <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Chat</a></li>
                <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Báo cáo người dùng</a></li>
              </ul>
            </div>
          )}

          <div className="mt-6 w-full">
            <button className="w-full py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">Theo dõi</button>
          </div>

          <div className="px-4 py-6 text-sm text-gray-500">
            <p><strong>Phản hồi chat:</strong> 95% (Trong 18 phút)</p>
            <p><strong>Đã tham gia:</strong> 1 ngày</p>
            <p><strong>Địa chỉ:</strong> Quận 1 - TP HCM</p>
          </div>

          {/* Biểu tượng mạng xã hội */}
          <div className="mt-4 flex space-x-4">
            <a href="#" className="flex items-center gap-1 text-blue-500 hover:text-blue-600">
              <img src={FB} alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="#" className="flex items-center gap-1 text-blue-500 hover:text-blue-600">
              <img src={Zalo} alt="Zalo" className="w-7 h-5" />
            </a>
            <a href="#" className="flex items-center gap-1 text-blue-500 hover:text-blue-600">
              <img src={Gmail} alt="Gmail" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Sản phẩm bên phải */}
      <div className="w-2/3 p-6">
        <h3 className="text-xl font-semibold text-green-700 mb-4">Sản phẩm đang hiển thị</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {user.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
