import PropTypes from "prop-types";

const Skeleton = ({ width = "100%", height = "100%", className }) => {
    return (
        <div
            className={`loading-skeleton ${className}`}
            style={{
                width,
                height,
            }}
        ></div>
    );
};

Skeleton.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    className: PropTypes.string,
};

export default Skeleton;
