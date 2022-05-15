import React from 'react';
import TestedEntry from './TestedEntry.jsx';

const Tested = ({tested}) => {
  return (
    <div>
      {tested.map((bird) => {
        return <TestedEntry bird={bird}/>
      })}
    </div>
  )
}

export default Tested;