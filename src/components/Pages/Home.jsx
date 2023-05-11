import React from "react";
import Main from "../main/Main";
import Trends from "../trends/Trends";
import {Product,interers} from '../Products/Products'
import Slaider from '../slaider/Slaider'


export default function Home() {
  return (
    <>

        <Main />
        <Trends  arr={Product} title={"Թրենդային ապրանքներ"}/>
        <Slaider/>
        <Trends  arr={interers} title={"Ինտերիերի գաղափարներ"}  ul={true}/>

    </>
  );
}
