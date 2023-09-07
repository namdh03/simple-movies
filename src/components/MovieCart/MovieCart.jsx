const MovieCart = () => {
    return (
        <article className="p-3 bg-slate-800 rounded-lg">
            <figure className="h-[250px]">
                <img
                    src="https://genk.mediacdn.vn/139269124445442048/2020/2/14/1-15816746144451193748082.jpg"
                    alt=""
                    className="w-full h-full object-cover rounded-lg"
                />
            </figure>

            <h3 className="mt-5 text-xl font-bold">Spiderman: Homecoming</h3>

            <div className="mt-3 flex items-center justify-between text-sm opacity-50">
                <span>2017</span>
                <span>7.4</span>
            </div>

            <button className="mt-10 flex items-center justify-center w-full h-12 leading-12 p-4 bg-primary rounded-lg">
                Watch Now
            </button>
        </article>
    );
};

export default MovieCart;
