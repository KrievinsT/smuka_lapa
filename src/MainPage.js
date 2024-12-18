import React, { useEffect, useRef, useState, useCallback } from 'react';
import Header from './accesories/header';
import Footer from './accesories/footer';
import { Link } from 'react-router-dom';
import Astronaut  from './img/Astronaut.png';
import DiskPlayer from './img/DiskPlayer.png';
import PurpleTape from './img/PurpleTape.png';
import SportsCar from './img/SportsCar.png';

function MainPage() {
  const mainRef1 = useRef(null);
  const mainRef2 = useRef(null);
  const mainRef3 = useRef(null);
  const mainRef4 = useRef(null);
  const mainRef52 = useRef(null);
  const mainRef53 = useRef(null);
  const mainRef5 = useRef(null);
  const mainRef6 = useRef(null);
  const mainRef7 = useRef(null);
  const mainRef8 = useRef(null);
  const mainRef9 = useRef(null);
  const mainRef10 = useRef(null);
  const mainRef11 = useRef(null);
  const mainRef12 = useRef(null);
  const mainRef13 = useRef(null);
  const mainRef14 = useRef(null);
  const mainRef15 = useRef(null);
  const mainRef16 = useRef(null);
  const mainRef17 = useRef(null);
  const mainRef18 = useRef(null);
  const mainRef19 = useRef(null);
  const mainRef20 = useRef(null);
  const mainRef21 = useRef(null);
  const mainRef22 = useRef(null);
  const mainRef23 = useRef(null);
  const mainRef88 = useRef(null);
  const mainRef89 = useRef(null);
  const mainRef90 = useRef(null);
  const imagesContainerRef = useRef(null);
  const imageRef = useRef(null); 

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.classList.add('animate-riseAndShrink');
    }
  }, []);
  
  const [offset1, setOffset1] = useState({ x: 0, y: 0 });
    const [offset2, setOffset2] = useState({ x: 0, y: 0 });
    const [offset3, setOffset3] = useState({ x: 0, y: 0 });
    const [offset4, setOffset4] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e, setOffset) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        setOffset({
            x: Math.min(20, Math.max(-20, x / 15)),
            y: Math.min(20, Math.max(-20, y / 15)),
        });
    };

    const handleMouseLeave = (setOffset) => {
        setOffset({ x: 0, y: 0 });
    };

    useEffect(() => {
      const handleMouseMove = (e) => {
        if (!imagesContainerRef.current) return;
  
        const rect = imagesContainerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2; // Horizontal center of the images
        const distanceFromCenter = e.clientX - centerX; // Cursor distance from center
  
        // Horizontal movement toward or away from the cursor
        const z31Rotation = Math.min(3, Math.max(-3, distanceFromCenter));
        const z32Rotation = Math.min(5, Math.max(-5, distanceFromCenter));
        const z33Rotation = Math.min(7, Math.max(-7, distanceFromCenter));
      
        // Horizontal and vertical translation
        const z31MoveX = Math.min(81, Math.max(-81, -distanceFromCenter)); // Less horizontal movement
        const z32MoveX = Math.min(25, Math.max(-25, -distanceFromCenter)); // Subtler movement
        const z33MoveX = Math.min(30, Math.max(-30, distanceFromCenter)); // Slightly smaller movement
  
        // Apply transformations to each image
        document.querySelector(".z-31").style.transform = `rotate(${z31Rotation}deg) translate(${z31MoveX}px)`;
        document.querySelector(".z-32").style.transform = `rotate(${z32Rotation}deg) translate(${z32MoveX}px)`;
        document.querySelector(".z-33").style.transform = `rotate(${z33Rotation}deg) translate(${z33MoveX}px)`;
      };
  
      const handleMouseLeave = () => {
        // Reset transformations when the mouse leaves the viewport
        document.querySelector(".z-31").style.transform = "none";
        document.querySelector(".z-32").style.transform = "none";
        document.querySelector(".z-33").style.transform = "none";
      };
  
      // Attach the event listener to the entire window
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseleave", handleMouseLeave);
  
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, []);


  // Intersection Observer logic encapsulated in useCallback
  const observeElement = useCallback((element) => {
    if (!element) return;

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

    observer.observe(element);

    return () => {
      observer.disconnect(); // Cleanup observer when the component unmounts
    };
  }, []);

  useEffect(() => {
    if (mainRef1.current) {
      const cleanupObserver1 = observeElement(mainRef1.current);
      return cleanupObserver1;
    }
  }, [observeElement]);

  const observeElement88 = useCallback((element) => {
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('animate-squishReveal');
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    observer.observe(element);

    return () => {
      observer.disconnect(); // Cleanup observer when the component unmounts
    };
  }, []);

  useEffect(() => {
    if (mainRef88.current) {
      const cleanupObserver88 = observeElement88(mainRef88.current);
      return cleanupObserver88;
    }
  }, [observeElement]);

  const observeElement89 = useCallback((element) => {
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('animate-squishReveal');
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    observer.observe(element);

    return () => {
      observer.disconnect(); 
    };
  }, []);

  useEffect(() => {
    if (mainRef89.current) {
      const cleanupObserver89 = observeElement89(mainRef89.current);
      return cleanupObserver89;
    }
  }, [observeElement]);

  const observeElement90 = useCallback((element) => {
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('animate-squishReveal');
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    observer.observe(element);

    return () => {
      observer.disconnect(); // Cleanup observer when the component unmounts
    };
  }, []);

  useEffect(() => {
    if (mainRef90.current) {
      const cleanupObserver90 = observeElement90(mainRef90.current);
      return cleanupObserver90;
    }
  }, [observeElement]);

  useEffect(() => {
    if (mainRef2.current) {
      const cleanupObserver2 = observeElement(mainRef2.current);
      return cleanupObserver2;
    }
  }, [observeElement]);

  useEffect(() => {
    if (mainRef3.current) {
      const cleanupObserver3 = observeElement(mainRef3.current);
      return cleanupObserver3;
    }
  }, [observeElement]);
  
  useEffect(() => {
    if (mainRef4.current) {
      const cleanupObserver4 = observeElement(mainRef4.current);
      return cleanupObserver4;
    }
  }, [observeElement]);

  useEffect(() => {
    if (mainRef5.current) {
      const cleanupObserver5 = observeElement(mainRef5.current);
      return cleanupObserver5;
    }
  }, [observeElement]);

  useEffect(() => {
    if (mainRef52.current) {
      const cleanupObserver52 = observeElement(mainRef52.current);
      return cleanupObserver52;
    }
  }, [observeElement]);
  
  useEffect(() => {
    if (mainRef53.current) {
      const cleanupObserver53 = observeElement(mainRef53.current);
      return cleanupObserver53;
    }
  }, [observeElement]);

  useEffect(() => {
    if (mainRef6.current) {
      const cleanupObserver6 = observeElement(mainRef6.current);
      return cleanupObserver6;
    }
  }, [observeElement]);

  useEffect(() => {
    if (mainRef7.current) {
      const cleanupObserver7 = observeElement(mainRef7.current);
      return cleanupObserver7;
    }
  }, [observeElement]);

  useEffect(() => {
    if (mainRef8.current) {
      const cleanupObserver8 = observeElement(mainRef8.current);
      return cleanupObserver8;
    }
  }, [observeElement]);

  useEffect(() => {
    if (mainRef9.current) {
      const cleanupObserver9 = observeElement(mainRef9.current);
      return cleanupObserver9;
    }
  }, [observeElement]);

  useEffect(() => {
    if (mainRef10.current) {
      const cleanupObserver10 = observeElement(mainRef10.current);
      return cleanupObserver10;
    }
  }, [observeElement]);

  useEffect(() => {
    if (mainRef11.current) {
      const cleanupObserver11 = observeElement(mainRef11.current);
      return cleanupObserver11;
    }
  }, [observeElement]);

  useEffect(() => {
    if (mainRef12.current) {
      const cleanupObserver12 = observeElement(mainRef12.current);
      return cleanupObserver12;
    }
  }, [observeElement]);  

  useEffect(() => {
    if (mainRef13.current) {
      const cleanupObserver13 = observeElement(mainRef13.current);
      return cleanupObserver13;
    }
  }, [observeElement]);  

  useEffect(() => {
    if (mainRef14.current) {
      const cleanupObserver14 = observeElement(mainRef14.current);
      return cleanupObserver14;
    }
  }, [observeElement]);  

  useEffect(() => {
    if (mainRef15.current) {
      const cleanupObserver15 = observeElement(mainRef15.current);
      return cleanupObserver15;
    }
  }, [observeElement]);  

  useEffect(() => {
    if (mainRef16.current) {
      const cleanupObserver16 = observeElement(mainRef16.current);
      return cleanupObserver16;
    }
  }, [observeElement]); 

  useEffect(() => {
    if (mainRef17.current) {
      const cleanupObserver17 = observeElement(mainRef17.current);
      return cleanupObserver17;
    }
  }, [observeElement]); 

  useEffect(() => {
    if (mainRef18.current) {
      const cleanupObserver18 = observeElement(mainRef18.current);
      return cleanupObserver18;
    }
  }, [observeElement]); 

  useEffect(() => {
    if (mainRef19.current) {
      const cleanupObserver19 = observeElement(mainRef19.current);
      return cleanupObserver19;
    }
    
  }, [observeElement]);
  useEffect(() => {
    if (mainRef20.current) {
      const cleanupObserver20 = observeElement(mainRef20.current);
      return cleanupObserver20;
    }
  }, [observeElement]); 

  useEffect(() => {
    if (mainRef21.current) {
      const cleanupObserver21 = observeElement(mainRef21.current);
      return cleanupObserver21;
    }
    
  }, [observeElement]);

  useEffect(() => {
    if (mainRef22.current) {
      const cleanupObserver22 = observeElement(mainRef22.current);
      return cleanupObserver22;
    }
    
  }, [observeElement]);

  useEffect(() => {
    if (mainRef23.current) {
      const cleanupObserver23 = observeElement(mainRef23.current);
      return cleanupObserver23;
    }
    
  }, [observeElement]);
  const testimonials = [
    {
      image: 'https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f5c160db3c3c74e3cddc55_Testimonial%20Image%2003.jpg',
      text: 'Their ability to translate abstract concepts into visually stunning representations is nothing short of exceptional',
      name: 'James Wilson',
      title: 'Operations Manager',
    },
    {
      image: 'https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f5c15fdb3c3c74e3cddb45_Testimonial%20Slider%20Image.jpg',
      text: 'The design prowess of Sandbox is truly remarkable. Their ability to translate abstract concepts into visually stunning representations is nothing short of exceptional.',
      name: 'Alex Johnson',
      title: 'CTO at TechInnovate',
    },
    {
      image: 'https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f5c15fdb3c3c74e3cddc2b_Testimonial%20Image%2001.jpg',
      text: 'They are a creative force to reckon with. Their innovative ideas and exceptional design sense set them apart in the industry',
      name: 'Michael Lee',
      title: 'Customer Experience Lead',
    },
    {
      image: 'https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f5c160db3c3c74e3cddc41_Testimonial%20Image%2002.jpg',
      text: 'Their comprehensive understanding of our brands essence and target market helped us define and refine our identity.',
      name: 'John Thompson',
      title: 'Product Manager',
    },
  ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isExiting, setIsExiting] = useState(false);
    const [isEntering, setIsEntering] = useState(false);
  
    const handleNext = () => {
      setIsExiting(true);
      setTimeout(() => {
        setIsExiting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsEntering(true);
        setTimeout(() => setIsEntering(false), 500);
      }, 500);
    };
  
    const handlePrev = () => {
      setIsExiting(true);
      setTimeout(() => {
        setIsExiting(false);
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
        setIsEntering(true);
        setTimeout(() => setIsEntering(false), 500);
      }, 500);
    };
  
    // Automatic change logic with interval reset
    useEffect(() => {
      const interval = setInterval(handleNext, 5000); // Change every 5 seconds
  
      // Clear the interval when the component unmounts or when currentIndex changes
      return () => clearInterval(interval);
    }, [currentIndex]); // Depend on currentIndex, so it resets on each change
  
    const currentTestimonial = testimonials[currentIndex];

  
  return (
    <div>
      <Header />
      <main>
        <div className="flex justify-center opacity-0 animate-fadeSlideUpShort delay-300">
          <div className="bg-[#ee64ff] rounded-[50%] w-[8px] hidden sm:block h-[8px] mt-[29px] mr-[0.8%]"></div>
          <h2 className="text-center mt-[1.2%] text-[100%] sm:text-[115%]">WE ARE SANDBOX</h2>
          <div className="bg-[#ee64ff] rounded-[50%] w-[8px] hidden sm:block h-[8px] mt-[29px] ml-[0.8%]"></div>
        </div>
        <div className="z-40 absolute w-full text-center px-[20%] py-0 mt-[10px] opacity-0 animate-fadeSlideUp delay-300">
            <h1 className="text-[240%] sm:text-[510%] font-normal leading-none">Elevate your brand with creative solutions</h1>
        </div>
        <div className="sm:w-[24%] w-[50%] relative sm:ml-[38%] ml-[25%] sm:mt-[160px] mt-[190px]" ref={imagesContainerRef}>
            <div className="absolute z-[31] z-31" >
              <img className="rounded-[10px] animate-riseAndShrink opacity-0 " src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66fa93b7c6d1a72c0dc53f3b_Images%20Hero%2003.jpg"/>
            </div>
            <div className="absolute z-[32] z-32">
              <img className="rounded-[10px] animate-riseAndShrink opacity-0 [animation-delay:0.5s]" src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66fa93b709501e1825fa0891_Images%20Hero%2002.jpg"/>
            </div>
            <div className="absolute z-[33] z-33">
              <img className="rounded-[10px] animate-riseAndShrink opacity-0 [animation-delay:1s]" src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66fa93b7010975c6564112ea_Images%20Hero%2001.jpg"/>
            </div>
        </div>
        <div className="sm:flex sm:pl-[70px] mt-[500px] sm:mt-[280px] opacity-0" ref={mainRef22}>
          <div className="sm:w-[280px] w-[75%] ml-[12.5%] sm:ml-0">
            <p className="text-[gray] sm:text-left text-center">WHERE IMAGINATION MEETS STRATEGY TO IMPACTFUL RESULTS</p>
          </div>
          <div className="sm:ml-[910px] h-auto w-auto cursor-pointer">
            <div className="border-b border-[black] sm:w-[48px] w-[43%] ml-[28.5%] sm:ml-0 transition-all pt-[22px] duration-1000 hover:w-[160px]">
              <a className="text-[16px] sm:text-left text-center">contact@sandbox.com</a>
            </div>
            <div className="h-auto sm:w-[160px] w-[43%] border-b border-[lightgray]"></div>
          </div>
        </div>
        <div className="marquee sm:h-[280px] h-[180px] opacity-0 sm:mt-0 mt-[50px]" ref={mainRef23}>
          <div className="track items-center">
            <span className="sm:text-[1500%] text-[750%] leading-none whitespace-nowrap font-light ">CREATIVE AGENCY</span>
            <div className="bg-[#ee64ff] rounded-full w-[1em] h-[1em] sm:ml-[100px] sm:mr-[100px] ml-[70px] mr-[70px]"></div>
            <span className="sm:text-[1500%] text-[750%] leading-none whitespace-nowrap font-light">CREATIVE AGENCY</span>
            <div className="bg-[#ee64ff] rounded-full w-[1em] h-[1em] sm:ml-[100px] sm:mr-[100px] ml-[70px] mr-[70px]"></div>
          </div>
        </div>
        <div>
          <h2 className="text-center sm:text-[54px] text-[35px] sm:mt-[180px] mt-[10px] sm:px-[140px] px-[20px] py-0 font-normal leading-none opacity-0" ref={mainRef1}>
            Elevate your digital<img className="rounded-[50px] inline-block align-middle sm:w-[110px] w-[70px] sm:mr-[20px] sm:ml-[20px] mr-[10px] ml-[10px] sm:mt-[-20px] h-auto mx-2 opacity-0" ref={mainRef88} src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f5a97dc6142aa5d1e24cc8_Text%20Images%2001.jpg" alt="SnowWoman " />
            presence with distinction, immerse in boundless creativity. Our team of 
            <img className="rounded-[50px] inline-block align-middle sm:w-[110px] w-[70px] sm:mr-[20px] sm:ml-[20px] mr-[10px] ml-[10px] sm:mt-[-20px] h-auto mx-2 opacity-0" ref={mainRef89} src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f5a97cc6142aa5d1e24c70_Text%20Images%2002.jpg" alt="car " />
            designers and development trailblazers ignites your 
            <img className="rounded-[50px] inline-block align-middle sm:w-[110px] w-[70px] sm:mr-[20px] sm:ml-[20px] mr-[10px] ml-[10px] sm:mt-[-20px] h-auto mx-2 opacity-0" ref={mainRef90} src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f5a97dc6142aa5d1e24c9b_Text%20Images%2003.jpg" alt="astronaut " />
            digital vision
          </h2>
        </div>
        <div className="sm:flex sm:mt-[140px] mt-[50px] sm:text-left text-center sm:ml-[315px] ml-[10px]">
          <div className="font-normal sm:mt-0 mt-[30px] leading-none opacity-0" ref={mainRef2}>
            <p className="text-[85px]">3+</p>
            <p className="text-[18px] text-[rgb(82,_82,_82)]">Years of experiance</p>
          </div>
          <div className="font-normal sm:mt-0 mt-[30px] leading-none sm:ml-[190px] ml-[10px] [animation-delay:0.1s] opacity-0" ref={mainRef20}>
            <p className="text-[85px] leading-none">40+</p>
            <p className="text-[18px] text-[rgb(82,_82,_82)]">Satisfied clients</p>
          </div>
          <div className="font-normal sm:mt-0 mt-[30px] leading-none sm:ml-[190px] ml-[10px] [animation-delay:0.2s] opacity-0" ref={mainRef21}>
            <p className="text-[85px] leading-none">100+</p>
            <p className="text-[18px] text-[rgb(82,_82,_82)]">Projects delivered</p>
          </div>
        </div>
        <div>
          <div className="sm:flex sm:mt-[140px] mt-[50px] opacity-0" ref={mainRef3}>
            <div className="bg-[white] sm:w-[28.5%] w-[82%] sm:h-[600px] h-[450px] sm:ml-[5.5%] ml-[9%]">
              <div className="sm:pt-[80px] pt-[50px] sm:pl-[60px] pl-[30px] sm:pr-[60px] pr-[5px]">
                <h2 className="sm:text-[26px] text-[23px]">Transform your business identity through expert branding strategies</h2>
                <div className="sm:h-[80px] h-[40px]"><p className="mt-[20px] text-[14px] text-[gray]">Elevate your brand’s presence with tailored solutions that resonate with your brand</p></div>
                <p className="sm:text-[185px] text-[130px] text-[lightgray] mt-[4px] sm:ml-[4px] transition-all duration-1000 hover:text-[black]">01</p>
              </div>
            </div>
            <div className="bg-[white] sm:w-[28.5%] w-[82%] sm:h-[600px] h-[450px] sm:mt-0 mt-[20px] sm:ml-[2%] ml-[9%]">
              <div className="sm:pt-[80px] pt-[50px] sm:pl-[60px] pl-[30px] sm:pr-[60px] pr-[5px]">
                <h2 className="sm:text-[26px] text-[23px]">Unlock innovative web solutions with cutting-edge development</h2>
                <div className="sm:h-[80px] h-[40px]"><p className="mt-[20px] text-[14px] text-[gray]">Our team crafts seamless digital experiences to drive results and business growth</p></div>
                <p className="sm:text-[185px] text-[130px] text-[lightgray] mt-[4px] sm:ml-[4px] transition-all duration-1000 hover:text-[black]">02</p>
              </div>
            </div>
            <div className="bg-[white] sm:w-[28.5%] w-[82%] sm:h-[600px] h-[450px] sm:mt-0 mt-[20px] sm:ml-[2%] ml-[9%]">
              <div className="sm:pt-[80px] pt-[50px] sm:pl-[60px] pl-[30px] sm:pr-[60px] pr-[5px]">
                <h2 className="sm:text-[26px] text-[23px]">Design intuitive user interfaces for exceptional user experiences</h2>
                <div className="sm:h-[80px] h-[40px]"><p className="mt-[20px] text-[14px] text-[gray]">We create user-centered designs that enhance engagement and usability</p></div>
                <p className="sm:text-[185px] text-[130px] text-[lightgray] mt-[4px] sm:ml-[4px] transition-all duration-1000 hover:text-[black]">03</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
          <Link to="/contact">
            <button type="submit" className="bg-black sm:mt-[100px] mt-[20px] sm:px-[50px] px-[90px] sm:py-[15px] py-[12px] text-white text-[20px] rounded-[4px] transition-all duration-250 hover:bg-[#ee64ff]">
              GET STARTED
            </button>
          </Link>
          </div>
        </div>
        <div>
          <div>
            <div className="sm:mt-[220px] mt-[60px] text-center opacity-0" ref={mainRef4}>
              <h2 className="sm:text-[60px] text-[35px] font-bold sm:px-[430px] px-[25px] py-0 font-normal leading-none">Showcasing creative and impactful solutions</h2>
              <p className="sm:text-[18px] text-[16px] mt-[20px] sm:px-[470px] px-[25px] py-0 text-[rgb(82,_82,_82)]">Explore our work to see the transformative power of creative solutions and envision what we can accomplish together.</p>
            </div>
            <div className="p-[0]">
            <div className="sm:flex sm:mt-[100px] mt-[30px] sm:w-[100%] w-[94%] " >
                        <Link to="/Astronaut" className="w-[49%]">
                            <div className="bg-[white] h-auto pb-[40px] ml-[7%] sm:ml-[5%] rounded-[10px] opacity-0" ref={mainRef5}>
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
                            <div className="bg-[white] h-auto pb-[40px] ml-[7%] sm:ml-[5%] rounded-[10px] sm:mt-0 mt-[30px] opacity-0" ref={mainRef52}>
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
                            <div className="bg-[white] h-auto pb-[40px] ml-[7%] sm:ml-[5%] rounded-[10px] opacity-0" ref={mainRef6}>
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
                            <div className="bg-[white] h-auto pb-[40px] ml-[7%] sm:ml-[5%] sm:mt-0 mt-[30px] rounded-[10px] opacity-0" ref={mainRef53}>
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
          </div>
        </div>
        <div>
          <div>
            <h2 className="text-[20px] text-center sm:mt-[150px] mt-[100px] opacity-0" ref={mainRef7}>TRUSTED BY DESIGN TEAMS AT</h2>
          </div>
          <div>
            <div className="sm:flex hidden ml-[170px] mt-[50px]">
              <img className="w-[70px] rounded-tl-[10px] rounded-tr-[10px] opacity-0" ref={mainRef10} src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f6c0eea96082cb298f4d2f_Logo%20(1).svg" alt="BrandLogo_1 " />
              <img className="ml-[130px] w-[220px] rounded-tl-[10px] rounded-tr-[10px] [animation-delay:0.1s] opacity-0" ref={mainRef12} src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f6c0ee6f18a50f9c2e35c5_Logo%20(3).svg" alt="BrandLogo_2 " />
              <img className="ml-[150px] rounded-tl-[10px] rounded-tr-[10px] [animation-delay:0.2s] opacity-0" ref={mainRef13} src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f6c0ee50a3aec7862e1bfc_Logo%20(5).svg" alt="BrandLogo_3 " />
              <img className="ml-[160px] w-[160px] rounded-tl-[10px] rounded-tr-[10px] [animation-delay:0.3s] opacity-0" ref={mainRef14} src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f6c0ee56fd90d2a8637444_Logo%20(7).svg" alt="BrandLogo_4 " />
              <img className="ml-[100px] w-[160px] rounded-tl-[10px] rounded-tr-[10px] [animation-delay:0.4s] opacity-0" ref={mainRef15} src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f6c0eed4af88e6a83c1fa5_Logo%20(9).svg" alt="BrandLogo_5 " />
            </div>
            <div className="sm:flex hidden ml-[130px] mt-[70px]">
              <img className="w-[150px] rounded-tl-[10px] rounded-tr-[10px] opacity-0" ref={mainRef11} src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f6c0ee91c5cef81eee02c4_Logo%20(2).svg" alt="BrandLogo_6 " />
              <img className="ml-[180px] rounded-tl-[10px] rounded-tr-[10px] [animation-delay:0.1s] opacity-0" ref={mainRef16} src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f6c0ee0613a9c7dcaf0b03_Logo%20(4).svg" alt="BrandLogo_7 " />
              <img className="ml-[150px] w-[190px] rounded-tl-[10px] rounded-tr-[10px] [animation-delay:0.2s]  opacity-0" ref={mainRef17} src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f6c0ee00cedcbb712bb01e_Logo%20(6).svg" alt="BrandLogo_8 " />
              <img className="ml-[150px] rounded-tl-[10px] rounded-tr-[10px] [animation-delay:0.3s] opacity-0" ref={mainRef18} src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f6c0ee8db6576bccc0c163_Logo%20(8).svg" alt="BrandLogo_9 " />
              <img className="ml-[150px] w-[160px] rounded-tl-[10px] rounded-tr-[10px] [animation-delay:0.4s] opacity-0" ref={mainRef19} src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f6c0ee4ef06712b61cb996_Logo%20(10).svg" alt="BrandLogo_10 " />
            </div>
            <div className="flex sm:hidden mt-[70px]">
              <img className="ml-[50px] w-[70px] rounded-tl-[10px] rounded-tr-[10px]"  src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f6c0eea96082cb298f4d2f_Logo%20(1).svg" alt="BrandLogo_1 " />
              <img className="ml-[70px] w-[160px] rounded-tl-[10px] rounded-tr-[10px]" src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f6c0ee6f18a50f9c2e35c5_Logo%20(3).svg" alt="BrandLogo_2 " />
            </div>
            <div className="flex sm:hidden mt-[30px]">
              <img className="ml-[50px] w-[70px] rounded-tl-[10px] rounded-tr-[10px]" src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f6c0ee50a3aec7862e1bfc_Logo%20(5).svg" alt="BrandLogo_3 " />
              <img className="ml-[70px] w-[160px] rounded-tl-[10px] rounded-tr-[10px]"  src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f6c0ee56fd90d2a8637444_Logo%20(7).svg" alt="BrandLogo_4 " />
            </div>
            <div className="flex sm:hidden mt-[30px]">
              <img className="ml-[20px] w-[150px] rounded-tl-[10px] rounded-tr-[10px]"  src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f6c0eed4af88e6a83c1fa5_Logo%20(9).svg" alt="BrandLogo_5 " />
              <img className="ml-[40px] w-[150px] rounded-tl-[10px] rounded-tr-[10px]" src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f6c0ee91c5cef81eee02c4_Logo%20(2).svg" alt="BrandLogo_6 " />
            </div>
            <div className="flex sm:hidden mt-[30px]">
              <img className="ml-[50px] w-[70px] rounded-tl-[10px] rounded-tr-[10px] "  src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f6c0ee0613a9c7dcaf0b03_Logo%20(4).svg" alt="BrandLogo_7 " />
              <img className="ml-[70px] w-[160px] rounded-tl-[10px] rounded-tr-[10px] "  src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f6c0ee00cedcbb712bb01e_Logo%20(6).svg" alt="BrandLogo_8 " />
            </div>
            <div className="flex sm:hidden mt-[30px]">
              <img className="ml-[50px] w-[70px] rounded-tl-[10px] rounded-tr-[10px]" src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f6c0ee8db6576bccc0c163_Logo%20(8).svg" alt="BrandLogo_9 " />
              <img className="ml-[70px] w-[160px] rounded-tl-[10px] rounded-tr-[10px] "  src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f6c0ee4ef06712b61cb996_Logo%20(10).svg" alt="BrandLogo_10 " />
            </div>
          </div>
        </div>
        <div>
          <div className="sm:mt-[210px] mt-[60px] text-center opacity-0" ref={mainRef8} >
            <h2 className="sm:text-[60px] text-[35px] font-bold sm:px-[430px] px-[25px] py-0 font-normal leading-none">Voices of satisfaction and success</h2>
            <p className="sm:text-[18px] text-[16px] mt-[20px] sm:px-[470px] px-[25px] py-0 text-[rgb(82,_82,_82)]">We take pride in building lasting partnerships and delivering solutions that exceed expectations.</p>
          </div>
          <div className="flex justify-center sm:mt-[80px] mt-[20px] opacity-0" ref={mainRef9}>
            <img className="rounded-[50%] transition-all duration-400 w-[55px] cursor-pointer hidden sm:block h-[55px] p-[15px] mt-[170px] mr-[160px] border-[0.5px] border-[solid] border-[lightgray] hover:bg-[#ee64ff]" 
            src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f5c15fdb3c3c74e3cddbb8_Left%20Slider%20Arrow.svg" alt="Arrow_left "
            onClick={handlePrev} />
            <div className="bg-[white] sm:w-[58%] w-[84%] sm:h-[410px] h-[700px] rounded-[14px] overflow-hidden relative shadow-[50px] sm:flex">
              <div className={`${isExiting ? 'animate-slideUpFade' : isEntering ? 'animate-slideInFade' : '' }`}>
                <img className=" sm:h-[353px] h-[285px] sm:w-[255px] w-[285px] sm:mt-[30px] mt-[15px] sm:ml-[30px] ml-[15px] rounded-[10px] object-cover" src={currentTestimonial.image} alt={currentTestimonial.name} />
              </div>
              <div className="sm:pl-[35px] pl-[20px] sm:pt-[60px] pt-[30px] sm:w-[540px] w-[280px]">
                <div  className={` ${ isExiting ? 'animate-slideUpFade' : isEntering ? 'animate-slideInFade' : '' }`}>
                  <p className="text-[22px] h-[125px]">{currentTestimonial.text}</p>
                </div>
                <div className="flex mt-[110px]">
                  <div className={` ${ isExiting ? 'animate-slideUpFade' : isEntering ? 'animate-slideInFade' : '' }`}>
                    <p className="text-[22px] sm:w-[210px] w-[180px]">{currentTestimonial.name}</p>
                    <p className="text-[gray] text-[15px] sm:w-[210px] w-[180px]">{currentTestimonial.title}</p>
                  </div>
                  <div className={` ${ isExiting ? 'animate-slideUpFade' : isEntering ? 'animate-slideInFade' : '' }`}>
                    <div className="flex sm:ml-[200px] ml-[10px] mt-[20px]">
                      <img className=" w-[22px]" src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f5c1cff748d7ccf4146b97_Star.svg" alt="star " />
                      <img className=" w-[22px]" src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f5c1cff748d7ccf4146b97_Star.svg" alt="star " />
                      <img className=" w-[22px]" src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f5c1cff748d7ccf4146b97_Star.svg" alt="star " />
                      <img className=" w-[22px]" src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f5c1cff748d7ccf4146b97_Star.svg" alt="star " />
                      <img className=" w-[22px]" src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f5c1cff748d7ccf4146b97_Star.svg" alt="star " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className="rounded-[50%] transition-all duration-400 w-[55px] cursor-pointer hidden sm:block h-[55px] p-[15px] mt-[170px] ml-[160px] border-[0.5px] border-[solid] border-[lightgray] hover:bg-[#ee64ff]" src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f5c15fdb3c3c74e3cddbf7_Right%20Slider%20Arrow.svg" alt="Arrow_right "  onClick={handleNext}/>   
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;