import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AboutUs from "./pages/About-us";
import ContactUs from "./pages/Contact-us";
import Home from "./pages/Home";
import {  ToastContainer } from 'react-toastify'
import {auth} from "./firebase"
import firebase from 'firebase'
import Header from "./components/Header"

function App() {
  const [loggedUid, setLoggedUid] = useState('')

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if(user){
        const idTokenResult = await user.getIdTokenResult()

        setLoggedUid(`${user?.uid}`)
      }
    })
    return () => unsubscribe()
  }, [])

 

  return (
    <div>
    <Router>
    <Header uid={loggedUid}/>
    <ToastContainer />
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/admin/:id' component={Home}/>
    <Route exact path='/about-us' component={AboutUs}/>
    <Route exact path='/contact-us' component={ContactUs}/>
    </Switch>
    </Router> 
    </div>

  );
}

export default App;
