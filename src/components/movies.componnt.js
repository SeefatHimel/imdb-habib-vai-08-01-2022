import React, { Component } from "react";
import Table from "./Common/table.component";
import Rating from "./rating.component";
import getMovies from "../service/get-movies.service";
import getGenres from "../service/get-genres.sevice";
import Pagination from "./Common/pagination.component";
import Filtering from "./Common/filtering.component";
import _ from "lodash";

class Movies extends Component {
    state = {
        movies: [],
        sortColumn: { path: "id", order: "asc" },
        activePage: 1,
        selectedGenre: "All Genres",
        pageCount: 5,
        genres: [],
    };

    componentDidMount() {
        const movies = getMovies();
        const genres = ["All Genres", ...getGenres()];
        this.setState({ movies, genres });
    }

    handleIsRated = (movieRank) => {
        // console.log("rank ", movieRank );
        const movies = [...this.state.movies];
        const movie = movies.find((movie) => movie.id === movieRank);
        movie.yourRating = !movie.yourRating;
        this.setState({ movies });
    };

    handleSort = (sortColumn) => {
        this.setState({ ...this.state, sortColumn });
    };

    sortMovies = (movies) => {
        const { sortColumn } = this.state;
        const sortedMovies = _.orderBy(
            movies,
            [sortColumn.path],
            [sortColumn.order]
        );
        return sortedMovies;
    };

    handlePage = (activePage) => {
        this.setState({ activePage });
    };

    handleClickFilter = (selectedGenre) => {
        this.setState({ selectedGenre });
    };

    paginateMovies = (movies) => {
        const { activePage, pageCount } = this.state;
        const start = (activePage - 1) * pageCount;
        const paginatedMovies = movies.slice(start, start + pageCount);
        return paginatedMovies;
    };

    filterMovies = () => {
        const { movies, selectedGenre } = this.state;
        const filteredMovies = movies.filter((movie) => {
            if (selectedGenre === "All Genres") return true;
            if (movie.genres.includes(selectedGenre)) return true;
            return false;
        });
        return filteredMovies;
    };

    render() {
        const filteredMovies = this.filterMovies();
        const paginatedMovies = this.paginateMovies(filteredMovies);
        const movies = this.sortMovies(paginatedMovies);
        const columns = [
            {
                label: "Rank",
                path: "id",
                sorting: true,
                content: (movie, key) => <td key={movie[key]}>{movie[key]}</td>,
            },
            {
                label: "Titles",
                path: "title",
                sorting: true,
                content: (movie, key) => <td key={movie[key]}>{movie[key]}</td>,
            },
            {
                label: "Poster",
                path: "posterUrl",
                content: (movie, key) => (
                    <td key={movie[key]}>
                        <img
                            src={movie[key]}
                            style={{ height: "100px", width: "auto" }}
                            alt=""
                        />
                    </td>
                ),
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
            <>
                <div className="container">
                    <div className="row">
                        <Filtering
                            items={this.state.genres}
                            selectedGenre={this.state.selectedGenre}
                            onClickFilter={this.handleClickFilter}
                        />
                        <div className="col-lg-8">
                            <div>
                                <Table
                                    // headers={this.state.headers}
                                    items={movies}
                                    columns={columns}
                                    sortColumn={this.state.sortColumn}
                                    onSort={this.handleSort}
                                    // handleIsRated={this.handleIsRated}
                                />
                                <Pagination
                                    totalItems={filteredMovies.length}
                                    pageCount={this.state.pageCount}
                                    activePage={this.state.activePage}
                                    onClickPage={this.handlePage}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Movies;
