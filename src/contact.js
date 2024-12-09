import React, { useEffect, useRef } from 'react';
import Header from './accesories/header';
import Footer from './accesories/footer';

function Contact() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 opacity-0 opacity-0 animate-fadeSlideUp delay-300">
                <div className="flex justify-center">
                    <div className="bg-[#ee64ff] rounded-[50%] w-[8px] h-[8px] mt-[29px] mr-[0.8%]"></div>
                    <h2 className="text-center mt-[1.2%] text-[115%]">AVAILABLE FOR WORK</h2>
                    <div className="bg-[#ee64ff] rounded-[50%] w-[8px] h-[8px] mt-[29px] ml-[0.8%]"></div>
                </div>
                <div className="w-full text-center px-[25%] py-0 mt-[10px] opacity-0 animate-fadeSlideUp delay-300">
                    <h1 className="text-[570%] font-normal leading-none">Let's bring your vision to life</h1>
                </div>
                <div className="mt-[150px] flex justify-center flex-wrap animate-fadeSlideUp delay-300">
                    <form className="flex flex-col items-center w-[90%] max-w-[500px] mb-[50px]">
                        <label htmlFor="name" className="w-[560px] text-[#151515] text-left">Name</label>
                        <input
                            id="name"
                            placeholder="Enter your name"
                            className="mt-[16px] bg-[#efefef] text-[17px] pl-[18px] w-[560px] h-[50px] border-t-[#efefef] border-x-[#efefef] border-b-[rgb(205,_205,_205)] transition-all duration-400  hover:pl-[21px] hover:border-[1px] hover:border-[solid] hover:border-[rgb(205,_205,_205)] focus:outline-none focus:border-[#000000] "
                            required
                        />
                        <label htmlFor="email" className="w-[560px] text-[#151515] text-left mt-[26px]">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your e-mail"
                            className="mt-[16px] bg-[#efefef] text-[17px] pl-[18px] w-[560px] h-[50px] border-t-[#efefef] border-x-[#efefef] border-b-[rgb(205,_205,_205)] transition-all duration-400  hover:pl-[21px] focus:border-[#000000] focus:outline-none hover:border-[1px] hover:border-[solid] hover:border-[rgb(205,_205,_205)]"
                            required
                        />
                        <label htmlFor="message" className="w-[560px] text-[#151515] text-left mt-[26px]">Message</label>
                        <textarea
                            id="message"
                            placeholder="Your message..."
                            className="mt-[16px] bg-[#efefef] text-[17px] pl-[18px] pt-[20px] w-[560px] h-[100px] border-t-[#efefef] border-x-[#efefef] border-b-[rgb(205,_205,_205)] transition-all duration-400  hover:pl-[21px] focus:border-[#000000] focus:outline-none hover:border-[1px] hover:border-[solid] hover:border-[rgb(205,_205,_205)]"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-black mt-[50px] px-[50px] py-[15px] text-white text-[20px] font-bold rounded-[4px] transition-all duration-800 hover:bg-[#ee64ff]"
                        >
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
