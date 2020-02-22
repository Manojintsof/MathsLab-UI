import React, {Component} from 'react';
import { BrowserRouter  as Router, Route,Switch, Link } from "react-router-dom";
import About from './about';
import { Button } from 'reactstrap';
import Calculate from './calculate';
import Home from './Home';



class NavBar extends Component {
    constructor(props) {
      super(props);
    }


      componentDidMount = () => {
      }
      
    
      render = () => {
          return (
          <div>
             <Router>
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="/">Home</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="/calculate">Calculate <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/about">About</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="/about" id="navbarDropdown" role="button" 
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                  <li class="nav-item">
                  <Button color="danger">Alert!</Button>
             
                  </li>
                </ul>
                
              </div>
            </nav>

            <Switch>
           <Route path="/about">
             <About />
           </Route>
           <Route path="/calculate">
             <Calculate />
           </Route>
           <Route path="/">
             <Home />
           </Route>
         </Switch>
    
            </Router>
            </div>);
}}


          export default NavBar;
