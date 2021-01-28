import React from 'react'
import './App.css';
import AccountBalance from './Components/AccountBalance/AccountBalance';
import CoinData from './Components/CoinData/CoinData';
import HeaderDesign from './Components/HeaderDesign/HeaderDesign';
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
    this.handleRefresh=this.handleRefresh.bind(this);
  }
  handleRefresh(valueChangeTicker){
    const coin=this.state.coinList.find(({ticker})=>ticker===valueChangeTicker);
    console.log(coin);
  }
  render(){
    return (
      <div className="App">
        <HeaderDesign/>
        <AccountBalance ammount={10000}/>
        <CoinData coinList={this.state.coinList} handleRefresh={this.handleRefresh}/>
      </div>
    );
  }
  
}

export default App;
