import PropTypes from "prop-types";

const Button = ({
    children,
    onClick,
    className,
    wFull = false,
    bgColor = "primary",
    type = "button",
}) => {
    let bgClassName;
    switch (bgColor) {
        case "primary":
            bgClassName = "bg-primary";
            break;

        case "secondary":
            bgClassName = "bg-secondary";
            break;

        default:
            break;
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={`mt-auto flex items-center justify-center ${
                wFull ? "w-full" : "w-auto"
            } h-12 leading-12 p-4 rounded-lg ${className} ${bgClassName}`}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    wFull: PropTypes.bool,
    bgColor: PropTypes.string,
    type: PropTypes.string,
};

export default Button;
