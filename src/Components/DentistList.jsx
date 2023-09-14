// src/components/DentistList.js
import React, { useEffect, useState } from 'react';
import Card from './Card';

const DentistList = () => {
  const [dentist, setDentist] = useState([]);

  useEffect(() => {
    // Realiza la solicitud a la API y guarda los datos en el estado
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setDentist(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  
/*   const handleToggleFavorite = (dentist) => {
    // Marcar/desmarcar un dentista como favorito en localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favorites.some((favorite) => favorite.id === dentist.id)) {
      // El dentista ya es un favorito, lo eliminamos
      const updatedFavorites = favorites.filter((favorite) => favorite.id !== dentist.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      // El dentista no es un favorito, lo agregamos
      favorites.push(dentist);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }; */

  return (
    <div className='card-grid'>
      {dentist.map((dentist) => (
        <div key={dentist.id}>
        {/* <div className="card">
          <div className="card-content">
            <h2>{dentist.name}</h2>
            <p>Nombre de usuario: {dentist.username}</p>
          </div> */}
            <Card name={dentist.name} username={dentist.username} id={dentist.id}/>
            {/*<button onClick={() => handleToggleFavorite(dentist)}>
              {localStorage.getItem('favorites') &&
              JSON.parse(localStorage.getItem('favorites')).some(
                (favorite) => favorite.id === dentist.id
              )
                ? 'Quitar de Favoritos'
                : 'Agregar a Favoritos'}
            </button> 
          </div>*/}
        </div>
      ))}
    </div>
  );
};

export default DentistList;
