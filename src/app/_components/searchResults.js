import { FaStar } from "react-icons/fa";
import { SeeMoreButton } from "./seeMoreButton";

export const SearchResults = (props) => {
  const { image, title, rating, year, onClick } = props;

  return (
    <div className="w-full flex items-center gap-4 p-3 rounded-lg cursor-pointer transition">
      <img
        src={image}
        alt={title}
        className="w-16 h-24 object-cover rounded-lg shadow"
      />

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <p className="font-semibold text-base line-clamp-1">{title}</p>
          <div className="flex items-center text-gray-400 ">
            <FaStar
              className="mr-1 text-yellow-400 size-5"
              onClick={() => setMobileSearch((prev) => !prev)}
            />
            <p className="text-base">
              <span className="font-bold text-black  text-lg">{rating}</span>
              /10
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600 mt-2">
          <span className="font-semibold">{year}</span>
          <SeeMoreButton onClick={onClick} />
        </div>
      </div>
    </div>
  );
};
