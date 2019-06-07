import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setCurrentUser, history }) => {
  const [ error, setError ] = useState(null);
  const [ userData, setUserData ] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/accounts/login/', userData);
      console.log(response);
      const currentUser = response.data.user;
      localStorage.currentUser = currentUser.id;
      setCurrentUser(currentUser);
      console.log('okay', currentUser)
      // history.push(`/profile/${currentUser}`);
    } catch (err) {
      console.log(err);
      // setError(err.response.data.error);
    }
  }

  const { username, password } = userData;

  return (
    <section className="form">
      <div>
        {error ? error : null}
      </div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={username} onChange={handleChange} placeholder="Username Address"  />
        <input type="password" name="password" value={password} onChange={handleChange} placeholder="Password" />
        <input type="submit" value="Submit" />
      </form>
    </section>
  )

}

export default Login;