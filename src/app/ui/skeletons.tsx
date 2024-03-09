const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function CardSkeleton() {
  return (
    <div className={`${shimmer} relative overflow-hidden mb-12`}>
      <div className={`rounded-xl bg-white shadow-sm py-1`}>
        <div className="rounded-xl bg-gray-200 px-max py-32 m-4"></div>
      </div>

      <div className="h-6 w-28 mt-4 bg-gray-400 rounded-md"></div>

      <div className="mt-2">
        <div className="h-4 bg-gray-300 rounded-md"></div>
        <div className="mt-2 h-4 bg-gray-300 rounded-md"></div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-4">
        <div className="h-8 bg-gray-700 bg-opacity-15 rounded-md"></div>
        <div className="h-8 bg-gray-700 bg-opacity-15 rounded-md"></div>
        <div className="h-8 bg-gray-700 bg-opacity-15 rounded-md"></div>
        <div className="h-8 bg-gray-700 bg-opacity-15 rounded-md"></div>
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 justify-between mt-12">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
}

export default CardSkeleton;
