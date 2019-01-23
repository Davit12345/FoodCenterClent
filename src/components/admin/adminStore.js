import React, {Component} from 'react';
import { Link } from "react-router-dom";

class AdminStore extends Component {
    render() {
        return (
            <div>

                <div className="container">
                    <Link to="admin/foodList" className="btn btn-primary mb-3">
                        <i className="fas fa-plus-circle"> Food Controll</i>
                    </Link>

                    <Link to="/crudUser" className="btn btn-primary mb-3">
                        <i className="fas fa-plus-circle"> User Controll</i>
                    </Link>

                    <br />
                    <hr />

                </div>
            </div>
        );
    }
}

export default AdminStore;