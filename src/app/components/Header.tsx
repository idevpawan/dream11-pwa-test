"use client";

import React, { useState } from "react";
import { ImUser } from "react-icons/im";
import { BiBell, BiWallet } from "react-icons/bi";
import { CiBaseball } from "react-icons/ci";
import { IoFootballOutline } from "react-icons/io5";

const tabItems = [
  {
    name: "Cricket",
    icon: <CiBaseball className="text-2xl" />,
  },
  {
    name: "Football",
    icon: <IoFootballOutline className="text-2xl" />,
  },
];

function Header() {
  const [selectedTab, setSelectedTab] = useState(tabItems[0]);
  return (
    <div className="h-32 overflow-hidden flex flex-col justify-between bg-gradient-to-r from-red-700 to-red-900 shadow-lg text-white p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="border-2 border-white overflow-hidden w-10 h-10 bg-gray-200 rounded-full">
            <ImUser className="text-gray-500 text-4xl mx-auto mt-1" />
          </div>
          <p className="text-2xl font[p; xz] font-bold">DREAM11</p>
        </div>
        <div className="flex items-center gap-4">
          <BiBell className="text-2xl " />
          <BiWallet className="text-2xl " />
        </div>
      </div>
      <div className="flex mt-[18px] gap-8">
        {tabItems.map((item) => (
          <div
            key={item.name}
            onClick={() => setSelectedTab(item)}
            className="flex w-full flex-col items-center"
          >
            <div
              className={`${
                selectedTab.name === item.name ? "bg-white/20" : ""
              } rounded-full p-1`}
            >
              {item.icon}
            </div>
            <p
              className={`${
                selectedTab.name === item.name
                  ? "text-white text-[10px]"
                  : "text-white/60 text-[9px]"
              } font-bold uppercase`}
            >
              {item.name}
            </p>
            {item.name === selectedTab.name && (
              <div className="h-1 w-full bg-white rounded mt-1"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Header;
