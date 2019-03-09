import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getAllProducts} from "../../actions/ProductsActions";
import FoodItem from './items/foodItem'
import {Link} from "react-router-dom";

class FoodList extends Component {
    componentDidMount() {
        this.props.getAllProducts();
    }

    render() {

        const {project_tasks} = this.props.project_tasks;


        if (project_tasks.length < 1) {
            return (
                <div className="alert alert-info text-center" role="alert">
                    No Project Tasks on this board
                </div>
            );
        } else {
            const tasks = project_tasks.map(project_task => (
                <FoodItem key={project_task.id} project_task={project_task}/>
            ));


            return (
                < div className="container">

                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Info</th>

                        </tr>
                        </thead>
                        <tbody>
                        {tasks}
                        </tbody>
                    </table>

                    <Link to="/admin/addFood" className="btn btn-primary mb-3">
                        <i className="fas fa-plus-circle"> Add Food </i>
                    </Link>
                </div>


            );
        }

    }
}

FoodList.propTypes = {
    getAllProducts: PropTypes.func.isRequired,
    project_tasks: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    project_tasks: state.project_task
});

export default connect(
    mapStateToProps,
    {getAllProducts}
)(FoodList);