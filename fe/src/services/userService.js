// src/services/userService.js
import Avatar from '../../src/assets/img/postimg.jpg';  // Đảm bảo đường dẫn này đúng
import { productService } from './productService';  // Đảm bảo bạn đã import đúng sản phẩm

export const userService = {
  getUserProfile: (userId) => {
    const mockUserData = {
      id: userId,
      name: "HIKO",
      avatar: Avatar, 
      followers: 312,
      productsSold: 48,
      phone: "123456789",
      location: "Quận 1, TP HCM",
      products: productService.getProductsByUser("Thành Nhân"), 
    };
    return mockUserData; 
  },
};
