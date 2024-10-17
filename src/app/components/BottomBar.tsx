import React from "react";
import { BiChat } from "react-icons/bi";
import { FaMedal } from "react-icons/fa6";
import { FiHome } from "react-icons/fi";
import { TbTournament } from "react-icons/tb";

function BottomBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-30">
      <div className=" bg-red-800 px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center">
            <FiHome className="text-white text-2xl" />
            <p className="text-white text-sm">Home</p>
          </div>
          <div className="flex flex-col items-center">
            <TbTournament className="text-white text-2xl" />
            <p className="text-white text-sm">My Matches</p>
          </div>
          <div className="flex flex-col items-center">
            <FaMedal className="text-white text-2xl" />
            <p className="text-white text-sm">Rewards</p>
          </div>
          <div className="flex flex-col items-center">
            <BiChat className="text-white text-2xl" />
            <p className="text-white text-sm">Chat</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
