import React, { Component } from "react";
import Table from "./Common/table.component";
import Rating from "./rating.component";
import getMovies from "../service/get-movies.service";
class Movies extends Component {
    state = {
        headers: ["Rank", "Titles", "IMDB Rating", "Your Rating"],
        movies: [],
    };

    componentDidMount(){
        const movies = getMovies();
        this.setState({movies});
    }

    handleIsRated = (movieRank) => {
        // console.log("rank ", movieRank );
        const movies = [...this.state.movies];
        const movie = movies.find((movie) => movie.id === movieRank);
        movie.yourRating = !movie.yourRating;
        this.setState({ movies });
    };

    render() {
        const columns = [
            {
                label: "Rank",
                path: "id",
                content: (movie, key) => <td key={movie[key]}>{movie[key]}</td>,
            },
            {
                label: "Titles",
                path: "title",
                content: (movie, key) => <td key={movie[key]}>{movie[key]}</td>,
            },
            {
                label: "Poster",
                path: "posterUrl",
                content: (movie, key) => <td key={movie[key]}><img src={movie[key]} style={{height : "100px" , width : "auto"}} alt="" /></td>,
            },
            {
                label: "Your Rating",
                path: "yourRating",
                content: (movie, key) => (
                    <td key={movie[key]}>
                        <Rating
                            isRated={movie[key]}
                            handleIsRated={this.handleIsRated}
                            rank={movie.id}
                        />
                    </td>
                ),
            },
            {
                label: "Action",
                path: "action",
                content: (movie, key) => <td key={movie[key]}>{movie[key]}</td>,
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
