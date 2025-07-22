import React from 'react';
import { Calendar } from 'lucide-react';

const posts = [
  { id: 1, title: 'Quần áo ấm cho mùa đông', date: 'October 3, 2026' },
  { id: 2, title: 'Quần áo ấm cho mùa đông', date: 'October 3, 2026' },
  { id: 3, title: 'Quần áo ấm cho mùa đông', date: 'October 3, 2026' },
  { id: 4, title: 'Quần áo ấm cho mùa đông', date: 'October 3, 2026' },
  { id: 5, title: 'Quyên góp viện phí cho bệnh nhân nghèo', date: 'October 3, 2026' },
];

const RecentPosts = () => {
  return (
    <section className="bg-white rounded-lg shadow p-4 mb-6">
      <h3 className="text-lg font-bold text-green-800 mb-4">Bài Viết Mới</h3>
      <ul className="space-y-3 text-sm">
        {posts.map((post) => (
          <li key={post.id}>
            <p className="font-medium">{post.title}</p>
            <div className="text-gray-500 flex items-center gap-1">
              <Calendar size={14} />
              <span>Published on {post.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecentPosts;
