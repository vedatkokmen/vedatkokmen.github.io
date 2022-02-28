import React from "react";

function index() {
  return (
    <div>
      <form className="w-full md:w-4/12 mx-auto py-10">
        <label className="block text-sm mb-1" for="emailinput">
          Your Email
        </label>
        <input
          className="form-input"
          type="email"
          placeholder="Ex. james@bond.com"
          id="emailinput"
          required
        />
        <label className="block text-sm mb-1 mt-4" for="passwordinput">
          Your Password
        </label>
        <input
          className="form-input"
          type="password"
          placeholder="••••••••"
          id="passwordinput"
          required
        />
        <label className="flex items-center mt-4">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2 cursor-pointer text-sm">Remember me</span>
        </label>
        <input
          type="submit"
          className="btn btn-primary w-full mt-4"
          value="Login"
        />
      </form>
    </div>
  );
}

export default index;
