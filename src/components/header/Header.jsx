import { BiArrowBack } from "react-icons/bi"; 
import {  OpenContext } from "../../App.jsx";
import { useContext} from "react";
function Header() {
    const {open, setOpen} = useContext(OpenContext);

  
  const handlemenu = () => {
    setOpen(true)
   };
  
  return (
    <>
      <div className="md:hidden">
        <nav className="flex items-center justify-between text-white">
          <BiArrowBack className="text-2xl" />
          <button
            onClick={handlemenu}
            className="text-[12px] border border-white px-2 py-1 font-semibold  rounded-[4px]"
          >
            {open ? "Leave Group" : "Join Group"}
          </button>
        </nav>
      </div>
    </>
  );
}

export default Header