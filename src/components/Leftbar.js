import { RiHome7Fill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { BiHash } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiMail } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { CgMoreO } from "react-icons/cg";
import { HiUserCircle } from "react-icons/hi";
const Leftbar = () => {
  return (
    <div className='w-[20rem] flex justify-end h-screen '>
      <div className='flex flex-col  w-[17rem] text-[20px] fixed border-r-[1px]'>
        <div>
          <a
            href='/'
            alt='Home'
            className='  flex max-w-fit p-2  hover:rounded-full hover:bg-blue-400/30 '
          >
            <BsTwitter className='w-7 h-7 fill-cyan-600' />
          </a>
        </div>

        <a href='/' alt='Home' className='group'>
          <div className='  flex mt-2 max-w-fit pl-2 pr-10 pt-2 pb-2 group-hover:rounded-full group-hover:bg-slate-400/30  '>
            <RiHome7Fill className='w-7 h-7' />
            <h1 className=' ml-[1rem]'>Home</h1>
          </div>
        </a>
        <a href='/' alt='Home' className='group'>
          <div className='  flex mt-2 max-w-fit pl-2 pr-10 pt-2 pb-2 group-hover:rounded-full group-hover:bg-slate-400/30  '>
            <BiHash className='w-7 h-7' />
            <h1 className=' ml-[1rem]'>Explore</h1>
          </div>
        </a>
        <a href='/' alt='Home' className='group'>
          <div className='  flex mt-2 max-w-fit pl-2 pr-10 pt-2 pb-2 group-hover:rounded-full group-hover:bg-slate-400/30  '>
            <FaUserFriends className='w-7 h-7' />
            <h1 className=' ml-[1rem]'>Communuties</h1>
          </div>
        </a>
        <a href='/' alt='Home' className='group'>
          <div className='  flex mt-2 max-w-fit pl-2 pr-10 pt-2 pb-2 group-hover:rounded-full group-hover:bg-slate-400/30  '>
            <IoMdNotificationsOutline className='w-7 h-7' />
            <h1 className=' ml-[1rem]'>Notifications</h1>
          </div>
        </a>
        <a href='/' alt='Home' className='group'>
          <div className='  flex mt-2 max-w-fit pl-2 pr-10 pt-2 pb-2 group-hover:rounded-full group-hover:bg-slate-400/30  '>
            <FiMail className='w-7 h-7' />
            <h1 className=' ml-[1rem]'>Messages</h1>
          </div>
        </a>
        <a href='/' alt='Home' className='group'>
          <div className='  flex mt-2 max-w-fit pl-2 pr-10 pt-2 pb-2 group-hover:rounded-full group-hover:bg-slate-400/30  '>
            <BsBookmark className='w-7 h-7' />
            <h1 className=' ml-[1rem]'>Bookmarks</h1>
          </div>
        </a>
        <a href='/' alt='Home' className='group'>
          <div className='  flex mt-2 max-w-fit pl-2 pr-10 pt-2 pb-2 group-hover:rounded-full group-hover:bg-slate-400/30  '>
            <FiUser className='w-7 h-7' />
            <h1 className=' ml-[1rem]'>Profile</h1>
          </div>
        </a>
        <a href='/' alt='Home' className='group'>
          <div className='  flex mt-2 max-w-fit pl-2 pr-10 pt-2 pb-2 group-hover:rounded-full group-hover:bg-slate-400/30  '>
            <CgMoreO className='w-7 h-7' />
            <h1 className=' ml-[1rem]'>More</h1>
          </div>
        </a>
        <div className='w-[14rem] h-[3.2rem] mt-2 rounded-full flex justify-center items-center cursor-pointer transition-all ease-in duration-100 bg-blue-500 text-white hover:bg-blue-600 ml-[-.4rem]'>
          Tweet
        </div>
        <a href='/' alt='Home' className='group'>
          <div className='  flex w-[15rem] pl-2 pr-10 mt-6 ml-[-.6rem]  group-hover:rounded-full group-hover:bg-slate-400/30  '>
            <HiUserCircle className='w-12 h-12 fill-slate-500' />
            <div className='flex flex-col ml-[.6rem]'>
              <h2 className='text-[1rem] font-semibold'>Serhat Uzbaş</h2>
              <h4 className='text-sm text-gray-500'>@srhtuzbs</h4>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Leftbar;
