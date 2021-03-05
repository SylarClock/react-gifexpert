import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


const GifExport = () =>{

    //const categories = ['Hunter x Hunter', 'Jujutsu kaisen', 'Mob psycho'];
    const [categories, setCategories] = useState(['Hunter x Hunter'])
    
    // const handleAdd = () => {
    //     //setCategories([...categories, 'One piece']);
    //     setCategories( cats => [...cats, 'One punch']);
    // }

    return (
        <>
            <h2>GifExport</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map( category =>
                        <GifGrid
                            key={category} 
                            category={category} 
                        />
                    )
                }
            </ol>
        </>
    )

}

export default GifExport