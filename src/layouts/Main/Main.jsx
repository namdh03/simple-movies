import PropTypes from "prop-types";
import { Fragment } from "react";
import Header from "../../components/Header";

const Main = ({ children }) => {
    return (
        <Fragment>
            <Header></Header>
            <main>
                <div className="w-[750px] max-w-[calc(100%-48px)] mx-auto">
                    {children}
                </div>
            </main>
        </Fragment>
    );
};

Main.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Main;
