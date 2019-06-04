import React from 'react';
import Tune from './Tune';

const Library = ({tunes}) => {
  return (
    <>
      <h1>username</h1>
      <h3>profile link</h3>
      {tunes.map((tune,key)=>
      <Tune tune={tune} number={key} key={key} />
      )}
    </>
  )
};

export default Library;