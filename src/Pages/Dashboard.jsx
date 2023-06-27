import React, { useState } from "react";
import { CgProfile, CgLogOut } from "react-icons/cg";
import { TbPencil } from "react-icons/tb";
import Profile from "./Profile";
import Notes from "./Notes";
import Logout from "../Components/Logout";

const Dashboard = () => {
  const Sidebar = [
    { id: 1, name: "Notes", icon: <TbPencil /> },
    { id: 2, name: "Profile", icon: <CgProfile /> },
    { id: 3, name: "Logout", icon: <CgLogOut /> },
  ];
  const [pageId, setPageId] = useState(1);

  return (
    <div className="grid grid-cols-12 h-screen w-screen ">
      <div className="col-span-2 bg-white p-3">
        <h2 className="text-[#F9BB2D] pl-10 text-4xl mb-4 ">Google Keep</h2>
        {Sidebar.map((item) => (
          <div
            className={`${
              item.id === pageId ? "bg-[#feefc3]" : "bg-white"
            } flex hover:bg-gray-200 items-center gap-2 pt-4 pb-4 pl-4 cursor-pointer rounded-r-full `}
            key={item.id}
            onClick={() => {
              setPageId(item.id);
            }}
          >
            <span className="text-lg">{item.icon}</span>
            <p className="xl:contents lg:contents text-lg md:contents max-sm:hidden ">
              {item.name}
            </p>
          </div>
        ))}
      </div>
      <div className="col-span-10 bg-white flex justify-center pr-10">
        {pageId === 1 && <Notes />}
        {pageId === 2 && <Profile />}
        {pageId === 3 && <Logout />}
      </div>
    </div>
  );
};

export default Dashboard;
