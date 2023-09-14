import React from 'react'
//import Card from '../Components/Card'
import DentistList from '../Components/DentistList'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        <h1>Lista de Odontólogos</h1>
        <DentistList />
      </div>
    </main>
  )
}

export default Home