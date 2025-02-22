import { Outlet } from "react-router-dom";
const AppLayout = () => {
	return (
		<div className="text-5xl w-full h-full">
			<div>
				<Outlet />
			</div>
		</div>
	);
};

export default AppLayout;
