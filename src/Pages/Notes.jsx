import React from "react";
import Notesinput from "../Components/Notesinput";
import Cards from "../Components/Card";


const Notes = () => {
    return (
        <div className="">
            <Notesinput />
            <div className="flex gap-4 flex-wrap">
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>
        </div>
    )
}

export default Notes;