import React from "react";
import { TbPencil } from 'react-icons/tb';
import { MdDeleteOutline } from 'react-icons/md';
import { AiOutlineCheck } from 'react-icons/ai';


const Cards = () => {
    return (

        <div className="block p-6 bg-white border max-w-[240px] border-gray-200 rounded-lg shadow duration-700  mt-3 hover:shadow-lg">
            <p className="font-normal text-gray-700 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <div className=" text-xl flex gap-2 content-end float-right">
                <span className="hover:rounded-xl hover:scale-110 cursor-pointer duration-200 hover:text-[#F9BB2D] ">
                    <TbPencil />
                </span >
                <span className="hover:rounded-xl hover:scale-110 cursor-pointer duration-200 hover:text-[#F9BB2D]">
                    <AiOutlineCheck />
                </span>
                <span className="hover:rounded-xl hover:scale-110 cursor-pointer duration-200 hover:text-red-600">
                    <MdDeleteOutline />
                </span>
            </div>
        </div>

    )
}
export default Cards