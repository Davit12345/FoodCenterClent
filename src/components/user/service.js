import React, {Component} from 'react';
import ProjectTaskItem from "./items/foodTaskItem"
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getAllProducts} from "../../actions/ProductsActions";
// import InfiniteCarousel from 'react-leaf-carousel';
import Cookies from 'universal-cookie'
import  './style.css'
import Item from './items/ScrollItem'

class Service extends Component {
    componentDidMount() {
        const cookies = new Cookies();
        if (cookies.get('token') == null) {
            this.props.history.push('/signIn')
        }

        this.props.getAllProducts();

    }

    render() {

        const {project_tasks} = this.props.project_tasks;
        // let BoardContent;
        let Dish = [];
        let Drinks = [];
        let Salad = [];
        let Sweets = [];
        let Deserts = [];
        let Other = [];

        if (project_tasks.length < 1) {
            return (
                <div className="alert alert-info text-center" role="alert">
                    No Project Tasks on this board
                </div>
            );
        } else {
            const tasks = project_tasks.map(project_task => (
                <ProjectTaskItem key={project_task.id} project_task={project_task}/>
            ));

            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].props.project_task.menuItem === "Dish") {
                    Dish.push(tasks[i]);
                }

                if (tasks[i].props.project_task.menuItem === "Drinks") {
                    Drinks.push(tasks[i]);
                }

                if (tasks[i].props.project_task.menuItem === "Salad") {
                    Salad.push(tasks[i]);
                }
                if (tasks[i].props.project_task.menuItem === "Sweets") {
                    Sweets.push(tasks[i]);
                }

                if (tasks[i].props.project_task.menuItem === "Deserts") {
                    Deserts.push(tasks[i]);
                }

                if (tasks[i].props.project_task.menuItem === "Other") {
                    Other.push(tasks[i]);
                }
            }

            return (
                <div  clssName="product" style={{ marginLeft:'10%',width: '80%',textAlign: 'center'}} >
                <div className='first'>
                    <div id="Item">
                        <h3> Dish</h3>
                        <Item item={Dish}/>
                    </div>

                    <div id="Item">
                        <h3> Drinks</h3>
                        <Item item={Drinks}/>
                    </div>
                    <div  id="Item">
                        <h3> Salad</h3>
                        <Item item={Salad}/>
                    </div>

                    <div id="Item">
                        <h3> Sweets</h3>
                        <Item item={Sweets}/>
                    </div>

                    <div id="Item">
                        <h3> Deserts</h3>
                        <Item item={Deserts}/>
                    </div>

                    <div id="Item">
                        <h3> Other</h3>
                        <Item item={Other}/>
                    </div>
                </div>

                </div>

            );
        }


    }
}


Service.propTypes = {
    getAllProducts: PropTypes.func.isRequired,
    project_tasks: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    project_tasks: state.project_task,
    auth: state.auth
});

export default connect(
    mapStateToProps,
    {getAllProducts}
)(Service);