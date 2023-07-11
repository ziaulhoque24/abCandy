import { IoMdClose } from "../../Icons/Icons";

export default function ContactForm({ onClose }) {
  const handleClose = () => {
    onClose();
  };
  return (
    <>
      <div>
        <div className='flex justify-between items-center mb-5 md:pb-3 p-2 bg-[#2C2347]'>
          <div className='text-lg font-bold pb-1 select-none text-white'>
            Contact us
          </div>
          <button
            className='p-2 rounded-md hover:bg-red-200 hover:text-black'
            onClick={handleClose}
          >
            <IoMdClose className='text-white' />
          </button>
        </div>
        <div className='flex flex-col gap-3 px-3 py-2'>
          <div className='flex gap-2'>
            <div className='w-1/2 flex flex-col'>
              <label htmlFor='name'>Your Name</label>
              <input
                type='text'
                name='name'
                id=''
                placeholder='Enter your name'
                className='h-[50px] px-2'
              />
            </div>
            <div className='w-1/2 flex flex-col'>
              <label htmlFor='email'>Email</label>
              <input
                type='text'
                name='email'
                id=''
                placeholder='Enter email'
                className='h-[50px] px-2'
              />
            </div>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='subject'>Select Subject</label>
            <select name='subject' id='' className='h-[50px] px-2'>
              <option>Select Subject</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='message'>Your message</label>
            <textarea
              name='subject'
              id=''
              className='h-[107px] p-2'
              placeholder='Your message'
            ></textarea>
          </div>
          <div className='flex justify-end'>
            <button className='h-[50px] px-8 py-3 bg-primary text-white'>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
