import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import img from '../assets/bg.png';
import qr from '/UPA-qr.png';

function Home() {
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [showMoreServices, setShowMoreServices] = useState(false);

  function downloadApp() {
    const downloadLink = document.createElement('a');
    downloadLink.href = "/UPA-v4.apk";  // Ensure this is the correct path
    downloadLink.setAttribute('download', 'UPA-v4.apk');
    downloadLink.click();
  }

  return (
    <>
      <div className="font-poppins">
        <Header />

        {/* home */}
        <div id="home" className='w-full h-[40svh] lg:h-[85svh] flex justify-center lg:mb-10'>
          <div className='w-5/6 h-full relative py-5'>
            <div className='w-full h-full relative'>
              <img src={img} alt="" className="object-cover object-center w-full h-full rounded-3xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute inset-0 bg-gray-800 opacity-50 rounded-3xl"></div>
                <h1 className="text-white text-4xl lg:text-8xl font-normal text-center relative z-10">
                  The Heartbeat of <br /> Urban Rentals
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* about */}
        <div id="about" className='w-full flex justify-center py-5'>
          <div className='w-5/6 h-full'>
            <h1 className='pt-5 text-2xl lg:text-3xl font-bold'>About Us</h1>
            <p className='py-4 text-xs lg:text-lg text-justify'>
            Experience the future of urban rentals at your fingertips! Our app simplifies the rental process, allowing you to effortlessly explore available properties, manage your listings, 
            and connect with potential tenants—all in one convenient platform. With features like smart property searching and dynamic filters, finding your ideal home has never been easier.
            UPA is a user-friendly app designed for seamless property rentals, connecting tenants and owners with ease. From discovering listings to managing leases and payments, UPA streamlines 
            every step in one secure platform.
            </p>
          </div>
        </div>

        <br />
        <br />

        {/* services */}
        <div id="services" className='w-full flex justify-center py-5'>
          <div className='w-5/6 h-full'>
            <div>
              <h1 className='pt-5 text-2xl lg:text-3xl font-bold'>What We Offer</h1>
              <p className='py-2 text-sm lg:text-lg text-justify'>Discover how UPA transforms your rental experience</p>
            </div>

            <div className='flex flex-col lg:flex-row items-center justify-between gap-4 py-5 text-center overflow-hidden text-sm'>
              <div className='p-5 rounded-3xl lg:w-1/3 lg:h-full flex flex-col items-center justify-center gap-5 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="size-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <h1 className='font-bold text-lg'>Smart Property Finder</h1>
                <p className='text-[12px]'>Use your camera to instantly locate and explore available rental properties in your area with real-time, overlaid details.</p>  
              </div>

              <div className='p-5 rounded-3xl lg:w-1/3 lg:h-full flex flex-col items-center justify-center gap-5 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="size-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <h1 className='font-bold text-lg'>Dynamic Property Filters</h1>
                <p className='text-[12px]'>Refine your search by property type, budget, and amenities, making it easy to find your perfect match without the hassle.</p>
              </div>

              <div className='p-5 rounded-3xl lg:w-1/3 lg:h-full flex flex-col items-center justify-center gap-5 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="size-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <h1 className='font-bold text-lg'>Property Management</h1>
                <p className='text-[12px]'>Efficiently manage your listings, applications, and payments in one secure platform, simplifying your property ownership experience.</p>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />

        {/* download */}
        <div id="download" className='w-full flex justify-center pt-5'>
          <div className='w-5/6 h-full'>
          <div className='flex flex-row justify-between gap-4'>
              <div className='w-1/3 flex flex-col'>
              <h1 className='text-xl lg:text-3xl font-bold'>Download our app</h1>
                <br />
                <p className='py-2 text-xs lg:text-lg text-justify'>
                  <strong>Download now</strong> to unlock exclusive access to the best rental options in your area and manage your 
                  property seamlessly. <strong>Scan the QR code</strong> or click the button below to get started!
                </p>
              </div>
              <div className='w-1/3 flex flex-col items-center justify-center'>
                <img src={qr} alt="QR Code" className="object-cover object-center w-[250px] rounded-3xl p-4" />
                <div className='bg-[#D9534F] text-white py-2 px-10 rounded-xl text-sm font-semibold cursor-pointer mb-20' 
                  onClick={downloadApp}>
                  Download
                </div>
              </div>
              <div className='w-1/3 flex flex-col items-center'>
                <img src="/mobile-view.png" alt="Phone" className="object-cover object-center w-[500px] rounded-3xl" style={{ height: 'auto' }} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
