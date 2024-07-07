import React from "react";
import { useLoaderData, Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { loginUser } from "../api/api";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const pathname = new URL(request.url).searchParams.get("redirectTo")

  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("loggedin", true);
    return redirect(pathname);
  } catch (error) {
    return error.message;
  }
}

export default function Login() {
  const message = useLoaderData();
  const errorMessage = useActionData();
  const navigation = useNavigation();

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center">
        <div className=" p-8 rounded-lg w-full">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center mt-6">Sign in to your account</h2>
          {message && <h3 className="text-xl font-bold mb-8 text-red-700 text-center mt-6">{message}</h3>}
          {errorMessage && <h3 className="text-xl font-bold mb-8 text-red-700 text-center mt-6">{errorMessage}</h3>}

          <Form method="post" replace>
            <div className="">
              <input
                type="text"
                name="email"
                placeholder="Email address"
                className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-lg rounded-b-none border"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-lg rounded-t-none border border-t-0"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={navigation.state === "submitting"}
                className="w-full bg-[#FF8C38] hover:bg-white text-white hover:text-[#FF8C38] font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline border-transparent hover:border-[#FF8C38] border-2"
              >
                {navigation.state === "submitting" ? "Logging in..." : "Log in"}
              </button>
            </div>
          </Form>

          <p className="text-center text-sm font-medium">email: admin & password: admin</p>
        </div>
      </div>
    </div>
  );
}

// The below code is removed due to react router <Form /> component

//  const [loginFormData, setLoginFormData] = useState({ email: "", password: "" });

//  const navigate = useNavigate(); removed from form

// onSubmit = { handleSubmit };

//  function handleSubmit(e) {
//    e.preventDefault();
//    setStatus("submitting");
//    setError(null);
//    loginUser(loginFormData)
//      .then((data) => navigate("/host", { replace: true }))
//      .catch((err) => setError(err))
//      .finally(() => setStatus("idle"));
//  }

//  function handleChange(e) {
//    const { name, value } = e.target;
//    setLoginFormData((prev) => ({ ...prev, [name]: value }));
//  }

// value={loginFormData.email}
// onChange={handleChange}

// onChange = { handleChange };
// value={loginFormData.password}

// async function fakeLoginUser (creds) {
//   if(creds.email === "b@b.com" && creds.password === "p123") {
//     localStorage.setItem("loggedin", true)
//     return {
//       email: "b@b.com",
//       token: "123456789"
//     }
//   }
//   throw new Error("Couldn't log the user")
// }
