import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/bulma';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      veggies: [
        "Carrots",
        "Zucchinis",
        "Potato"
      ]
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));