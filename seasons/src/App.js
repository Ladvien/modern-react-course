import React from 'react';
import './App.css';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

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

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage} </div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }
    return <Spinner message="Please accept location request" />
  }

  render() {
    return ( 
      <div>
          {this.renderContent()}
      </div> 
    )
  }



}

export default App;