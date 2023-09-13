import { useEffect, useState } from "react";
import useSWR from "swr";

import configs from "../../configs";
import { MovieCart } from "../../components/Movie";
import { useDebounce } from "../../hooks";

const Movie = () => {
    const [movies, setMovies] = useState([]);
    const [url, setUrl] = useState(
        `https://api.themoviedb.org/3/movie/popular?api_key=${configs.apiKeys.TMDB_API_KEY}&language=en-US&page=1`
    );
    const { data, error } = useSWR(url, configs.fetcher);
    const loading = !data && !error;
    const [searchValue, setSearchValue] = useState("");
    const searchDebounceValue = useDebounce(searchValue);

    useEffect(() => {
        if (data && data.results) {
            setMovies(data.results);
        }
    }, [data]);

    useEffect(() => {
        if (searchDebounceValue) {
            setUrl(
                `https://api.themoviedb.org/3/search/movie?api_key=${configs.apiKeys.TMDB_API_KEY}&query=${searchDebounceValue}&include_adult=false&language=en-US&page=1`
            );
        }
    }, [searchDebounceValue]);

    return (
        <section>
            <div className="page-container">
                <div className="flex mb-10">
                    <div className="flex-1">
                        <input
                            type="text"
                            className="w-full p-4 bg-slate-800 text-white outline-none"
                            placeholder="Type here to search..."
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
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

                {loading ? (
                    <div className="mx-auto mb-10 w-10 h-10 border-4 border-t-transparent border-solid border-primary rounded-full animate-spin"></div>
                ) : (
                    <div className="grid grid-cols-4 gap-10">
                        {movies.length > 0 &&
                            movies.map((movie) => (
                                <MovieCart
                                    key={movie.id}
                                    movie={movie}
                                ></MovieCart>
                            ))}
                    </div>
                )}

                <div className="my-10 flex items-center justify-center gap-x-6">
                    <span className="px-4 py-2 cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                            />
                        </svg>
                    </span>
                    <ul className="flex items-center justify-center">
                        <li className="flex items-center justify-center px-4 py-2 bg-white text-slate-900 rounded cursor-pointer">
                            1
                        </li>
                    </ul>
                    <span className="px-4 py-2 cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Movie;
