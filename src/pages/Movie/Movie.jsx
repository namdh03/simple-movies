import { useEffect, useState } from "react";
import useSWR from "swr";

import configs from "../../configs";
import { MovieCart } from "../../components/Movie";

const Movie = () => {
    const [movies, setMovies] = useState([]);
    const { data } = useSWR(
        `https://api.themoviedb.org/3/movie/popular?api_key=${configs.apiKeys.TMDB_API_KEY}&language=en-US&page=1`,
        configs.fetcher
    );

    useEffect(() => {
        if (data && data.results) {
            setMovies(data.results);
        }
    }, [data]);

    return (
        <section>
            <div className="page-container">
                <div className="flex mb-10">
                    <div className="flex-1">
                        <input
                            type="text"
                            className="w-full p-4 bg-slate-800 text-white outline-none"
                            placeholder="Type here to search..."
                        />
                    </div>
                    <button className="flex items-center justify-center min-w-[56px] h-14 leading-[56px] bg-primary text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>
                </div>

                <div className="grid grid-cols-4 gap-10">
                    {movies.length > 0 &&
                        movies.map((movie) => (
                            <MovieCart key={movie.id} movie={movie}></MovieCart>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Movie;
