import {useEffect, useState} from "react";

import {CarForm, Cars} from "../../components";
import {carService} from "../../services";
import {useSearchParams} from "react-router-dom";


function CarsPage(props) {

    const [cars, setCars] = useState([]);

    const [prev,setPrev] = useState(null);
    const [next,setNext] = useState(null);

    const [query,setQuery] = useSearchParams({page:'1'});

    useEffect(()=>{
        carService.getAll(query.get('page')).then(({data: res}) => {
            setCars(res.data)
            setPrev(res.prev)
            setNext(res.next)


        })
        }
        , [query]);


    const prevPage = () => {
        setQuery(value => ({page: value.get('page') - 1}))
    };
    const nextPage=()=>{
        setQuery(value=>({page:+value.get('page')+1}))
    }

    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars cars={cars}/>
            <button disabled={!prev} onClick={prevPage}>prevPge</button>
            <button disabled={!next} onClick={nextPage}> nextPage</button>
        </div>
    )
}

export {CarsPage};