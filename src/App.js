import React from 'react';
import './App.css';
import Form from "./components/Form";
import Header from "./components/Header";
import Product from "./components/Product";
import DashBoard from "./components/DashBoard";
import axios from 'axios'

class App extends React.Component  {
  constructor(){
    super()

    this.state = {
      inventory: []
    }
  }

  componentDidMount(){
    axios.get("/api/inventory")
    .then((response) => {
      console.log("hi")
    })
  }

  render(){
  return (
    <div className="App">
      <Form />
      <Header />
      <Product />
      <DashBoard passToDashBoard={this.state.inventory}/>
      <button onClick={this.buttonClick}>Get data</button>
    </div>
  );
}
}
export default App;
