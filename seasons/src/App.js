import React from 'react';
import './App.css';


class App extends React.Component {
  
  // This is the only time set the state directly.
  state = { lat: null, errorMessage: '' };
  
  // constructor(props) {
  //   super(props);
  //   // ❌ DO NOT LOAD DATA IN CONSTRUCTOR.❌
  // }

  componentDidMount() {
    // LOAD DATA HERE! 👍🏽
    window.navigator.geolocation.getCurrentPosition(
        position => this.setState({ lat: position.coords.latitude}),
        err => this.setState({ errorMessage: err.message })
    ); 
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage} </div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>
    }
    return <div>Loading...</div>
  }



}

export default App;