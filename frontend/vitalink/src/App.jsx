import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppLayout from "./ui/AppLayout";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./Pages/DashboardPage";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="login" />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
