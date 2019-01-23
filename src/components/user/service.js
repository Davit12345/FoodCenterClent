import React, {Component} from 'react';
import ProjectTaskItem from "./ProjectTask/foodTaskItem"
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getBacklog} from "../../actions/projectTaskActions";
// import InfiniteCarousel from 'react-leaf-carousel';
import Item from './ProjectTask/DivItem'

class Service extends Component {
    componentDidMount() {
        this.props.getBacklog();
    }

    render() {

        const {project_tasks} = this.props.project_tasks;
        // let BoardContent;
        let Dish = [];
        let Drinks = [];
        let Salad = [];
        let Sweets = [];
        let Deserts = [];
        let Other = [];

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
                }  if (tasks[i].props.project_task.menuItem === "Sweets") {
                    Sweets.push(tasks[i]);
                }

                if (tasks[i].props.project_task.menuItem === "Deserts") {
                    Deserts.push(tasks[i]);
                }

                if (tasks[i].props.project_task.menuItem === "Other") {
                    Other.push(tasks[i]);
                }
            }

            return (
                <div className='first'>

                    <Item item={Dish}/>
                    <Item item={Drinks}/>
                    <Item item={Salad}/>
                    <Item item={Sweets}/>
                    <Item item={Deserts}/>
                    <Item item={Other}/>

                </div>


            );
        }


    }
}

Service.propTypes = {
    getBacklog: PropTypes.func.isRequired,
    project_tasks: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    project_tasks: state.project_task
});

export default connect(
    mapStateToProps,
    {getBacklog}
)(Service);