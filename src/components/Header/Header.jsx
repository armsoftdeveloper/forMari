import React from "react";
import icon1 from "./Group.svg";
import icon2 from "./Vector.svg";
import icon3 from "./image_2-removebg-preview 1.svg";
import "./Header.scss";
import { NavLink } from "react-router-dom";
export default function Header({ user }) {
  const logout = () => {
    fetch(`https://retoolapi.dev/buDygW/data/${user.id}`, {
      method: "PATCH",
      body: JSON.stringify({ logined: false }),
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((data) => localStorage.removeItem("userid"))
      .then((data) => user.logouted());
  };
  return (
    <header className="header">
      <div className="header_logo">
        <NavLink
          className={({ isActive }) => (isActive ? "active__link" : "")}
          to="/"
        >
          <h1>MultiFurniture</h1>
        </NavLink>
      </div>
      <nav className="header_nav">
        <NavLink to="/">
          <li>Գլխավոր</li>
        </NavLink>
        <NavLink to="/shoop">
          <li>Խանութ</li>
        </NavLink>

        <NavLink to="/about">
          <li>Մեր մասին</li>
        </NavLink>
      </nav>
      <div className="header_icons">
        <NavLink to="/basket">
          <img src={icon1} alt="img" />
        </NavLink>
        <NavLink to="/heart">
          <img src={icon2} alt="img" />
        </NavLink>
        {user?.name ? (
          <div className="username">
            <p>{user.name}</p>
          </div>
        ) : null}
        {!user?.name ? (
          <NavLink to="/registr">
            <img src={icon3} alt="" />
          </NavLink>
        ) : (
          <img src={icon3} alt="" />
        )}
        {user?.name ? (
          <button onClick={logout} className="logout">
            Logout
          </button>
        ) : null}
      </div>
    </header>
  );
}
