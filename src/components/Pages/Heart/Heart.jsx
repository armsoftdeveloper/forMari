import React, { useState } from 'react'
import './Heart.scss'
import BasketPeoducts from '../../productsForBasket/BasketPeoducts';
export default function Heart() {
    const [heartArr,setHeartArr] = useState(JSON.parse(localStorage.getItem("heartArr")) || []);
  return (
    <div className='heart'>
        <h1 className='title'>Սիրելի Ապրանքներ</h1>
        <BasketPeoducts local="heartArr" products={heartArr} setBasket={setHeartArr}/>
    </div>
  )
}
