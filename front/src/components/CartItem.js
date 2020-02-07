import React, {Component} from 'react';

class CartItem extends Component {
    state = {
        params: {}
    };

    componentDidMount() {
        const {match: {params}} = this.props;
        this.setState({params: params});
    };

    render() {
        return (
            <div>
                <h2>{this.state.params.id}</h2>
            </div>
        );
    }
}

export default CartItem;