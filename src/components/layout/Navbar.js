
import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import SignedInLinks from  './SingnedInLists'
import SignedOutLinks from  './SingnedOutLists'
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        const {auth} = this.props.auth;
        const links = auth? <SignedInLinks  /> : <SignedOutLinks  />;

        console.log(auth)
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