import React, {useEffect, useState} from 'react';
import {getLaunchAxios} from "../../services/launch.axios.service";
import Launch from "./Launch";
import './Launches.css'

function Launches() {

    let [launches, setLaunches] = useState([]);

    useEffect(() => {
        getLaunchAxios().then(value => setLaunches(value.data))
    }, []);



    return (
        <div className={'launches'}>
            {launches.filter(value => value.launch_year !=='2020')
                .map((launch,index)=><Launch launch={launch} key={index}/>)}

        </div>
    );
}

export default Launches;