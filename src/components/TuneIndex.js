import React from 'react';
import Tune from './Tune';

const TuneIndex = ({tunes}) => 
  <div className="tune-tainer">
    {tunes.map((tune,key)=>
      <Tune tune={tune} number={key} key={key} />
      )}
  </div>

export default TuneIndex;