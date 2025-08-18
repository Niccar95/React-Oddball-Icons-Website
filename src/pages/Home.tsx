import { useNavigate } from "react-router-dom";
import IconList from "../components/IconList";

const Home = () => {
  const navigation = useNavigate();

  return (
    <section className="flex flex-1 flex-col gap-8 justify-center items-center pt-12 pb-12 pl-4 pr-4">
      <h1 className="text-center">Corporate Vibes, Slightly Off</h1>
      <p className="text-center text-neutral-600 font-bold text-[20px] md:w-[600px] tracking-wide">
        A weird little icon set for React with corporate vibes and oddball
        charm. For UI's that don’t take themselves too seriously.
      </p>
      <button className="text-white" onClick={() => navigation("/docs")}>
        Get started
      </button>
      <IconList />
    </section>
  );
};

export default Home;
