import { useParams } from "react-router-dom";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import configs from "../../../configs";
import MovieCart from "../MovieCart";

const MovieSimilar = () => {
    const { movieId } = useParams();
    const { data } = useSWR(
        `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${configs.apiKeys.TMDB_API_KEY}&language=en-US`,
        configs.fetcher
    );

    if (!data) return null;

    const { results } = data;

    return (
        <section className="mt-20">
            <div className="page-container">
                <h2 className="text-3xl font-medium mb-10">Similar movies</h2>
                <Swiper
                    grabCursor={"true"}
                    spaceBetween={40}
                    slidesPerView={"auto"}
                >
                    {results.length > 0 &&
                        results.map((movie) => (
                            <SwiperSlide
                                key={movie.id}
                                className="w-[300px] h-auto"
                            >
                                <MovieCart movie={movie}></MovieCart>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </section>
    );
};

export default MovieSimilar;
