import React, { Component } from "react";
import axios from "axios";
import './App.css';


class App extends React.Component{
  constructor() {
    super();
    state = {
      athlete: []
  }
};

// componentDidMount -- axios call
componentDidMount() {
  axios
    .get('http://localhost:5000/api/players')
    .then(res => {
      this.setState ({
        athlete: res
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
