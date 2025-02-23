// import React from "react";
// import Vitals from "./Vitals";
// import Chart from "./Chart";

// const Dashboard = () => {
//   return (
//     <div className="w-full h-full section">
//       <div className="w-full h-full flex justify-between text-white items-center">
//         <div className="w-full flex items-center gap-x-1">
//           <img src="/vitaLink_logo.jpg" alt="logo image" className="w-[4rem] h-[4rem] rounded-full" />
//           <span className="italic text-xl font-bold">vitalLink</span>
//         </div>
//         <div className="flex gap-x-2">
//           <div className="text-2xl font-semibold">device:</div>
//         </div>
//       </div>

//       <div className=" mt-10 lg:w-[40%] sm:w-[60%] w-[85%] text-white">
//         <div className="grid grid-cols-2 gap-y-5">
//           <div className="text-2xl font-semibold">gender: john</div>
//           <div className="text-2xl font-semibold">age: 44 years</div>
//         </div>
//       </div>

//       <div className="">
//         <Vitals />
//       </div>

//       <div className="my-24 grid md:grid-cols-2 grid-cols-1 gap-10">
//         <div data-aos="fade-left" className="w-full bg-white p-4 rounded-2xl">
//           <div className="text-3xl font-bold mb-10">health chart</div>
//           <Chart />
//         </div>

//         <div data-aos="fade-left" className="w-full bg-white p-4 rounded-2xl">
//           <div className="text-3xl font-bold pb-5"> suggestions</div>
//           <div className="text-xl text-gray-700">
//             <ul className="flex flex-col gap-y-5">
//               <li className="list-disc ml-10 text-2xl text-black/80 normal-case">
//                 <span className="font-bold text-3xl text-black">recommendation:</span>
//                 Ensure your blood pressure is within normal limits.
//               </li>
//               <li className="list-disc ml-10 text-2xl text-black/80 normal-case">
//                 <span className="font-bold text-3xl text-black">suggestion:</span>
//                 Take medication for blood pressure.
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useState, useEffect } from "react";
import Vitals from "./Vitals";
import Chart from "../ui/Chart";
import { useVitalData } from "../service/apiVital";

const Dashboard = () => {
  const [userData, setUserData] = useState({
    age: "",
    gender: "",
  });

  const vitalData = useVitalData();
  console.log(vitalData);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  return (
    <div className="w-full h-full section">
      <div className="w-full h-full flex justify-between text-white items-center">
        <div className=" flex items-center gap-x-2  w-1/2">
          <img src="/vitaLink_logo.jpg" alt="logo image" className="w-[4rem] h-[4rem] rounded-full" />
          <span className="italic text-xl font-bold">vitalLink</span>
        </div>
        <div className="">
          <div className=" text-2xl flex items-center text-center gap-x-1 w-full font-semibold">
            <span className="">device:</span>
            <span className={` text-xl ${vitalData.online ? "text-green-600" : "text-red-600"}`}>
              {vitalData.online ? "Connected" : "disconnected"}
            </span>
          </div>
        </div>
      </div>

      <div className=" mt-10 lg:w-[40%] sm:w-[60%] w-[85%] text-white">
        <div className="grid grid-cols-2 gap-y-5">
          <div className="text-2xl font-semibold">Gender: {userData.gender}</div>

          <div className="text-2xl font-semibold">age: {userData.age} years</div>
        </div>
      </div>

      <div className="">
        <Vitals vitalData={vitalData} />
      </div>
      <div className="my-24 grid md:grid-cols-2 grid-cols-1 gap-10">
        <div className="w-full bg-white p-4 rounded-2xl">
          <div className="text-3xl font-bold mb-10">health chart</div>
          <Chart vitalData={vitalData} />
        </div>
        <div className="w-full bg-white p-4 rounded-2xl">
          <div className="text-3xl font-bold pb-5">suggestions</div>
          <div className="text-xl text-gray-700">
            <ul className="flex flex-col gap-y-5">
              <li className="list-disc ml-10 text-2xl text-black/80 normal-case">
                <span className="font-medium text-3xl text-black">recommendation: </span>
                {vitalData.alert}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
