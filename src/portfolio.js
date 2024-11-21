import Header from './header';
import Footer from './footer';
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
            </main>
            <Footer />
        </div>
    )
  }
  export default Portfolio;