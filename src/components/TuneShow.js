import React from 'react';
import Abcjs from 'react-abcjs'

const TuneShow = (props) =>
  <div>
    <h1>{props.tunes[props.match.params.tuneId].title}</h1>
    {/* {if props.edit} */}
    <div className="tune-space">
      <Abcjs
        abcNotation={props.tunes[props.match.params.tuneId].tunebody}
        parserParams={{}}
        engraverParams={{ responsive: 'resize' }}
        renderParams={{ viewportHorizontal: true }}
      />
    </div>

  </div>

export default TuneShow;