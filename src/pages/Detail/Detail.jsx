import { useParams } from "react-router-dom";
import useSWR from "swr";
import configs from "@/configs";
import { MovieClips, MovieCredits, MovieSimilar } from "@/components/Movie";

const Detail = () => {
    const { movieId } = useParams();
    const { data } = useSWR(
        configs.tmdbAPI.getMovieDetail(movieId),
        configs.fetcher
    );

    if (!data) return null;
    const { backdrop_path, poster_path, title, genres, overview } = data;

    return (
        <section>
            <div className="page-container">
                <div className="relative w-full h-[846px]">
                    <div className="absolute inset-0 bg-black bg-opacity-70"></div>

                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage: `url(
                            ${configs.tmdbAPI.getImage(backdrop_path)}
                        )`,
                        }}
                    ></div>
                </div>

                <figure className="relative w-[986px] h-[507px] mx-auto -mt-[calc(507px/2)]">
                    <img
                        src={configs.tmdbAPI.getImage(poster_path)}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </figure>

                <h1 className="mt-14 text-white text-center text-5xl font-semibold">
                    {title}
                </h1>

                {genres.length > 0 && (
                    <ul className="mt-14 flex items-center justify-center gap-x-[38px]">
                        {genres.map((genre) => (
                            <li
                                key={genre.id}
                                className="flex items-center justify-center min-w-[141px] h-12 leading-[48px] px-6 py-[10px]
                                border border-solid border-primary rounded-[99px] cursor-pointer"
                            >
                                <span className="text-primary text-lg font-semibold leading-[1.55556]">
                                    {genre.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                )}

                <p className="mt-14 text-white text-center text-base leading-[1.75]">
                    {overview}
                </p>

                <div className="mt-24 text-center">
                    <h2 className="text-white text-4xl font-semibold leading-[0.77778]">
                        Casts
                    </h2>

                    <MovieCredits></MovieCredits>

                    <MovieClips></MovieClips>

                    <MovieSimilar></MovieSimilar>
                </div>
            </div>
        </section>
    );
};

export default Detail;
