import React from 'react';
import img from '../assets/logo.png';

function downloadApp() {
  const downloadLink = document.createElement('a');
  downloadLink.href = "/UPA-v8.apk";  // Ensure this is the correct path
  downloadLink.setAttribute('download', 'UPA-v8.apk');
  downloadLink.click();
}

function Header() {
  return (
    <div className='px-4 py-2 text-xs shadow-md flex flex-row items-center justify-between'>
      <a href="/">  
          <img src={img} alt="Logo" className="w-[40px] sm:w-[50px]" />
      </a>
      <div>
        <button 
          className='bg-[#D9534F] cursor-pointer px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-3xl text-[10px] lg:text-sm text-white font-bold inline-block' 
          onClick={downloadApp}
        >
          Download App
        </button>
      </div>
    </div>
  );
}

export default Header;
