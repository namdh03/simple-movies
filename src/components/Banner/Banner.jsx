const Banner = () => {
    return (
        <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
            <figure className="w-full h-[400px]">
                <img
                    src="https://genk.mediacdn.vn/139269124445442048/2020/2/14/1-15816746144451193748082.jpg"
                    alt=""
                    className="block w-full h-full object-cover object-bottom rounded-lg"
                />
            </figure>
            <div className="absolute left-5 bottom-5 w-full text-white">
                <h2 className="font-bold text-3xl">Avengers: Endgame</h2>
                <ul className="flex items-center gap-x-3 mt-5 mb-8">
                    <li className="py-2 px-4 border border-white rounded-md">
                        Adventure
                    </li>
                    <li className="py-2 px-4 border border-white rounded-md">
                        Adventure
                    </li>
                    <li className="py-2 px-4 border border-white rounded-md">
                        Adventure
                    </li>
                </ul>
                <button className="inline-flex items-center justify-center min-w-[130px] h-[46px] leading-[46px] p-2 font-semibold bg-primary rounded-lg">
                    Watch Now
                </button>
            </div>
        </section>
    );
};

export default Banner;
