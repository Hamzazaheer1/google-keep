import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Notesinput from "../Components/Notesinput";
import Cards from "../Components/Card";
import { useCtx } from "../context/ctx";

const Notes = () => {
  const [data, setData] = useState();
  const { apiDone } = useCtx();

  const getNotes = async () => {
    try {
      const resp = await axios.get(
        `http://localhost:5000/api/v1/users/getMyNotes`,
        {
          withCredentials: true,
        }
      );

      setData(resp);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNotes();
  }, [apiDone]);

  console.log(data);

  return (
    <div className="">
      <Notesinput />
      <div className="flex gap-4 flex-wrap">
        <Cards arrData={data?.data.notes} />
      </div>
    </div>
  );
};

export default Notes;
