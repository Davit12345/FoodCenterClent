import React, {Component} from 'react';
import  ProjectTaskItem from "../../components/ProjectTask/ProjectTaskItem"
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBacklog } from "../../actions/projectTaskActions";

class SeeFoods extends Component {
    componentDidMount() {
        this.props.getBacklog();
    }

    render() {

        const {project_tasks} = this.props.project_tasks;

        // let BoardContent;
        let Dish = [];
        let Drinks = [];
        let Salad = [];

        // const BoardAlgorithm = project_tasks => {
            if (project_tasks.length < 1) {
                return (
                    <div className="alert alert-info text-center" role="alert">
                        No Project Tasks on this board
                    </div>
                );
            } else {
                const tasks = project_tasks.map(project_task => (
                    <ProjectTaskItem key={project_task.id} project_task={project_task}/>
                ));

                for (let i = 0; i < tasks.length; i++) {
                    if (tasks[i].props.project_task.menuItem === "Dish") {
                        Dish.push(tasks[i]);
                    }

                    if (tasks[i].props.project_task.menuItem === "Drinks") {
                        Drinks.push(tasks[i]);
                    }

                    if (tasks[i].props.project_task.menuItem === "Salad") {
                        Salad.push(tasks[i]);
                    }
                }

                return (
                    <React.Fragment>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card text-center mb-2">
                                        <div className="card-header bg-secondary text-white">
                                            <h3>Dish</h3>
                                        </div>
                                    </div>



                                    {Dish}
                                </div>
                                <div className="col-md-4">
                                    <div className="card text-center mb-2">
                                        <div className="card-header bg-primary text-white">
                                            <h3>In Drinks</h3>
                                        </div>
                                    </div>

                                    {Drinks}
                                </div>
                                <div className="col-md-4">
                                    <div className="card text-center mb-2">
                                        <div className="card-header bg-success text-white">
                                            <h3>Salad</h3>
                                        </div>
                                    </div>

                                    {Salad}
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                );
            }
        // };
        //
        // return (
        //     <div className="container">
        //
        //         <br />
        //         <hr />
        //         {BoardContent}
        //     </div>
        // );

    }
}

SeeFoods.propTypes = {
    getBacklog: PropTypes.func.isRequired,
    project_tasks: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    project_tasks: state.project_task
});

export default connect(
    mapStateToProps,
    { getBacklog }
)(SeeFoods);