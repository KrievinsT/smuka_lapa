import Header from './accesories/header';
import Footer from './accesories/footer';

function Contact() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <div className="flex justify-center">
                    <div className="bg-[#ee64ff] rounded-[50%] w-[8px] h-[8px] mt-[28px] mr-[12px]"></div>
                    <h2 className="text-center mt-[20px]">AVAILABLE FOR WORK</h2>
                    <div className="bg-[#ee64ff] rounded-[50%] w-[8px] h-[8px] mt-[28px] ml-[12px]"></div>
                </div>
                <div className="w-full text-center px-[500px] py-0 mt-[10px]">
                    <h1 className="text-[90px] font-normal leading-none">Let's bring your vision to life</h1>
                </div>
                <div className="mt-[150px] flex justify-center flex-wrap">
                    <form className="flex flex-col items-center w-[90%] max-w-[500px] mb-[50px]">
                        <label htmlFor="name" className="w-[560px] text-[#151515] text-left">Name</label>
                        <input
                            id="name"
                            placeholder="Enter your name"
                            className="mt-[16px] bg-[#efefef] text-[17px] pl-[18px] w-[560px] h-[50px] border-none border-b-2 border-gray-400 transition-all duration-400  hover:pl-[21px] hover:border-[1px] hover:border-[solid] hover:border-[#525252] focus:outline-none focus:border-[#000000] "
                            required
                        />
                        <label htmlFor="email" className="w-[560px] text-[#151515] text-left mt-[26px]">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your e-mail"
                            className="mt-[16px] bg-[#efefef] text-[17px] pl-[18px] w-[560px] h-[50px] border-none border-b-2 border-gray-400 transition-all duration-400  hover:pl-[21px] focus:border-[#000000] focus:outline-none"
                            required
                        />
                        <label htmlFor="message" className="w-[560px] text-[#151515] text-left mt-[26px]">Message</label>
                        <textarea
                            id="message"
                            placeholder="Your message..."
                            className="mt-[16px] bg-[#efefef] text-[17px] pl-[18px] pt-[20px] w-[560px] h-[100px] border-none border-b-2 border-gray-400 transition-all duration-400  hover:pl-[21px] focus:border-[#000000] focus:outline-none"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-black mt-[50px] px-[50px] py-[15px] text-white text-[20px] font-bold rounded-[4px] transition-all duration-250 hover:bg-[#ee64ff]"
                        >
                            SUBMIT
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Contact;
