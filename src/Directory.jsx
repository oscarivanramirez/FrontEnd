import React from 'react';
import {useParams} from 'react-router-dom';

export default function Directory(){
    let {genre} = useParams();
    return(
        <>
            {genre}
        </>
    )
}
