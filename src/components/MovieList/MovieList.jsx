import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
import configs from "../../configs";
import MovieCart from "../../components/MovieCart";


const MovieList = ({ type = "now_playing" }) => {
    const [movies, setMovies] = useState([]);
    const { data } = useSWR(
        `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&language=en-US&page=1`,
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
