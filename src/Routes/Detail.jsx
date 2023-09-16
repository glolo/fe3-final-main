import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from '../Context/ThemeContext';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


const Detail = () => {
  //Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
  const { state } = useTheme();
  const themeClass = state.theme === 'dark' ? 'dark' : 'light';

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams(); // Se obtiene el ID del parámetro de la URL
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    // Realiza una solicitud a la API para obtener detalles del dentista con el ID proporcionado
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setDentist(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [id]);


  return (
    <div className={`page ${themeClass}`}>
      <Navbar/>
      <h1>Detail Dentist {id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      {dentist ? (
        <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Sitio web</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentist.name}</td>
            <td>{dentist.email}</td>
            <td>{dentist.phone}</td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
      ) : (
        <p>Cargando...</p>
      )}
    <Footer/>
    </div>
  )
}

export default Detail