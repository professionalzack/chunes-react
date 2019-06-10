import React, { useState } from 'react';
import { Editor } from 'react-abc';
import { Button, Form, TextArea } from 'semantic-ui-react'
import axios from 'axios'


export default ({tune, notation}) => {
  const [hork, setHork] = useState({tune:notation})
  const chnge = e => {
    setHork({
      tune:e.target.value
    })
  }

  const handleDelete = async e => {
    e.preventDefault();
    console.log('id', tune.id)
    const response = await axios.get(`http://localhost:8000/api/v1/tunes/delete/${tune.id}`, { withCredentials: true });
    alert('still working navigation, but it worked!' )

    console.log(response);
  }

  const sendTune = async e => {
    e.preventDefault();
    console.log('id', tune.id)
    console.log(hork)
    const response = await axios.post(`http://localhost:8000/api/v1/tunes/edit/${tune.id}`, hork, { withCredentials: true });
    alert('still working navigation, but it worked!' )
    console.log(response);
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
      <Button type='submit'>Save Tune</Button>
      </Form>
      <Button onClick={handleDelete}> delete tune </Button>
    </div>
  )
}