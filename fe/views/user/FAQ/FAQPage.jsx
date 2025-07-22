import React, { useState } from 'react';
import { X } from 'lucide-react';
import FAQList from './FAQList';
import AskBox from './AskBox';

const FAQPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ email: '', question: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Gửi câu hỏi:', form);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-[#E8F5E9]">
      {/* Banner */}
      <div className="text-center py-8">
        <h2 className="text-green-700 text-2xl font-bold mb-1">FAQ - GIẢI ĐÁP THẮC MẮC VỀ MÓN QUÀ NHỎ</h2>
        <p className="text-sm text-gray-600">Nếu bạn có thắc mắc hãy đặt câu hỏi nhé!</p>
      </div>

      {/* Câu hỏi */}
      <div className="bg-white px-4 py-10">
        <FAQList />
      </div>

      {/* Hộp "Bạn vẫn còn thắc mắc" */}
      <AskBox onClick={() => setShowForm(true)} />

      {/* Popup đặt câu hỏi */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#E8F5E9] rounded-lg p-6 w-[90%] max-w-sm relative shadow-xl">
            <button onClick={() => setShowForm(false)} className="absolute top-3 right-3">
              <X size={18} />
            </button>
            <h3 className="text-xl font-bold text-center text-gray-800 mb-1">ĐẶT CÂU HỎI</h3>
            <p className="text-center text-sm text-gray-600 mb-4">
              Bạn có những thắc mắc hãy đặt câu hỏi thật chi tiết nhé!!!
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Địa chỉ Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border rounded px-4 py-2 text-sm"
                required
              />
              <textarea
                placeholder="Nhập câu hỏi..."
                value={form.question}
                onChange={(e) => setForm({ ...form, question: e.target.value })}
                className="w-full border rounded px-4 py-2 text-sm"
                rows={3}
                required
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700 text-sm"
              >
                Gửi câu hỏi
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQPage;
