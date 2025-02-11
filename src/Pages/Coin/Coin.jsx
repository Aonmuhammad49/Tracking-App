import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CoinContext } from "../Context.Coins/CoinContext";
import "./Coin.css";
import LineChart from "../../Components/LineChart/LineChart";

const Coin = () => {
  const { coinId } = useParams(); // Getting coinId from URL
  const { currency } = useContext(CoinContext);
  const [coinData, setCoinData] = useState(null);
  const [HistoricalData, setHistoricalData] = useState(null);

  // Fetching specific coin data
  const fetchCoinData = async () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-zKjf1RWuVM2su7eqCiWew3EA' }
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then(res => res.json())
      .then(res => setCoinData(res))
      .catch(err => console.error(err));
  };

  const fetchHistorical = async () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-zKjf1RWuVM2su7eqCiWew3EA' }
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
      .then(res => res.json())
      .then(res => setHistoricalData(res))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchCoinData();
    fetchHistorical();
  }, [currency]); // Runs when the coinId or currency changes

  if (coinData) {
    return (
      <div className="coin">
        <div className="coin-name">
          <img src={coinData.image.large} alt="" />
          <p><b>{coinData.name}({coinData.symbol.toUpperCase()})</b></p>
        </div>
        <div className="coin-chart">
          <LineChart Historical={HistoricalData} />
        </div>
        <div className="coin-info">
        <ul>
            <li>Crypto Market Rank</li>
            <li>{coinData.market_cap_rank}</li>
        </ul>
        <ul>
            <li>Current Price</li>
            <li>{currency.symbol}{coinData.market_data.current_price[currency.name].toLocaleString()}</li>
        </ul>
        <ul>
            <li>Market cap</li>
            <li>{currency.symbol}{coinData.market_data.current_price[currency.name].toLocaleString()}</li>
        </ul>
        <ul>
            <li>24 Hour Low</li>
            <li>{currency.symbol}{coinData.market_data.current_price[currency.name].toLocaleString()}</li>
        </ul>
        </div>      
    </div>
    );
  } else {
    return (
      <div className="spinner">
        <div className="spin">
          {/* Add your spinner style here */}
        </div>
      </div>
    );
  }
};

export default Coin;
