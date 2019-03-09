import React, {Component} from 'react';
import {connect} from "react-redux";
import {LoginIn} from "../../actions/authActions";
import PropTypes from "prop-types";
import './style.css'

class Signin extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        const login = {
            email: this.state.email,
            password: this.state.password,

        };
        this.props.history.push('/');
        this.props.LoginIn(login, this.props.history);
    }


    render() {
        return (
            <div className="SignIn">

                <div className="container">

                    <h1>Sign In</h1>
                    <div className="addUSer">
                        <div className="container">
                            <div className="login-wrap">
                                <div className="login-html">
                                    <div className="row">
                                        <div className="col-md-8 m-auto">


                                            <form onSubmit={this.onSubmit}>

                                                <div className="form-group">

                                                    <input type="email" className="form-control form-control-lg"
                                                           value={this.state.email}
                                                           onChange={this.onChange}
                                                           name="email"
                                                           placeholder="Email"
                                                    />
                                                </div>


                                                <div className="form-group">
                                                    <input type="password" className="form-control form-control-lg"
                                                           value={this.state.password}
                                                           onChange={this.onChange}
                                                           name="password"
                                                           placeholder=" Password"
                                                    />
                                                </div>


                                                <input type="submit" className="btn btn-primary btn-block mt-4"/>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                {/*/////*/}
                {/*<div className="bodylogin">*/}
                {/*<div className="login-wrap">*/}
                {/*<div className="login-html">*/}

                {/*<input id="tab-1" type="radio" name="tab" className="sign-in" checked/>*/}
                {/*<label htmlFor="tab-1"*/}
                {/*className="tab">*/}
                {/*Sign*/}
                {/*In</label>*/}
                {/*<input id="tab-2" type="radio" name="tab" className="for-pwd"/>*/}
                {/*<label htmlFor="tab-2"*/}
                {/*className="tab">*/}
                {/*Forgot*/}
                {/*Password</label>*/}
                {/*<div className="login-form">*/}
                {/*<div className="sign-in-htm">*/}
                {/*<div className="group">*/}
                {/*<label htmlFor="user" className="label">Username or Email</label>*/}
                {/*<input id="user" type="text" className="input"/>*/}
                {/*</div>*/}
                {/*<div className="group">*/}
                {/*<label htmlFor="pass" className="label">Password</label>*/}
                {/*<input id="pass" type="password" className="input" data-type="password"/>*/}
                {/*</div>*/}
                {/*<div className="group">*/}
                {/*<input type="submit" className="button" value="Sign In"/>*/}
                {/*</div>*/}
                {/*<div className="hr"></div>*/}
                {/*</div>*/}
                {/*<div className="for-pwd-htm">*/}
                {/*<div className="group">*/}
                {/*<label htmlFor="user" className="label">Username or Email</label>*/}
                {/*<input id="user" type="text" className="input"/>*/}
                {/*</div>*/}
                {/*<div className="group">*/}
                {/*<input type="submit" className="button" value="Reset Password"/>*/}
                {/*</div>*/}
                {/*<div className="hr"></div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
            </div>

        );
    }
}

Signin.propTypes = {
    LoginIn: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(
    mapStateToProps,
    {LoginIn}
)(Signin);