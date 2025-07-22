import React from 'react';

const CommentList = ({ comments }) => {
  return (
    <div className="space-y-3">
      {comments.map((c, i) => (
        <div key={i} className="bg-gray-800 text-white p-3 rounded-md text-sm">
          <p className="font-semibold">{c.name}</p>
          <p className="text-sm">{c.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
