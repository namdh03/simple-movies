import { useEffect, useState } from "react";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";

import configs from "../../configs";
import MovieCart from "../../components/MovieCart";

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGE4NGQ4ODc1NTIzZjQyMDljNGM2Y2FjMGJmY2ZkMCIsInN1YiI6IjY0ZTQ0NjE5YzYxM2NlMDBhYzNmYmE0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FM-MD2nBcXcLA4wQommC94wxtksCZAVL8y6a_5KUuAs",
    },
};

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const { data } = useSWR(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        configs.fetcher,
        options
    );

    useEffect(() => {
        setMovies(data?.results);
    }, [data]);

    console.log(movies);

    return (
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
            <SwiperSlide className="w-[300px]">
                <MovieCart></MovieCart>
            </SwiperSlide>

            <SwiperSlide className="w-[300px]">
                <MovieCart></MovieCart>
            </SwiperSlide>

            <SwiperSlide className="w-[300px]">
                <MovieCart></MovieCart>
            </SwiperSlide>

            <SwiperSlide className="w-[300px]">
                <MovieCart></MovieCart>
            </SwiperSlide>

            <SwiperSlide className="w-[300px]">
                <MovieCart></MovieCart>
            </SwiperSlide>
        </Swiper>
    );
};

export default MovieList;
