import { MovieCardsLoader } from "./movieCardsLoader";

export const GenreMovieListLoader = () => {
  return (
    <div className="w-full flex flex-col gap-6 mb-24 mx-auto xs:px-6 md:px-12 dark:bg-black px-2 animate-pulse">
      <div className="w-full h-9 flex justify-between items-center">
        <div className="h-8 w-40 bg-gray-200 rounded-lg" />
      </div>

      <div className="w-full flex gap-6 max-md:flex-col">
        <div className="w-[30%] max-md:w-full flex flex-col gap-3">
          <div className="h-6 w-28 bg-gray-200 rounded" />
          <div className="h-6 w-24 bg-gray-200 rounded" />
          <div className="h-6 w-32 bg-gray-200 rounded" />
          <div className="h-6 w-20 bg-gray-200 rounded" />
        </div>

        <div className="w-px bg-gray-200" />

        <div className="flex-1 flex flex-col gap-4">
          <div className="h-6 w-48 bg-gray-200 rounded" />

          <div className="flex flex-wrap justify-between max-md:gap-2 md:gap-6 max-xl:justify-center">
            <MovieCardsLoader count={8} />
          </div>

          <div className="flex justify-center gap-2 mt-6">
            <div className="w-8 h-8 bg-gray-200 rounded-lg" />
            <div className="w-8 h-8 bg-gray-200 rounded-lg" />
            <div className="w-8 h-8 bg-gray-200 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};
