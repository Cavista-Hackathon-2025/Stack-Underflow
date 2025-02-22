import { useForm } from "react-hook-form";

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log("Form submitted:", data);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col justify-center items-center text-center w-[30%] mx-auto bg-green-300 p-7 rounded-2xl shadow-lg"
		>
			<img
				src="/vitaLink_logo.jpg"
				alt="VitaLink Logo"
				className="w-[100px] h-[100px] rounded-[20px] mb-6"
			/>
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
				className="w-full border-[3px] border-green-300 rounded-[5px] px-4 py-6 mb-4 text-2xl"
			/>
			{errors.age && (
				<p className="text-red-500 text-xl mb-4">{errors.age.message}</p>
			)}

			<select
				{...register("gender", {
					required: "Please select your gender",
				})}
				className="w-full border-[3px] border-green-300 rounded-[5px] px-4 py-6 mb-4 text-2xl"
			>
				<option value="">Select your gender</option>
				<option value="male">Male</option>
				<option value="female">Female</option>
			</select>
			{errors.gender && (
				<p className="text-red-500 text-xl mb-4">{errors.gender.message}</p>
			)}

			<button
				type="submit"
				className="w-full bg-green-800 px-4 py-6 my-7 text-white rounded-[5px] text-2xl hover:bg-green-700 transition-colors"
			>
				Submit
			</button>
		</form>
	);
};

export default Login;
