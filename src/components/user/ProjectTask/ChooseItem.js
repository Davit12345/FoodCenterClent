import React, {Component} from 'react';
import {connect} from "react-redux";

class ChooseItem extends Component {
    render() {

        const { choose } = this.props;
        return (
            <tr>
                <td>{choose.id}</td>
                <td>{choose.quantity}</td>
                <td>{choose.menu.name}</td>
                <td>{choose.menu.price}</td>
            </tr>
        );

    }
}

export default connect(
    null,
)(ChooseItem);