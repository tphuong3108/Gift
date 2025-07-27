import React from 'react';
import Icon from '../../../src/assets/img/icon_2.png';
import ProductCard from '../../../src/components/Product/ProductCard';
import { productService } from '../../../src/services/productService';

const NewlyPosted = () => {
  const products = productService.getNewProducts().slice(0, 4);

  const handleNext = () => {
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#73C076] to-white/0 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h2 className="text-2xl font-bold text-white drop-shadow">MỚI ĐĂNG</h2>
         <button
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 hover:scale-105 transition"
            onClick={handleNext}
          >
            <img
              src={Icon}
              alt="Next"
              className="w-full h-full object-contain"
            />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewlyPosted;
