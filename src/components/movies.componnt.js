import React, { Component } from "react";
import Table from "./Common/table.component";
import Rating from "./rating.component";
class Movies extends Component {
    state = {
        headers: ["Rank", "Titles", "IMDB Rating", "Your Rating"],
        movies: [
            {
                rank: 1,
                title: " The Shawshank Redemption (1994) ",
                imdbRating: "9.2",
                yourRating: false,
            },
            {
                rank: 2,
                title: " The Godfather (1972)",
                imdbRating: "9.1",
                yourRating: true,
            },
            {
                rank: 3,
                title: "The Godfather: Part II (1974)",
                imdbRating: "9.0",
                yourRating: false,
            },
            {
                rank: 4,
                title: "The Dark Knight (2008)",
                imdbRating: "9.0",
                yourRating: true,
            },
            {
                rank: 5,
                title: "12 Angry Men (1957)",
                imdbRating: "8.9",
                yourRating: false,
            },
        ],
    };

    handleIsRated = (movieRank) => {
        // console.log("rank ", movieRank );
        const movies = [...this.state.movies];
        const movie = movies.find((movie) => movie.rank === movieRank);
        movie.yourRating = !movie.yourRating;
        this.setState({ movies });
    };

    render() {
        const columns = [
            {
                label: "Rank",
                path: "rank",
                content: (movie, key) => <td key={movie[key]}>{movie[key]}</td>,
            },
            {
                label: "Titles",
                path: "title",
                content: (movie, key) => <td key={movie[key]}>{movie[key]}</td>,
            },
            {
                label: "IMDB Rating",
                path: "imdbRating",
                content: (movie, key) => <td key={movie[key]}>{movie[key]}</td>,
            },
            {
                label: "Your Rating",
                path: "yourRating",
                content: (movie, key) => (
                    <td key={movie[key]}>
                        <Rating
                            isRated={movie[key]}
                            handleIsRated={this.handleIsRated}
                            rank={movie.rank}
                        />
                    </td>
                ),
            },
        ];
        return (
            <div>
                <Table
                    // headers={this.state.headers}
                    data={this.state.movies}
                    columns={columns}
                    // handleIsRated={this.handleIsRated}
                />
            </div>
        );
    }
}

export default Movies;
