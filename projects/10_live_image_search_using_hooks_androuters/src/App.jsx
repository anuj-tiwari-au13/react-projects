import React from 'react';
import {Route, Switch} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Error from './Error';
import Navbar from './Navbar';


const App = () => {
  return (

    <>
    <Navbar />
    <br /><br />
    <Switch>
    <Route exact path ='/' component={Home} />
    <Route exact path ='/about' component={About} />
    <Route exact path ='/contact' component={Contact} />
    <Route component={Error} />
    </Switch>
    </>);




    
};


export default App;
