import React, {Component} from 'react';
import {connect} from "react-redux";
import {deleteOneTask} from '../../../actions/ProductsActions'
import PropTypes from "prop-types";

class ChooseItem extends Component {

    onDeleteClick(id){

        this.props.deleteOneTask(id)
}
    componentWillReceiveProps(nextProps) {
        if (nextProps) {
            this.setState({choose :nextProps.choose});
        }
    }
    render() {

        const { choose } = this.props;
        return (
            <tr>
                <td>{choose.id}</td>
                <td>{choose.quantity}</td>
                <td>{choose.menu.name}</td>
                <td>{choose.menu.price}</td>
                <td>
                    <button onClick={this.onDeleteClick.bind(this, choose.id)}  className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );

    }
}
ChooseItem.propTypes = {
    deleteOneTask: PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired

};
const mapStateToProps = state => ({
    deleteOneTask: state.choose,
    auth:state.auth
});

export default connect(
    mapStateToProps,{deleteOneTask}
)(ChooseItem);