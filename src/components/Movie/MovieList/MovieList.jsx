import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";

import configs from "@/configs";
import MovieCart from "@/components/Movie/MovieCart";
import MovieCartSkeleton from "@/components/Movie/MovieCart/MovieCartSkeleton";

const MovieList = ({ type = "now_playing" }) => {
    const [movies, setMovies] = useState([]);
    const { data, error } = useSWR(
        configs.tmdbAPI.getMovieList(type),
        configs.fetcher
    );
    const isLoading = !data && !error;

    useEffect(() => {
        if (data && data.results) {
            setMovies(data.results);
        }
    }, [data]);

    return (
        <>
            {isLoading && (
                <Swiper
                    grabCursor={"true"}
                    spaceBetween={40}
                    slidesPerView={"auto"}
                >
                    {movies.length > 0 &&
                        movies.map((movie) => (
                            <SwiperSlide
                                key={movie.id}
                                className="w-[300px] h-auto"
                            >
                                <MovieCartSkeleton />
                            </SwiperSlide>
                        ))}
                </Swiper>
            )}

            {!isLoading && (
                <Swiper
                    grabCursor={"true"}
                    spaceBetween={40}
                    slidesPerView={"auto"}
                >
                    {movies.length > 0 &&
                        movies.map((movie) => (
                            <SwiperSlide
                                key={movie.id}
                                className="w-[300px] h-auto"
                            >
                                <MovieCart movie={movie} />
                            </SwiperSlide>
                        ))}
                </Swiper>
            )}
        </>
    );
};

MovieList.propTypes = {
    type: PropTypes.string,
};

export default MovieList;
