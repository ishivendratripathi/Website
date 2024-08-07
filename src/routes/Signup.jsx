import React from "react";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="w-full h-screen bg-[url('https://plus.unsplash.com/premium_vector-1689096889240-e8c5f77d2dcf?bg=FFFFFF&q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] flex items-center justify-center">
      <div className="w-full max-w-md bg-pink-100 px-6 py-8 rounded-[30px] shadow-lg">
        <h1 className="text-2xl text-center font-semibold text-zinc-700 tracking-tighter capitalize leading-none">
          Create New Account
        </h1>
        <form action="" method="post" className="mt-6 space-y-4">
          <input
            type="text"
            className="border-2 rounded-full block w-full px-3 py-2"
            name="username"
            placeholder="username"
          />
          <input
            type="text"
            className="border-2 rounded-full block w-full px-3 py-2"
            name="fullname"
            placeholder="Full Name"
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            className="border-2 rounded-full block w-full px-3 py-2"
          />
          <input
            className="border-2 rounded-full block w-full px-3 py-2"
            placeholder="password"
            type="password"
            name="password"
          />
          <input
            type="submit"
            value="Create Account"
            className="border-2 rounded-full block w-full px-3 py-2 bg-pink-600 text-white text-center"
          />
        </form>
        <Link
          to="/signin"
          className="inline-block mt-5 text-sm underline underline-offset-1 font-semibold text-pink-800 text-center w-full "
        >
          Already have an Account?
        </Link>
      </div>
    </div>
  );
};

export default Signup;
