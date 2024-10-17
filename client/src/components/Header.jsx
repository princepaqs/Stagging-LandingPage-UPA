import React from 'react';
import img from '../assets/logo.png';

function downloadApp() {
  const downloadLink = document.createElement('a');
  downloadLink.href = "/UPA-v4.apk";  // Ensure this is the correct path
  downloadLink.setAttribute('download', 'UPA-v4.apk');
  downloadLink.click();
}

function Header() {
  return (
    <div className='px-6 py-4 text-xs shadow-md flex flex-row items-center justify-between'>
      <div>
        <img src={img} alt="Logo" className="w-[50px]" />
      </div>
      <div className='flex flex-row items-center text-xs lg:text-sm font-semibold'>
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
      <div>
        <button 
          className='bg-[#D9534F] cursor-pointer px-4 py-2 rounded-3xl text-xs text-white font-bold inline-block' 
          onClick={downloadApp}
        >
          Download App
        </button>
      </div>
    </div>
  );
}

export default Header;
