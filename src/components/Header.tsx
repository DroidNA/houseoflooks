import { Link } from "react-router-dom";
import siteLogo from "../../public/logo-bl-t.svg";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import myFont from '../fonts/GetVoIPGrotesque.ttf';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>    
    <style>
        {`
          @font-face {
            font-family: 'MyFont';
            src: url(${myFont}) format('woff2');
            font-weight: normal;
            font-style: normal;
          }

          .font-face-logo {
            font-family: 'MyFont', sans-serif;
          }
        `}
      </style>
      <div className="header  flex items-center justify-between p-2 sm:p-4 text-slate-900">
        <Link to="/">
          <img
            src={siteLogo}
            className="w-18 sm:w-28"
            alt="House Of Looks logo"
          />
        </Link>
        <h1 className="font-face-logo text-2xs sm:text-3xl text-slate-700">
          HOUSE OF LOOKS
        </h1>

        <nav className="nav hidden sm:flex items-center gap-4 p-5">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <FaBars className="sm:hidden w-18" onClick={() => toggleMenu()} />
      </div>
      <div
        className={`flex flex-col z-10 absolute transition-all ease-in-out duration-1000 ${
          isMenuOpen ? "translate-x-0 " : "-translate-x-full"
        }  sm:hidden items-center gap-4 justify-center fixed left-0   w-3/4 h-screen bg-slate-100 p-4 rounded-lg shadow-md`}
      >
        <Link to="/">Home</Link>
        {/* <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link> */}
        <button className="absolute top-4 right-4" onClick={() => toggleMenu()}>
          Close
        </button>
      </div>
    </>
  );
};

export default Header;
