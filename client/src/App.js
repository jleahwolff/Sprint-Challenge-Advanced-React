import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from "react-dom";
import axios from "axios";
import './App.css';


class App extends React.Component{
state = {
  athlete: [],
  searches: []
};

// componentDidMount -- axios call
componentDidMount() {
  axios
    .get('http://localhost:5000/api/players')
    .then(res => {
      this.setState ({
        athlete: res.data
        //---------- ADD THE 'SEARCHES' --------------
      })
      console.log(res, 'this is the athlete data')
    })
    .catch( err => console.log(err))
}



render() {
  console.log(this.state.athlete, `athletes`);
  return (
    <div className="App">


    </div>
  )
}


}

export default App;
