import { AiOutlineClose } from "react-icons/ai"; 
import { AiFillLike } from "react-icons/ai"; 
import { BiErrorCircle } from "react-icons/bi"; 
import { HiPencil } from "react-icons/hi"; 
import { FaUsers } from "react-icons/fa"; 
import { BsCalendarCheck } from "react-icons/bs";
import { BsFillShareFill } from "react-icons/bs";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { useContext, useState } from "react";
import Header from "../components/header/Header";
import image1 from "../assets/image1.png";
import follow1 from "../assets/follow1.png";
import follow2 from "../assets/follow2.png";
import follow3 from "../assets/follow3.png";
import follow4 from "../assets/follow4.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import userimg1 from "../assets/userimg1.png";
import userimg2 from "../assets/userimg2.png";
import userimg3 from "../assets/userimg3.png";
import userimg4 from "../assets/userimg4.png";
import MenuBars from "../components/MenuBars/MenuBars";
import { OnlineContext, OpenContext } from "../App";

function Home() {
  // const [open, setOpen] = useState(false);
  const [change, setChange] = useState(false);
  const [dotOption, setDotOption] = useState(false)
  const [followed, setFollowed] = useState(false)
  const [follow, setFollow] = useState(false)
  const {online, setOnline} = useContext(OnlineContext);
  const {open, setOpen} = useContext(OpenContext);

  const blogs = [
    {
      id: 1,
      name: "✍️ Article",
      icon: "",
      head: "What if famous brands had regular fonts? Meet RegulaBrands!",
      subhead: "I’ve worked in UX for the better part of a decade. F..",
      image: image1,
      userImage: userimg1,
      userName: "Sarthak Kamra",
      views: "1.4k views",
    },
    {
      id: 2,
      name: "🔬 Education",
      icon: "",
      head: "Tax Benefits for Investment under National Pension Scheme launched by Government",
      subhead: "I’ve worked in UX for the better part of a decade. F..",
      image: image2,
      userImage: userimg2,
      userName: "Sarah West",
      views: "4.8k views",
    },
    {
      id: 3,
      name: "🗓️ Meetup",
      dateIcon: <BsCalendarCheck />,
      locationIcon: <CiLocationOn />,
      head: "Finance & Investment Elite Social Mixer @Lujiazui",
      image: image3,
      userImage: userimg3,
      userName: "Ronal Jones",
      views: "800 views",
      location: "Ahmedabad, India",
      date: "FRiday, 12 Oct, 2018",
      site: "view website",
    },
    {
      id: 4,
      name: "💼️ Job",
      dateIcon: <BsCalendarCheck />,
      locationIcon: <CiLocationOn />,
      head: "Software Developer - II",
      userImage: userimg4,
      userName: "Ronal Jones",
      views: "800 views",
      date: "Innovaccer Analytic...",
      location: "Noida, India",
      button: "Apply on Timesjobs",
      site2: "Apply on Timesjobs",
    },
  ];

  const handleModal = () => {
    setOnline(true);
    setOpen(true);
    setChange(true)
  }

  return (
    <section className="overflow-x-hidden">
      <div className="hero h-[236px] md:h-[440px] relative p-5 z-10">
        <Header />
        <div className="text-white absolute md:left-[140px] bottom-5 md:bottom-20 md:leading-8 leading-4">
          <h2 className="font-extrabold text-[17px] md:text-[36px]">
            Computer Engineering
          </h2>
          <p className="text-[12px] md:text-[18px] font-light">
            142,765 Computer Engineers follow this
          </p>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      ) : null}

      {open ? <MenuBars change={change} setChange={setChange} /> : null}

      <div className="md:px-36">
        <div className="md:hidden px-3 items-center justify-between mt-3 flex">
          <h2 className="font-extrabold">Posts(368)</h2>
          <div className="flex items-center gap-2 bg-[#F1F3F5] px-2 py-1">
            <span className="text-[13px] font-medium">Filter: All</span>
            <IoMdArrowDropdown className="text-black cursor-pointer" />
          </div>
        </div>

        <div className="md:flex items-center justify-between mt-3 hidden">
          <ul className="flex items-center gap-3 relative">
            <li className="relative">
              <a
                className="font-extrabold after:content[''] after:absolute after:w-full after:h-[2px] after:bg-gray-500 after:left-0 after:-bottom-4"
                href="#"
              >
                All Posts(368)
              </a>
            </li>
            <li className="text-[#8A8A8A] cursor-pointer">Article</li>
            <li className="text-[#8A8A8A] cursor-pointer">Event</li>
            <li className="text-[#8A8A8A] cursor-pointer">Education</li>
            <li className="text-[#8A8A8A] cursor-pointer">Job</li>
          </ul>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 bg-[#F1F3F5] px-2 py-1 rounded-sm">
              <span className="text-[13px] font-medium">Write a Post</span>
              <IoMdArrowDropdown className="text-black cursor-pointer" />
            </button>
            {online ? (
              <button
                onClick={() => setOnline(!online)}
                className="flex items-center gap-2 border border-gray-400 text-gray-400  px-2 py-1 rounded-sm"
              >
                <FaUsers className=" cursor-pointer" />
                <span className="text-[13px] font-medium">Leave Group</span>
              </button>
            ) : (
              <button
                onClick={handleModal}
                className="flex items-center gap-2 text-white bg-[#2F6CE5] px-2 py-1 rounded-sm"
              >
                <FaUsers className=" cursor-pointer" />
                <span className="text-[13px] font-medium">Join Group</span>
              </button>
            )}
          </div>
        </div>
        <div className=" h-[2px] bg-gray-200 mt-3  overflow-hidden rounded-md"></div>

        <div className=" md:flex md:grid-cols-2 gap-16 mt-5">
          <div className="md:w-[75%]">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="shadow-md md:shadow-none md:border md:border-gray-300 md:rounded-md mb-3"
              >
                {blog.image && (
                  <img className="w-full h-full" src={blog.image} alt="image" />
                )}
                <h2 className="mt-2 mb-2 text-[#343A40] text-[14px] font-medium px-3">
                  {blog.name}
                </h2>
                <div className="flex items center justify-between px-3">
                  <h3 className="font-extrabold text-[#212529]">{blog.head}</h3>
                  <div className="relative">
                    <BiDotsHorizontalRounded
                      onClick={() => setDotOption(!dotOption)}
                      className="text-[25px] cursor-pointer"
                    />
                    {dotOption && (
                      <ul className="absolute -bottom-10 bg-white shadow-md pl-2 pr-5 py-1">
                        <li>Edit</li>
                        <li>Report</li>
                        <li>Option</li>
                      </ul>
                    )}
                  </div>
                </div>
                <p className="text-[#495057] px-3">{blog.subhead}</p>
                <div className="flex items-center gap-20 mt-2 mb-3 px-3">
                  <span className="text-xs font-medium flex items-center gap-2">
                    {blog.dateIcon}
                    {blog.date}
                  </span>
                  <span className="text-xs font-medium flex items-center gap-2">
                    {blog.locationIcon}
                    {blog.location}
                  </span>
                </div>
                <div className="mx-3">
                  {blog.site && (
                    <button className="text-[13px] font-semibold text-center w-full text-[#E56135] border border-gray-300  p-1 rounded-md">
                      {blog.site}
                    </button>
                  )}
                  {blog.site2 && (
                    <button className=" text-[13px] font-semibold text-center text-[#02B875] border border-gray-300 w-full p-1 rounded-md">
                      {blog.site2}
                    </button>
                  )}
                </div>

                <div className="px-3 flex items-center justify-between mt-3">
                  <div className="flex items-center gap-3 pt-4 pb-4">
                    <img src={blog.userImage} alt="image" />
                    <div className="leading-5">
                      <h4 className="font-extrabold">{blog.userName}</h4>
                      <p className="text-xs font-normal">{blog.views}</p>
                    </div>
                  </div>
                  <div className="cursor-pointer flex items-center gap-2 bg-[#F1F3F5] px-2 py-1 rounded-sm">
                    <BsFillShareFill />
                    <p className="text-xs">share</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="md:w-[35%] md:block hidden">
            {online ? (
              <div className="flex items-center justify-between">
                <div className="text-xs font-medium flex items-center gap-2">
                  <CiLocationOn />
                  <input
                    className="outline-none bg-transparent"
                    type="search"
                    placeholder="Enter your location"
                  />
                </div>
                <AiOutlineClose />
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium flex items-center gap-2">
                  <CiLocationOn />
                  Noida, India
                </span>
                <HiPencil />
              </div>
            )}

            <div className=" h-[2px] bg-gray-200 mt-3 mb-4 rounded-md"></div>
            <p className="flex items-center gap-2 text-xs">
              <BiErrorCircle />
              Your location will help us serve better and extend a personalised
              experience.
            </p>

            {online && (
              <div className="mt-5">
                <h1 className="flex items-center gap-2">
                  <AiFillLike />
                  Recommended Groups
                </h1>

                <div className="mt-5 flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={follow1} alt="image" />
                      <p className="text-sm">Leisure</p>
                    </div>
                    <div onClick={() => setFollowed(true)}>
                      {!followed ? (
                        <button className="bg-black text-sm text-white px-3 py-[2px] rounded-3xl">
                          Followed
                        </button>
                      ) : (
                        <button className="border border-gray-300 text-sm text-gray-500 px-3 py-[2px] rounded-3xl">
                          Follow
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={follow2} alt="image" />
                      <p className="text-sm">Activism</p>
                    </div>
                    <div onClick={() => setFollow(!follow)}>
                      {follow ? (
                        <button className="bg-black text-sm text-white px-3 py-[2px] rounded-3xl">
                          Followed
                        </button>
                      ) : (
                        <button className="border border-gray-300 text-sm text-gray-500 px-3 py-[2px] rounded-3xl">
                          Follow
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={follow3} alt="image" />
                      <p className="text-sm">MBA</p>
                    </div>
                    <div onClick={() => setFollow(!follow)}>
                      {follow ? (
                        <button className="bg-black text-sm text-white px-3 py-[2px] rounded-3xl">
                          Followed
                        </button>
                      ) : (
                        <button className="border border-gray-300 text-sm text-gray-500 px-3 py-[2px] rounded-3xl">
                          Follow
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={follow4} alt="image" />
                      <p className="text-sm">Philosofy</p>
                    </div>
                    <div onClick={() => setFollow(!follow)}>
                      {follow ? (
                        <button className="bg-black text-sm text-white px-3 py-[2px] rounded-3xl">
                          Followed
                        </button>
                      ) : (
                        <button className="border border-gray-300 text-sm text-gray-500 px-3 py-[2px] rounded-3xl">
                          Follow
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-blue-500 text-end text-sm mt-10">
                  See More...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
