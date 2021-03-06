import React,{Component} from 'react';
import axios from 'axios';


const url="http://localhost:8900/restaurantlist";

class CostFilter extends Component{
    filterLogic=(event)=>{
        let mealType=sessionStorage.getItem('type');
        let cost=(event.target.value).split(',');
        let lcost=cost[0];
        let hcost=cost[1];
        let curl;
        if(event.target.value==" " || event.target.value==""){
            curl=`${url}/${mealType}`;
        }
        else{
            curl=`${url}/${mealType}?lcost=${lcost}&hcost=${hcost}`;
        }
        axios.get(curl)
        .then((response)=>{this.props.datapercost(response.data)})

    }
    render(){
        return(
           <React.Fragment>
               <center>Cost Filter</center>
               <div onChange={this.filterLogic}>
                    <label className="radio">
                        <input type="radio" value="" name="cuisine"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="100,200" name="cuisine"/>100-200
                    </label>
                    <label className="radio">
                        <input type="radio" value="201,300" name="cuisine"/>201-300
                    </label>
                    <label className="radio">
                        <input type="radio" value="301,400" name="cuisine"/>301-400
                    </label>
                    <label className="radio">
                        <input type="radio" value="401,500" name="cuisine"/>401-500
                    </label>
                    <label className="radio">
                        <input type="radio" value="501,1000" name="cuisine"/>501-1000 
                    </label>

               </div>
           </React.Fragment>
        )
    }
}
export default CostFilter;