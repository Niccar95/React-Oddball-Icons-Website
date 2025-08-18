import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const { pathname } = location;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 flex justify-between items-center h-[60px] px-4 md:px-8 border-b border-gray-200 bg-white z-50">
        <h3 className="logo text-[14px] md:text-[18px] font-semibold">
          / REACT ODDBALL ICONS /
        </h3>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex w-1/2">
          <ul className="flex w-full justify-end gap-[3rem]">
            <li>
              <NavLink
                to="/"
                className={`hover:text-gray-700 ${
                  pathname === "/" ? "pb-1 border-b-2 border-solid" : ""
                }`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/docs"
                className={`hover:text-gray-700 ${
                  pathname === "/docs" ? "pb-1 border-b-2 border-solid" : ""
                }`}
              >
                Docs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/news"
                className={`hover:text-gray-700 ${
                  pathname === "/news" ? "pb-1 border-b-2 border-solid" : ""
                }`}
              >
                News
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Hamburger menu (mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded hover:bg-gray-100"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </header>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="md:hidden fixed top-[60px] left-0 right-0 bg-white border-b border-gray-200 z-40">
          <ul className="flex flex-col gap-4 p-4">
            <li>
              <NavLink
                to="/"
                className={`hover:text-gray-700 ${
                  pathname === "/" ? "pb-1 border-b-2 border-solid" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/docs"
                className={`hover:text-gray-700 ${
                  pathname === "/docs" ? "pb-1 border-b-2 border-solid" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Docs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/news"
                className={`hover:text-gray-700 ${
                  pathname === "/news" ? "pb-1 border-b-2 border-solid" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                News
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
      <main className="pt-[60px] min-h-screen">
        <Outlet />
      </main>

      <footer className="flex flex-col md:flex-row justify-between items-center md:items-end p-6 min-h-[200px] border-t border-gray-200">
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-sm font-medium text-gray-700">
            Also available on
          </h3>
          <ul className="flex gap-4 text-2xl text-gray-600">
            <li>
              <a
                href="https://github.com/Niccar95/React-Oddball-Icons-npm-package"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition-colors"
              >
                <i className="ci ci-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/react-oddball-icons?activeTab=readme"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition-colors"
              >
                <i className="ci ci-npm"></i>
              </a>
            </li>
          </ul>
        </div>

        <p className="text-gray-400 font-light text-[14px]">
          &copy; {new Date().getFullYear()} React Oddball Icons — ISC License
        </p>
      </footer>
    </>
  );
};

export default Layout;
