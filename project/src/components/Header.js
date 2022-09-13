import { faBorderBottom } from '@fortawesome/sharp-solid-svg-icons'
import React from 'react'
import "../index.css"

function Header({ total, money }) {
  return (
    <>
      {total > 0 && money - total !== 0 && (
        <div className='header'> You have {money - total} $ coins left to spend! </div>
      )}
      {total === 0 && (
        <div className='header'> You have {money} $ coins to spend!</div>
      )}
      {money - total === 0 && (
        <div className='header'>You are out of money..</div>
      )}
    </>
  )
}
export default Header