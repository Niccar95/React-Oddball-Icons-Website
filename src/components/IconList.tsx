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

const iconComponents = [
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
