import Header from './header';
import Footer from './footer';
function Contact() {
    return (
        <div>
            <Header />
            <main>
                <div className="flex justify-center">
                    <div className="bg-[#ee64ff] rounded-[50%] w-[8px] h-[8px] mt-[28px] mr-[12px]"></div>
                    <h2 className="text-center mt-[20px]">AVAILABLE FOR WORK</h2>
                    <div className="bg-[#ee64ff] rounded-[50%] w-[8px] h-[8px] mt-[28px] ml-[12px]"></div>
                </div>
                <div className="w-full text-center px-[500px] py-0 mt-[10px]">
                    <h1 className="text-[90px] font-normal leading-none">Let's bring your vision to life</h1>
                </div>
                <div>
                    <input></input>
                    <input></input>
                    <input></input>
                </div>
            </main>
            <Footer />
        </div>
    )
  }
  export default Contact;