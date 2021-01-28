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
    const newcoinData=this.state.coinList.map(function({ticker,name,price}){
      let newPrice=price;
      console.log(valueChangeTicker);
      if(valueChangeTicker===ticker){
        const randomPercentage=0.995+Math.random()*0.01;
        newPrice=newPrice*randomPercentage;
      }
      console.log(newPrice);
      return{
        ticker, 
        name,
        price:newPrice
      }
    });
    this.setState({coinList:newcoinData});
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
