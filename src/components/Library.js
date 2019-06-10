import React,{ useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

import Tune from './Tune';

const Library = ({currentUser}) => {
  
  console.log(currentUser)
  return (
    <>
      <h1>{currentUser.first_name} {currentUser.last_name}</h1>
      <h3>@{currentUser.username}</h3>
      {currentUser.library.map((tune,key)=>
      tune.title ?
      <li key={key}><Link to={{pathname:`/tune/${tune.id}/${tune.title.replace(/'|"|\.|\,|\?|\!/g,'').replace(/ /g,'_')}`, tune:{tune:tune}}}>
        <p>{tune.title}</p>
    </Link><Link to={{pathname:`/edit/${tune.id}/${tune.title.replace(/'|"|\.|\,|\?|\!/g,'').replace(/ /g,'_')}`, tune:{tune:tune}}}>
        <p>[edit]</p>
    </Link></li>
      : ''
      )}
    </>
  )
};

export default Library;