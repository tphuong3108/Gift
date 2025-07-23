import React, { useState, useEffect } from 'react';
import { userService } from '../../../src/services/userService';
import UserProfileCard from './UserProfileCard';
import AdCard from './AdCard';
import ProductSection from './ProductSection';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState('displaying');

  useEffect(() => {
    const userProfile = userService.getUserProfile(username); 
    setUser(userProfile);
    setLoading(false);
  }, [username]);

  if (loading || !user) return <div className="p-4 text-center">Đang tải...</div>;

  const productsToShow =
    selectedTab === 'displaying' ? user.products : user.productsGiven || [];

  return (
    <div className="flex flex-col md:flex-row bg-white min-h-screen w-full px-4 py-6 gap-6">
      <div className="w-full md:w-[20%] flex flex-col items-center gap-4">
        <UserProfileCard user={user} />
        <AdCard />
      </div>

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

