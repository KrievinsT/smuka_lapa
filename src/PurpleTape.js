import Header from './accesories/header';
import Footer from './accesories/footer';
import PurpleTape_2  from './img/PurpleTape_2.png';
import PurpleTape_3  from './img/PurpleTape_3.png';
import PurpleTape_4  from './img/PurpleTape_4.png';
import PurpleTape_5  from './img/PurpleTape_5.png';
import PurpleTape_6  from './img/PurpleTape_6.png';
import PurpleTape_7  from './img/PurpleTape_7.png';
import PurpleTape_8  from './img/PurpleTape_8.png';

function PurpleTape() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <div className="flex justify-center">
                    <div className="bg-[#ee64ff] rounded-[50%] w-[8px] h-[8px] mt-[28px] mr-[12px]"></div>
                    <h2 className="text-center mt-[20px]">PUBLISHED - OCTOBER 1, 2024</h2>
                    <div className="bg-[#ee64ff] rounded-[50%] w-[8px] h-[8px] mt-[28px] ml-[12px]"></div>
                </div>
                <div className="w-full text-center px-[40%] py-0 mt-[10px]">
                    <h1 className="text-[90px] font-normal leading-none">Steezy</h1>
                </div>
                <div>
                    <img className="w-[80%] ml-[10%] mt-[100px] rounded-[20px] object-cover object-center h-[600px]" src={PurpleTape_2 } alt="PurpleTape_2 " />
                </div>
                <div className="pr-[28%] pl-[28%] mt-[200px]">
                    <p className="text-center text-[160%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div>
                    <img className="w-[80%] ml-[10%] mt-[100px] object-cover object-center h-[500px]" src={PurpleTape_3 } alt="PurpleTape_3 " />
                    <img className="w-[80%] ml-[10%] mt-[70px] object-cover object-center h-[500px]" src={PurpleTape_4 } alt="PurpleTape_4 " />
                </div>
                <div className="pr-[28%] pl-[28%] mt-[140px]">
                    <p className="text-center text-[160%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div>
                    <img className="w-[80%] ml-[10%] mt-[100px] object-cover object-center h-[480px]" src={PurpleTape_5 } alt="PurpleTape_5 " />
                </div>
                <div className="pr-[28%] pl-[28%] mt-[140px]">
                    <p className="text-center text-[160%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div>
                    <img className="w-[80%] ml-[17%] mt-[100px] object-cover object-center h-[720px] w-[660px]" src={PurpleTape_6 } alt="PurpleTape_6 " />
                    <img className="w-[80%] ml-[45%] mt-[100px] object-cover object-center h-[720px] w-[660px]" src={PurpleTape_7 } alt="PurpleTape_7 " />
                </div>
                <div className="pr-[28%] pl-[28%] mt-[100px]">
                    <p className="text-center text-[160%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div>
                    <img className="w-[80%] ml-[10%] mb-[40px] mt-[100px] object-cover object-center h-[480px]" src={PurpleTape_8 } alt="PurpleTape_8 " />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default PurpleTape;