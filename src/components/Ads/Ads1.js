import { useState } from "react";
import Modal from "../utils/Modal";
import ContactForm from "./ContactForm";

export default function Ads1() {
  const [isOpen, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className='ads-1 flex justify-center items-center px-[60px] py-[50px]'>
        <div className='w-[850px] py-5 flex flex-col items-center gap-5 bg-[rgba(255,255,255,0.10)] backdrop-blur-lg'>
          <h1 className='text-[rgba(255,255,255,0.80)] text-3xl font-semibold'>
            Creative team, intuitive solution
          </h1>
          <p className='text-[rgba(255,255,255,0.80)] text-center'>
            Lorem ipsum dolor sit amet consectetur. Enim vitae hendrerit
            consectetur cras in nulla. Non suspendisse at ac enim. Facilisi
            nulla tortor nec mollis faucibus odio sodales.
          </p>
          <button
            onClick={() => setOpen(true)}
            className='text-black bg-white px-8 py-3 text-base font-[500] mb-5'
          >
            Let’s Talk
          </button>
        </div>
      </div>
      {/* modal for contact form */}
      <Modal isOpen={isOpen} onClose={onClose} className={"w-[575px]"}>
        <ContactForm onClose={onClose} />
      </Modal>
    </>
  );
}
