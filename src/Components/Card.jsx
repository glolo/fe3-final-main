import React from "react";
import { Link } from 'react-router-dom'
import "./card.css";

const Card = ({ name, username, id }) => {
//const Card = ({ dentist }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    /* // Se obtienen las tarjetas favoritas del localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    // Verifica si la tarjeta ya es un favorito
    const isFavorite = favorites.some((favorite) => favorite && favorite.id === dentist.id);
    if (isFavorite) {
      // Si la tarjeta no es un favorito, se agtrega a la lista de favoritos
      favorites.push(dentist);
      // Actualiza el localStorage con la nueva lista de favoritos
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } 
    // else {
    //   const updatedFavorites = favorites.filter((favorite) => favorite.id !== dentist.id);
    //   localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    // } */

    //--------------------------
    // Obtén las tarjetas favoritas del localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Verifica si la tarjeta ya es un favorito
    const isFavorite = favorites.some((favorite) => favorite && favorite.id === id);

    if (!isFavorite) {
      // Si la tarjeta no es un favorito, agrégala a la lista de favoritos
      favorites.push({ name, username, id });
      // Actualiza el localStorage con la nueva lista de favoritos
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }  
  }

  return (
    <div className="card">
    <Link to={`/dentista/${id}`}>
    
        
          <img src="./images/doctor.jpg" alt="doctor" className="card-img-top"/>
       
       {/* En cada card deberan mostrar en name - username y el id */}
       <div className="card-text">
          <h4 className="card-title">{name}</h4>
          <div>{username} </div>
          <div>{id} </div>
        </div>

        
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      </Link>
       {/* <button onClick={addFav} className="favButton">Add fav</button> */}
       <button onClick={addFav} className="favButton">
        {localStorage.getItem('favorites') &&
        JSON.parse(localStorage.getItem('favorites')).some(
          (favorite) => favorite && favorite.id === id)
          ? 'Quitar de Favoritos'
          : 'Agregar a Favoritos'}
      </button>
    </div>

  );
};

export default Card;
