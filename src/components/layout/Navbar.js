
import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import SignedInLinks from  './SingnedInLists'
import SignedOutLinks from  './SingnedOutLists'
import {Link} from "react-router-dom";
import './style.css'
import Cookies from 'universal-cookie'

class Navbar extends Component {
    render() {
        const cookies = new Cookies();
        var access_token=cookies.get('token');

        const links = access_token? <SignedInLinks  /> : <SignedOutLinks  />;

        return (
            <div className='layout'>
                <nav className="navbar navbar-dark bg-dark">

                    <div className="container">

                        <Link to='/' className="brand-logo">Home</Link>

                        {links}
                    </div>
                </nav>
            </div>

        );
    }
}


Navbar.propTypes = {

    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps
)(Navbar);