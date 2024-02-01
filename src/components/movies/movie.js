import React from 'react';

const Pokemon = ({pokemon}) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 mb-4 px-2">
      <div className="mb-8 text-white">
        <figure className="overflow-hidden mb-4">
          <img src={pokemon.url} alt={pokemon.name}/>
        </figure>

        <h2>{pokemon?.name ?? ''}</h2>
        <p>{pokemon?.overview ?? ''}</p>
      </div>
    </div>
  )
}

export default Pokemon