import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="flex justify-around items-center h-[60px]">
        <h3 className="logo">/ REACT ODDBALL ICONS /</h3>

        <nav className="flex w-1/2">
          <ul className="flex w-full justify-between md:justify-end md:gap-[3rem]">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/docs">Docs</NavLink>
            </li>
            <li>About</li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="flex flex-col md:flex-row justify-between items-center md:items-end p-6 min-h-[200px] border-t border-gray-200">
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-sm font-medium text-gray-700">
            Also available on
          </h3>
          <ul className="flex gap-4 text-2xl text-gray-600">
            <li>
              <i className="ci ci-github"></i>
            </li>
            <li>
              <i className="ci ci-npm"></i>
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
