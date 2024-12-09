import logo from '../img/logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-[#efefef] w-full h-[90px] px-[2%] py-0">
        <div className="flex-row justify-between items-center pt-[2%] flex">
          <Link to="/" className="pl-[5%] pr-0 py-0"><img src={logo} alt="Logo" /></Link>
          <div className="justify-end items-center w-full flex">
            <div className="gap-x-[8%] items-center flex mr-[8%] text-[120%]">
              <Link to="/portfolio" className="text-[#151515] items-center px-[.75rem]  no-underline [transition:all_.25s] flex hover:text-[grey] hover:mt-[2px]">Portfolio</Link>
              <Link to="/contact" className="text-[#151515] items-center px-[.75rem]  no-underline [transition:all_.25s] flex hover:text-[grey] hover:mt-[2px]">Contact</Link>
            </div>
          </div>
        </div>
      </header>
    )
  }
  export default Header;