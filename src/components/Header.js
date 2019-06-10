import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'semantic-ui-react'

const Header = (props) => 
  <div className="header" style={{flex: 1, flexDirection: 'row'}}>
    <h1>"chunes"</h1>
    <nav>
      {!props.currentUser
     ?<>
        <Link to={"/login"}><Button>Lognin</Button></Link>
        <Link to={"/register"}><Button>Singh upp</Button></Link>

      </>
     :<> 
        <Link to={"/"} onClick={props.toggleLibrary}><Button>{props.currentUser.username}</Button></Link>
        <Link to={"/"} onClick={props.handleLogout}><Button>Logout</Button></Link>
        <Link to={"/tune/new"}><Button>New Tune</Button></Link>
      </>
      }
    </nav>

  </div>
;

export default Header;