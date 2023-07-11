import { useState } from "react";
import img from "../../Images/Rectangle 6.png";
import blog1 from "../../Images/blog1.png";
import blog2 from "../../Images/blog2.png";
import blog3 from "../../Images/blog3.png";
import mobile from "../../Images/mobile.png";
import Ads1 from "../Ads/Ads1";
import Ads2 from "../Ads/Ads2";
import SingleBlog from "./Blog/SingleBlog";
import SingleBlog2 from "./Blog/SingleBlog2";
import SingleVideo from "./Blog/SingleVideo";
import BlogHeader from "./BlogHeader";
import BlogSlider from "./BlogSlider/BlogSlider";

export default function Blogs() {
  const [isMore, setMore] = useState(false);
  return (
    <>
      <div className='relative mt-[-300px] z-10'>
        <div className='flex flex-col gap-10'>
          {/* header */}
          <BlogHeader />

          {/* section 1 */}
          <div className='container flex md:flex-row flex-col gap-8'>
            <div className='md:w-1/2'>
              <BlogSlider />
            </div>
            <div className='md:w-1/2'>
              <SingleVideo img={img} />
            </div>
          </div>

          {/* section 2 */}
          <div className='container'>
            <Ads1 />
          </div>

          {/* section 3 */}
          <div className='container flex md:flex-row flex-col justify-between gap-8'>
            <div className='md:w-[75%] bg-[#F5F4FB]'>
              <SingleBlog img={mobile} />
            </div>
            <div className='md:w-[25%]'>
              <Ads2 />
            </div>
          </div>

          {/* section 4 */}
          <div className='container flex md:flex-row flex-col justify-between gap-8'>
            <SingleBlog2 img={blog1} />
            <SingleBlog2 img={blog2} />
            <SingleBlog2 img={blog3} />
          </div>

          {/* more content */}
          {isMore && (
            <div className='container flex md:flex-row flex-col justify-between gap-8 pb-8'>
              <SingleBlog2 img={blog1} />
              <SingleBlog2 img={blog2} />
              <SingleBlog2 img={blog3} />
            </div>
          )}
          {!isMore && (
            <div className='container flex justify-center items-center pb-8'>
              <button
                onClick={() => setMore(true)}
                className='text-primary border border-primary px-5 py-[7px] text-base font-[500] mt-5'
              >
                Read More
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
