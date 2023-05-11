import React, { useState } from "react";
import "./Shop.scss";
import { Product } from "../Products/Products";
import Trends from "../trends/Trends";

export default function Shop() {
  const [products, setProducts] = useState(Product);
  const sortPrice = (e) => {
    if (e.target.value === "Ըստ") {
      setProducts(products);
    }
    if (e.target.value === "Աճման") {
      const c = [...products];
      c.sort((a, b) => a.num - b.num);
      setProducts(c);
    }
    if (e.target.value === "Նվազման") {
      const c = [...products];
      c.sort((a, b) => b.num - a.num);
      setProducts(c);
    }
  };
  const sortCategry = (e) => {
    if (e.target.value === "Բազմոց") {
      setProducts(Product.filter((e) => e.category === "Բազմոց"));
    }
    if (e.target.value === "Ընտրել") {
      setProducts(Product);
    }
    if (e.target.value === "աթոռ") {
      setProducts(Product.filter((e) => e.category === "աթոռ"));
    }
  };
  const search = (e) => {
    setProducts(
      Product.filter(
        (elem) => elem.name.search(e.target.previousElementSibling.value) > 0
      )
    );
  };
  return (
    <>
      <div className="Shop ">
        <select defaultValue={'DEFAULT'} onChange={sortCategry}>
          <option value="DEFAULT" disabled>Ընտրել</option>
          <option value="Բազմոց">Բազմոց</option>
          <option value="աթոռ">աթոռ</option>
        </select>
        <select defaultValue={'DEFAULT'} onChange={sortPrice}>
          <option value="DEFAULT" disabled>Դասավորել Ըստ</option>
          <option value="Աճման">Գնի Աճման</option>
          <option value="Նվազման">Գնի Նվազման</option>
        </select>
        <div>
          <input type="text" name="search" id="search" placeholder="Որոնել" />
          <img src="./images/6.svg" alt="" onClick={search} />
        </div>
      </div>
      {/* <div className="products">
        {products.map((e) => {
          return (
            <div key={e.id}>
              <img src={e.img} alt="" />
              <h3>{e.name}</h3>
              <p>{e.category}</p>
              <span>
                <h4>{e.price}</h4>
                <div>
                  <img src="./images/7.svg" alt="" />
                </div>
                <div>
                  <img src="./images/1.png" alt="" />
                </div>
              </span>
            </div>
          );
        })}
      </div> */}
      <Trends  arr={products} title={"Թրենդային ապրանքներ"}/>
    </>
  );
}
