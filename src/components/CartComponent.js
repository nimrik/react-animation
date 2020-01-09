import React from "react";
import ocean from "../static/images/ocean-calm.jpg"
import sea from "../static/images/sea.jpg"
import seaRocks from "../static/images/sea-rocks.jpg"

const Cart = props => (
    <li className="box-container">
        {props.index === 0 && <img src={sea} alt=""/>}
        {props.index === 1 && <img src={ocean} alt=""/>}
        {props.index === 2 && <img src={seaRocks} alt=""/>}
    </li>
);

export default Cart;