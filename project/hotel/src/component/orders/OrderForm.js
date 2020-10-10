import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const url = "http://localhost:8900/restaurantDetails";
const burl = "http://localhost:8900/placeorder";

class PlaceOrder extends Component{
    constructor(){
        super()

        this.state={
            order_id:Math.floor(Math.random()*10000),//random value is set here of 4 digit.
            rest_name:'',
            name:'',
            phone:'',
            address:'',
            person:''
        }
    }

    componentDidMount(){
        let restid = this.props.match.params.id//restaurant id value is stored from detailspage of restaurant from where where we fetch restaurant name from mongo db using restid condition and set into the state. 
        axios.get(`${url}/${restid}`)
        .then((response) => {this.setState({rest_name:response.data[0].name})})//rest id is taken from the details page of restaurant using this.props.match.id which is the id of restaurant in both pages.fromdatils page it is navigated fromlinktag of save button using url and here received itno varaible and some column is filled of form automatically here rest name is set into state form previous page.
    }

    handleChangeName = (event) => {
        this.setState({name:event.target.value})//name of person is set into the state
        //actually event.target.value is a value which we receive basically after firing an event in the tag.
    }
    handleChangePhone = (event) => {
        this.setState({phone:event.target.value})//event filled value from phone text will be set into state and also stored into value attribute of every input tag of form
    }
    handleChangeAddress = (event) => {
        this.setState({address:event.target.value})
    }
    handleChangePerson = (event) => {
        this.setState({person:event.target.value})
    }
    handleSubmit = () => {
        var data={
            "_id":this.state.order_id,
            "rest_id":this.state.rest_name,
            "name": this.state.name,
            "phone": this.state.phone,
            "address": this.state.address,
            "person":this.state.person
        }
        fetch(burl,{method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(this.props.history.push('/vieworder'));
        console.log(data)
    }
    render(){
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h4>Place Booking</h4>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label className="control-label">Order_id</label>
                            <input type="text" name="order_id" readOnly className="form-control" value={this.state.order_id}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Restaurent Name</label>
                            <input type="text" name="rest_name" readOnly className="form-control" value={this.state.rest_name}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">User Name</label>
                            <input type="text" name="name"  className="form-control" value={this.state.name} onChange={this.handleChangeName}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Phone</label>
                            <input type="text" name="phone"  className="form-control" value={this.state.phone} onChange={this.handleChangePhone}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Address</label>
                            <input type="text" name="address"  className="form-control" value={this.state.address}
                            onChange={this.handleChangeAddress}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">No. Of Person</label>
                            <select name="person" value={this.state.person}
                            className="form-control" onChange={this.handleChangePerson}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                        <Link to={`/rest/${this.props.match.params.id}`} className="btn btn-danger">Cancel</Link> &nbsp;
                        <button className="btn btn-success" onClick={this.handleSubmit}>
                            Place Order
                        </button>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default PlaceOrder;