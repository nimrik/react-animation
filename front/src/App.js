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

    getStores = async (e) => {
        e.preventDefault();
        const api_url = await fetch(`http://localhost:5000/api/v1/stores`);
        const data = await api_url.json();
        this.setState({
            data: JSON.stringify(data)
        });
    };

    setStore = async (e) => {
        e.preventDefault();
        const id = e.target.elements['js-id'].value;
        const text = e.target.elements['js-text'].value;
        const params = {
            id: id,
            text: text
        };
        axios.post('http://localhost:5000/api/v1/stores', params).then(res => {
            console.log(res, "res");
        }).catch(err => console.log(err));
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

                        {/*<p>*/}
                        {/*    {this.state.data}*/}
                        {/*</p>*/}

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
