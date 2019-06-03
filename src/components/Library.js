import React from 'react';
import Tune from './Tune';

const Library = ({user}) => {
  return (
    <>
      <h1>{user.name}</h1>
      <h3>profile link</h3>
      {/* {user.tunes.map((tune,key)=>
      <Tune tune={tune} number={key} key={key} />
      )} */}
      {user.tunes}
    </>
  )
};

export default Library;