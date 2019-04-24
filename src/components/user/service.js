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
                <div  clssName="products">
                    <div clssName='service'style={{ background:'yellow',width: '50px',height: '1800px',marginBlockStart:'1%',float:'left'}}>   </div>
                    <div clssName='service'style={{ background:'green',width: '50px',height: '1800px',marginBlockStart:'1%',float:'right'}}>   </div>

                    <div  clssName="product" style={{ marginLeft:'10%',width: '80%',textAlign: 'center'}} >

                    <div className='first'>




                    {teg('dish',Dish)}


                    {teg('drinks',Drinks)}

                    {teg('salad',Salad)}
                    {teg('sweets',Sweets)}


                    {teg('deserts',Deserts)}

                    {teg('other',Other)}

                    </div></div>
                </div>
            );
        }


    }
}
function teg( title,name){
    if(name.length>0)
    {
        return (<div id="Item">
            <h3>{title}</h3>
            <Item item={name}/>
        </div>)
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