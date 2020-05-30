import React, {Component} from 'react';
import Header from "./Header";
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import ListOfCarts from "./ListOfCarts";
import CartItem from "./CartItem";
// import Form from "./components/FormComponent";
// import hoverEffect from 'hover-effect';
// import axios from 'axios'
// import Scene from './js/Scene'

class Layout extends Component {
  render() {
    return (
      <div>
        <Header/>

        <main className="main">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/list" component={ListOfCarts}/>
            <Route exact path="/:id" component={CartItem}/>
          </Switch>

          {/*<img
                            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                            data-hover="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                            className="tile__image"
                            alt="My image"
                            width="400"
                        />

                        <canvas id="stage"></canvas>*/}
        </main>
      </div>
    );
  }
}

export default Layout;