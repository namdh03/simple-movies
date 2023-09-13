import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const MovieCart = ({ movie }) => {
    const { id, title, release_date, backdrop_path, vote_average } = movie;
    const navigate = useNavigate();

    return (
        <article className="flex flex-col h-full p-3 bg-slate-800 rounded-lg select-none">
            <figure className="h-[250px]">
                <img
                    src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                    alt=""
                    className="w-full h-full object-cover rounded-lg"
                />
            </figure>

            <div className="flex flex-col flex-1">
                <h3 className="mt-5 text-xl font-bold">{title}</h3>

                <div className="mt-3 mb-10 flex items-center justify-between text-sm opacity-50">
                    <span>{new Date(release_date)?.getFullYear()}</span>
                    <span>{vote_average}</span>
                </div>

                <button
                    onClick={() => navigate(`movie/${id}`)}
                    className="mt-auto flex items-center justify-center w-full h-12 leading-12 p-4 bg-primary rounded-lg"
                >
                    Watch Now
                </button>
            </div>
        </article>
    );
};

MovieCart.propTypes = {
    movie: PropTypes.object,
};

export default MovieCart;
