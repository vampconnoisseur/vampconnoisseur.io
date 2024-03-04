const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function CardSkeleton() {
  return (
    <div className={`${shimmer} relative overflow-hidden`}>
      <div className={`rounded-xl bg-white p-4 shadow-sm `}>
        <div className="flex items-center justify-center truncate rounded-xl bg-gray-200 px-48 py-32"></div>
      </div>

      <div className="h-6 w-28 mt-4 bg-gray-400 rounded-md"></div>

      <div className="mt-2">
        <div className="h-4 bg-gray-300 rounded-md"></div>
        <div className="mt-2 h-4 bg-gray-300 rounded-md"></div>
      </div>

      <div className="flex justify-between rounded-xl mt-4">
        <div className="px-12 py-4 truncate rounded-md bg-opacity-15 bg-gray-700"></div>
        <div className="px-12 py-4 truncate rounded-md bg-opacity-15 bg-gray-700"></div>
        <div className="px-12 py-4 truncate rounded-md bg-opacity-15 bg-gray-700"></div>
        <div className="px-12 py-4 truncate rounded-md bg-opacity-15 bg-gray-700"></div>
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <div className="flex justify-between mt-12">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
}

export default CardSkeleton;
