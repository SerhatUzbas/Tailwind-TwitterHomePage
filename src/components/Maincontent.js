import { HiUserCircle } from "react-icons/hi";
import { RiImage2Line } from "react-icons/ri";
import { AiOutlineGif } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { BsCalendar2Plus } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { BsDot } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { MdIosShare } from "react-icons/md";

const Maincontent = () => {
  return (
    <div className=' w-[40rem] min-w-[33rem] border-r-[1px] '>
      <h1 className='cursor-pointer ml-[1.1rem] mt-[.7rem] text-[1.3rem] font-bold'>
        Home
      </h1>
      <div className=' flex ml-1 mt-[1rem] w-9/12 justify-between'>
        <HiUserCircle className='cursor-pointer w-[10rem] h-[4rem] fill-slate-500 ' />
        <input
          placeholder="What's happening?"
          className=' w-[45rem] indent-1 focus:outline-none'
        />
      </div>
      <div className=' flex w-full justify-between  border-b-[1px] pb-[10px]'>
        <div className=' flex w-[16rem] justify-around ml-[4.1rem] mt-[1rem]'>
          <RiImage2Line className='cursor-pointer w-[20px] h-[20px] fill-blue-400 ' />
          <AiOutlineGif className='cursor-pointer w-[20px] h-[20px] fill-blue-400' />
          <BiPoll className='cursor-pointer w-[20px] h-[20px] fill-blue-400' />
          <BsEmojiSmile className='cursor-pointer w-[20px] h-[20px] fill-blue-400' />
          <BsCalendar2Plus className='cursor-pointer w-[20px] h-[20px] fill-blue-400' />
          <GoLocation className='cursor-pointer w-[20px] h-[20px] fill-blue-400' />
        </div>
        <div className=' w-[5rem] h-[2rem] mt-2 mr-5 rounded-full flex justify-center items-center cursor-pointer transition-all ease-in duration-100 bg-blue-500 text-white hover:bg-blue-600 '>
          Tweet
        </div>
      </div>
      <div className=' flex justify-between mt-7 border-b-[1px] pb-[10px] '>
        <HiUserCircle className='cursor-pointer min-w-min max-w-[10rem] ml-3 h-[4rem] fill-slate-500 ' />
        <div className=' flex flex-col ml-3'>
          <div className=' flex items-center'>
            <h2 className='cursor-pointer font-semibold'>Kyle Simpson</h2>
            <h2 className='cursor-pointer text-gray-500 ml-2'>@KyleSimpson</h2>
            <BsDot className='cursor-pointer mt-1 w-3 fill-gray-500' />
            <h2 className='cursor-pointer text-gray-500 '>54m</h2>
          </div>
          <h2 className='cursor-pointer w-11/12 '>
            Is it... controversial?! ... to suggest that someone starting to
            learn JS might want to read a book (I wrote) titled "Get Started"? I
            mean, I think that's where and how you should start, that's why I
            titled the book that way. I'm sort of amazed that so many people
            still say that beginners shouldn't read my YDKJS books.
          </h2>
          <div className=' flex justify-between w-[27rem] mt-4 '>
            <div className=' flex items-center justify-between w-[2rem]'>
              <FaRegComment className='cursor-pointer fill-gray-500' />
              <h2 className=' text-[.9rem] text-gray-500'>4</h2>
            </div>
            <div className=' flex items-center justify-between w-[3rem]'>
              <FaRetweet className='cursor-pointer fill-gray-500 w-[1.2rem] h-[1.2rem]' />
              <h2 className=' text-[.9rem] text-gray-500'>12</h2>
            </div>
            <div className=' flex items-center justify-between w-[3rem] '>
              <AiOutlineHeart className='cursor-pointer fill-gray-500 ' />
              <h2 className=' text-[.9rem] text-gray-500'>127</h2>
            </div>
            <MdIosShare className='cursor-pointer fill-gray-500' />
          </div>
        </div>
      </div>
      <div className=' flex mt-7 border-b-[1px] pb-[10px]  '>
        <HiUserCircle className='cursor-pointer min-w-min max-w-[10rem] ml-3 h-[4rem] fill-slate-500  ' />
        <div className=' flex flex-col ml-3'>
          <div className=' flex items-center'>
            <h2 className='cursor-pointer font-semibold'>Max Schwarzmueller</h2>
            <h2 className='cursor-pointer text-gray-500 ml-2'>
              @maxschwarzmueller
            </h2>
            <BsDot className='cursor-pointer mt-1 w-3 fill-gray-500' />
            <h2 className='cursor-pointer text-gray-500 '>54m</h2>
          </div>
          <h2 className='cursor-pointer w-11/12 '>
            It’s Sunday - I guess that’s always a great time to think and
            reflect 😉 I’m super excited about this year! Got many cool things
            planned! 🙂 What are you all planning for this year? Doesn’t have to
            be about coding, work or learning at all!
          </h2>
          <div className=' flex justify-between w-[27rem] mt-4 '>
            <div className=' flex items-center justify-between w-[2rem]'>
              <FaRegComment className='cursor-pointer fill-gray-500' />
              <h2 className=' text-[.9rem] text-gray-500'>4</h2>
            </div>
            <div className=' flex items-center justify-between w-[3rem]'>
              <FaRetweet className='cursor-pointer fill-gray-500 w-[1.2rem] h-[1.2rem]' />
              <h2 className=' text-[.9rem] text-gray-500'>12</h2>
            </div>
            <div className=' flex items-center justify-between w-[3rem] '>
              <AiOutlineHeart className='cursor-pointer fill-gray-500 ' />
              <h2 className=' text-[.9rem] text-gray-500'>127</h2>
            </div>
            <MdIosShare className='cursor-pointer fill-gray-500' />
          </div>
        </div>
      </div>
      <div className=' flex mt-7 border-b-[1px] pb-[10px]  '>
        <HiUserCircle className='cursor-pointer min-w-min max-w-[10rem] ml-3 h-[4rem] fill-slate-500 ' />
        <div className=' flex flex-col ml-3'>
          <div className=' flex items-center'>
            <h2 className='cursor-pointer font-semibold'>Jonas Schmedtmann</h2>
            <h2 className='cursor-pointer text-gray-500 ml-2'>
              @JonasSchmedtmann
            </h2>
            <BsDot className='cursor-pointer mt-1 w-3 fill-gray-500' />
            <h2 className='cursor-pointer text-gray-500 '>54m</h2>
          </div>
          <h2 className='cursor-pointer w-11/12 '>
            🔥 I'm going to launch the course update tomorrow at 4pm CET
            (Central European Time). That's 7am PDT (Pacific Time). Need to add
            some finishing touches to the course until then 💅 In the meantime,
            it looks like Udemy has rebranded once again 😅
          </h2>
          <div className=' flex justify-between w-[27rem] mt-4 '>
            <div className=' flex items-center justify-between w-[2rem]'>
              <FaRegComment className='cursor-pointer fill-gray-500' />
              <h2 className=' text-[.9rem] text-gray-500'>4</h2>
            </div>
            <div className=' flex items-center justify-between w-[3rem]'>
              <FaRetweet className='cursor-pointer fill-gray-500 w-[1.2rem] h-[1.2rem]' />
              <h2 className=' text-[.9rem] text-gray-500'>12</h2>
            </div>
            <div className=' flex items-center justify-between w-[3rem] '>
              <AiOutlineHeart className='cursor-pointer fill-gray-500 ' />
              <h2 className=' text-[.9rem] text-gray-500'>127</h2>
            </div>
            <MdIosShare className='cursor-pointer fill-gray-500' />
          </div>
        </div>
      </div>
      <div className=' flex mt-7 border-b-[1px] pb-[10px]  '>
        <HiUserCircle className='cursor-pointer min-w-min max-w-[10rem] ml-3 h-[4rem] fill-slate-500  ' />
        <div className=' flex flex-col ml-3'>
          <div className=' flex items-center'>
            <h2 className='cursor-pointer font-semibold'>Serhat Uzbaş</h2>
            <h2 className='cursor-pointer text-gray-500 ml-2'>@srhtuzbs</h2>
            <BsDot className='cursor-pointer mt-1 w-3 fill-gray-500' />
            <h2 className='cursor-pointer text-gray-500 '>54m</h2>
          </div>
          <h2 className='cursor-pointer w-12/12 '>
            You can check my github via :
            <a href='https://github.com/SerhatUzbas' className='underline'>
              https://github.com/SerhatUzbas
            </a>
          </h2>
          <div className=' flex justify-between w-[27rem] mt-4 '>
            <div className=' flex items-center justify-between w-[2rem]'>
              <FaRegComment className='cursor-pointer fill-gray-500' />
              <h2 className=' text-[.9rem] text-gray-500'>4</h2>
            </div>
            <div className=' flex items-center justify-between w-[3rem]'>
              <FaRetweet className='cursor-pointer fill-gray-500 w-[1.2rem] h-[1.2rem]' />
              <h2 className=' text-[.9rem] text-gray-500'>12</h2>
            </div>
            <div className=' flex items-center justify-between w-[3rem] '>
              <AiOutlineHeart className='cursor-pointer fill-gray-500 ' />
              <h2 className=' text-[.9rem] text-gray-500'>127</h2>
            </div>
            <MdIosShare className='cursor-pointer fill-gray-500' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maincontent;
