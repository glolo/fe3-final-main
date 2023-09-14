import React, { useState, useEffect } from 'react';
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    // Obtén los dentistas destacados almacenados en localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoritos(favorites);
  }, []);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        if (favoritos !== null) {
          console.log(favoritos.id)
        } else {
          // Handle el caso en el que favorito es nulo
          console.log("favorito es nulo")
        }
        {favoritos.length > 0 ? (
        favoritos.map((favorito) => (
          <div key={favorito.id}>
            <Card name={favorito.name} username={favorito.username} id={favorito.id}/>
            {/* <div>Nombre: {favorito.name}</div>
            <div>Username: {favorito.username}</div> */}
          </div>
        ))
        ) : (
          <p>No tienes dentistas destacados.</p>
        )}
      </div>
    </>
  );
};

export default Favs;
