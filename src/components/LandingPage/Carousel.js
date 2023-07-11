import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowLeft, BsArrowRight } from "../../Icons/Icons";
import silder2 from "../../Images/slide2.png";
import silder1 from "../../Images/slider1.png";
import silder3 from "../../Images/slider3.png";
import Caption from "./Caption";

export default function Carousel() {
  const customNextButton = (
    <button className='custom-next-button hidden p-[10px] z-10 bg-Black absolute top-1/2 -translate-y-1/2 left-0'>
      <BsArrowRight className='text-white text-xl' />
    </button>
  );

  const customPrevButton = (
    <button className='custom-prev-button hidden p-[10px] z-10 bg-Black  absolute top-1/2 -translate-y-1/2 right-0'>
      <BsArrowLeft className='text-white text-xl' />
    </button>
  );
  return (
    <>
      <div className='relative slider-abCandy md:pb-[312px] pb-[250px]'>
        <Swiper
          grabCursor={true}
          loop={true}
          centeredSlides={true}
          slidesPerView={1.5}
          pagination
          spaceBetween={30}
          navigation={{
            nextEl: ".custom-next-button",
            prevEl: ".custom-prev-button",
          }}
          modules={[Pagination, Navigation]}
          className='mySwiper mb-20'
        >
          <SwiperSlide>
            <img src={silder1} alt='' />
            {customNextButton}
            {customPrevButton}
            <Caption />
          </SwiperSlide>
          <SwiperSlide>
            <img src={silder2} alt='' />
            {customNextButton}
            {customPrevButton}
            <Caption />
          </SwiperSlide>
          <SwiperSlide>
            <img src={silder3} alt='' />
            {customNextButton}
            {customPrevButton}
            <Caption />
          </SwiperSlide>
          <SwiperSlide>
            <img src={silder1} alt='' />
            {customNextButton}
            {customPrevButton}
            <Caption />
          </SwiperSlide>
          <SwiperSlide>
            <img src={silder2} alt='' />
            {customNextButton}
            {customPrevButton}
            <Caption />
          </SwiperSlide>
          <SwiperSlide>
            <img src={silder3} alt='' />
            {customNextButton}
            {customPrevButton}
            <Caption />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
