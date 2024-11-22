import Header from './accesories/header';
import Footer from './accesories/footer';
import Astronaut_2  from './img/Astronaut_2.png';
import Astronaut_3  from './img/Astronaut_3.png';
import Astronaut_4  from './img/Astronaut_4.png';
import Astronaut_5  from './img/Astronaut_5.png';
import Astronaut_6  from './img/Astronaut_6.png';
import Astronaut_7  from './img/Astronaut_7.png';
import Astronaut_8  from './img/Astronaut_8.png';

function Astronaut() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <div className="flex justify-center">
                    <div className="bg-[#ee64ff] rounded-[50%] w-[8px] h-[8px] mt-[28px] mr-[12px]"></div>
                    <h2 className="text-center mt-[20px]">PUBLISHED - OCTOBER 1, 2024</h2>
                    <div className="bg-[#ee64ff] rounded-[50%] w-[8px] h-[8px] mt-[28px] ml-[12px]"></div>
                </div>
                <div className="w-full text-center px-[35%] py-0 mt-[10px]">
                    <h1 className="text-[90px] font-normal leading-none">GRO-OP</h1>
                </div>
                <div>
                    <img className="w-[80%] ml-[10%] mt-[100px] rounded-[20px] object-cover object-center h-[600px]" src={Astronaut_2 } alt="Astronaut_2 " />
                </div>
                <div className="pr-[28%] pl-[28%] mt-[200px]">
                    <p className="text-center text-[160%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div>
                    <img className="w-[80%] ml-[10%] mt-[100px] object-cover object-center h-[500px]" src={Astronaut_3 } alt="Astronaut_3 " />
                    <img className="w-[80%] ml-[10%] mt-[70px] object-cover object-center h-[500px]" src={Astronaut_4 } alt="Astronaut_4 " />
                </div>
                <div className="pr-[28%] pl-[28%] mt-[140px]">
                    <p className="text-center text-[160%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div>
                    <img className="w-[80%] ml-[10%] mt-[100px] object-cover object-center h-[480px]" src={Astronaut_5 } alt="Astronaut_5 " />
                </div>
                <div className="pr-[28%] pl-[28%] mt-[140px]">
                    <p className="text-center text-[160%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div>
                    <img className="w-[80%] ml-[17%] mt-[100px] object-cover object-center h-[720px] w-[660px]" src={Astronaut_6 } alt="Astronaut_6 " />
                    <img className="w-[80%] ml-[45%] mt-[100px] object-cover object-center h-[720px] w-[660px]" src={Astronaut_7 } alt="Astronaut_7 " />
                </div>
                <div className="pr-[28%] pl-[28%] mt-[100px]">
                    <p className="text-center text-[160%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div>
                    <img className="w-[80%] ml-[10%] mb-[40px] mt-[100px] object-cover object-center h-[480px]" src={Astronaut_8 } alt="Astronaut_8 " />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Astronaut;