import React from "react";
import { useForm } from "react-hook-form";
import { request } from "../../config/request";
import { Link, useNavigate } from "react-router-dom";
import { saveState } from "../../config/storage";

export const Login = () => {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const submit = (data) => {
    request.post("/login", data).then((res) => {
      saveState("user", { ...res.data.user, token: res.data.accessToken });
      navigate("/", {
        replace: true,
      });
    });
  };
  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <div className="w-[400px] p-5 bg-teal-400 rounded-sm">
        <h1>Login</h1>
        <Link
          className="font-bold text-red-500 block text-end"
          to={"/register"}
        >
          Register
        </Link>
        <form onSubmit={handleSubmit(submit)}>
          <input
            {...register("email", { required: true })}
            placeholder="Email"
            className="block w-full p-2 my-2"
            type="email"
          />
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
