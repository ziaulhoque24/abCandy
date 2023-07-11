import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowLeft, BsArrowRight } from "../../Icons/Icons";
import silder2 from "../../Images/slide2.png";
import silder1 from "../../Images/slider1.png";
import silder3 from "../../Images/slider3.png";

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
            <div className='caption-content hidden'>
              <div className='px-3 md:px-8 bg-white'>
                <div className='flex items-center gap-1 py-2 md:py-4'>
                  <span className='text-sm font-semibold uppercase'>
                    Design & Creative
                  </span>
                  <span className='text-sm font-normal'>10 June 2023</span>
                </div>
                <h1 className='md:text-[32px] text-lg font-[500]'>
                  Lorem ipsum dolor sit amet consectetur
                </h1>
                <p className='hidden md:block text-lg pt-[10px] pb-[20px]'>
                  Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam
                  consectetur elementum aenean fringilla amet blandit duis.
                  Neque habitant odio donec adipiscing etiam lobortis volutpat
                  est...
                </p>
                <button className='text-primary border border-primary px-5 py-[7px] text-base font-[500] mb-5 mt-2'>
                  Read More
                </button>
                <div className='mb-[40px]'></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={silder2} alt='' />
            {customNextButton}
            {customPrevButton}
            <div className='caption-content hidden'>
              <div className='px-8 bg-white'>
                <div className='flex items-center gap-2 py-4'>
                  <span className='text-sm font-semibold uppercase'>
                    Design & Creative
                  </span>
                  <span className='text-sm font-normal'>10 June 2023</span>
                </div>
                <h1 className='text-[32px] font-[500]'>
                  Lorem ipsum dolor sit amet consectetur
                </h1>
                <p className='text-lg pt-[10px] pb-[20px]'>
                  Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam
                  consectetur elementum aenean fringilla amet blandit duis.
                  Neque habitant odio donec adipiscing etiam lobortis volutpat
                  est...
                </p>
                <button className='text-primary border border-primary px-5 py-[7px] text-base font-[500] mb-5'>
                  Read More
                </button>
                <div className='mb-[40px]'></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={silder3} alt='' />
            {customNextButton}
            {customPrevButton}
            <div className='caption-content hidden'>
              <div className='px-8 bg-white'>
                <div className='flex items-center gap-2 py-4'>
                  <span className='text-sm font-semibold uppercase'>
                    Design & Creative
                  </span>
                  <span className='text-sm font-normal'>10 June 2023</span>
                </div>
                <h1 className='text-[32px] font-[500]'>
                  Lorem ipsum dolor sit amet consectetur
                </h1>
                <p className='text-lg pt-[10px] pb-[20px]'>
                  Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam
                  consectetur elementum aenean fringilla amet blandit duis.
                  Neque habitant odio donec adipiscing etiam lobortis volutpat
                  est...
                </p>
                <button className='text-primary border border-primary px-5 py-[7px] text-base font-[500] mb-5'>
                  Read More
                </button>
                <div className='mb-[40px]'></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={silder1} alt='' />
            {customNextButton}
            {customPrevButton}
            <div className='caption-content hidden'>
              <div className='px-8 bg-white'>
                <div className='flex items-center gap-2 py-4'>
                  <span className='text-sm font-semibold uppercase'>
                    Design & Creative
                  </span>
                  <span className='text-sm font-normal'>10 June 2023</span>
                </div>
                <h1 className='text-[32px] font-[500]'>
                  Lorem ipsum dolor sit amet consectetur
                </h1>
                <p className='text-lg pt-[10px] pb-[20px]'>
                  Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam
                  consectetur elementum aenean fringilla amet blandit duis.
                  Neque habitant odio donec adipiscing etiam lobortis volutpat
                  est...
                </p>
                <button className='text-primary border border-primary px-5 py-[7px] text-base font-[500] mb-5'>
                  Read More
                </button>
                <div className='mb-[40px]'></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={silder2} alt='' />
            {customNextButton}
            {customPrevButton}
            <div className='caption-content hidden'>
              <div className='px-8 bg-white'>
                <div className='flex items-center gap-2 py-4'>
                  <span className='text-sm font-semibold uppercase'>
                    Design & Creative
                  </span>
                  <span className='text-sm font-normal'>10 June 2023</span>
                </div>
                <h1 className='text-[32px] font-[500]'>
                  Lorem ipsum dolor sit amet consectetur
                </h1>
                <p className='text-lg pt-[10px] pb-[20px]'>
                  Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam
                  consectetur elementum aenean fringilla amet blandit duis.
                  Neque habitant odio donec adipiscing etiam lobortis volutpat
                  est...
                </p>
                <button className='text-primary border border-primary px-5 py-[7px] text-base font-[500] mb-5'>
                  Read More
                </button>
                <div className='mb-[40px]'></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={silder3} alt='' />
            {customNextButton}
            {customPrevButton}
            <div className='caption-content hidden'>
              <div className='px-8 bg-white'>
                <div className='flex items-center gap-2 py-4'>
                  <span className='text-sm font-semibold uppercase'>
                    Design & Creative
                  </span>
                  <span className='text-sm font-normal'>10 June 2023</span>
                </div>
                <h1 className='text-[32px] font-[500]'>
                  Lorem ipsum dolor sit amet consectetur
                </h1>
                <p className='text-lg pt-[10px] pb-[20px]'>
                  Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam
                  consectetur elementum aenean fringilla amet blandit duis.
                  Neque habitant odio donec adipiscing etiam lobortis volutpat
                  est...
                </p>
                <button className='text-primary border border-primary px-5 py-[7px] text-base font-[500] mb-5'>
                  Read More
                </button>
                <div className='mb-[40px]'></div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
