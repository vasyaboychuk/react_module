import React from 'react';

import {characters} from "../info";
import Character from "../character/Character";
import './Characters.css'

function Characters() {
    return (
        <div className={'wrapper'}>
            {
                characters.map(character=><Character key={character.id} item={character}/>)
            }

        </div>
    );
}

export default Characters;