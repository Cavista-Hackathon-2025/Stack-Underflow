import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    age: "",
    gender: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const storeUserData = (data) => {
  //   if (data.name && data.age && data.gender) {
  //     localStorage.setItem("userData", JSON.stringify(data));

  //     // Verify if storage was successful
  //     const storedData = localStorage.setItem("userData");

  //     if (!storedData) {
  //       throw new Error("Data not saved in localStorage!");
  //     }
  //   } else {
  //     console.warn("Missing required data, skipping localStorage storage");
  //   }
  // };

  // useEffect(() => {
  //   const storedUser = localStorage.setItem("userData", JSON.stringify(userData));
  //   if (storedUser) {
  //     setUserData(storedUser);
  //   }
  // }, []);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true); // Start loading

      const response = await fetch(`http://vitalink.pythonanywhere.com/update?age=${data.age}&gender=${data.gender}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("API Response Data:", responseData);

      localStorage.setItem("userData", JSON.stringify(data));

      // Store in localStorage using the new function
      // storeUserData(responseData);

      // Delay navigation to ensure storage happens first
      setTimeout(() => {
        navigate("/home");
      }, 500);
    } catch (error) {
      console.error("Error updating user data:", error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center text-center max-w-[45rem] w-full mx-auto bg-white p-7 rounded-2xl shadow-lg"
    >
      <div className="mb-6 flex items-center flex-col">
        <img src="/v_logo.png" alt="VitaLink Logo" className="w-[8rem] h-[5rem] rounded-[1rem]" />
        <div className="sm:text-4xl text-2xl font-bold">vitaLink</div>
      </div>

      <input
        {...register("name", {
          required: "Name is required",
        })}
        type="text"
        placeholder="Enter your name"
        className="w-full border-2 border-gray-600 rounded-2xl h-[5rem] px-4 py-6 mb-4 text-xl"
      />
      {errors.age && <p className="text-red-500 text-xl mb-4">{errors.age.message}</p>}

      <input
        {...register("age", {
          required: "Age is required",
          min: {
            value: 0,
            message: "Age must be a positive number",
          },
          max: {
            value: 150,
            message: "Age must be less than 150",
          },
        })}
        type="number"
        placeholder="Enter your age"
        className="w-full border-2 border-gray-600 rounded-2xl h-[5rem] px-4 py-6 mb-4 text-xl"
      />
      {errors.age && <p className="text-red-500 text-xl mb-4">{errors.age.message}</p>}

      <select
        {...register("gender", {
          required: "Please select your gender",
        })}
        className="w-full border-2 border-gray-600 rounded-2xl  h-[5rem] pl-2 text-xl"
      >
        <option value="">Select your gender</option>
        <option value="1">Male</option>
        <option value="0">Female</option>
      </select>
      {errors.gender && <p className="text-red-500 text-xl mb-4">{errors.gender.message}</p>}

      <button
        type="submit"
        className="w-full bg-blue-600 px-4 py-6 my-7 mt-16 text-white rounded-[5px] text-2xl hover:bg-blue-400 hover:scale-95 transition-all duration-200"
        disabled={isLoading}
      >
        {isLoading ? "Submmiting" : "Submit"}
      </button>
    </form>
  );
};

export default Login;
