import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import FoodCenter from "./components/FoodCenter"
import addFood from "./components/admin/addfood"
import allFood from "./components/user/seeFoods"
import  {Provider} from "react-redux";
import  store from "./store";

import {BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Provider store={store}>

            <Router>
                <div>
                    <Navbar/>
                    <Route exact path="/" component={FoodCenter}/>

                    <Route exact path="/addFood" component={addFood}/>

                    <Route exact path="/buyFood" component={allFood}/>

                </div>
            </Router>
            </Provider>

        );
    }
}

export default App;
