import React, { useState, useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import TuneIndex from './components/TuneIndex';
import TuneShow from './components/TuneShow';
import Header from './components/Header';
import Library from './components/Library';
import Register from './components/auth/register';
import axios from 'axios';
import Login from './components/auth/login';
import TuneDresser from './components/TuneDresser';
import ActualDresser from './components/ActualDresser';
import TuneForm from './components/TuneForm';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';


function App(async) {
  const [ currentUser, setCurrentUser ] = useState(null);
  const [ error, setError ] = useState(null);
  
  const [library, setLibrary] = useState({
    style: {left:'-20vw'},
  })

  const handleLogout = async () => {
   console.log('in the logoout')
   const response = await axios.get('http://localhost:8000/accounts/logout/', { withCredentials: true });
   console.log(response);
   setCurrentUser(response.data.profile)

  }

  const toggleLibrary = (e) =>{
    let tog = library.style.left === 0 ? {left:'-20vw'} : {left:0};
    setLibrary({
      ...library,
      style: tog
    })
  }

 

  useEffect(() => {
    axios.get('http://localhost:8000/accounts/user/', { withCredentials: true })
    .then(response=>response.status === 200 ? setCurrentUser(response.data.profile):console.error('dude no profies'))
  },[])

  
  return (
    <div className="App">
      {/* <h1>this is the app</h1> */}
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} handleLogout={handleLogout} toggleLibrary={toggleLibrary}/>
      <section className="nonheader">
      {currentUser 
       ?<div className="sidebar" style={library.style}>
          <div className="pull-tab" onClick={toggleLibrary}></div>
          <Library currentUser={currentUser} />
          {/* <Library className="sidebar" tunes={usertunes} /> */}
        </div>
       :<div></div>
      }
        {/* <button onClick={getTunes}>hey ther</button> */}
        <div className="main-area">
          <Switch>
            <Route exact path='/' render={props=><TuneIndex />}/>
            <Route path='/tune/:tuneId/:tuneName' render={props=><TuneDresser {...props} currentUser={currentUser} />}/>
            <Route path='/edit/:tuneId/:tuneName' render={props=><ActualDresser {...props} currentUser={currentUser} />}/>
            <Route path='/tune/new' render={props=><TuneForm {...props} currentUser={currentUser} />}/>
            <Route path='/register' component={Register} />
            <Route path='/login' render={(props) => <Login {...props} setCurrentUser={setCurrentUser} />} />          
          </Switch>
        </div>
      </section>
    </div>
  );
}

export default withRouter(App);
