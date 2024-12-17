import Header from './accesories/header';
import Footer from './accesories/footer';
import React, {useEffect} from 'react';
import DiskPlayer_2  from './img/DiskPlayer_2.png';
import DiskPlayer_3  from './img/DiskPlayer_3.png';
import DiskPlayer_4  from './img/DiskPlayer_4.png';
import DiskPlayer_5  from './img/DiskPlayer_5.png';
import DiskPlayer_6  from './img/DiskPlayer_6.png';
import DiskPlayer_7  from './img/DiskPlayer_7.png';
import DiskPlayer_8  from './img/DiskPlayer_8.png';

function DiskPlayer() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
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
                    <div className="bg-[#ee64ff] rounded-[50%] w-[8px] hidden sm:block h-[8px] mt-[29px] mr-[0.8%]"></div>
                    <h2 className="text-center mt-[1.2%] text-[100%] px-[120px] sm:px-0 sm:text-[115%]">PUBLISHED - OCTOBER 1, 2024</h2>
                    <div className="bg-[#ee64ff] rounded-[50%] w-[8px] hidden sm:block h-[8px] mt-[29px] ml-[0.8%]"></div>
                </div>
                <div className="w-full text-center px-[15%] py-0 mt-[10px] opacity-0 animate-fadeSlideUp delay-300">
                    <h1 className="sm:text-[570%] text-[300%] font-normal leading-none">Art Not Evidence</h1>
                </div>
                <div className="image-container relative overflow-hidden sm:w-[90%] w-[92%] mx-auto sm:mt-10 rounded-lg">
                    <div className="overlay sm:ml-[4%] ml-[4%] mt-[40px] sm:w-[90%] w-[92%] h-[600px] absolute inset-0 rounded-[20px] bg-[#ee64ff]"></div>
                    <img className="sm:w-[90%] w-[92%] sm:ml-[4%] ml-[4%] mt-[100px] rounded-[20px] object-cover object-center sm:h-[700px] h-[500px]" src={DiskPlayer_2 } alt="DiskPlayer_2 " />
                </div>
                <div className="sm:pr-[28%] pr-[12%] sm:pl-[28%] pl-[12%] sm:mt-[200px] mt-[20px] text-block opacity-0">
                    <p className="text-center sm:text-[160%] text-[120%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="image-container relative overflow-hidden sm:w-[90%] w-[92%] mx-auto sm:mt-10 rounded-lg">
                    <div className="overlay sm:ml-[4%] ml-[4%] sm:w-[90%] w-[92%] mt-[40px] h-[100%] absolute inset-0 bg-[#ee64ff]"></div>
                    <img className="sm:w-[90%] w-[92%] sm:ml-[4%] ml-[4%] sm:mt-[100px] mt-[20px] object-cover object-center sm:h-[500px] h-[350px]" src={DiskPlayer_3 } alt="DiskPlayer_3 " />
                </div>
                <div className="image-container relative overflow-hidden sm:w-[90%] w-[92%] mx-auto rounded-lg">
                    <div className="overlay sm:ml-[5%] ml-[4%] sm:w-[90%] w-[92%] mt-[20px] h-[600px] absolute inset-0 bg-[#ee64ff]"></div>
                    <img className="sm:w-[90%] w-[92%] sm:ml-[5%] ml-[4%] sm:mt-[70px] mt-[30px] object-cover object-center sm:h-[500px] h-[350px]" src={DiskPlayer_4 } alt="DiskPlayer_4 " />
                </div>
                <div className="sm:pr-[28%] pr-[13%] sm:pl-[28%] pl-[11%] sm:mt-[200px] mt-[20px] text-block opacity-0">
                    <p className="text-center sm:text-[160%] text-[120%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="image-container relative overflow-hidden sm:w-[90%] w-[92%] mx-auto rounded-lg">
                    <div className="overlay sm:ml-[5%] ml-[4%] sm:w-[90%] w-[92%] mt-[20px] h-[600px] absolute inset-0 bg-[#ee64ff]"></div>
                    <img className="sm:w-[90%] w-[92%] sm:ml-[5%] ml-[4%] sm:mt-[70px] mt-[30px] object-cover object-center sm:h-[500px] h-[350px]" src={DiskPlayer_5 } alt="DiskPlayer_5 " />
                </div>
                <div className="sm:pr-[28%] pr-[13%] sm:pl-[28%] pl-[11%] sm:mt-[200px] mt-[20px] text-block opacity-0">
                    <p className="text-center sm:text-[160%] text-[120%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="image-container relative overflow-hidden sm:ml-[290px] ml-[3%] sm:w-[80%] w-[92%] mx-auto mt-10 rounded-lg">
                    <div className="overlay sm:mt-[40px] sm:ml-0 ml-[4%] mt-[10px] sm:w-[660px] w-[92%] h-[600px] absolute inset-0 bg-[#ee64ff]"></div>
                    <img className="sm:mt-[100px] mt-[10px] sm:ml-0 ml-[5%] object-cover object-center sm:h-[720px] h-[500px] sm:w-[660px] w-[91%]" src={DiskPlayer_6 } alt="DiskPlayer_6 " />
                </div>
                <div className="image-container relative overflow-hidden sm:ml-[760px] ml-[3%] sm:w-[80%] w-[92%] mx-auto mt-10 rounded-lg">
                    <div className="overlay sm:mt-[40px] sm:ml-0 ml-[4%] mt-[10px] sm:w-[660px] w-[92%] h-[600px] absolute inset-0 bg-[#ee64ff]"></div>
                    <img className="sm:mt-[100px] mt-[10px] sm:ml-0 ml-[5%] object-cover object-center sm:h-[720px] h-[500px] sm:w-[660px] w-[91%]" src={DiskPlayer_7 } alt="DiskPlayer_7 " />
                </div>
                <div className="sm:pr-[28%] pr-[13%] sm:pl-[28%] pl-[11%] sm:mt-[200px] mt-[20px] text-block opacity-0">
                    <p className="text-center sm:text-[160%] text-[120%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="image-container relative overflow-hidden sm:w-[90%] w-[92%] mx-auto rounded-lg">
                    <div className="overlay sm:ml-[5%] ml-[4%] sm:w-[90%] w-[92%] mt-[20px] h-[600px] absolute inset-0 bg-[#ee64ff]"></div>
                    <img className="sm:w-[90%] w-[92%] sm:ml-[5%] ml-[4%] sm:mt-[70px] mt-[30px] object-cover object-center sm:h-[500px] h-[350px]" src={DiskPlayer_8 } alt="DiskPlayer_8 " />
                </div>
            </main>
            <Footer />
        </div>
    );
}
export default DiskPlayer;