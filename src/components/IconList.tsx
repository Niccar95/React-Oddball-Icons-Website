import { useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Avatar,
  AvatarAlt,
  Calculator,
  Bell,
  BellAlt,
  Bookmark,
  BookmarkAlt,
  Calender,
  Clock,
  ClockAlt,
  Document,
  Envelope,
  Hamburger,
  HamburgerAlt,
  Heart,
  HeartAlt,
  Lock,
  LockAlt,
  MagnifyingGlass,
  MagnifyingGlassAlt,
  Presentation,
  SpeechBubble,
  SpeechBubbleAlt,
  StapleDiagram,
  StapleDiagramAlt,
  Suitcase,
  SuitcaseAlt,
} from "react-oddball-icons";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const iconComponents = [
  { component: ArrowDown, name: "ArrowDown" },
  { component: ArrowLeft, name: "ArrowLeft" },
  { component: ArrowRight, name: "ArrowRight" },
  { component: ArrowUp, name: "ArrowUp" },
  { component: Avatar, name: "Avatar" },
  { component: AvatarAlt, name: "AvatarAlt" },
  { component: Calculator, name: "Calculator" },
  { component: Bell, name: "Bell" },
  { component: BellAlt, name: "BellAlt" },
  { component: Bookmark, name: "Bookmark" },
  { component: BookmarkAlt, name: "BookmarkAlt" },
  { component: Calender, name: "Calender" },
  { component: Clock, name: "Clock" },
  { component: ClockAlt, name: "ClockAlt" },
  { component: Document, name: "Document" },
  { component: Envelope, name: "Envelope" },
  { component: Hamburger, name: "Hamburger" },
  { component: HamburgerAlt, name: "HamburgerAlt" },
  { component: Heart, name: "Heart" },
  { component: HeartAlt, name: "HeartAlt" },
  { component: Lock, name: "Lock" },
  { component: LockAlt, name: "LockAlt" },
  { component: MagnifyingGlass, name: "MagnifyingGlass" },
  { component: MagnifyingGlassAlt, name: "MagnifyingGlassAlt" },
  { component: Presentation, name: "Presentation" },
  { component: SpeechBubble, name: "SpeechBubble" },
  { component: SpeechBubbleAlt, name: "SpeechBubbleAlt" },
  { component: StapleDiagram, name: "StapleDiagram" },
  { component: StapleDiagramAlt, name: "StapleDiagramAlt" },
  { component: Suitcase, name: "Suitcase" },
  { component: SuitcaseAlt, name: "SuitcaseAlt" },
];
const IconList = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isIndex, setIsIndex] = useState<number>(0);
  const [copied, setCopied] = useState<string | null>(null);

  const openModal = (index: number) => {
    setIsOpen(!isOpen);
    setIsIndex(index);
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="h-fit grid grid-cols-4 md:grid-cols-8 gap-3 auto-rows">
      {iconComponents.map((item, index) => {
        const Icon = item.component;

        return (
          <div
            key={index}
            className="rounded-md p-2 border-[0.5px] border-neutral-200 bg-gradient-to-br from-white to-neutral-50 hover:from-neutral-50 cursor-pointer hover:to-neutral-100 transition-colors duration-200 shadow-sm shadow-black/10"
            onClick={() => openModal(index)}
          >
            <Icon width={60} height={60} />
          </div>
        );
      })}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-lg w-full relative ">
            <div className="relative">
              <SyntaxHighlighter language="jsx" style={oneDark}>
                {`import { ${iconComponents[isIndex].name} } from "react-oddball-icons";`}
              </SyntaxHighlighter>

              <button
                onClick={() =>
                  handleCopy(
                    `import { ${iconComponents[isIndex].name} } from "react-oddball-icons";`,
                    "import"
                  )
                }
                className="clipboard-button"
              >
                {copied === "import" ? (
                  <i className="bi bi-clipboard-check"></i>
                ) : (
                  <i className="bi bi-clipboard"></i>
                )}
              </button>
              {copied === "import" && (
                <span className="absolute bottom-1 right-2 text-[10px] text-green-600 font-medium">
                  Copied!
                </span>
              )}
            </div>

            {/* Second highlight, commented here so I don't get confused */}

            <div className="relative">
              <SyntaxHighlighter language="jsx" style={oneDark}>
                {`<${iconComponents[isIndex].name} />`}
              </SyntaxHighlighter>
              <button
                onClick={() =>
                  handleCopy(`<${iconComponents[isIndex].name} />`, "jsx")
                }
                className="clipboard-button"
              >
                {copied === "jsx" ? (
                  <i className="bi bi-clipboard-check"></i>
                ) : (
                  <i className="bi bi-clipboard"></i>
                )}
              </button>

              {copied === "jsx" && (
                <span className="absolute bottom-1 right-2 text-[10px] text-green-600 font-medium">
                  Copied!
                </span>
              )}
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-800 font-bold text-xl flex justify-self-end"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IconList;
