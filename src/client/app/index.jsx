//import React, { Component } from 'react';
//import logo from './logo.svg';

import React from 'react';
import ReactDOM from 'react-dom';
//import {CodeMirror} from 'react-codemirror';

//var React = require('react');
import CodeMirror from './Codemirror.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {code: "// Code"};
  }
//  getInitialState() {
//    return {
//        code: "// Code",
//    };
//  }
  updateCode(newCode) {
    this.setState({
        code: newCode,
    });
  }
  render() {
    var options = {
        lineNumbers: true,
        mode: "javascript"
    };
    return( 
      <CodeMirror value={this.state.code} onChange={this.updateCode} options={options} />
    );
  }
}

//class App extends Component {
//  render() {
//    return (
//      <div className="App">
//        <div className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//          <h2>Welcome to React</h2>
//        </div>
//        <p className="App-intro">
//          To get started, edit <code>src/App.js</code> and save to reload.
//        </p>
//      </div>
//    );
//  }
//}

//export default App;

ReactDOM.render(<App />, document.getElementById('app'));