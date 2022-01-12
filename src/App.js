import React, { Component } from "react";
import Navbar from "./components/navbar.components";
import Movies from "./components/movies.componnt";
// import Students from "./components/students.component";
import Rating from "./components/rating.component"

class App extends Component {
    render() {
        return (
            <>
                <div
                // style={{ background: "grey", margin: "0px" }}
                >
                    <Navbar />

                    <Movies />

                    <Rating isRated={true} />

                    {/* <Students /> */}
                </div>
            </>
        );
    }
}

export default App;
