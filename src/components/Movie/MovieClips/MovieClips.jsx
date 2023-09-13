import { useParams } from "react-router-dom";
import useSWR from "swr";
import configs from "../../../configs";

const MovieClips = () => {
    const { movieId } = useParams();
    const { data } = useSWR(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${configs.apiKeys.TMDB_API_KEY}&language=en-US`,
        configs.fetcher
    );

    if (!data) return null;

    const { results } = data;

    return (
        <section className="mt-20">
            <div className="page-container">
                <div className="flex flex-col gap-10">
                    {results.slice(0, 2).map((item) => (
                        <div className="" key={item.id}>
                            <h3 className="mb-5 text-xl font-medium p-3 bg-secondary inline-block">
                                {item.name}
                            </h3>
                            <div key={item.id} className="w-full aspect-video">
                                <iframe
                                    width="864"
                                    height="486"
                                    src={`https://www.youtube.com/embed/${item.key}`}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full object-fill"
                                ></iframe>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MovieClips;
