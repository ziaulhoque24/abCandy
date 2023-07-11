export default function SingleBlog2({ img }) {
  return (
    <>
      <div>
        <div>
          <div>
            <img src={img} alt='' />
          </div>
        </div>
        <div className='px-5 bg-[#F5F4FB] pb-5'>
          <div className='flex items-center gap-2 py-4'>
            <span className='text-sm font-semibold uppercase'>Corporate</span>
            <span className='text-sm font-normal'>10 June 2023</span>
          </div>
          <h1 className='lg:text-2xl text-base font-[500] pb-[14px] font-lora'>
            Lorem ipsum dolor sit amet consectetur bibendum nunc in amet auctor
            enim massa
          </h1>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam
            consectetur elementum aenean fringilla amet blandit duis. Neque
            habitant odio donec adipiscing etiam lobortis volutpat est...
          </p>
          <span className='block text-base font-normal mt-4'>by Jon Doe</span>
        </div>
      </div>
    </>
  );
}
