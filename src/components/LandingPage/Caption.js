export default function Caption() {
  return (
    <>
      <div className='caption-content hidden'>
        <div className='px-3 md:px-8 bg-white'>
          <div className='flex items-center gap-1 py-2 md:py-4'>
            <span className='text-sm font-semibold uppercase'>
              Design & Creative
            </span>
            <span className='text-sm font-normal'>10 June 2023</span>
          </div>
          <h1 className='md:text-[32px] text-lg font-[500] font-lora'>
            Lorem ipsum dolor sit amet consectetur
          </h1>
          <p className='hidden md:block text-lg pt-[10px] pb-[20px]'>
            Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam
            consectetur elementum aenean fringilla amet blandit duis. Neque
            habitant odio donec adipiscing etiam lobortis volutpat est...
          </p>
          <button className='text-primary border border-primary px-5 py-[7px] text-base font-[500] mb-5 mt-2'>
            Read More
          </button>
          <div className='mb-[40px]'></div>
        </div>
      </div>
    </>
  );
}
