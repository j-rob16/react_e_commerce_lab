import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyBasket from './components/MyBasket';
import ShopContainer from "./containers/ShopContainer";
import './App.css';
import NavBar from './components/NavBar';
import ErrorPage from './components/ErrorPage';
  

function App() {

  const [items, setItems] = useState([
    {productType: "dvd", name: "Singing in the Rain", price: 9.99},
    {productType: "book", name: "Harry Potter", price: 10.99},
    {productType: "music", name: "Kate Bush", price: 7.99}
  ]);

  const [basketItems, setBasketItems] = useState([]);

  function checkOut() {
    setBasketItems([]);
  }
  
  function addToBasket(itemIndex) {
    const copyItems = [...basketItems];
    const newItem = items[itemIndex]
    copyItems.push(newItem)
    setBasketItems(copyItems);
  }

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<ShopContainer items={items} addToBasket={addToBasket}/>} />
        <Route path='/my-basket' element={<MyBasket basketItems={basketItems} checkOut={checkOut}/>} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;