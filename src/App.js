import React from 'react'
import './App.css';
import AccountBalance from './Components/AccountBalance/AccountBalance';
import CoinData from './Components/CoinData/CoinData';
import HeaderDesign from './Components/HeaderDesign/HeaderDesign';
import axios from 'axios';
const coinCount=50;
class App extends React.Component{
  state={
    balance:10000,
    showBalance:true,
    coinList:[
      /*{
        name:'Bitcoin',
        ticker:'BTC',
        price:9999.99,
        ammount:5
      },
      {
        name:"Etherium",
        ticker:'ETH',
        price:1400,
        ammount:10
      },
      {
        name:'TUSDT',
        ticker:'USDT',
        price:1.0,
        ammount:100
      }*/
    ]
  }
  componentDidMount=async()=>{
    const response=await axios.get('https://api.coinpaprika.com/v1/coins')
      let coinList=response.data.slice(0,coinCount).map(function(coin){
        return{
          key:coin.id,
          name:coin.name,
          ticker:coin.symbol,
          ammount:0,
          price:0
        }
      });
      this.setState({coinList});
  }
  handleRefresh=(valueChangeTicker)=>{
    const newcoinData=this.state.coinList.map(function(values){
      let newValue={...values};
      //console.log(valueChangeTicker);
      if(valueChangeTicker===values.ticker){
        const randomPercentage=0.995+Math.random()*0.01;
        newValue.price*=randomPercentage;
      }
      //console.log(newPrice);
      return newValue;
    });
    this.setState({coinList:newcoinData});
  }
  balanceVisibilityChange=()=>{
    console.log('clicked');
    this.setState(function(oldState){
      return{
        ...oldState,
        showBalance:(!oldState.showBalance)
      }
    });
  }
  render(){
    return (
      <div className="App">
        <HeaderDesign/>
        <AccountBalance ammount={this.state.balance} showBalance={this.state.showBalance} balanceVisibilityChange={this.balanceVisibilityChange}/>
        <CoinData coinList={this.state.coinList} handleRefresh={this.handleRefresh} showBalance={this.state.showBalance}/>
      </div>
    );
  }
  
}

export default App;
