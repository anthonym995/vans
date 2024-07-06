import React, { useState } from "react";

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({ email: "", password: "" });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginFormData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center">
        <div className=" p-8 rounded-lg w-full">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center mt-6">Sign in to your account</h2>
          <form onSubmit={handleSubmit}>
            <div className="">
              <input
                type="text"
                id="email"
                name="email"
                value={loginFormData.email}
                placeholder="Email address"
                onChange={handleChange}
                className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-lg rounded-b-none border"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                id="password"
                name="password"
                value={loginFormData.password}
                placeholder="Password"
                onChange={handleChange}
                className="appearance-none w-full rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-lg rounded-t-none border border-t-0"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full bg-[#FF8C38] hover:bg-[#FF8C44] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
