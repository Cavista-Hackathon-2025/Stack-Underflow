const Home = () => {
	return (
		<div className="flex flex-col items-center justify-center w-full min-h-screen bg-green-100 p-8">
			<h1 className="text-4xl font-bold text-green-800 mb-6">
				Welcome to VitaLink
			</h1>
			<p className="text-2xl text-green-700 text-center max-w-2xl mb-8">
				Connecting real-time health monitoring swith smart automation{" "}
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
				<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
					<h2 className="text-2xl font-semibold text-green-800 mb-4">
						Health Records
					</h2>
					<p className="text-gray-600">
						Access and manage your medical history securely.
					</p>
				</div>
				<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
					<h2 className="text-2xl font-semibold text-green-800 mb-4">
						Appointments
					</h2>
					<p className="text-gray-600">
						Schedule and track your medical appointments.
					</p>
				</div>
				<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
					<h2 className="text-2xl font-semibold text-green-800 mb-4">
						Healthcare Network
					</h2>
					<p className="text-gray-600">
						Connect with healthcare providers in your area.
					</p>
				</div>
			</div>

			<div className="mt-8">
				{/* <Link to="/register"> */}
				<button className="bg-green-800 text-white text-2xl px-14 py-4 font-semibold rounded-lg hover:bg-green-700 transition-colors">
					Register
				</button>
				{/* </Link> */}
			</div>
		</div>
	);
};

export default Home;
