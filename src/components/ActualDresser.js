import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Notation, Midi, Editor } from 'react-abc';
import TuneShow from './TuneShow';
import ActualEdit from './ActualEdit';


const TuneDresser = (props) =>{
  const [tuneD, setTuneD] = useState()
  console.log(props.match.params.tuneId)
  console.log(props.match.params.tuneName)
  
  tuneD ? console.log('yea') : console.log('no')


  useEffect(() => {
    console.log('getting tune...')
    axios.get(`http://localhost:8000/api/v1/tunes/${props.match.params.tuneId}`, { withCredentials: true })
    .then(response=>{
      console.log('rdt',response.data.chune)
      setTuneD(response.data.chune)})
    .then(console.log('real D', tuneD))
  },[props.match])


  // console.log(tuneD)
  const tune_show = tuneD && tuneD.notato ? <ActualEdit tune={tuneD} currentUser={props.currentUser} notation={tuneD.notato.join('\n')} /> : <h2>Loading tune...</h2>;

  return (
    <>
     {tune_show}
    </>
)
}
export default withRouter(TuneDresser);