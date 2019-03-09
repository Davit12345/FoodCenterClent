import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTask} from '../../../actions/ProductsActions'
import PropTypes from "prop-types";

class FoodItem extends Component {

    onDeleteClick(id){
        this.props.deleteTask(id)
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps) {
            this.setState({project_task :nextProps.project_task});
        }
    }

    render() {
        const { project_task } = this.props;
        return (
            <tr>
                <td>{project_task.id}</td>
                <td>{project_task.name}</td>
                <td>{project_task.menuItem}</td>
                <td>{project_task.price}</td>
                <td>{project_task.info}</td>
                <td>
                    <button onClick={this.onDeleteClick.bind(this, project_task.id)}  className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}


FoodItem.propTypes = {
    deleteTask: PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired

};
const mapStateToProps = state => ({
    deleteTask: state.project_task,
    auth:state.auth
});

export default connect(
    mapStateToProps,{deleteTask}
)(FoodItem);