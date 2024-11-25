import logo from '../img/logo.png';

function Footer() {
  return (
    <div>
      <footer className="w-full pt-[160px] px-[0] pb-[48px] h-auto flex justify-center opacity-0 flex-wrap">
        <div className="w-full flex justify-center"><img src={logo} alt="Logo" /></div>
        <div className="flex justify-center mt-[50px] space-x-[30px]">
            <div className="rounded-[50%] transition-all duration-400 cursor-pointer hover:bg-[#ee64ff] hover:mt-[-1px]"> <img className=" w-[42px] h-[42px] p-[10px]" src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f5c6a83a9b7ca7d4b83724_Vector.svg" alt="Twitter " /> </div>
            <div className="rounded-[50%] transition-all duration-400 cursor-pointer hover:bg-[#ee64ff] hover:mt-[-1px]"> <img className=" w-[42px] h-[42px] p-[10px]" src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f5c6a86b7a95c9ed855c5d_Vector-1.svg" alt="Facebook " /> </div>
            <div className="rounded-[50%] transition-all duration-400 cursor-pointer hover:bg-[#ee64ff] hover:mt-[-1px]"> <img className=" w-[42px] h-[42px] p-[10px]" src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f5c6a890c7d518e61c7ff8_logo-instagram%201.svg" alt="Instagram " /> </div>
            <div className="rounded-[50%] transition-all duration-400 cursor-pointer hover:bg-[#ee64ff] hover:mt-[-1px]"> <img className=" w-[42px] h-[42px] p-[10px]" src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f5c6a8d1a589034766a87e_logo-github%201.svg" alt="Github " /> </div>
        </div>
        <div className="mt-[90px] text-[18px] w-full flex justify-center">
            <a href="" className="no-underline [transition:all_.25s] mr-[18px] hover:text-[grey] hover:mt-[-5px]">Style Guide</a><span className="text-[gray]"> | </span> <a href="https://templatestudio.webflow.io/" className="no-underline [transition:all_.25s] ml-[18px] hover:text-[grey] hover:mt-[-5px]"> Customize</a>
        </div>
        <div className="mt-[16px] text-[18px]">
          <p>Copyright © 
            <a href="https://webflow.com/templates/designers/lucas-gusso" className="no-underline [transition:all_.25s] ml-[16px] mr-[10px] hover:text-[#b4b3b3]">
            <span className="text-[gray] no-underline [transition:all_.25s] hover:text-[#b4b3b3]">Design & Developed by </span> 
            Lucas Gusso </a> 
            <a href="https://webflow.com/" className="no-underline [transition:all_.25s] mr-[10px] hover:text-[#b4b3b3]">
            <span className="text-[gray] no-underline [transition:all_.25s] hover:text-[#b4b3b3]">Powered by </span>Webflow</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;