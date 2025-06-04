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

const IconList = () => {
  return (
    <div className="h-fit grid grid-cols-4 md:grid-cols-8 gap-3 auto-rows">
      <div className="rounded-md shadow-sm shadow-black/20 p-2">
        <Avatar width={60} height={60} />
      </div>
      <div className="rounded-md shadow-sm shadow-black/20 p-2">
        <AvatarAlt width={60} height={60} />
      </div>
      <div className="rounded-md shadow-sm shadow-black/20 p-2">
        <Calculator width={60} height={60} />
      </div>
      <div className="rounded-md shadow-sm shadow-black/20 p-2">
        <Calender width={60} height={60} />
      </div>
      <div className="rounded-md shadow-sm shadow-black/20 p-2">
        <Clock width={60} height={60} />
      </div>
      <div className="rounded-md shadow-sm shadow-black/20 p-2">
        <Document width={60} height={60} />
      </div>
      <div className="rounded-md shadow-sm shadow-black/20 p-2">
        <Envelope width={60} height={60} />
      </div>
      <div className="rounded-md shadow-sm shadow-black/20 p-2">
        <Lock width={60} height={60} />
      </div>
      <div className="rounded-md shadow-sm shadow-black/20 p-2">
        <MagnifyingGlass width={60} height={60} />
      </div>
      <div className="rounded-md shadow-sm shadow-black/20 p-2">
        <Presentation width={60} height={60} />
      </div>
      <div className="rounded-md shadow-sm shadow-black/20 p-2">
        <SpeechBubble width={60} height={60} />
      </div>
      <div className="rounded-md shadow-sm shadow-black/20 p-2">
        <SpeechBubbleAlt width={60} height={60} />
      </div>
      <div className="rounded-md shadow-sm shadow-black/20 p-2">
        <StapleDiagram width={60} height={60} />
      </div>
      <div className="rounded-md shadow-sm shadow-black/20 p-2">
        <StapleDiagram width={60} height={60} />
      </div>
      <div className="rounded-md shadow-sm shadow-black/20 p-2">
        <StapleDiagramAlt width={60} height={60} />
      </div>
      <div className="rounded-md shadow-sm shadow-black/20 p-2">
        <Suitcase width={60} height={60} />
      </div>
    </div>
  );
};

export default IconList;
