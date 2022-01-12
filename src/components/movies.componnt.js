import React, { Component } from "react";
import Table from "./Common/table.component";

class Movies extends Component {
    state = {
        headers: ["ID", "Rank & Titles", "IMDB Rating", "Your Rating"],
        movies: [
            {
                id: 1,
                rankAndTitle: " The Shawshank Redemption (1994) ",
                imdbRating: "9.2",
                yourRating: false,
            },
            {
                id: 2,
                rankAndTitle: " The Godfather (1972)",
                imdbRating: "9.1",
                yourRating: true,
            },
            {
                id: 3,
                rankAndTitle: "The Godfather: Part II (1974)",
                imdbRating: "9.0",
                yourRating: false,
            },
            {
                id: 4,
                rankAndTitle: "The Dark Knight (2008)",
                imdbRating: "9.0",
                yourRating: true,
            },
            {
                id: 5,
                rankAndTitle: "12 Angry Men (1957)",
                imdbRating: "8.9",
                yourRating: false,
            },
        ],
    };

    handleIsRated = (movieRank) => {
        const movies = [...this.state.movies];
        console.log(movieRank);
        const movie = movies.find((movie) => movie.rank === movieRank);
        movie.yourRating = !movie.yourRating;
        this.setState({ movies });
    };

    render() {
        return (
            <div>
                <Table
                    headers={this.state.headers}
                    data={this.state.movies}
                    handleIsRated={this.handleIsRated}
                />

            </div>
        );
    }
}

export default Movies;
