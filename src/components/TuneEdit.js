import React, { useState } from 'react';
import { Editor } from 'react-abc';
import { Button, Form, TextArea } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default ({notation, currentUser}) => {
  const [hork, setHork] = useState({tune:null})
  const chnge = e => {
    setHork({
      tune:e.target.value
    })
  }
  const sendTune = async e => {
    e.preventDefault();
    console.log(hork)
    // const request = {user:currentUser, newTune:hork}
    const response = await axios.post('http://localhost:8000/api/v1/tunes/new/', hork, { withCredentials: true });
    alert('still working navigation, but it worked (i think)!' )

    console.log(response);
    // setCurrentUser(response.data.profile)
  }

  return(
    <div>
      <Form onSubmit={sendTune}>

      <Form.Field
        id='form-textarea-control-opinion'
        control={TextArea}
        defaultValue={notation}
        onChange={chnge}
      />
      <Editor
        editArea={'form-textarea-control-opinion'}
      />
      {/* <Link to={"/"}><Button type='submit'>Save Tune</Button></Link> */}
      <Button type='submit'>Save Tune</Button>
      </Form>
    </div>
  )
}