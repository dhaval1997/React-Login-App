import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUserLock, FaUser, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(FaRegEyeSlash);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
    navigate("/");
  };

  const handleToggle = () => {
    if (type === "password") {
      setIcon(FaRegEye);
      setType("text");
    } else {
      setIcon(FaRegEyeSlash);
      setType("password");
    }
  };

  return (
    <>
      <div className="w-screen h-screen">
        <div className="w-screen h-screen backdrop-blur flex flex-col items-center justify-center py-10 px-4">
          {/* <div
            className="rounded-lg shadow-2xl p-4 min-w-80 border border-amber-50 border-opacity-70"
            // style={{ width: "480px" }}
          > */}
          <div className=" p-4 w-full max-w-md border shadow-lg border-gray-100 rounded-lg">
            <h2 className="text-xl text-indigo-700 text-center font-semibold"></h2>
            <h2 className="text-2xl text-indigo-700 text-center font-semibold">
              Log In
            </h2>
            <div className="my-4">
              <form onSubmit={handleSubmit(submitHandler)}>
                <div className="mb-3 flex flex-col">
                  <label htmlFor="" className="p-2 flex items-center gap-2">
                    <FaUser /> User Name*
                  </label>
                  <input
                    type="text"
                    {...register("userName", {
                      required: "User Name is Required",
                    })}
                    className="w-full outline-slate-700 bg-gray-50 rounded text-slate-800 h-9 p-3 focus:outline-none border focus:border-slate-700"
                    placeholder="User Name"
                  />
                  {errors.userName && (
                    <h2 className="text-red-600">{errors.userName.message}</h2>
                  )}
                </div>
                <div className="mb-3 flex flex-col relative">
                  <label htmlFor="" className="p-2 flex items-center gap-2">
                    <FaUserLock /> Password*
                  </label>
                  <input
                    type={type}
                    {...register("password", {
                      required: "Password is Required",
                      minLength: {
                        value: 6,
                        message: "Password should be at-least 6 characters.",
                      },
                    })}
                    className="w-full outline-slate-700 bg-gray-50 rounded text-slate-800 h-9 p-3 focus:outline-none border focus:border-slate-700"
                    placeholder="Password"
                  />
                  <span
                    className="absolute right-2 top-12"
                    onClick={handleToggle}
                  >
                    {icon}
                  </span>
                  {errors.password && (
                    <h2 className="text-red-600">{errors.password.message}</h2>
                  )}
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <button className="hover:underline">Forgot Password</button>
                  <button
                    type="submit"
                    className="bg-indigo-800 w-full border rounded p-1.5 hover:bg-indigo-900 font-semibold text-gray-50"
                  >
                    Log In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthForm;
