import React from 'react';
import Cart from './components/CartComponent'
// import Form from "./components/FormComponent";
import hoverEffect from 'hover-effect'
import Scene from './js/Scene'

class App extends React.Component {

    state = {
        data: {},
    }

    getUsers = async (e) => {
        e.preventDefault();
        const id = e.target.elements['js-id'].value;
        const api_url = await fetch(`https://jsonplaceholder.typicode.com/todos/${!!Number(id) && typeof +id === 'number' ? id : 1}`);
        const data = await api_url.json();

        this.setState({
            data: data
        })
    }

    static createElements(n){
        let elements = [];
        for(let i = 0; i <= n; i++){
            elements.push(
                <Cart index={i} key={i}/>
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

        document.querySelectorAll('.box-container').forEach((item, index) => {
            new hoverEffect({
                parent: item,
                intensity: 0.3,
                image1: showImages[index],
                image2: replacement[index],
                displacementImage: disortions[index]
            });
        })

    }

    componentDidMount() {
        App.init();
        window.scene = new Scene();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">

                </header>

                <main className="main">
                    {/*<Form userMethod={this.getUsers}/>*/}

                    <ul className="list">
                        {App.createElements(2)}
                    </ul>

                    <img
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                        data-hover="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                        className="tile__image"
                        alt="My image"
                        width="400"
                    />

                    <canvas id="stage"></canvas>


                </main>

            </div>
        );
    }
}

export default App;
