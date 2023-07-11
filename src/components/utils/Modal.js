"use client";

export default function Modal({ isOpen, onClose, className, children }) {
  const handleClose = () => {
    onClose();
  };
  return (
    <>
      {isOpen && (
        <div className='fixed top-0 left-0 right-0 z-10 bottom-0 flex items-center justify-center'>
          <div
            onClick={handleClose}
            className='fixed inset-0 bg-[rgba(44,35,71,0.80)]'
          ></div>
          <div
            className={`relative  bg-[#CCCAD3] min-w-[370px] max-w-[90%] ${className}`}
          >
            <div className=''>{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
