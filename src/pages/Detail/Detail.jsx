import { useParams } from "react-router-dom";

const Detail = () => {
    const movieId = useParams();
    console.log(movieId);

    return (
        <section>
            <div className="page-container">Hello</div>
        </section>
    );
};

export default Detail;
