import React from 'react';
import { Link } from 'react-router-dom';

import Tune from './Tune';

const Library = ({tunes}) => {
  return (
    <>
      <h1>username</h1>
      <h3>profile link</h3>
      {tunes.map((tune,key)=>
      <li key={key}><Link to={"/tune/"+KeyboardEvent}>
        <p>{tune.title}</p>
    </Link></li>
      // <Tune tune={tune} number={key} key={key} />
      )}
    </>
  )
};

export default Library;