import React, { useState } from "react";
import { Form, Link } from "react-router-dom";

export default function SignUp() {
  const [FormData, setFormData] = useState({
    UserName: "",
    Password: "",
    Email: "",
  });
  const [Adding, setAdding] = useState(false);
  const [Error, setError] = useState("");
  function HandleUserName(e) {
    const Data = e.target.value;
    setFormData({
      UserName: Data,
      Password: FormData.Password,
      Email: FormData.Email,
    });
  }
  function HandleEmail(e) {
    const Data = e.target.value;
    setFormData({
      UserName: FormData.UserName,
      Password: FormData.Password,
      Email: Data,
    });
  }
  function HandlePassword(e) {
    const Data = e.target.value;
    setFormData({
      UserName: FormData.UserName,
      Password: Data,
      Email: FormData.Email,
    });
  }
  async function handleFormSubmit(e) {
    //console.log(JSON.stringify(FormData));
    setAdding(true);
    e.preventDefault();
    try {
      const res = await fetch("api/v1/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(FormData),
      });
      const data = await res.json();
      console.log(data);
      setAdding(false);
      setError("User added");
      //setAdditionResult(true);
    } catch (error) {
      console.log("Error:", error);
      setAdding(false);
      setError("User Could not be added");
      console.log(Error);
    }
  }

  console.log(FormData);

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-slate-200 rounded-md shadow-xl ring-2 ring-slate-700 lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-slate-800 uppercase">
          Sign UP
        </h1>
        <form className="mt-6" onSubmit={handleFormSubmit}>
          <div className="mb-2">
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Username"
              id="username"
              onChange={HandleUserName}
            />
          </div>

          <div className="mb-2">
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Password"
              id="password"
              onChange={HandlePassword}
            />
          </div>
          <div className="mb-2">
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email"
              id="email"
              onChange={HandleEmail}
            />
          </div>

          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-slate-800 rounded-md hover:bg-slate-600 focus:outline-none focus:bg-slate-600">
              {Adding ? "Adding User....." : "Signup"}
            </button>
          </div>
          {Error && <p className="text-danger">{Error}</p>}
        </form>
        <Link to="/signin">
          <p className="mt-8 text-xs py-2 font-medium text-center text-gray-700">
            Already have an account?
            <span className="text-blue-600 font-semibold"> Signin</span>
          </p>
        </Link>
      </div>
    </div>
  );
}
