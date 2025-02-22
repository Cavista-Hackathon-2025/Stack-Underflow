<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AppLayout />}>
					<Route index element={<Navigate replace to="home" />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="home" element={<HomePage />} />
					<Route path="dashboard" element={<DashboardPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
=======
function App() {
  return <div className="text-2xl font-bold">hello world</div>;
>>>>>>> 7696bfef472657574dd4e9cd3b0c629203013e3f
}

export default App;
