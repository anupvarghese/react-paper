import React, { Component } from 'react';
import { Paper, Layer, Circle } from '../../lib/index';
import './App.css';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <div className="App-intro">
          <Paper>
            <Layer>
             <Circle radius={10} center={[10, 20]} fillColor="blue"></Circle>
            </Layer>
          </Paper>
        </div>
      </div>
    );
  }
}

export default App;
