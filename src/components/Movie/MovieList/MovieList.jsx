import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";

import configs from "@/configs";
import MovieCart from "@/components/Movie/MovieCart";

const MovieList = ({ type = "now_playing" }) => {
    const [movies, setMovies] = useState([]);
    const { data } = useSWR(
        configs.tmdbAPI.getMovieList(type),
        configs.fetcher
    );

    useEffect(() => {
        if (data && data.results) {
            setMovies(data.results);
        }
    }, [data]);

    return (
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
            {movies.length > 0 &&
                movies.map((movie) => (
                    <SwiperSlide key={movie.id} className="w-[300px] h-auto">
                        <MovieCart movie={movie}></MovieCart>
                    </SwiperSlide>
                ))}
        </Swiper>
    );
};

MovieList.propTypes = {
    type: PropTypes.string,
};

export default MovieList;
