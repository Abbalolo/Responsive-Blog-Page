import { AiFillCaretDown } from "react-icons/ai"; 
import { BiSearchAlt2 } from "react-icons/bi"; 
import React, { useContext ,useState} from 'react'
import logo from "../../assets/logo.png"
import userimg4 from "../../assets/userimg4.png";
import { OnlineContext } from "../../App";
import { OpenContext } from "../../App";
function MainHeader() {

  const { online } = useContext(OnlineContext);
    const { setOpen, open } = useContext(OpenContext);
  return (
    <header className="md:flex items-center justify-between px-12 py-4 hidden ">
      <div>
        <img src={logo} alt="image" />
      </div>

      <div className="bg-[#F2F2F2] rounded-3xl flex items-center gap-2 px-3 py-2 w-[360px]">
        <BiSearchAlt2 className="text-gray-400" />
        <input
          className="w-full bg-transparent text-sm"
          type="search"
          placeholder="Search for your favorite groups in ATG"
        />
      </div>

      <div className="flex items-center gap-1">
        {online ? (
          <>
            <img className="w-[30px]" src={userimg4} alt="image" />
            <p className="text-sm">Siddharth Goyal</p>
          </>
        ) : (
          <h3  className=" text-[16px] font-bold">
            Create account.
            <span className="text-[#2F6CE5] text-[16px] font-bold">
              It’s free!
            </span>
          </h3>
        )}

        <AiFillCaretDown
          onClick={() => setOpen(!open)}
          className=" cursor-pointer"
        />
      </div>
    </header>
  );
}

export default MainHeader