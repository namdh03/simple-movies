import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "@/routes/routes";
import { Fragment } from "react";

const App = () => {
    return (
        <Routes>
            {publicRoutes.map((route) => {
                let Layout = Fragment;
                const Page = route.component;

                if (route.layout) {
                    Layout = route.layout;
                } else {
                    Layout = Fragment;
                }

                return (
                    <Route
                        key={route.id}
                        path={route.path}
                        element={
                            <Layout>
                                <Page></Page>
                            </Layout>
                        }
                    ></Route>
                );
            })}
        </Routes>
    );
};

export default App;
