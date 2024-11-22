import Header from './accesories/header';
import Footer from './accesories/footer';
import { Link } from 'react-router-dom';
import Astronaut  from './img/Astronaut.png';
import DiskPlayer from './img/DiskPlayer.png';
import PurpleTape from './img/PurpleTape.png';
import SportsCar from './img/SportsCar.png';

function Portfolio() {
    return (
        <div>
            <Header />
            <main>
                <div className="flex justify-center">
                    <div className="bg-[#ee64ff] rounded-[50%] w-[8px] h-[8px] mt-[28px] mr-[12px]"></div>
                    <h2 className="text-center mt-[20px]">WE ARE SANDBOX</h2>
                    <div className="bg-[#ee64ff] rounded-[50%] w-[8px] h-[8px] mt-[28px] ml-[12px]"></div>
                </div>
                <div className="w-full text-center px-[500px] py-0 mt-[10px]">
                    <h1 className="text-[90px] font-normal leading-none">Where vision meets excellence</h1>
                </div>
                <div>
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
            </main>
            <Footer />
        </div>
    )
  }
  export default Portfolio;