import React from 'react'
import img from '../assets/footer_logo.png';
function Footer() {
  return (
    <div className='bg-[#8C0909] h-[35svh]'>
        <div id="about" className='fix w-full h-[30svh] flex items-center justify-center'>
            <div className='w-5/6 h-full flex items-center justify-start lg:gap-10 lg:p-10'>
            <div>
            <img src={img} alt="" className="w-[120px] lg:w-[20svh]" />
            </div>
            <div className='text-white text-sm flex flex-col px-10'>
                <a href="/">Home</a>
                <a href="/frequently-asked-questions">FAQs</a>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms-and-condition">Terms and Condition</a>
            </div>
            
            </div>
        </div>

        <div className='w-full flex items-center justify-center'>
        <div className='w-5/6 flex items-center justify-center lg:justify-end'>
            <a href="" className='text-white text-xs'>© 2024 UPA. All Rights Reserved.</a>
        </div>
        </div>
            

    </div>
  )
}

export default Footer