import React, { useState } from "react";
import NavBar from './components/NavBarComponent';
import Portfolio from './components/Portfolio';
import PostComponent from './components/PostComponent';
import About from './components/AboutComponent';
import AddPostComponent from './components/AddPostComponent';

import Contact from './components/Contact';
//import Google from './components/Google';
import Facebook from './components/Facebook';
import TestGoogle from './components/TestGoogle';
import GoogleFacebook from './components/GoogleFacebook';
import Paypal from './components/PayPal';
import Crud from './components/Crud';
//import GoogleBtn from './components/GoogleBtn';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/** Types of Components **/
//Hooks - Functions
//Class based
//JSX


//Main Component.
function App() {

  const [checkout, setCheckOut] = useState(false);

  return (
    <div>
      <NavBar />

      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <PostComponent />
            {/* <GoogleFacebook /> */}
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/add-post" exact>
            <AddPostComponent />
          </Route>

          <Route path="/Sign-in" exact>
            <TestGoogle />
          </Route>
          <Route path="/FacebookSign-in" exact>
            <Facebook />
          </Route>
          <Route path="/PayPal" exact>
            {/* <Paypal /> */}
           
            <div className="Center">
              {checkout ? (
                 <div>
                <Paypal />
                <Portfolio />
                </div>
              ) : (
                  <button
                    onClick={() => {
                      setCheckOut(true);
                    }}
                  >
                    Checkout
                  </button>
                )}
            </div> 
          </Route>
          <Route path="/User" exact>
            <Crud />
            <GoogleFacebook />
          </Route>
          <Route path="/Contact" exact>
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>
      {/* <Google /> */}
      {/* <GoogleBtn /> */}
    </div>
  );
}
//Publishing the component.
export default App;
