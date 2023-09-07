import { Fragment } from "react";
import Banner from "../../components/Banner";
import MovieList from "../../components/MovieList";

const Home = () => {
    return (
        <Fragment>
            <Banner></Banner>

            <section className="pb-20">
                <div className="page-container">
                    <h2 className="capitalize text-white mb-10 text-3xl font-bold">
                        Now playing
                    </h2>
                    <MovieList></MovieList>
                </div>
            </section>
            <section className="pb-20">
                <div className="page-container">
                    <h2 className="capitalize text-white mb-10 text-3xl font-bold">
                        Top rated
                    </h2>
                    <MovieList></MovieList>
                </div>
            </section>
            <section className="pb-20">
                <div className="page-container">
                    <h2 className="capitalize text-white mb-10 text-3xl font-bold">
                        Trending
                    </h2>
                    <MovieList></MovieList>
                </div>
            </section>
        </Fragment>
    );
};

export default Home;
