//2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
//https://rickandmortyapi.com/
//https://rickandmortyapi.com/api/character
//   Створити 6 персонажів

import React from 'react';

const NewPersonage = (id, name, gender, species, image) => {


    return (
        <div>
            <p> {id} {name}</p>
            <h1> {gender} {species}</h1>
            <img src={image} alt={name} />
        </div>
    );
};

export default NewPersonage;