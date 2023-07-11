import { useState } from "react";
import { GoThreeBars, Logo } from "../../Icons/Icons";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [collapse, setCollapse] = useState(true);
  const toggleCollapse = () => {
    setCollapse((prev) => !prev);
  };
  return (
    <>
      <div className='h-[85px] bg-white'>
        <div className='h-[85px] container flex items-center justify-between'>
          <Menu />
          <div>
            <Logo />
          </div>
          <div className='w-2/5 hidden md:flex items-center justify-end gap-8'>
            <span className='text-Black'>Community</span>
            <span className='text-Black'>Blog</span>
            <button className='px-5 py-2 bg-primary text-white'>
              Contact Us
            </button>
          </div>
          <div className='md:hidden'>
            <GoThreeBars onClick={toggleCollapse} className='text-3xl' />
          </div>
        </div>
        <div
          className={`md:hidden absolute top-0 left-0 z-20 bg-white h-screen overflow-hidden transition-all ${
            collapse ? "w-0 border-0" : "w-[320px]"
          }`}
        >
          <MobileMenu setCollapse={setCollapse} />
        </div>
      </div>
    </>
  );
}
