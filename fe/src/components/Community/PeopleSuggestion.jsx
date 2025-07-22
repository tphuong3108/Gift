import React from 'react';
import Avatar from '../../assets/img/avatar_1.png'; 

const mockUsers = [
  { id: 1, name: 'Thành Nhân', job: 'Dudi Software', avatar:Avatar },
  { id: 2, name: 'Quế Long', job: 'Dudi Software', avatar: Avatar},
  { id: 3, name: 'Hưng Quốc', job: 'Dudi Software', avatar: Avatar},
];

const PeopleSuggestion = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow text-sm">
      <h3 className="font-semibold text-green-700 mb-2">Bạn có thể biết</h3>
      <div className="space-y-3">
        {mockUsers.map((user) => (
          <div key={user.id} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={user.avatar} className="w-9 h-9 rounded-full object-cover" />
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-gray-500 text-xs">{user.job}</p>
              </div>
            </div>
            <button className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full hover:bg-green-200">
              Kết bạn
            </button>
          </div>
        ))}
      </div>
      <div className="text-xs text-green-600 text-right mt-2 cursor-pointer hover:underline">
        Xem tất cả đề xuất →
      </div>
    </div>
  );
};

export default PeopleSuggestion;
