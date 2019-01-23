import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
// import  {connect} from  'react-redux'
// import { signOut } from '../../actions/authActions'

class SingnedInLists extends Component {
    render() {
        return (
            <ul className="nav " >

              <li className="nav-item">
                  <NavLink className="nav-link" to="/service">Service</NavLink>
              </li>

              <li className="nav-item">
                  <NavLink className="nav-link" to="/admin">admin</NavLink>
              </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/choose">choose</NavLink>
                </li>
              {/*<li className="nav-item">*/}
                 {/*<NavLink onClick={this.signOut} >Log Out</NavLink>*/}
              {/*</li>*/}
          </ul>
        );
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         signOut: () => dispatch(signOut())
//     }
// }

// export default connect(null, mapDispatchToProps)(SingnedInLists)
export default  SingnedInLists;