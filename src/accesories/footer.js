import React, { useEffect, useRef } from 'react';
import logo from '../img/logo.png';

function Footer() {
  const mainRef = useRef(null); 
  const logoRef = useRef(null); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === logoRef.current) {
              entry.target.classList.add('animate-grow');
            }
            if (entry.target === mainRef.current) {
              entry.target.classList.add('animate-fadeSlideUp');
            }
          }
        });
      },
      { threshold: 0.1 } 
    );

    if (logoRef.current) observer.observe(logoRef.current);
    if (mainRef.current) observer.observe(mainRef.current);

    return () => {
      if (logoRef.current) observer.unobserve(logoRef.current);
      if (mainRef.current) observer.unobserve(mainRef.current);
    };
  }, []);

  return (
    <div>
      <footer className="w-full pt-[100px] sm:pt-[160px] px-[0] pb-[48px] h-auto flex justify-center flex-wrap">
        <div
          className="w-full flex justify-center opacity-0" 
          ref={logoRef}
        >
          <img src={logo} alt="Logo" className="logo-animation" />
        </div>

        <div
          className="opacity-0 w-full" 
          ref={mainRef}
        >
          <div className="flex justify-center mt-[30px] sm:mt-[50px] space-x-[30px]">
            <div className="rounded-[50%] transition-all duration-400 cursor-pointer hover:bg-[#ee64ff] hover:mt-[-1px]">
              <img
                className="w-[42px] h-[42px] p-[10px]"
                src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f5c6a83a9b7ca7d4b83724_Vector.svg"
                alt="Twitter"
              />
            </div>
            <div className="rounded-[50%] transition-all duration-400 cursor-pointer hover:bg-[#ee64ff] hover:mt-[-1px]">
              <img
                className="w-[42px] h-[42px] p-[10px]"
                src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f5c6a86b7a95c9ed855c5d_Vector-1.svg"
                alt="Facebook"
              />
            </div>
            <div className="rounded-[50%] transition-all duration-400 cursor-pointer hover:bg-[#ee64ff] hover:mt-[-1px]">
              <img
                className="w-[42px] h-[42px] p-[10px]"
                src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f5c6a890c7d518e61c7ff8_logo-instagram%201.svg"
                alt="Instagram"
              />
            </div>
            <div className="rounded-[50%] transition-all duration-400 cursor-pointer hover:bg-[#ee64ff] hover:mt-[-1px]">
              <img
                className="w-[42px] h-[42px] p-[10px]"
                src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f5c6a8d1a589034766a87e_logo-github%201.svg"
                alt="Github"
              />
            </div>
          </div>
          <div className="mt-[60px] sm:mt-[90px] text-[18px] w-full flex justify-center">
            <a
              href=""
              className="no-underline [transition:all_.25s] mr-[18px] hover:text-[grey] hover:mt-[-5px]"
            >
              Style Guide
            </a>
            <span className="text-[gray]"> | </span>
            <a
              href="https://templatestudio.webflow.io/"
              className="no-underline [transition:all_.25s] ml-[18px] hover:text-[grey] hover:mt-[-5px]"
            >
              Customize
            </a>
          </div>
          <div className="mt-[16px] text-[18px] text-center">
            <span className="sm:flex justify-center">
              <div>Copyright ©</div>
              <a
                href="https://webflow.com/templates/designers/lucas-gusso"
                className="no-underline [transition:all_.25s] ml-[16px] mr-[10px] hover:text-[#b4b3b3]"
              >
                <div><span className="text-[gray] no-underline [transition:all_.25s] hover:text-[#b4b3b3]">
                  Design & Developed by </span>Lucas Gusso</div>
              </a>
              <a
                href="https://webflow.com/"
                className="no-underline [transition:all_.25s] mr-[10px] hover:text-[#b4b3b3]"
              >
                <div><span className="text-[gray] no-underline [transition:all_.25s] hover:text-[#b4b3b3]">
                  Powered by </span>Webflow</div>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
