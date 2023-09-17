import PropTypes from "prop-types";
import Header from "@/components/Header";

const Main = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
};

Main.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Main;
