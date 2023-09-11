import { useParams } from "react-router-dom";
import useSWR from "swr";
import configs from "../../../configs";

const MovieCredits = () => {
    const { movieId } = useParams();
    const { data } = useSWR(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${configs.apiKeys.TMDB_API_KEY}&language=en-US`,
        configs.fetcher
    );

    if (!data) return null;

    const { cast } = data;

    return (
        cast.length > 0 && (
            <ul className="mt-14 grid grid-cols-4 gap-8">
                {cast.slice(0, 4).map((item) => (
                    <li key={item.cast_id}>
                        <article>
                            <figure className="h-[270px]">
                                <img
                                    src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
                                    alt=""
                                    className="block w-full h-full object-cover rounded-lg select-none"
                                />
                            </figure>
                        </article>
                    </li>
                ))}
            </ul>
        )
    );
};

export default MovieCredits;
