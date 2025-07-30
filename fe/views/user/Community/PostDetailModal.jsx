import React from 'react';
import IconForward from '../../../src/assets/img/IconShare.png';
import IconLike from '../../../src/assets/img/LikeIcon.png';
import IconMessage from '../../../src/assets/img/Comment.png';
import IconPrev from '../../../src/assets/img/Prev.png';
import NextArrow from '../../../src/assets/img/Next_2.png';
import IconBack from '../../../src/assets/img/IconBack.png';

const PostDetailModal = ({ post, imageIndex, onPrev, onNext, onClose }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/50">
      <div className="rounded-xl shadow-xl flex flex-col lg:flex-row w-full max-w-6xl h-[90vh] overflow-hidden relative bg-[#E8F5E9] items-center ">
        
        <div className="absolute top-4 left-4 z-10">
          <div className="flex items-center gap-2 px-4 py-2 text-[#4CAF50] font-semibold text-sm">
            <button onClick={onClose}>
              <img src={IconBack} alt="back" className="w-6 h-6" />
            </button>
            <span>Bài viết của {post.user.name}</span>
          </div>
        </div>

        <div className="relative flex-1 flex flex-col items-center justify-center overflow-hidden max-w-[60%] mr-2 ml-5">
           <div className="w-full h-px bg-[#7D91AA] my-3" />
          <img
            src={post.images[imageIndex]}
            alt={`post-${imageIndex}`}
            className="max-h-full max-w-full object-contain rounded-xl"
          />
          {post.images.length > 1 && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 space-y-2 z-10">
              {post.images.slice(0, 4).map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`thumb-${idx}`}
                  className={`w-14 h-14 object-cover rounded-md border-2 cursor-pointer ${
                    idx === imageIndex ? 'border-white' : 'border-transparent'
                  }`}
                  onClick={() => onNext(idx)}
                />
              ))}
              {post.images.length > 4 && (
                <div
                  className="w-14 h-14 flex items-center justify-center bg-black/50 text-white text-sm rounded-md border-2 border-gray-300 cursor-pointer"
                  onClick={() => onNext(4)}
                >
                  +{post.images.length - 4}
                </div>
              )}
            </div>
          )}

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-4 px-4 py-2">
            <button onClick={onPrev}>
              <img src={IconPrev} alt="prev" className="w-7 h-7" />
            </button>
            <button onClick={onNext}>
              <img src={NextArrow} alt="next" className="w-7 h-7" />
            </button>
          </div>
        </div>
        <div className="w-[60%] max-w-sm h-[65vh] rounded-2xl border border-[#29752F] flex items-center justify-center ml-4 rounded-xl">
          <div className="bg-[#E8F5E9] rounded-xl p-3 flex flex-col justify-between h-full w-full shadow-lg">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <img src={post.user.avatar} className="w-9 h-9 rounded-full" />
                <div>
                  <p className="font-[Inter] text-sm text-gray-900">{post.user.name}</p>
                  <p className="font-[Inter] text-sm text-black">{post.user.role}</p>
                </div>
              </div>
              <p className="text-[11px] text-black mb-2">{post.time}</p>
              <p className="text-[13px] text-black mb-3 leading-snug">{post.content}</p>

              <div className="border-t border-[#4CAF50] my-3" />

              <div className="flex justify-evenly text-sm items-center mb-2 px-1">
                <div className="flex items-center gap-1 text-xs text-white bg-[#4CAF50] px-7 py-1 rounded-full shadow min-w-[60px] justify-center">
                  <img src={IconLike} alt="like" className="w-3 h-3" />
                  {post.likes}
                </div>
                <div className="flex items-center gap-1 text-gray-700 text-xs min-w-[60px] justify-center">
                  <img src={IconMessage} alt="comment" className="w-4 h-4" />
                  {post.comments}
                </div>
                <div className="flex items-center gap-1 text-gray-700 text-xs min-w-[60px] justify-center">
                  <img src={IconForward} alt="share" className="w-4 h-4" />
                  25
                </div>
              </div>

              <div className="relative my-3">
                <div className="border-t border-[#4CAF50] w-full"></div>
                <span className="absolute left-1/2 -translate-x-1/2 -top-2 bg-[#E8F5E9] px-3 text-[13px] font-medium text-[#4CAF50]">
                  Comment
                </span>
              </div>

              <div className="flex-1 space-y-4 overflow-y-visible pr-1 mb-2 px-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <img
                      src={post.user.avatar}
                      alt="avatar"
                      className="w-7 h-7 rounded-full mt-1"
                    />
                    <div className="flex flex-col w-full">
                      <div className="bg-white p-2.5 rounded-xl text-[8px] shadow-md">
                        <p className="font-[Inter] mb-1">Mike Johnson</p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisi, cras neque...
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-[6px] text-[#4CAF50] mt-1 ml-2">
                        <span>Like</span>
                        <span>Reply</span>
                        <span>5m</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-full mt-2 px-1">
                <div className="flex items-start gap-2">
                  <img
                    src={post.user.avatar}
                    alt="avatar"
                    className="w-7 h-7 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="border border-gray-400 bg-[#3A3B3C] rounded-full px-3 py-1.5 flex items-center">
                      <textarea
                        placeholder="Viết bình luận..."
                        rows={1}
                        className="w-full bg-transparent resize-none text-white text-[11px] placeholder-gray-400 outline-none border-none"
                      />
                    </div>
                    <p className="text-[7px] text-[#4CAF50] ml-2 mt-1">Nhấn Enter để đăng</p>
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailModal;
