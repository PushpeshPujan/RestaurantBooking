import React from 'react';
import './quicksearch.css';
import {Link} from 'react-router-dom';

const QuickSearchDisplay = (props) => {

    const listMeals = ({mealData}) => {
        if(mealData){
            return mealData.map((item) => {
                return(
                    <Link to={`/list/${item.mealtype}`}>
                        <div className="col-md-4">
                            <div className="tilecontainer">
                                <div className="tileComponent1">
                                    <img src={`./images/${item.name}.png`} className="blockimage"/>
                                </div>
                                <div className="tileComponent2">
                                    <div class="componentHeading">
                                        {item.name}
                                    </div>
                                    <div className="componentSubHeading">
                                        Start  your day with exclusive breakfast option
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }

    return(
        <div class="quickSearchContainer">
            <p class="quickSearchHeading">
                Quick Searches
            </p>
            <p class="quickSearchSubHeading lead">
                Discover Restaurants by meal type
            </p>
            <div className="row">
                {listMeals(props)}
            </div>
           
        </div>
    )
}

export default QuickSearchDisplay