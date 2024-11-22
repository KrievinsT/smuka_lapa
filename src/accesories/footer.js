import logo from '../img/logo.png';

function Footer() {
  return (
    <div>
      <footer className="w-full pt-[160px] px-[0] pb-[48px] h-auto flex justify-center flex-wrap">
        <div className="w-full flex justify-center"><img src={logo} alt="Logo" /></div>
        <div className="mt-[80px] text-[18px] w-full flex justify-center">
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