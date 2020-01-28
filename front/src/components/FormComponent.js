import React from "react";

const Form = props => (
    <form className="form-field" onSubmit={props.userMethod}>
        <div className="form-field">
            <label htmlFor="js-id">input</label>
            <input type="text" id="js-id" name="id"/>
        </div>

        <div className="form-field">
            <label htmlFor=""></label>
            <input type="text" id="js-text" name="text"/>
        </div>

        <button className="button button--accent-fill">Set store</button>
    </form>
);

export default Form;