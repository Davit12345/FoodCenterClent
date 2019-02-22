import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import  {connect} from  'react-redux'
import { signOut } from '../../actions/authActions'
import PropTypes from "prop-types";
import Cookies from 'universal-cookie'

class SingnedInLists extends Component {
    signOut(e){
        e.preventDefault();

        this.props.signOut();

    }


    render() {
        const cookies = new Cookies();
        var role_type = cookies.get('role');
        if (role_type === "ROLE_ADMIN") {

            return (
                <ul className="nav ">

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/service">Service</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin">admin</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/manager">manager</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/choose">choose</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" onClick={this.signOut.bind(this)}>Log Out</NavLink>
                    </li>
                </ul>
            )
        } else if (role_type === "MANAGER") {
            return (
                <ul className="nav ">

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/service">Service</NavLink>
                    </li>


                    <li className="nav-item">
                        <NavLink className="nav-link" to="/manager">manager</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/choose">choose</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" onClick={this.signOut.bind(this)}>Log Out</NavLink>
                    </li>
                </ul>
            )
        } else if (role_type === "ROLE_USER") {
            return (


                <ul className="nav ">

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/service">Service</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/choose">choose</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" onClick={this.signOut.bind(this)}>Log Out</NavLink>
                    </li>
                </ul>
            );
        }
    }
}
SingnedInLists.propTypes = {
    signOut: PropTypes.func.isRequired
};


export default connect(null, {signOut})(SingnedInLists)
