import Header from './accesories/header';
import Footer from './accesories/footer';
import DiskPlayer_2  from './img/DiskPlayer_2.png';
import DiskPlayer_3  from './img/DiskPlayer_3.png';
import DiskPlayer_4  from './img/DiskPlayer_4.png';
import DiskPlayer_5  from './img/DiskPlayer_5.png';
import DiskPlayer_6  from './img/DiskPlayer_6.png';
import DiskPlayer_7  from './img/DiskPlayer_7.png';
import DiskPlayer_8  from './img/DiskPlayer_8.png';

function DiskPlayer() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <div className="flex justify-center">
                    <div className="bg-[#ee64ff] rounded-[50%] w-[8px] h-[8px] mt-[28px] mr-[12px]"></div>
                    <h2 className="text-center mt-[20px]">PUBLISHED - OCTOBER 1, 2024</h2>
                    <div className="bg-[#ee64ff] rounded-[50%] w-[8px] h-[8px] mt-[28px] ml-[12px]"></div>
                </div>
                <div className="w-full text-center px-[500px] py-0 mt-[10px]">
                    <h1 className="text-[90px] font-normal leading-none">Art Not Evidence</h1>
                </div>
                <div>
                    <img className="w-[80%] ml-[10%] mt-[100px] rounded-[20px] object-cover object-center h-[600px]" src={DiskPlayer_2 } alt="DiskPlayer_2 " />
                </div>
                <div className="pr-[28%] pl-[28%] mt-[200px]">
                    <p className="text-center text-[160%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div>
                    <img className="w-[80%] ml-[10%] mt-[100px] object-cover object-center h-[500px]" src={DiskPlayer_3 } alt="DiskPlayer_3 " />
                    <img className="w-[80%] ml-[10%] mt-[70px] object-cover object-center h-[500px]" src={DiskPlayer_4 } alt="DiskPlayer_4 " />
                </div>
                <div className="pr-[28%] pl-[28%] mt-[140px]">
                    <p className="text-center text-[160%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div>
                    <img className="w-[80%] ml-[10%] mt-[100px] object-cover object-center h-[480px]" src={DiskPlayer_5 } alt="DiskPlayer_5 " />
                </div>
                <div className="pr-[28%] pl-[28%] mt-[140px]">
                    <p className="text-center text-[160%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div>
                    <img className="w-[80%] ml-[17%] mt-[100px] object-cover object-center h-[720px] w-[660px]" src={DiskPlayer_6 } alt="DiskPlayer_6 " />
                    <img className="w-[80%] ml-[45%] mt-[100px] object-cover object-center h-[720px] w-[660px]" src={DiskPlayer_7 } alt="DiskPlayer_7 " />
                </div>
                <div className="pr-[28%] pl-[28%] mt-[100px]">
                    <p className="text-center text-[160%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div>
                    <img className="w-[80%] ml-[10%] mb-[40px] mt-[100px] object-cover object-center h-[480px]" src={DiskPlayer_8 } alt="DiskPlayer_8 " />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default DiskPlayer;