import React from "react";

const Form = props => (
    <form className="form-field" onSubmit={props.userMethod}>
        <div className="form-field">
            <label htmlFor="js-id">input</label>
            <input type="text" id="js-id" name="textData"/>
        </div>

        <div className="form-field">
            <label htmlFor=""></label>
            <input type="text"/>
        </div>

        <button className="button button--accent-fill">Get data</button>
    </form>
);

export default Form;