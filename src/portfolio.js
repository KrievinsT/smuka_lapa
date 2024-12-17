import Header from './accesories/header';
import Footer from './accesories/footer';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Astronaut from './img/Astronaut.png';
import DiskPlayer from './img/DiskPlayer.png';
import PurpleTape from './img/PurpleTape.png';
import SportsCar from './img/SportsCar.png';

function Portfolio() {
    const mainRef = useRef(null);
    const mainRef2 = useRef(null);
    const mainRef3 = useRef(null);
    const mainRef4 = useRef(null);

    const [offset1, setOffset1] = useState({ x: 0, y: 0 });
    const [offset2, setOffset2] = useState({ x: 0, y: 0 });
    const [offset3, setOffset3] = useState({ x: 0, y: 0 });
    const [offset4, setOffset4] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e, setOffset) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Limit movement to within 20px
        setOffset({
            x: Math.min(20, Math.max(-20, x / 15)),
            y: Math.min(20, Math.max(-20, y / 15)),
        });
    };

    const handleMouseLeave = (setOffset) => {
        setOffset({ x: 0, y: 0 });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fadeSlideUp');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (mainRef.current) {
            observer.observe(mainRef.current);
        }

        return () => {
            if (mainRef.current) observer.unobserve(mainRef.current);
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fadeSlideUp');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (mainRef2.current) {
            observer.observe(mainRef2.current);
        }

        return () => {
            if (mainRef2.current) observer.unobserve(mainRef2.current);
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fadeSlideUp');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (mainRef3.current) {
            observer.observe(mainRef3.current);
        }

        return () => {
            if (mainRef3.current) observer.unobserve(mainRef3.current);
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fadeSlideUp');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (mainRef4.current) {
            observer.observe(mainRef4.current);
        }

        return () => {
            if (mainRef4.current) observer.unobserve(mainRef4.current);
        };
    }, []);
    return (
        <div>
            <Header />
            <main>
                <div className="flex justify-center opacity-0 animate-fadeSlideUp delay-300">
                    <div className="bg-[#ee64ff] rounded-[50%] w-[8px] hidden sm:block h-[8px] mt-[29px] mr-[0.8%]"></div>
                    <h2 className="text-center mt-[1.2%] text-[100%] sm:text-[115%]">WE ARE SANDBOX</h2>
                    <div className="bg-[#ee64ff] rounded-[50%] w-[8px] hidden sm:block h-[8px] mt-[29px] ml-[0.8%]"></div>
                </div>
                <div className="w-full text-center px-[13%] sm:px-[28%] py-0 mt-[10px] opacity-0 animate-fadeSlideUp delay-300">
                    <h1 className="text-[240%] sm:text-[570%] font-normal leading-none">Where vision meets excellence</h1>
                </div>
                <div>
                    <div className="sm:flex mt-[100px] sm:w-[100%] w-[94%] " >
                        <Link to="/Astronaut" className="w-[49%]">
                            <div className="bg-[white] h-auto pb-[40px] ml-[6%] sm:ml-[5%] rounded-[10px] opacity-0" ref={mainRef}>
                                <div
                                    className="overflow-hidden relative group"
                                    onMouseMove={(e) => handleMouseMove(e, setOffset1)}
                                    onMouseLeave={() => handleMouseLeave(setOffset1)}
                                >
                                    <img
                                        className="w-[100%] rounded-tl-[10px] rounded-tr-[10px] transform transition-transform duration-300 group-hover:scale-110"
                                        src={Astronaut}
                                        alt="Astronaut"
                                    />
                                    <div
                                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none"
                                        style={{
                                            transform: `translate(${offset1.x}px, ${offset1.y}px)`,
                                        }}
                                    >
                                        <div className="w-44 h-44 bg-[lightgray] backdrop-blur-[10px] rounded-full text-center flex items-center justify-center">
                                            <p className="font-bold">View Project</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-[30px] pt-[20px] sm:flex">
                                    <div className="w-[30%]">
                                        <p className="sm:text-[19px] text-[16px]">GRO-OP</p>
                                    </div>
                                    <div className="sm:w-[50%] sm:ml-[15%] sm:mt-0 mt-[20px]">
                                        <p className="sm:text-[14px] text-[15px] text-[gray]">
                                            Focused on sustainable growth strategies, empowering businesses to thrive through innovation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link to="/SportsCar" className="w-[49%]">
                            <div className="bg-[white] h-auto pb-[40px] ml-[5%] rounded-[10px] sm:mt-0 mt-[30px] opacity-0" ref={mainRef3}>
                                <div
                                    className="overflow-hidden relative group"
                                    onMouseMove={(e) => handleMouseMove(e, setOffset2)}
                                    onMouseLeave={() => handleMouseLeave(setOffset2)}
                                >
                                    <img
                                        className="w-[100%] rounded-tl-[10px] rounded-tr-[10px] transform transition-transform duration-300 group-hover:scale-110"
                                        src={SportsCar}
                                        alt="SportsCar"
                                    />
                                    <div
                                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none"
                                        style={{
                                            transform: `translate(${offset2.x}px, ${offset2.y}px)`,
                                        }}
                                    >
                                        <div className="w-44 h-44 bg-[lightgray] backdrop-blur-[10px] rounded-full text-center flex items-center justify-center">
                                            <p className="font-bold">View Project</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-[30px] pt-[20px] sm:flex">
                                    <div className="sm:w-[30%]">
                                        <p className="sm:text-[19px] text-[16px]">Journey of Objects</p>
                                    </div>
                                    <div className="sm:w-[50%] sm:ml-[15%] sm:mt-0 mt-[20px]">
                                        <p className="sm:text-[14px] text-[15px] text-[gray]">
                                            Showcasing the evolution of everyday items through a creative and minimalist lens.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        </div>
                        <div className="sm:flex mt-[30px] sm:mt-[100px] sm:w-[100%] w-[94%]" >
                        <Link to="/PurpleTape" className="w-[49%]">
                            <div className="bg-[white] h-auto pb-[40px] ml-[6%] sm:ml-[5%] rounded-[10px] opacity-0" ref={mainRef2}>
                                <div
                                    className="overflow-hidden relative group"
                                    onMouseMove={(e) => handleMouseMove(e, setOffset3)}
                                    onMouseLeave={() => handleMouseLeave(setOffset3)}
                                >
                                    <img
                                        className="w-[100%] rounded-tl-[10px] rounded-tr-[10px] transform transition-transform duration-300 group-hover:scale-110"
                                        src={PurpleTape}
                                        alt="PurpleTape"
                                    />
                                    <div
                                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none"
                                        style={{
                                            transform: `translate(${offset3.x}px, ${offset3.y}px)`,
                                        }}
                                    >
                                        <div className="w-44 h-44 bg-[lightgray] backdrop-blur-[10px] rounded-full text-center flex items-center justify-center">
                                            <p className="font-bold">View Project</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-[30px] pt-[20px] sm:flex">
                                    <div className="w-[30%]">
                                        <p className="sm:text-[19px] text-[16px]">Steeezy</p>
                                    </div>
                                    <div className="sm:w-[50%] sm:ml-[15%] sm:mt-0 mt-[20px]">
                                        <p className="sm:text-[14px] text-[15px] text-[gray]">
                                            Steeezy redefines the intersection of fashion and digital experiences with sleek, modern aesthetics.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link to="/DiskPlayer" className="w-[49%] ">
                            <div className="bg-[white] h-auto pb-[40px] ml-[5%] sm:mt-0 mt-[30px] rounded-[10px] opacity-0" ref={mainRef4}>
                                <div
                                    className="overflow-hidden relative group"
                                    onMouseMove={(e) => handleMouseMove(e, setOffset4)}
                                    onMouseLeave={() => handleMouseLeave(setOffset4)}
                                >
                                    <img
                                        className="w-[100%] rounded-tl-[10px] rounded-tr-[10px] transform transition-transform duration-300 group-hover:scale-110"
                                        src={DiskPlayer}
                                        alt="DiskPlayer"
                                    />
                                    <div
                                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none"
                                        style={{
                                            transform: `translate(${offset4.x}px, ${offset4.y}px)`,
                                        }}
                                    >
                                        <div className="w-44 h-44 bg-[lightgray] backdrop-blur-[10px] rounded-full text-center flex items-center justify-center">
                                            <p className="font-bold">View Project</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-[30px] pt-[20px] sm:flex">
                                    <div className="sm:w-[30%]">
                                        <p className="sm:text-[19px] text-[16px]">Art Not Evidence</p>
                                    </div>
                                    <div className="sm:w-[50%] sm:ml-[15%] sm:mt-0 mt-[20px]">
                                        <p className="sm:text-[14px] text-[15px] text-[gray]">
                                            Challenging the boundaries between artistic expression and factual representation
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Portfolio;
