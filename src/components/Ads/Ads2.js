import { useState } from "react";
import img from "../../Images/ads-bg-2.png";
import Modal from "../utils/Modal";
import ContactForm from "./ContactForm";

export default function Ads2() {
  const [isOpen, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className='relative w-full h-full md:h-auto'>
        <img
          src={img}
          alt=''
          className='object-cover w-full h-full md:h-auto'
        />
        <div className='absolute bottom-0 bg-white m-2 p-5'>
          <h1 className='text-bold pb-2 text-Black uppercase'>
            Do you need any creative service for your business?
          </h1>
          <button
            onClick={() => setOpen(true)}
            className='text-primary border border-primary px-5 py-[7px] text-base font-[500] mb-5'
          >
            Let’s Talk
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} className={"w-[575px]"}>
        <ContactForm onClose={onClose} />
      </Modal>
    </>
  );
}
