import React, { Component } from 'react'
import Coin from '../Coin/Coin';
export default class CoinData extends Component {
    render() {
        return (
        <table>
          <thead>
            <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
            {this.props.showBalance?<th>Balance</th>:null}
            </tr>
          </thead>
          <tbody>
            {
            // this.state.coinList.map(value=>(
            //   <Coin key={value.ticker} name={value.name} ticker={value.ticker} price={value.price}/>
            // ))
            this.props.coinList.map(value=>(
              <Coin key={value.ticker} {...value} handleRefresh={this.props.handleRefresh} showBalance={this.props.showBalance}/>
            ))
            /* <Coin name={this.state.coinList[0].name} ticker={this.state.coinList[0].ticker} price={this.state.coinList[0].price}/>
            <Coin name={this.state.coinList[1].name} ticker={this.state.coinList[1].ticker} price={this.state.coinList[1].price}/>
            <Coin name={this.state.coinList[2].name} ticker={this.state.coinList[2].ticker} price={this.state.coinList[2].price}/> */}
          </tbody>
        </table>
        )
    }
}
