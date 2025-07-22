import React, { useState } from 'react';
import QuickReplyButton from './QuickReplyButton';
import Icon from "../../../src/assets/img/Icon2.png"; // Biểu tượng mặt cười
import Img from '../../../src/assets/img/img.png';  // Biểu tượng hình ảnh
import File from '../../../src/assets/img/file.png';  // Biểu tượng file
import Gif from '../../../src/assets/img/gif.png';  // Biểu tượng gif
import Gif_1 from '../../../src/assets/img/gif_1.png';  // Biểu tượng gif khác
import Like from '../../../src/assets/img/like.png';  // Biểu tượng like

const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState('');
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false); // Hiển thị emoji picker

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  const handleEmojiClick = (emoji) => {
    setInput(input + emoji); // Thêm emoji vào input
    setEmojiPickerVisible(false); // Ẩn emoji picker khi chọn emoji
  };

  const quickReplies = [
    'Sản phẩm này còn không?',
    'Cách nhận sản phẩm?',
    'Sản phẩm bao nhiêu %?',
  ];

  return (
    <div className="p-4 border-t bg-white">
      <div className="flex items-center gap-2 mb-4">
        {/* Các biểu tượng và input - bên trái của ô nhập */}
        <button className="text-green-600 text-xl">
          <img src={File} alt="file" className="w-6 h-6" />
        </button>
        <button className="text-green-600 text-xl">
          <img src={Img} alt="img" className="w-6 h-6" />
        </button>
        <button className="text-green-600 text-xl">
          <img src={Gif_1} alt="gif_1" className="w-6 h-6" />
        </button>
        <button className="text-green-600 text-xl">
          <img src={Gif} alt="gif" className="w-6 h-6" />
        </button>

        {/* Input để nhập tin nhắn */}
        <input
          type="text"
          value={input}
          placeholder="Aa"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 border rounded-full px-4 py-2 focus:outline-none"
        />

        {/* Biểu tượng mặt cười nằm trong ô nhập */}
        <button className="text-green-600 text-xl" onClick={() => setEmojiPickerVisible(!emojiPickerVisible)}>
          <img src={Icon} alt="emoji" className="w-6 h-6" /> {/* Biểu tượng mặt cười */}
        </button>

        {/* Biểu tượng like ở bên phải */}
        <button className="text-green-600 text-xl">
          <img src={Like} alt="like" className="w-6 h-6" />
        </button>
      </div>

      {/* Hiển thị emoji picker nếu emojiPickerVisible là true */}
      {emojiPickerVisible && (
        <div className="flex gap-2 mb-4">
          <button onClick={() => handleEmojiClick('😊')} className="text-xl">😊</button>
          <button onClick={() => handleEmojiClick('😂')} className="text-xl">😂</button>
          <button onClick={() => handleEmojiClick('😍')} className="text-xl">😍</button>
          <button onClick={() => handleEmojiClick('😎')} className="text-xl">😎</button>
          <button onClick={() => handleEmojiClick('❤️')} className="text-xl">❤️</button>
        </div>
      )}

      {/* Các Quick Reply Buttons */}
      <div className="flex gap-2 flex-wrap">
        {quickReplies.map((q, i) => (
          <QuickReplyButton
            key={i}
            label={q}
            onClick={(text) => onSend(text)}
            className="bg-gray-200 text-gray-700 rounded-full px-4 py-2 cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default ChatInput;
