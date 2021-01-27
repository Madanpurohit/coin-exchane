import React, { Component } from 'react'
import propTypes from 'prop-types';
export default class Coin extends Component {
    constructor(props){
        super(props);
        this.state={
            price:this.props.price+100
        }
        this.handleclick=this.handleclick.bind(this);

    }
    handleclick(event){
        event.preventDefault()
            const randompercentage=0.995+Math.random()*0.01;
            this.setState(function(oldstate){
                return {
                    price:oldstate.price*randompercentage
                };
            });
        }   
    render() {
        return (
                <tr className="coin-row">
                    <td>{this.props.name}</td>
                    <td>{this.props.ticker}</td>
                    <td>{this.state.price}</td>
                    <td>
                        <form action="#" method="post">
                            <button onClick={this.handleclick}>Refresh</button>
                        </form>
                    </td>
                </tr>
        )
    }
}
Coin.proTypes={
    name:propTypes.string,
    ticker:propTypes.string,
    price:propTypes.number
}
