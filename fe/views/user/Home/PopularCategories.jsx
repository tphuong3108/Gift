import React from "react";
import ProductCard from "../../../src/components/Product/ProductCard";
import { productService } from "../../../src/services/productService";

const PopularCategories = () => {
  const products = productService.getPopularProducts(); 

  return (
    <section className="bg-[#F8F9F9] py-10 rounded-lg mb-10">
      <div className="container mx-auto px-2">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-4xl font-bold text-[#29752F]">Sản phẩm phổ biến</h2>
            <p className="text-gray-600 text-sm">
              Đây là danh sách các sản phẩm phổ biến nhất
            </p>
          </div>
          <button className="bg-[#4CAF50] hover:bg-[#43A047] text-white text-sm font-medium px-4 py-2 rounded-full">
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
