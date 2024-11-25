import './styles/App.css';
import Header from './accesories/header';
import Footer from './accesories/footer';
import { Link } from 'react-router-dom';
import Astronaut  from './img/Astronaut.png';
import DiskPlayer from './img/DiskPlayer.png';
import PurpleTape from './img/PurpleTape.png';
import SportsCar from './img/SportsCar.png';

function MainPage() {
  return (
    <div>
      <Header />
      <main className="bg-[#efefef]">
        <div className="flex justify-center">
            <div className="bg-[#ee64ff] rounded-[50%] w-[8px] h-[8px] mt-[28px] mr-[12px]"></div>
            <h2 className="text-center mt-[20px]">WE ARE SANDBOX</h2>
            <div className="bg-[#ee64ff] rounded-[50%] w-[8px] h-[8px] mt-[28px] ml-[12px]"></div>
        </div>
        <div className="w-full text-center px-[380px] py-0 mt-[10px]">
            <h1 className="text-[90px] font-normal leading-none">Elevate your brand with creative solutions</h1>
        </div>
        <div>

        </div>
        <div>
          <h2 className="text-center text-[60px] font-normal leading-none">
            Elevate your digital<img className="w-[100px] rounded-[50px]" src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f5a97dc6142aa5d1e24cc8_Text%20Images%2001.jpg" alt="SnowWoman " />
            presence with distinction, immerse in boundless creativity. Our team of 
            <span></span>
            designers and development trailblazers ignites your 
            <span></span> 
            digital vision
          </h2>
        </div>
        <div className="flex mt-[60px] ml-[375px]">
          <div className="font-normal leading-none">
            <p className="text-[90px]">3+</p>
            <p className="text-[20px] text-[rgb(82,_82,_82)]">Years of experiance</p>
          </div>
          <div className="font-normal leading-none ml-[190px]">
            <p className="text-[90px] leading-none">40+</p>
            <p className="text-[20px] text-[rgb(82,_82,_82)]">Satisfied clients</p>
          </div>
          <div className="font-normal leading-none ml-[190px]">
            <p className="text-[90px] leading-none">100+</p>
            <p className="text-[20px] text-[rgb(82,_82,_82)]">Projects delivered</p>
          </div>
        </div>
        <div>
          <div className="flex mt-[120px]">
            <div className="bg-[white] w-[28.5%] h-[600px] ml-[5.5%]">
              <div className="pt-[80px] pl-[60px] pr-[60px]">
                <h2 className="text-[26px]">Transform your business identity through expert branding strategies</h2>
                <p className="mt-[20px] text-[18px] text-[gray]">Elevate your brand’s presence with tailored solutions that resonate with your brand</p>
                <p className="text-[185px] text-[lightgray] mt-[4px] ml-[4px] transition-all duration-1000 hover:text-[black]">01</p>
              </div>
            </div>
            <div className="bg-[white] w-[28.5%] h-[600px] ml-[2%]">
              <div className="pt-[80px] pl-[60px] pr-[60px]">
                <h2 className="text-[26px]">Unlock innovative web solutions with cutting-edge development</h2>
                <p className="mt-[20px] text-[18px] text-[gray]">Our team crafts seamless digital experiences to drive results and business growth</p>
                <p className="text-[185px] text-[lightgray] mt-[4px] ml-[4px] transition-all duration-1000 hover:text-[black]">02</p>
              </div>
            </div>
            <div className="bg-[white] w-[28.5%] h-[600px] ml-[2%]">
              <div className="pt-[80px] pl-[60px] pr-[56px]">
                <h2 className="text-[26px]">Design intuitive user interfaces for exceptional user experiences</h2>
                <p className="mt-[20px] text-[18px] text-[gray]">We create user-centered designs that enhance engagement and usability</p>
                <p className="text-[185px] text-[lightgray] mt-[4px] ml-[4px] transition-all duration-1000 hover:text-[black]">03</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
          <Link to="/contact">
            <button type="submit" className="bg-black mt-[100px] px-[50px] py-[15px] text-white text-[20px] rounded-[4px] transition-all duration-250 hover:bg-[#ee64ff]">
              GET STARTED
            </button>
          </Link>
          </div>
        </div>
        <div>
          <div>
            <div className="mt-[220px] text-center">
              <h2 className="text-[60px] font-bold px-[530px] py-0 font-normal leading-none">Showcasing creative and impactful solutions</h2>
              <p className="text-[18px] mt-[20px] px-[570px] py-0 text-[rgb(82,_82,_82)]">Explore our work to see the transformative power of creative solutions and envision what we can accomplish together.</p>
            </div>
            <div className="p-[0]">
                    <div className="flex mt-[100px] w-[100%]">
                        <Link to="/Astronaut" className="w-[49%]">
                            <div className="bg-[white] h-[670px] ml-[5%] rounded-[10px]">
                                <div><img className="w-[100%] rounded-tl-[10px] rounded-tr-[10px]" src={Astronaut } alt="Astronaut " /></div>
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
                                <div><img className="w-[100%] rounded-tl-[10px] rounded-tr-[10px]" src={SportsCar } alt="SportsCar " /></div>
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
                    <div className="flex mt-[50px]">
                        <Link to="/PurpleTape" className="w-[49%]">
                            <div className="bg-[white] h-[670px] ml-[5%] rounded-[10px]">
                                <div><img className="w-[100%] rounded-tl-[10px] rounded-tr-[10px]" src={PurpleTape } alt="PurpleTape " /></div>
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
                                <div><img className="w-[100%] rounded-tl-[10px] rounded-tr-[10px]" src={DiskPlayer } alt="DiskPlayer " /></div>
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
          </div>
        </div>
        <div>
          <div>
            <h2 className="text-[20px] text-center mt-[150px]">TRUSTED BY DESIGN TEAMS AT</h2>
          </div>
          <div>
            <div className="flex ml-[260px] mt-[50px]">
              <img className="w-[70px] rounded-tl-[10px] rounded-tr-[10px]" src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f6c0eea96082cb298f4d2f_Logo%20(1).svg" alt="BrandLogo_1 " />
              <img className="ml-[130px] w-[220px] rounded-tl-[10px] rounded-tr-[10px]" src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f6c0ee6f18a50f9c2e35c5_Logo%20(3).svg" alt="BrandLogo_2 " />
              <img className="ml-[150px] rounded-tl-[10px] rounded-tr-[10px]" src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f6c0ee50a3aec7862e1bfc_Logo%20(5).svg" alt="BrandLogo_3 " />
              <img className="ml-[160px] w-[160px] rounded-tl-[10px] rounded-tr-[10px]" src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f6c0ee56fd90d2a8637444_Logo%20(7).svg" alt="BrandLogo_4 " />
              <img className="ml-[100px] w-[160px] rounded-tl-[10px] rounded-tr-[10px]" src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f6c0eed4af88e6a83c1fa5_Logo%20(9).svg" alt="BrandLogo_5 " />
            </div>
            <div className="flex ml-[220px] mt-[70px]">
              <img className="w-[150px] rounded-tl-[10px] rounded-tr-[10px]" src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f6c0ee91c5cef81eee02c4_Logo%20(2).svg" alt="BrandLogo_6 " />
              <img className="ml-[180px] rounded-tl-[10px] rounded-tr-[10px]" src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f6c0ee0613a9c7dcaf0b03_Logo%20(4).svg" alt="BrandLogo_7 " />
              <img className="ml-[150px] w-[190px] rounded-tl-[10px] rounded-tr-[10px]" src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f6c0ee00cedcbb712bb01e_Logo%20(6).svg" alt="BrandLogo_8 " />
              <img className="ml-[150px] rounded-tl-[10px] rounded-tr-[10px]" src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f6c0ee8db6576bccc0c163_Logo%20(8).svg" alt="BrandLogo_9 " />
              <img className="ml-[150px] w-[160px] rounded-tl-[10px] rounded-tr-[10px]" src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f6c0ee4ef06712b61cb996_Logo%20(10).svg" alt="BrandLogo_10 " />
            </div>
          </div>
        </div>
        <div>
          <div className="mt-[220px] text-center">
            <h2 className="text-[60px] font-bold px-[530px] py-0 font-normal leading-none">Voices of satisfaction and success</h2>
            <p className="text-[18px] mt-[20px] px-[570px] py-0 text-[rgb(82,_82,_82)]">We take pride in building lasting partnerships and delivering solutions that exceed expectations.</p>
          </div>
          <div className="flex justify-center mt-[80px]">
            <img className="rounded-[50%] transition-all duration-400 w-[55px] cursor-pointer h-[55px] p-[15px] mt-[170px] mr-[160px] border-[0.5px] border-[solid] border-[lightgray] hover:bg-[#ee64ff]" src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f5c15fdb3c3c74e3cddbb8_Left%20Slider%20Arrow.svg" alt="Arrow_left " />
            <div className="bg-[white] w-[58%] h-[400px] rounded-[14px]"></div>
            <img className="rounded-[50%] transition-all duration-400 w-[55px] cursor-pointer h-[55px] p-[15px] mt-[170px] ml-[160px] border-[0.5px] border-[solid] border-[lightgray] hover:bg-[#ee64ff]" src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f5c15fdb3c3c74e3cddbf7_Right%20Slider%20Arrow.svg" alt="Arrow_right " />   
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;