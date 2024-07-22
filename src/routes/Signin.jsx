import React from "react";

const Signin = () => {
  return (
    <div className="w-full h-screen bg-[url('https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] flex items-center justify-center">
      <div className="w-[25vw] bg-zinc-100 px-20 py-10 rounded-[30px]">
        <h1 className="text-3xl text-center font-semibold text-zinc-700 tracking-tighter capitalize leading-none">
          Welcome To mindhealth
        </h1>
        <form action="" method="post">
          <input
            type="text"
            name="username"
            placeholder="username"
            className="border-2 rounded-full block mt-2 w-full px-3 py-2"
          />
          <input
            className="border-2 rounded-full block mt-2 w-full px-3 py-2"
            type="password"
            name="password"
            placeholder="password"
          />
          <a className="font-semibold text-zinc-600 inline-block mt-2" href="">
            Forgot Password?
          </a>
          <input
            type="submit"
            value="LogIn"
            className="border-2 block mt-2 w-full px-3 py-2 bg-blue-600 text-white rounded-full"
          />
          <p className="text-xs font-semibold text-zinc-700 mt-5 text-center mx-auto w-3/4">
            By continuing, you agree to mindhealth's Terms of Service and
            acknowledge you've read our Privacy Policy. Notice at collection.
          </p>
        </form>
        <a
          className="inline-block mt-5 underline underline-offset-1 text-sm font-semibold text-zinc-700 text-center w-full"
          href="/signup"
        >
          Don't have an account?
        </a>
      </div>
    </div>
  );
};

export default Signin;
