import React, { Component } from "react";

class Rating extends Component {
    state = {
        isHovered: false,
        isClicked: false,
    };

    handleOnClick = () => {
        //handleIsRated();
    };

    handleHover = () => {
        this.setState({ isHovered: true });
        console.log(this.props.rank);
    };
    handleOut = () => {
        this.setState({ isHovered: false });
        console.log("out!! ");
    };

    getClassName = () => {
        const { isRated } = this.props;
        const { handleIsRated } = this.props;
        const { isHovered } = this.state;
        let className = this.props.isRated ? "bi bi-star-fill" : "bi bi-star";
        className += isHovered ? " text-primary " : "";
        return className;
    };

    render() {
        return (
            <>
                <i
                    onClick={() => this.props.handleIsRated(this.props.rank)}
                    onMouseOver={this.handleHover}
                    onMouseOut={this.handleOut}
                    className={this.getClassName()}
                ></i>
            </>
        );
    }
}

export default Rating;
