import React from 'react'
import './Main.scss'
import { NavLink } from "react-router-dom";

export default function Main() {
  return (
    <main>
      <NavLink to="./Page3d"><button className='btn'>Ստեղծել հիմա</button></NavLink>
        
    </main>

  )
}
