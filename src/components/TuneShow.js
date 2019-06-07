import React from 'react';
// import Abcjs from 'react-abcjs'
import { Notation, Midi, Editor } from 'react-abc';
const notato = `<score lang="ABC">
X:1
T:The Legacy Jig
M:6/8
L:1/8
R:jig
K:G
GFG BAB | gfg gab | GFG BAB | d2A AFD |
GFG BAB | gfg gab | age edB |1 dBA AFD :|2 dBA ABd |:
efe edB | dBA ABd | efe edB | gdB ABd |
efe edB | d2d def | gfe edB |1 dBA ABd :|2 dBA AFD |]
</score>`

const TuneShow = (props) =>
  <div>
    <h1>{props.tunes[props.match.params.tuneId].title}</h1>
    <div className="tune-space">
    {/* <Notation notation={props.tunes[props.match.params.tuneId].tunebody} engraverParams={{ responsive: 'resize' }}
        renderParams={{ viewportHorizontal: true }}/>
    <Midi notation={props.tunes[props.match.params.tuneId].tunebody} /> */}
    <div>
    <textarea
      // defaultValue={props.tunes[props.match.params.tuneId].tunebody}
      defaultValue={notato}
      style={{minHeight:'100px'}}
      id='3'
    />
    <Editor
      editArea='3'
      editable={true}
    />
  </div>
    {/* <Editor notation={props.tunes[props.match.params.tuneId].tunebody} /> */}
      {/* <Abcjs
        abcNotation={props.tunes[props.match.params.tuneId].tunebody}
        parserParams={{}}
        engraverParams={{ responsive: 'resize' }}
        renderParams={{ viewportHorizontal: true }}
      /> */}
    </div>

  </div>

export default TuneShow;