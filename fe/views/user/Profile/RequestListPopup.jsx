import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { requestService } from '../../../src/services/requestService';
import SuccessPopup from './SuccessPopup'; 

const RequestListPopup = ({ productId, onClose }) => {
  const [requests, setRequests] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedRecipient, setSelectedRecipient] = useState(null);

  useEffect(() => {
    requestService.getRequestsByProductId(productId).then(setRequests);
  }, [productId]);

  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleSendGift = () => {
    const recipient = requests.find((r) => selectedIds.includes(r.id));

    if (!recipient) {
      alert('Vui lòng chọn ít nhất một người nhận!');
      return;
    }

    setSelectedRecipient(recipient.name);
    setShowSuccess(true);
  };

  return (
    <>
      {!showSuccess && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-[440px] relative shadow-lg">
            <button className="absolute top-2 right-2" onClick={onClose}>
              <X size={20} />
            </button>

            {/* Avatars top */}
            <div className="flex justify-center -space-x-4 mb-2">
              {requests.slice(0, 3).map((req) => (
                <img
                  key={req.id}
                  src={req.avatar}
                  alt=""
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
            </div>

            <h3 className="text-center text-lg font-bold mb-1">
              DANH SÁCH YÊU CẦU NHẬN QUÀ
            </h3>
            <p className="text-sm text-center text-gray-600 mb-4">
              Dưới đây là danh sách các cá nhân yêu cầu nhận quà từ bạn,<br />
              hãy chọn người mà bạn mong muốn gửi món quà nhé!!!!
            </p>

            <ul className="space-y-3 max-h-[250px] overflow-y-auto">
              {requests.map((req, idx) => (
                <li
                  key={req.id}
                  className="flex items-center justify-between px-2"
                >
                  <div className="flex items-center gap-2">
                    <span>{idx + 1}.</span>
                    <img
                      src={req.avatar}
                      alt={req.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="font-medium">{req.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">{req.time}</span>
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(req.id)}
                      onChange={() => toggleSelect(req.id)}
                      className="w-5 h-5 accent-green-600"
                    />
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex justify-end mt-6 gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Đóng
              </button>
              <button
                onClick={handleSendGift}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Gửi Quà
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccess && (
        <SuccessPopup
          recipientName={selectedRecipient}
          onClose={onClose} 
        />
      )}
    </>
  );
};

export default RequestListPopup;
