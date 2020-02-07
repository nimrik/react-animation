import React, {Component} from 'react';
import axios from "axios";

class FormComponent extends Component {
    state = {
        data: ""
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

    render() {
        return (
            <form className="form-field" onSubmit={this.setStore}>
                <div className="form-field">
                    <label htmlFor="js-id">ID</label>
                    <input type="text" id="js-id" name="id"/>
                </div>

                <div className="form-field">
                    <label htmlFor="">Text</label>
                    <input type="text" id="js-text" name="text"/>
                </div>

                <button className="button button--accent-fill button--shadow">Set store</button>

                <button type="button" onClick={this.getStores}>Get Data</button>

                <p>
                    {this.state.data.toString()}
                </p>
            </form>
        );
    }
}

export default FormComponent;