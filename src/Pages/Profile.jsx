import React from "react";

const Profile = () => {
    return (

        <div class="w-full max-w-md flex justify-center max-h-[300px] mt-7 bg-white border border-gray-200 rounded-lg shadow ">
            <div class="flex justify-end px-4 pt-4">
            </div>
            <div class="flex flex-col items-center pb-10 mt-7">
                <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png" alt="Bonnie image" />
                <h5 class="mb-1 text-xl font-medium text-gray-900">Bonnie Green</h5>
                <span class="text-sm text-gray-500 ">bonniegreen@outlook.com</span>
            </div>
        </div>

    )
}

export default Profile;