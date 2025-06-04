import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="flex justify-around items-center h-[50px]">
        <h2>React Oddball Logos</h2>
        <nav className="flex w-1/2 justify-end">
          <ul className="flex gap-[3rem]">
            <li>Home</li>
            <li>Docs</li>
            <li>About</li>
          </ul>
        </nav>
      </header>
      <main className="flex">
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
