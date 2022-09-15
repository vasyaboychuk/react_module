import React from 'react';

import './Character.css'

function Character(props) {
    let{item:character}=props;
    return (
        <div className={'person'}>
            <h2>Id:{character.id} - Name:{character.name}</h2>
            <h3>status:{character.status} - species:{character.species}</h3>
            <h3>gender:{character.gender}</h3>
            <img src={character.image} alt={character.name}/>


        </div>
    );
}

export default Character;