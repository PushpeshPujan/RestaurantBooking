import React,{Component} from 'react';
import './search.css';

const Lurl = "http://localhost:8900/location";
const Rurl = "http://localhost:8900/restaurant?city=";

//life cycle of class component in 3 stages
//1.rendering/mounting- when loading of compnent happens

//inside rendering we have sveral steps which are:-
//a.constructor calling inside it super method and this.state block where intially set state and static data as well as dynamic data.Dynamic data is set after updating of state when state set in componentDidMount method.
//b.render where we return html and dynamically show data after setstate happens
//c.componentDidMount method- api calls happens and state update happens after api calls
//data is fetched and set into state

//2.update stage-again we call back render

//3.unmounting-navigating/jumping from one page to other


class Search extends Component{
    constructor(){
        super()

        this.state={
            title:"Find the best restaurants,cafes, bars",
            location:'',
            restaurants:''
        }
    }

    renderCity=(data)=>{
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.city}>
                       {item.city_name}-{item.name}
                    </option>
                )
            })
        }
    }

    renderRestaurants=(data)=>{
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id}>
                       {item.name}|{item.locality}
                    </option>
                )
            })
        }
    }

    handleCity=(event)=>{
        console.log(event.target.value)
        fetch(`${Rurl}${event.target.value}`,{method:'GET'})
        .then((res) => res.json())//is a promise waits for the data or get the data and helps to reslove our data in json format or format the data.
        .then((data) => {
            this.setState({restaurants:data})//data is set to state by setState method after getiing data from url
        })

    }
    handleRestaurant=(event)=>{
        this.props.rid(event.target.value);
    }

    render(){
        console.log(">location>>>",this.state.location)
        return(
            <div className="imageContainer">
                <div id="logo">
                    e!
                </div>
                <div className="heading">
                   {this.state.title}
                </div>
                <div className="locationSelector">
                    <select className="locationDropDown1" name="input" id="dropdown"
                    onChange={this.handleCity}>
                      <option>------Select City------</option>
                      {this.renderCity(this.state.location)}
                    </select>
                    <select className="locationDropDown1" name="input" id="dropdown" onChange={this.handleRestaurant} >
                      <option>------Select Restaurent------</option>
                      {this.renderRestaurants(this.state.restaurants)}
                    </select>
                   
                </div>
            </div>
        )
    }

    //all api calls happens here when component loads and after that setState happens here.
    componentDidMount(){
        fetch(Lurl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({location:data})
        })
    }
}


export default Search