import React from 'react';
import Form from "./components/FormComponent";
import hoverEffect from 'hover-effect';
import axios from 'axios'
// import Scene from './js/Scene'
import Header from './components/Header'
import Home from './components/Home'
import CartItem from "./components/CartItem";
import ListOfCarts from "./components/ListOfCarts";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends React.Component {
    state = {
        data: null,

    };

    componentDidMount() {
        // window.scene = new Scene();
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <Header/>

                    <main className="main">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/list" component={ListOfCarts} />
                            <Route exact path="/:id" component={CartItem} />
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
                </Router>
            </div>
        );
    }
}

export default App;
