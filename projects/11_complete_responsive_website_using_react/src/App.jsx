import React from "react";
// importing bootstrap 5
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// importing Js
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        {/* switch works like --> sabse pehle jo match kar jaaye , usko show kara do 
      , and here sabse pehle toh root route hi match hota hai , toh on every path it will just show homepage only
      , to overcome this use 'exact' keyword in attribute area. Now it willm atch the exact route. */}
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        {/* agar entered route in url yaha kisi se bhi match na kareim, then run this 
      Redirect functon. It will redirect to HomePage on every wrong route 
      just import it along with switch and route from react-route-dom.*/}

        <Redirect to="/" />

        {/* <Home /> */}
      </Switch>
      <Footer />
    </>
  );
};

export default App;
