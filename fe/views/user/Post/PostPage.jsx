import React, { useState } from 'react';
import PostTitle from './PostTitle';
import PostBasicInfo from './PostBasicInfo';
import PostCategoryStatus from './PostCategoryStatus';
import PostAddress from './PostAddress';
import PostImageUpload from './PostImageUpload';
import PostActions from './PostActions';

const PostPage = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    category: '',
    condition: '',
    province: '',
    ward: '',
    addressDetail: '',
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 5);
    setForm((prev) => ({ ...prev, images: files }));
  };

  return (
    <div className="min-h-screen bg-[#E8F5E9] p-6 flex justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-3xl shadow">
        <PostTitle />
        <form className="space-y-6">
          <PostBasicInfo form={form} handleChange={handleChange} />
          <PostCategoryStatus form={form} handleChange={handleChange} />
          <PostAddress form={form} handleChange={handleChange} />
          <PostImageUpload handleFileChange={handleFileChange} />
          <PostActions />
        </form>
      </div>
    </div>
  );
};

export default PostPage;
