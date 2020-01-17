import React, { Component } from "react";
import axios from "axios";
import './App.css';
import AthleteCard from '../src/components/athleteCard';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component{
  constructor() {
    super();
    this.state = {
      athlete: []
  }
};

// componentDidMount -- axios call
componentDidMount() {
  axios
    .get('http://localhost:5000/api/players')
    .then(res => {
      this.setState ({
        athlete: res.data
      })
      console.log(res, 'this is the athlete data')
    })
    .catch( err => console.log(err))
}



render() {
  console.log(this.state.athlete, `athletes`);
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route>
      <AthleteCard athlete={this.state.athlete}/>
      </Route>
      </Switch>
    </div>
  )
}
}

export default App;


