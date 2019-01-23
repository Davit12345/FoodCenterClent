import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class SingnedOutLists extends Component {
    render() {
        return (
            <ul className="nav justify-content-end" >
              <li className="nav-item">
                  <NavLink className="nav-link" to="/signIn">signIn</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" to="/signUp">signUp</NavLink>
              </li>


          </ul>
        );
    }
}

export default SingnedOutLists;