import React from 'react';
import Pigeon from './Pigeon.jsx';

const Pigeons = ({sampleData}) => {
  console.log(sampleData, 'Pigeons')
  return (
    <div>
      {sampleData.map((data) => {
        return <Pigeon data={data} key={data._id}/>
      })}
    </div>
  )
}

export default Pigeons;