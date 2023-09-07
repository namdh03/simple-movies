import PropTypes from "prop-types";
import { Fragment } from "react";
import Header from "../../components/Header";

const Main = ({ children }) => {
    return (
        <Fragment>
            <Header></Header>
            <main>{children}</main>
        </Fragment>
    );
};

Main.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Main;
