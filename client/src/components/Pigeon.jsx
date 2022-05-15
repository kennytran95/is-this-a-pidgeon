import React from 'react';

const Pigeon = ( {data} ) => {
  console.log(data, 'pigeon data')
  return(
    <img
      src={data.url}
      alt={data.name}
      crossOrigin='anonymous'
      className="img"
    />
  )
}

export default Pigeon;