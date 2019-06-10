import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Notation, Midi, Editor } from 'react-abc';
import TuneForm from './TuneForm';


const TuneShow = ({tune}) =>
{
  console.log(tune.notato)
  return(
    <div>
      <h1>{tune.title}</h1>
      <div className="tune-space">
        <Notation notation={tune.notato.join('\n')} 
          engraverParams={{ responsive: 'resize' }}
          renderParams={{ viewportHorizontal:true}}/>
        <Midi notation={tune.notato.join('\n')}
          midiParams={{qpm:120}} />
      </div>
    </div>
)}
export default withRouter(TuneShow);