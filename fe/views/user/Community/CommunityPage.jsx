import React, { useState } from 'react';
import ShareBar from '../../../src/components/Community/ShareBar';
import PostCard from '../../../src/components/Community/PostCard';
import CommunitySidebar from '../../../src/components/Community/CommunitySidebar';
import { communityService } from '../../../src/services/CommunityService';
import { userService } from '../../../src/services/userService';
import { ChevronLeft, ChevronRight, X, MessageCircle, ThumbsUp, Share2 } from 'lucide-react';

const CommunityPage = () => {
  const posts = communityService.getPosts().map(post => ({
    ...post,
    user: userService.getUserById(post.userId), 
  }));
  const [selectedPost, setSelectedPost] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const handlePrev = () => {
    setImageIndex((prev) => (prev - 1 + selectedPost.images.length) % selectedPost.images.length);
  };

  const handleNext = () => {
    setImageIndex((prev) => (prev + 1) % selectedPost.images.length);
  };

  return (
    <div className="bg-[#E8F5E9] min-h-screen px-4 py-6">

      <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto">
        <div className="flex-1 space-y-6">
          <ShareBar />
          {posts.map((post) => (
            <PostCard key={post.id} post={post} onClick={() => {
              setSelectedPost(post);
              setImageIndex(0);
            }} />
          ))}
        </div>

        <div className="w-full lg:w-[320px] space-y-6">
          <CommunitySidebar />
        </div>
      </div>

      {/* Modal chi tiết bài viết */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-[#4AB262] rounded-xl shadow-xl flex flex-col lg:flex-row w-full max-w-6xl h-[90vh] overflow-hidden relative">

            <button
              className="absolute top-4 right-4 text-white hover:text-gray-200"
              onClick={() => setSelectedPost(null)}
            >
              <X size={24} />
            </button>

            <div className="flex-1 bg-black flex items-center justify-center relative">
              <img
                src={selectedPost.images[imageIndex]}
                alt={`post-${imageIndex}`}
                className="h-full w-full object-contain rounded-l-xl"
              />
              {/* Navigation */}
              {selectedPost.images.length > 1 && (
                <>
                  <button onClick={handlePrev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={handleNext} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white">
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            <div className="w-full lg:w-[360px] bg-[#4AB262] p-5 flex flex-col justify-between overflow-y-auto">

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <img src={selectedPost.user.avatar} className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="font-semibold">{selectedPost.user.name}</p>
                    <p className="text-sm text-gray-600">{selectedPost.user.role}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-4">{selectedPost.time}</p>
                <p className="text-gray-800 text-sm mb-4">{selectedPost.content}</p>
              </div>

              {/* Like - Comment - Share */}
              <div className="flex justify-between text-sm border-y py-2 mb-3 text-gray-800">
                <div className="flex items-center gap-1">
                  <ThumbsUp size={16} /> {selectedPost.likes}
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle size={16} /> {selectedPost.comments}
                </div>
                <div className="flex items-center gap-1">
                  <Share2 size={16} /> 25
                </div>
              </div>

              {/* Bình luận giả lập */}
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

              {/* Nhập bình luận */}
              <textarea
                placeholder="Viết bình luận..."
                rows={2}
                className="w-full p-2 rounded bg-gray-800 text-white text-sm resize-none"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityPage;
