import React, { useState, useEffect } from 'react';
import { Switch, withRouter } from 'react-router';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './containers/Home/Home';
import Singup from './containers/Signup/Signup';
import LogIn from './containers/LoginIn/LogIn';
import { Auth } from 'aws-amplify';
import UnauthenticatedRoute from './libs/UnauthenticatedRoute';
import AuthenticatedRoute from './libs/AuthenticatedRoute';

const App = (props) => {
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  const appProps = {
    userAuthenticated, 
    setUserAuthenticated
  };

  useEffect(() => {
    onLoad();
  }, [setUserAuthenticated]);

  const onLoad = async () => {
    try {
      await Auth.currentSession();
      setUserAuthenticated(true);
    } catch (e) {
      console.log(e.message);
      setUserAuthenticated(false);
    }
  }

   const logoutHandler = async () => {
    await Auth.signOut();
    setUserAuthenticated(false);

    props.history.push('/login');
  }

  return (
    <div className='App'>
      <Navbar logoutHandler={logoutHandler} userAuthenticated={userAuthenticated}/>
      <Switch>
        <AuthenticatedRoute path="/" exact component={Home} appProps={appProps}/>
        <UnauthenticatedRoute path="/login" exact component={LogIn} appProps={appProps}/>
        <UnauthenticatedRoute path="/signup" exact component={Singup} appProps={appProps}/>
      </Switch>
    </div>
  )
}

export default withRouter(App);