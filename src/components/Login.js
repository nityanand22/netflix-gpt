import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_small.jpg"
          alt="background image"
        />
      </div>

      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-85">
        <h1 className="font-bold text-3xl py-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-800 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-800 rounded-lg"
        />
        <input
          type="Password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-800 rounded-lg"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "SignIn" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix ? Sign Up Now"
            : "Already registered ? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
