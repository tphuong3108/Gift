import React from 'react';
import { Heart, Truck, Box, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow p-4 flex flex-col justify-between relative">
      <div className="absolute top-3 left-3">
        <span className="text-xs font-bold bg-blue-500 text-white px-2 py-1 rounded-full">
          {product.category || 'Danh mục'}
        </span>
      </div>

      {product.isNew && (
        <div className="absolute top-3 right-3">
          <span className="text-xs font-bold bg-yellow-400 text-white px-2 py-1 rounded-full">
            Mới
          </span>
        </div>
      )}

      <img src={product.img} alt={product.name} className="w-full h-40 object-contain my-4" />

      <h3 className="text-base font-semibold mb-1">{product.name}</h3>

      <ul className="text-sm text-gray-700 list-disc pl-5 mb-3">
        {product.details?.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>

      <div className="flex items-center gap-4 border-t pt-3 text-gray-500 text-sm">
        {product.freeShip && (
          <div className="flex items-center gap-1">
            <Truck size={14} /> Miễn phí giao hàng
          </div>
        )}
        {product.hasBox && (
          <div className="flex items-center gap-1">
            <Box size={14} /> Còn box
          </div>
        )}
      </div>

      <div className="flex items-center justify-between w-full px-4 mt-4">
        <button
          onClick={handleDetailClick}
          className="flex items-center gap-2 bg-[#4CAF50] hover:bg-[#43A047] text-white text-sm font-semibold px-6 py-2 rounded-full transition w-[220px] justify-center"
        >
          Xem Chi Tiết
          <ArrowUpRight size={16} />
        </button>
        <Heart size={22} className="text-green-600 cursor-pointer ml-4" />
      </div>
    </div>
  );
};

export default ProductCard;
