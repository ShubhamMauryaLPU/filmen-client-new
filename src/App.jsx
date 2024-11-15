// App.jsx
import React from "react";
import "./App.css";
import "swiper/css";
import Banner from "./pages/Banner";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Footer from "./pages/Footer";
import UploadPage from "./pages/UploadPage";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Register from "./pages/Register";
import MovieUpload from "./pages/MovieUpload";
import { AuthContext } from "./components/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
const Layout = () => {
  return (
    <>
      <Header />
      <Banner />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
        </Route>
        <Route path="/Home" element={<Layout />} />

        <Route
          path="/upload"
          element={
            <ProtectedRoute>
              <UploadPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/movieUpload"
          element={
            <ProtectedRoute>
              <MovieUpload />
            </ProtectedRoute>
          }
        />
        <Route path="/sign-in" element={<LoginPage />} />
        <Route path="/sign-up" element={<RegisterPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
