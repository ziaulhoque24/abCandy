import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FiInstagram,
} from "../../Icons/Icons";

export default function Footer() {
  return (
    <>
      <div className='h-[278px] bg-[#2C2347]'>
        <div className='h-[278px] container pt-10 pb-3 flex flex-col'>
          <div>
            <span className='text-white'>Connect with us</span>
            <div className='flex gap-2 mt-4'>
              <span className='w-9 h-9 flex justify-center items-center border border-[#FFFFFF1A] rounded-full'>
                <FiInstagram className='text-white/60 text-base' />
              </span>
              <span className='w-9 h-9 flex justify-center items-center border border-[#FFFFFF1A] rounded-full'>
                <FaTwitter className='text-white/60 text-base' />
              </span>
              <span className='w-9 h-9 flex justify-center items-center border border-[#FFFFFF1A] rounded-full'>
                <FaYoutube className='text-white/60 text-base' />
              </span>
              <span className='w-9 h-9 flex justify-center items-center border border-[#FFFFFF1A] rounded-full'>
                <FaFacebookF className='text-white/60 text-base' />
              </span>
            </div>
          </div>
          <div className='flex-grow'></div>
          <div className='flex md:flex-row flex-col md:justify-between mb-3'>
            <span className='text-white/60 order-2 md:order-1'>
              © 2023 ABCandy Bangladesh Ltd.
            </span>
            <span className='text-white order-1 md:order-2'>
              <a href='#terms'>Terms of Use</a> &{" "}
              <a href='#privacy'>Privacy Policy</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
