import React, { useEffect, useState } from "react";
import axios from "axios";
import { BiUserCircle } from "react-icons/bi";

const Profile = () => {
  const [data, setData] = useState();

  const getProfile = async () => {
    try {
      const resp = await axios.get(`http://localhost:5000/api/v1/users/me`, {
        withCredentials: true,
      });

      setData(resp);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="w-full max-w-md flex justify-center items-center max-h-[300px] mt-7 bg-white border border-gray-200 rounded-lg shadow ">
      <div className="flex flex-col items-center pb-10 mt-7">
        <BiUserCircle className="w-24 h-24 mb-3 rounded-full shadow-lg" />
        <h5 className="mb-1 text-xl font-medium text-gray-900">
          {data?.data.data.doc.name}
        </h5>
        <span className="text-sm text-gray-500 ">
          {data?.data.data.doc.email}
        </span>
      </div>
    </div>
  );
};

export default Profile;
