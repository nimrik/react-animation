import React, {Component} from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Cart from "./CartComponent";
import hoverEffect from "hover-effect";
import Form from "./FormComponent";

class ListOfCarts extends Component {
  state = {
    routerData: [
      {route: 1, name: 'Dinosaurs'},
      {route: 2, name: 'Birds'},
      {route: 3, name: 'Reptiles'},
    ],
    showForm: false,
    data: "",
  };

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
    ListOfCarts.init();
  }

  addElement = ({route, name}) => {
    let data = this.state.routerData;
    data.push({route: route, name: name});
    this.setState({routerData: data});
  };

  showForm = (state) => {
    this.setState({showForm: typeof state !== 'undefined' ? state : !this.state.showForm});
  };

  createElements = () => {
    let elements = [];
    let n = this.state.data.data;
    for (let i = 0; i <= n.length - 1; i++) {
      elements.push(
        <CSSTransition
          key={i}
          timeout={500}
          classNames="item"
        >
          <Cart index={i} data={n[i]}/>
        </CSSTransition>
      );
      console.log(n[i], "i");
    }
    return elements;
  };

  getStores = async (e) => {
    e.preventDefault();
    const api_url = await fetch(`http://localhost:5000/api/v1/stores`);
    const data = await api_url.json();
    console.log(data)
    this.setState({
      data: data
    });
  };

  removeStores = () => {
    this.setState({
      data: ""
    })
  }

  render() {
    return (
      <div className="form">
        {/*<TransitionGroup className="list" tag="ul">*/}
        {/*  {this.createElements()}*/}
        {/*</TransitionGroup>*/}

        {/*<button onClick={() => this.addElement({route: 4, name: 'sos'})} type="button"*/}
        {/*        className="button button--shadow button--accent-fill">Add 1 dummy item*/}
        {/*</button>*/}

        {!this.state.showForm && <button
          className="button button--accent-fill button--shadow my-3"
          onClick={() => this.showForm()}
        >
          Add
        </button>}

        {this.state.showForm && <Form userMethod={this.setStore} getStores={this.getStores}/>}

        {this.state.showForm && <button className="button--shadow" onClick={() => this.showForm(false)}>Close</button>}

        {!this.state.data ?
          <button type="button" onClick={this.getStores}>Get Data</button>
          :
          <button type="button" onClick={this.removeStores}>Clear</button>
        }

        {/*<p>{this.state.data && this.state.data.data.toString()}</p>*/}

        {this.state.data && this.createElements()}
      </div>
    );
  }
}

export default ListOfCarts;