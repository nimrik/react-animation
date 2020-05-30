import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class CartComponent extends Component {
    render() {
        return (
            <li className="box-container">
                {/*<Link to={`/${this.props.data.route}`}/>*/}

                {this.props.data.id}
                {this.props.data.text}
                {/*{props.index === 0 && <img src={sea} alt=""/>}*/}
                {/*{props.index === 1 && <img src={ocean} alt=""/>}*/}
                {/*{props.index === 2 && <img src={seaRocks} alt=""/>}*/}
            </li>
        );
    }
}

export default CartComponent;