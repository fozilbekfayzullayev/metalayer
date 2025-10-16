import { Link } from "react-scroll";
import { logoDesktop } from "../assets/image";
import { useState } from "react";
import { Menu, MenuIcon, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { label: "продукты", link: "product" },
    { label: "о нас", link: "about" },
    { label: "контакты", link: "contact" },
  ];

  return (
    <>
      <div className="custom-container flex items-center justify-between py-3.5 md:py-5">
        <div className="navbar-brand">
          <Link
            to="/"
            className="cursor-pointer hover:opacity-65 duration-75 ease-in"
          >
            <img src={logoDesktop} alt="Metalayer prof logo" />
          </Link>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex text-lg space-x-10 cursor-pointer uppercase">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                smooth={true}
                duration={500}
                className="hover:text-gold duration-75 ease-in"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger menu */}
        <div
          className="md:hidden cursor-pointer z-99"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <MenuIcon />}
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <ul className="flex md:hidden flex-col space-y-4 uppercase bg-white px-6 shadow absolute top-0 left-0 w-full h-screen pt-24 cursor-pointer">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
