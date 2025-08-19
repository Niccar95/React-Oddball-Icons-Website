import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Documentation = () => {
  const icons: string[] = [
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
    "Avatar",
    "AvatarAlt",
    "Bell",
    "BellAlt",
    "Bookmark",
    "BookmarkAlt",
    "Calculator",
    "CalculatorAlt",
    "Calender",
    "CalenderAlt",
    "Clock",
    "ClockAlt",
    "Document",
    "DocumentAlt",
    "Envelope",
    "EnvelopeAlt",
    "Hamburger",
    "HamburgerAlt",
    "Heart",
    "HeartAlt",
    "Lock",
    "LockAlt",
    "MagnifyingGlass",
    "MagnifyingGlassAlt",
    "Pin",
    "PinAlt",
    "Presentation",
    "PresentationAlt",
    "SpeechBubble",
    "SpeechBubbleAlt",
    "StapleDiagram",
    "StapleDiagramAlt",
    "Suitcase",
    "SuitcaseAlt",
    "TrashCan",
    "TrashCanAlt",
  ];

  return (
    <section className="flex flex-1 flex-col gap-8 justify-center items-center pt-12 pb-12 pl-4 pr-4">
      <div className="w-full md:w-[600px] flex flex-col gap-6">
        <h1>Installation</h1>

        <SyntaxHighlighter
          language="bash"
          style={tomorrow}
          className="rounded-lg p-4"
        >
          {`npm install react-oddball-icons`}
        </SyntaxHighlighter>

        <h2>Usage</h2>
        <SyntaxHighlighter language="jsx" style={oneDark}>
          {`import { Avatar } from "react-oddball-icons";

const HelloWorld = () => (
  <>
    <Avatar />
  </>
);

export default HelloWorld;`}
        </SyntaxHighlighter>

        <h2>Styling</h2>

        <SyntaxHighlighter language="jsx" style={oneDark}>
          {`import { Avatar } from "react-oddball-icons";

const HelloWorld = () => (
  <>
    <Avatar
      width={60}
      height={60}
      style={{
        padding: "10px",
        borderRadius: "8px",
        backgroundColor: "#f3f4f6",
      }}
    />
  </>
);

export default HelloWorld;`}
        </SyntaxHighlighter>

        <h2>Component list</h2>
        <ul className=" grid grid-cols-2">
          {icons.map((icon) => {
            return (
              <li className="mb-2" key={icon}>
                {icon}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Documentation;
