import Link from "next/link";
import { FiFilm } from "react-icons/fi";
export const Logo = () => {
  return (
    <Link className="flex items-center gap-2 text-indigo-700 w-1/3" href={"/"}>
      <FiFilm className="text-3xl max-lg:text-2xl" />
      <span className="text-2xl font-bold italic max-lg:text-xl max-md:text-lg">
        Movie Z
      </span>
    </Link>
  );
};
