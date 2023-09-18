import Skeleton from "@/components/Loading/Skeleton";

const BannerItemSkeleton = () => {
    return (
        <div>
            <div className="w-full h-[500px] bg-slate-800 rounded-lg"></div>

            <div className="absolute left-5 bottom-5 w-full">
                <Skeleton width="360px" height="36px" className="rounded-lg" />
                <ul className="flex items-center gap-x-3 mt-5 mb-8">
                    {new Array(3).fill().map((_, index) => (
                        <Skeleton
                            key={index}
                            width="110px"
                            height="41px"
                            className="rounded-md"
                        />
                    ))}
                </ul>

                <Skeleton width="120px" height="48px" className="rounded-lg" />
            </div>
        </div>
    );
};

export default BannerItemSkeleton;
