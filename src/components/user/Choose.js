import React, {Component} from 'react';
import FoodItem from "./items/ChooseItem";
import {connect} from "react-redux";
import {getChoose, buyProduct} from "../../actions/ProductsActions";
import PropTypes from "prop-types";
import Cookies from 'universal-cookie'
class Choose extends Component {


    componentDidMount() {
        const cookies = new Cookies();
        if ( cookies.get('token') === null) {
            this.props.history.push('/signIn')
        }
        this.props.getChoose();
    }



    onBuyClick(e) {
        e.preventDefault();
        this.props.history.push('/haveTableOrHome')
        this.props.buyProduct();
    }
    render() {
        const {choose} = this.props.choose;

        if (choose.length < 1) {
            return (
                <div className="alert alert-info text-center" role="alert">
                    No Project Tasks on this board
                </div>
            );

        } else {
            var commonPrice = 0;
            choose.map(choose => (
                commonPrice += choose.quantity * choose.menu.price
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
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tasks}
                        </tbody>
                    </table>
                    <h3>  The total amount is: {commonPrice} </h3>
                    {/*<button onClick={this.onBuyClick} className="btn btn-danger">buy</button>*/}
                    <button onClick={this.onBuyClick.bind(this)} className="btn btn-success">buy</button>


                </div>
            );
        }
    }
}

Choose.propTypes = {
    getChoose: PropTypes.func.isRequired,
    buyProduct: PropTypes.func.isRequired
    , auth: PropTypes.object.isRequired

};

const mapStateToProps = state => ({
    choose: state.choose,
    auth: state.auth
});

export default connect(
    mapStateToProps,
    {buyProduct, getChoose}
)(Choose)