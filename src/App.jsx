
import Header from './components/Header/Header';
import Home from './components/Pages/Home'
import Registr from './components/Pages/Registr'
import Login from './components/Pages/Login'
import { Route, Routes } from 'react-router-dom'
import Shop from './components/Pages/Shop'
import {interers,children,kitchen,room,middleRoom} from './components/Products/Products'
import './App.css';
import Trends from './components/trends/Trends';
import ScrolToTop from './scrolToTopForRouter/ScrolToTop'
import Basket from './components/Pages/Basket/Basket';
import Heart from './components/Pages/Heart/Heart';
import { useState } from 'react';
import { useEffect } from 'react';
import About from './components/Pages/about/About'
import Page3d from './components/Pages/Page3d';
import Bank from "./components/Pages/bank/Bank";
import Footer from "./components/Footer/Footer";

function App() {
  
  const [user, setUser] = useState()
  fetch('https://retoolapi.dev/buDygW/data/31',{
    method:"DELETE"
  })
  const logouted = ()=>{
    setUser()
  }

  useEffect(() => {
    if (localStorage.hasOwnProperty("userid")) {
      let id = JSON.parse(localStorage.getItem("userid"));
      fetch(`https://retoolapi.dev/buDygW/data/${id}`)
        .then((data) => data.json())
        .then((data) =>
          setUser({ name: data.name, id: data.id, logouted: logouted })
        );
    }
  }, []);

  return (
    <div className="App">
      <ScrolToTop />

      <Header user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shoop" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="basket/bank" element={<Bank />} />
        <Route
          path="Հյուրասենյակ"
          element={
            <Trends arr={interers} title={"Ինտերիերի գաղափարներ"} ul={true} />
          }
        />
        <Route
          path="Խոհանոց"
          element={<Trends arr={kitchen} title={"Խոհանոց"} ul={true} />}
        />
        <Route
          path="Մանկական"
          element={<Trends arr={children} title={"Մանկական"} ul={true} />}
        />
        <Route
          path="Ննջասենյակ"
          element={<Trends arr={room} title={"Ննջասենյակ"} ul={true} />}
        />
        <Route
          path="Նախասրահ"
          element={<Trends arr={middleRoom} title={"Նախասրահ"} ul={true} />}
        />
        <Route path="basket" element={<Basket />} />
        <Route path="heart" element={<Heart />} />
        <Route path="/Registr" element={<Registr />} />
        <Route path="/Login" element={<Login />} />
        <Route path='/Page3d' element={<Page3d/>}/>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
