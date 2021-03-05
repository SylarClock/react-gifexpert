import { useState, useEffect } from 'react' 
import { getGifs } from '../helpers/getGifs';


 export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //los useEffects no pueden ser async porque esperan algo sincrono
    useEffect( () => {
        
        getGifs( category )
            .then( imgs => {

                setState({
                    data: imgs,
                    loading: false
                });

            });



    }, [category])

    
    return state;

 }