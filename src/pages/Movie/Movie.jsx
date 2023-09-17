import { useEffect, useState } from "react";
import useSWR from "swr";
import ReactPaginate from "react-paginate";

import configs from "@/configs";
import { MovieCart } from "@/components/Movie";
import { useDebounce } from "@/hooks/useDebounce";

const itemsPerPage = 20;
const Movie = () => {
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [nextPage, setNextPage] = useState(1);
    const [url, setUrl] = useState(
        configs.tmdbAPI.getMovieList("popular", nextPage)
    );
    const { data, error } = useSWR(url, configs.fetcher);
    const loading = !data && !error;
    const [searchValue, setSearchValue] = useState("");
    const searchDebounceValue = useDebounce(searchValue);

    useEffect(() => {
        if (searchDebounceValue) {
            setUrl(
                configs.tmdbAPI.getMovieListBySearch(
                    searchDebounceValue,
                    nextPage
                )
            );
        } else {
            setUrl(configs.tmdbAPI.getMovieList("popular", nextPage));
        }
    }, [searchDebounceValue, nextPage]);

    const movies = data?.results || [];

    useEffect(() => {
        if (!data || !data.total_results) return;
        setPageCount(Math.ceil(data.total_results / itemsPerPage));
    }, [data, itemOffset]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.total_results;
        setItemOffset(newOffset);
        setNextPage(event.selected + 1);
    };

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
                                <MovieCart key={movie.id} movie={movie} />
                            ))}
                    </div>
                )}

                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    className="my-20 pagination"
                />
            </div>
        </section>
    );
};

export default Movie;
