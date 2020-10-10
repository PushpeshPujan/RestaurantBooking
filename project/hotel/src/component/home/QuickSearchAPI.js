import React,{Component} from 'react';
import QuickSearchDisplay from './QuickSearchDisplay';

const Murl="http://localhost:8900/cuisine";

class QuickSearch extends Component{
    constructor(){
        super()

        this.state={
           mealType:''
        }
    }

    render(){
        return(
            <QuickSearchDisplay mealData={this.state.mealType}/>
        )
    }

    componentDidMount(){
        fetch(Murl,{method:"GET"})
        .then((res) => res.json())
        .then((data) => {
            this.setState({mealType:data})
        })
    }
}

export default QuickSearch