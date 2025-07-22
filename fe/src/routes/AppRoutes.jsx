import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import AuthLayout from "../layouts/AuthLayout";
import Home from "../../views/user/Home/HomePage";
import ExplorePage from "../../views/user/Explore/ExplorePage";
import ChatPage from "../../views/user/Chat/ChatPage";
import ProductDetail from "../../views/user/Product/ProductDetail";
import ProgramsPage from "../../views/user/Programs/ProgramsPage";
import CommunityPage from "../../views/user/Community/CommunityPage";
import PostPage from "../../views/user/Post/PostPage";
import FAQPage from "../../views/user/FAQ/FAQPage";
import ProfilePage from "../../views/user/Profile/ProfilePage";
import NoticePage from "../../views/user/Notice/NoticePage";
import Dashboard from "../../views/admin/Dashboard/Dashboard";
import Login from "../../views/auth/Login";
import Register from "../../views/auth/Register";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Auth */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* User */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/notifications" element={<NoticePage />} />
        <Route path="/messages" element={<ChatPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
         <Route path="/program" element={<ProgramsPage />} />

        <Route path="/faq" element={<FAQPage />} /> 
        <Route path="/post" element={<PostPage />} />
      </Route>

      {/* Admin */}
      <Route element={<AdminLayout />}>
        <Route path="/admin" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
