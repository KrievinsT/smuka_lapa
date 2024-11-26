import Header from './accesories/header';
import Footer from './accesories/footer';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Astronaut  from './img/Astronaut.png';
import DiskPlayer from './img/DiskPlayer.png';
import PurpleTape from './img/PurpleTape.png';
import SportsCar from './img/SportsCar.png';

function Portfolio() {

    const mainRef = useRef(null); // Create a reference to the main section

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fadeSlideUp');
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        );
  
        // Observe the target element
        if (mainRef.current) {
            observer.observe(mainRef.current);
        }
  
        return () => {
            if (mainRef.current) observer.unobserve(mainRef.current);
        };
    }, []);

    return (
        <div>
            <Header />
            <main>
                <div className="flex justify-center opacity-0 animate-fadeSlideUp delay-300" ref={mainRef}>
                    <div className="bg-[#ee64ff] rounded-[50%] w-[8px] h-[8px] mt-[28px] mr-[12px]"></div>
                    <h2 className="text-center mt-[20px]">WE ARE SANDBOX</h2>
                    <div className="bg-[#ee64ff] rounded-[50%] w-[8px] h-[8px] mt-[28px] ml-[12px]"></div>
                </div>
                <div className="w-full text-center px-[480px] py-0 mt-[10px] opacity-0 animate-fadeSlideUp delay-300" ref={mainRef}>
                    <h1 className="text-[90px] leading-none">Where vision meets excellence</h1>
                </div>
                <div>
                    <div className="flex mt-[100px] w-[100%] opacity-0 animate-fadeSlideUp delay-300 " ref={mainRef}>
                        <Link to="/Astronaut" className="w-[49%]">
                            <div className="bg-[white] h-[670px] ml-[5%] rounded-[10px]">
                                <div className="overflow-hidden"><img className="w-[100%] rounded-tl-[10px] rounded-tr-[10px] transform transition-transform duration-300 hover:scale-110" src={Astronaut } alt="Astronaut " /></div>
                                <div>
                                    <div className="pl-[30px] pt-[20px] flex">
                                        <div className="w-[30%]">
                                            <p className="text-[19px]">GRO-OP</p>
                                        </div>
                                        <div className="w-[50%] ml-[15%]">
                                            <p className="text-[16px] text-[gray]">Focused on sustainable growth strategies, empowering businesses to thrive through innovation.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/SportsCar" className="w-[49%]">
                            <div className="bg-[white] h-[670px] ml-[5%] rounded-[10px]">
                                <div className="overflow-hidden"><img className="w-[100%] rounded-tl-[10px] rounded-tr-[10px] transform transition-transform duration-300 hover:scale-110" src={SportsCar } alt="SportsCar " /></div>
                                <div>
                                    <div className="pl-[30px] pt-[20px] flex">
                                        <div className="w-[30%]">
                                            <p className="text-[19px]">Journey of Objects</p>
                                        </div>
                                        <div className="w-[50%] ml-[15%]">
                                            <p className="text-[16px] text-[gray]">Showcasing the evolution of everyday items through a creative and minimalist lens.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="flex mt-[50px] opacity-0" ref={mainRef}>
                        <Link to="/PurpleTape" className="w-[49%]">
                            <div className="bg-[white] h-[670px] ml-[5%] rounded-[10px]">
                                <div className="overflow-hidden"><img className="w-[100%] rounded-tl-[10px] rounded-tr-[10px] transform transition-transform duration-300 hover:scale-110" src={PurpleTape } alt="PurpleTape " /></div>
                                <div>
                                    <div className="pl-[30px] pt-[20px] flex">
                                        <div className="w-[30%]">
                                            <p className="text-[19px]">Steeezy</p>
                                        </div>
                                        <div className="w-[50%] ml-[15%]">
                                            <p className="text-[16px] text-[gray]">Steeezy redefines the intersection of fashion and digital experiences with sleek, modern aesthetics.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/DiskPlayer" className="w-[49%]">
                            <div className="bg-[white] h-[670px] ml-[5%] rounded-[10px]">
                                <div className="overflow-hidden"><img className="w-[100%] rounded-tl-[10px] rounded-tr-[10px] transform transition-transform duration-300 hover:scale-110" src={DiskPlayer } alt="DiskPlayer " /></div>
                                <div>
                                    <div className="pl-[30px] pt-[20px] flex">
                                        <div className="w-[30%]">
                                            <p className="text-[19px] ">Art Not Evidence</p>
                                        </div>
                                        <div className="w-[50%] ml-[15%]">
                                            <p className="text-[16px] text-[gray]">Challenging the boundaries between artistic expression and factual representation</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div> 
                </div>
            </main>
            <Footer />
        </div>
    )
  }
  export default Portfolio;