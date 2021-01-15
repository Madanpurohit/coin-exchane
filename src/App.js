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
          <th>Name</th>
          <th>Ticker</th>
          <th>Price</th>
        </thead>
        <tbody>
          <Coin name="Bitcoin" ticker="BTC" price="9999.99$"/>
          <Coin name="Etherium" ticker="ETH" price="299.99$"/>
        </tbody>
      </table>
    </div>
  );
}

export default App;
