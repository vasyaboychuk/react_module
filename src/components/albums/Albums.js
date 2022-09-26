import {useEffect, useState} from "react";

import {apiService} from "../../services";
import Album from "../album/Album";


function Albums() {
    const [albums, setAlbums] = useState([]);

    useEffect(()=>{
        apiService.getAlbums().then(value => setAlbums(value.data));
    },[])

    return (
        <div>
            {albums.map(album=><Album key={album.id} album={album}/>)}

        </div>
    );
}

export default Albums;