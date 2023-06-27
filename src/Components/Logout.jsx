import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const Navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:5000/api/v1/users/signout", {
        withCredentials: true,
      });

      Navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-lg font-semibold">
        Are you sure you want to logout.....
      </h1>
      <button
        className="w-28 text-black bg-[#F9BB2D] hover:bg-[#e0a829] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
