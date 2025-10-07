export const MovieCardsLoader = ({ count = 1 }) => {
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="
            aspect-[230/430] bg-gray-200 rounded-lg animate-pulse w-[48%] max-xs:w-full sm:w-[30%] md:w-[22%] lg:w-[18%]                   
          "
        />
      ))}
    </>
  );
};
