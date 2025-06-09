import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="flex justify-around items-center h-[60px]">
        <h2>React Oddball Icons</h2>
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
      <main className="flex flex-1 flex-col gap-8 justify-center items-center">
        <Outlet />
      </main>
      <footer>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Nicolas Carrasco
        </p>
      </footer>
    </>
  );
};

export default Layout;
