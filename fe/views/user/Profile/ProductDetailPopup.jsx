import React, { useState } from 'react';
import { X } from 'lucide-react';
import RequestListPopup from './RequestListPopup';

const ProductDetailPopup = ({ product, onClose }) => {
  const [showRequestList, setShowRequestList] = useState(false);
    return (
    <>
        {!showRequestList && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-[400px] relative z-60 shadow-lg">
            <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                onClick={onClose}
            >
                <X size={20} />
            </button>

            <img
                src={product.img}
                alt={product.name}
                className="w-full h-48 object-contain rounded mb-4"
            />

            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-700 mt-2">
                <strong>Chất liệu:</strong> {product.material || '35% cotton, 65% polyester'} <br />
                <strong>Màu:</strong> {product.color || 'Xanh Trơn Dài Tay'}
            </p>
            <button
                onClick={() => setShowRequestList(true)}
                className="w-full mt-4 bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
                Danh sách người yêu cầu nhận quà
            </button>

            <button
                onClick={onClose}
                className="w-full mt-3 bg-gray-200 text-gray-600 font-semibold py-2 rounded hover:bg-gray-300"
            >
                Đóng
            </button>
                        
            </div>
        </div>
        )}

        {showRequestList && (
        <RequestListPopup
            productId={product.id}
            onClose={() => {
            setShowRequestList(false);
            onClose(); 
            }}
        />
        )}
    </>
    );

};

export default ProductDetailPopup;
