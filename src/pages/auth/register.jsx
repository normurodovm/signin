import React from "react";
import { useForm } from "react-hook-form";
import { request } from "../../config/request";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const submit = (data) => {
    request
      .post("/register", data)
      .then((res) => {
        if (res.data) {
          navigate("/login");
        }
      })
      .catch((error) => {
        setError("email", { message: "uasdaniwa fakfna;" });
      });
  };
  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <div className="w-[400px] p-5 bg-teal-400 rounded-sm">
        <h1>Register</h1>
        <Link className="font-bold text-red-500 block text-end" to={"/login"}>
          LOGIN
        </Link>
        <form onSubmit={handleSubmit(submit)}>
          <input
            {...register("name", { required: true })}
            placeholder="Name"
            className="block w-full p-2 my-2"
            type="text"
          />
          <input
            {...register("email", { required: true })}
            placeholder="Email"
            className="block w-full p-2 my-2"
            type="email"
          />
          {errors.email && <p>{errors.email.message}</p>}
          <input
            {...register("password", { required: true })}
            placeholder="Password"
            className="block w-full p-2 my-2"
            type="password"
          />
          <button
            type="submit"
            className="font-bold w-full p-4 bg-violet-400 text-center text-white"
          >
            send
          </button>
        </form>
      </div>
    </div>
  );
};
