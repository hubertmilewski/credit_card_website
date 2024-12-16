import { useState, useCallback } from "react";
import { useLocation, Link, useNavigate } from 'react-router-dom';

function Header() {
  const [navbar, setNavbar] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isCreatorPage = location.pathname === "/creator";

  const changeNavbar = useCallback(() => {
    if (navbar) {
      setIsClosing(true);
      setTimeout(() => {
        setNavbar(false);
        setIsClosing(false);
      }, 300);
    } else {
      setNavbar(true);
    }
  }, [navbar]);

  const handleNavigate = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const navigationItems = isCreatorPage
    ? [{ text: "Return To Page", href: "#home", onClick: handleNavigate }]
    : [
        { text: "Home", href: "#home" },
        { text: "Sample cards", href: "#sampleCards" },
        { text: "About Us", href: "#aboutus" },
        { text: "Order process", href: "#orderprocess" },
        { text: "Contact", href: "#contact" }
      ];

  const iconClasses = navbar
    ? "fa-solid fa-chevron-up text-xl xl:hidden"
    : "fa-solid fa-chevron-down motion-preset-shake text-xl xl:hidden";

  const navLinkClasses = "transition-colors duration-300 text-[#FFF7F0]";

  const renderNavigation = navigationItems.map((item, index) => (
    <li key={index} className="relative group">
      <a onClick={item.onClick || undefined} href={item.href} className={navLinkClasses}>
        {item.text}
      </a>
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#FFF7F0] transition-all duration-300 group-hover:w-full"></span>
    </li>
  ));

  return (
    <header className={`${navbar ? "h-screen" : "h-0"} fixed inset-0 w-full text-[#FFF7F0] pt-5 xl:pt-8 z-50 motion-preset-expand`}>
      <div className="flex items-center justify-between px-8 xl:px-[6%]">
        <Link to="#home" className="font-bold text-2xl xl:text-3xl text-shadow">
          <span className="text-blue-200">Card</span>Crafter
        </Link>

        {!isCreatorPage && (
          <nav className="hidden xl:flex">
            <ul className="flex space-x-8 font-medium xl:text-xl lg:text-lg">
              {renderNavigation}
            </ul>
          </nav>
        )}

        {isCreatorPage && (
          <nav className="hidden xl:flex">
            <ul className="flex space-x-8 font-medium xl:text-xl lg:text-lg">
              {renderNavigation}
            </ul>
          </nav>
        )}

        <i onClick={changeNavbar} className={iconClasses} aria-label={navbar ? "Close menu" : "Open menu"}></i>
      </div>

      {navbar && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-40" onClick={changeNavbar}>
          <nav>
            <ul className={`absolute inset-x-0 bottom-0 text-left space-y-4 font-semibold text-lg w-full bg-[#333] rounded-t-md px-8 py-4 transform transition-transform duration-300 ease-in-out ${isClosing ? "translate-y-full" : "motion-translate-x-in-[0%] motion-translate-y-in-[100%]"}`}>
              <div className="flex items-center justify-between">
                <h2 className="text-blue-200">Select side</h2>
                <i onClick={changeNavbar} className="fa-solid fa-xmark text-blue-200"></i>
              </div>
              {renderNavigation}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
