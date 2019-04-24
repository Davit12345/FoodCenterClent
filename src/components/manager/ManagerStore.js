import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {getUnSendOrders} from "../../actions/ProductsActions";

class ManagerStore extends Component {

    componentDidMount() {
        this.props.getUnSendOrders();
    }
    render() {
        const { unSendOrders } = this.props;
        console.log(unSendOrders)
        return (

            <h1>hello world </h1>

        )


}
}


const mapStateToProps = state => ({

});
ManagerStore.propTypes = {
    getUnSendOrders: PropTypes.func.isRequired,
};
export default connect(
    mapStateToProps,{getUnSendOrders}
)(ManagerStore);