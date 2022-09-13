import { useState } from 'react'
import BasketItem from './BasketItem'
import "../index.css"
function Basket({ basket, total, products, resetBasket }) {
    return (
        <>
            <div className='basketContainer'>
                <h3>Shopping Details</h3>
                <ul>
                    {basket.map(item => (
                        <BasketItem item={item}
                            product={products.find(p => p.id == item.id)} />
                    ))}
                </ul>
            </div>

            <div className='total'>
                Total: ${total}
            </div>

            <button onClick={resetBasket} className="basketReset">Reset</button>
        </>
    )
}

export default Basket