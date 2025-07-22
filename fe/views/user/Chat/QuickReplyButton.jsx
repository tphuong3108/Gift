import React from 'react';

const QuickReplyButton = ({ label, onClick }) => (
  <button
    onClick={() => onClick(label)}
    className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full"
  >
    {label}
  </button>
);

export default QuickReplyButton;
