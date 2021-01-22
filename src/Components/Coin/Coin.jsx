import React, { Component } from 'react'
import './Coin.css'
import propTypes from 'prop-types';
export default class Coin extends Component {
    constructor(props){
        super(props);
        this.state={
            price:this.props.price+100
        }
    }
    componentDidMount(){
        const callback=()=>{
            const randompercentage=0.995+Math.random()*0.01;
            this.setState(function(oldstate){
                return {
                    price:oldstate.price*randompercentage
                };
            });
        }
        setInterval(callback,1000)
    }
    render() {
        return (
            <div>
                <tr className="coin-row">
                    <td>{this.props.name}</td>
                    <td>{this.props.ticker}</td>
                    <td>{this.state.price}</td>
                </tr>
            </div>
        )
    }
}
Coin.proTypes={
    name:propTypes.string,
    ticker:propTypes.string,
    price:propTypes.number
}
