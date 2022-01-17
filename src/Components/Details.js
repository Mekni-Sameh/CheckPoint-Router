import React from 'react'

function Details({list,match }) {
    const found= list.find((el)=> el.id == match.params.id);
    
    return (
        <div>
            <h1 className="h1"> {found.name}</h1>
            <h1 className="h2"> {found.description}</h1>
            <img className="image" src={found.image} alt="image du film"/>
            <span> {found.trailer}</span> 
        </div>
    )
}

export default Details
