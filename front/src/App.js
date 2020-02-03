import React from 'react';
import Cart from './components/CartComponent'
import Form from "./components/FormComponent";
import hoverEffect from 'hover-effect';
import axios from 'axios'
// import Scene from './js/Scene'
// import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends React.Component {
    state = {
        data: null,
        routerData: [
            {route: 1, name: 'Dinosaurs'},
            {route: 2, name: 'Birds'},
            {route: 3, name: 'Reptiles'},
        ]
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

    static createElements(n){
        let elements = [];
        for(let i = 0; i <= n.length-1; i++){
            console.log(i, "consoling");
            elements.push(
                <Cart index={i} key={i} data={n[i]}/>
            );
        }
        return elements;
    }

    static init() {
        let disortions = [
            './static/distortions/bubbles.jpg',
            './static/distortions/ramen.jpg',
            './static/distortions/stripe1.png',
            // './static/images/stripe1.png',
        ],
            showImages = [
                './static/images/ocean-calm.jpg',
                './static/images/IMG_3086.jpg',
                './static/images/ice2.jpg',
                // './static/images/ocean-calm.jpg',
            ],
            replacement = [
                './static/images/sea-rocks.jpg',
                './static/images/IMG_3087.jpg',
                './static/images/ice.jpg',
                // './static/images/sea-rocks.jpg',
            ]

        document.querySelectorAll('.box-container a').forEach((item, index) => {
            new hoverEffect({
                parent: item,
                intensity: 10,
                image1: showImages[index],
                image2: replacement[index],
                displacementImage: disortions[index]
            });
        })

    }

    componentDidMount() {
        App.init();
        // window.scene = new Scene();
    }

    render() {
        return (
            <div className="App">
                {/*<Header routes={this.state.routerData}/>*/}



                <main className="main">
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home} />
                        </Switch>


                        <a href="/">Home</a>
                        <ul className="list">
                            {App.createElements(this.state.routerData)}
                        </ul>

                        <Form userMethod={this.setStore}/>

                        <button type="button" onClick={this.getStores}>Get Data</button>

                        <p>
                            {this.state.data}
                        </p>

                        {/*<img
                            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                            data-hover="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                            className="tile__image"
                            alt="My image"
                            width="400"
                        />

                        <canvas id="stage"></canvas>*/}

                    </Router>

                </main>

            </div>
        );
    }
}

export default App;
