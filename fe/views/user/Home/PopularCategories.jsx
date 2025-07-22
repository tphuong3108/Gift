import React from "react";
import ProductCard from "../../../src/components/Product/ProductCard";
import { productService } from "../../../src/services/productService";
import HorizontalSlider from "../../../src/components/Common/HorizontalSlider";

const PopularCategories = () => {
  const products = productService.getPopularProducts();

  return (
    <section className="bg-[#F8F9F9] p-6 rounded-lg mb-10">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-[#29752F]">Sản phẩm phổ biến</h2>
          <p className="text-gray-600 text-sm">
            Đây là danh sách các sản phẩm phổ biến nhất
          </p>
        </div>
        <button className="bg-[#4CAF50] hover:bg-[#43A047] text-white text-sm font-medium px-4 py-2 rounded-full">
          Xem thêm →
        </button>
      </div>

      <HorizontalSlider
        title=""
        items={products}
        renderItem={(product) => <ProductCard product={product} />}
      />
    </section>
  );
};

export default PopularCategories;
