import { FaChevronDown } from "react-icons/fa";

export const Genre = ({ onClick, mobileSearch }) => {
  return (
    <div
      className={`w-fit h-full items-center gap-1.5 cursor-pointer rounded-xl px-2 py-1.5 shadow-sm border border-[#c5c5c8] 
        ${mobileSearch ? "flex" : "hidden md:flex"}`}
      onClick={onClick}
    >
      <FaChevronDown className="text-xl" />
      <span className="text-xl font-semibold max-lg:hidden">Genre</span>
    </div>
  );
};
