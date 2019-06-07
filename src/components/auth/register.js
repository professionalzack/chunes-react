import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [ errors, setErrors ] = useState([]);
  const [ newUser, setNewUser ] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    password2: ''
  });

  const handleChange = e => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(newUser);

    axios({
      method: 'post',
      url: 'http://localhost:8000/accounts/register/',
      data: newUser
    }).then(response=>console.log(response))

    // try {
    //   const result = await axios.post('http://localhost:8000/accounts/register/', newUser);
    //   console.log(result)
    // } catch(err) {
    //   console.log(err);
    //   setErrors(err.response.data.errors);
    // }

  }

  const { firstName, lastName, username, email, password, password2 } = newUser;

  return (
    <>
      <section className="form">
        { errors ? errors.map(error => `${error.message}. `) : null }
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstName" value={firstName} placeholder="First Name" onChange={handleChange} />
          <input type="text" name="lastName" value={lastName} placeholder="Last Name" onChange={handleChange} />
          <input type="text" name="username" value={username} placeholder="Username" onChange={handleChange} />
          <input type="email" name="email" value={email} placeholder="Email Address" onChange={handleChange} />
          <input type="password" name="password" value={password} placeholder="Password" onChange={handleChange} />
          <input type="password" name="password2" value={password2} placeholder="Confirm Password" onChange={handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </section>
    </>
  )
}

export default Register;