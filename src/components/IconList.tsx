import {
  Avatar,
  AvatarAlt,
  Calculator,
  Calender,
  Clock,
  Document,
  Envelope,
  Lock,
  MagnifyingGlass,
  Presentation,
  SpeechBubble,
  SpeechBubbleAlt,
  StapleDiagram,
  StapleDiagramAlt,
  Suitcase,
} from "react-oddball-icons";

const iconComponents = [
  Avatar,
  AvatarAlt,
  Calculator,
  Calender,
  Clock,
  Document,
  Envelope,
  Lock,
  MagnifyingGlass,
  Presentation,
  SpeechBubble,
  SpeechBubbleAlt,
  StapleDiagram,
  StapleDiagram,
  StapleDiagramAlt,
  Suitcase,
];

const IconList = () => {
  return (
    <div className="h-fit grid grid-cols-4 md:grid-cols-8 gap-3 auto-rows">
      {iconComponents.map((Icon, index) => (
        <div
          key={index}
          className="rounded-md p-2 border-[0.5px] border-neutral-200 bg-gradient-to-br from-white to-neutral-50 hover:from-neutral-50 cursor-pointer hover:to-neutral-100 transition-colors duration-200 shadow-sm shadow-black/10"
        >
          <Icon width={60} height={60} />
        </div>
      ))}
    </div>
  );
};

export default IconList;
