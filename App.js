import Coinss from './Coinss'
import { useEffect,useState } from 'react';
import './App.css';

function App() {
  const [coinList,setCoinList]=useState([])
  const [symbolCoin,setsymbol]=useState('')
  const [coinName,setCointName]=useState('')
  const [priceCoint,setPriceCoint]=useState('')

  useEffect(() => {
    const fetchCoinData = async () => {
      const ask = await fetch('https://api.coincap.io/v2/assets');
      const data = await ask.json();
      setCoinList(data.data.slice(0, 10));
      console.log(coinList)
    };
    fetchCoinData();
  }, []);
  return (
    <>
      <h1 className='mt-5 mb-6 display-3' >COINS DETAILS</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 p-5 br-2">
     { coinList.map((coin)=>(
      <Coinss coinName={coin.name} priceCoint={coin.priceUsd} symbolCoin={coin.symbol.toLowerCase()}  />
     )
     )} 

   </div>
  </>
  );
}

export default App;
