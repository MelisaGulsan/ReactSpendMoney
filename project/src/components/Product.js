import { useState } from 'react'
import "../index.css"

function Product({ product, basket, setBasket, total, money }) {
  const basekItem = basket.find(item => item.id === product.id)

  const addBasket = () => {
    const checkBasket = basket.find(item => item.id == product.id)
    if (checkBasket) {

      checkBasket.amount += 1
      setBasket([...basket.filter(item => item.id !== product.id), checkBasket])

    } else {
      setBasket([...basket, {
        id: product.id,
        amount: 1
      }])
    }
  }

  const removeBasket = () => {
    const currentBasket = basket.find(item => item.id == product.id)
    const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
    currentBasket.amount -= 1

    if (currentBasket.amount === 0) {
      setBasket([...basketWithoutCurrent])
    } else {
      setBasket([...basketWithoutCurrent, currentBasket])
    }

  }

  return (
    <>
      <div className='card-wrapper'>
        <div className='face'>
          <div className='card'>
            <div className='imgBox'>
              <img src={product.image} alt="mouse corsair" class="mouse" />
            </div>

            <div class="contentBox">
              <h3>
                {product.title}
              </h3>
              <h2 className='price'>${product.price}</h2>

              <div className='actions'>

                  Piece:
                <span className='amount'>{basekItem && basekItem.amount || 0}</span>

                <button className='sell-btn' disabled={!basekItem} onClick={removeBasket}>Sell</button>
                <button className='buy-btn' disabled={total + product.price > money} onClick={addBasket}>Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product