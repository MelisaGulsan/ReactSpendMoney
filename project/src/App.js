import { useState, useEffect } from 'react';
import Header from './components/Header.js';
import products from './products.json';
import Product from './components/Product'
import Basket from './components/Basket'

function App() {
  const [money, setMoney] = useState(1000)

  const [basket, setBasket] = useState([])

  const [total, setTotal] = useState(0)

  const resetBasket = () => {
    setBasket([])
  }

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return acc + (item.amount * (products.find(product => product.id === item.id).price))
      }, 0),
    )
  }, [basket])
  return (
    <>
      <Header total={total} money={money} />
      <div className="container products">
        {products.map(product => (
          <Product key={product.id} basket={basket} total={total} money={money} setBasket={setBasket} product={product} />
        ))}
      </div>

      {total > 0 && (
        <Basket basket={basket} resetBasket={resetBasket} total={total} products={products} />
      )}
    </>
  );
}

export default App;
