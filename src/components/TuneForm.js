import React, { useState } from 'react'
import axios from 'axios'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import TuneEdit from './TuneEdit';

const TuneForm = ({ currentUser }) => {
  const [upForm, setUpForm] = useState({
    T:'', M:'', L:'', R:'', K:''
  })
  const [editor, setEditor] = useState(null)
  const handleInput = e => {
    setUpForm({
      ...upForm,
      [e.target.name]: e.target.value
    });
  };

  const sendTune = async e => {
    e.preventDefault();
    console.log(editor)
    const request = {user:currentUser, newTune:editor}
    const response = await axios.post('http://localhost:8000/api/v1/tunes/new/', request, { withCredentials: true });
    console.log(response);
    // setCurrentUser(response.data.profile)
  }

  const handleSubmit = async e => {
    e.preventDefault();
    let notato = `T: ${upForm.T}
M: ${upForm.M}
L: ${upForm.L}
R: ${upForm.R}
K: ${upForm.K}
|:
    `
    console.log(notato)
    setEditor(<TuneEdit notation={notato} setEditor={setEditor} sendTune={sendTune} />)
  }

  return (
    <>
    <Form onSubmit={handleSubmit}>
      <Form.Group inline>
        <Form.Field>
          <label>Title</label>
          <input name="T"
            // placeholder='First Name'
            onChange={handleInput} />
        </Form.Field>
        <Form.Field>
          <label>Meter</label>
          <input name="M"
            placeholder='4/4'
            onChange={handleInput} />
        </Form.Field>
        <Form.Field>
          <label>Default Note Length</label>
          <input name="L"
            placeholder='1/8'
            onChange={handleInput} />
        </Form.Field>
      </Form.Group>
      <Form.Group inline>
        <Form.Field>
          <label>Rhythm</label>
          <input name="R"
            placeholder="bourrée"
            onChange={handleInput} />
        </Form.Field>
        <Form.Field>
          <label>Key</label>
          <input name="K"
            // placeholder='First Name'
            onChange={handleInput} />
        </Form.Field>
        <Button type='submit'>Go!</Button>
      </Form.Group>
    </Form>
    { editor }
    </>
  )
}
export default TuneForm