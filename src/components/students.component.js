import React, { Component } from "react";
import Table from "./Common/table.component";

class Students extends Component {
    state = {
        headers: ["Roll no", "Name", "CGPA"],

        students: [
            { roll: 1, name: "Himel", cgpa: "3.56" },
            { roll: 2, name: "Abid", cgpa: "3.03" },
            { roll: 3, name: "Labib", cgpa: "3.17" },
        ],
    };

    render() {
        return (
            <div>
                <Table headers={this.state.headers} data={this.state.students}/>
            </div>
        );
    }
}

export default Students;
