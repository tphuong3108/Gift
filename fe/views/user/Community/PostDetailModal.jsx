import React, { useState } from 'react';
import ImageSlider from './ImageSlider';
import CommentList from './CommentList';
import CommentInput from './CommentInput';
import { X, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';

const PostDetailModal = ({ post, onClose }) => {
  const [comments, setComments] = useState(post.comments || []);
  const [likes] = useState(post.likes || 0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const images = post.images || [];

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl flex flex-col lg:flex-row w-full max-w-6xl h-[90vh] overflow-hidden relative">

        {/* Nút đóng */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-black z-10">
          <X size={24} />
        </button>

        {/* Vùng ảnh */}
        <div className="flex-[2] bg-[#4AB262] flex items-center justify-center relative">
          <img
            src={images[selectedImageIndex]}
            alt={`img-${selectedImageIndex}`}
            className="object-contain max-h-full max-w-full"
          />
          {/* Thumbnail bên phải */}
          <div className="absolute right-4 top-4 bottom-4 overflow-y-auto space-y-2">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                onClick={() => setSelectedImageIndex(idx)}
                className={`w-16 h-16 rounded border cursor-pointer object-cover ${
                  selectedImageIndex === idx ? 'ring-2 ring-white' : ''
                }`}
              />
            ))}
          </div>
        </div>

        {/* Sidebar phải */}
        <div className="bg-[#4AB262] w-full lg:w-[350px] p-5 overflow-y-auto flex flex-col">
          {/* Thông tin người đăng */}
          <div className="mb-3">
            <div className="flex items-center gap-3">
              <img src={post.user.avatar} alt="avatar" className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold text-gray-800">{post.user.name}</p>
                <p className="text-xs text-gray-500">{post.user.role}</p>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-1">{post.time}</p>
            <p className="mt-2 text-gray-800 text-sm">{post.content}</p>
          </div>

          <div className="flex justify-between items-center border-y py-3 text-gray-600 text-sm mb-3">
            <div className="flex items-center gap-2"><ThumbsUp size={18} /> {likes}</div>
            <div className="flex items-center gap-2"><MessageCircle size={18} /> {comments.length}</div>
            <div className="flex items-center gap-2"><Share2 size={18} /> 25</div>
          </div>

          <div className="flex-1 overflow-y-auto mb-4">
            <CommentList comments={comments} />
          </div>

          <CommentInput
            onSubmit={(comment) => setComments([...comments, comment])}
          />
        </div>
      </div>
    </div>
  );
};

export default PostDetailModal;
