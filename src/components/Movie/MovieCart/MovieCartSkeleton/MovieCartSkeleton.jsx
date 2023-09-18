import Skeleton from "@/components/Loading/Skeleton";

const MovieCartSkeleton = () => {
    return (
        <article className="flex flex-col h-full p-3 bg-slate-800 rounded-lg select-none">
            <Skeleton height="250px" className="rounded-lg" />

            <div className="flex flex-col flex-1">
                <Skeleton height="28px" className="mt-5 rounded-lg" />

                <div className="mt-3 mb-10 flex items-center justify-between text-sm opacity-50">
                    <Skeleton
                        width="70px"
                        height="20px"
                        className="rounded-lg"
                    />
                    <Skeleton
                        width="70px"
                        height="20px"
                        className="rounded-lg"
                    />
                </div>

                <Skeleton height="48px" className="rounded-lg" />
            </div>
        </article>
    );
};

export default MovieCartSkeleton;
