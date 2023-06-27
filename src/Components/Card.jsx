import React from "react";
import axios from "axios";
import { TbPencil } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import { useCtx } from "../context/ctx";

const Cards = ({ arrData }) => {
  const { apiDone, updateApiDoneStatus, updateNoteData } = useCtx();

  const deleteHandler = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/v1/users/deleteNote/${id}`,
        { withCredentials: true }
      );

      updateApiDoneStatus(!apiDone);
    } catch (err) {
      console.log(err);
    }
  };

  const updateNoteHandler = async (id) => {
    try {
      await axios.patch(
        `http://localhost:5000/api/v1/users/updatedNote/${id}`,
        {
          isCompleted: true,
        },
        { withCredentials: true }
      );

      updateApiDoneStatus(!apiDone);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-wrap p-6 mt-3 ml-2">
      {arrData
        ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map((item, index) => (
          <div
            key={index + 1}
            className={`${
              item?.isCompleted === true ? "bg-[#F9BB2D]" : "bg-white"
            } block p-6 border min-w-[300px] border-gray-200 rounded-lg shadow duration-700  mt-3 hover:shadow-lg ml-5`}
          >
            <p
              className={`${
                item?.isCompleted === true ? "line-through" : ""
              } font-bold text-gray-700`}
            >
              {item.title}
            </p>

            <p
              className={`${
                item?.isCompleted === true ? "line-through" : ""
              } font-bold text-gray-700`}
            >
              {item.note}
            </p>
            <div className=" text-xl flex gap-2 content-end float-right">
              <span
                className="hover:rounded-xl hover:scale-110 cursor-pointer duration-200 hover:text-green-600"
                onClick={() => {
                  updateNoteData(item?.title, item?.note, item?._id);
                }}
              >
                <TbPencil />
              </span>
              <span
                className="hover:rounded-xl hover:scale-110 cursor-pointer duration-200 hover:text-[#F9BB2D]"
                onClick={() => {
                  updateNoteHandler(item?._id);
                }}
              >
                <AiOutlineCheck />
              </span>
              <span
                className="hover:rounded-xl hover:scale-110 cursor-pointer duration-200 hover:text-red-600"
                onClick={() => {
                  deleteHandler(item?._id);
                }}
              >
                <MdDeleteOutline />
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Cards;
