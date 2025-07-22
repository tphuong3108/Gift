import React, { useState } from 'react';

const CommentInput = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleEnter = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (text.trim() !== '') {
        onSubmit({ name: 'Bạn', text });
        setText('');
      }
    }
  };

  return (
    <textarea
      className="w-full p-2 rounded bg-gray-800 text-white text-sm"
      rows={2}
      placeholder="Viết bình luận..."
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={handleEnter}
    />
  );
};

export default CommentInput;
