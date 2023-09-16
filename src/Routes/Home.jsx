import React from 'react'
//import Card from '../Components/Card'
import DentistList from '../Components/DentistList'
import { useTheme } from '../Context/ThemeContext';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useTheme();

  return (
    <div className={`page ${state.theme}`}>
      <Navbar/>
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        <h1>Lista de Odontólogos</h1>
        <DentistList />
      </div>
    <Footer/>
    </div>
  )
}

export default Home