import React from 'react';
import IconForward from '../../../src/assets/img/icon-forward.png';
import IconLike from '../../../src/assets/img/icon-like.png';
import IconMessage from '../../../src/assets/img/icon-message.png';
import IconBookmark from '../../../src/assets/img/icon-bookmark.png';
import IconPrev from '../../../src/assets/img/PrevArrow.png';
import IconNext from '../../../src/assets/img/next.png';

const PostDetailModal = ({ post, imageIndex, onClose, onPrev, onNext }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-[#4AB262] rounded-xl shadow-xl flex flex-col lg:flex-row w-full max-w-6xl h-[90vh] overflow-hidden relative">
        <div className="flex-1 bg-black flex items-center justify-center relative">
          <img
            src={post.images[imageIndex]}
            alt={`post-${imageIndex}`}
            className="h-full w-full object-contain rounded-l-xl"
          />

          {post.images.length > 1 && (
            <>
              <button
                onClick={onPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full"
              >
                <img src={IconPrev} alt="previous" className="w-4 h-4" />
              </button>
              <button
                onClick={onNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full"
              >
                <img src={IconNext} alt="next" className="w-4 h-4" />
              </button>
            </>
          )}
        </div>

        {/* Nội dung bên phải */}
        <div className="w-full lg:w-[360px] bg-[#4AB262] p-5 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <img src={post.user.avatar} className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold">{post.user.name}</p>
                <p className="text-sm text-gray-600">{post.user.role}</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-4">{post.time}</p>
            <p className="text-gray-800 text-sm mb-4">{post.content}</p>
          </div>

          {/* Like - Comment - Share - Bookmark */}
          <div className="flex justify-between text-sm border-y py-2 mb-3 text-gray-800">
            <div className="flex items-center gap-1">
              <img src={IconLike} alt="like" className="w-4 h-4" />
              {post.likes}
            </div>
            <div className="flex items-center gap-1">
              <img src={IconMessage} alt="comment" className="w-4 h-4" />
              {post.comments}
            </div>
            <div className="flex items-center gap-1">
              <img src={IconForward} alt="share" className="w-4 h-4" />
              25
            </div>
            <div className="flex items-center gap-1">
              <img src={IconBookmark} alt="bookmark" className="w-4 h-4" />
            </div>
          </div>

          <div className="space-y-3 overflow-y-auto flex-1 mb-3">
            <div className="bg-gray-800 text-white p-3 rounded-md text-sm">
              <p className="font-semibold mb-1">Mike Johnson</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisi, cras neque.</p>
            </div>
            <div className="bg-gray-800 text-white p-3 rounded-md text-sm">
              <p className="font-semibold mb-1">Mike Johnson</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisi, cras neque.</p>
            </div>
          </div>

          <textarea
            placeholder="Viết bình luận..."
            rows={2}
            className="w-full p-2 rounded bg-gray-800 text-white text-sm resize-none"
          />
        </div>

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl font-bold bg-black/40 rounded-full w-8 h-8 flex items-center justify-center"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default PostDetailModal;
