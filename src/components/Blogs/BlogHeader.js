import { FiSearch } from "../../Icons/Icons";

export default function BlogHeader() {
  return (
    <>
      <div className='container flex flex-col md:flex-row justify-between items-center gap-5'>
        <div className='flex items-center md:gap-10 gap-2'>
          <h1 className='font-bold text-Black text-4xl'>Blog</h1>
          <div className='flex items-center gap-4'>
            <span className='px-5 py-[7px] rounded-full bg-[rgba(44,35,71,0.10)] text-Black'>
              Sports
            </span>
            <span className='px-5 py-[7px] rounded-full bg-[rgba(44,35,71,0.10)] text-Black'>
              Sports Car
            </span>
            <span className='px-5 py-[7px] rounded-full bg-[rgba(44,35,71,0.10)] text-Black'>
              Bike
            </span>
          </div>
        </div>
        <div>
          <div className='relative'>
            <input
              className='w-[300px] pr-5 pl-10 py-[7px] rounded-[40px] bg-[rgba(255,255,255,0.50)] border border-white focus:outline-none'
              type='text'
              name=''
              id=''
              placeholder='Search'
            />
            <FiSearch className='text-xl absolute left-[10px] top-1/2 -translate-y-1/2' />
          </div>
        </div>
      </div>
    </>
  );
}
