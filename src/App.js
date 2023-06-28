import React from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import Mainpage from './Database/Main';
import Login from './Database/Login';
import { auth } from './Database/Firebase';

function App() {
  const [user] = useAuthState(auth);
  return (
    user ? <Mainpage/> : <Login/>
  );
}

export default App;
