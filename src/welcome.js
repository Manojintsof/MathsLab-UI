import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter  as Router, Route,Switch, Link } from "react-router-dom";
import { Button } from 'reactstrap';
import Home from './Home';

import NavBar from './NavBar';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,    
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
class Welcome extends Component {
    constructor(props) {
      super(props);
    }

      componentDidMount = () => {
      
    }
      render = () => {
          return (
          <div>
              <NavBar></NavBar>

      {/* <Router>
       <div>
         */}
           {/* <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/about">About</Link>
    //         </li>
    //         <li>
    //           <Link to="/users">Users</Link>
    //         </li>
    //         <li>
    //         <Button color="danger">Alert!</Button>
    //         </li>
    //       </ul>
        
    //     {/* A <Switch> looks through its children <Route>s and
    //         renders the first one that matches the current URL. */}
    {/* //     <Switch>
    //       <Route path="/about">
    //         <About />
    //       </Route>
    //       <Route path="/users">
    //         <Users />
    //       </Route>
    //       <Route path="/">
    //         <Home />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router> */} 


{/* //---------------- */}


          </div>
          );
      }
    };
    function Home1() {
        return <Home></Home>;
      }
      
      function About() {
        return <h2>About</h2>;
      }
      
      function Users() {
        return <h2>Users</h2>;
      }
    export default Welcome;