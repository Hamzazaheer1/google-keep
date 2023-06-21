import React from "react";

const Notesinput = () => {
    return (
        <div className="w-full flex justify-center mt-10">
            <form className="flex flex-col lg:min-w-[600px] shadow-sm shadow-black md:min-w-[300px]">
                <input type="text" name="notes" id="notes" placeholder="Title" className="text-gray-900 sm:text-sm p-2.5 flex focus:outline-none" />
                <input type="text" name="notes" id="notes" placeholder="Take a note" className="text-gray-900 sm:text-sm flex p-2.5 focus:outline-none" />
                <button className="w-[86px] min-h-[36px] text-gray-800 block lg:self-end float-right md:float-left rounded-md mb-2 hover:bg-gray-100">Close</button>
            </form>
        </div>
    )
}
export default Notesinput