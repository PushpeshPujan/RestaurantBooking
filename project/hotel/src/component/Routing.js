import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './home/Home';
import Header from './Header';
import ListingAPI from './RestaurantListing/ListingAPI';
import RestaurantDetails from './RestaurantDetails/RestaurantDetails';
import OrderForm from './orders/OrderForm';
import OrderAPI from './orders/OrderAPI';
import Footer from './Footer';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/list/:id" component={ListingAPI}></Route>
                <Route exact path="/rest/:id" component={RestaurantDetails}></Route>
                <Route exact path="/order/:id" component={OrderForm}></Route>
                <Route exact path="/vieworder" component={OrderAPI}></Route>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}
 //we use exact to remove common thing from every page other wise landing page design will come to every other page
        //here inside component property name of file/component is written
export default Routing//Routing component is exported.