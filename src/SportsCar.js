import Header from './accesories/header';
import Footer from './accesories/footer';
import SportsCar_2  from './img/SportsCar_2.png';
import SportsCar_3  from './img/SportsCar_3.png';
import SportsCar_4  from './img/SportsCar_4.png';
import SportsCar_5  from './img/SportsCar_5.png';
import SportsCar_6  from './img/SportsCar_6.png';
import SportsCar_7  from './img/SportsCar_7.png';
import SportsCar_8  from './img/SportsCar_8.png';

function SportsCar() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <div className="flex justify-center">
                    <div className="bg-[#ee64ff] rounded-[50%] w-[8px] h-[8px] mt-[28px] mr-[12px]"></div>
                    <h2 className="text-center mt-[20px]">PUBLISHED - OCTOBER 1, 2024</h2>
                    <div className="bg-[#ee64ff] rounded-[50%] w-[8px] h-[8px] mt-[28px] ml-[12px]"></div>
                </div>
                <div className="w-full text-center px-[20%] py-0 mt-[10px]">
                    <h1 className="text-[90px] font-normal leading-none">Journey of Objects</h1>
                </div>
                <div>
                    <img className="w-[80%] ml-[10%] mt-[100px] rounded-[20px] object-cover object-center h-[600px]" src={SportsCar_2 } alt="SportsCar_2 " />
                </div>
                <div className="pr-[28%] pl-[28%] mt-[200px]">
                    <p className="text-center text-[160%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div>
                    <img className="w-[80%] ml-[10%] mt-[100px] object-cover object-center h-[500px]" src={SportsCar_3 } alt="SportsCar_3 " />
                    <img className="w-[80%] ml-[10%] mt-[70px] object-cover object-center h-[500px]" src={SportsCar_4 } alt="SportsCar_4 " />
                </div>
                <div className="pr-[28%] pl-[28%] mt-[140px]">
                    <p className="text-center text-[160%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div>
                    <img className="w-[80%] ml-[10%] mt-[100px] object-cover object-center h-[480px]" src={SportsCar_5 } alt="SportsCar_5 " />
                </div>
                <div className="pr-[28%] pl-[28%] mt-[140px]">
                    <p className="text-center text-[160%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div>
                    <img className="ml-[280px] mt-[100px] object-cover object-center h-[720px] w-[660px]" src={SportsCar_6 } alt="SportsCar_6 " />
                    <img className=" ml-[45%] mt-[100px] object-cover object-center h-[720px] w-[660px]" src={SportsCar_7 } alt="SportsCar_7 " />
                </div>
                <div className="pr-[28%] pl-[28%] mt-[100px]">
                    <p className="text-center text-[160%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div>
                    <img className="w-[80%] ml-[10%] mb-[40px] mt-[100px] object-cover object-center h-[480px]" src={SportsCar_8 } alt="SportsCar_8 " />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default SportsCar;