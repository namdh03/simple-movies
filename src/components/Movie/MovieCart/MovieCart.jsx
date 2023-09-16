import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import configs from "@/configs";
import Button from "@/components/Button";

const MovieCart = ({ movie }) => {
    const { id, title, release_date, backdrop_path, vote_average } = movie;
    const navigate = useNavigate();

    return (
        <article className="flex flex-col h-full p-3 bg-slate-800 rounded-lg select-none">
            <figure className="h-[250px]">
                <img
                    src={configs.tmdbAPI.getImage(backdrop_path, "w500")}
                    alt=""
                    className="w-full h-full object-cover rounded-lg"
                />
            </figure>

            <div className="flex flex-col flex-1">
                <h3 className="mt-5 text-xl font-bold">{title}</h3>

                <div className="mt-3 mb-10 flex items-center justify-between text-sm opacity-50">
                    <span>
                        {release_date
                            ? new Date(release_date)?.getFullYear()
                            : "unknown"}
                    </span>
                    <span>{vote_average}</span>
                </div>

                <Button
                    bgColor="secondary"
                    onClick={() => navigate(`/movie/${id}`)}
                >
                    Watch Now
                </Button>
            </div>
        </article>
    );
};

MovieCart.propTypes = {
    movie: PropTypes.object,
};

export default MovieCart;
