import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addMenu} from "../../actions/projectTaskActions";
import classnames from "classnames";

class Addfood extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            menuItems: "",
            price: "",
            info:"",
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
        const newMenuTask = {
            name: this.state.name,
            menuItems: this.state.menuItems,
            price: this.state.price,
            info: this.state.info
        };
        // console.log(newProjectTask);
        this.props.addMenu(newMenuTask, this.props.history);
    }

    render() {
        return (
            <div className="Addfood">
                <div className="container">

                    <h1>add food page </h1>
                    <div className="addProjectTask">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 m-auto">
                                    <Link to="/" className="btn btn-light">
                                        Back to Board
                                    </Link>

                                    <h4 className="display-4 text-center">
                                        Add /Update Project Task
                                    </h4>

                                    <form onSubmit={this.onSubmit}>

                                        <div className="form-group">

                                            <input type="text" className="form-control form-control-lg"
                                                value={this.state.name}
                                                onChange={this.onChange}
                                                   name="name"
                                                   placeholder="Food name"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <select className="form-control form-control-lg"
                                                    value={this.state.menuItems}
                                                    onChange={this.onChange} name="menuItems"
                                                >
                                                <option value="">Select Items</option>
                                                <option value="Dish">Dish</option>
                                                <option value="Drinks">Drinks</option>
                                                <option value="Salad">Salad</option>
                                                <option value="Sweets">Sweets</option>
                                                <option value="Deserts">Deserts</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <input type="number" className="form-control form-control-lg"
                                                value={this.state.price}
                                                onChange={this.onChange}
                                                   name="price"
                                                   placeholder="Food price"
                                            />
                                        </div>

                                        <div className="form-group">
                                    <textarea className="form-control form-control-lg"
                                        value={this.state.info}
                                        onChange={this.onChange}
                                              placeholder="Info about Food "
                                              name="info"></textarea>


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
Addfood.propTypes = {
    addMenu: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(
    mapStateToProps,
    {addMenu}
)(Addfood);