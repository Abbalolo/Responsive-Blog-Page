 
import { AiOutlineEyeInvisible, AiFillEye } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import fb from '../../assets/fb.png';
import google from '../../assets/google.png';
import authImage from '../../assets/authImage.png';
import { useContext, useState } from "react";
import { OpenContext } from "../../App";




function MenuBars({ change, setChange }) {
  const [eye, setEye] = useState(false);
  const { setOpen } = useContext(OpenContext);

  return (
    <>
      <div className=" px-4 py-5 md:py-0 md:px-0 rounded-lg absolute bg-white w-full top-40 h-full md:w-[736px] md:h-[513px]  md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:flex md:flex-col z-50">
        <div className="bg-[#EFFFF4] relative p-3 mb-5 text-[#008A45] w-full text-sm font-medium hidden  md:flex md:justify-center rounded-lg">
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </div>
        <AiFillCloseCircle
          onClick={() => setOpen(false)}
          className="text-[24px] text-gray-300 absolute right-0 -top-8 cursor-pointer"
        />
        <div className="mx-5">
          {!change ? (
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-[18px]">Create Account</h1>
              <AiFillCloseCircle
                onClick={() => setOpen(false)}
                className="text-[24px] md:hidden cursor-pointer"
              />
              <p className="hidden md:flex text-[13px] font-semibold">
                Already have an account?
                <span
                  onClick={() => setChange(true)}
                  className="text-[#2F6CE5] cursor-pointer"
                >
                  Sign in
                </span>
              </p>
            </div>
          ) : (
            <div className="flex items-center justify-between mb-5 md:mb-0">
              <h1 className="font-bold text-[18px] md:hidden flex">
                Welcome back!
              </h1>
              <h1 className="font-bold text-[18px] hidden md:flex">Sign In</h1>
              <AiFillCloseCircle
                onClick={() => setOpen(false)}
                className="text-[24px] md:hidden cursor-pointer"
              />
              <p className="hidden md:flex text-[13px] font-semibold">
                Don't have account?
                <span
                  onClick={() => setChange(!change)}
                  className="text-[#2F6CE5] cursor-pointer"
                >
                  {" "}
                  Sign Up
                </span>
              </p>
            </div>
          )}
        </div>

        <div className="md:py-4 md:px-5 md:flex md:justify-between">
          <div className="md:w-1/2">
            {/* register */}
            {!change ? (
              <>
                <form className="mt-3">
                  <div className="flex items-center">
                    <input
                      className="w-full border border-[#D9D9DB] bg-[#F7F8FA] p-2 outline-none"
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      required
                    />
                    <input
                      className="w-full border border-[#D9D9DB] bg-[#F7F8FA] p-2 outline-none"
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  <input
                    className="w-full border border-[#D9D9DB] bg-[#F7F8FA] p-2 outline-none"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <div className="w-full border border-[#D9D9DB] bg-[#F7F8FA] p-2 flex justify-between">
                    <input
                      className="outline-none bg-[#F7F8FA]"
                      type="password"
                      name="password"
                      placeholder="Password"
                      required
                    />
                    <div
                      onClick={() => setEye(!eye)}
                      className="flex text-gray-500 text-[16px]"
                    >
                      {eye ? (
                        <AiFillEye className="cursor-pointer" />
                      ) : (
                        <AiOutlineEyeInvisible className="cursor-pointer" />
                      )}
                    </div>
                  </div>
                  <input
                    className="w-full border border-[#D9D9DB] bg-[#F7F8FA] outline-none p-2"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    required
                  />
                  <div className="flex justify-between items-center mt-5 mb-5">
                    <button
                      className="bg-[#2F6CE5] text-white text-[13px] px-8 py-2 rounded-3xl md:w-full"
                      type="submit"
                    >
                      Create Account
                    </button>
                    <a
                      onClick={() => setChange(true)}
                      className="text-[#495057] text-[13px] md:hidden underline"
                      href="#"
                    >
                      or, Sign In
                    </a>
                  </div>
                </form>

                <div className="flex flex-col gap-3 mt-3">
                  <button className="font-normal text-[13px] flex items-center justify-center gap-3 w-full border border-[#D9D9DB] p-2 rounded-sm">
                    <img src={fb} alt="Facebook icon" />
                    Sign up with Facebook
                  </button>
                  <button className="font-normal text-[13px] flex items-center justify-center gap-3 w-full border border-[#D9D9DB] p-2 rounded-sm">
                    <img src={google} alt="Google icon" />
                    Sign up with Google
                  </button>
                </div>
                <p className="text-center text-[11px] text-[#212529] leading-4 mt-5">
                  By signing up or signing in, you agree to our Terms & <br />{" "}
                  conditions, Privacy policy
                </p>
              </>
            ) : (
              <>
                <form className="mt-3">
                  <input
                    className="w-full border border-[#D9D9DB] bg-[#F7F8FA] p-2 outline-none"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <div className="w-full border border-[#D9D9DB] bg-[#F7F8FA] p-2 flex justify-between">
                    <input
                      className="outline-none bg-[#F7F8FA]"
                      type="password"
                      name="password"
                      placeholder="Password"
                      required
                    />

                    <div
                      onClick={() => setEye(!eye)}
                      className="flex text-gray-500 text-[16px]"
                    >
                      {eye ? (
                        <AiFillEye className="cursor-pointer" />
                      ) : (
                        <AiOutlineEyeInvisible className="cursor-pointer" />
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-5 mb-5">
                    <button
                      className="bg-[#2F6CE5] text-white text-[13px] px-8 py-2 rounded-3xl md:w-full"
                      type="submit"
                    >
                      Sign In
                    </button>
                    <a
                      onClick={() => setChange(false)}
                      className="text-[#495057] text-[13px] md:hidden underline"
                      href="#"
                    >
                      or, Create Account
                    </a>
                  </div>
                </form>

                <div className="flex flex-col gap-3 mt-3">
                  <button className="font-normal text-[13px] flex items-center justify-center gap-3 w-full border border-[#D9D9DB] p-2 rounded-sm">
                    <img src={fb} alt="Facebook icon" />
                    Sign in with Facebook
                  </button>
                  <button className="font-normal text-[13px] flex items-center justify-center gap-3 w-full border border-[#D9D9DB] p-2 rounded-sm">
                    <img src={google} alt="Google icon" />
                    Sign in with Google
                  </button>
                </div>
                <p className="text-center text-[11px] text-[#212529] leading-4 mt-5 hover:underline cursor-pointer">
                  Forgot Password?
                </p>
              </>
            )}
          </div>

          {/* auth left container */}

          <div className="w-[320px] h-[320px] hidden md:flex">
            <img
              className="w-full h-full object-cover"
              src={authImage}
              alt="auth"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuBars;
