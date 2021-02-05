import React from 'react'
import './App.css';
import AccountBalance from './Components/AccountBalance/AccountBalance';
import CoinData from './Components/CoinData/CoinData';
import HeaderDesign from './Components/HeaderDesign/HeaderDesign';
import axios from 'axios';
//const coinCount = 10;
class App extends React.Component {
  state = {
    balance: 10000,
    showBalance: true,
    coinList: [
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
  componentDidMount = async () => {
    const response = await axios.get('https://api.coinpaprika.com/v1/tickers')
    var coinPriceData=response.data.map(function(values){
      return{
        rank:values.rank,
        key:values.key,
        name:values.name,
        ticker:values.symbol,
        price: parseFloat(Number(values.quotes.USD.price).toFixed(2)),
        ammount:0
      }
    })
    coinPriceData.sort((a,b)=>(a.rank>b.rank)?1:-1);
    this.setState({ coinList: coinPriceData });
  }
handleRefresh = async (ValueChangeId) => {
  const tickerurl = `https://api.coinpaprika.com/v1/tickers/${ValueChangeId}`;
  console.log(ValueChangeId);
  const newPrice = await axios.get(tickerurl);
  const newcoinData = this.state.coinList.map(function (values) {
    let newValue = { ...values };
    //console.log(valueChangeTicker);
    if (ValueChangeId === values.key) {
      newValue.price = parseFloat(Number(newPrice.data.quotes.USD.price).toFixed(2));
      console.log(newValue.price)
    }
    //console.log(newPrice);
    return newValue;
  });
  this.setState({ coinList: newcoinData });
}
balanceVisibilityChange = () => {
  console.log('clicked');
  this.setState(function (oldState) {
    return {
      ...oldState,
      showBalance: (!oldState.showBalance)
    }
  });
}
render(){
  return (
    <div className="App">
      <HeaderDesign />
      <AccountBalance ammount={this.state.balance} showBalance={this.state.showBalance} balanceVisibilityChange={this.balanceVisibilityChange} />
      <CoinData coinList={this.state.coinList} handleRefresh={this.handleRefresh} showBalance={this.state.showBalance} />
    </div>
  );
}
  
}

export default App;
