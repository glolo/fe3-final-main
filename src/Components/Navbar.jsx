import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../Context/ThemeContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useTheme(); // Access theme context

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' }); // Dispatch action to toggle theme
  };

  
  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <img src="./DH.ico" alt="dh" className='nav-img'/>
      <Link to="/home">Home</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/Favs">Favs</Link>
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar