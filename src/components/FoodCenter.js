import React, {Component} from 'react';
import { Link } from "react-router-dom";

class FoodCenter extends Component {
    render() {
        return (
            <div>

                <div className="container">
                    <Link to="/addFood" className="btn btn-primary mb-3">
                        <i className="fas fa-plus-circle"> add Food in Menu</i>
                    </Link>
                    <br />
                    <hr />

                </div>
            </div>
        );
    }
}

export default FoodCenter;