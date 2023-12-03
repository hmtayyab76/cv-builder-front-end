import React, { useState, useEffect } from "react";
import lg from "../../assets/lg.png";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";

function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  const NavLinkItem = ({ item, children }) => {
    return (
      <Link to={`/${item.replace(" ", "-").toLowerCase()}`}>{children}</Link>
    );
  };
  // Function to handle scrolling
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isOpenNav, setIsOpenNav] = useState(false);

  const toggle = () => {
    setIsOpenNav(!isOpenNav);
  };

  const closeMobileMenu = () => {
    setIsOpenNav(false);
  };

  return (
    <div
      id="header"
      className={`w-full flex items-center justify-between sticky top-0 h-auto bg-white px-8 py-1  z-10 ${
        hasScrolled ? "shadow" : ""
      }`}
    >
      <NavLinkItem item="">
        <div className="flex items-center w-auto">
          <div className="w-10 h-7 items-center">
            <a href="2">
              <img src={lg} alt="Logo" />
            </a>
          </div>
          <div className="font-bold text-2xl pb-1 text-blue-400 font-mono">
            <a href="2">novoresume</a>
          </div>
        </div>
      </NavLinkItem>
      <div className="max-lg:hidden">
        {<NavLinks closeMobileMenu={closeMobileMenu} />}
      </div>
      <div className="hidden max-lg:block">
        <i className="fa-solid fa-bars cursor-pointer" onClick={toggle}></i>
        {isOpenNav && <NavLinks closeMobileMenu={closeMobileMenu} />}
      </div>
    </div>
  );
}

export default Header;
