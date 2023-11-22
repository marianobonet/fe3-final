
import React from 'react';
import { Link } from 'react-router-dom';

const img = '/images/doctor.jpg';
const Card = ({ dentist }) => {
  const dentistInfo = dentist.dentistInfo;

  const saveToLocalStorage = () => {
    let favs = JSON.parse(localStorage.getItem('favs')) || [];
    favs.push(dentist);
    localStorage.setItem('favs', JSON.stringify(favs));
  };

  return (
    <div className="card-grid">
      
      <div className="card">
      <div className="card-img">
        <img className='foto-medico'src={img} alt={dentist.name} />
      </div>
        <Link to={`/dentist/${dentist.id}`}>
          <h2>{dentistInfo ? dentistInfo.name : dentist.name}</h2>
          <p>{dentistInfo ? dentistInfo.email : dentist.email}</p>
          <p>{dentistInfo ? dentistInfo.phone : dentist.phone}</p>
          <p>{dentistInfo ? dentistInfo.website : dentist.website}</p>
        </Link>
        <button className="favButton" onClick={saveToLocalStorage}><img className='estrella'src='/favorite.svg' alt="Favorite" /></button>
    
      </div>
    </div>
  );
};

export default Card;