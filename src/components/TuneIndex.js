import React, { useState, useEffect} from 'react';
import Tune from './Tune';
import axios from 'axios';



const TuneIndex = (async) => {
  const [tuneIndex, setTuneIndex] = useState(null)
  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/tunes', {withCredentials:true})
    // axios.get('http://localhost:8000/api/v1/tunes', {headers: {'X-Requested-With': 'XMLHttpRequest'}, withCredentials:true})
      .then(response=>{
        response.status === 200 
          ? setTuneIndex(response.data.tunes)
          :console.error('dude no auth')})
  },[])
  

  return (
  <div className="tune-tainer">
    {tuneIndex 
      ? tuneIndex.map((tune, key)=>
        <Tune tune={tune} key={key} />)
      : <h2>loading tunes...</h2>
    }
  </div>
  )
}
export default TuneIndex;