import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import configs from "@/configs";
import Button from "@/components/Button";

const BannerItem = ({ movie }) => {
    const { backdrop_path, title, id } = movie;
    const navigate = useNavigate();

    return (
        <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
            <figure className="w-full h-[500px]">
                <img
                    src={configs.tmdbAPI.getImage(backdrop_path)}
                    alt=""
                    className="block w-full h-full object-cover object-bottom rounded-lg"
                />
            </figure>
            <div className="absolute left-5 bottom-5 w-full text-white">
                <h2 className="font-bold text-3xl drop-shadow-xl">{title}</h2>
                <ul className="flex items-center gap-x-3 mt-5 mb-8">
                    {new Array(3).fill().map((_, index) => (
                        <li
                            key={index}
                            className="py-2 px-4 border border-white rounded-md"
                        >
                            Adventure
                        </li>
                    ))}
                </ul>

                <Button onClick={() => navigate(`movie/${id}`)}>
                    Watch Now
                </Button>
            </div>
        </div>
    );
};

BannerItem.propTypes = {
    movie: PropTypes.object,
};

export default BannerItem;
