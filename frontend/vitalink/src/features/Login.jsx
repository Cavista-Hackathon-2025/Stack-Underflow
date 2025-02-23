import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);

    setIsLoading(true);
    try {
      // Store user data in localStorage
      localStorage.setItem("userData", JSON.stringify(data));
      // Navigate to dashboard
      navigate("/home");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
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
        <option value="male">Male</option>
        <option value="female">Female</option>
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
