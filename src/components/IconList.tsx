import { useState } from "react";
import {
  Arrow,
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
  Heart,
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
  { component: Arrow, name: "Arrow" },
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
  { component: Heart, name: "Heart" },
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

  const openModal = (index: number) => {
    setIsOpen(!isOpen);
    setIsIndex(index);
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
                  navigator.clipboard.writeText(
                    `import { ${iconComponents[isIndex].name} } from "react-oddball-icons";`
                  )
                }
                className="clipboard-button"
              >
                <i className="bi bi-clipboard"></i>
              </button>
            </div>

            {/* second highlight */}

            <div className="relative">
              <SyntaxHighlighter language="jsx" style={oneDark}>
                {`<${iconComponents[isIndex].name} />`}
              </SyntaxHighlighter>

              <button
                onClick={() =>
                  navigator.clipboard.writeText(
                    `<${iconComponents[isIndex].name} />`
                  )
                }
                className="clipboard-button"
              >
                <i className="bi bi-clipboard"></i>
              </button>
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
