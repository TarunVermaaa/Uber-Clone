import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const SubmitHandler = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setUserData({
      fullname: { firstname: firstName, lastname: lastName },
      email: email,
      password: password,
    });
  };

  return (
    <div className="py-5 px-5 flex flex-col justify-between h-screen">
      <div>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Emblem.png"
          alt=""
          className="w-16 mb-10 "
        />
        <form onSubmit={(e) => SubmitHandler(e)}>
          <h3 className="text-base font-medium mb-2">What's your name</h3>
          <div className="flex gap-4 mb-6">
            <input
              className="bg-[#eeeeee] w-1/2  rounded py-2 px-4 border  text-base placeholder:text-sm"
              type="text"
              placeholder="First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <input
              className="bg-[#eeeeee] w-1/2 rounded py-2 px-4 border  text-base placeholder:text-sm"
              type="text"
              placeholder="Last Name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <h3 className="text-base font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-6 rounded py-2 px-4 border w-full  text-base placeholder:text-sm"
            type="email"
            placeholder="email@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3 className="text-base font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-6 rounded py-2 px-4 border w-full  text-base placeholder:text-sm"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="bg-[#111] text-white font-semibold  mb-3 rounded py-2 px-4  w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center">
          Already have a account?
          <Link to="/captain-login" className="text-blue-600">
            &nbsp;Login here
          </Link>
        </p>
      </div>

      <div>
        <p className="text-[10px] leading-tight text-gray-500">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline"> Google Privacy Policy </span> applies.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignUp;
