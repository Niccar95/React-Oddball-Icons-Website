import { Avatar, AvatarAlt, MagnifyingGlass } from "react-oddball-icons";

const IconList = () => {
  return (
    <div className="grid grid-cols-4">
      <Avatar width={70} height={70} />
      <AvatarAlt width={70} height={70} />
      <MagnifyingGlass width={70} height={70} />
    </div>
  );
};

export default IconList;
