import React from "react";
import ProductCard from "../../../src/components/Product/ProductCard";
import { productService } from "../../../src/services/productService";

const PopularCategories = () => {
  const products = productService.getPopularProducts(); 

  return (
    <section className="bg-[#F8F9F9] py-10 rounded-lg mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-10"> 
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-4xl font-bold text-[#2E5E31] mb-2">Sản phẩm phổ biến</h2>
            <p className="font-[Inter] text-gray-600 text-m">
              Đây là danh sách các sản phẩm phổ biến nhất
            </p>
          </div>
          <button className="bg-[#18A661] hover:bg-[#18A661] text-white text-sm font-medium px-4 py-2 rounded-full">
            Xem thêm →
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
