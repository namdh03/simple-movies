import Banner from "@/components/Banner";
import { MovieList } from "@/components/Movie";

const Home = () => {
    const movieLists = [
        {
            id: 1,
            title: "Now playing",
            type: "now_playing",
        },
        {
            id: 2,
            title: "Top rated",
            type: "top_rated",
        },
        {
            id: 3,
            title: "Trending",
            type: "popular",
        },
    ];

    return (
        <>
            <Banner />

            {movieLists.map((movie) => (
                <section key={movie.id} className="pb-20">
                    <div className="page-container">
                        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
                            {movie.title}
                        </h2>
                        <MovieList type={movie.type} />
                    </div>
                </section>
            ))}
        </>
    );
};

export default Home;
