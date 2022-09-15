import React from "react";

import {simpsons} from "./data";
import Simpson from "./Simpson";
import './Simpsons.css'

function Simpsons() {
    return (
        <div className={'wrap'}>
            {simpsons.map(simpson => <Simpson simpson={simpson}/>)}

        </div>
    );
}

export default Simpsons;