export default function SingleBlog({ img }) {
  return (
    <>
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
        <h1 className='text-2xl font-[500] pb-[14px] font-lora'>
          Lorem ipsum dolor sit amet consectetur bibendum nunc in amet auctor
          enim massa
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam
          consectetur elementum aenean fringilla amet blandit duis. Neque
          habitant odio donec adipiscing etiam lobortis volutpat est...
        </p>
        <button className='text-primary border border-primary px-5 py-[7px] text-base font-[500] mt-5 mb-[11px]'>
          Read More
        </button>
      </div>
    </>
  );
}
