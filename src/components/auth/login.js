import React, { useState } from 'react';
import axios from 'axios';
import {withRouter, Link} from 'react-router-dom';

const Login = ({ setCurrentUser, history }) => {
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
      const response = await axios.post('http://localhost:8000/accounts/login/', userData, { withCredentials: true });
      console.log(response);
      console.log(response.data.profile);
      const currentUser = response.data.profile;
      setCurrentUser(currentUser);
      console.log('react login last', currentUser)
      history.push('/');

    } catch (err) {
      console.log(err);
    }
  }

  // const handleLogout = async () => {
  //     const response = await axios.get('http://localhost:8000/accounts/logout/', { withCredentials: true });
  //     console.log(response);
  //     setCurrentUser(response.data.profile)
  // } 
  const getProfile = async () => {
      const response = await axios.get('http://localhost:8000/accounts/user/', { withCredentials: true });
      console.warn('yeah man')
      console.error('no man')
      console.log('%c response ', 'background: #222; color: #bada55', response);
  } 

  const { username, password } = userData;

  return (
    <section className="form">
      {/* <div>
        {error ? error : null}
      </div> */}
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={username} onChange={handleChange} placeholder="Username Address"  />
        <input type="password" name="password" value={password} onChange={handleChange} placeholder="Password" />
        <input type="submit" value="Submit" />
        {/* <Link to={"/"}><input type="submit" value="Submit" /></Link> */}
      </form>
      {/* <button onClick={getProfile}>profile</button> */}
    </section>
  )

}

export default withRouter(Login);