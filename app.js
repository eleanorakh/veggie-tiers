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
  render() {
    return (
      <div className="content">
        <div className="container">
          <section className="section">
            <ul>
              {this.state.veggies.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <hr />
          <section className="section">
            <form className="form" id="addItemForm">
              <input
                type="text"
                className="input"
                id="addInput"
                placeholder="fuck yea veggies"
              />
              <button className="button is-info" onClick={this.addItem}>
                rate that bitch
              </button>
            </form>
          </section>
        </div>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));