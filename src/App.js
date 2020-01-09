import React from 'react';
import Cart from './components/CartComponent'
import Form from "./components/FormComponent";

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

    createElements(n){
        let elements = [];
        for(let i = 0; i <= n; i++){
            elements.push(
                <Cart index={i} key={i}/>
            );
        }
        return elements;
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">

                </header>

                <main className="main">
                    {/*<Form userMethod={this.getUsers}/>*/}

                    <ul className="list">
                        {this.createElements(2)}
                    </ul>

                </main>
            </div>
        );
    }
}

export default App;
