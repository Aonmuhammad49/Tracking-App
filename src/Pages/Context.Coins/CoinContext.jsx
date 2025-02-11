import { createContext, useState, useEffect } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$"
  });

  // Fetch coin data based on selected currency
  const fetchCoinData = async () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-zKjf1RWuVM2su7eqCiWew3EA' }
    };

    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options);
      const data = await response.json();
      setAllCoin(data);  // Update state with fetched coin data
    } catch (error) {
      console.error("Error fetching coin data:", error);
    }
  };

  // Run the fetch function when the currency changes
  useEffect(() => {
    fetchCoinData();
  }, [currency]);  // Only refetch when currency changes

  

  return (
    <CoinContext.Provider value={{ currency, setcurrency: setCurrency, allCoin }}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
