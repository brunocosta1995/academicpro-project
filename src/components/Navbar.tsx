import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = isScrolled ? "bg-gray-400 shadow-md" : "bg-gray-400";

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${navbarClasses}`}
    >
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <BookOpen className="h-8 w-8 text-primary-600" />
            <span className="ml-2 text-xl font-serif font-bold text-primary-900">
              AcademicPro
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "hover:bg-gray-200 text-black font-medium rounded-md bg-white text-center px-6 py-2"
                  : "hover:bg-gray-200 text-black font-medium rounded-md bg-white text-center px-6 py-2"
              }
            >
              Início
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "hover:bg-gray-200 text-black font-medium rounded-md bg-white text-center px-6 py-2"
                  : "hover:bg-gray-200 text-black font-medium rounded-md bg-white text-center px-6 py-2"
              }
            >
              Serviços
            </NavLink>
            <NavLink
              to="/how-it-works"
              className={({ isActive }) =>
                isActive
                  ? "hover:bg-gray-200 text-black font-medium rounded-md bg-white text-center px-6 py-2"
                  : "hover:bg-gray-200 text-black font-medium rounded-md bg-white text-center px-6 py-2"
              }
            >
              Como Funciona
            </NavLink>

            <a
              href="#depoimentos"
              className="hover:bg-orange-400 text-black font-medium rounded-md bg-orange-300 text-center px-6 py-2"
            >
              Depoimentos
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden"
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          variants={menuVariants}
        >
          {isMenuOpen && (
            <nav className="flex flex-col space-y-4 mt-4 pb-4">
              <NavLink
                to="/"
                className={
                  ({ isActive }) =>
                    isActive
                      ? "hover:bg-gray-200 text-black font-medium rounded-md bg-white text-center p-1 mx-12" //design especificado
                      : "hover:bg-gray-200 text-black font-medium rounded-md bg-white text-center p-1 mx-12"
                  // : 'text-gray-700 hover:text-primary-600 transition-colors'
                }
                onClick={closeMenu}
              >
                Início
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "hover:bg-gray-200 text-black font-medium rounded-md bg-white text-center p-1 mx-12"
                    : "hover:bg-gray-200 text-black font-medium rounded-md bg-white text-center p-1 mx-12"
                }
                onClick={closeMenu}
              >
                Serviços
              </NavLink>
              <NavLink
                to="/how-it-works"
                className={({ isActive }) =>
                  isActive
                    ? "hover:bg-gray-200 text-black font-medium rounded-md bg-white text-center p-1 mx-12"
                    : "hover:bg-gray-200 text-black font-medium rounded-md bg-white text-center p-1 mx-12"
                }
                onClick={closeMenu}
              >
                Como Funciona
              </NavLink>
              <a
              href="#depoimentos"
              className="hover:bg-orange-400 text-black font-medium rounded-md bg-orange-300 text-center p-1 mx-12"
            >
              Depoimentos
            </a>
            </nav>
          )}
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;
