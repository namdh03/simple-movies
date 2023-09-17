import { NavLink } from "react-router-dom";
import configs from "@/configs";

const Header = () => {
    const links = [
        {
            id: 1,
            path: configs.routes.home,
            title: "Home",
        },
        {
            id: 2,
            path: configs.routes.movie,
            title: "Movie",
        },
    ];

    return (
        <header className="h-[100px]">
            <nav className="flex items-center justify-center h-full">
                <ul className="flex items-center justify-center">
                    {links.map((link) => (
                        <li key={link.id}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) => {
                                    return `inline-block px-4 py-2 ${
                                        isActive ? "text-primary" : "text-white"
                                    }`;
                                }}
                            >
                                {link.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
