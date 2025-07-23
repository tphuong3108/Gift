import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productService } from '../../../src/services/productService';
import { userService } from '../../../src/services/userService';
import { Star } from 'lucide-react';
import GiftsByUser from './GiftsByUser';
import SimilarProducts from './SimilarProducts';
import Avatar from '../../../src/assets/img/avatar_1.png';
import Chat from '../../../src/assets/img/chat2.png';
import Shop from '../../../src/assets/img/shop.png';

const ProductDetail = () => {
  const { id } = useParams();
  const product = productService.getProductById(id);

  const imageList = product?.images || [product?.img];
  const [selectedImage, setSelectedImage] = useState(imageList[0]);

  if (!product) {
    return <div className="p-6">Sản phẩm không tồn tại</div>;
  }

  const matchedUser = userService.getAllUsers().find(u => u.name === product.user);
  const username = matchedUser?.username || '';
  const profileLink = username ? `/profile/${username}` : '#';

  return (
    <div className="bg-[#E8F5E9] min-h-screen p-6">
      <p className="text-sm text-gray-600 mb-2 italic">
        Món quà nhỏ &gt;&gt; {product.category} &gt;&gt; {product.name}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="flex gap-4">
          <div className="flex flex-col gap-2 w-20">
            {imageList.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 object-cover border rounded cursor-pointer ${
                  selectedImage === img ? 'ring-2 ring-green-500' : ''
                }`}
              />
            ))}
          </div>
          <img
            src={selectedImage}
            alt={product.name}
            className="flex-1 h-[420px] object-contain rounded shadow"
          />
        </div>

        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded-full">
              {product.category}
            </span>
            <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
              Q.1, TPHCM
            </span>
            {product.isNew && (
              <span className="text-xs font-medium bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                Mới
              </span>
            )}
          </div>

          <p className="mb-2 text-sm">
            Màu sắc: <strong>Đen</strong>
          </p>
          <p className="mb-4 text-sm">
            Size: <strong>6</strong>
            <a href="#" className="text-green-700 underline ml-2">
              Xem cách chọn size
            </a>
          </p>

          <div className="flex gap-3 mb-4">
            <Link
              to={`/messages?user=${encodeURIComponent(username)}&product=${product.id}`}
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-full border border-green-500 text-green-700 hover:bg-green-50 transition"
            >
              <img src={Chat} alt="Chat" className="w-5 h-5" />
              Chat ngay
            </Link>

            <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition">
              <img src={Shop} alt="Đặt hàng" className="w-5 h-5" />
              Nhận ngay
            </button>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <img src={Avatar} alt="Người đăng" className="w-10 h-10 rounded-full" />
            <div>
              <Link
                to={profileLink}
                className="font-medium text-blue-600 hover:underline"
              >
                {product.user}
              </Link>
              <p className="text-xs text-gray-500">Hoạt động 5 phút trước</p>
            </div>
            <div className="ml-auto text-sm flex items-center gap-1">
              <Star size={16} className="text-yellow-500" /> 4.6 (16 đánh giá)
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {[
              'Làm sao để tôi nhận được sản phẩm?',
              'Sản phẩm này còn không?',
              'Sản phẩm này có không?'
            ].map((text, i) => (
              <button
                key={i}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700"
              >
                {text}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 mb-4">
        <h3 className="text-lg font-bold mb-2 border-b pb-2">Mô tả sản phẩm</h3>
        <div className="text-sm text-gray-700 space-y-2">
          {product.description?.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 mb-8">
        <h3 className="text-lg font-bold mb-2">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {(product.tags || []).map((tag, i) => (
            <span
              key={i}
              className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <GiftsByUser user={product.user} currentProductId={product.id} />
      <SimilarProducts />
    </div>
  );
};

export default ProductDetail;
