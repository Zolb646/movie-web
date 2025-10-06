export const MovieCardsLoader = ({ count = 1 }) => {
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="aspect-[230/430] w-full bg-gray-200 rounded-lg animate-pulse"
        />
      ))}
    </>
  );
};
