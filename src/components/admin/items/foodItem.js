import React, { Component } from "react";
import { connect } from "react-redux";

class FoodItem extends Component {


    render() {
        const { project_task } = this.props;
        return (
            <tr>
                <td>{project_task.id}</td>
                <td>{project_task.name}</td>
                <td>{project_task.menuItem}</td>
                <td>{project_task.price}</td>
                <td>{project_task.info}</td>
            </tr>
        );
    }
}



export default connect(
    null,
)(FoodItem);