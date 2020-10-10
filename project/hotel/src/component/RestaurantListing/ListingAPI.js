import React, {Component} from 'react';
import axios from 'axios';
import ListingDisplay from './ListingDisplay';
import CuisineFilter from '../filters/cuisineFilter';
import CostFilter from '../filters/costFilter';


const lurl="http://localhost:8900/restaurant?mealtype=";

class Listing extends Component{
    constructor(props){
        super(props)

        this.state={
            restListing:''//name of state variable
        }
    }
    setDataPerFilter(sortedData){
        this.setState({restListing:sortedData});//data is set into restListing state variable
    }
 //online 29 the name CuisineFilter and CostFilter should be same as name in the costFilter as well as CuisineFilter of component.
    render(){
        console.log(this.props.match.params.id)
        return(
            <div>
                <div className="row">
                    <div className="col-md-2">
                       
                        <CuisineFilter datapercuisine={(data)=>{this.setDataPerFilter(data)}}/>
                        <hr/>
                        <CostFilter datapercost={(data)=>{this.setDataPerFilter(data)}}/>
                    </div>
                    <div className="col-md-10">
                       
                        <ListingDisplay restdata={this.state.restListing}/>
                    </div>
                </div>
            </div>
        )
    }
 // here on line 35 ListingDisplay is the name of functional component of display file where we send our data to display
    componentDidMount(){
        var mealId=this.props.match.params.id;//id is taken of mealtype
        sessionStorage.setItem('type',mealId);//helps to store in the session of taken mealid from earlier page
        axios.get(`${lurl}${mealId}`)//just like fetch method helps to fetch the data from api
        .then((response) => {this.setState({restListing:response.data})})//api is resolved and set into state
    }
}
export default Listing;
