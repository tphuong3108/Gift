import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { userService } from '../../../src/services/userService';

import MyProfileCard from './MyProfileCard';
import OtherProfileCard from './OtherProfileCard';
import AdCard from './AdCard';
import ProductSection from './ProductSection';

const ProfilePage = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState('displaying');

  useEffect(() => {
    const fetchData = () => {
      const profile = userService.getUserProfile(username);
      const me = userService.getCurrentUser();
      setUser(profile);
      setCurrentUser(me);
      setLoading(false);
    };

    fetchData();
  }, [username]);

  if (loading || !user) return <div className="p-4 text-center">Đang tải...</div>;

  const productsToShow =
    selectedTab === 'displaying' ? user.products : user.productsGiven || [];

  const isOwner = currentUser?.username === user.username;

  return (
    <div className="flex flex-col md:flex-row bg-white min-h-screen w-full px-4 py-6 gap-6">
      {/* Sidebar trái */}
      <div className="w-full md:w-[20%] flex flex-col items-center gap-4 h-full">
        {isOwner ? (
          <MyProfileCard user={user} />
        ) : (
          <OtherProfileCard user={user} />
        )}
        <AdCard />
      </div>

      {/* Phần sản phẩm */}
      <div className="w-full md:w-[80%]">
        <ProductSection
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          products={productsToShow}
        />
      </div>
    </div>
  );
};

export default ProfilePage;
