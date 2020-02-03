import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

const Form = props => (
    <form className="form-field" onSubmit={props.userMethod}>
        <div className="form-field">
            <label htmlFor="js-id">ID</label>
            <input type="text" id="js-id" name="id"/>
        </div>

        <div className="form-field">
            <label htmlFor="">Text</label>
            <input type="text" id="js-text" name="text"/>
        </div>

        <button className="button button--accent-fill button--shadow">Set store</button>

        <button type="button" onClick={props.getStores}>Get Data</button>
    </form>
);

export default Form;