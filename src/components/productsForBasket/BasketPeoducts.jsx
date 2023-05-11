import React from 'react'
import './BasketProducts.scss'
export default function BasketPeoducts({products,setBasket,local,bool}) {
  const deleteMe = (id) => {
    const filterArr = products.filter(el=>el.id !== id);
    localStorage.setItem(local,JSON.stringify(filterArr));
    setBasket(filterArr)
  }
  return (
    <div className='product_bas'>
        {products.map(el=>{
            return(
                <div className='product_bas_item' key={crypto.randomUUID().slice(15)}>
                    {bool === "ok" ? null :<img src={el.img} alt={el.name} title={el.name} />}
                    {el.name && <h4>{el.name}</h4>}
                    {el.price && <h3>{el.price}</h3>}
                    <h2 className={bool && "size"} onClick={()=>deleteMe(el.id)}>X</h2>
                </div>
            )
        })}
        {bool && <h2>այստեղ պետք ե լինի բանկային համակարգ</h2>}
    </div>
  )
}
