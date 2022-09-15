import React from "react";

import './Simpson.css'

function Simpson(props) {
    let {simpson} = props;
    return (
        <div className={'character'}>
            <h3>Name:{simpson.name} - Surname:{simpson.surname}</h3>
            <h3>Age:{simpson.age} - Info{simpson.info}</h3>
            <img src={simpson.photo} alt={simpson.name}/>

        </div>
    );
}

export default Simpson;