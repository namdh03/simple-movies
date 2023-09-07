import { NavLink } from "react-router-dom";
import configs from "../../configs";

const Header = () => {
    return (
        <header className="h-[100px]">
            <nav className="flex items-center justify-center h-full">
                <ul className="flex items-center justify-center">
                    <li>
                        <NavLink
                            to={configs.routes.home}
                            className={({ isActive }) => {
                                return `inline-block px-4 py-2 ${
                                    isActive ? "text-primary" : "text-white"
                                }`;
                            }}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={configs.routes.movie}
                            className={({ isActive }) => {
                                return `inline-block px-4 py-2 ${
                                    isActive ? "text-primary" : "text-white"
                                }`;
                            }}
                        >
                            Movie
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
