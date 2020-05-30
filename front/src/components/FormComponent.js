import React, {Component} from 'react';
import axios from "axios";

class FormComponent extends Component {
  state = {
    data: ""
  };

  setStore = async (e) => {
    e.preventDefault();
    const id = e.target.elements['js-id'].value;
    const text = e.target.elements['js-text'].value;
    // const image = e.target.elements['js-image'].files[0];
    const formData = new FormData();
    formData.append('id', id);
    formData.append('text', text);
    // formData.append('image', image);
    const params = {
      id: id,
      text: text
    }

    axios.post('http://localhost:5000/api/v1/stores',
      params,
      // {
      //   headers: {
      //     'Content-Type': 'multipart/form-data'
      //   }
      // }
    ).then(res => {
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

        {/*<div className="form-field">*/}
        {/*  <label htmlFor="">Image</label>*/}
        {/*  <input type="file" accept="image/png, image/jpeg, image/jpg, image/gif" id="js-image" name="image"/>*/}
        {/*</div>*/}

        <button className="button button--accent-fill button--shadow">Set store</button>
      </form>
    );
  }
}

export default FormComponent;