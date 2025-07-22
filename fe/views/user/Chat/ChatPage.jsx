import React, { useState, useEffect } from 'react';
import ChatSidebar from './ChatSidebar';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import Keyboard from '../../../src/assets/img/keyboard.jpg';
import ChatInfoSidebar from './ChatInfoSidebar';

const ChatPage = ({ user, onBack, showSidebar }) => {
  const [messages, setMessages] = useState([{ text: 'Hi hi', isMe: true }]);
  const [isInfoVisible, setInfoVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSendMessage = (text) => {
    setMessages([...messages, { text, isMe: true }]);
  };

  const toggleInfo = () => setInfoVisible(!isInfoVisible);

  return (
    <div className="flex h-screen overflow-hidden">
      {showSidebar && (
        <div className="hidden md:block w-[300px] border-r bg-white">
          <ChatSidebar onSelectUser={onBack} />
        </div>
      )}

      <div className="flex-1 flex flex-col bg-[#F5F5F5] relative">
        <ChatHeader toggleInfo={toggleInfo} user={user} />

        {isMobile && (
          <button
            onClick={onBack}
            className="absolute top-2 left-2 z-50 bg-white rounded-full p-2 shadow"
          >
            ←
          </button>
        )}
        <div
          className={`transition-transform duration-300 fixed top-0 right-0 h-full bg-white z-50 shadow-lg overflow-y-auto w-full sm:w-[300px] ${
            isInfoVisible ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ChatInfoSidebar />
          <button
            className="absolute top-2 right-2 text-sm text-green-600"
            onClick={toggleInfo}
          >
            Đóng
          </button>
        </div>

        <div className="p-4">
          <div className="bg-white p-4 flex flex-col sm:flex-row items-center gap-4 shadow-sm">
            <img src={Keyboard} alt="product" className="w-24 h-auto rounded-md" />
            <div className="text-sm text-center sm:text-left">
              <p className="font-bold">Bạn đang trao đổi về sản phẩm:</p>
              <ul className="list-disc pl-5">
                <li>Bàn phím</li>
                <li>95%</li>
                <li>Thủ Đức, TP HCM</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <ChatMessages messages={messages} />
        </div>
        <ChatInput onSend={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatPage;
