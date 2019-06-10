import React from 'react';
import { withRouter, Link } from 'react-router-dom';


const Tune = ({tune}) =>
  <li><Link to={{pathname:`/tune/${tune.id}/${tune.title.replace(/'|"|\.|\,|\?|\!/g,'').replace(/ /g,'_')}`, tune:{tune:tune}}}>
    <div className="tuneli">
      <p>{tune.title}</p>
    </div>
  </Link></li>

export default Tune;