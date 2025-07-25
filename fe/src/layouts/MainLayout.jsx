import React from 'react'
import { Outlet } from 'react-router-dom';
import { FaBell, FaComments, FaChevronDown } from 'react-icons/fa';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

