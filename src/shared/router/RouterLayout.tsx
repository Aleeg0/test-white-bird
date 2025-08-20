import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/homePage/homePage.tsx";
import ProfilePage from "@/pages/profilePage/profilePage.tsx";
import UsersPage from "@/pages/usersPage/usersPage.tsx";
import PagesLayout from "@/shared/layouts/pagesLayout/pagesLayout.tsx";

const RouterLayout = () => {
  return (
    <Routes>
      <Route element={<PagesLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};

export default RouterLayout;
