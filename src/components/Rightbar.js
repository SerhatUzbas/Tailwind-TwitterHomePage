import { FiMoreHorizontal } from "react-icons/fi";
const Rightbar = () => {
  return (
    <div className='  w-4/12 flex flex-col items-center mt-3'>
      <input
        className='w-[22rem] h-[3rem] indent-3 rounded-full bg-gray-100 focus:outline-none'
        placeholder='Search Twitter'
      />
      <div className='w-[22rem] h-[40rem] bg-gray-100 rounded-[.7rem] justify-around   flex flex-col items-start mt-4'>
        <h1 className='text-[1.4rem] ml-2'>Trends for you</h1>
        <div className='flex w-[21rem] justify-between ml-2 cursor-pointer hover:bg-slate-200'>
          <div className='flex flex-col'>
            <h4 className='text-[.8rem] text-gray-500'>Trending in turkey</h4>
            <h2 className='text-[1.1rem] font-semibold'>#OpentoWork</h2>
            <h3 className='text-[.7rem] text-gray-500'>3,122 Tweets</h3>
          </div>
          <FiMoreHorizontal />
        </div>
        <div className='flex w-[21rem] justify-between ml-2 cursor-pointer hover:bg-slate-200'>
          <div className='flex flex-col'>
            <h4 className='text-[.8rem] text-gray-500'>Trending in turkey</h4>
            <h2 className='text-[1.1rem] font-semibold'>#React.js</h2>
            <h3 className='text-[.7rem] text-gray-500'>3,122 Tweets</h3>
          </div>
          <FiMoreHorizontal />
        </div>
        <div className='flex w-[21rem] justify-between ml-2 cursor-pointer hover:bg-slate-200'>
          <div className='flex flex-col'>
            <h4 className='text-[.8rem] text-gray-500'>Trending in turkey</h4>
            <h2 className='text-[1.1rem] font-semibold'>#Javascript</h2>
            <h3 className='text-[.7rem] text-gray-500'>3,122 Tweets</h3>
          </div>
          <FiMoreHorizontal />
        </div>
        <div className='flex w-[21rem] justify-between ml-2 cursor-pointer hover:bg-slate-200'>
          <div className='flex flex-col'>
            <h4 className='text-[.8rem] text-gray-500'>Trending in turkey</h4>
            <h2 className='text-[1.1rem] font-semibold'>#Tailwind</h2>
            <h3 className='text-[.7rem] text-gray-500'>3,122 Tweets</h3>
          </div>
          <FiMoreHorizontal />
        </div>
        <div className='flex w-[21rem] justify-between ml-2 cursor-pointer hover:bg-slate-200'>
          <div className='flex flex-col'>
            <h4 className='text-[.8rem] text-gray-500'>Trending in turkey</h4>
            <h2 className='text-[1.1rem] font-semibold'>#Vue.js</h2>
            <h3 className='text-[.7rem] text-gray-500'>3,122 Tweets</h3>
          </div>
          <FiMoreHorizontal />
        </div>
        <div className='flex w-[21rem] justify-between ml-2 cursor-pointer hover:bg-slate-200'>
          <div className='flex flex-col'>
            <h4 className='text-[.8rem] text-gray-500'>Trending in turkey</h4>
            <h2 className='text-[1.1rem] font-semibold'>#Next.js</h2>
            <h3 className='text-[.7rem] text-gray-500'>3,122 Tweets</h3>
          </div>
          <FiMoreHorizontal />
        </div>
        <div className='flex w-[21rem] justify-between ml-2 cursor-pointer hover:bg-slate-200'>
          <div className='flex flex-col'>
            <h4 className='text-[.8rem] text-gray-500'>Trending in turkey</h4>
            <h2 className='text-[1.1rem] font-semibold'>#Sass</h2>
            <h3 className='text-[.7rem] text-gray-500'>3,122 Tweets</h3>
          </div>
          <FiMoreHorizontal />
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
