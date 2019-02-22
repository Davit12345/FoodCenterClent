import React, {Component} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import adminStore from "./components/admin/adminStore"
import service from "./components/user/service"
import home from "./components/home"
import foodlist from './components/admin/foodList'
import createFood from './components/admin/addFood'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import signUp from '../src/components/login/signup'
import Navbar from './components/layout/Navbar'
import verify from './components/login/verify'
import signin from "./components/login/signin";
import choose from './components/user/Choose'
import  manager from './components/manager/ManagerStore'
class App extends Component {
    render() {
        return (

            <BrowserRouter>

                <div className="App">
                    <Navbar/>
                    <Switch>

                        {/*<div className='component'>*/}
                            <Route exact path="/admin" component={adminStore}/>

                            <Route exact path="/admin/foodList" component={foodlist}/>
                            <Route exact path="/admin/addFood" component={createFood}/>

                            <Route exact path="/service" component={service}/>
                            <Route exact path="/choose" component={choose}/>

                            <Route exact path="/" component={home}/>
                        <Route exact path="/manager" component={manager}/>

                            <Route exact path="/signUp" component={signUp}/>

                            <Route exact path="/verify" component={verify}/>

                            <Route exact path="/signIn" component={signin}/>
                        {/*</div>*/}
                    </Switch>
                </div>
            </BrowserRouter>

        );
    }
}

export default App;
