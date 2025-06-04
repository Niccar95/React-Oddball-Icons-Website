import { Outlet } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

const Layout = () => {
  const codeString = `npm install react-oddball-icons`;
  return (
    <>
      <header className="flex justify-around items-center h-[60px]">
        <h2>React Oddball Icons</h2>
        <nav className="flex w-1/2">
          <ul className="flex w-full justify-between md:justify-end md:gap-[3rem]">
            <li>Home</li>
            <li>Docs</li>
            <li>About</li>
          </ul>
        </nav>
      </header>
      <main className="flex flex-1 flex-col gap-8 justify-center items-center">
        <SyntaxHighlighter
          language="bash"
          style={tomorrow}
          className="rounded-lg p-4"
        >
          {codeString}
        </SyntaxHighlighter>
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
