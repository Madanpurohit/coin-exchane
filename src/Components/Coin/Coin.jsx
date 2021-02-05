import React, { Component } from 'react'
import propTypes from 'prop-types';
export default class Coin extends Component {
    handleclick=(event)=>{
        event.preventDefault()
            this.props.handleRefresh(this.props.tickerId);
        }   
    render() {
        return (
                <tr className="coin-row">
                    <td>{this.props.name}</td>
                    <td>{this.props.ticker}</td>
                    <td>{this.props.price}</td>
                    {this.props.showBalance?<td>{this.props.ammount}</td>:null}
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
