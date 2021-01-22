import React from 'react'
import './App.css';
import Coin from './Components/Coin/Coin';
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Coin Exchange</h1>
      </header>
      <table>
        <thead>
          <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <Coin name="Bitcoin" ticker="BTC" price={9999}/>
          <Coin name="Etherium" ticker="ETH" price={299}/>
          <Coin name="TUSDT" ticker="USDT" price={1}/>
        </tbody>
      </table>
    </div>
  );
}

export default App;
