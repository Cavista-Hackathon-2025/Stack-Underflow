import { Link } from "react-router-dom";
import { useVitalData } from "../service/apiVital";
import { useEffect, useState } from "react";

const Home = () => {
  const [status, setStatus] = useState("");
  const vitalData = useVitalData();

  const checkVitals = () => {
    if (vitals.online) {
      setStatus("Connected");
      setTimeout(() => navigate("/dashboard"), 1000); // Redirect after 1s
    } else {
      setStatus("Not Connected");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-blue-400 p-8">
      <h1 data-aos="fade-left" className="text-5xl font-bold text-white mb-4">
        Welcome to Vitalink
      </h1>
      <p data-aos="fade-left" className="text-2xl text-white text-center normal-case mb-8">
        Connecting real-time health monitoring swith smart automation
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[80%] text-center">
        <div data-aos="fade-right" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-3xl font-semibold text-black/75 normal-case mb-5 ">Live vitals, anytime, anywhere</h2>
          <p className="text-black/55 text-2xl sm:text-3xl normal-case">
            Track heartbeat, temperature, SpO2, Diastolic Blood Pressure and the Systolic Blood Pressure 24/7 with our ESP32 sensor. No bulky
            equipments-just continuous, hospital-grade monitoring from home.
          </p>
        </div>
        <div data-aos="fade-right" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-3xl font-semibold  mb-5 text-black/75 ">Your care team, Always connected</h2>
          <p className="text-black/55 text-2xl sm:text-3xl normal-case">
            Clinicians see vital signs remotely without having to visit, an alert is sent to the clinicians if the vital reading is abnormal and
            immediate response is provided.
          </p>
        </div>
        <div data-aos="fade-right" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-3xl font-semibold  mb-5 text-black/75 ">Cuffless blood pressure tracking</h2>
          <p className="text-black/55 text-2xl sm:text-3xl normal-case">
            Say goodbye to uncomfortable arm cuffs. Our AI estimated blood pressure using just your heartbeat, SpO2, temperature, age and gender - no
            squeezing required.
          </p>
        </div>
      </div>

      <div className="">
        <div className="text-2xl font-semibold text-white text-center my-5 italic normal-case">
          Make sure device is connected to be able to check vitals.
        </div>
        <div className=""></div>
      </div>

      <div className="mt-8">
        <Link to="/dashboard">
          <p className={`mt-2 text-xl font-semibold text-center my-3 ${vitalData.online ? "text-green-500" : "text-red-500"}`}>
            {vitalData.online ? "Device Connected" : "device Not connected"}
          </p>
          <button
            onClick={checkVitals}
            // disabled={!vitalData.online ? "disabled" : "enabled"}
            className="bg-blue-600 capitalize cursor-pointer text-white text-2xl sm:px-14 sm:py-4 px-16 py-6 font-semibold rounded-lg hover:scale-95 transition-all  hover:bg-blue-800 duration-300"
          >
            check vitals
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
