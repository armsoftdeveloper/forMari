import React, { useState } from 'react'
import './Basket.scss'
import BasketPeoducts from '../../productsForBasket/BasketPeoducts';
import { NavLink } from 'react-router-dom';
export default function Basket() {
    const [basket,setBasket] = useState(JSON.parse(localStorage.getItem("basket")) || []);
   
  return (
    <div className='basket_block'>
        {!basket.length && <h1 className='title'>Զամբյուղում ապրանք չի ավելացվել</h1>}
        {basket.length > 0 ? <div className="basket_block_info">
            <span>Ենթագումար</span>
            <span>{basket.length === 0 ? 0: basket.reduce((aggr,val)=> aggr + val.num,0) }դրամ</span>
        </div>:null}
        <BasketPeoducts local="basket" products={basket} setBasket={setBasket} />
        {basket.length > 0 ? <NavLink to='bank'><button>Պատվիրել</button></NavLink>:null}
        <NavLink to='/'><button>Գլխավոր Էջ</button></NavLink>

    </div>
  )
}
