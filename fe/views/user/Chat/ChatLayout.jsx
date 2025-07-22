import React, { useState, useEffect } from 'react';
import PreviousChatsList from './PreviousChatsList';
import ChatPage from './ChatPage';

const ChatLayout = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Cột trái: danh sách tin nhắn cũ */}
      {!isMobile && (
        <div className="w-[300px]">
          <PreviousChatsList onSelectUser={setSelectedUser} />
        </div>
      )}

      {/* Cột phải: nội dung chat */}
      <div className="flex-1">
        {selectedUser ? (
          <ChatPage
            user={selectedUser}
            onBack={() => setSelectedUser(null)}
            showSidebar={false}
            isPreview={false}
          />
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500">
            <p>Chọn một cuộc trò chuyện để bắt đầu</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatLayout;
