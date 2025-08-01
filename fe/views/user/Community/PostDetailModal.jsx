import React, { useState } from 'react';
import IconBack from '../../../src/assets/img/IconBack.png';
import ImageView from './ImageView';
import CommentSection from './CommentSection';

const PostDetailModal = ({ post, imageIndex = 0, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(imageIndex);

  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-white/50">
      <div className="rounded-xl shadow-xl flex flex-col lg:flex-row w-full max-w-6xl h-[80vh] overflow-hidden relative bg-[#E8F5E9] items-center">
        <div className="absolute top-2 left-2 z-10 sm:top-4 sm:left-4">
          <div className="flex items-center gap-2 px-4 py-2 text-[#4CAF50] font-semibold text-xl">
            <button onClick={onClose}>
              <img src={IconBack} alt="back" className="w-6 h-6" />
            </button>
            <span>Bài viết của {post.user.name}</span>
          </div>
        </div>

        <ImageView
          images={post.images}
          selectedIndex={selectedImageIndex}
          setSelectedIndex={setSelectedImageIndex}
        />

        <CommentSection post={post} />
      </div>
    </div>
  );
};

export default PostDetailModal;
