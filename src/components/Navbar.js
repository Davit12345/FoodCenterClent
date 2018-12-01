import React, {Component} from 'react';
import  sizeLess from "../sizeLess.css"


export default  class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
                <div className="container">
                    <p>
                    <a style={sizeLess} className="navbar-brand" href="/">
                      Home
                    </a>
                    </p>
                    <p>
                    <a className="navbar-brand" href="/buyFood">
                        buy Food
                    </a></p>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon"/>
                    </button>
                </div>
            </nav>
        );
    }
}