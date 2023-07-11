import { useState } from "react";
import Modal from "../../utils/Modal";

export default function SingleVideo({ img }) {
  const [isOpen, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className='md:h-[480px] xl:h-[425px] flex flex-col'>
        <div className='h-1/2'>
          <img src={img} alt='' className='h-full object-cover w-full' />
        </div>
        <div className='h-1/2 px-5 bg-[#F5F4FB] pb-5'>
          <div className='flex items-center gap-2 py-4'>
            <span className='text-sm font-semibold uppercase'>Corporate</span>
            <span className='text-sm font-normal'>10 June 2023</span>
          </div>
          <h1 className='text-2xl font-[500] pb-[14px] font-lora'>
            Lorem ipsum dolor sit amet consectetur bibendum nunc in amet auctor
            enim massa
          </h1>

          <button
            onClick={() => setOpen(true)}
            className='text-primary border border-primary px-5 py-[7px] text-base font-[500] '
          >
            Watch Now
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} className={"w-[575px]"}>
        <iframe
          width='100%'
          className='aspect-video'
          src='https://www.youtube.com/embed/Ja55v3V5yGc'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowfullscreen
        ></iframe>
      </Modal>
    </>
  );
}
