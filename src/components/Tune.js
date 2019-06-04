import React from 'react';
import { withRouter, Link } from 'react-router-dom';


const Tune = ({tune, number}) =>
  <li><Link to={"/tune/"+number}>
    <div className="tuneli">
      <p>{tune.title}</p>
    </div>
  </Link></li>

export default Tune;