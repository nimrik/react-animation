import React, {Component} from 'react';

class Header extends Component {
    createRouter = () => {
        let data = this.props.routes, res = [];
        for(let i = 0; i <= data.length-1; i++) {
            res.push(<li><a href={`/${data[i].route}`}>{data[i].name}</a></li>)
        }
        return res;
    };

    render() {
        return (
            <nav className="App-header">
                <ul>{this.createRouter()}</ul>
            </nav>
        );
    }
}

export default Header;