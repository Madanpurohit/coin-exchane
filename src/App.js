import React from 'react'
import './App.css';
import Coin from './Components/Coin/Coin';
import AccountBalance from './Components/AccountBalance/AccountBalance';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      balance:10000,
      coinList:[
        {
          name:'Bitcoin',
          ticker:'BTC',
          price:9999.99
        },
        {
          name:"Etherium",
          ticker:'ETH',
          price:1400
        },
        {
          name:'TUSDT',
          ticker:'USDT',
          price:1.0
        }
      ]
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
            <h1>Coin Exchange</h1>
        </header>
        <AccountBalance ammount={10000}/>
        <table>
          <thead>
            <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
            // this.state.coinList.map(value=>(
            //   <Coin key={value.ticker} name={value.name} ticker={value.ticker} price={value.price}/>
            // ))
            this.state.coinList.map(value=>(
              <Coin key={value.ticker} {...value}/>
            ))
            /* <Coin name={this.state.coinList[0].name} ticker={this.state.coinList[0].ticker} price={this.state.coinList[0].price}/>
            <Coin name={this.state.coinList[1].name} ticker={this.state.coinList[1].ticker} price={this.state.coinList[1].price}/>
            <Coin name={this.state.coinList[2].name} ticker={this.state.coinList[2].ticker} price={this.state.coinList[2].price}/> */}
          </tbody>
        </table>
      </div>
    );
  }
  
}

export default App;
