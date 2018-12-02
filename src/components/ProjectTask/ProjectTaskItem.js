import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

  class ProjectTaskItem extends Component {


    render() {
        const { project_task } = this.props;
        return (
            <div className="card mb-1 bg-light">
                <div className="card-header text-primary">ID: {project_task.id}</div>
                <div className="card-body bg-light">
                    <h5 className="card-title">{project_task.name}</h5>

                    <p className="card-text text-truncate ">
                        {project_task.menuItem}
                    </p>
                    <p className="card-text text-truncate ">
                        {project_task.price}
                    </p>
                    <a href="" className="btn btn-primary">
                        View / Update
                    </a>

                </div>
            </div>
        );
    }
}

// ProjectTaskItem.propTypes = {
//     deleteProjectTask: PropTypes.func.isRequired
// };
// ProjectTaskItem.propTypes = {
//     project_tasks: PropTypes.object.isRequired
//
// };

export default connect(
    null,

)(ProjectTaskItem);