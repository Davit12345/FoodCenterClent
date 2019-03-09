import React, {Component} from 'react';
import {connect} from "react-redux";
import {addTable, addAddress} from "../../actions/ProductsActions";

import PropTypes from "prop-types";


class TableOrHome extends Component {
    constructor() {
        super();
        this.state = {
            count: "",
            sendDateHome: "",
            city: "",
            street: "",
            home: "",
            sendDateTable: "",
            tableNumber:"",
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.handleSubmitTable = this.handleSubmitTable.bind(this);
        this.handleSubmitAddress = this.handleSubmitAddress.bind(this);

    }
    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmitTable(e) {
        e.preventDefault();
        const table = {
            count: this.state.count,
            sendDateTable: this.state.sendDateTable,
            tableNumber: this.state.tableNumber,

        };
        this.props.history.push('/');
        this.props.addTable(table);
    }
    handleSubmitAddress(e) {
        e.preventDefault();
        const address = {
            city: this.state.city,
            street: this.state.street,
            home: this.state.home,
            sendDateHome: this.state.sendDateHome,


        };
        this.props.history.push('/');
        this.props.addAddress(address);
    }
    render() {
        return (
            <div className="twoComponents">
                <h2>Check address or table</h2>

                <div className="Table" style={{ marginLeft:'50%',width: '40%',textAlign: 'center', height: '250px',background: 'yellow', position: 'absolute'}}>
                        Table
                    <form onSubmit={this.handleSubmitTable}>

                        <label>
                            Count:
                            <input type="number" value={this.state.count}name="count"
                                   onChange={this.onChange} />
                        </label><br/><br/>
                        <label>
                            send Date:
                            <input type="text"  value={this.state.sendDateTable}name="sendDateTable"
                                   onChange={this.onChange}/>
                        </label>
                        <label>
                            table Number if you get table:
                            <input type="number"  value={this.state.tableNumber}name="tableNumber"
                                   onChange={this.onChange}/>
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    <div className="t1" style={{ background: 'url(https://drive.google.com/uc?id=1L2hFlb3fQ322kKosggsH-c_bHZglIMGy)', height: '180px',marginTop:'100px'}}>

                    </div>
                </div>




                <div className="address" style={{marginLeft:'5%', width: '40%',textAlign: 'center',  height: '250px',background: 'yellowgreen'}}>
                    Address
                    <form onSubmit={this.handleSubmitAddress}>
                        <label>
                            City:
                            <input type="text" value={this.state.city}
                                   onChange={this.onChange} placeholder="city" name="city"/>
                        </label>
                        <br/>
                        <label>
                            Street:
                            <input type="text" value={this.state.street}
                                   onChange={this.onChange}  placeholder="street" name="street"/>
                        </label><br/>
                        <label>
                            Address:
                            <input type="text" value={this.state.home}
                                   onChange={this.onChange} placeholder="home" name="home"/>
                        </label><br/>

                        <label>
                            send Date:
                            <input type="text"  value={this.state.sendDateHome}onChange={this.onChange}name="sendDateHome"
                                    placeholder="time"/>
                        </label>

                        <input type="submit" value="Submit" />
                    </form>
                    <div className="h1" style={{ background: 'url(https://drive.google.com/uc?id=1aCwzPRfUsEpAGG6YT44mvNEj5OVhvSDH', height: '180px'}}>

                    </div>
                </div>
            </div>
        );
    }
}

TableOrHome.propTypes = {
    addTable: PropTypes.func.isRequired,
    addAddress: PropTypes.func.isRequired,

    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(
    mapStateToProps,
    {addTable,addAddress}
)(TableOrHome);