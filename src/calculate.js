import React, {Component} from 'react';
import { BrowserRouter  as Router, Route,Switch, Link } from "react-router-dom";
import About from './about';
import { Button } from 'reactstrap';


class Calculate extends Component {
    constructor(props) {
      super(props);
    }


      componentDidMount = () => {
      }
      
    
      render = () => {
          return (
          <div>This is Calculate</div>
          );}
}

export default Calculate;
