import React, { Component } from "react";
import Navbar from "./components/navbar.components";
import Movies from "./components/movies.componnt";

class App extends Component {
    render() {
        return (
            <>
                <div>
                    <Navbar />

                    <Movies />
                </div>
            </>
        );
    }
}

export default App;
