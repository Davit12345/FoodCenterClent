import React, {Component} from 'react';
import {connect} from "react-redux";

import {VerifyWhitEmailCode} from "../../actions/authActions";
import PropTypes from "prop-types";

class Verify extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            code: "",
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
        const CodeAndEmail = {
            email: this.state.email,
            code: this.state.code,

        };
        console.log(CodeAndEmail);
        this.props.history.push('/');
        this.props.VerifyWhitEmailCode(CodeAndEmail, this.props.history);
    }



    render() {
        return (
            <div className="AddUser">

                <div className="container">

                    <h1>Sign Up</h1>
                    <div className="addUSer">
                        <div className="container">
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
                                        <h4>See in Email</h4>

                                        <div className="form-group">
                                            <input type="password" className="form-control form-control-lg"
                                                   value={this.state.code}
                                                   onChange={this.onChange}
                                                   name="code"
                                                   placeholder=" Verification Code"
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
        );
    }
}

Verify.propTypes = {
    VerifyWhitEmailCode: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(
    mapStateToProps,
    {VerifyWhitEmailCode}
)(Verify);