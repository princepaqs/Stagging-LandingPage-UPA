import React from 'react';
import img from '../assets/logo.png';
function Header() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='px-6 py-4 text-xs shadow-md flex flex-row items-center justify-center justify-between'>
      <div className=''>
        <img src={img} alt="" className=" w-[50px]" />
        </div>
      <div className='flex flex-row items-center justify-between text-xs lg:text-sm font-semibold'>
      <div className='p-2'>
        <a href="#home">Home</a>
      </div>
      <div className='p-2'>
        <a href="#about">About Us</a>
      </div>
      <div className='p-2'>
        <a href="#services">Services</a>
      </div>
      </div>
      <div className=''>
          <a href="#download" className='bg-[#D9534F] cursor-pointer px-4 py-2 rounded-3xl text-xs text-white font-bold inline-block'>
            Download App
          </a>

        </div>

    </div>
  );
}

export default Header;
