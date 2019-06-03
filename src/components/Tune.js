import React from 'react';
import { withRouter, Link } from 'react-router-dom';


const Tune = ({tune, number}) =>
  <li><Link to={"/tune/"+number}>
    <div className="tuneli">
      <h4>{tune.title}</h4>
    </div>
  </Link></li>

export default Tune;