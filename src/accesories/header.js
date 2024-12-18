import { useState } from 'react';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative">
      {/* Header Section */}
      <div className="bg-[#efefef] w-full sm:static h-[90px] px-[2%] py-0 relative z-[60]">
        <div className="flex-row justify-between items-center sm:pt-[2%] sm:pt-[3%] pt-[1%] flex">
          <Link to="/" className="pl-[5%] pr-0 py-0">
            <img src={logo} alt="Logo" />
          </Link>
          <div className="justify-end items-center w-full flex">
            <div className="gap-x-[8%] sm:flex hidden items-center mr-[8%] text-[120%]">
              <Link
                to="/portfolio"
                className="text-[#151515] items-center px-[.75rem]  no-underline [transition:all_.25s] flex hover:text-[grey] hover:mt-[2px]"
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className="text-[#151515] items-center px-[.75rem]  no-underline [transition:all_.25s] flex hover:text-[grey] hover:mt-[2px]"
              >
                Contact
              </Link>
            </div>
            <div
              className={`sm:hidden block mr-[20px] pt-[10px] pr-[10px] pl-[10px] pb-[2px] sm:mr-0 cursor-pointer rounded ${
                isMenuOpen ? 'bg-[#ee64ff] text-[white]' : ''
              }`}
              onClick={toggleMenu}
            >
              <i className="material-icons">menu</i>
            </div>
          </div>
        </div>
      </div>

      {/* Sliding Popup Menu */}
      <div
        className={`absolute top-[90px] sm:hidden left-0 w-full bg-[#efefef] text-center z-[50] transform transition-transform duration-500 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="py-[20px]">
          <Link to="/portfolio" className="text-[#151515] text-center no-underline block">
            Portfolio
          </Link>
        </div>
        <div className="py-[20px]">
          <Link to="/contact" className="text-[#151515] text-center no-underline block">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
