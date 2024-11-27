import Header from './accesories/header';
import Footer from './accesories/footer';
import React, { useEffect, useRef } from 'react';
import PurpleTape_2  from './img/PurpleTape_2.png';
import PurpleTape_3  from './img/PurpleTape_3.png';
import PurpleTape_4  from './img/PurpleTape_4.png';
import PurpleTape_5  from './img/PurpleTape_5.png';
import PurpleTape_6  from './img/PurpleTape_6.png';
import PurpleTape_7  from './img/PurpleTape_7.png';
import PurpleTape_8  from './img/PurpleTape_8.png';

function PurpleTape() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        // Observer for image overlays
        const imageObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const overlay = entry.target.querySelector('.overlay');
                if (overlay) {
                  overlay.classList.add('animate-slideDownAndFadeOut');
                }
              }
            });
          },
          { threshold: 0.1 }
        );
    
        const imageContainers = document.querySelectorAll('.image-container');
        imageContainers.forEach((container) => imageObserver.observe(container));
    
        // Observer for text blocks
        const textObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
              }
            });
          },
          { threshold: 0.1 }
        );
    
        const textBlocks = document.querySelectorAll('.text-block');
        textBlocks.forEach((block) => textObserver.observe(block));
    
        return () => {
          imageContainers.forEach((container) => imageObserver.unobserve(container));
          textBlocks.forEach((block) => textObserver.unobserve(block));
        };
      }, []);
    
    
    
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <div className="flex justify-center opacity-0 animate-fadeSlideUp delay-300">
                    <div className="bg-[#ee64ff] rounded-[50%] w-[8px] h-[8px] mt-[29px] mr-[0.8%]"></div>
                    <h2 className="text-center mt-[1.2%] text-[115%]">PUBLISHED - OCTOBER 1, 2024</h2>
                    <div className="bg-[#ee64ff] rounded-[50%] w-[8px] h-[8px] mt-[29px] ml-[0.8%]"></div>
                </div>
                <div className="w-full text-center px-[15%] py-0 mt-[10px] opacity-0 animate-fadeSlideUp delay-300">
                    <h1 className="text-[570%] font-normal leading-none">Steezy</h1>
                </div>
                <div className="image-container relative overflow-hidden w-[92%] mx-auto mt-10 rounded-lg">
                    <div className="overlay ml-[4%] mt-[40px] w-[92%] h-[600px] absolute inset-0 rounded-[20px] bg-[#ee64ff]"></div>
                    <img className="w-[92%] ml-[4%] mt-[100px] rounded-[20px] object-cover object-center h-[700px]" src={PurpleTape_2 } alt="PurpleTape_2 " />
                </div>
                <div className="pr-[28%] pl-[28%] mt-[200px] text-block opacity-0">
                    <p className="text-center text-[160%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="image-container relative overflow-hidden w-[90%] mx-auto mt-10 rounded-lg">
                    <div className="overlay ml-[5%] w-[90%] mt-[40px] h-[100%] absolute inset-0 bg-[#ee64ff]"></div>
                    <img className="w-[90%] ml-[5%] mt-[100px] object-cover object-center h-[500px]" src={PurpleTape_3 } alt="PurpleTape_3 " />
                </div>
                <div className="image-container relative overflow-hidden w-[90%] mx-auto rounded-lg">
                    <div className="overlay ml-[5%] w-[90%] mt-[20px] h-[600px] absolute inset-0 bg-[#ee64ff]"></div>
                    <img className="w-[90%] ml-[5%] mt-[70px] object-cover object-center h-[500px]" src={PurpleTape_4 } alt="PurpleTape_4 " />
                </div>
                <div className="pr-[28%] pl-[28%] mt-[140px] text-block opacity-0">
                    <p className="text-center text-[160%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="image-container relative overflow-hidden w-[90%] mx-auto rounded-lg">
                    <div className="overlay ml-[5%] mt-[30px] w-[90%] h-[600px] absolute inset-0 bg-[#ee64ff]"></div>
                    <img className="w-[90%] ml-[5%] mt-[80px] object-cover object-center h-[480px]" src={PurpleTape_5 } alt="PurpleTape_5 " />
                </div>
                <div className="pr-[28%] pl-[28%] mt-[140px] text-block opacity-0">
                    <p className="text-center text-[160%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="image-container relative overflow-hidden ml-[290px] w-[80%] mx-auto mt-10 rounded-lg">
                    <div className="overlay mt-[40px] w-[660px] h-[600px] absolute inset-0 bg-[#ee64ff]"></div>
                    <img className=" mt-[100px] object-cover object-center h-[720px] w-[660px]" src={PurpleTape_6 } alt="PurpleTape_6 " />
                </div>
                <div className="image-container relative overflow-hidden w-[80%] mx-auto mt-10 rounded-lg">
                    <div className="overlay ml-[45%] mt-[40px] w-[660px] h-[600px] absolute inset-0 bg-[#ee64ff]"></div>
                    <img className=" ml-[45%] mt-[100px] object-cover object-center h-[720px] w-[660px]" src={PurpleTape_7 } alt="PurpleTape_7 " />
                </div>
                <div className="pr-[28%] pl-[28%] mt-[100px] text-block opacity-0">
                    <p className="text-center text-[160%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="image-container relative overflow-hidden w-[90%] mx-auto rounded-lg">
                    <div className="overlay ml-[5%] mt-[40px] w-[90%] h-[600px] absolute inset-0 bg-[#ee64ff]"></div>
                    <img className="w-[90%] ml-[5%] mb-[40px] mt-[100px] object-cover object-center h-[480px]" src={PurpleTape_8 } alt="PurpleTape_8 " />
                </div>
            </main>
            <Footer />
        </div>
    );
}
export default PurpleTape;