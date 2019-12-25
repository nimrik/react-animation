import React from "react";

const Cart = props => (
    <div>
        {props.data.id &&
        <div className="box-container">
            <p>{props.data.id}</p>
            <p>{props.data.title}</p>
            <p>{props.data.status ? 'true' : 'false'}</p>
        </div>
        }
    </div>
)

export default Cart;