import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.scss'

export default function Footer() {

  return (
    <div className='footer'>
        <div className="menu">
          <NavLink to="/"><li>Գլխավոր</li></NavLink>
          <NavLink to="/shoop"><li>Խանութ</li></NavLink>
          <NavLink to="/about"><li>Մեր մասին</li></NavLink>
        </div>
        <h4>Ձեր իրավունքները պաշտպանված են 2023</h4>
        <h4>MultiFurniture</h4>
    </div>
  )
}
