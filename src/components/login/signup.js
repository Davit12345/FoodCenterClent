import React, {Component} from 'react';
import {connect} from 'react-redux'
import  {NavLink} from "react-router-dom";
import {addUser} from "../../actions/authActions";
import PropTypes from "prop-types";


class Signup extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            name: "",
            surname: "",
            phoneNumber: "",
            age: "",
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
        const newUser = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            surname: this.state.surname,
            phoneNumber: this.state.phoneNumber,
            age: this.state.age
        };
        console.log(newUser);
        this.props.history.push('/verify');
        this.props.addUser(newUser, this.props.history);
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


                                        <div className="form-group">
                                            <input type="password" className="form-control form-control-lg"
                                                   value={this.state.password}
                                                   onChange={this.onChange}
                                                   name="password"
                                                   placeholder="Password"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-lg"
                                                   value={this.state.name}
                                                   onChange={this.onChange}
                                                   placeholder="Name "
                                                   name="name"/>
                                        </div>

                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-lg"
                                                   value={this.state.surname}
                                                   onChange={this.onChange}
                                                   name="surname"
                                                   placeholder="Surname"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-lg"
                                                   value={this.state.phoneNumber}
                                                   onChange={this.onChange}
                                                   name="phoneNumber"
                                                   placeholder="Phone Number"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <input type="number" className="form-control form-control-lg"
                                                   value={this.state.age}
                                                   onChange={this.onChange}
                                                   placeholder="Age "
                                                   name="age"/>
                                        </div>

                                        <input type="submit" className="btn btn-primary btn-block mt-4"/>
                                    </form>

                                    <NavLink className="nav-link" to="/verify">Verification Page</NavLink>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );


    }
}

Signup.propTypes = {
    addUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(
    mapStateToProps,
    {addUser}
)(Signup);