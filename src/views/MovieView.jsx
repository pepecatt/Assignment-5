import Genre from "../components/Genres";
import { Outlet } from "react-router-dom";

function MovieView() {
    const genres = [
        { id: 28, genre: "Action" },
        { id: 12, genre: "Adventure" },
        { id: 16, genre: "Animation" },
        { id: 80, genre: "Comedy" },
        { id: 14, genre: "Fantasy" },
        { id: 36, genre: "Horror" },
        { id: 9648, genre: "Mystery" },
        { id: 10402, genre: "Music" },
        { id: 53, genre: "Thriller" },
        { id: 10770, genre: "TV" }
    ];

    return (
        <div>
            <Genre genreList={genres} />
            <Outlet />
        </div>
    )
}

export default MovieView;