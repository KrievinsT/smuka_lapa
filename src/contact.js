import React, { useEffect, useRef } from 'react';
import Header from './accesories/header';
import Footer from './accesories/footer';

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const mainRef = useRef(null);
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

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 opacity-0 opacity-0 animate-fadeSlideUp delay-300">
                <div className="flex justify-center">
                    <div className="bg-[#ee64ff] rounded-[50%] w-[8px] hidden sm:block h-[8px] mt-[29px] mr-[0.8%]"></div>
                    <h2 className="text-center mt-[1.2%] text-[100%] sm:text-[115%]">AVAILABLE FOR WORK</h2>
                    <div className="bg-[#ee64ff] rounded-[50%] w-[8px] hidden sm:block h-[8px] mt-[29px] ml-[0.8%]"></div>
                </div>
                <div className="w-full text-center px-[10%] sm:px-[25%] py-0 mt-[10px] opacity-0 animate-fadeSlideUp delay-300">
                    <h1 className="text-[240%] sm:text-[570%] font-normal leading-none">Let's bring your vision to life</h1>
                </div>
                <div className="mt-[70px] sm:mt-[150px] flex justify-center flex-wrap animate-fadeSlideUp delay-300">
                    <form className="flex flex-col items-center w-[80%] sm:w-[90%] max-w-[500px] mb-[50px]">
                        <label htmlFor="name" className="sm:w-[560px] w-[350px] text-[#151515] pl-[6px] sm:pl-0 text-left">Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            className="mt-[16px] bg-[#efefef] focus:ring-black text-[17px] ml-[-6px] sm:ml-0 sm:pl-[18px] w-[110%] sm:w-[560px] h-[50px] border-t-[#efefef] border-x-[#efefef] border-b-[rgb(205,_205,_205)] transition-all duration-400  hover:pl-[21px] hover:border-[1px] hover:border-[solid] hover:border-[rgb(205,_205,_205)] focus:outline-none focus:border-[#000000] "
                            required
                        />
                        <label htmlFor="email" className="sm:w-[560px] w-[350px] text-[#151515] pl-[6px] sm:pl-0 text-left mt-[26px]">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your e-mail"
                            className="mt-[16px] bg-[#efefef] focus:ring-black text-[17px] ml-[-6px] sm:ml-0 sm:pl-[18px] sm:w-[560px] w-[110%] h-[50px] border-t-[#efefef] border-x-[#efefef] border-b-[rgb(205,_205,_205)] transition-all duration-400  hover:pl-[21px] focus:border-[#000000] focus:outline-none hover:border-[1px] hover:border-[solid] hover:border-[rgb(205,_205,_205)]"
                            required
                        />
                        <label htmlFor="message" className="sm:w-[560px] w-[350px] text-[#151515] pl-[6px] sm:pl-0 text-left mt-[26px]">Message</label>
                        <textarea
                            id="message"
                            type="text"
                            placeholder="Your message..."
                            className="mt-[16px] bg-[#efefef] focus:ring-black text-[17px] ml-[-6px] sm:ml-0 pt-[20px] sm:pl-[18px] w-[110%] sm:w-[560px] h-[100px] border-t-[#efefef] border-x-[#efefef] border-b-[rgb(205,_205,_205)] transition-all duration-400  hover:pl-[21px] focus:border-[#000000] focus:outline-none hover:border-[1px] hover:border-[solid] hover:border-[rgb(205,_205,_205)]"
                            required
                        ></textarea>
                        <button type="submit" className="bg-black mt-[50px] sm:px-[50px] px-[43%] py-[15px] text-white text-[20px] mr-[5px] sm:mr-0 font-bold rounded-[4px] transition-all duration-800 hover:bg-[#ee64ff]">
                            SUBMIT
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Contact;
