import React, { useState } from "react";
import { Link } from 'react-router-dom'
import "./card.css";

const Card = ({ name, username, id, isFavorite, dispatch  }) => {
  const [renderCount, setRenderCount] = useState(0);

  const addOrRemoveFavorite = () => {
    if (isFavorite) {
      // Si ya es un favorito, quitarlo de favoritos
      dispatch({ type: 'REMOVE_FAVORITE', payload: {name, username, id} });
    } else {
      // Si no es un favorito, agregarlo a favoritos
      dispatch({ type: 'ADD_FAVORITE', payload: {name, username, id} });
    }
  };


  const addFav = () => {
    // Get the current favorites from localStorage (if any)
    const currentFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    
    // Check if the card with the same id already exists in favorites
    const isAlreadyFavorite = currentFavorites.some((favorite) => favorite.id === id);

    if (!isAlreadyFavorite) {
      // Add the card to favorites
      currentFavorites.push({ id, name, username });

      // Update favorites in localStorage
      localStorage.setItem("favorites", JSON.stringify(currentFavorites));
      alert("Card added to favorites!");
    } else {
      alert("Card will be deleted!");
      const updatedFavorites = currentFavorites.filter((favorite) => favorite.id !== id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
    // Update the renderCount state to trigger a re-render of Card
    setRenderCount(renderCount + 1);
  };

  return (
    <div className="card">
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <Link to={`/dentista/${id}`}>
        <img src="./images/doctor.jpg" alt="doctor" className="card-img-top"/>
        
        {/* En cada card deberan mostrar en name - username y el id */}
        <div className="card-text">
          <h4 className="card-title">{name}</h4>
          <div>{username} </div>
        </div>
      </Link>
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      {/* <button
          onClick={() => addFav({id, name, username})}
          className="favButton"
          >
          {localStorage.getItem('favorites') &&
          JSON.parse(localStorage.getItem('favorites')).some(
              (favorite) => favorite && favorite.id === id
          )
              ? 'Quitar de Favoritos'
              : 'Agregar a Favoritos'}
      </button> */}
      <button onClick={addOrRemoveFavorite} className="favButton">
        {isFavorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
      </button>
    </div>
  );
};

export default Card;
