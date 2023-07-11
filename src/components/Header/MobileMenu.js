export default function MobileMenu() {
  return (
    <>
      <div className='flex flex-col items-center gap-8 py-10'>
        <span className='text-Black'>About</span>
        <span className='text-Black'>Service</span>
        <span className='text-Black'>What's new?</span>
        <span className='text-Black'>Community</span>
        <span className='text-Black'>Blog</span>
        <button className='px-5 py-2 bg-primary text-white'>Contact Us</button>
      </div>
    </>
  );
}
