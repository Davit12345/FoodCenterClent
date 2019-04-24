import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";

class OrderFood extends Component {

    render() {
        const { unSendOrders } = this.props;
        return (
            <tr>
                <td>{unSendOrders.id}</td>

                <td>
                    <button   className="btn btn-danger">Send</button>
                </td>
            </tr>
        );
    }

}
const mapStateToProps = state => ({

});
OrderFood.propTypes = {
    unSendOrders: PropTypes.object.isRequired
};
export default connect(
    mapStateToProps
)(OrderFood);