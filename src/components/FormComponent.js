import React from "react";

const Form = props => (
    <form className="form-field" onSubmit={props.userMethod}>
        <label htmlFor="js-id">input</label>
        <input type="text" id="js-id" name="textData"/>

        <button className="button button--accent-fill">Get data</button>
    </form>
);

export default Form;