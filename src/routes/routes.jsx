import configs from "../configs";

import Main from "../layouts/Main/Main";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Detail from "../pages/Detail";

const publicRoutes = [
    { id: 1, path: configs.routes.home, component: Home, layout: Main },
    { id: 2, path: configs.routes.movie, component: Movie, layout: Main },
    { id: 3, path: configs.routes.detail, component: Detail, layout: Main },
];

export { publicRoutes };
