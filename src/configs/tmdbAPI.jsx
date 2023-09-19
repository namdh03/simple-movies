import publicRuntime from "./publicRuntime";

const apiKey = publicRuntime.VITE_TMDB_API_KEY;
const endpoint = publicRuntime.VITE_TMDB_END_POINT;
const subDirectory = {
    movie: "movie",
    search: "search",
};

const tmdbAPI = {
    getMovieList: (type, page = 1) =>
        `${endpoint}/${subDirectory.movie}/${type}?api_key=${apiKey}&language=en-US&page=${page}`,
    getMovieListBySearch: (value, page = 1) =>
        `${endpoint}/${subDirectory.search}/${subDirectory.movie}?api_key=${apiKey}&query=${value}&language=en-US&page=${page}`,
    getMovieDetail: (movieId) =>
        `${endpoint}/${subDirectory.movie}/${movieId}?api_key=${apiKey}&language=en-US`,
    getMovieMeta: (type, movieId) =>
        `${endpoint}/${subDirectory.movie}/${movieId}/${type}?api_key=${apiKey}&language=en-US`,
    getImage: (url, size = "original") =>
        `${
            url
                ? `https://image.tmdb.org/t/p/${size}/${url}`
                : "https://static.vecteezy.com/system/resources/previews/005/502/524/original/cinema-background-concept-movie-theater-object-on-red-curtain-background-and-movie-time-with-electric-bulbs-frame-illustration-free-vector.jpg"
        }`,
};

export default tmdbAPI;
