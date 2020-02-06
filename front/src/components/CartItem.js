import React, {Component} from 'react';

class CartItem extends Component {
    state = {
        params: {}
    }

    componentDidMount(): void {
        const {match: {params}} = this.props
        this.setState({params: params})
        console.log(params)
    }

    render() {
        return (
            <div>
                <h2>{this.state.params.id}</h2>
            </div>
        );
    }
}

export default CartItem;