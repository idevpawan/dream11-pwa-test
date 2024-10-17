"use client";

import React, { useState } from "react";
import { ImUser } from "react-icons/im";
import {
  BiBell,
  BiCog,
  BiDotsVertical,
  BiGame,
  BiMedal,
  BiRightArrow,
  BiUserPlus,
  BiWallet,
} from "react-icons/bi";
import { CiBaseball } from "react-icons/ci";
import { IoFootballOutline } from "react-icons/io5";
import { FaHamburger } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { FaHandsHolding } from "react-icons/fa6";

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

const menuItems = [
  {
    name: "Refer & Earn",
    icon: <BiUserPlus className="text-2xl" />,
  },
  {
    name: "Winners",
    icon: <BiMedal className="text-2xl" />,
  },
  {
    name: "My Info & Settings",
    icon: <BiCog className="text-2xl" />,
  },
  {
    name: "How to Play",
    icon: <BiGame className="text-2xl" />,
  },
  {
    name: "Responsible Play",
    icon: <FaHandsHolding className="text-2xl" />,
  },
  {
    name: "More",
    icon: <BiDotsVertical className="text-2xl" />,
  },
];

function Header() {
  const [selectedTab, setSelectedTab] = useState(tabItems[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="h-32 fixed top-0 left-0 w-full z-30 overflow-hidden flex flex-col justify-between bg-red-800 shadow-lg text-white p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div
              className="relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="border-2 border-white overflow-hidden w-10 h-10 bg-gray-200 rounded-full">
                <ImUser className="text-gray-500 text-4xl mx-auto mt-1" />
              </div>
              <FaHamburger className="text-white absolute top-6 left-6 text-xl " />
            </div>
            <p className="text-2xl font-bold">DREAM11</p>
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
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div className="fixed z-30 top-0 left-0 w-full h-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
              className="bg-black/50 absolute w-full h-full"
            />
            <motion.div
              initial={{ x: -400 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.2 }}
              exit={{ x: -400 }}
              className="bg-gray-100 z-20 w-[80%] h-full"
            >
              <div className="bg-black w-full h-28 p-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <ImUser className="text-gray-600 bg-white rounded-full p-2 w-14 h-14 text-4xl" />
                    <div>
                      <p className="text-white text-sm font-bold">
                        ZNCEXR BOMBERS
                      </p>
                      <p className="text-white text-sm">Skill Level 1</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <BiRightArrow className="text-white text-2xl" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col p-6 gap-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                    className="flex bg-white rounded-lg p-4 items-center gap-4"
                  >
                    {item.icon}
                    <p className="text-black text-sm">{item.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
export default Header;
