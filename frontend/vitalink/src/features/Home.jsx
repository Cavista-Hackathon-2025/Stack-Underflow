const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-blue-400 p-8">
      <h1 className="text-4xl font-bold text-white mb-4">Welcome to Vitalink</h1>
      <p className="text-2xl text-white text-center normal-case mb-8">Connecting real-time health monitoring swith smart automation</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[70%] text-center">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-3xl font-semibold text-white mb-4 ">Health Records</h2>
          <p className="text-gray-600 sm:text-2xl text-3xl normal-case">Access and manage your medical history securely.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-3xl font-semibold text-white mb-4 ">Appointments</h2>
          <p className="text-gray-600 sm:text-2xl text-3xl normal-case">Schedule and track your medical appointments.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-3xl font-semibold text-white mb-4 ">Healthcare Network</h2>
          <p className="text-gray-600 sm:text-2xl text-3xl normal-case">Connect with healthcare providers in your area.</p>
        </div>
      </div>

      <div className="mt-8">
        {/* <Link to="/register"> */}
        <button className="bg-blue-600 uppercase text-white text-2xl sm:px-14 sm:py-4 px-16 py-6 font-semibold rounded-lg hover:scale-95 transition-all  hover:bg-blue-800 duration-300">
          Register
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Home;
