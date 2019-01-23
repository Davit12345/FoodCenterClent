import React, {Component} from 'react';
import {Link} from "react-router-dom";
import FoodItem from "./ChooseItem";
import {connect} from "react-redux";
import {getChoose} from "../../../actions/projectTaskActions";
import PropTypes from "prop-types";


class Choose extends Component {

    componentDidMount() {
        this.props.getChoose(this.props.auth);
    }

    render() {
        const {choose} = this.props.choose;

console.log(choose.length)
        if (choose.length < 1) {
            return (
                <div className="alert alert-info text-center" role="alert">
                    No Project Tasks on this board
                </div>
            );

         }

            else {
                var commonPrice=0;
            choose.map(choose => (
                commonPrice+=choose.quantity*choose.menu.price
            ))

            const tasks = choose.map(choose => (
                <FoodItem key={choose.id} choose={choose}/>
            ));


            return (

                < div className="container">

                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>quantity</th>
                            <th>name</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tasks}
                        </tbody>
                        <h3> common price {commonPrice}</h3>
                    </table>

                    <Link to="/admin/addFood" className="btn btn-primary mb-3">
                        <i className="fas fa-plus-circle">Buy</i>
                    </Link>
                </div>

            );
        }
    }
}

    Choose.propTypes = {
        getChoose: PropTypes.func.isRequired,
       // choose: PropTypes.object.isRequired,
        auth:PropTypes.object.isRequired
};

    const mapStateToProps = state => ({
    choose: state.choose,
        auth: state.auth
});

    export default connect(
    mapStateToProps,
    {getChoose}
) (Choose);