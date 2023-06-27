import React from "react";
import axios from "axios";
import { useState } from "react";
import { useCtx } from "../context/ctx";
import { useEffect } from "react";

const Notesinput = () => {
  const { updateApiDoneStatus, apiDone, noteData } = useCtx();
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const addNoteHandler = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/v1/users/addNote",
        {
          title,
          note,
        },
        { withCredentials: true }
      );
      setTitle("");
      setNote("");
      updateApiDoneStatus(!apiDone);
    } catch (err) {
      console.log(err);
    }
  };

  const updateNoteHandler = async (e) => {
    try {
      await axios.patch(
        `http://localhost:5000/api/v1/users/updatedNote/${noteData.id}`,
        {
          title,
          note,
        },
        { withCredentials: true }
      );
      setTitle("");
      setNote("");
      updateApiDoneStatus(!apiDone);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setNote(noteData?.note);
    setTitle(noteData?.title);
  }, [noteData]);

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="flex flex-col lg:min-w-[600px] shadow-sm shadow-black md:min-w-[300px]">
        <input
          type="text"
          value={title}
          placeholder="Title"
          className="text-gray-900 sm:text-sm p-2.5 flex font-bold focus:outline-none"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={note}
          placeholder="Take a note"
          className="text-gray-900 sm:text-sm flex p-2.5 focus:outline-none"
          onChange={(e) => setNote(e.target.value)}
        />
        <button
          onClick={() => {
            addNoteHandler();
          }}
          className="w-[86px] min-h-[36px] text-gray-800 block lg:self-end float-right md:float-left rounded-md mb-2 hover:bg-gray-100"
        >
          Close
        </button>
        {noteData.title && (
          <button
            onClick={() => {
              updateNoteHandler();
            }}
            className="w-[86px] min-h-[36px] text-gray-800 block lg:self-end float-right md:float-left rounded-md mb-2 hover:bg-gray-100"
          >
            Update
          </button>
        )}
      </div>
    </div>
  );
};
export default Notesinput;
