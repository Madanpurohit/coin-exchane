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
      showBalance:true,
      coinList:[
        {
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
        }
      ]
    }
    this.handleRefresh=this.handleRefresh.bind(this);
    this.balanceVisibilityChange=this.balanceVisibilityChange.bind(this);
  }
  handleRefresh(valueChangeTicker){
    console.log(this.state.showBalance);
    const newcoinData=this.state.coinList.map(function({ticker,name,price,ammount}){
      let newPrice=price;
      //console.log(valueChangeTicker);
      if(valueChangeTicker===ticker){
        const randomPercentage=0.995+Math.random()*0.01;
        newPrice=newPrice*randomPercentage;
      }
      console.log(newPrice);
      return{
        ticker, 
        name,
        price:newPrice,
        ammount
      }
    });
    this.setState({coinList:newcoinData});
  }
  balanceVisibilityChange(){
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
