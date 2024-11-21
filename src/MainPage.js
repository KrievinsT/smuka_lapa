import './styles/App.css';
import Header from './header';
import Footer from './footer';

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
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;