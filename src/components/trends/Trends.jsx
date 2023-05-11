import React, {  useState } from "react";
import "./Trends.scss";
import { navigate } from "../Products/Products";
import { NavLink } from "react-router-dom";

export default function Trends({ arr, title, ul }) {
  const [heartArr, setHeartArr] = useState(
    JSON.parse(localStorage.getItem("heart")) || []
  );
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket")) || []
  );
  const [show, setShow] = useState(false);
  const myShow = () => {
    setShow(true);
  }
  const deletShow = () => {
    setTimeout(()=>{
        setShow(false)
    },3000)
  }


  const addToHeart = (id) => {
    const item = arr.find((el) => el.id == id);
    const coopy = [...heartArr, item];
    if (heartArr.every((el) => el.id !== id)) {
      localStorage.setItem("heartArr", JSON.stringify(coopy));
      setHeartArr(coopy);
    }
  };
  const addToBasket = (id) => {
    const item = arr.find((el) => el.id == id);
    const coopy = [...basket, item];
    if (basket.every((el) => el.id !== id)) {
      localStorage.setItem("basket", JSON.stringify(coopy));
      setBasket(coopy);
    }
  };

  return (
    <div className="trends">
      {show && <p className="add">ապրանքը ավելացվել է </p>}
      <h1 className="trends_title">{title}</h1>
      {ul && (
        <nav className="trends_navigation">
          {navigate.map((el) => {
            return (
              <NavLink to={`/${el}`} key={el}>
                <li>{el}</li>
              </NavLink>
            );
          })}
        </nav>
      )}
      <div className="trends_products">
        {arr &&
          arr.map((el) => {
            return (
              <div className="trends_item" key={el.id}>
                <img src={el.img} alt={el.name} title={el.name} />
                {el.name && <h4>{el.name}</h4>}
                {el.category && <span>{el.category}</span>}
                {el.price && <h3>{el.price}</h3>}
                <div className="icons">
                  <img
                    onClick={() => {
                      addToHeart(el.id);
                      myShow();
                      deletShow();
                    }}
                    src="./images/7.svg"
                    alt=""
                  />
                  <img
                    onClick={() =>{ 
                        addToBasket(el.id)
                        myShow();
                        deletShow();
                    }}
                    src="./images/1.png"
                    alt=""
                  />
                </div>
                
              </div>

            );
          })}
      </div>
    </div>
  );
}
