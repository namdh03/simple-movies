import useSWR from "swr";
import configs from "../../configs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import BannerItem from "./BannerItem";

const Banner = () => {
    const { data } = useSWR(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${configs.apiKeys.TMDB_API_KEY}&language=en-US&page=1`,
        configs.fetcher
    );
    const movies = data?.results || [];

    return (
        <section className="mb-20 h-[500px]">
            <div className="page-container">
                <Swiper grabCursor={"true"} slidesPerView={"auto"}>
                    {movies.length > 0 &&
                        movies.map((movie) => (
                            <SwiperSlide key={movie.id} className="h-auto">
                                <BannerItem movie={movie}></BannerItem>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Banner;
