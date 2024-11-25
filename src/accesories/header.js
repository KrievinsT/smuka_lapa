import logo from '../img/logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-[#efefef] w-full h-[90px] px-[24px] py-0">
        <div className="gap-x-[1.75rem] gap-y-[1.75rem] flex-row justify-between items-center pt-[1.3rem] pb-[1.3rem] flex">
          <Link to="/" className="pl-[100px] pr-0 py-0"><img src={logo} alt="Logo" /></Link>
          <div className="gap-x-[1rem] gap-y-[1rem] justify-end items-center w-full flex">
            <div className="gap-x-[30px] gap-y-[.8rem] items-center flex mr-[100px] text-[120%]">
              <Link to="/portfolio" className="text-[#151515] items-center px-[.75rem]  no-underline [transition:all_.25s] flex hover:text-[grey] hover:mt-[2px]">Portfolio</Link>
              <Link to="/contact" className="text-[#151515] items-center px-[.75rem]  no-underline [transition:all_.25s] flex hover:text-[grey] hover:mt-[2px]">Contact</Link>
            </div>
          </div>
        </div>
      </header>
    )
  }
  export default Header;