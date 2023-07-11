import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  default as silder1,
  default as silder3,
} from "../../../Images/Rectangle 5.png";
import silder2 from "../../../Images/slider3.png";

export default function BlogSlider() {
  return (
    <>
      <div className='md:h-[480px] xl:h-[425px] flex flex-col'>
        <div className='sliderBlog h-1/2'>
          <Swiper
            grabCursor={true}
            loop={true}
            centeredSlides={true}
            slidesPerView={1}
            pagination
            spaceBetween={30}
            modules={[Pagination, Navigation]}
            className='mySwiper'
          >
            <SwiperSlide>
              <img src={silder1} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={silder2} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={silder3} alt='' />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className='h-1/2 px-5 bg-[#F5F4FB] pb-5'>
          <div className='flex items-center gap-2 py-4'>
            <span className='text-sm font-semibold uppercase'>
              Design & Creative
            </span>
            <span className='text-sm font-normal'>10 June 2023</span>
          </div>
          <h1 className='text-2xl font-[500] font-lora'>
            Lorem ipsum dolor sit amet consectetur
          </h1>
          <p className='text-base pt-[10px] pb-[20px]'>
            Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam
            consectetur elementum aenean fringilla amet blandit duis. Neque
            habitant odio donec adipiscing etiam lobortis volutpat est...
          </p>
          <span className=' text-base font-normal'>by Jon Doe</span>
        </div>
      </div>
    </>
  );
}
