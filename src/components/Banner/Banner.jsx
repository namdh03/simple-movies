import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";

import configs from "@/configs";
import BannerItem from "./BannerItem";
import BannerItemSkeleton from "./BannerItem/BannerItemSkeleton";

const Banner = () => {
    const { data, error } = useSWR(
        configs.tmdbAPI.getMovieList("upcoming"),
        configs.fetcher
    );

    const isLoading = !data && !error;

    const movies = data?.results || [];

    return (
        <section className="mb-20 h-[500px]">
            <div className="page-container">
                {isLoading && (
                    <Swiper>
                        <SwiperSlide>
                            <BannerItemSkeleton />
                        </SwiperSlide>
                    </Swiper>
                )}

                {!isLoading && (
                    <Swiper grabCursor={"true"} slidesPerView={"auto"}>
                        {movies.length > 0 &&
                            movies.map((movie) => (
                                <SwiperSlide key={movie.id} className="h-auto">
                                    <BannerItem movie={movie} />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                )}
            </div>
        </section>
    );
};

export default Banner;
