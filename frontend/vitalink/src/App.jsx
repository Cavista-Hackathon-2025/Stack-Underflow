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
