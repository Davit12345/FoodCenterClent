import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import  {addItem} from '../../../actions/projectTaskActions'
import ice from '../../../style/img/ice.jpg'
  class FoodTaskItem extends Component {


      constructor() {
          super();
          this.state = {
              name:"",
              quantity: "",
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

              const item = {
                  name: this.props.project_task.name,
                  quantity: this.state.quantity,

              };

              this.props.addItem(item, this.props.history);

      }


    render() {

        const { project_task } = this.props;

        return (
            <div className="card mb-1 bg-light">
                <img  src={ice}
                     className="img-fluid" alt=""/>
                <form  onSubmit={this.onSubmit}>

                <div className="card-body bg-light">
                    <h5 className="card-title">{project_task.name}</h5>


                    <p className="card-text text-truncate ">
                        {project_task.menuItem}
                    </p>
                    <p className="card-text text-truncate ">
                       price is  {project_task.price} $
                    </p>
                    <div className="form-group">

                        <input type="number" className="form-control form-control-lg"
                               value={this.state.quantity}
                               onChange={this.onChange}
                               name="quantity"
                               placeholder="quantity"
                        />
                    </div>

                    <input type="submit" className="btn btn-primary btn-block mt-4"/>

                </div>
                </form >
            </div>
        );
    }
}


FoodTaskItem.propTypes = {
    addItem: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
    addItem: state.project_task,
    auth:state.auth
});

export default connect(
    mapStateToProps,
    {addItem}
)(FoodTaskItem);