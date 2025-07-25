import React from 'react';
import ProductCard from '../../../src/components/Product/ProductCard';

const ProductSection = ({ selectedTab, setSelectedTab, products, isOwner, onProductClick }) => (
  <>
    <div className="flex gap-8 mb-4 border-b border-gray-200">
      {['displaying', 'given'].map((tab) => (
        <button
          key={tab}
          className={`py-2 font-semibold ${
            selectedTab === tab ? 'border-b-4 border-green-600 text-green-600' : 'text-gray-500'
          }`}
          onClick={() => setSelectedTab(tab)}
        >
          {tab === 'displaying' ? 'Sản phẩm đang hiển thị' : 'Sản phẩm đã cho'}
        </button>
      ))}
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} isOwner={isOwner}  onClick={() => onProductClick(product)} />
        ))
      ) : (
        <p className="col-span-full text-gray-500">Không có sản phẩm nào.</p>
      )}
    </div>

    <div className="flex justify-center mt-6">
      <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700">
        XEM THÊM
      </button>
    </div>
  </>
);

export default ProductSection;
