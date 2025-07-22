import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProductCard from '../../../src/components/Product/ProductCard';
import { productService } from '../../../src/services/productService';

const NewlyPosted = () => {
  const products = productService.getNewProducts();

  return (
    <section className="bg-gradient-to-b from-[#73C076] to-white/0 p-8 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white drop-shadow">MỚI ĐĂNG</h2>
        <div className="flex gap-4 text-white text-xl">
          <FaChevronLeft className="cursor-pointer" />
          <FaChevronRight className="cursor-pointer" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default NewlyPosted;
